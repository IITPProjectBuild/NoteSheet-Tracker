import { redirect } from 'next/dist/server/api-utils/index.js';
import { validateToken } from '../backend/services/authentication.js';

function checkForAuthenticationCookie(cookieName) {
    return (req, res, next) => {
        const tokenCookieValue = req.cookies;
        if (!tokenCookieValue) {
            res.redirect('/login');
            return next();
        }

        try {
            const userPayload = validateToken(tokenCookieValue);
            console.log(userPayload);
            req.user = userPayload;
        } catch (error) {}
        return next();
    };
}

export { checkForAuthenticationCookie };
