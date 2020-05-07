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
import NotFound from './components/NotFound'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      currentUser: null,
    }
  }

  componentDidMount() {
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

    let btn = document.createElement('span')
    btn.innerHTML = `
      <button type="button" class="btn btn-warning btn-lg tenpx float-middle">Liked</button>
    `
    btn.addEventListener("click", (e) => this.deleteMeetLike(e, likedUser))
    console.log(e.target.parentNode)
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
    e.target.parentNode.parentNode.parentNode.remove()
  }

  deleteMeetLike = (e, likedUser) => {
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
    let btn = document.createElement('span')
    btn.innerHTML = `
      <button type="button" class="btn btn-warning btn-lg tenpx float-middle">Like</button>
    `
    btn.addEventListener("click", (e) => this.newLike(e, likedUser))
    console.log(e.target)
    e.target.parentNode.append(btn)
    e.target.remove()
  }

  newMessage = (e, user) => {
    let rooms = this.state.currentUser.rooms
    // console.log(rooms.filter(room => room.recipient.id === user.id))
    let room = rooms.filter(room => room.recipient.id === user.id)[0]
    // console.log(room)
    if (room) {
      window.location = `/inbox/${room.id}`
    } else {
      let user_one_id = user.id
      let user_two_id = this.state.currentUser.user_data.id
      let payload = {user_one_id: user_one_id, user_two_id: user_two_id}
      console.log(payload)
      fetch("http://localhost:3000/rooms", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
      .then(resp => resp.json())
      .then(json => {
        console.log(json)
      })
    }
  }

  render() {
    return (
      <div className="App font-weight-light">
          <Navbar currentUser={this.state.currentUser} logout={this.logout} />
          <Switch>
            <Route exact path="/" render={() => <HomePage currentUser={this.state.currentUser}/>}/>
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
            <Route exact path="/profile/edit" render={() => <EditAccountPage user={this.state.currentUser}/>}/>
            <Route exact path="/meet" render={() => <MeetPage users={this.state.users}/>}/>
            <Route exact path="/profile/matches" render={() => <MatchesPage currentUser={this.state.currentUser} deleteLike={this.deleteLike} newLike={this.newLike} newMessage={this.newMessage} />}/>
            <Route exact path="/inbox/:id" render={() => (
                this.state.currentUser ?
                  <ActiveConversation currentUser={this.state.currentUser} /> :
                null
              )
            }/>
            <Route exact path="/inbox" render={() => <Inbox user={this.state.currentUser}/> }/>
            <Route exact path="/user/:id" render={(props) => {
              let userId = parseInt(props.location.pathname.split("/")[2])
              return <UserContainer userId={userId} currentUser={this.state.currentUser} deleteMeetLike={this.deleteMeetLike} newMessage={this.newMessage} newLike={this.newLike}/>
            }}/>
            <Route exact path="/404" render={() => <NotFound/> }/>
            <Redirect to="/404" />
          </Switch>
      </div>
  );
  }
}


export default App;
