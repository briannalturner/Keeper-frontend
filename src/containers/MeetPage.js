import React from 'react'
import MeetCard from '../components/MeetCard'
import Filter from '../components/Filter'

class MeetPage extends React.Component {

    constructor() {
        super()
        this.state = {
            searchTerm: ""
        }
    }

    generateMeetCards = () => {
        let cardArray = []
        this.props.users.filter(user => {
            let full_name = user.first_name + " " + user.last_name
            return full_name.includes(this.state.searchTerm)
        }).forEach(user => {
            cardArray.push(<MeetCard user={user}/>)
        })
        return cardArray
    }

    onChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        return (
            <div className="margins">
                <Filter onChange={this.onChange} />
                <div className="card-columns">
                    {this.generateMeetCards()}
                </div>
            </div>
        )
    }
}

export default MeetPage;