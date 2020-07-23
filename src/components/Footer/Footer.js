import React, { Component } from 'react';

/**
 * @author H.V.D
 * @className Footer
 **/

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <a href="#1" className="brand">
                Code Fun
              </a>
              <ul className="contact-info list-unstyled">
                <li>
                  <a href="mailto:sales@landy.com">abc.com</a>
                </li>
                <li>
                  <a href="tel:123456789">+00 123 456 789</a>
                </li>
              </ul>
              <ul className="social-icons list-inline">
                <li className="list-inline-item">
                  <a href="#1" target="_blank" title="Facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#1" target="_blank" title="Twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#1" target="_blank" title="Instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#1" target="_blank" title="Pinterest">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {};
export default Footer;
