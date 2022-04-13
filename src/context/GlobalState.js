import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const INITIAL_STATE = {
    users: [
        { id: 1, name: 'Paul Tito Rebollo', location: 'Calamba, Laguna', designation: 'Intern' }
    ]
}

export const GlobalContext = createContext(INITIAL_STATE);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

    function deleteUser(id) {
        dispatch({
            type: 'REMOVE_EMPLOYEE',
            payload: id
        });
    };

    function addUser(users) {
        dispatch({
            type: 'ADD_EMPLOYEES',
            payload: users
        });
    };

    function editUser(users) {
        dispatch({
            type: 'EDIT_EMPLOYEE',
            payload: users
        });
    };

    return (<GlobalContext.Provider value={{
        users: state.users,
        deleteUser,
        addUser,
        editUser
    }}>
        {children}
        </GlobalContext.Provider>);
}