import React from 'react'
import UserNav from '../components/UserNav'

class ProfilePage extends React.Component {

    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "shattered-background"
    }

    houseDescription = () => {
        if (this.props.user.user_data.house === "Gryffindor") {
            return "Gryffindor values courage, bravery, nerve, and chivalry. Gryffindor's mascot is the lion, and its colours are scarlet and gold. Gryffindor corresponds roughly to the element of fire."
        } else if (this.props.user.user_data.house === "Hufflepuff") {
            return "Hufflepuff values hard work, patience, justice, and loyalty. The house mascot is the badger, and canary yellow and black are its colours. Hufflepuff corresponds roughly to the element of earth."
        } else if (this.props.user.user_data.house === "Ravenclaw") {
            return "Ravenclaw values intelligence, learning, and wit.The house mascot is an eagle and the house colours are blue and silver. Ravenclaw corresponds roughly to the element of air."
        } else if (this.props.user.user_data.house === "Slytherin") {
            return "Slytherin values ambition, cunning, leadership, and resourcefulness; the Sorting Hat said in Harry Potter and the Philosopher's Stone that Slytherins will do anything to get their way. The house mascot of Slytherin is the serpent, and the house colours are green and silver. Slytherin corresponds roughly to the element of water."
        } else {
            return null
        }
    }

    render() {
        console.log(this.props.user)
        return (
            <div className="white-text">
                {
                    this.props.user.user_data ?
                    <div>
                        <div className="row">
                            <div className="col p-3">
                                <img alt="" className="float-middle rounded profile-main-pic" src={"data:image/png;base64," + this.props.user.user_data.image}/>
                                <div className="ml-4 mt-1 text-left">
                                    {this.props.user.user_data.house !== "" ? 
                                        <div>
                                            <hr></hr>
                                            <h3>{this.props.user.user_data.house}</h3>
                                        </div>
                                        :null
                                    }
                                    <hr></hr>
                                    <p>Gender: {this.props.user.user_data.gender.charAt(0).toUpperCase() + this.props.user.user_data.gender.slice(1)}</p>
                                    <p>Orientation: {this.props.user.user_data.orientation.charAt(0).toUpperCase() + this.props.user.user_data.orientation.slice(1)}</p>
                                </div>
                            </div>
                            <div className="col p-5 text-left">
                                <h1><strong>{this.props.user.user_data.first_name + " " + this.props.user.user_data.last_name}</strong></h1>
                                <hr></hr>
                                <p>{this.houseDescription()}</p>
                                <p><strong>Bio:</strong> {this.props.user.user_data.bio}</p>
                                <div className="row">
                                    <UserNav />
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

export default ProfilePage;