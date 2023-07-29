import { UsersAction, UsersActionTypes } from '../../types/users';
import { Dispatch } from 'redux';
import axios from 'axios';

export const fetchUsers = () => {
	return async (dispatch: Dispatch<UsersAction>) => {
		try {
			dispatch({ type: UsersActionTypes.FETCH_USERS });
			const res = await axios.get('https://jsonplaceholder.typicode.com/users');
			dispatch({
				type: UsersActionTypes.FETCH_USERS_SUCCESS,
				payload: res.data,
			});
		} catch (e) {
			dispatch({
				type: UsersActionTypes.FETCH_USERS_ERROR,
				payload: 'error: fetchUsers',
			});
		}
	};
};
