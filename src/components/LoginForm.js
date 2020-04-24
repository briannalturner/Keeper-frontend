import React from 'react'

class LoginForm extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input className="form-control" placeholder="Username"/>
                        <label>Password</label>
                        <input className="form-control" placeholder="Password"/><br></br>
                        <button className="btn btn-outline-dark">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm;