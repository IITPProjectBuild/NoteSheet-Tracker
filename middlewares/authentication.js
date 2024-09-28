import { redirect } from 'next/dist/server/api-utils/index.js';
import { validateToken } from '../backend/services/authentication.js';

function checkForAuthenticationCookie(cookieName) {
    console.log('IN middleware ', cookieName);
    return (req, res, next) => {
        console.log('Raw Cookie Header:', req.headers.cookie);
        console.log('Parsed Cookies:', req.cookies);

        const tokenCookieValue = req.cookies[cookieName];
        console.log('Token:', tokenCookieValue);
        console.log(req.cookie);

        // No token found, redirect to login and preserve original URL
        if (!tokenCookieValue) {
            // const redirectUrl = encodeURIComponent(req.originalUrl);
            console.log('No token found, redirecting to login');
            next();
            // return res.redirect(`/login?redirect=${redirectUrl}`);
        }

        try {
            const userPayload = validateToken(tokenCookieValue);
            console.log('Token is valid:', userPayload);

            req.user = userPayload;
            next();
        } catch (error) {
            console.log('Invalid token in middleware');
            // const redirectUrl = encodeURIComponent(req.originalUrl);
            // return res.redirect(`/login?redirect=${redirectUrl}`);
        }
    };
}

export { checkForAuthenticationCookie };
