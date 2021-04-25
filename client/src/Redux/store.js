import { createStore ,combineReducers} from 'redux';
import userReducer from './Reducers/user'
import imageReducer from './Reducers/image'

const reducer = combineReducers({userReducer,imageReducer });

const store = createStore(reducer);
window.store = store;
export default store;