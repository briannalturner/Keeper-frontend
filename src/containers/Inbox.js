import React from 'react'

class Inbox extends React.Component {

    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "profile-page"
    }

    

    render() {
        return (
            <div className="margins">
                <h1 className="text-left white-text">Inbox</h1>
                <div className="container"> 
                    <div className="row">
                        <div className="col card fivepx">
                            <h4>All Conversations</h4>
                        </div>
                        <div className="col card fivepx">
                            <h4>Active Conversation</h4>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Inbox;