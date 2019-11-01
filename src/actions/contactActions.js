import {GET_CONTACTS,DELETE_CONTACT,ADD_CONTACT,UPDATE_CONTACT,GET_CONTACT} from './Type'
import Axios from 'axios'

export const getContacts =() => async dispatch => {
    const res= await Axios.get('http://127.0.0.1:8000/api/usuarios.json')

    dispatch ({
        type: GET_CONTACTS,
        payload:res.data
    })
}

export const getContact =(id) => async dispatch => {
    const res= await Axios.get(`http://127.0.0.1:8000/api/usuarios/${id}`)

    dispatch ({
        type: GET_CONTACT,
        payload:res.data
    })
}

export const addContact = contact  => async dispatch=> {
    const res= await Axios.post('http://127.0.0.1:8000/api/usuarios',contact)
    
    dispatch({
        type: ADD_CONTACT,
        payload:res.data
    })
}

export const DeleteContact =(id) => async dispatch =>  {
   await Axios.delete ( `http://127.0.0.1:8000/api/usuarios/${id}`)
    dispatch({
        type: DELETE_CONTACT,
        payload:id
    })
}


export const UpdateContact = contact  => async dispatch=> {
    const res= await Axios.put(`http://127.0.0.1:8000/api/usuarios/${contact.id}`,contact)
    
    dispatch({
        type: UPDATE_CONTACT,
        payload:res.data
    })
}