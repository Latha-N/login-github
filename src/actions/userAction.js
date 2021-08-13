

export const asyncLoginUser = (data,history) => {
    return (dispatch) => {
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



export const loginUser = (data) => {
    return {
        type: 'LOGIN',
        payload: data
    }
}


