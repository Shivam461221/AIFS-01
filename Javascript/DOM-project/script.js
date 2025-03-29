function signUp(e){
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username==='' || password===''){
        alert('All fields required');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];    

    let existingUser = users.find(user=>user.username===username);  //null

    if(existingUser){
        alert('User already exist');
        return;
    }

    let newUser = {username, password};

    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));
    alert('Sign Up successful')
    window.location.href = 'Login.html';
}

function login(e){
  e.preventDefault(); 
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  if(username==='' || password===''){
      alert('All fields required');
      return;
  }

  let users = JSON.parse(localStorage.getItem('users')) || [];

  let foundUser = users.find(user=>user.username===username && user.password===password);

  if(foundUser){
    localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
    alert('Login Successful');
    window.location.href = 'Dashboard.html'
  }
  else{
    alert('Invalid Username and Password');
  }
}