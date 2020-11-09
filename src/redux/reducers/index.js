import todos from './todos';
import visibilityFilter from './visibilityFilter';
import cartItems from './cartItems';
import addName from '../../components/screen/addName/addNameReducer';

 const reducer = combineReducers({
    cartItems: cartItems,
    addName: addName
});

export default reducer