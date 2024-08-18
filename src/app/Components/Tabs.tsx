'use client';
import * as React from 'react';
import { styled } from '@mui/system';
import { useState } from 'react';
import { Tabs, TabsList as BaseTabsList, TabPanel as BaseTabPanel, Tab as BaseTab } from '@mui/base';
import { buttonClasses } from '@mui/base/Button';
import { tabClasses } from '@mui/base/Tab';
import UseAutocomplete from './Autocomplete';
import { Notesdisplay } from './Notesdisplay';
import { Notesheetscompile1 } from './Notesheetscompile1';
import { Notesheetscompile2 } from './Notesheetcompile2';
import { Notesheetscompile3 } from './Notesheetcompile3';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function UnstyledTabsIntroduction({ onTabChange }) {
    const [id, setId] = useState(0);

    const handleTabChange = (event: any, newValue: React.SetStateAction<number>) => {
        setId(newValue);
        if (onTabChange) {
            onTabChange(newValue);
        }
    };
    return (
        <>
            <Tabs
                value={id}
                onChange={handleTabChange}
                aria-label="tabs"
                className="flex flex-col items-center justify-evenly mr-8"
            >
                <TabsList className="w-3/5 flex flex-col justify-evenly p-4 border-b">
                    <span className="w-full flex justify-evenly p-4 border-b">
                        <Tab value={0} className="flex-1 justify-around">
                            <p>Pending</p>
                        </Tab>
                        <Tab value={1} className="flex-1 justify-around">
                            <p>Approved</p>
                        </Tab>
                        <Tab value={2} className="flex-1 justify-around">
                            <p>Rejected</p>
                        </Tab>
                    </span>
                </TabsList>
                <TabPanel value={0} className="w-full p-4 mr-8">
                    <Notesheetscompile1 />
                </TabPanel>
                <TabPanel value={1} className="w-full p-4 mr-8">
                    <Notesheetscompile2 />
                </TabPanel>
                <TabPanel value={2} className="w-full p-4 mr-8">
                    <Notesheetscompile3 />
                </TabPanel>
            </Tabs>
        </>
    );
}

const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const Tab = styled(BaseTab)`
    font-family: 'IBM Plex Sans', sans-serif;
    color: #525f7f;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    background-color: transparent;
    width: 100%;
    padding: 10px 12px;
    margin: 6px;
    border: none;
    border-radius: 7px;
    display: flex;
    justify-content: center;

    &:hover {
        background-color: ${blue[400]};
    }

    &.${tabClasses.selected} {
        background-color: #fff;
        color: ${blue[600]};
        border-bottom: 5px solid blue;
    }

    &.${buttonClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const TabPanel = styled(BaseTabPanel)(
    ({ theme }) => `
        width: 100%;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        padding: 20px 12px;
        background: ${theme.palette.mode === 'dark' ? grey[100] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        border-radius: 12px;
        opacity: 0.6;
        `
);

const TabsList = styled(BaseTabsList)(
    ({ theme }) => `
    min-width: 400px;
    background-color: #fff;
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
    `
);
