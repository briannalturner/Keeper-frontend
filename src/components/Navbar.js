import React from 'react'

class Navbar extends React.Component {
    render() {
        return (
            <div className="nav">
                <div className="ui top fixed menu">
                    <div className="item">
                        <img onClick={() => window.location="/"} src="../../amortentia.png" alt="logo"/>
                    </div>
                    <a className="item" href="/meet">Meet</a>
                    <a className="item" href="/users">Search Users</a>
                    <a className="item" href="/login">Login</a>
                </div>
            </div>
        )
    }
}

export default Navbar;