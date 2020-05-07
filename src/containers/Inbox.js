import React from 'react'
import {Link} from 'react-router-dom'

class Inbox extends React.Component {

    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "profile-page"
    }

    messageCards = () => {
        let arr = []
        console.log(this.props)
        if (this.props.user !== null && this.props.user.rooms.length > 0) {
            this.props.user.rooms.forEach(room => {
                let lastMessage = room.messages[room.messages.length - 1].message
                let speaker
                // console.log(room.messages[room.messages.length - 1])
                if (room.messages[room.messages.length - 1].user_id === this.props.user.user_data.id) {
                    speaker = {first_name: "You"}
                } else {
                    speaker = room.recipient
                }
                arr.push(
                    <div className="card clickable fivepx" onClick={() => window.location=`/inbox/${room.id}`} key={room.id}>
                        <div className="card-header">
                            <h4 className="text-left"><strong>{room.recipient.first_name + " " + room.recipient.last_name}</strong></h4>
                        </div>
                        <div className="card-body text-left">
                            {speaker.first_name}: {lastMessage}
                        </div>
                    </div>
                )
            })
        }
        return arr
    }

    render() {
        console.log(this.props.user)
        return (
            <div className="margins my-3">
                {this.props.user ?  
                <div>
                    <div className=""> 
                        <span className="text-left">
                            <h1 className="ml-2"><strong>Inbox</strong></h1>
                            <h4 className="ml-2"><Link to="/profile" className="inactive" activeClassName="active" >&lt;&lt; back to profile</Link></h4>
                        </span>
                        <div className="overflow-scroll">
                            <div>
                                {this.messageCards()}
                            </div>
                        </div>
                    </div> 
                </div>
                : null
                }
            </div>
        )
    }
}

export default Inbox;