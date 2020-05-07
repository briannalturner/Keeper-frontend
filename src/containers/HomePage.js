import React from 'react'
// import QuoteContainer from '../components/QuoteContainer'
// import UserDashboard from '../components/UserDashboard'

class HomePage extends React.Component {
    
    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "profile-page"
    }

    render() {
        return (
            <div>
                <div className="home-page">
                    <div className="margins">
                        <div className="row floating-container">
                            <div className="col-12 m-auto">
                                <div className="box p-4">
                                    {this.props.currentUser ? 
                                         <div>
                                            <h2><strong>Hey, {this.props.currentUser.user_data.first_name}!</strong></h2>
                                            <p>Welcome back! Why don't you browse the Meet Page or check out your Inbox?</p>
                                            <span>
                                                <button className="btn btn-outline-dark tenpx" onClick={() => window.location = "/meet"}><strong>Meet Page</strong></button>
                                                <button className="btn btn-outline-dark tenpx" onClick={() => window.location = "/inbox"}><strong>My Inbox</strong></button>
                                            </span>
                                        </div>
                                    :
                                        <div>
                                            <h2><strong>Make The First Move</strong></h2>
                                            <p>Start meeting new people! If you already have an account, sign in to use Keeper.</p>
                                            <span>
                                                <button className="btn btn-outline-dark tenpx" onClick={() => window.location = "/signup"}><strong>Join</strong></button>
                                                <button className="btn btn-outline-dark tenpx" onClick={() => window.location = "/login"}><strong>Sign In</strong></button>
                                            </span>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <QuoteContainer />
                <UserDashboard /> */}
            </div>
        )
    }
}

export default HomePage;