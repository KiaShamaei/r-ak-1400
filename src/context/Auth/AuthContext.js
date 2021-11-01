import React from 'react'
const AuthContext = React.createContext({
    isLoggin : false ,
    handleLogin : ()=>{} ,
    accessToken : ""
})
export const AuthProvider = AuthContext.Provider
export default AuthContext