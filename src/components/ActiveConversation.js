import React from 'react'
import RoomWebSocket from './RoomWebSocket'
import AllMessages from './AllMessages'
import ChatMessage from './ChatMessage'

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
        if (this.props.currentUser) {
            console.log(this.props.currentUser)
            // this.setState({
            //     messages: currentUser.user_data
            // })
        }
    }

    handleMessageInput = (e) => {
        this.setState({
            newMessage: e.target.value
        })
    }

    submitMessage = (event) => {
        event.preventDefault()

        console.log(this.props.currentUser.user_data.id)
        let payload = {
            message: this.state.newMessage,
            user_id: this.props.currentUser.user_data.id,
            room_id: this.props.roomData.room.id
        }
        
        this.props.cableApp.cable.send({message: this.state.newMessage, room: this.props.roomData.room.id})
        
        this.setState({
            newMessage: ''
        })

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
            // console.log(result)
            let chatFeed = document.getElementById('chat-feed')
            let message = <ChatMessage key={result.id} message={result} currentUser={this.props.currentUser}/>
            chatFeed.append(message)
            let messageDiv = document.getElementById('messages')
            messageDiv.scrollTop = messageDiv.scrollHeight
        })
    }

    render() {
        return (
            <div className="margins">
                <h4 className="">Active Conversation</h4>
                <div>
                    <div id="chat-feed">
                        <AllMessages room={this.props.roomData} currentUser={this.props.currentUser}/>
                    </div>
                    <form id='chat-form' onSubmit={this.submitMessage}>
                        <textarea type='text' value={this.state.newMessage} placeholder="write a message..." onChange={this.handleMessageInput}></textarea>
                        <br></br>
                        <button type='submit'>Send</button>
                    </form>
                </div>
                <RoomWebSocket 
                    cableApp={this.props.cableApp}
                    updateApp={this.props.updateApp}
                    getRoomData={this.props.getRoomData}
                    currentUser={this.props.currentUser}
                />
            </div>
        )
    }
}

export default ActiveConversation;