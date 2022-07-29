import React, { useState, useContext } from 'react'
import ShowsContext from '../context/shows/showsContext';

import { Alert } from './Alert'

export const Searchbar = () => {
    const [searchQuery, updateSearch] = useState('')
    const {searchShows} = useContext(ShowsContext)

    const handleSearch = (e) => {
        e.preventDefault();
        searchShows(searchQuery)
    }
  return (
    <div className='searchbar'>
      <Alert message='Nothing show' type='danger' />
        <form className='searchbar__form'>
            
            <input type="text" placeholder='search movies' value={searchQuery} onChange = {(e) => updateSearch(e.target.value)} />
            <button onClick={handleSearch} className='ctn ctn-block'>SEARCH</button>
        </form>

    </div>
  )
}
