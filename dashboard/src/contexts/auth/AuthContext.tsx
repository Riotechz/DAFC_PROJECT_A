import { Dispatch, createContext, useReducer, useEffect, PropsWithChildren } from "react";
import { AuthState } from "./types";
import { initialize, reducer } from "./reducers";
import authApi from "../../services/authApi";

export enum AuthActionType {
    INITALIZE = 'INITIALIZE',
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT'
}

export interface PayloadAction<T> {
    type: AuthActionType;
    payload: T;
}

export interface AuthContextType extends AuthState {
    dispatch: Dispatch<PayloadAction<AuthState>>
}

const initialState: AuthState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
}

export const AuthContext = createContext<AuthContextType>({
    ...initialState,
    dispatch: () => null,
});

export const AuthProvider = ({children}: PropsWithChildren) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(()=>{
        (async()=>{
            const accessToken = localStorage.getItem('ACCESS_TOKEN')
            if(!accessToken){
                return dispatch(initialize({
                    isAuthenticated: false,
                    user: null
                }))}
                
            try {
                const user = await authApi.getProfile()
                dispatch(initialize({isAuthenticated: true, user}))
            } catch {
                dispatch(initialize({ isAuthenticated: false, user: null}))
            }
        })()
    },[])
    return (
        <AuthContext.Provider value={{ ...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
} 
