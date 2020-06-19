import React, { useState, useEffect } from 'react';

const Login = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
      fetch("/user")
          .then(res => res.json())
          .then(res => setUser(res))
          .catch(err => {
              console.log(err);
          });
  }, []);

  if (user.email){
    return (
      <div id="login">
        <h3><a href="/logout">Sign out {user.email}</a></h3>
        
      </div>
    );
  } else if (user.notSignedIn){
    return (
      <div id="login">

        <a href="/auth/google"><img src="../assets/google_signin.png"></img></a>

      </div>
    );
  } else {
    return (
      <div id="login">
      </div>
    )
  }
  
};

export default Login;