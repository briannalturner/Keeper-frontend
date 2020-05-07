import React from 'react'
import {NavLink} from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav style={{backgroundColor: "white"}} className="navbar navbar-expand-lg navbar-light fixed-top">
                    <a className="navbar-brand" href="/">
                        <img src="../../keeper.png" width="45" height="45" alt="logo"/>
                    </a> 
                    <h1 className="yellow-text clickable" onClick={() => window.location="/"}>
                        <strong>Keeper</strong>
                    </h1>
                    <span className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                        {this.props.currentUser !== null ? 
                            <span className="navbar-nav ml-auto">
                                <h4 className="mx-4 my-2 txt-grow">
                                    <NavLink className="inactive" activeClassName="active" to="/meet">Meet</NavLink>
                                </h4>
                                {/* <span className="tenpx txt-grow">
                                    <NavLink className="inactive" activeClassName="active" to="/profile">My Profile</NavLink>
                                </span>
                                <span className="tenpx txt-grow">
                                    <NavLink className="inactive" activeClassName="active" to="/login" onClick={this.props.logout}>Logout</NavLink>
                                </span> */}
                                <div className="dropdown">
                                    <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {this.props.currentUser.user_data.first_name + " " + this.props.currentUser.user_data.last_name}
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        {/* <NavLink className="inactive dropdown-item" activeClassName="active" to="/meet">Meet</NavLink> */}
                                        <NavLink className="inactive dropdown-item" activeClassName="active" to="/profile">My Profile</NavLink>
                                        <NavLink className="inactive dropdown-item" activeClassName="active" to="/login" onClick={this.props.logout}>Logout</NavLink>
                                    </div>
                                </div>
                                
                            </span> :
                            <span className="navbar-nav ml-auto">
                                <span className="tenpx txt-grow">
                                    <NavLink className="inactive" activeClassName="active" to="/login">Login</NavLink>
                                </span>
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