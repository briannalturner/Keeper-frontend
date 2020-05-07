import React from 'react'
import MatchCard from '../components/MatchCard'

class MatchesPage extends React.Component {

    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "profile-page"
    }

    renderMatches = () => {
        let arr =[]
        this.props.currentUser.matches.forEach(matchedUser => {
            // console.log("rendering", matchedUser)
            arr.push(<MatchCard user={matchedUser} key={matchedUser.id} newMessage={this.props.newMessage} deleteLike={this.props.deleteLike}/>)
        }) 
        return arr
    }

    render() {
        console.log(this.props.currentUser)
        return (
            <div className="margins">
                
                <h1 className="white-text text-left">My Matches</h1>
                <div className="card-columns column-count-4">
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