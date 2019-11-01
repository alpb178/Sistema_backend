import {GET_ORGANISMOS,GET_ORGANISMO,DELETE_ORGANISMO,UPDATE_ORGANISMO,ADD_ORGANISMO} from '../actions/Type'


const initialState= {
    organismos: [],
    organismo :{}
};

export default function(state= initialState,action){
    switch(action.type){
     case GET_ORGANISMOS:
         return {
             ...state,
             organismos: action.payload
         }

     case GET_ORGANISMO:
          return {
              ...state,
              organismo: action.payload
          }

         case ADD_ORGANISMO:
         return {
             ...state,
             organismos:[action.payload, ...state.organismos]
            
         }

         case DELETE_ORGANISMO:
         return {
             ...state,
             organismos: state.organismos.filter(organismo =>
             organismo.id !== action.payload)
         }

         case UPDATE_ORGANISMO:
         return {
             ...state,
              organismos: state.organismos.map(organismo => organismo.id ===
              action.payload.id
              ? (organismo = action.payload)
              : organismo
              )
         }
      default:
          return state;  
    }
}

