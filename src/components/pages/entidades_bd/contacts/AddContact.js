import React, { Component } from 'react';
import TextInputGroup from '../../layout/TextInputGroup';
import PropTypes from 'prop-types';
import {addContact} from '../../../actions/contactActions'
import { connect } from 'react-redux';


class AddContact extends Component {
  state = {
    nombre: '',
    apellido: '',
    user: '',
    password:'',
    rol:'',
    errors: {}
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { nombre, apellido ,user,password,rol } = this.state;

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

    if (password === '') {
      this.setState({ errors: { password: 'Phone is required' } });
      return;
    }

   

    const newContact = {
      nombre,
      apellido,
      user,
      password,
      rol
      
    };

    //// SUBMIT CONTACT ////

    this.props.addContact(newContact);

    // Clear State 
    this.setState({
      
      nombre: '',
      apellido: '',
      user: '',
      password: '',
      rol: '',
      errors: {}
    });

    this.props.history.push('/contacts');
  };

 
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const {  nombre,apellido,user,password,rol, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Nombre"
              name="nombre"
              placeholder="Ingresar el nombre"
              value={nombre}
              onChange={this.onChange}
              error={errors.nombre}
            />
            <TextInputGroup
              label="Apellido"
              name="apellido"
              placeholder="Ingresar Apellido"
              value={apellido}
              onChange={this.onChange}
              error={errors.apellido}
            />
            <TextInputGroup
              label="Usuario"
              name="user"
              placeholder="Ingresar Usuario"
              value={user}
              onChange={this.onChange}
              error={errors.usuario}
            />

            <TextInputGroup
              label="Contraseña"
              name="password"
              type="password"
              placeholder="Ingresar Contraseña"
              value={password}
              onChange={this.onChange}
              error={errors.password}
            />

           

        <label> Rol:
          <select name='rol' value={this.state.rol}  onChange={this.onChange}>
            <option  >Seleccione un rol</option>
            <option value="admin" >admin</option>
            <option value="invitado">invitado</option>
           
          </select>
        </label>
       
            <input
              type="submit"
              value="Agregar Usuario"
              className="btn btn-primary btn-block"
            />

          </form>
        </div>
      </div>
    );
  }
}

AddContact.propTypes ={
  addContact: PropTypes.func.isRequired
}

export default connect(null,{addContact}) (AddContact);
