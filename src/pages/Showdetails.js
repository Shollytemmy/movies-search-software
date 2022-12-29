import React, { useContext, useEffect, useState } from 'react'
import ShowsContext from '../context/shows/showsContext'
import { useParams } from 'react-router-dom'
import { Loading } from '../components/Loading'

export const Showdetails = () => {

  const {getSingleMoveDetail, showdetail, loading} = useContext(ShowsContext)
  const [showMore, updateShowMore] = useState(false)

  

function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
          
    return str.replace( /(<([^>]+)>)/ig, '');
}

  let {id} = useParams()
  useEffect(() =>{
    getSingleMoveDetail(id)

    //eslint-disable-next-line
  }, [])
  return (
    <section>
      {loading ? <div className='loading__showdetails'>
        <Loading /> 
      </div>:
      <div className='showdetail'> 
      <img src={showdetail.image ? showdetail.image.medium :"https://icon-library.com/images/damaged-icon/damaged-icon-11.jpg" } alt={showdetail.name} />
      <div className="showdetail__detail">
        <h1 className='detail__name'>{showdetail.name}</h1>
        <h3>{showdetail.language}</h3>
         Genre(s):
       {showdetail.genres && showdetail.genres.map((genre) =>{
        return(
          <span className="detail__genre" key={genre}>
           {genre}</span>
        )

       })}
       <p>
        <strong>Status {showdetail.status && showdetail.status }</strong>
       </p>
       <p>
       
        <strong className='detail__official'> Official Site: {showdetail.officialSite? (<a href={showdetail.officialSite}rel='noreferrer' className='live'>Watch Live</a>) : 'No official site' } </strong>
       </p>
        <p className='detail__summary'>
          
        <strong> {showdetail.summary ? removeTags(showdetail.summary) : '' }
        
        </strong>
       </p>
       
      </div>

      
      </div>

      }
    </section>
  )
}
// {showMore ? showdetail.summary : showdetail.summary.slice(0, 20)}
/**
 * <span onClick={(e) => updateShowMore(!showMore)}>
          {showMore ? 'showless': 'showmore'}
        </span>
 */

        //{showdetail.officialSite}