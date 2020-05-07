import React from 'react'
// import RoomWebSocket from './RoomWebSocket'
// import AllMessages from './AllMessages'
import ChatMessage from './ChatMessage'
import ActionCable from 'actioncable'

class ActiveConversation extends React.Component {

    constructor() {
        super()
        this.state = {
            newMessage: "",
            messages: []
        }
    }

    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "profile-page"
        fetch(`http://localhost:3000/rooms/${window.location.href.match(/\d+$/)[0]}`)
        .then(resp => resp.json())
        .then(json => this.setState({
            messages: json.messages
        }))
    
        const cable = ActionCable.createConsumer("ws://localhost:3000/cable")
        this.sub = cable.subscriptions.create({ channel: 'RoomsChannel', room: window.location.href.match(/\d+$/)[0] }, {
            received: this.updateMessages
        })
    }

    updateMessages = (e) => {
        // console.log("updatemessages",e.messages[e.messages.length - 1])
        let message = e.messages[e.messages.length - 1]
        console.log(this.state.messages, message)
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

    submitMessage = (event) => {
        event.preventDefault()

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

    render() {
        return (
            <div className="margins">
                <div className="row">
                    <div className="col-6 my-4">
                        Other stuff
                    </div>
                    <div className="col-6 my-4">
                        <div className="row">
                            <h4 className="align-text-center">Active Conversation</h4>
                        </div>
                        <div className="row">
                            <div>
                                <div id="chat-feed">
                                    <div id="messages">
                                        { this.state.messages ? (
                                                this.displayMessages()
                                            ) : (
                                                <h3>This room has no messages yet - be the first to post!</h3>
                                            ) 
                                        }
                                    </div>
                                </div>
                                <form id='chat-form' onSubmit={this.submitMessage}>
                                    <textarea className="form-control" type='text' value={this.state.newMessage} placeholder="write a message..." onChange={this.handleMessageInput}></textarea>
                                    <button className="btn btn-dark"type='submit'>Send</button>
                                </form>
                            </div>
                        </div>
                    </div>


                    <div>

                    </div>
                    
                </div>
                
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