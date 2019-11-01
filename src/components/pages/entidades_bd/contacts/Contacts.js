import React, { Component } from 'react';
//import Contact from './Contact';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import{getContacts,DeleteContact} from '../../../actions/contactActions'
import MaterialTable from 'material-table'
import { Link } from 'react-router-dom';

class About extends Component {
  componentDidMount(){
    this.props.getContacts(); 
  }
 
  onDeleteClick = id => {
    this.props.DeleteContact(id)
    
  };

  render() {
    const { contacts } = this.props;
    return (
      <div style={{ maxWidth: '85%',maxHeight:'50%' }}>
        <MaterialTable
          columns={[
            { title: 'Nombre', field: 'name' },
            { title: 'Apellidos', field: 'email' },
            { title: 'Usuario', field: 'phone' },
            { title: 'Password', field: 'password' },
            { title: 'Rol', field: 'rol' },
            { title:
            <Link to="/contact/add" className="nav-link">
              <i className="fas fa-plus" />   Agregar nuevo Usuario
            </Link>
        ,field:'actions'}
           
          ]}
         
          data= {contacts.map(contact => (
            { name: contact.nombre , email: contact.apellido, phone: contact.user,password:contact.password,rol: contact.rol, actions: 
           <p style={{align: 'center'}}>
           <Link to={`contact/edit/${contact.id}`}>
           <i
             className="fas fa-pencil-alt"
             style={{
               cursor: 'pointer',
               float: 'center-left',
               color: 'black',
               margin: '1rem'
             }}
           />
         </Link> 
           <i
              className="fas fa-times"
              style={{ cursor: 'pointer', float: 'center', color: 'red' }}
              onClick={this.onDeleteClick.bind(this, contact.id)}
            />
           
          </p>
          }
          ))}
          
          title="Lista de Usuarios"
          
        />
         
      </div>
    
    );
  }
}

About.propTypes ={
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    contacts: state.contact.contacts
  });



export default connect(mapStateToProps, {getContacts,DeleteContact}) (About);


