import React, { useState } from 'react'
import {GoSearch} from 'react-icons/go'
import { Alert } from './Alert'

export const Searchbar = () => {
    const [searchQuery, updateSearch] = useState('')

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('searchQuery', searchQuery);
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
