import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, signInWithGoogle } from '../../config/firebase';

/**
 * @author
 * @function SignIn
 **/

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError('Error signing in with password and email!');
      console.error('Error signing in with password and email', error);
    });
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.currentTarget;
    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    }
  };

  const hangleSignInWithGoogle = () => {
    signInWithGoogle();
  };
  return (
    <div>
      <div
        id="sign-up"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="sign-up"
        aria-hidden="true"
        className="modal fade"
      >
        <div role="document" className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 id="exampleModalLabel" className="modal-title">
                Sign In
              </h5>
              <button
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                className="close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            {error !== null && (
              <div className="py-4 w-full text-dark text-center mb-3">
                {error}
              </div>
            )}
            <div className="modal-body">
              <form class="signForm" action="#">
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    name="userEmail"
                    placeholder="abc@gmail.com"
                    id="userEmail"
                    value={email}
                    onChange={(e) => onChangeHandler(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Password:</label>
                  <input
                    type="password"
                    name="userPassword"
                    placeholder="Your Password: "
                    id="userPassword"
                    value={password}
                    onChange={(e) => onChangeHandler(e)}
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="submit btn btn-primary btn-shadow btn-gradient"
                    onClick={(event) => {
                      signInWithEmailAndPasswordHandler(event, email, password);
                    }}
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <p className="text-center my-3">Or Sign In Using</p>
              <div className="flex-c-m">
                <a
                  href="/12"
                  role="button"
                  className="login100-social-item bg1"
                >
                  <i className="fa fa-facebook"></i>
                </a>

                <a href="/123" className="login100-social-item bg2">
                  <i className="fa fa-twitter"></i>
                </a>

                <a
                  role="button"
                  href="#"
                  className="login100-social-item bg3"
                  onClick={hangleSignInWithGoogle}
                >
                  <i className="fa fa-google"></i>
                </a>
                {/* <a className="login100-social-item bg3" role="button">
                  <i className="fa fa-google"></i>
                </a> */}
              </div>
              <p className="text-center my-3">
                Don't have an account? {/* Link */}
                <Link
                  to="/sign-up"
                  data-toggle="modal"
                  data-target="#sign-up"
                  className="text-blue-500"
                >
                  Sign up here
                </Link>{' '}
                <br />{' '}
                <Link
                  to="/password-reset"
                  data-toggle="modal"
                  data-target="#password-reset"
                  className="text-blue-500"
                >
                  Forgot Password?
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
