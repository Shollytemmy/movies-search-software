import React from 'react'
import { useContext } from 'react'
import ShowsContext from '../context/shows/showsContext'
import { Searchbar } from '../components/Searchbar'
import ListItem from '../components/ListItem'


export const Homepage = () => {
  const showsContext = useContext(ShowsContext)
  const {shows, loading} = showsContext
  return (
    <div className='listItem__list'>
        <Searchbar />

        {loading ? <h1>Loading ....</h1>
         : shows.map((item) => (
          <ListItem 
          key={item.show.id}
          name = {item.show.name}
          rating = {item.show.rating.average ? item.show.rating.average : "No ranting"}
          id = {item.show.id }
          image = {item.show.image ? item.show.image.medium : "https://icon-library.com/images/damaged-icon/damaged-icon-11.jpg" }



           />
         ))
        }
    </div>
  )
}

//https://icon-library.com/images/damaged-icon/damaged-icon-11.jpg
