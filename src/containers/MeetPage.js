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

    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "profile-page"
    }

    generateMeetCards = () => {
        let cardArray = []
        this.props.users.filter(user => {
            let full_name = user.first_name.toLowerCase() + " " + user.last_name.toLowerCase()
            return full_name.includes(this.state.searchTerm)
        }).forEach(user => {
            cardArray.push(<MeetCard user={user}/>)
        })
        return cardArray
    }

    onChange = (e) => {
        console.log(e.target.value)
        let searchTerm = e.target.value.toLowerCase()
        this.setState({
            searchTerm: searchTerm
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