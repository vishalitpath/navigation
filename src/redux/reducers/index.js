import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import cartItems from './cartItems';

export default combineReducers({
    todos,
    visibilityFilter,
    cartItems: cartItems
})