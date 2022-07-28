import React, { useState } from 'react'
import {GoSearch} from 'react-icons/go'

export const Searchbar = () => {
    const [searchQuery, updateSearch] = useState('')

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('searchQuery', searchQuery);
    }
  return (
    <div className='searchbar'>
        <form className='searchbar__form'>
            
            <input type="text" placeholder='search movies' value={searchQuery} onChange = {(e) => updateSearch(e.target.value)} />
            <button onClick={handleSearch} className='ctn ctn-block'>SEARCH</button>
        </form>

    </div>
  )
}
