import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '.';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// useDispatch - criar um disparador de ações para que eu consiga executar a modificação de um estado global
// const dispatch = useAppDispatch()
// dispatch(atualizarContato({ ... }))

// useSelector - responsavel pela leitura de um determinado valor/propriedade da nossa store
//  const allPosts = useAppSelector(selectUserLogged);
// const allUsers = useAppSelector((state) => state.users);
