export enum UsersActionTypes {
	FETCH_USERS = 'FETCH_USERS',
	FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
	FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUsersAction {
	type: UsersActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction {
	type: UsersActionTypes.FETCH_USERS_SUCCESS;
	payload: any[];
}
interface FetchUsersErrorAction {
	type: UsersActionTypes.FETCH_USERS_ERROR;
	payload: string;
}
export type UsersAction =
	| FetchUsersAction
	| FetchUsersSuccessAction
	| FetchUsersErrorAction;

export interface UsersState {
	loading: boolean;
	error: null | string;
	users: any[];
}
