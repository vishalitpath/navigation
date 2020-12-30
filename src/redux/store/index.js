import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk'
import reducer from '../reducers/index';
import cartItems from '../reducers/cartItems';
import addName from '../../components/screen/addName/addNameReducer';

// import quoteReducer from './reducers/quotesReducer';

// const rootReducer = () => {
//     combineReducers
// }
// export default store = createStore(cartItems)

// const store = createStore(cartItems)



//----------
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(rootSagas);

export default store