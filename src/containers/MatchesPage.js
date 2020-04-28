import React from 'react'

class MatchesPage extends React.Component {

    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "profile-page"
    }

    

    render() {
        return (
            <div className="white-text margins">Matches Page</div>
        )
    }
}

export default MatchesPage;