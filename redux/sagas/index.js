// here we manage multiple saga files && // 7th go to store.js & import rootSaga and call sagaMiddleware.run(rootSaga)
import { all } from "redux-saga/effects";
import loginSaga from "./loginSaga";

export default function* rootSaga() {
    yield all([loginSaga()]);
}


/*
Redux Saga is a middleware library used to allow a Redux store to interact with resources outside of itself asynchronously. 
This includes making HTTP requests to external services, accessing browser storage, and executing I/O operations. 

**In Redux saga, yield is a built in function which allows to use generator functions sequentially. 
    it helps us to call - put, all, takeEvery
*/