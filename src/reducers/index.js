import { combineReducers } from 'redux';
import ContactReducer from './ContactReducers';
import EmpresaReducer from './EmpresaReducers';
import OrganismoReducer from './OrganismoReducers';
import EstadoReducers from './EstadoReducers';

export default combineReducers({
  contact: ContactReducer,
  empresa: EmpresaReducer,
  organismo: OrganismoReducer,
  estado: EstadoReducers
});

