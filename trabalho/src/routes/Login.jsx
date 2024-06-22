import React from 'react';


function Login() {
  React.useEffect(() => {
    // Função de início para o Google Sign-In
    const startApp = () => {
      gapi.load('auth2', () => {
        const auth2 = gapi.auth2.init({
          client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
        });
        attachSignin(document.getElementById('customBtn'), auth2);
      });
    };
    
    const attachSignin = (element, auth2) => {
      console.log(element.id);
      auth2.attachClickHandler(element, {},
        (googleUser) => {
          document.getElementById('name').innerText = "Signed in: " +
            googleUser.getBasicProfile().getName();
        }, (error) => {
          alert(JSON.stringify(error, undefined, 2));
        });
    };

    startApp();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById('emailForm').value;
    const password = document.getElementById('passwordForm').value;
    // Verificação simples de login hard-coded
    if (email === "jeffley@gmail.com" && password === "1234") {
      window.location.href = 'dashboard.html'; // Redireciona para a página do mapa
    } else {
      alert('Invalid username or password!');
    }
  };

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style_login.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,600,0,0" />
        <title>Login Page</title>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com" />
        <script src="script.js" defer></script>
      </head>
      <body>
        <div className="login-card-container">
          <div className="login-card">
            <div className="login-card-logo">
              <img src="logoFelishop.jpg" alt="logo" />
            </div>
            <div className="login-card-header">
              <h1>Sign In</h1>
              <div>Please login to use the platform</div>
            </div>
            <form className="login-card-form" id="loginForm" onSubmit={handleSubmit}>
              <div className="form-item">
                <span className="form-item-icon material-symbols-rounded">mail</span>
                <input type="text" placeholder="Enter Email" id="emailForm" autoFocus required />
              </div>
              <div className="form-item">
                <span className="form-item-icon material-symbols-rounded">lock</span>
                <input type="password" placeholder="Enter Password" id="passwordForm" required />
              </div>
              <div className="form-item-other">
                <div className="checkbox">
                  <input type="checkbox" id="rememberMeCheckbox" defaultChecked />
                  <label htmlFor="rememberMeCheckbox">Remember me</label>
                </div>
                <a href="forgot_password.html">I forgot my password!</a>
              </div>
              <button type="submit">Sign In</button>
            </form>
            <div className="login-card-footer">
              Don't have an account? <a href="create_account.html">Create a free account.</a>
            </div>
          </div>
          <div className="login-card-social">
            <div>Other Sign-In Options</div>
            <div className="login-card-social-btns">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook"
                  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google" width="24"
                  height="24" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" fill="none"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
export default Login;