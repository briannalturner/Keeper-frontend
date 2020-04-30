import React from 'react'

class Inbox extends React.Component {

    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "profile-page"
    }

    messageCards = () => {
        if (this.props.user) {
            this.props.user.rooms.forEach(room => {
                console.log(room.messages[room.messages.length - 1])
            })
        }
    }

    render() {
        console.log(this.props.user)
        return (
            <div className="margins">
                <h1 className="text-left white-text">Inbox</h1>
                <div className="container"> 
                    <div className="row">
                        <div className="col card fivepx">
                            <h4>All Conversations</h4>
                            <div>
                                {this.messageCards()}
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Inbox;