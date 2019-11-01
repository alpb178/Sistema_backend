

import React, { Component } from 'react';
import MaterialTable from 'material-table';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import{getEmpresas,DeleteEmpresa,addEmpresa,getEmpresa,UpdateEmpresa} from 'actions/empresaActions'
import { Link } from 'react-router-dom';

class MaterialTableDemo extends Component {

  componentDidMount(){
    this.props.getEmpresas(); 
  }

  onDeleteClick = id => {
    this.props.DeleteEmpresa(id)
    
  };

  empresas = this.props;
  
  state= {
        columns: [
          { title: 'Nombre', field: 'nombre' },
          { title: 'Siglas', field: 'siglas' },
         
        ]
        
      };

  render(){
  
    const state=this.state;
 
    const { empresas } = this.props;
    const data= empresas.map(empresa => (
      { nombre: empresa.nombre , siglas: empresa.siglas ,id: empresa.id}
  ))
    
    return (
        <MaterialTable
          title="Lista de Empresas"
          columns={state.columns}
          data={data}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  data.push(newData);
                  this.props.addEmpresa(newData);
                 }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  data[data.indexOf(oldData)] = newData;
                  this.props.UpdateEmpresa(newData)
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  this.props.DeleteEmpresa(oldData.id)
                  data.splice(data.indexOf(oldData), 1);
                                
                }, 600);
              }),
          }}
        />
      );

  }
  
}


MaterialTableDemo.propTypes ={
  empresas: PropTypes.array.isRequired,
  getEmpresas: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    empresas: state.empresa.empresas
  });



export default connect(mapStateToProps, {getEmpresas,DeleteEmpresa,addEmpresa,getEmpresa, UpdateEmpresa}) (MaterialTableDemo);

