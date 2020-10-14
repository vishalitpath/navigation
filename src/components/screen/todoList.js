import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

const TodoList = ({ todos, toggleTodo }) => (
    <View>
        {todos.map(todo =>
            <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                <Text>{todo.text}</Text>
            </TouchableOpacity>
            )}
    </View>
)
export default TodoList;