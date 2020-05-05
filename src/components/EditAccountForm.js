import React from 'react'

class EditAccountForm extends React.Component {

    constructor() {
        super()

        this.state = {
            firstName: "",
            lastName: "",
            gender: "",
            birthdate: "",
            likesWomen: "",
            likesMen: "",
            likesOther: "",
            username: "",
            password: "",
            image: "",
            orientation: "",
            bio: "",
            asexual: ""
        }
    }

    componentDidMount() {
        let html = document.getElementsByTagName('body')[0]
        html.className = "slytherin-background"
        if (this.props.user) {
            this.setState({
                firstName: this.props.user.user_data.first_name,
                lastName: this.props.user.user_data.last_name,
                gender: this.props.user.user_data.gender,
                birthdate: this.props.user.user_data.birthdate,
                likesWomen: this.props.user.user_data.likesWomen,
                likesMen: this.props.user.user_data.likesMen,
                likesOther: this.props.user.user_data.likesOther,
                username: this.props.user.user_data.username,
                password: this.props.user.user_data.password,
                image: this.props.user.user_data.image,
                orientation: this.props.user.user_data.orientation,
                bio: this.props.user.user_data.bio,
                asexual: this.props.user.user_data.asexual
            })
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        if (this.state.likesMen === false && this.state.likesWomen === false && this.state.likesOther === false) {
            alert("Please indicate the genders you are interested in.")
        } else {
            let payload = {
                first_name: this.state.firstName, 
                last_name: this.state.lastName,  
                gender: this.state.gender, 
                birthdate: this.state.birthdate, 
                likes_women: this.state.likesWomen, 
                likes_men: this.state.likesMen, 
                likes_other: this.state.likesOther, 
                image: this.state.image, 
                orientation: this.state.orientation, 
                bio: this.state.bio,
                asexual: this.state.asexual
            }
            fetch(`http://localhost:3000/users/${this.props.user.user_data.id}`, {
                method: "PATCH",
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
                console.log(json)
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

    genderSelect = () => {
        // console.log(this.props.user.user_data.gender)
        if (this.props.user.user_data.gender === "female") {
            return (
                <select onChange={(e) => this.onChange(e)} name="gender" className="form-control">
                    <option>Select...</option>
                    <option>Male</option>
                    <option selected>Female</option>
                    <option>Other</option>
                </select>
            )
        } else if(this.props.user.user_data.gender === "male") {
            return (
                <select onChange={(e) => this.onChange(e)} name="gender" className="form-control">
                    <option>Select...</option>
                    <option selected>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
            )
        } else {
            return (
                <select onChange={(e) => this.onChange(e)} name="gender" className="form-control">
                    <option>Select...</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option selected>Other</option>
                </select>
            )
        }
    }

    render() {
        return (
            <div className="white-text transbox">
                <h1>Edit Profile</h1>
                <br></br>
                {
                    this.props.user ?
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
                                <input onChange={(e) => this.onChange(e)} value={this.props.user.user_data.first_name} type="text" name="firstName" className="form-control" placeholder="First name"/>
                            </div>
                            <div className="col-md-3">
                                <label>Last Name</label>
                                <input onChange={(e) => this.onChange(e)} value={this.props.user.user_data.last_name} type="text" name="lastName" className="form-control" placeholder="Last name"/>
                            </div>
                            <div className="form-row">
                                <div className="col-md">
                                    <label>Gender</label>
                                    {this.genderSelect()}
                                </div>
                                <div className="col-md">
                                    <label>Birthday</label>
                                    <input onChange={(e) => this.onChange(e)} value={this.props.user.user_data.birthdate} name="birthdate" className="form-control" type="date"/>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <h2>Build Your Profile</h2>
                        <br></br>
                            <img alt="" id="profile-picture" src={"data:image/png;base64," + this.props.user.user_data.image}/>
                            <br></br>
                        <div onChange={(e) => this.onChangeImage(e)} className="form-row">
                            <input name="image" id="file" accept=".jpg, .jpeg, .png" type="file"/>
                        </div>
                        <br></br>
                        <div className="form-row">
                            <div className="col-md-4">
                                <label>Orientation</label>
                                <input onChange={(e) => this.onChange(e)} value={this.props.user.user_data.orientation} name="orientation" type="text" className="form-control" placeholder="Orientation"/>
                            </div>
                        </div><br></br>
                        <div className="form-row">
                            <div className="col-md-8">
                                <textarea onChange={(e) => this.onChange(e)} value={this.props.user.user_data.bio} name="bio" className="form-control" placeholder="write a little about yourself..."></textarea>
                            </div>
                        </div><br></br>
                        <button type="submit" className="rounded btn-rounded">Submit</button>
                    </form>
                    :
                    null
                }
            </div>
        )
    }
}

export default EditAccountForm;