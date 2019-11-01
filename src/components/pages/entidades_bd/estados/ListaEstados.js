import React, { Component } from 'react';
import MaterialTable from 'material-table';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import{getEstado,getEstados,addEstado,deleteEstado,updateEstado} from '../../../actions/estadoActions'


class MaterialTableDemo extends Component {

  componentDidMount(){
    this.props.getEstados(); 
  }

  onDeleteClick = id => {
    this.props.deleteEstado(id)
    
  };

  estados = this.props;
  
  state= {
        columns: [
          { title: 'Estado', field: 'estado' },   
        ]
        
      };

  render(){
  
    const state=this.state;
 
    const { estados } = this.props;
    const data= estados.map(estado => (
      { estado: estado.estado ,id: estado.id}
  ))
    
    return (
        <MaterialTable
          title="Lista de Estados"
          columns={state.columns}
          data={data}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  data.push(newData);
                  this.props.addEstado(newData);
                 }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  data[data.indexOf(oldData)] = newData;
                  this.props.updateEstado(newData)
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  this.props.deleteEstado(oldData.id)
                  data.splice(data.indexOf(oldData), 1);
                                
                }, 600);
              }),
          }}
        />
      );

  }
  
}


MaterialTableDemo.propTypes ={
  estados: PropTypes.array.isRequired,
  getEstados: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    estados: state.estado.estados
  });



export default connect(mapStateToProps, {getEstado,getEstados,addEstado,deleteEstado,updateEstado}) (MaterialTableDemo);

