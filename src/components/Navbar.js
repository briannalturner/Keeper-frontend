import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav style={{backgroundColor: "white"}} className="navbar navbar-expand-lg navbar-light fixed-top">
                    <a className="navbar-brand" href="/">
                        <img src="../../keeper.png" width="50" height="50" alt="logo"/>
                    </a> 
                    <h1 className="yellow-text clickable" onClick={() => window.location="/"}>
                        <strong>Keeper</strong>
                    </h1>
                    <span>
                        {this.props.currentUser !== null ? 
                            <span className="navbar-text">
                                <span className="tenpx">
                                    <Link to="/meet">Meet</Link>
                                </span>
                                <span className="tenpx">
                                    <Link to="/profile">My Profile</Link>
                                </span>
                                <span className="tenpx">
                                    <Link to="/logout">Logout</Link>
                                </span>
                            </span> :
                            <span className="tenpx">
                                <Link to="/login">Login</Link>
                            </span>
                        }
                    </span>
                </nav>
                <div className="blank"></div>
            </div>
        )
    }
}

export default Navbar;