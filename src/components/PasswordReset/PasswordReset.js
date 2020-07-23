import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../config/firebase';
/**
 * @author
 * @function PasswordReset
 **/

const PasswordReset = (props) => {
  const [email, setEmail] = useState('');
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'userEmail') {
      setEmail(value);
    }
  };
  const sendResetEmail = (event) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {
          setEmailHasBeenSent(false);
        }, 3000);
      })
      .catch(() => {
        setError('Error resetting password');
      });
  };
  return (
    <div>
      <div
        id="password-reset"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="password-reset"
        aria-hidden="true"
        className="modal fade"
      >
        <div role="document" className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 id="exampleModalLabel" className="modal-title">
                Password Reset
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
            <div className="modal-body">
              <form class="signForm" action="#">
                {emailHasBeenSent && (
                  <div className="py-3 text-dark text-center mb-3">
                    An email has been sent to you!
                  </div>
                )}
                {error !== null && (
                  <div className="py-3 bg-danger w-full text-white text-center mb-3">
                    {error}
                  </div>
                )}
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
                  <button
                    type="submit"
                    className="submit btn btn-primary btn-shadow btn-gradient"
                    onClick={(e) => sendResetEmail(e)}
                  >
                    Send me a reset link
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
