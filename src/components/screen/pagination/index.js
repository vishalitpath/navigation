import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView, FlatList, Image, ActivityIndicator } from 'react-native';

import { styles } from "./styles";

function Pagination() {
    const [loading, setLoading] = useState(true);
    const [loadingExtraData, setLoadingExtraData] = useState(true);
    const [userData, setUserData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        LoadRandomData()
    }, [])
    function LoadRandomData() {
        fetch(`https://randomuser.me/api/?results=10&page=${page}`)
            .then(response => response.json())
            .then(responseJson => {
                page === 1 ? setUserData(responseJson.results) :
                    setUserData([...userData, ...responseJson.results]);
                setLoading(false);
                setLoadingExtraData(false);
            })
            .catch(error => {
                console.log('Error selecting random data: ' + error)
            })
    }
    const keyExtractor = (item, index) => item.email;
    const renderCustomItem = ({ item, index }) => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text>{item.gender}</Text>
                <Text>{item.name["first"]} {item.name["last"]}</Text>
                <Image source={{ uri: item.picture["medium"] }} style={{ width: 200, height: 200 }} />
            </View>
        )
    }
    const LoadMoreRandomData = () => {
        setLoadingExtraData(true)
        setPage(page + 1);
        LoadRandomData();
        console.log('page', page)
    }
    if (loading || loadingExtraData) {
        return (
            <ActivityIndicator style={{ flex: 1, justifyContent: 'center' }} size="large" color="#86aac2" />
        )
    }
    else {
        return (
            <View style={styles.container}>
                <Text>pagination</Text>
                <FlatList
                    data={userData}
                    style={{ width: 350, height: 800 }}
                    renderItem={renderCustomItem}
                    keyExtractor={keyExtractor}
                    onEndReachedThreshold={page}
                    onEndReached={LoadMoreRandomData}
                />
            </View>
        )
    }
}

export default Pagination
