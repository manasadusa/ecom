import React, { Component } from 'react'
import FormInput from './FormInput'
import './Sign.style.scss'
export default class Signin extends Component {
    constructor(props){
        super(props)  
    this.state={
        email:'',
        pwd:''

    }  }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({
            email:'',
            pwd:''
        })

    }

    handleChange=(e)=>{
        const{name, value}=e.target;
        this.setState({[name]:value})

    }
    render() {
        return (
            <div className="sign" >
                <h1>I already have an account!!</h1>
                <form onSubmit={this.handleSubmit}>
             <FormInput type="text" placeholder="email" value={this.state.email} label="email" handleChange={this.handleChange} name="email" required/>
              <br/>
                <FormInput type="password" placeholder="password" value={this.state.pwd} label="password" handleChange={this.handleChange} name="pwd" required/>
               <br/>
                <button type="submit" className="button">Submit</button>
                </form>
            </div>
        )
    }
}
