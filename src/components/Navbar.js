import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav style={{backgroundColor: "rgb(246, 243, 250)"}} className="navbar navbar-expand-lg navbar-light fixed-top">
                    <a className="navbar-brand" href="/">
                        <img src="../../logo.png" width="50" height="50" alt="logo"/>
                    </a> 
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/meet">Meet <span className="sr-only">(current)</span></a>
                            </li>
                            {this.props.currentUser !== null ? 
                                <li className="nav-item active">
                                    <a className="nav-link" onClick={this.props.logout} href="/login">Logout<span className="sr-only">(current)</span></a>
                                </li> :
                                <li className="nav-item active">
                                    <a className="nav-link" href="/login">Login<span className="sr-only">(current)</span></a>
                                </li>
                            }
                        </ul>
                        <span className="navbar-text">
                            <Link to="/profile">My Profile</Link>
                        </span>
                    </div>
                </nav>
                <div className="blank"></div>
            </div>
        )
    }
}

export default Navbar;