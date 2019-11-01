import {GET_EMPRESA,GET_EMPRESAS,ADD_EMPRESA,UPDATE_EMPRESA,DELETE_EMPRESA} from './Type'
import Axios from 'axios'

export const getEmpresas =() => async dispatch => {
    const res= await Axios.get('http://127.0.0.1:8000/api/empresas.json')

    dispatch ({
        type: GET_EMPRESAS,
        payload:res.data
    })
}

export const getEmpresa =(id) => async dispatch => {
    const res= await Axios.get(`http://127.0.0.1:8000/api/empresas/${id}`)

    dispatch ({
        type: GET_EMPRESA,
        payload:res.data
    })
}

export const addEmpresa = empresa  => async dispatch=> {
    const res= await Axios.post('http://127.0.0.1:8000/api/empresas',empresa)
    
    dispatch({
        type: ADD_EMPRESA,
        payload:res.data
    })
}

export const DeleteEmpresa =(id) => async dispatch =>  {
   await Axios.delete ( `http://127.0.0.1:8000/api/empresas/${id}`)
    dispatch({
        type: DELETE_EMPRESA,
        payload:id
    })
}


export const UpdateEmpresa = empresa  => async dispatch=> {
    const res= await Axios.put(`http://127.0.0.1:8000/api/empresas/${empresa.id}`,empresa)
    
    dispatch({
        type: UPDATE_EMPRESA,
        payload:res.data
    })
}