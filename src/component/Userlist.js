import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';

export const USERLIST = () => {
    const { USERS, REMOVE_USERS, EDIT_USERS } = useContext(GlobalContext);
    return {
        <Fragment>
            {USERS.length > 0 ? <Fragment>
                {USERS.map(user => (
                    <div className="flex items-center bg-gray-100 mb-10 shadow" key={user.id}>
                        <div className="flex-auto text-left px-4 py-2 m-2"></div>
                            <p className="text-gray-900 leading-none">{user.name}</p>
                    </div>
                ))}
                </Fragment>: <p className="text-center bg-gray-100 text-gray-500 py-5">No data</p> }
    }
}