import React from 'react';
import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import MyNoteSheets from './components/MyNoteSheets';

function App() {
    const [userId, setUserId] = useState('');

    let userInfo = { token: 'arpitraj@gmail.com' };

    useEffect(() => {
        getUser(userInfo);
    }, []);

    const getUser = async (userInfo) => {
        let response = await fetch('http://localhost:3000/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInfo),
        });
        console.log(userInfo);
        let r = await response.text();
        setUserId(r);
    };
    // const userId = '1234';
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <>
                    <Home userId={userId} />
                </>
            ),
        },
        {
            path: '/mynotesheets',
            element: (
                <>
                    <MyNoteSheets userId={userId} />
                </>
            ),
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
