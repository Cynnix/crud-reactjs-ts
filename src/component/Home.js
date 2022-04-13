import React, { Fragment } from 'react';
import { Head, HEADING } from './Heading';
import { Userlist } from './Userlist';

export const HOME = () => {
    return (
        <Fragment>
            <div className="App">
                <div className="container mx-auto">
                    <h3 className="text-center  text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">CRUD</h3>
                    <HEADING />
                    <Userlist />
                </div>
            </div>
        </Fragment>
    )
}