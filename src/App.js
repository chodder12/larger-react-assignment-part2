import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import LeaveReview from './Form';
import {Routes, Route, Link} from 'react-router-dom';
import React from 'react';
import { Container } from 'react-bootstrap';


function MovieList(props){
  return (
    <>
    <Link to="/review">Review</Link>
    <div style={{ backgroundColor: 'black' }} class="jumbotron">
      <Container>
          <h1 style={{color:'white'}}>welcome to my react movie website</h1> 
          <p style={{color:'white'}}>We specialize in your entertainment</p> 
          </Container>
          </div>
          
    <ul>
      {
        props.fav_movies.map(movie => 
        <li key = {movie.id}>
          <Container>
          <h2 style={{color:'white'}}>{movie.title} </h2>
          <p style={{color:'white'}}>featuring: {movie.actors} </p>
          <p style={{color:'white'}}>released: {movie.release} </p>
          <p style={{color:'white'}}>rating: {movie.rating}</p>
          <img src = {movie.poster} alt={movie.poster}/>
          <button onClick={ () => props.setMovies(props.fav_movies.filter(movieElement => movieElement.title != movie.title) )}>Remove</button>
          </Container>
          </li>
        
        )}
    </ul>
    </>
  )
}


const style = {
  backgroundColor: 'grey', // dark grey color
  minHeight: '100vh', // set minimum height to full viewport height
};

// set body background color using CSS
document.body.style.backgroundColor = style.backgroundColor;


function App() {

    let [movies, setMovies] = useState(null);

    
    
      useEffect( () => {
        console.log("loading data")

        fetch("/api/movies")
        .then(response => response.json() )
        .then( setMovies)
        .catch( e => console.log(e.message))
      }, [])
    
      
      if( movies == null){
        return <h1>loading...</h1>;
      }
      console.log(movies)

      return (
        <Routes>
          <Route path="/" element= {<MovieList fav_movies={(movies)} setMovies={setMovies} />} />
          <Route path="/review" element= {<LeaveReview movies={movies} setMovies={setMovies} />} />
        </Routes>
      )
      
}







export default App;
