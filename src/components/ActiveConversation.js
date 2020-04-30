import React from 'react'
import RoomWebSocket from './RoomWebSocket'

class ActiveConversation extends React.Component {

    render() {
        return (
            <div className="margins">
                <h4 className="">Active Conversation</h4>
                <div>
                    
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