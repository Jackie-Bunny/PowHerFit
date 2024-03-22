import React, { useState, useEffect } from 'react';``
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../redux/actions';
import { CurrentLogin, setLogin } from '../redux/reducers';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const userData = useSelector(state => state.data.data);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://appsdemo.pro/Pawherfit/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log('Auth user data', data);
      if (data.success) {
        dispatch(CurrentLogin(data)); // Store user data in Redux store
        toast.success("Login successful!");
        // Delay redirecting to the user page by 3 seconds
        setTimeout(() => {
          window.location.href = "/Users"; // Redirect to user page after 3 seconds
        }, 3000); // 3000 milliseconds = 3 seconds
      } else {
        toast.error(data.message);
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="loginsec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <h3>PowHer Fit</h3>
            <div className="loginform">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12">
                    <div className="logininput">
                      <label>Email</label>
                      <input type="email" name="email" className="form-control" value={email} onChange={handleEmailChange} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="logininput">
                      <label>Password</label>
                      <input type="password" name="password" className="form-control" value={password} onChange={handlePasswordChange} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="logininput">
                      <label>
                        <input type="checkbox" name="rememberme" />
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="loginbtn">
                      <Link to="">Forget your password ?</Link>
                      <button type="submit">Login</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
