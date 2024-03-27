import { PayloadAction } from "./AuthContext";
import { AuthState } from "./types";

export interface ReducerHandler {
    INITIALIZE(state: AuthState, action: PayloadAction<AuthState>): AuthState;
    LOGIN(state: AuthState, action: PayloadAction<AuthState>): AuthState;
    LOGOUT(state: AuthState): AuthState;
}

const reducerHandlers : ReducerHandler = {
    INITIALIZE(state: AuthState, actuon: PayloadAction<AuthState>): AuthState{
        const { isAuthenticated, user } = actuon.payload;

        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user,
        };
    },

    LOGIN(state: AuthState, action: PayloadAction<AuthState>): AuthState{
        const { user } = action.payload;
        return {
            ...state,
            isAuthenticated: true,
            user,
        }
    },
    LOGOUT(state: AuthState): AuthState{
        return {
            ...state,
            isAuthenticated: false,
            user: null,
        }
    },

}