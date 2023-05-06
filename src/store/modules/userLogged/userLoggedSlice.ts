import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../..';

// OBS: definição e gerenciamento de um dado que seja do formato !== de ARRAY

// Define a type for the slice state
interface UserLoggedState {
	email: string;
	password: string;
	isLogged: boolean;
}

type SetUserLoggedType = Omit<UserLoggedState, 'isLogged'>;

// Define the initial state using that type
const initialState: UserLoggedState = {
	email: '',
	password: '',
	isLogged: false,
};

// um slice é o misto entre REDUCER + ACTIONS
export const userLoggedSlice = createSlice({
	name: 'userLogged',
	initialState,
	reducers: {
		setUserLogged: (state, action: PayloadAction<SetUserLoggedType>) => {
			// mudar o usuario logado preenchendo os valores de email, senha e setando isLogged para true

			return {
				email: action.payload.email,
				password: action.payload.password,
				isLogged: true,
			};
		},

		removeUserLogged: (state) => {
			return initialState;
		},
	},
});

export const { setUserLogged, removeUserLogged } = userLoggedSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUserLogged = (state: RootState) => state.userLogged;

export default userLoggedSlice.reducer;
