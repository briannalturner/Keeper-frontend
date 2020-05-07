import React from 'react'
import MatchCard from '../components/MatchCard'
import LikedCard from '../components/LikedCard'
import LikedMeCard from '../components/LikedMeCard'
import {Link} from 'react-router-dom'

class MatchesPage extends React.Component {

    renderMatches = () => {
        let arr =[]
        if (this.props.currentUser.matches) {
            this.props.currentUser.matches.forEach(matchedUser => {
                // console.log("rendering", matchedUser)
                arr.push(<MatchCard user={matchedUser} key={matchedUser.id} newMessage={this.props.newMessage} deleteLike={this.props.deleteLike}/>)
            }) 
            return arr
        }
    }

    renderLiked = () => {
        let arr =[]
        if (this.props.currentUser.likees) {
            this.props.currentUser.likees.forEach(matchedUser => {
                // console.log("rendering", matchedUser)
                arr.push(<LikedCard user={matchedUser} key={matchedUser.id} newMessage={this.props.newMessage} deleteLike={this.props.deleteLike}/>)
            }) 
            return arr
        }
    }

    renderLikedMe = () => {
        let arr =[]
        if (this.props.currentUser.likers) {
            this.props.currentUser.likers.forEach(matchedUser => {
                // console.log("rendering", matchedUser)
                arr.push(<LikedMeCard user={matchedUser} key={matchedUser.id} newMessage={this.props.newMessage} newLike={this.props.newLike}/>)
            }) 
            return arr
        }
    }

    render() {
        console.log(this.props.currentUser)
        return (
            <div className="margins my-4 mx-3">
                <h4 className="ml-2 text-left"><Link to="/profile" className="inactive" activeClassName="active" >&lt;&lt; back to profile</Link></h4>
                <br></br>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#matches" role="tab" aria-controls="home" aria-selected="true">My Matches</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#liked" role="tab" aria-controls="profile" aria-selected="false">People I've Liked</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#likedme" role="tab" aria-controls="contact" aria-selected="false">People Who've Liked Me</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <br></br>
                    <div class="tab-pane fade show active" id="matches" role="tabpanel" aria-labelledby="home-tab">
                        <div className="card-columns column-count-4">
                            {   
                                this.props.currentUser ?
                                this.renderMatches() :
                                null
                            }
                        </div>
                    </div>
                    <div class="tab-pane fade" id="liked" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="card-columns column-count-4">
                            {   
                                this.props.currentUser ?
                                this.renderLiked() :
                                null
                            }
                        </div>
                    </div>
                    <div class="tab-pane fade" id="likedme" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="card-columns column-count-4">
                            {   
                                this.props.currentUser ?
                                this.renderLikedMe() :
                                null
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MatchesPage;