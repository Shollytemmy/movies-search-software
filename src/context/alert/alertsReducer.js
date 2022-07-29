import {SET_ALERT, REMOVE_ALERT} from '../types'

const alertsReducer = (state, {type, payload}) => {
    switch(type){
        case SET_ALERT:
            return payload;
            
            case REMOVE_ALERT:
                return null
            default:
                return state
    }

}

export default alertsReducer