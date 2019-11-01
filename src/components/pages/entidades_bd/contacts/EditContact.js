import React, { Component } from 'react';
import TextInputGroup from '../../layout/TextInputGroup';
import PropTypes from 'prop-types';
import {UpdateContact,getContact} from '../../../actions/contactActions'
import { connect } from 'react-redux';

class EditContact extends Component {
  state = {
    nombre: '',
    apellido: '',
    user: '',
    password: '',
    rol: '',
    errors: {}
  };

  //pra mostrar los datos a editar 

  UNSAFE_componentWillReceiveProps(nextProps, nextState){
    const{nombre,apellido,user,password,rol}= nextProps.contact;
    
    this.setState({
      nombre,apellido,user,password,rol
    })
  }

  componentDidMount(){
     const {id} = this.props.match.params;
     this.props.getContact(id);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { nombre,apellido,user,password,rol } = this.state;

    // Check For Errors
    if (nombre === '') {
      this.setState({ errors: { nombre: 'Name is required' } });
      return;
    }

    if (apellido === '') {
      this.setState({ errors: { apellido: 'Email is required' } });
      return;
    }

   if (user === '') {
      this.setState({ errors: { user: 'Phone is required' } });
      return;
    }

    const {id} = this.props.match.params;

    const updContact = {
       id,
       nombre,apellido,user,password,rol
    };

      //// UPDATE CONTACT ////
    
     this.props.UpdateContact(updContact)

    // Clear State
    this.setState({
      nombre: '',
      apellido: '',
      user: '',
      password: '',
      rol: '',
      errors: {}
     
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { nombre,apellido,user,password,rol, errors } = this.state;

    return (
      <div className="card" style={{ color: 'blue', maxWidth: '40%' ,minHeight:'20%'}}>
        <div className="card-header" > Editar Usuario</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="nombre"
              placeholder="Enter Name"
              value={nombre}
              onChange={this.onChange}
              error={errors.nombre}
            />
            <TextInputGroup
              label="Apellido"
              name="apellido"
              placeholder="Enter Email"
              value={apellido}
              onChange={this.onChange}
              error={errors.apellido}
            />
            <TextInputGroup
              label="Usuario"
              name="user"
              placeholder="Enter Phone"
              value={user}
              onChange={this.onChange}
              error={errors.user}
            />
             <TextInputGroup
              label="Password"
              name="password"
              placeholder="Enter Phone"
              value={password}
              onChange={this.onChange}
              error={errors.password}
            />
            <TextInputGroup
              label="Rol"
              name="rol"
              placeholder="Enter Phone"
              value={rol}
              onChange={this.onChange}
              error={errors.rol}
            />
            <input
              type="submit"
              value="Modificar Usuario"
              className="btn btn-primary btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

EditContact.propTypes ={
  contact: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired

}


const mapStateToProps= state => ({
  contact: state.contact.contact
})

export default connect(mapStateToProps,{ getContact, UpdateContact })(EditContact);
