import {GET_ESTADO,GET_ESTADOS,ADD_ESTADO,DELETE_ESTADO,UPDATE_ESTADO} from '../actions/Type'


const initialState= {
    estados: [],
    estado :{}
};

export default function(state= initialState,action){
    switch(action.type){
     case GET_ESTADOS:
         return {
             ...state,
             estados: action.payload
         }

     case GET_ESTADO:
          return {
              ...state,
              estado: action.payload
          }

         case ADD_ESTADO:
         return {
             ...state,
             estados:[action.payload, ...state.estados]
            
         }

         case DELETE_ESTADO:
         return {
             ...state,
             estados: state.estados.filter(estado =>
             estado.id !== action.payload)
         }

         case UPDATE_ESTADO:
         return {
             ...state,
              estados: state.estados.map(estado => estado.id ===
              action.payload.id
              ? (estado = action.payload)
              : estado
              )
         }
      default:
          return state;  
    }
}

