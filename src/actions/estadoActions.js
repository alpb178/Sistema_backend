import {GET_ESTADOS,GET_ESTADO,UPDATE_ESTADO,DELETE_ESTADO,ADD_ESTADO} from './Type'
import Axios from 'axios'

export const getEstados =() => async dispatch => {
    const res= await Axios.get('http://127.0.0.1:8000/api/estados.json')

    dispatch ({
        type: GET_ESTADOS,
        payload:res.data
    })
}

export const getEstado =(id) => async dispatch => {
    const res= await Axios.get(`http://127.0.0.1:8000/api/estados/${id}`)

    dispatch ({
        type: GET_ESTADO,
        payload:res.data
    })
}

export const addEstado = estado  => async dispatch=> {
    const res= await Axios.post('http://127.0.0.1:8000/api/estados',estado)
    
    dispatch({
        type: ADD_ESTADO,
        payload:res.data
    })
}

export const deleteEstado =(id) => async dispatch =>  {
   await Axios.delete ( `http://127.0.0.1:8000/api/estados/${id}`)
    dispatch({
        type: DELETE_ESTADO,
        payload:id
    })
}


export const updateEstado = estado  => async dispatch=> {
    const res= await Axios.put(`http://127.0.0.1:8000/api/estados/${estado.id}`,estado)
    
    dispatch({
        type: UPDATE_ESTADO,
        payload:res.data
    })
}