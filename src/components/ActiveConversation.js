import React from 'react'
// import RoomWebSocket from './RoomWebSocket'
// import AllMessages from './AllMessages'
import ChatMessage from './ChatMessage'
import ActionCable from 'actioncable'
import { Link } from 'react-router-dom'

class ActiveConversation extends React.Component {

    constructor() {
        super()
        this.state = {
            newMessage: "",
            messages: [],
            room: null,
            user: null
        }
    }

    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "profile-page"
        fetch(`http://localhost:3000/rooms/${window.location.href.match(/\d+$/)[0]}`)
        .then(resp => resp.json())
        .then(json => {
            // console.log(json.users.filter(user => user.id !== this.props.currentUser.user_data.id)[0])
            let user = json.users.filter(user => user.id !== this.props.currentUser.user_data.id)[0]
            this.setState({
                messages: json.messages,
                room: json,
                user: user
            })
        })
    
        const cable = ActionCable.createConsumer("ws://localhost:3000/cable")
        this.sub = cable.subscriptions.create({ channel: 'RoomsChannel', room: window.location.href.match(/\d+$/)[0] }, {
            received: this.updateMessages
        })
    }

    updateMessages = (e) => {
        // console.log("updatemessages",e.messages[e.messages.length - 1])
        let message = e.messages[e.messages.length - 1]
        // console.log(this.state.messages, message)
        if (this.state.messages.slice(-1)[0] === message) {
            return null
        } else {
            let allMessages = this.state.messages
            allMessages.push(message)
            this.setState({
                messages: allMessages
            })
        }
    }

    handleMessageInput = (e) => {
        // console.log(e)
        if (e.target) {
            this.setState({
                newMessage: e.target.value
            })
        }
    }

    componentDidUpdate() {
        let messageDiv = document.getElementById('messages')
        messageDiv.scrollToTop = messageDiv.scrollHeight
        messageDiv.scrollTo(0,document.querySelector("#messages").scrollHeight);
    }

    submitMessage = () => {

        let payload = {
            message: this.state.newMessage,
            user_id: this.props.currentUser.user_data.id,
            room_id: window.location.href.match(/\d+$/)[0]
        }

        // sending message to server
        this.sub.send({ message: payload, room: parseInt(window.location.href.match(/\d+$/)[0]) })

        fetch("http://localhost:3000/room_messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(resp => resp.json())
        .then(result => {
            // resetting newMessage
            this.setState({
                newMessage: ""
            })
        })
    }

    displayMessages = () => {
        if (this.state.messages) {
            return this.state.messages.map(message => {
                return <ChatMessage key={message.id} message={message} currentUser={this.props.currentUser}/>
            }) 
        }
    }

    messageCards = () => {
        let arr = []
        if (this.props.currentUser && this.props.currentUser.rooms.length > 0) {
            this.props.currentUser.rooms.forEach(room => {
                // console.log(room.id, window.location.href.match(/\d+$/)[0])
                if (room.id === parseInt(window.location.href.match(/\d+$/)[0])) {

                } else {
                    let lastMessage = room.messages[room.messages.length - 1].message
                    let speaker
                    // console.log(room.messages[room.messages.length - 1])
                    if (room.messages[room.messages.length - 1].user_id === this.props.currentUser.user_data.id) {
                        speaker = {first_name: "You"}
                    } else {
                        speaker = room.recipient
                    }
                    arr.push(
                        <div className="card clickable fivepx card-grow" onClick={() => window.location=`/inbox/${room.id}`} key={room.id}>
                            <div className="card-header">
                                <h4 className="text-left">{room.recipient.first_name + " " + room.recipient.last_name}</h4>
                            </div>
                            <div className="card-body text-left">
                                {speaker.first_name}: {lastMessage}
                            </div>
                        </div>
                    )
                }
            })
        }
        return arr
    }

    render() {
        // console.log(this.state.room)
        return (
            <div className="margins active-conversation">
            {this.state.user ? 
                <div className="row">
                    <div className="col-md-7 my-4">
                        <div className="row">
                            <h4 className="ml-4"><Link to="/inbox" className="inactive" activeclassname="active" >&lt;&lt; back to inbox</Link></h4>
                        </div>
                        <div className="overflow-scroll">
                            {this.messageCards()}
                        </div>
                    </div>
                    <div className="col-md-5 my-4">
                        <div className="row">
                        <h3 className="text-left txt-grow px-3"><Link to={`/user/${this.state.user.id}`} className="inactive" activeclassname="active">{this.state.user.first_name + " " + this.state.user.last_name}</Link></h3>
                        </div>
                        <div className="row">
                            <div>
                                <div id="chat-feed">
                                    <div id="messages" className="chat overflow-scroll-chat">
                                        { this.state.messages ? (
                                                this.displayMessages()
                                            ) : (
                                                <h3>This room has no messages yet - be the first to reach out!</h3>
                                            ) 
                                        }
                                    </div>
                                </div>
                                <form id='chat-form'>
                                    <div className="input-group mb-3">
                                        <textarea name="message" onChange={(e) => this.handleMessageInput(e)} type="text" id="message" value={this.state.newMessage} className="form-control"/>
                                        <div className="input-group-prepend" onClick={(e) => this.submitMessage(e)}>
                                            <button className="btn btn-dark" type="button">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>


                    <div>

                    </div>
                    
                </div>
                
            : null
            }
                {/* <RoomWebSocket 
                    cableApp={this.props.cableApp}
                    updateApp={this.props.updateApp}
                    getRoomData={this.props.getRoomData}
                    currentUser={this.props.currentUser}
                /> */}
            </div>
        )
    }
}

export default ActiveConversation;