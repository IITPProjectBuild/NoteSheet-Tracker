import { Pagination } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

export const Paginatedlist = () => {
    return (
        <>
            <div>
                <Stack spacing={2}>
                    <Pagination count={10} shape="rounded" />
                </Stack>
            </div>
        </>
    );
};
