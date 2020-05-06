import React from 'react'
import ChatMessage from './ChatMessage'

class AllMessages extends React.Component {

    componentDidUpdate() {
        let messageDiv = document.getElementById('messages')
        messageDiv.scrollToTop = messageDiv.scrollHeight
    }

    displayMessages = (messages) => {
        return messages.map(message => {
            return <ChatMessage key={message.id} message={message} currentUser={this.props.currentUser}/>
        }) 
    }

    render() {
        // console.log(this.props.room.messages)
        return (
            <div id="messages">
                { Object.keys(this.props.room.messages).length > 0 ? (
                        this.displayMessages(this.props.room.messages)
                    ) : (
                        <h3>This room has no messages yet - be the first to post!</h3>
                    ) 
                }
            </div>
        )
    }
}

export default AllMessages;