import React, { Component } from 'react'
import FormInput from './FormInput'
import './Sign.style.scss'
export default class Signup extends Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            pwd:''
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({
            email:'',
            pwd:''
        })
    }
    handleChange=(e)=>{
        const {name, value}=e.target;
        this.setState({
        [name]:value
        })

    }
    render() {
        return (
            <div className="sign" >
                <h1>I dont have an account</h1>
                <form>        
                         <FormInput type="text" placeholder="email" name="email"value={this.state.email} handleChange={this.handleChange} label="email" required/>
              <br/>
               
                <FormInput type="password" placeholder="password" name="pwd"value={this.state.pwd} handleChange={this.handleChange} label="password" required/>
             <button type="submit" className="button">Signup</button>
                </form>


            </div>
        )
    }
}
