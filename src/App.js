import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import HomePage from './containers/HomePage'
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './containers/LoginPage'
import NewAccountPage from './containers/NewAccountPage'
import ProfilePage from './containers/ProfilePage'
import EditAccountPage from './containers/EditAccountPage'
import MeetPage from './containers/MeetPage'
import MatchesPage from './containers/MatchesPage'
import Inbox from './containers/Inbox'
import UserContainer from './containers/UserContainer'
import ActiveConversation from './components/ActiveConversation'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      users: [],
      currentUser: null,
      allRooms: [],
      currentRoom: {
        room: {},
        users: [],
        messages: {}
      }
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(json => this.setState({
      users: json
    }))

    if (localStorage.getItem('jwt')) {
      fetch("http://localhost:3000/profile", {
        headers: {
          "Authentication": localStorage.getItem('jwt')
        }
      })
      .then(resp => resp.json())
      .then(json => {
        this.setState({currentUser: json})
      })
    }
  }

  login = (json) => {
    let username = json.username
    let password = json.password
    let payload = {username: username, password: password}
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
    .then(resp => resp.json())
    .then(json => {
      localStorage.setItem('jwt', json.token)
      this.setState({
        currentUser: json.user
      })
      window.location = "/profile"
    })
  }

  logout = () => {
    localStorage.clear()
    this.setState({
      currentUser: null
    })
  }

  fetchUser = (e) => {
    e.preventDefault()
    let username = e.target.username.value
    let password = e.target.password.value
    let payload = {username: username, password: password}
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
    .then(resp => resp.json())
    .then(json => {
      localStorage.setItem('jwt', json.token)
      console.log("json", json.user[0])
      this.setState({
        currentUser: json.user[0]
      })
      window.location = "/profile"
    })
  }

  newLike = (e, likedUser) => {
    let payload = {likee_id: likedUser.id, liker_id: this.state.currentUser.user_data.id}
    fetch("http://localhost:3000/likes", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
    .then(resp => resp.json())
    .then(json => console.log(json))

    let btn = document.createElement('div')
    btn.innerHTML = `
      <button type="button" class="btn btn-outline-danger float-left btn-lg" disabled>Liked</button>
    `
    console.log(e.target.parentNode.parentNode)
    e.target.parentNode.append(btn)
    e.target.remove()
  }

  deleteLike = (e, likedUser) => {
    e.preventDefault()
    let payload = {likee_id: likedUser.id, liker_id: this.state.currentUser.user_data.id}
    fetch("http://localhost:3000/likes", {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
  }

  getRoomData = (id) => {
    fetch(`http://localhost:3000/rooms/${id}`)
    .then(resp => resp.json())
    .then(json => {
      console.log("json",json)
      // this.setState({
      //   currentRoom: {
      //     room: json.data,
      //     users: json.data.attributes.users,
      //     messages: json.data.attributes.messages
      //   }
      // })
    })
  }

  updateAppStateRoom = (newRoom) => {
    this.setState({
      currentRoom: {
        room: newRoom.room.data,
        users: newRoom.users,
        message: newRoom.messages
      }
    })
  }

  render() {
    return (
      <div className="App">
          <Navbar currentUser={this.state.currentUser} logout={this.logout} />
          <Switch>
            <Route exact path="/" render={() => <HomePage/>}/>
            <Route exact path="/login" render={() => (
              this.state.currentUser ? <Redirect to="/profile"/> :
              <LoginPage login={this.fetchUser}/>)}
            />
            <Route exact path="/signup" render={() => <NewAccountPage login={this.login} currentUser={this.state.currentUser}/>}/>
            <Route exact path="/profile" render={() => (
              this.state.currentUser ? 
              <ProfilePage user={this.state.currentUser}/> :
              <Redirect to="/login"/>
            )}/>
            <Route exact path="/profile/edit" render={() => <EditAccountPage/>}/>
            <Route exact path="/meet" render={() => <MeetPage users={this.state.users}/>}/>
            <Route exact path="/profile/matches" render={() => <MatchesPage currentUser={this.state.currentUser} deleteLike={this.deleteLike} />}/>
            <Route exact path="/inbox/:id" render={() => (
                this.state.currentUser ?
                  <ActiveConversation 
                    cableApp={this.props.cableApp}
                    updateApp={this.updateAppStateRoom}
                    getRoomData={this.getRoomData}
                    roomData={this.state.currentRoom}
                    currentUser={this.state.currentUser}
                  /> :
                null
              )
            }/>
            <Route exact path="/inbox" render={() => <Inbox user={this.state.currentUser}/> }/>
            <Route exact path="/user/:id" render={(props) => {
              let userId = parseInt(props.location.pathname.split("/")[2])
              let user = this.state.users.find(u => u.id === userId)
              return <UserContainer user={user} currentUser={this.state.currentUser} newLike={this.newLike}/>
            }}/>
  
          </Switch>
      </div>
  );
  }
}


export default App;
