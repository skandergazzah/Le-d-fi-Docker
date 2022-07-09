import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import './Signup.css';
import {Link} from 'react-router-dom';


class Signup extends Component {
    constructor() {
        super();
        this.state={
            fullName:'',
            userName:'',
            email:'',
            password:''
        }

        this.changeFullName = this.changeFullName.bind(this);
        this.changeUserName = this.changeUserName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword =this.changePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

  changeFullName(event){
      this.setState({
          fullName:event.target.value
      })}
   
   changeUserName(event){
       this.setState({
           userName:event.target.value
       })}
   
   changeEmail(event){
       this.setState({
           email:event.target.value
       })}
       
    changePassword(event){
        this.setState({
            password:event.target.value
        })}
    
    onSubmit(event){
        const registered = {
            fullName:this.state.fullName,
            userName:this.state.userName,
            email:this.state.email,
            password:this.state.password
        }
    axios.post('http://localhost:5000/app/signup', registered)
    .then(Response =>console.log(Response.data))
  
  
    this.setState = {
        fullName:'',
        userName:'',
        email:'',
        password:''
    }  

}
        
    render() { 
        return ( 
            <div>
                <div className='wrapperSU'>
                    <div className='form'>
                        <h1 className='title'>WELCOME SURF LOVERS</h1>
                        <form onSubmit={this.onSubmit} className='champ'>
                            
                            <input 
                            type='text'
                            placeholder='FullName' 
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className='input'
                            />

                           <input 
                            type='text'
                            placeholder='UserName' 
                            onChange={this.changeUserName}
                            value={this.state.userName}
                            className='input'
                            />

                           <input 
                            type='text'
                            placeholder='E-Mail' 
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='input'
                            />

                            <input 
                            type='password'
                            placeholder='Password' 
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='input'
                            />
                        <div align='center' className='placebtn'>
                               {/* <input type='submit' className='btn ' value='Sign Up' /> */}
                               <Link to="/Login" className="btn">Start Here</Link>
                        </div>
                        </form>
                    </div>

                </div>
                <Footer />
            </div>
         );
    }
}
 
export default Signup;
