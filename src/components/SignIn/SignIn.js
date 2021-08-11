import React, { useState } from 'react';
import './signIn.css';
import Input from '../Input/Input';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import validator from 'validator';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import { sha256 } from 'js-sha256';
import instance from '../../instance/axios';
import { Redirect } from 'react-router';
import { useFormik } from 'formik';



const SignIn = (props) => {
    const [showSignIn, setShowSignIn] = useState(true);
    const [isValid, setIsValid] = useState(true);
    const validate = (values) => {
        const errors = {};
        if (!values.name && !showSignIn) {
            errors.name = 'Required';

        }
        if (!values.email) {
            errors.email = 'Required';

        }
        else if (values.email && !validator.isEmail(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Required';
        }
        if (!validator.isStrongPassword(values.password, { minLength: 8 })) {
            errors.password = 'Password must contain at least 8 characters, at least one uppercase, one lowercase characters, one digit and one symbol.';
        }
        if (!values.confirmPassword && !showSignIn) {
            errors.confirmPassword = 'Required';
        }
        if (values.password !== values.confirmPassword && !showSignIn) {
            errors.confirmPassword = 'Confirmation password must be the same as the password';
        }
        
        setIsValid(Object.keys(errors).length === 0);
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validate,
        onSubmit: (values) => {
            const password = sha256(values.password);
            if (showSignIn) {
                props.onAuth(values.email, password, showSignIn);
            }
            else {
                props.onAuth(values.email, password, showSignIn);
                const info = {
                    name: values.name,
                    email: values.email,
                    password: password
                }
                instance.post('/accountInfo.json', info);
            }
        }
    })
    const toggleHandler = () => {
        if (showSignIn) {
            setShowSignIn(false);
            if(!isValid){
                setIsValid(true);
                formik.touched.email = false;
                formik.touched.password = false;
            }
        }
        else {
            setShowSignIn(true);
            if(!isValid){
                formik.touched.email= false;
                formik.touched.password = false;
                formik.touched.name = false;
                formik.touched.confirmPassword = false;
                setIsValid(true);
            }
        }
    }
    return (
        <div className="box">
            <div className="form">
                <div className="container">
                    <div className="text-left">
                        <h1>{showSignIn ? "Sign In" : "Sign Up"}</h1>

                        <Button onClick={toggleHandler}>{showSignIn ? "Switch to Sign up" : "Switch to Sign in"}</Button>
                    </div>

                    <form onSubmit={formik.handleSubmit}>
                        {showSignIn ? null : <div><Input id="name" onBlur={formik.handleBlur} value={formik.values.name} invalid={formik.errors.name && formik.touched.name} type="text" name="name" placeholder="Your Name" label="Name" onChange={formik.handleChange} />{formik.touched.name? formik.errors.name : "" }</div>}
                        <div><Input id="email" onBlur={formik.handleBlur} value={formik.values.email} invalid={formik.errors.email && formik.touched.email} type="text" name="email" placeholder="Your Email" label="Email" onChange={formik.handleChange} />{formik.errors.email && formik.touched.email && formik.errors.email}</div>
                        <div><Input id="password" onBlur={formik.handleBlur} value={formik.values.password} invalid={formik.errors.password && formik.touched.password} type="password" name="password" placeholder="Your Password" label="Password" onChange={formik.handleChange} />{formik.errors.password && formik.touched.password && formik.errors.password}</div>
                        {showSignIn ? null : <div><Input id="confirmPassword" onBlur={formik.handleBlur} value={formik.values.confirmPassword} invalid={formik.errors.confirmPassword && formik.touched.password} type="password" name="confirmPassword" placeholder="Confirm Password" label="Confirm Password" onChange={formik.handleChange} />{ formik.touched.confirmPassword? formik.errors.confirmPassword : "" }</div>}
                        <div className="container">
                            <div className="text-left">
                                <Button type="submit" className={!isValid? "disabled" : ""}>{showSignIn ? "Sign In" : "Sign Up"}</Button>
                            </div>
                        </div>
                        {props.isError ? <div className="error">Wrong Email or Password!</div> : null}
                        {props.isRedirect ? <Redirect to='/audioLibrary'></Redirect> : null}
                    </form>

                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {

    return {
        isError: state.error !== null,
        isRedirect: state.redirect
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignIn) => dispatch(actions.auth(email, password, isSignIn))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);