import React, { useState, createContext } from 'react' 
import * as firebase from "firebase";

export const AutheticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    return (
        <AuthenticationContextProvider value={{
            user,
            isLoading,
            error,
            onLogin: 
        }}>
            {children}
        </AuthenticationContextProvider>
    )
}