import './App.css'
import { useNavigate } from 'react-router-dom'

function MovieCard({ movieName, moviePoster, movieId }) {
  const navigate = useNavigate()
  function showInfo(e) {
    e.preventDefault();
    navigate(`/movie/${movieId}`)


  }
  return (
    <div className='cardDivContainer' onClick={showInfo}>

      <div className="cardDiv" id={movieId}>
        <div className='imgDiv'>
          <img alt="movie image" src={moviePoster}></img>

        </div>

        <h4>{movieName}</h4>
      </div>

    </div>

  )
}



export default MovieCard