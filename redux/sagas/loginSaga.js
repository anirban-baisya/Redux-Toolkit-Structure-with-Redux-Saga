import { call, put, takeLatest } from 'redux-saga/effects';
import { onUserExistSubmit, onUserExistSubmitSuccess, onUserExistSubmitError } from "../slicers/loginSlicer";
import { callLoginApi } from './../../services/loginApi';

function* doUserExists({ payload }) {
    // const { query } = payload;
    // console.log(query)
    if (payload) {
        try {
            const userExistResponse = yield call(callLoginApi, payload);
            console.log("-=-=-= >>> ", userExistResponse) //after receving response from api we have to call the onUserExistSubmitSuccess(userExistResponse) action 
            yield put(onUserExistSubmitSuccess(userExistResponse)) //after passing we can check it in slicer/loginSlicer.js & console it
        } catch {
            const message = 'something went wrong';
            yield put(onUserExistSubmitError({ message }))
        }
    }
}

export default function* loginSaga() { //this is a saga watcher function 
    yield takeLatest(onUserExistSubmit.type, doUserExists);
}

/*
call :- allows us to call urls && apis
put :-  allows us to call our actions
*/