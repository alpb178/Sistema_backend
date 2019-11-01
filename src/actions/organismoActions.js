import {GET_ORGANISMOS,GET_ORGANISMO,ADD_ORGANISMO,DELETE_ORGANISMO,UPDATE_ORGANISMO} from './Type'
import Axios from 'axios'

export const getOrganismos =() => async dispatch => {
    const res= await Axios.get('http://127.0.0.1:8000/api/organismos.json')

    dispatch ({
        type: GET_ORGANISMOS,
        payload:res.data
    })
}

export const getOrganismo =(id) => async dispatch => {
    const res= await Axios.get(`http://127.0.0.1:8000/api/organismos/${id}`)

    dispatch ({
        type: GET_ORGANISMO,
        payload:res.data
    })
}

export const addOrganismo = organismo  => async dispatch=> {
    const res= await Axios.post('http://127.0.0.1:8000/api/organismos',organismo)
    
    dispatch({
        type: ADD_ORGANISMO,
        payload:res.data
    })
}

export const deleteOrganismo =(id) => async dispatch =>  {
   await Axios.delete ( `http://127.0.0.1:8000/api/organismos/${id}`)
    dispatch({
        type: DELETE_ORGANISMO,
        payload:id
    })
}


export const updateOrganismo = organismo  => async dispatch=> {
    const res= await Axios.put(`http://127.0.0.1:8000/api/organismos/${organismo.id}`,organismo)
    
    dispatch({
        type: UPDATE_ORGANISMO,
        payload:res.data
    })
}