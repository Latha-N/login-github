const authInitialState = { register: false}

const userReducer = (state=authInitialState, action) => {
    switch(action.type){

        case 'LOGIN':{
            return {...state,...action.payload}
        }

        case 'LOGGED_IN':{
            return {...state}            
        }

        case 'LOGOUT':{
            return authInitialState
        }
        
        default:{
            return {...state}
        }
    }
}

export default userReducer