
import axios from "axios";
// import { asyncGetAccDetails } from "./accountDetailsActions";


export const asyncRegisterUser = (formData) => {
    return (dispatch) => {
        axios.post('/users/register', formData)
            .then((response)=>{
                const result = response.data
                console.log(result)
                if(result.hasOwnProperty('errmsg')){ // mongo error recheck!!
                    alert(result.errmsg)
                } else {
                    dispatch(registerUser())
                }
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}

export const asyncLoginUser = (data,history) => {
    return (dispatch) => {
        // axios.post('/users/login', formData)
        //     .then((response)=>{
        //         const result = response.data
        //         if(result.hasOwnProperty('errors')){
        //             // alert(result.errors)
        //             handleServerErrors(result)
        //         } else {
        //             localStorage.setItem('token', result.token)
        //              // pick up token for axios instance 
        //         }
        //     })
        //     .catch((err)=>{
        //         alert(err.message)
        //     })
        // console.log(data)
        if(data.name){
            
            dispatch(loginUser(data))
            history.push('/dashboard')
        }else{
            alert('No')
        }
    }
}

export const resetState = () => {
    return {
        type: 'LOGOUT'
    }
}

export const setLoggedIn = () => {
    return {
        type: 'LOGGED_IN'
    }
}

export const loginUser = (data) => {
    return {
        type: 'LOGIN',
        payload: data
    }
}

export const registerUser = () => {
    return {
        type: 'REGISTER'
    }
}
