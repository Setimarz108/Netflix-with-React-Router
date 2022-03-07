import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect} from 'react'
import { Col, Row} from 'react-bootstrap'

export default function MovieDetails() {

const params = useParams()

 const [movie, setMovie] = useState(null)

 const API_KEY = "ae65694";
 const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`;
 
 const fetchMovieById = async (id) => {
    try {
      console.log("request igsgoing");
      const res = await fetch(`${BASE_URL}i=${id}`);
      const data = await res.json();
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovieById(params.movieId);
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center my-4 mx-2 p-3">
      {movie && (
        <Row>
          <Col>
            <h2 className="mx-auto my-5">{movie.Title}</h2>
            <img src={movie.Poster} alt={movie.title} />
            <div className="d-flex justify-content-center align-items-center my-4">
              <p className="d-flex flex-grow justify-content-center align-items-center mx-2 my-2">
                {movie.Released}
              </p>
              <p className="d-flex flex-grow justify-content-center align-items-center mx-2 my-2">
                Directed by: {movie.Director}
              </p>
            </div>
            <div className="d-flex justify-content-center align-items-center my-4">
              <p className="d-flex flex-grow justify-content-center align-items-center mx-2">
                Written by: {movie.Writer}
              </p>
            </div>
            <div className="d-flex justify-content-center align-items-center my-4">
              <p className="d-flex flex-grow justify-content-center align-items-center mx-2">
                Awards: {movie.Awards}
              </p>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
}

