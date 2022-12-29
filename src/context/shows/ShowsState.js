import axios from 'axios'
import {useReducer} from 'react'
import ShowsContext from './showsContext'
import ShowsReducer from './showsReducer'

import {
    SEARCH_SHOWS,
    SET_LOADING,
    SET_SHOW_DETAIL,
    CLEAR_SHOW_DETAIL,
    SET_ALERT,
    REMOVE_ALERT
    

} from '../types'

const base_url = ' https://api.tvmaze.com'
//  https://api.tvmaze.com/shows/1


export const ShowsState = ({children}) => {
  const initialState ={
    shows: [],
    showdetail: {},  
    loading: false
  }

  const [state, dispatch] = useReducer(ShowsReducer, initialState)

  const searchShows = async(searchQuery) => {
    dispatch({type: SET_LOADING})

    // fetch

    const {data} = await axios.get(` ${base_url}/search/shows?q=${searchQuery}`)

    // console.log(data)

    dispatch({
      type: SEARCH_SHOWS,
      payload: data
    })

  }

  const getSingleMoveDetail = async (id) => {
    dispatch({
      type: SET_LOADING
      
    })
    // fetch 

    const {data} = await axios.get(`${base_url}/shows/${id}`)
    

    dispatch({
      type: SET_SHOW_DETAIL,
      payload: data
    })

  }

  const clearShowDetails = () =>{
    dispatch({
      type: CLEAR_SHOW_DETAIL
    })
  }
  

  return (
    <ShowsContext.Provider value={{
      shows: state.shows,
      showdetail: state.showdetail,
      loading: state.loading,
      searchShows,
      getSingleMoveDetail,
      clearShowDetails,

    }}>
      {children}

    </ShowsContext.Provider>
  )
}
