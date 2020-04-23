import React from 'react'

class NewAccountForm extends React.Component {

    render() {
        return (
            <div >
                <h2>Create an Account</h2>
                <form className="ui form">
                    <span className="fivepx">
                        <input className="four wide field" placeholder="first name"/>
                    </span>
                    <span className="fivepx">
                        <input className="four wide field" placeholder="last name" />
                    </span>
                    <br></br>
                    <span className="fivepx">
                        <textarea className="eight wide field" placeholder="bio"></textarea>
                    </span>
                </form>
            </div>
        )
    }
}

export default NewAccountForm;