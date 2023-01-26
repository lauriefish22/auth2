import { checkAuth, signOut } from '../fetch-utils.js';

const logOutButtonEl = document.getElementById('logout');

// use checkAuth function to redirect is user not authenticated
checkAuth();

// add event listener to the logout button and call logout
logOutButtonEl.addEventListener('click', () => {
    window.location.href = '../';
    signOut();
});
