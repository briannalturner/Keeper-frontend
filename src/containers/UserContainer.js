import React from 'react'

class UserContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "profile-page"
        fetch(`http://localhost:3000/users/${this.props.userId}`)
        .then(resp => resp.json())
        .then(json => this.setState({
            user: json
        }))
    }

    houseDescription = () => {
        if (this.state.user.house === "Gryffindor") {
            return "Gryffindor values courage, bravery, nerve, and chivalry. Gryffindor's mascot is the lion, and its colours are scarlet and gold. Gryffindor corresponds roughly to the element of fire."
        } else if (this.state.user.house === "Hufflepuff") {
            return "Hufflepuff values hard work, patience, justice, and loyalty. The house mascot is the badger, and canary yellow and black are its colours. Hufflepuff corresponds roughly to the element of earth."
        } else if (this.state.user.house === "Ravenclaw") {
            return "Ravenclaw values intelligence, learning, and wit.The house mascot is an eagle and the house colours are blue and silver. Ravenclaw corresponds roughly to the element of air."
        } else if (this.state.user.house === "Ravenclaw") {
            return "Slytherin values ambition, cunning, leadership, and resourcefulness; the Sorting Hat said in Harry Potter and the Philosopher's Stone that Slytherins will do anything to get their way. The house mascot of Slytherin is the serpent, and the house colours are green and silver. Slytherin corresponds roughly to the element of water."
        } else {
            return null
        }
    }

    render() {
        return (
            <div className="white-text">
                {
                    this.state.user && this.props.currentUser ?
                    <div>
                        <div className="row">
                            <div className="col-4 p-5">
                                <img alt="" className="float-middle rounded profile-main-pic" src={"data:image/png;base64," + this.state.user.image}/>
                                <div className="ml-4 mt-1 text-left">
                                    <hr></hr>
                                    <h3>{this.state.user.house}</h3>
                                    <hr></hr>
                                    <p>Gender: {this.state.user.gender.charAt(0).toUpperCase() + this.state.user.gender.slice(1)}</p>
                                    <p>Orientation: {this.state.user.orientation.charAt(0).toUpperCase() + this.state.user.orientation.slice(1)}</p>
                                </div>
                            </div>
                            <div className="col-8 pt-5 pr-5 text-left">
                                <h1>{this.state.user.first_name + " " + this.state.user.last_name}</h1>
                                <hr></hr>
                                <p>{this.houseDescription()}</p>
                                <p><strong>Bio:</strong> {this.state.user.bio}</p>
                                <div>
                                    <button className="btn btn-warning btn-lg tenpx float-middle" onClick={(e) => this.props.newMessage(e, this.state.user)}>Message</button>
                                    {this.props.currentUser.likees.find(likee => likee.id === this.state.user.id) ? <button type="button" className="btn btn-warning btn-lg tenpx float-middle" onClick={(e) => this.props.deleteMeetLike(e, this.state.user)} >Liked</button> : <button className="btn btn-warning btn-lg tenpx float-middle" onClick={(e) => this.props.newLike(e, this.state.user)}>Like</button> }
                                </div>
                            </div>
                        </div>
                        <br></br>
                    </div> :
                    null
                }
            </div>
        )
    }
}

export default UserContainer;