import React from 'react'

class ChatMessage extends React.Component {

    render() {
        // console.log(this.props.message.message)
        return (
            <div>
                {this.props.message.message}
            </div>
        )
    }
}

export default ChatMessage;