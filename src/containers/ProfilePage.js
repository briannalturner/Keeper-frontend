import React from 'react'
import UserNav from '../components/UserNav'

class ProfilePage extends React.Component {

    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "profile-page"
    }

    render() {
        console.log(this.props.user)
        return (
            <div className="white-text margins">
                {
                    this.props.user.user_data ?
                    <div>
                        <img alt="" className="float-left rounded profile-main-pic" src={"data:image/png;base64," + this.props.user.user_data.image}/>
                        <h1>{this.props.user.user_data.first_name + " " + this.props.user.user_data.last_name}</h1>
                        <h3>{this.props.user.user_data.house}</h3>
                        <p>Identifies as: {this.props.user.user_data.gender.charAt(0).toUpperCase() + this.props.user.user_data.gender.slice(1)}, Orientation: {this.props.user.user_data.orientation.charAt(0).toUpperCase() + this.props.user.user_data.orientation.slice(1)}</p>
                        <p>{this.props.user.user_data.bio}</p>
                        <br></br>
                        <UserNav /> 
                    </div> :
                    null
                }
            </div>
        )
    }
}

export default ProfilePage;