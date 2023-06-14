
import GoogleLogin from 'react-google-login';
import { useState } from 'react';

function Write() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const handleFailure = (error) => {
    alert('Google login failed. Reason: ' + error.message);
  };

  const handleLogin = async (googleData) => {
    const res = await fetch('/api/google-login', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
   
    });

    const data = await res.json();
    setLoginData(data);
    localStorage.setItem('loginData', JSON.stringify(data));
    console.log(googleData)
  };
  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  };



  return (
    <div className="App">
      <header className="App-header">
        <h1>React Google Login App</h1>
        <div>
          {loginData ? (
            <div>
              <h3>You logged in as {loginData.email}</h3>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <GoogleLogin
              clientId="142988580499-sebkf09f5t8b25ae4tntmt7titcll43j.apps.googleusercontent.com"
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            ></GoogleLogin>
          )}
        </div>
      </header>
    </div>
  );
}

export default Write;