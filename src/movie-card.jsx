import './App.css'


function MovieCard({ movieName, moviePoster, movieId }) {
  return (
    <div className='cardDivContainer'>

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