import React from 'react'
import MeetCard from '../components/MeetCard'
import Filter from '../components/Filter'

class MeetPage extends React.Component {

    
    constructor() {
        super()
        this.state = {
            users: [],
            searchTerm: ""
        }
    }

    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "meet-background"

        fetch("http://localhost:3000/users")
        .then(resp => resp.json())
        .then(json => this.setState({
            users: json
        }))
    }

    generateMeetCards = () => {
        let cardArray = []
        this.state.users.filter(user => {
            let full_name = user.first_name.toLowerCase() + " " + user.last_name.toLowerCase()
            return full_name.includes(this.state.searchTerm)
        }).forEach(user => {
            cardArray.push(<MeetCard key={user.id} user={user}/>)
        })
        return cardArray
    }

    onChange = (e) => {
        let searchTerm = e.target.value.toLowerCase()
        this.setState({
            searchTerm: searchTerm
        })
    }

    render() {
        return (
            <div className="">
                <div className="mt-4">
                    <Filter onChange={this.onChange} />
                </div>
                <div className="card-columns m-4 p-1">
                    {this.generateMeetCards()}
                </div>
            </div>
        )
    }
}

export default MeetPage;