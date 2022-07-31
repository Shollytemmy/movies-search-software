import React, { useContext, useEffect } from 'react'
import ShowsContext from '../context/shows/showsContext'
import { useParams } from 'react-router-dom'

export const Showdetails = () => {
  const {getSingleMoveDetail, showdetail, loading} = useContext(ShowsContext)

  console.log(showdetail)

  let {id} = useParams()
  useEffect(() =>{
    getSingleMoveDetail(id)

    //eslint-disable-next-line
  }, [])
  return (
    <div className='showdetail'>
      {loading ? <h1>Loading....</h1> :
      <div className='showdetail'> 
      <img src={showdetail.image ? showdetail.image.medium :"https://icon-library.com/images/damaged-icon/damaged-icon-11.jpg" } alt={showdetail.name} />
      
      </div>

      }
    </div>
  )
}
