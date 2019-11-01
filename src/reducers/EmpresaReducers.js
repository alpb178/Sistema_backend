import {GET_EMPRESA,GET_EMPRESAS,DELETE_EMPRESA,UPDATE_EMPRESA,ADD_EMPRESA} from '../actions/Type'


const initialState= {
    empresas: [],
    empresa :{}
};

export default function(state= initialState,action){
    switch(action.type){
     case GET_EMPRESAS:
         return {
             ...state,
             empresas: action.payload
         }

     case GET_EMPRESA:
          return {
              ...state,
              empresa: action.payload
          }

         case ADD_EMPRESA:
         return {
             ...state,
             empresas:[action.payload, ...state.empresas]
            
         }

         case DELETE_EMPRESA:
         return {
             ...state,
             empresas: state.empresas.filter(empresa =>
             empresa.id !== action.payload)
         }

         case UPDATE_EMPRESA:
         return {
             ...state,
              empresas: state.empresas.map(empresa => empresa.id ===
              action.payload.id
              ? (empresa = action.payload)
              : empresa
              )
         }
      default:
          return state;  
    }
}

