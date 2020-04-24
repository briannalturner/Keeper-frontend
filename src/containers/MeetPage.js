import React from 'react'
import MeetCard from '../components/MeetCard'

class MeetPage extends React.Component {

    generateMeetCards = () => {
        let cardArray = []
        this.props.users.forEach(user => {
            cardArray.push(<MeetCard user={user}/>)
        })
        return cardArray
    }

    render() {
        return (
            <div className="margins">
                <div className="card-columns">
                    {this.generateMeetCards()}
                </div>
            </div>
        )
    }
}

export default MeetPage;