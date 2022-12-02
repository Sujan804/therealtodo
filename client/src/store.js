// import { createStore } from "redux";
// import counterReducer from "./services/reducers/counterReducers";
// const store = createStore(counterReducer);
// export default store;

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import todosReducers from "./services-api/reducers/todosReducers";

const store = createStore(todosReducers,applyMiddleware(thunk));

export default store