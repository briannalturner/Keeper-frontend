import React from 'react'

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img src="../../amortentia.png" width="30" height="30" alt="logo"/>
                </a> 
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/meet">Meet <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/users">Browse Users <span className="sr-only">(current)</span></a>
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
                </div>
            </nav>
        )
    }
}

export default Navbar;