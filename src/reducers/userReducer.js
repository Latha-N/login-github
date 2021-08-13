const authInitialState = {loggedIn: false, register: false}

const userReducer = (state=authInitialState, action) => {
    switch(action.type){

        case 'REGISTER':{
            return {...state, register: true}
        }

        case 'LOGIN':{
            return {...state,...action.payload, loggedIn: true}
        }

        case 'LOGGED_IN':{
            return {...state, loggedIn: true}            
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