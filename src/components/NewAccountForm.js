import React from 'react'

class NewAccountForm extends React.Component {

    constructor() {
        super()

        this.state = {
            firstName: "",
            lastName: "",
            house: "",
            year: 1,
            gender: "",
            birthdate: null,
            likesWomen: false,
            likesMen: false,
            likesOther: false,
            username: "",
            password: "",
            image: "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",
            orientation: "",
            bio: "",
            asexual: false
        }
    }

    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "slytherin-background"
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        if (this.state.gender === "" || this.state.house === "") {
            alert("complete form")
        } else {
            let payload = {
                first_name: this.state.firstName, 
                last_name: this.state.lastName, 
                house: this.state.house, 
                year: this.state.year, 
                gender: this.state.gender, 
                birthdate: this.state.birthdate, 
                likes_women: this.state.likesWomen, 
                likes_men: this.state.likesMen, 
                likes_other: this.state.likesOther, 
                username: this.state.username, 
                password: this.state.password, 
                image: this.state.image, 
                orientation: this.state.orientation, 
                bio: this.state.bio,
                asexual: this.state.asexual
            }
            fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            })
            .then(resp => resp.json())
            .catch(error => {
                console.error('Error:', error);
            })
            .then(json => {
                this.props.login({username: this.state.username, password: this.state.password})
            })
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeBoolean = (e) => {
        let checked = e.target.checked
        this.setState({
            [e.target.name]: checked
        })
    }

    onChangeImage = (e) => {
        console.log("file to upload:", e.target.files[0])
        let file = e.target.files[0]

        if (file) {
            const reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this)
            reader.readAsBinaryString(file)    
        }
    }

    _handleReaderLoaded = (readerEvt) => {
        let binaryString = readerEvt.target.result
        this.setState({
            image: btoa(binaryString)
        })
        const preview = document.getElementById('profile-picture')
        console.log(btoa(binaryString))
        preview.src = "data:image/png;base64," + btoa(binaryString)
    }

    render() {
        return (
            <div className="white transbox">
                <h1>Create an Account</h1>
                <br></br>
                <form onSubmit={(e) => this.onFormSubmit(e)}>
                    <h2>Who are you interested in meeting?</h2>
                    <div className="form-check form-check-inline">
                        <input onChange={(e) => this.onChangeBoolean(e)} name="likesWomen" className="form-check-input" type="checkbox" value="Women"/>
                        <label className="form-check-label">Women</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input onChange={(e) => this.onChangeBoolean(e)} name="likesMen" className="form-check-input" type="checkbox" value="Men"/>
                        <label className="form-check-label">Men</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input onChange={(e) => this.onChangeBoolean(e)} name="likesOther" className="form-check-input" type="checkbox" value="Other"/>
                        <label className="form-check-label">Other</label>
                    </div><br></br><br></br><br></br>
                <h2>Personal Information</h2>
                    <div className="form-row">
                        <div className="col-md-3">
                            <label>First Name</label>
                            <input onChange={(e) => this.onChange(e)} type="text" name="firstName" className="form-control" placeholder="First name"/>
                        </div>
                        <div className="col-md-3">
                            <label>Last Name</label>
                            <input onChange={(e) => this.onChange(e)} type="text" name="lastName" className="form-control" placeholder="Last name"/>
                        </div>
                        <div className="form-group col-md-4">
                            <label>House</label>
                            <select onChange={(e) => this.onChange(e)} name="house" className="form-control">
                                <option>Select...</option>
                                <option>Gryffindor</option>
                                <option>Hufflepuff</option>
                                <option>Ravenclaw</option>
                                <option>Slytherin</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label>Year</label>
                            <select onChange={(e) => this.onChange(e)} name="year" className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <div className="col-md">
                                <label>Gender</label>
                                <select onChange={(e) => this.onChange(e)} name="gender" className="form-control">
                                    <option>Select...</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="col-md">
                                <label>Birthday</label>
                                <input onChange={(e) => this.onChange(e)} name="birthdate" className="form-control" type="date"/>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <h2>Build Your Profile</h2>
                    <br></br>
                        <img alt="" id="profile-picture" src="data:image/png;base64,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"/>
                        <br></br>
                    <div onChange={(e) => this.onChangeImage(e)} className="form-row">
                        <input name="image" id="file" accept=".jpg, .jpeg, .png" type="file"/>
                    </div>
                    <br></br>
                    <div className="form-row">
                        <div className="col-md-4">
                            <label>Username</label>
                            <input onChange={(e) => this.onChange(e)} name="username" type="text" className="form-control" placeholder="Username"/>
                        </div>
                        <div className="col-md-4">
                            <label>Password</label>
                            <input onChange={(e) => this.onChange(e)} name="password" type="password" className="form-control" placeholder="Password"/>
                        </div>
                        <div className="col-md-4">
                            <label>Orientation</label>
                            <input onChange={(e) => this.onChange(e)} name="orientation" type="text" className="form-control" placeholder="Orientation"/>
                        </div>
                    </div><br></br>
                    <div className="form-row">
                        <div className="col-md-8">
                            <textarea onChange={(e) => this.onChange(e)} name="bio" className="form-control" placeholder="write a little about yourself..."></textarea>
                        </div>
                    </div><br></br>
                    <button type="submit" className="rounded btn-rounded">Submit</button>
                </form>
            </div>
        )
    }
}

export default NewAccountForm;