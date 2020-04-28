import React from 'react'
import UserNav from '../components/UserNav'

class ProfilePage extends React.Component {

    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "profile-page"
    }

    render() {
        let {first_name, last_name, bio, image, house, gender, orientation} = this.props.user
        return (
            <div className="white-text margins">
                <img alt="" className="float-left rounded profile-main-pic" src={"data:image/png;base64," + image}/>
                <h1>{first_name + " " + last_name}</h1>
                <h3>{house}</h3>
                <p>Identifies as: {gender.charAt(0).toUpperCase() + gender.slice(1)}, Orientation: {orientation.charAt(0).toUpperCase() + orientation.slice(1)}</p>
                <p>{bio}</p>
                <br></br>
                <UserNav />
            </div>
        )
    }
}

export default ProfilePage;