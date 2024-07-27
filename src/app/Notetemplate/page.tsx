'use client';
import React, { useState, useContext } from 'react';
import Notesheet from '../Component/Notesheet.jsx';
import { token } from '../context/context.js';

export default function page() {
    const [email, setEmail] = useState('arpitraj@gmail.com');

    return (
        <>
            <token.Provider value={email}>
                <Notesheet />
            </token.Provider>
        </>
    );
}
