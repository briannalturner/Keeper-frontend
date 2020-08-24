import React from 'react'
// import { Redirect } from 'react-router-dom'

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
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps.user)
        // if (nextProps.user) {
            this.setState({
                firstName: nextProps.user.user_data.first_name,
                lastName: nextProps.user.user_data.last_name,
                gender: nextProps.user.user_data.gender,
                birthdate: nextProps.user.user_data.birthdate,
                likesWomen: nextProps.user.user_data.likes_women,
                likesMen: nextProps.user.user_data.likes_men,
                likesOther: nextProps.user.user_data.likes_other,
                username: nextProps.user.user_data.username,
                password: nextProps.user.user_data.password,
                image: nextProps.user.user_data.image,
                orientation: nextProps.user.user_data.orientation,
                bio: nextProps.user.user_data.bio,
                asexual: nextProps.user.user_data.asexual
            })
        // }
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
                window.location = "/profile"
            })
        }
    }

    onChange = (e) => {
        console.log(e.target.name)
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
        // console.log("file to upload:", e.target.files[0])
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
        // console.log(btoa(binaryString))
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
            <div className="m-5">
                <div className="white-text row">
                    <div className="col-12">
                        <h1>Edit Profile</h1>
                    </div>
                </div>
                <div className="white-text row">
                    <div className="col-12">
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
                            <div className="form-row justify-content-center my-2">
                                <div className="col-md-3">
                                    <label>First Name</label>
                                    <input onChange={(e) => this.onChange(e)} value={this.state.firstName} type="text" name="firstName" className="form-control" placeholder="First name"/>
                                </div>
                                <div className="col-md-3">
                                    <label>Last Name</label>
                                    <input onChange={(e) => this.onChange(e)} value={this.state.lastName} type="text" name="lastName" className="form-control" placeholder="Last name"/>
                                </div>
                                <div className="form-row">
                                    <div className="col-md">
                                        <label>Gender</label>
                                        {this.genderSelect()}
                                    </div>
                                    <div className="col-md">
                                        <label>Birthday</label>
                                        <input onChange={(e) => this.onChange(e)} value={this.state.birthdate} name="birthdate" className="form-control" type="date"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row justify-content-center">
                                <div className="col-md-4">
                                    <label>Orientation</label>
                                    <input onChange={(e) => this.onChange(e)} value={this.state.orientation} name="orientation" type="text" className="form-control" placeholder="Orientation"/>
                                </div>
                            </div>
                            <div className="form-row justify-content-center">
                                <div className="col-md-8">
                                    <label>Bio</label>
                                    <textarea onChange={(e) => this.onChange(e)} value={this.state.bio} name="bio" className="form-control" placeholder="write a little about yourself..."></textarea>
                                </div>
                            </div>
                            <div>
                                <img alt="" className="img-thumbnail my-3" id="profile-picture" src={"data:image/png;base64," + this.state.image}/>
                                <div onChange={(e) => this.onChangeImage(e)} className="form-row justify-content-center  ml-5 pl-5 my-2">
                                    <input className="" name="image" id="file" accept=".jpg, .jpeg, .png" type="file"/>
                                </div>
                            </div>
                            <button type="submit" className="rounded btn-rounded my-4">Submit</button>
                        </form>
                        :
                        null
                    }
                    </div>
                </div>
            </div>

        )
    }
}

export default EditAccountForm;