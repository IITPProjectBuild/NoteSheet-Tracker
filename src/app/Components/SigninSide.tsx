'use client';
import * as React from 'react';
import { useState } from 'react';
// import { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Calistoga } from 'next/font/google';
// import { convertLength } from '@mui/material/styles/cssUtils';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignInSide() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const userdata = {
            email: data.get('email'),
            pass: data.get('password'),
        };

        try {
            // let redirectUrl = new URLSearchParams(window.location.search).get('redirect') || '/HomePage';
            let response = await fetch('http://localhost:3000/verifyuser', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userdata),
            });

            let result = await response.text();

            if (response.ok) {
                // window.location.href = redirectUrl;
                window.location.href = '/HomePage';
            } else {
                alert('Login failed: ' + result);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred');
        }
    };

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url("/image.png")',

                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'left',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'evenly',
                                alignItems: 'center',
                            }}
                        >
                            <img src="/iitp logo.png" alt="" />

                            <Typography component="h1" variant="h5" className="rounded-2xl hover:shadow-2xl">
                                Sign In
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    autoComplete="current-password"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link
                                            href="#"
                                            className="hover:border-b hover:border-blue-600 hover:text-blue-500"
                                        >
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item></Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    );
}
