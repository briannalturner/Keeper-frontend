import React from 'react'
import UserNav from '../components/UserNav'

class ProfilePage extends React.Component {

    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "plain-page"
    }

    render() {
        console.log(this.props.user)
        return (
            <div className="white-text">
                {
                    this.props.user.user_data ?
                    <div>
                        <div className="row">
                            <div className="col-4 p-5">
                                <img alt="" className="float-middle rounded profile-main-pic" src={"data:image/png;base64," + this.props.user.user_data.image}/>
                                <div className="ml-4 mt-1 text-left">
                                    <hr></hr>
                                    <h3>{this.props.user.user_data.house}</h3>
                                    <hr></hr>
                                    <p>Gender: {this.props.user.user_data.gender.charAt(0).toUpperCase() + this.props.user.user_data.gender.slice(1)}</p>
                                    <p>Orientation: {this.props.user.user_data.orientation.charAt(0).toUpperCase() + this.props.user.user_data.orientation.slice(1)}</p>
                                </div>
                            </div>
                            <div className="col-8 pt-5 pr-5 text-left">
                                <h1>{this.props.user.user_data.first_name + " " + this.props.user.user_data.last_name}</h1>
                                <hr></hr>
                                <p>Favorite Quote:</p>
                                <p>{this.props.user.user_data.bio}</p>
                                <div>

                                </div>
                            </div>
                        </div>
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