import React from 'react'
import { signInWithGoogle } from '../../config/firebase'
// import { auth } from '../../config/firebase'

const Login = () => {
    // const user = useAuth(auth)
    
    return (
        <>
            <div>Login</div>
            <button onClick={ signInWithGoogle } >Sign In With Google</button>
            <h1>hey </h1>
        </>
    )
}

export default Login