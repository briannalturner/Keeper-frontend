import React from 'react'

class LikedMeCard extends React.Component {

    render() {
        return (
            <div className="">
                <div className="card card-grow">
                    <img onClick={() => window.location = `/user/${this.props.user.id}`} src={"data:image/png;base64," + this.props.user.image} className="clickable card-img-top" alt="..." />
                    <div className="card-body">
                        <h2 className="">{this.props.user.first_name + " " + this.props.user.last_name}</h2>
                        <div className="">
                            <button className="btn btn-outline-info btn-lg tenpx float-middle" onClick={(e) => this.props.newMessage(e, this.props.user)}>Message</button>
                            <button className="btn btn-outline-warning btn-lg tenpx float-middle" onClick={(e) => this.props.newLike(e, this.props.user)}>Like</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LikedMeCard;