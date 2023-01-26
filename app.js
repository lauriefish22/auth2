import { getUser, signOut, signUp, signIn } from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');

const signUpForm = document.getElementById('sign-up');
const authButtonEl = document.querySelector('#auth-button');
const createButtonEl = document.querySelector('#create-button');

// Wire up sign in and sign up forms to supabase
// Redirect to /other-page on successful auth
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault;
    const data = new FormData(signUpForm);
    await signUp(data.get('email'), data.get('password'));
});
// Redirect to /other-page when page loads if user is authenticated
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault;
    const data = new FormData(signInForm);
    await signIn(data.get('email'), data.get('password'));
    window.location.href = '../other-page';
});
