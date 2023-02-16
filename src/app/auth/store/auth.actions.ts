import { createAction, props } from "@ngrx/store";
import { User } from "./model";

export const loginAction = createAction(
    "[Auth] Login",
    props<{user: User}>()
);

export const logoutAction = createAction(
    "[Auth] Logout"
);
