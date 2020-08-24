import React from 'react'

class MeetCard extends React.Component {

    onLike = (e) => {
        console.log(e.target)
    }

    render() {
        return (
            <div className="clickable card-grow m-1" onClick={() => window.location = `/user/${this.props.user.id}`}>
                <div className="card border-0" style={{width: "18rem"}}>
                    <img src={"data:image/png;base64," + this.props.user.image} className="card-img-top border-radius" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title"><strong>{this.props.user.first_name + " " + this.props.user.last_name}</strong></h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default MeetCard;