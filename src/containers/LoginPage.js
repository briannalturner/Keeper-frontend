import React from 'react'
import LoginForm from '../components/LoginForm'

class LoginPage extends React.Component {

    render() {
        return (
            <div>
                <a href="/signup">create an account</a>
                <LoginForm />
            </div>
        )
    }
}

export default LoginPage;