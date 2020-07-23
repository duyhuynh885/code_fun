import React from 'react';
import './App.css';
import { auth } from './config/firebase';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import { connect } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount = () => {
    this.authListener();
  };
  authListener = () => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        this.setState({ user: userAuth });
      } else {
        this.setState({ user: null });
      }
    });
  };

  render() {
    // var {displayName, email} = this.state.user
    // console.table(displayName, email)
    return (
      <div className="App">
        {!this.state.user ? <Header /> : <MainPage />}
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {}
const mapDispatchToProps = (dispatch) => {}

export default App;
