import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import "../styles/movies.css"

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading,setLoading] = useState(true);
    const [err,setErr] = useState(false);
    const navigate = useNavigate();
    
    useEffect(()=>{
        getMovies();
    }, []);

    const getMovies = async()=>{
        setLoading(false);
        try{
            const response = await axios.get("https://giddy-melon-lumber.glitch.me/movies");
            const data = response.data;
            setMovies(data.movies);
        }catch(err){
            setLoading(false);
            setErr(true);
            console.error(err);
        }
       
    }
    if(loading){
        return <div>Loading...</div>
    }
    if(err){
        return <div>Error fetching movies</div>
    }
    if(movies.length == 0){
        return <div>No movies found</div>
    }

  return (
    <div>
      <h1>Movies</h1>
      <div className="moviecont">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="moviecard">
              <h2>Title:{movie.title}</h2>
              <img src={movie.poster} alt={movie.title} />
              <p>{movie.description}</p>
              <p>Genre:{movie.genre}</p>
              <div className="buttons">
                <button
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    border: "none",
                  }}
                >
                  Edit
                </button>
                <button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                  }}
                >
                  Delete
                </button>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                  }} onClick={()=>navigate(`/moviedetails/${movie.id}`)}
                >
                  View More
                </button>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}

export default Movies