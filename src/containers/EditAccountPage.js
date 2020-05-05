import React from 'react'
import EditAccountForm from '../components/EditAccountForm'

class EditAccountPage extends React.Component {

    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "profile-page"
    }

    render() {
        return(
            <div className="white-text margins"><EditAccountForm user={this.props.user}/></div>
        )
    }
}

export default EditAccountPage;