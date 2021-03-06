import axios from 'axios'
import {React, useState} from 'react';
import { asyncLoginUser } from './actions/userAction'
import { useDispatch } from 'react-redux'
import { FaGithub } from 'react-icons/fa';


const Login = (props) => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [user, setUser] = useState(null)

    const submitForm = (e)=>{
        e.preventDefault()
        axios.get(`https://api.github.com/users/${username}`)
        .then((response)=>{
            setUser(response.data)
            dispatch(asyncLoginUser(response.data))
        }).catch(err => console.log(err))

    }
    const handleChange = (e) =>{
        setUsername(e.target.value)
    }

    return (
        <div>
            {user?.login ?<div> <h2>Success !!!</h2><p>{user.name}</p> <img  src={`${user.avatar_url}`} alt="some"/> </div>:
            (<><h2>Login</h2>
            <form onSubmit={submitForm}>
            <label>Username</label>
            <input type="text" onChange={handleChange} value={username}/>
            <input type="submit" value='Github auth' />
            <FaGithub />
            </form></>) }
        </div>
    )
}
export default Login