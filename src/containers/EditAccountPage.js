import React from 'react'

class EditAccountPage extends React.Component {

    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "profile-page"
    }

    render() {
        return(
            <div className="white-text">Edit Account Page</div>
        )
    }
}

export default EditAccountPage;