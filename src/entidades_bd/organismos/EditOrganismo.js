import React, { Component } from 'react';
import TextInputGroup from 'components/layout/TextInputGroup';
import PropTypes from 'prop-types';
import {updateOrganismo,getOrganismo} from '/actions/organismoActions'
import { connect } from 'react-redux';
import { Checkbox } from '@material-ui/core';

class EditOrganismo extends Component {
  state = {
    nombre: '',
    siglas: '',
    activo: '',
    errors: {}
  };

  //pra mostrar los datos a editar 

  UNSAFE_componentWillReceiveProps(nextProps, nextState){
    const{nombre, activo ,siglas}= nextProps.organismo;
    
    this.setState({
      nombre, activo ,siglas
    })
  }

  componentDidMount(){
     const {id} = this.props.match.params;
     this.props.getOrganismo(id);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { nombre, activo ,siglas } = this.state;

    // Check For Errors
    if (nombre === '') {
      this.setState({ errors: { nombre: 'Nombre es obigatorio' } });
      return;
    }

    if (siglas === '') {
      this.setState({ errors: { siglas: 'Siglas es obigatorio' } });
      return;
    }

    const {id} = this.props.match.params;

    const updOrganismo = {
       id,
       nombre, activo ,siglas
    };

      //// UPDATE CONTACT ////
    
     this.props.updateOrganismo(updOrganismo)

    // Clear State
    this.setState({
      nombre: '',
      siglas: '',
      activo: '',
      errors: {}
     
    });

    this.props.history.push('/admin/user');
  };

  handleChange =  name => event => {
    this.setState({[name]: event.target.checked});
   };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { nombre, activo ,siglas, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Insrtar Organismo</div>
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
              value="Editar Organismo"
              className="btn btn-primary btn-block"
            />

          </form>
        </div>
      </div>
    );
  }
}

EditOrganismo.propTypes ={
  organismo: PropTypes.object.isRequired,
  getOrganismo: PropTypes.func.isRequired

}


const mapStateToProps= state => ({
  organismo: state.organismo.organismo
})

export default connect(mapStateToProps,{ getOrganismo, updateOrganismo })(EditOrganismo);
