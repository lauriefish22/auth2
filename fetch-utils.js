// Enter Supabase Information
const SUPABASE_URL = 'https://jmdfixempqwyhkrrtcbj.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZGZpeGVtcHF3eWhrcnJ0Y2JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ1NzUzOTYsImV4cCI6MTk5MDE1MTM5Nn0.6kedsKVXsFKvx_P4MONEnWJ_b7rHQWInoK8x8eST7_w';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signIn(email, password) {
    const { data } = await supabase.auth.signIn({
        email: email,
        password: password,
    });
}

export async function signUp(email, password) {
    const { data } = await client.auth.signUp({
        email: email,
        password: password,
    });

    return data;
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('/other');
}

export async function redirectIfLoggedIn() {}

export async function signOut() {
    const response = await client.auth.signOut();

    return response.error;
}
