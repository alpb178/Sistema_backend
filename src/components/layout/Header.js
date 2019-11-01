import React, { Component } from 'react';
import Ale from 'entidades_bd/organismos/ListaOrganismos'
import Alejandro from 'entidades_bd/organismos/AddOrganismo'

class Foo extends React.Component {

  state = { showing: true };

  render() {
      const { showing } = this.state;
      return (
          <div>
              <button onClick={() => this.setState({ showing: !showing })}>toggle</button>
              { showing 
                  ? <div><Ale></Ale></div>
                  : <Alejandro></Alejandro>
              }
          </div>  
      )
  }
}

export default Foo
