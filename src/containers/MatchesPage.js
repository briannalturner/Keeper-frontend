import React from 'react'
import MatchCard from '../components/MatchCard'

class MatchesPage extends React.Component {

    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "profile-page"
    }

    renderMatches = () => {
        return this.props.currentUser.matches.map(matchedUser => {
            console.log("rendering", matchedUser)
            return <MatchCard user={matchedUser} key={matchedUser.id} deleteLike={this.props.deleteLike}/>
        })
    }

    render() {
        return (
            <div className="margins">
                <h1 className="white-text text-left">My Matches</h1>
                <div className="card-columns">
                    {   
                        this.props.currentUser ?
                        this.renderMatches() :
                        null
                    }
                </div>
            </div>
        )
    }
}

export default MatchesPage;