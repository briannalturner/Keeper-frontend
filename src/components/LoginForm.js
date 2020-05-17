import React from 'react'

class LoginForm extends React.Component {

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.login(e)}>
                    <div className="form-group">
                        <label>Username</label>
                        <input name="username" className="login-username form-control" placeholder="Username"/>
                        <label>Password</label>
                        <input className="login-password form-control" name="password" type="password" placeholder="Password"/><br></br>
                        <button className="btn btn-outline-dark login-button">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm;