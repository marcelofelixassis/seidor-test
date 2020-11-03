import { Reducer } from 'redux';
import { UsersState, UsersTypes } from './types';
import { apiResponse } from '../../../shared/consts';

const INITIAL_STATE: UsersState = {
    data: apiResponse,
    userToEdit: null,
};

const reducer: Reducer<UsersState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UsersTypes.ADD_USER:
            return { ...state, data: [...state.data, action.payload] };
        case UsersTypes.REMOVE_USER:
            return { ...state, data: state.data.filter(item => item.cpf !== action.payload) };
        case UsersTypes.SET_USER_TO_EDIT:
            return { ...state, userToEdit: action.payload };
        case UsersTypes.EDIT_USER: {
            const list = state.data;
            const index = list.findIndex(item => item.cpf === action.payload.cpf);
            list[index] = action.payload;
            return { ...state, data: list};
        }
        default:
            return state;
    }
}

export default reducer;