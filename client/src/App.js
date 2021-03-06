import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { firebase } from './firebase';
import Items from "./pages/Items";
import TestImg from "./pages/TestImg";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import LogIn from "./components/LogInModal";
import Listing from "./pages/Listing";
import Detail from "./pages/Detail";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: null,
      logInModalOpen: false,
      auth: null
    };

  }


  logInModalTrigger = () => {
    console.log('you hit the trigger');

    this.setState(prevState => ({
      logInModalOpen: !prevState.logInModalOpen
    }));
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {

      if (authUser) {

        // console.log('you are logged in');
        this.setState(() => ({ auth: authUser }))
        console.log('app.js logged in');


      } else {

        console.log('app.js you are not logged in');
        this.setState(() => ({ auth: null }));


      }

    });
  }

  render() {
    console.log(this);

    return (
      // <MyProvider>
      <Router>
        <div>
          <Nav
            auth={this.state.auth}
            logInModalTrigger={this.logInModalTrigger}
          />

          <LogIn
            logInModalOpen={this.state.logInModalOpen}
            logInModalTrigger={this.logInModalTrigger}
            auth={this.state.auth}
          />




          <Switch>
            <Route exact path="/" render={() => <Items auth={this.state.auth} />} />

            {/* Sending auth as a prop to the details page */}
            <Route exact path="/Listing" render={() => <Listing auth={this.state.auth} />} />

            {/* Sending auth as a prop to the details page */}
            <Route exact path="/Detail" render={() => <Detail auth={this.state.auth} />} />
						<Route exact path="/TestImg" component={TestImg}/>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
      // </MyProvider>
    )
  }

};

export default App;