import React, { Component } from 'react';
import TextInputGroup from 'components/layout/TextInputGroup';
import PropTypes from 'prop-types';
import {addOrganismo} from 'actions/organismoActions'
import { connect } from 'react-redux';
import { Checkbox } from '@material-ui/core';


class AddOrganismo extends Component {
  state = {
    nombre: '',
    siglas: '',
    activo: '',
    errors: {}
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { nombre, activo ,siglas} = this.state;

    // Check For Errors
    if (nombre === '') {
      this.setState({ errors: { nombre: 'Nombre es obigatorio' } });
      return;
    }

    if (siglas === '') {
      this.setState({ errors: { siglas: 'Siglas es obigatorio' } });
      return;
    }

   

    const newOrganismo = {
      nombre, activo ,siglas
      
    };

    //// SUBMIT CONTACT ////

    this.props.addOrganismo(newOrganismo);

    // Clear State 
    this.setState({
      
      nombre: '',
      siglas: '',
      activo: '',
      errors: {}
      
    });

    this.props.history.push('/admin/visitantes');
  };

    handleChange =  name => event => {
    this.setState({[name]: event.target.checked});
   };
 
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const {  nombre, activo ,siglas,errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Insertar Organismo</div>
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
              label="Siglas"
              name="siglas"
              placeholder="Ingresar Siglas"
              value={siglas}
              onChange={this.onChange}
              error={errors.siglas}
            />
              
        <label> Siglas:
        <Checkbox
        checked={activo}
        onChange={this.handleChange('activo')}
        value="activo"
        inputProps={{
          'aria-label': 'primary checkbox',
        }}
      />
        </label>
       
            <input
              type="submit"
              value="Agregar Organismo"
              className="btn btn-primary btn-block"
            />

          </form>
        </div>
      </div>
    );
  }
}

AddOrganismo.propTypes ={
  addOrganismo: PropTypes.func.isRequired
}

export default connect(null,{addOrganismo}) (AddOrganismo);
