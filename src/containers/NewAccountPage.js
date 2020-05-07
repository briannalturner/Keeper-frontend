import React from 'react'
import NewAccountForm from '../components/NewAccountForm'

class NewAccountPage extends React.Component {

    render() {
        return (
            <div className="side-margins">
                <NewAccountForm login={this.props.login} currentUser={this.props.currentUser}/>
            </div>
        )
    }
}

export default NewAccountPage;