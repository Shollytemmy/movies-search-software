import { useReducer } from "react";
import AlertContext from './alertsContext'
import AlertReducer from './alertsReducer'
import { SET_ALERT, REMOVE_ALERT } from "../types";




export const AlertsState = (props) => {
    const initialState = null

    const [state, dispatch] = useReducer(AlertReducer, initialState)

    const setAlerts = ({message, type}) => {
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
    <AlertContext.Provider
    value={{
        alert: state,
        setAlerts


    }}
    
    >
        {props.children}

    </AlertContext.Provider>
  )
}
