import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from '../reducers/index';

const composeEnhancers = compose;
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;
