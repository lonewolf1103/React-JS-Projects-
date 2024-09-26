import React, { useEffect, useRef, useState } from 'react';
import cards_data from '../assets/Cards/card';
import '../Components/titlecards.css';
import { Link } from 'react-router-dom';

function TitleCards({ title, category }) {
  const cardRef = useRef();

  const [apiData, setApiData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTI0YWRiYjQ1NGM3MTk0ZTZlYmM0Y2JmNjgzOTA1NSIsIm5iZiI6MTcyNzE5MDEwMi4yMjYxMDMsInN1YiI6IjY2ZWVlMmM0N2ZmMmJmNTdjZDI2MTU0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.duxRBBO8RNU_1dk-nlmUpQYaJ1fOBdlr54-h6776VE8',
    },
  };

  const handleWheel = (e) => {
    cardRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    const currentRef = cardRef.current;

    if (currentRef) {
      currentRef.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleWheel);
      }
    };
  }, [category]); // Added category to dependency array

  return (
    <div className="title-cards mt-12 mb-8">
      <h2 className="mb-3 text-xl font-semibold">
        {title ? title : 'Popular on Netflix'}
      </h2>
      <div
        className="card-list flex gap-4 overflow-x-scroll scrollbar-hide"
        ref={cardRef}
      >
        {apiData.map((card, index) => (
          <Link
            to={`/player/${card.id}`}
            key={index}
            className="card relative w-[200px] h-[300px] flex-shrink-0"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
              alt={card.original_title}
              className="w-full h-full object-cover rounded cursor-pointer"
            />
            <p className="absolute bottom-2 left-2 text-white font-medium text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
              {card.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TitleCards;
