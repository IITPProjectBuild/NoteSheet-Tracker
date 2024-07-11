import React from 'react';
import { useEffect, useState } from 'react';

const MyNoteSheets = ({ userId }) => {
    const [mynotes, setMynotes] = useState([]);

    useEffect(() => {
        fetchNoteSheets({ userId: userId });
    }, []);

    const fetchNoteSheets = async (data) => {
        let response = await fetch('http://localhost:3000/notesheets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        let result = await response.json();
        // console.log(result);
        setMynotes(result);
    };

    return (
        <>
            <div>These are your notesheets</div>
            <div>{mynotes.length == 0 && <div>No notesheets to display</div>}</div>
            {mynotes.map((item) => {
                return (
                    <div key={item._id}>
                        <div>{item.content}</div>
                        <div>{item.status}</div>
                        <div>{item.digitalSignatures}</div>
                        <div>{item.timestamp}</div>
                    </div>
                );
            })}
        </>
    );
};

export default MyNoteSheets;
