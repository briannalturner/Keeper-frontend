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

    render() {
        return (
            <div className="white-text margins">
                {
                    this.state.user !== null && this.props.currentUser ? 
                    <div className="">
                        <br></br>
                        <img alt="" className="float-left rounded profile-main-pic fivepx" src={"data:image/png;base64," + this.state.user.image}/>
                        <div className="tenpx">
                            <h1 className="text-left">{this.state.user.first_name + " " + this.state.user.last_name}</h1>
                            <h2 className="text-left">{this.state.user.house}</h2>
                            <p className="text-left">Identifies as: {this.state.user.gender.charAt(0).toUpperCase() + this.state.user.gender.slice(1)}, Orientation: {this.state.user.orientation.charAt(0).toUpperCase() + this.state.user.orientation.slice(1)}</p>
                            <p className="text-left">{this.state.user.bio}</p>
                            <br></br>
                            {this.props.currentUser.likees.find(likee => likee.id === this.state.user.id) ? <button type="button" className="btn btn-outline-danger btn-lg float-left" disabled>Liked</button> : <button className="btn btn-outline-danger btn-lg float-left" onClick={(e) => this.props.newLike(e, this.state.user)}>Like</button> }
                        </div>
                    </div> :
                    null
                } 
            </div>
        )
    }
}

export default UserContainer;