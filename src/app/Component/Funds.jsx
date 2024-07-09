"use client"
import { useState } from "react";
import React from "react";

function Funds() {
    const [budget, setBudget] = useState(0);
    const [funds, setFunds] = useState(0);

    const handleChange = (event) => {
        setBudget(parseFloat(event.target.value)); // Parse input as float
    };

    const handleChange1 = (event) => {
        setFunds(parseFloat(event.target.value)); // Parse input as float
    };

    // Calculate percentage based on budget and funds
    const total = budget + funds;
    const budgetPercentage = (budget / total) * 360; // Calculate degrees for budget
    const fundsPercentage = (1) * 360; // Calculate degrees for funds
    const disp1 = Math.floor((budgetPercentage / 360) * 100.0);
    const disp2 = 100 - disp1;

    return (
        <div className="flex flex-col items-center p-4">
            <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                </svg>
                <p className="ml-2 text-lg font-bold">FUNDS</p>
            </div>

            <input type="number" onChange={handleChange} placeholder="BUDGET" className="mb-2 p-2 border rounded" />
            <input type="number" onChange={handleChange1} placeholder="FUNDS" className="mb-4 p-2 border rounded" />

            <div className="w-44 h-44 rounded-full bg-[conic-gradient(from_0deg,_#ff264a_0deg_50deg,_#feec1e_50deg_360deg)]" style={{ background: `conic-gradient(from 0deg, #ff264a 0deg ${budgetPercentage}deg, #feec1e ${budgetPercentage}deg ${budgetPercentage + fundsPercentage}deg)` }}></div>
            
            <div className="mt-4">
                <p className="text-red-600 font-medium text-lg">BUDGET: {disp1}%</p>
                <p className="text-yellow-600 font-medium text-lg">FUNDS: {disp2}%</p>
            </div>
        </div>
    );
}

export default Funds;
