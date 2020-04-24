import React from 'react'

class MeetCard extends React.Component {

    render() {
        return (
            <div className="clickable" onClick={() => window.location = `/user/${this.props.user.id}`}>
                <div className="card">
                    <img src={"data:image/png;base64," + this.props.user.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.user.first_name + " " + this.props.user.last_name}</h5>
                        <p className="card-text">{this.props.user.bio}</p>
                        <a href={`/user/${this.props.user.id}`} className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default MeetCard;