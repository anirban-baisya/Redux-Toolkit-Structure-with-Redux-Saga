//here we write action, reducer ; 3rd go to storeReducers & imports loginSlicer.reducer & mentioned it in reducers{... }
import { createSlice } from '@reduxjs/toolkit';

export const loginSlicer = createSlice({ //whole slicer
    name: 'login', //this is the name of reducer
    initialState: {
        isLoading: false,
        isError: false,
        data: {},  //it's store all the respons from the api ; if api respnose is comming in the from of array then i have to give [] & i have to change the thing in   onGetallCategoriesSubmit: (state) => { data: [] } ; other wise if the response comming in the from of {} then i have to change it in obj.
        error: {}
    },
    reducers: { //different actions
        onUserExistSubmit: (state) => {
            console.log(state)
            return { ...state, isLoading: true, isError: false }
        },
        onUserExistSubmitSuccess: (state, { payload }) => {
            console.log('fffff', state, payload)  //consolig the respons comming from sagas/loginSaga.js
            return { ...state, isLoading: false, isError: false, data: payload }
        },
        onUserExistSubmitError: (state, { payload }) => {
            return { ...state, isLoading: false, isError: true, error: payload }
        }
    }
})

export const { onUserExistSubmit, onUserExistSubmitSuccess, onUserExistSubmitError } = loginSlicer.actions; //this is action ; exporting all of the 3 actions from loginSlicer.actions= { onUserExistSubmit, ..... }

export default loginSlicer.reducer; // this is reducer (it alows us to grab the reducer)
