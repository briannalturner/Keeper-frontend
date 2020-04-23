import React from 'react'

class MeetCard extends React.Component {

    render() {
        return (
            <div>
                <div className="card">
                    <div className="content">
                        <img className="right floated mini ui image" src="/images/avatar/large/elliot.jpg" />
                        <div className="header">
                            {this.props.user.first_name + " " + this.props.user.last_name}
                        </div>
                        <div className="meta">
                            Friends of Veronika
                        </div>
                        <div className="description">
                            {this.props.user.bio}
                        </div>
                        </div>
                        <div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui basic green button">Approve</div>
                            <div className="ui basic red button">Decline</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MeetCard;