import { action } from 'typesafe-actions';
import { UsersTypes, User } from './types';

export const addUser = (data: User) => action(UsersTypes.ADD_USER, data);
export const removeUser = (data: string) => action(UsersTypes.REMOVE_USER, data);
export const setUserToEdit = (data: User) => action(UsersTypes.SET_USER_TO_EDIT, data);
export const editUser = (data: User) => action(UsersTypes.EDIT_USER, data);