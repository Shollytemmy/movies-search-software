import React, { useState, useContext } from 'react'
import ShowsContext from '../context/shows/showsContext';
import AlertsContext from '../context/alert/alertsContext';
import {Alert} from '../components/Alert'

export const Searchbar = () => {
    const [searchQuery, updateSearch] = useState('')
    const {searchShows} = useContext(ShowsContext)
    const {alert, setAlerts} = useContext(AlertsContext)
    

    const handleSearch = (e) => {
        e.preventDefault();

       if( searchQuery === ""){
        setAlerts("Please enter name to search", 'danger')

       }  else{
        searchShows(searchQuery)

       } 
        
    }
  return (
    <div className='searchbar'>
      {alert ? <Alert message={alert.message} type={alert.type}/> : null}
        <form className='searchbar__form'>
            
            <input type="text" placeholder='search movies' value={searchQuery} onChange = {(e) => updateSearch(e.target.value)} />
            <button onClick={handleSearch} className='ctn ctn-block'>SEARCH</button>
        </form>

    </div>
  )
}
