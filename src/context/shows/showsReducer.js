import {
    SEARCH_SHOWS,
    SET_LOADING,
    SET_SHOW_DETAIL,
    CLEAR_SHOW_DETAIL,
    } from '../types'

    const showsReducer = (state, {type, payload}) => {
        switch(type){
            case SET_LOADING:
                return{
                    ...state, loading: true
                }

                case  SEARCH_SHOWS:
                    return{
                        ...state, shows: payload,
                        loading: false
                    }

                    case SET_SHOW_DETAIL:

                    
                        return {...state, showdetail: payload,
                        loading: false}
                        case CLEAR_SHOW_DETAIL:
                            return{...state, showdetail: {}}
                default:
                    return state 
        }
    }

    export default showsReducer