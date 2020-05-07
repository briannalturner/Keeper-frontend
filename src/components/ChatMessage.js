import React from 'react'

class ChatMessage extends React.Component {

    render() {
        console.log(this.props.message.user === this.props.currentUser.user_data.id)
        return (
            <div>
                {
                    this.props.message.user === this.props.currentUser.user_data.id ?
                        <div className="mine messages">
                            <div className="message">
                                {this.props.message.message}
                            </div>
                        </div>
                    :
                    <div className="yours messages">
                        <div className="message">
                            {this.props.message.message}
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default ChatMessage;