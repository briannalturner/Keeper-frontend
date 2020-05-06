import React from 'react'

class RoomWebSocket extends React.Component {
    componentDidMount() {
        // console.log(this.props.currentUser)
        if(this.props.currentUser) {
            // console.log(window.location.href.match(/\d+$/)[0])
            this.props.getRoomData(window.location.href.match(/\d+$/)[0])
    
            this.props.cableApp.room = this.props.cableApp.cable.subscriptions.create({
                channel:'RoomsChannel',
                room: window.location.href.match(/\d+$/)[0]
            },
            {
                recieved: (updatedRoom) => {
                    console.log("updatedroom",updatedRoom)
                    this.props.updateApp(updatedRoom)
                }
            })
        }
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default RoomWebSocket;