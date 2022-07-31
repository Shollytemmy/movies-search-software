import { useReducer } from "react";
import AlertsContext from './alertsContext'
import AlertReducer from './alertsReducer'
import { SET_ALERT, REMOVE_ALERT } from "../types";




export const AlertsState = (props) => {
    const initialState = null

    const [state, dispatch] = useReducer(AlertReducer, initialState)

    const setAlerts = (message, type) => {
        console.log(message, type)
        dispatch({
            type: SET_ALERT,
            payload:{
                message,
                type
            }
            
        })

        setTimeout(() => dispatch({type: REMOVE_ALERT}) , 5000)

    }


  return (
    <AlertsContext.Provider
    value={{
        alert: state,
        setAlerts
    }}
    
    >
        {props.children}

    </AlertsContext.Provider>
  )
}
