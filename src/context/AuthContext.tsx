
import React, { useReducer } from 'react';
import { createContext } from 'react'
import { authReducer } from './authReducer';


//definir como luce, que informacion que tendre aqui 
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}


// Estado inicial 
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

//interfaz que usaremos para decirle como luce y que expone el contexto
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logout: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUserName: (iconName: string) => void;
}

//Se crea el context
export const AuthContext = createContext({} as AuthContextProps)


//componente  provedor del estado 
export const AuthProvider = ({children }: any ) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({type: 'signIn'})
    }   
    const logout = () => {
        dispatch({type: 'logout', payload: authInitialState })
    }
    const changeFavoriteIcon = (iconName: string) => {
        dispatch({type: 'changeFavIcon', payload: iconName})
    }
    const changeUserName  = (name: string) => {
        dispatch({type: 'changeUserName', payload: name  })
    }



    return (
        <AuthContext.Provider value={{ 
            authState,
            signIn,
            logout,
            changeFavoriteIcon,
            changeUserName,
        }} >
            { children }
        </AuthContext.Provider>
    );
}


