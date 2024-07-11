import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const Home = (userId) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    // let userId = '1234';

    const createNewUser = async (data) => {
        let response = await fetch('http://localhost:3000/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        let result = await response.text();
        console.log(result);
    };

    const createNewNoteSheet = async () => {
        // console.log(userId);
        let response = await fetch('http://localhost:3000/newnotesheet', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userId),
        });
        let result = await response.text();
        console.log(result);
    };

    const fetchNoteSheets = async (data) => {
        let response = await fetch('http://localhost:3000/newnotesheet', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        let result = await response.json();
        console.log(result);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(() => createNewNoteSheet())}>
                <button disabled={isSubmitting} type="submit">
                    New NoteSheet
                </button>
            </form>
            {/* <form
                onSubmit={handleSubmit(() =>
                    createNewUser({ userName: 'Arpit Raj', purpose: 'createNewUser', email: 'arpitraj@gmail.com' })
                )}
            >
                <button disabled={isSubmitting} type="submit">
                    New User
                </button>
            </form> */}
            {/* <a href="/notesheets">
                <form onSubmit={handleSubmit(() => fetchNoteSheets({ userId, purpose: 'fetchNoteSheets' }))}>
                    <button disabled={isSubmitting} type="submit">
                        Fetch NoteSheet
                    </button>
                </form>
            </a> */}

            <NavLink
                className={(e) => {
                    return e.isActive ? 'red' : '';
                }}
                to="/mynotesheets"
            >
                my notesheets
            </NavLink>
        </div>
    );
};

export default Home;
