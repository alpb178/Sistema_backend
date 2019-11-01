

import React, { Component } from 'react';
import MaterialTable from 'material-table';
import {connect} from 'react-redux'
import PropTypes, { bool } from 'prop-types'
import Test  from './AddOrganismo'
import{getOrganismos,getOrganismo,addOrganismo,updateOrganismo,deleteOrganismo} from 'actions/organismoActions'
import { Link } from 'react-router-dom';
import { Checkbox } from '@material-ui/core';

class MaterialTableDemo extends Component {

  state = { showing: true };
  

  componentDidMount(){
    this.props.getOrganismos(); 
  }

  onDeleteClick = id => {
    this.props.deleteOrganismo(id)
    
  };

  organismos = this.props;

  
  
  
    
    render(){
      const { showing } =this.state;
         const { organismos } = this.props;
         
         const data= organismos.map(organismo => (
             { nombre: organismo.nombre , siglas: organismo.siglas ,id: organismo.id, activo: <Checkbox
               checked={organismo.activo}
               value={organismo.activo}
               inputProps={{ 'aria-label': 'Checkbox A' }  } style={{ color: 'black' }}
            />,
            actions: 
            <p>
            <Link to={`organismo/edit/${organismo.id}`}> <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit" tabindex="0" type="button" title="Edit">
               <span class="MuiIconButton-label"> <span class="material-icons MuiIcon-root" aria-hidden="true"  style={{ color: 'black' }}>editar</span>
                </span><span class="MuiTouchRipple-root">
                 </span>
                 </button>
                 </Link>
             <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit" tabindex="0" type="button" title="Delete"><span class="MuiIconButton-label"><span class="material-icons MuiIcon-root" aria-hidden="true"  onClick={this.onDeleteClick.bind(this, organismo.id)}>delete_outline</span></span><span class="MuiTouchRipple-root"></span></button>
            
           </p>} 
      
           
  ))
    
    return (

      <div>
        <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit" onClick={() => this.setState({ showing: !showing })} tabindex="0" type="button" title="Insertar Nuevo Organismo">
               <span class="MuiIconButton-label"> <span class="material-icons MuiIcon-root" aria-hidden="true"  style={{ color: 'black' }}>add_box</span>
                </span><span class="MuiTouchRipple-root">
                 </span>
                 </button>  Insertar Organismo
    
      { showing 
          ? <MaterialTable
          title="Lista de Organismos"
          columns= {[ { title:""
          
             
         ,field:'actions'},
           { title: 'Nombre', field: 'nombre' },
           { title: 'Siglas', field: 'siglas' },
           { title:  'Activo', field: 'activo'},
                     ]
                    }
          data={data}
          />
          : <Test></Test>
          
       
      }
      
      
  </div>  
      
      
      );

  }
  
}


MaterialTableDemo.propTypes ={
  organismos: PropTypes.array.isRequired,
  getOrganismos: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    organismos: state.organismo.organismos
  });



export default connect(mapStateToProps, {getOrganismos,getOrganismo,addOrganismo,deleteOrganismo, updateOrganismo}) (MaterialTableDemo);

