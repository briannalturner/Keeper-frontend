import React from 'react'
import QuoteContainer from '../components/QuoteContainer'
import UserDashboard from '../components/UserDashboard'

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div>Home Page</div>
                <QuoteContainer />
                <UserDashboard />
            </div>
        )
    }
}

export default HomePage;