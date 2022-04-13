import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';

export const USERLIST = () => {
    const { USERS, REMOVEUSERS, EDITUSERS } = useContext(GlobalContext);
    return {
        <Fragment>
            {}
    }
}