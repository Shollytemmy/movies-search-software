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


export const ShowsState = (props) => {
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

    console.log(data)

    dispatch({
      type: SEARCH_SHOWS,
      payload: data
    })

  }
  

  return (
    <ShowsContext.Provider value={{
      shows: state.shows,
      showdetail: state.showdetail,
      loding: state.loading,
      searchShows

      

    }}>
      {props.children}

    </ShowsContext.Provider>
  )
}
