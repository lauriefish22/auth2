import { getUser, signOut, signUp, signIn, redirectIfLoggedIn } from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');

const signUpForm = document.getElementById('sign-up');

// Wire up sign in and sign up forms to supabase
// Redirect to /other-page on successful auth
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(signUpForm);
    alert(data.get('email', data.get('password')));
    await signUp(data.get('email'), data.get('password'));
    window.location.href = '../other-page';
});
// Redirect to /other-page when page loads if user is authenticated
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    alert(data.get('email', data.get('password')));
    await signIn(data.get('email'), data.get('password'));
    //await getUser(data.get('email'), data.get('password'));
    window.location.href = '../other-page';
    //if (user) {
    //redirectIfLoggedIn();
    //} else {
    // console.error(user);
    //}
});
redirectIfLoggedIn();
