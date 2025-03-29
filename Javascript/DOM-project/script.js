function signUp(e){
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username==='' || password===''){
        alert('All fields required');
        return;
    }

    let user = {username, password};

    localStorage.setItem('user', JSON.stringify(user));
    alert('Sign Up successful')
    window.location.href = 'Login.html';
}