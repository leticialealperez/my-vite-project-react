import React from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
	selectUserLogged,
	setUserLogged,
} from '../../store/modules/userLogged/userLoggedSlice';

const Welcome: React.FC = () => {
	const dispatch = useAppDispatch();
	const usuarioLogado = useAppSelector(selectUserLogged);

	const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
		// toda lógica para percorrer a lista de usuarios da app
		// e encontrar 1 usuario que atenda a condicao

		// encontrou?
		// seta o usuario logado no estado global e fz o navigate
		// console.log(ev.currentTarget.email.value);
		// console.log(ev.currentTarget.password.value);
		dispatch(
			setUserLogged({
				email: ev.currentTarget.email.value,
				password: ev.currentTarget.password.value,
			}),
		);
	};

	return (
		<div className="App">
			{usuarioLogado.isLogged && <p>Bem vindo, {usuarioLogado.email}</p>}
			<div>
				<form onSubmit={handleSubmit}>
					<input type="text" id="email" name="email" />
					<input type="text" id="password" name="password" />
					<input type="submit" value="Logar" />
				</form>
			</div>
			<h1>Template app react com Typescript e React Router Dom</h1>
		</div>
	);
};

export default Welcome;
