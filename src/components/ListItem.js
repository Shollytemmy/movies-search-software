import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({ image, name, language, rating, id}) => {
  return (
   
    <Link to={`/showdetail/${id}`} className ='listItem'>
        <img src={image} alt={name} />
        <div className="listItem__info">
            <h4 className='info__name'>{name}</h4>
            <h4 className='info__rating'>{rating}</h4>
        </div>
        </Link>
      
  )
}

export default ListItem