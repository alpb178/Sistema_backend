
import PropTypes from 'prop-types';

import React, { Component } from 'react'
import {getContact} from '../../actions/contactActions'
import { connect } from 'react-redux';
import classnames from 'classnames';



 class Login extends Component {
    state = {
        user: '',
        password:'',
       
      };
    
      onSubmit = (e) => {
        e.preventDefault();
    
        const { user,password } = this.state;
       
               
        // Clear State 
        this.setState({
          user: '',
          password: '',
          
        });
    
       
        this.props.history.push('/home');
      };
    
     
      onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { user,password} = this.state;
        return (
     <div className="row"> 
            <div className="col-md-6 mx-auto" >
                <div className="card">
                    <div className="card-body">
                        <h1 className="text-center pb-4 pt-3">
                            <span className="text-primary">
                                <i className="fas fa-lock">
                                    Login
                                </i>
                            </span>
                        </h1>
                         <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label >Usuario</label>
                                <input
                                type="text"
                                className="form-control"
                                name="user"
                                value={user}
                                required
                                onChange={this.onChange}
                             
                                />
                                
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">password</label>
                                <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={this.onChange}
                                required
                               />
                            </div>
                            <input type="submit" 
                            value="Login" 
                            className="btn btn-primary btn-block"
                            />
                            
                         </form>
                         

                    </div>
                </div>
            </div>
                
            </div>
        )
    }
}

export default connect(null,{getContact}) (Login); 