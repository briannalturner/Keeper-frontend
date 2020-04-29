import React from 'react'
import QuoteContainer from '../components/QuoteContainer'
import UserDashboard from '../components/UserDashboard'

class HomePage extends React.Component {
    
    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "profile-page"
    }

    render() {
        return (
            <div className="margins">
                <div>Home Page</div>
                <QuoteContainer />
                <UserDashboard />
            </div>
        )
    }
}

export default HomePage;