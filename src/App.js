import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import HomePage from './containers/HomePage'
import { Switch, Route } from 'react-router-dom';
import LoginPage from './containers/LoginPage'
import NewAccountPage from './containers/NewAccountPage'
import ProfilePage from './containers/ProfilePage'
import EditAccountPage from './containers/EditAccountPage'
import MeetPage from './containers/MeetPage'
import MatchesPage from './containers/MatchesPage'
import Inbox from './containers/Inbox'
import UserContainer from './containers/UserContainer'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      users: [],
      currentUser: null
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(json => this.setState({
      users: json
    }))
  }

  login = (json) => {
    this.setState({
      currentUser: json
    })
  }

  logout = () => {
    this.setState({
      currentUser: null
    })
  }

  render() {
    return (
      <div className="App">
          <Navbar currentUser={this.state.currentUser} logout={this.logout} />
          <Switch>
            <Route exact path="/home" render={() => <HomePage/>}/>
            <Route exact path="/login" render={() => <LoginPage login={this.login}/>}/>
            <Route exact path="/signup" render={() => <NewAccountPage login={this.login} currentUser={this.state.currentUser}/>}/>
            <Route exact path="/profile" render={() => <ProfilePage/>}/>
            <Route exact path="/profile/edit" render={() => <EditAccountPage/>}/>
            <Route exact path="/meet" render={() => <MeetPage users={this.state.users}/>}/>
            <Route exact path="/profile/matches" render={() => <MatchesPage/>}/>
            <Route exact path="/profile/inbox" render={() => <Inbox/>}/>
            <Route exact path="/user/:id" render={() => <UserContainer/>}/>
  
          </Switch>
      </div>
  );
  }
}

export default App;
