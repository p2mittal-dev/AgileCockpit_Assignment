import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classnames from 'classnames';
class createSchools extends React.Component {
    state = {
        name: this.props.school ? this.props.school.name : '',
        email: this.props.email ? this.props.school.email : '',
        mobile: this.props.mobile ? this.props.school.mobile : '',
        username: this.props.username ? this.props.school.username : '',
        address: this.props.address ? this.props.school.address : '',
        _id: this.props.school ? this.props.school._id : null,
        errors: {},
        loading: false,
    };
    componentWillReceiveProps = nextProps => {
        this.setState({
            _id: nextProps.school._id,
            name: nextProps.school.name,
            email: nextProps.school.email,
            mobile: nextProps.school.mobile,
            username: nextProps.school.username,
            address: nextProps.school.address
        });
        this.request_data = {}
    };
    handleInput = e => {
        if (!!this.state.errors[e.target.name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({[e.target.name]: e.target.value, errors});
        } else {
            this.setState({[e.target.name]: e.target.value});
        }
    };
    handleSubmit = e => {
        e.preventDefault();
        let errors = {};
        if (this.state.name === '')
            errors.name = "Please enter name!";
        if (this.state.email === '')
            errors.email = "Please enter valid email address!";
        if (this.state.mobile === '')
            errors.mobile = "Please enter valid contact no!";
        if (this.state.username === '')
            errors.username = "Please enter your username!";
        if (this.state.address === '')
            errors.address = "Please enter your address!";
        this.setState({errors});
        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            this.saveSchool();
        }
    };
    saveSchool = async (e) => {
        //e.preventDefault();
        const res = await axios.post("/addSchool", this.state);
        if (res.data.status === 200) {
            this.props.history.push("/dashboard");
        }
    }
    render() {
        const form = (
                <div className="layout">
                    <div className="sidebar">
                        <h1>Create</h1>
                        <h1>A New Schools</h1>
                        <div className="actionBtn">
                            <button className="active"><Link to="/"><FontAwesomeIcon icon="home" className="icon"/>Home</Link></button>
                            <button className="active"><Link to="/dashboard"><FontAwesomeIcon icon="desktop" className="icon"/>Dashboard</Link></button>
                            <button className="unactive"><FontAwesomeIcon icon="pencil-alt" className="icon"/>Create Schools</button>
                        </div>
                    </div>
                    <div className="actionDiv">
                        <div className="Formdiv">
                            <form onSubmit={this.handleSubmit} className={classnames('ui', 'form', {loading: this.state.loading})}>
                                <div className={classnames('field', {error: !!this.state.errors.name})} >
                                    <label htmlFor="name">Name</label>
                                    <input className="form-control highlight" name="name" value={this.state.name} onChange={this.handleInput} type="text" id="name" />
                                    <span className="err">{this.state.errors.name}</span>
                                </div>
                                <div className={classnames('field', {error: !!this.state.errors.email})}>
                                    <label htmlFor="email">Email</label>
                                    <input className="form-control highlight" name="email" value={this.state.email} onChange={this.handleInput} type="text" id="email" />
                                    <span className="err">{this.state.errors.email}</span>
                                </div>
                                <div className={classnames('field', {error: !!this.state.errors.mobile})}>
                                    <label htmlFor="mobile">Mobile</label>
                                    <input className="form-control highlight" name="mobile" value={this.state.mobile} onChange={this.handleInput} type="text" id="mobile" />
                                    <span className="err">{this.state.errors.mobile}</span>
                                </div>
                                <div className={classnames('field', {error: !!this.state.errors.username})}>
                                    <label htmlFor="username">Username</label>
                                    <input className="form-control highlight" name="username" value={this.state.username} onChange={this.handleInput} type="text" id="username" />
                                    <span className="err">{this.state.errors.username}</span>
                                </div>
                                <div className={classnames('field', {error: !!this.state.errors.address})}>
                                    <label htmlFor="address">Address</label>
                                    <input className="form-control highlight" name="address" value={this.state.address} onChange={this.handleInput} type="text" id="address" />
                                    <span className="err">{this.state.errors.address}</span>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="primary"><FontAwesomeIcon icon="plus" className="icon"/>Add School</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                );
        return (
                <div>
                    {form}
                </div>
                );
    }
}
export default createSchools;
