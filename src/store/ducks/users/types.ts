export enum UsersTypes {
    ADD_USER = '@users/ADD_USER',
    REMOVE_USER = '@users/REMOVE_USER',
    SET_USER_TO_EDIT = '@users/SET_USER_TO_EDIT',
    EDIT_USER = '@users/EDIT_USER',
}

export interface User {
    name: string,
    cpf: string,
    salary: number,
    discount: number,
    dependents: number,
}

export interface UsersState {
    data: User[],
    userToEdit: User | null,
}