import React from 'react'

class UserNav extends React.Component {

    render() {
        return (
            <nav className="navbar">
                <span className="float-middle">
                    <a href="/inbox">
                        <button className="btn btn-warning btn-lg fivepx">Inbox</button>
                    </a>
                    <a href="/profile/matches">
                        <button className="btn btn-warning btn-lg fivepx">My Matches</button>
                    </a>
                    <a href="/profile/edit">
                        <button className="btn btn-warning btn-lg fivepx">Edit Profile</button>
                    </a>
                </span>
            </nav>
        )
    }
}

export default UserNav;