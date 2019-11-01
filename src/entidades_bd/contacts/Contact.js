import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {DeleteContact} from '../../actions/contactActions'
import { connect } from 'react-redux';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  //// DELETE CONTACT ////
  onDeleteClick = id => {
    this.props.DeleteContact(id)
    
  };

  render() {
    const { id, nombre, apellido,user, password,rol } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {nombre}{' '}
          <i
            onClick={() =>
              this.setState({
                showContactInfo: !this.state.showContactInfo
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={`contact/edit/${id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'black',
                marginRight: '1rem'
              }}
            />
          </Link>
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {apellido}</li>
            <li className="list-group-item">Phone: {password}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  DeleteContact: PropTypes.func.isRequired
};

export default connect(null,{DeleteContact}) (Contact);
