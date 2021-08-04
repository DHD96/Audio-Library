import React, { Component } from 'react';
import './signIn.css';
import Input from '../Input/Input';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import validator from 'validator';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import { sha256, sha224 } from 'js-sha256';
import instance  from '../../instance/axios';
import { Redirect } from 'react-router';

class SignIn extends Component {

    state = {
        form:
        {
            email:
            {
                value: "",
                isValid: false,
                rules: {
                    required: true,
                    email: true
                },
                touched: false

            },
            name:
            {
                value: "",
                isValid: false,
                rules: {
                    required: true
                },
                touched: false

            },
            password:
            {
                value: "",
                isValid: false,
                rules: {
                    required: true,
                    minLength: 8,
                    isPassword: true
                },
                touched: false

            },
            confirmPassword:
            {
                value: "",
                isValid: false,
                rules: {
                    required: true,
                    minLength: 8,
                    isPassword: true
                },
                touched: false
            }

        },
        showSignIn: true
    }

    validate(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }
        if (rules.minLength) {
            isValid = (rules.minLength < value.trim().length) && isValid;
        }
        if (rules.email) {
            isValid = isValid && validator.isEmail(value);
        }
        return isValid;
    }

    submitHandler = (event) => {
        event.preventDefault();
        //check password if sign in check if password == confirm password if sign up
        //axios post
        const password =sha256(this.state.form.password.value);
        if(this.state.showSignIn){
            this.props.onAuth(this.state.form.email.value, password, this.state.showSignIn);          
        }
        else{
            this.props.onAuth(this.state.form.email.value, password, this.state.showSignIn);
            const info = {
                name: this.state.form.name.value,
                email: this.state.form.email.value,
                password: password
            }
            instance.post('/accountInfo.json',info);
        }
    }

    toggleHandler() {
        const doesShow = this.state.showSignIn;
        this.setState({ showSignIn: !doesShow });
    }

    inputChangedHandler = (event, inputId) => {
        let updatedForm = { ...this.state.form };
        let updatedElement = { ...this.state.form[inputId] };
        updatedElement.value = event.target.value;
        updatedElement.touched = true;
        updatedElement.isValid = this.validate(updatedElement.value, updatedElement.rules);
        updatedForm[inputId] = updatedElement;
        this.setState({ form: updatedForm });
    };

    render() {
        return (
            <div className="box">
                <div className="form">
                    <div className="container">
                        <div className="text-left">
                            <h1>{this.state.showSignIn ? "Sign In" : "Sign Up"}</h1>

                            <Button onClick={this.toggleHandler.bind(this)}>{this.state.showSignIn ? "Switch to Sign up" : "Switch to Sign in"}</Button>
                        </div>
                    </div>
                    <form onSubmit={this.submitHandler}>
                        {this.state.showSignIn ? null : <Input invalid={!this.state.form.name.isValid && this.state.form.name.touched} type="text" name="name" placeholder="Your Name" label="Name" onChange={(event) => this.inputChangedHandler(event, "name")}></Input>}
                        <Input invalid={!this.state.form.email.isValid && this.state.form.email.touched} type="text" name="email" placeholder="Your Email" label="Email" onChange={(event) => this.inputChangedHandler(event, "email")}></Input>
                        <Input invalid={!this.state.form.password.isValid && this.state.form.password.touched} type="password" name="password" placeholder="Your Password" label="Password" onChange={(event) => this.inputChangedHandler(event, "password")}></Input>
                        {this.state.showSignIn ? null : <Input invalid={!this.state.form.confirmPassword.isValid && this.state.form.confirmPassword.touched} type="password" name="confirmPassword" placeholder="Confirm Password" label="Confirm Password" onChange={(event) => this.inputChangedHandler(event, "confirmPassword")}></Input>}
                        <div className="container">
                            <div className="text-left">
                                <Button type="submit" className="btn" onClick={this.submitHandler}>{this.state.showSignIn ? "Sign In" : "Sign Up"}</Button>
                            </div>
                        </div>
                        {this.props.isError? <div className="error">Wrong Email or Password!</div>:null}
                        {this.props.isRedirect? <Redirect to='/Audio-Library'></Redirect>: null}
                    </form>
                </div>
            </div>);
    }
}

const mapStateToProps = (state) =>{
    
    return {
        isError : state.error !== null,
        isRedirect: state.redirect
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignIn) => dispatch(actions.auth(email, password, isSignIn))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);