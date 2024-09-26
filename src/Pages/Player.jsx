import React, { useEffect, useState } from 'react'
import back from '../assets/images/previous.png'
import { useNavigate, useParams } from 'react-router-dom';

function Player() {

  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: ''
  })

  const {id} = useParams();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTI0YWRiYjQ1NGM3MTk0ZTZlYmM0Y2JmNjgzOTA1NSIsIm5iZiI6MTcyNzE5MDEwMi4yMjYxMDMsInN1YiI6IjY2ZWVlMmM0N2ZmMmJmNTdjZDI2MTU0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.duxRBBO8RNU_1dk-nlmUpQYaJ1fOBdlr54-h6776VE8'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  }, [])
  
  
  

  return (
    <div className='player h-screen flex justify-center flex-col items-center'>
      <img src={back} className='w-[50px] absolute top-5 left-5 cursor-pointer' onClick={()=>{navigate(-1)}} />
      <iframe className='rounded-lg' width="90%" height="90%" src={`http://www.youtube.com/embed/${apiData.key}`} allowFullScreen title='Trailer'></iframe>
      <div className="player-info text-white flex justify-between items-center w-[90%]">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
