import React from 'react'

class Inbox extends React.Component {

    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "profile-page"
    }

    messageCards = () => {
        let arr = []
        if (this.props.user) {
            this.props.user.rooms.forEach(room => {
                let lastMessage = room.messages[room.messages.length - 1].message
                arr.push(
                    <div className="card clickable fivepx" onClick={() => window.location=`/inbox/${room.id}`} key={room.id}>
                        <div className="card-header">
                            <h4 className="text-left">{room.recipient.first_name + " " + room.recipient.last_name}</h4>
                        </div>
                        <div className="card-body text-left">
                            {lastMessage}
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
            <div className="mx-5 my-3">
                <h1 className="text-left white-text pl-4">Inbox</h1>
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