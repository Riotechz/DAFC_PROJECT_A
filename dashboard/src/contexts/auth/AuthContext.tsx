import { Dispatch } from "react";
import { AuthState } from "./types";

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