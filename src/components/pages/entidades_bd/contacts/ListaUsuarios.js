
import {addContact,DeleteContact,UpdateContact,getContact,getContacts} from '../../../actions/contactActions'
import React, { Component } from 'react';
import MaterialTable from 'material-table';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class MaterialTableDemo extends Component {
  
    componentDidMount(){
        this.props.getContacts(); 
      }

      state= {
        columns: [
          { title: 'Nombre', field: 'nombre' },
          { title: 'Apellidos', field: 'apellido' },
          { title: 'Usuario', field: 'user'},
          { title: 'Password', field: 'password', type: 'password'},
        
          {
            title: 'Rol',
            field: 'rol',
          
          },
        ],
       
      };

  render(){
  
    const state=this.state;
    const { contacts } = this.props;
    const data= contacts.map(contact => (
        { nombre: contact.nombre , apellido: contact.apellido, user: contact.user,password:contact.password, rol: contact.rol ,id:contact.id }))
  

    return (
        <MaterialTable
          title="Editable Example"
          columns={state.columns}
          data={data}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  data.push(newData);
                  this.props.addContact(newData);
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  data[data.indexOf(oldData)] = newData;
                  this.props.UpdateContact(newData)
                  
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  this.props.DeleteContact(oldData.id)
                  data.splice(data.indexOf(oldData), 1);
                 
                }, 600);
              }),
          }}
        />
      );

  }
  
}

MaterialTableDemo.propTypes ={
    contacts: PropTypes.array.isRequired,
    getContacts: PropTypes.func.isRequired
  }
  
  const mapStateToProps = (state) => ({
      contacts: state.contact.contacts
    });
  
  
  
  export default connect(mapStateToProps, {getContacts,DeleteContact,addContact,UpdateContact}) (MaterialTableDemo);