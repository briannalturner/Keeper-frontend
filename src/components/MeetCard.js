import React from 'react'

class MeetCard extends React.Component {

    onLike = (e) => {
        console.log(e.target)
    }

    render() {
        return (
            <div className="clickable" onClick={() => window.location = `/user/${this.props.user.id}`}>
                <div className="card">
                    <img src={"data:image/png;base64," + this.props.user.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.user.first_name + " " + this.props.user.last_name}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default MeetCard;