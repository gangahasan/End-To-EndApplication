import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"

const MovieDetails = () => {
  const [moviedata,setMoviedata] = useState(null);
  console.log(moviedata,"data")
  const[loading,setLoading] = useState(true);
  const[err,setErr] = useState(false);
  const {id} = useParams();

  useEffect(()=>{

    const fetchMovie=async()=>{
      try{
        const response = await axios.get(`https://giddy-melon-lumber.glitch.me/movies/${id}`);
        setLoading(false);
        setMoviedata(response.data)
        setErr(false)

        }catch(err){
        setLoading(false);
        setErr(true);
        console.log(err);
        }    
    }
    fetchMovie();

  },[id]);
  if(loading){
    return <div>Loading...</div>
  }
  if(err){
    return <div>Error loading movie data</div>
  }
  return (
    <div>
      <h1>{moviedata.title}</h1>
      <img src={moviedata.poster} alt={moviedata.title} />
      <p>{moviedata.description}</p>
      <p>{moviedata.genre}</p>
    </div>
  );
}

export default MovieDetails