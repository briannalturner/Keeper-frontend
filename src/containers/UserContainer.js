import React from 'react'

class UserContainer extends React.Component {

    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "profile-page"
    }

    render() {
        return (
            <div className="white-text margins">
                {
                    this.props.user && this.props.currentUser ? 
                    <div className="">
                        <br></br>
                        <img alt="" className="float-left rounded profile-main-pic fivepx" src={"data:image/png;base64," + this.props.user.image}/>
                        <div className="tenpx">
                            <h1 className="text-left">{this.props.user.first_name + " " + this.props.user.last_name}</h1>
                            <h2 className="text-left">{this.props.user.house}</h2>
                            <p className="text-left">Identifies as: {this.props.user.gender.charAt(0).toUpperCase() + this.props.user.gender.slice(1)}, Orientation: {this.props.user.orientation.charAt(0).toUpperCase() + this.props.user.orientation.slice(1)}</p>
                            <p className="text-left">{this.props.user.bio}</p>
                            <br></br>
                            {this.props.currentUser.likees.find(likee => likee.id === this.props.user.id) ? <button type="button" className="btn btn-outline-danger btn-lg float-left" disabled>Liked</button> : <button className="btn btn-outline-danger btn-lg float-left" onClick={(e) => this.props.newLike(e, this.props.user)}>Like</button> }
                        </div>
                    </div> :
                    null
                } 
            </div>
        )
    }
}

export default UserContainer;