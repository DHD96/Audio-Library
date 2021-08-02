import React, {Component} from 'react';
import './signIn.css';
import Input from '../Input/Input';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { render } from '@testing-library/react';

class SignIn extends Component{

    state= {
        form:
        {
            email:
            {
                value: ""

            },
            name:
            {
                value: ""

            },
            password:
            {
                value: ""

            },
            confirmPassword:
            {
                value: ""

            },

        },
        showSignIn: true
    }

    submitHandler= (event) =>{
        event.preventDefault();
        //axios post
    }

    toggleHandler(){
        const doesShow = this.state.showSignIn;
        this.setState({ showSignIn: !doesShow });
    }

    inputChangedHandler = (event, inputId) =>{
        let updatedForm= {...this.state.form};
        let updatedElement= {...this.state.form[inputId]};
        updatedElement = event.target.value;
        updatedForm[inputId] = updatedElement;
        this.setState({form: updatedForm});
    };

    render(){
    return (
    <div className="box">
        <div className="form">
            <div className="container">
                <div className="text-left">
                    <h1>{this.state.showSignIn ? "Sign In" : "Sign Up"}</h1>

                    <Button  onClick={this.toggleHandler.bind(this)}>Toggle</Button>       
                </div>
            </div>
            <form onSubmit={this.submitHandler}>
                {this.state.showSignIn ? null : <Input type="text" name="name" placeholder="Your Name" label="Name" onChange={(event)=> this.inputChangedHandler(event,"name")}></Input>}
                <Input type="text" name="email" placeholder="Your Email" label="Email" onChange={(event)=> this.inputChangedHandler(event,"email")}></Input>    
                <Input type="password" name="password" placeholder="Your Password" label="Password" onChange={(event)=> this.inputChangedHandler(event,"password")}></Input>
                {this.state.showSignIn ? null : <Input type="password" name="confirmPassword" placeholder="Confirm Password" label="Confirm Password" onChange={(event)=> this.inputChangedHandler(event,"confirmPassword")}></Input>}
                <div className="container">
                    <div className="text-left">
                        <Button type="submit" className="btn" onClick={this.submitHandler}>{this.state.showSignIn ? "Sign In" : "Sign Up"}</Button>
                    </div>
                </div>
            </form>
        </div>
    </div>);
    }
}

export default SignIn;