import React from 'react'
// import {Link} from 'react-router-dom'

class Inbox extends React.Component {

    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "profile-page"
    }

    messageCards = () => {
        let arr = []
        console.log(this.props)
        if (this.props.user !== null && this.props.user.rooms) {
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
                            <h4 className="text-left">{room.recipient.first_name + " " + room.recipient.last_name}</h4>
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
                <h2 className="text-left white-text pl-3 yellow-text"><strong>Inbox</strong></h2>
                <div className=""> 
                    <div className="">
                        <div>
                            {this.messageCards()}
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Inbox;