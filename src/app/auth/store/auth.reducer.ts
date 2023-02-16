import {
    createReducer,
    on
} from '@ngrx/store';
import { AuthActions } from './auth-action-types';
import { User } from './model';


export interface AuthState {
    user: User
}

export const initialAuthState: AuthState = {
    user: undefined
}

export const authReducer = createReducer(
    initialAuthState,
    on(AuthActions.loginAction, (state, action) => {
        return {
            user: action.user
        }
    }),

    on(AuthActions.logoutAction, (state, action) => {
        return {
            user: undefined
        }
    })
)
