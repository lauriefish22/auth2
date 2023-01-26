import { checkAuth, signOut } from './fetch-utils.js';

// add event listener to the logout button and call logout
const signInForm = document.getElementById('sign-in');
const logOutButtonEl = document.getElementById('logout');

// use checkAuth function to redirect is user not authenticated
checkAuth();

// add event listener to the logout button and call logout
logOutButtonEl.addEventListener('click', () => {
    signOut();
});
