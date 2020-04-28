import React from 'react'

class UserNav extends React.Component {

    render() {
        return (
            <nav className="navbar fixed-bottom navbar-light bg-light">
                <span>
                    <a href="/profile/inbox">
                        <button className="btn btn-outline-danger btn-lg fivepx">Inbox</button>
                    </a>
                    <a href="/profile/matches">
                        <button className="btn btn-outline-danger btn-lg fivepx">My Matches</button>
                    </a>
                    <a href="/profile/edit">
                        <button className="btn btn-outline-danger btn-lg fivepx">Edit Profile</button>
                    </a>
                </span>
            </nav>
        )
    }
}

export default UserNav;