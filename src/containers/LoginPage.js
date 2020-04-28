import React from 'react'
import LoginForm from '../components/LoginForm'

class LoginPage extends React.Component {

    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "ties-background"
    }

    render() {
        return (
            <div className="login-page card login-card">
                <h1>Login</h1>
                <a href="/signup">create an account</a>
                <LoginForm login={this.props.login}/>
            </div>
        )
    }
}

export default LoginPage;