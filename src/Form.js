import React, {useEffect, useState, useRef} from "react";
import { Link } from "react-router-dom";

export function LeaveReview(props) {

    const movieTitle = useRef();
    const movieActors = useRef();
    const movieRating = useRef();
    const movieRelease = useRef();

    const submit = (event) => {
        event.preventDefault();
        const movieData = [];
        props.movies.forEach(movie => {
            movieData.push(movie);
        })

        const title = movieTitle.current.value;
        const actors = movieActors.current.value;
        movieData.push({"title": title},{"actors":actors},{"release":release},{"rating":rating})
        props.setMovies(movieData);

        alert(title,actors);
        movieTitle.current.value="";
        movieActors.current.value="";
        movieRelease.current.value="";
        movieRating.current.value="";

    }

    return (
        <>
        <Link to="/">Home</Link>
        <form method="post" action="/api/review" enctype="multipart/form-data">
            <label>Enter movie name:</label>
            <input
            name="title"
            ref = {movieTitle}
            type = "text"/>
            <label>Enter movie actors:</label>
            <input
            name="actors"
            ref = {movieActors}
            type = "text"/>
            <label>Enter release date:</label>
            <input
            name="release"
            ref = {movieRelease}
            type = "text"/>
            <label>Enter movie rating:</label>
            <input
            name="rating"
            ref = {movieRating}
            type = "text"/>

            <input type="file" name="movie_poster"/>
            <input type="submit" value="submit"/>
        </form>
        </>
    )};

    export default LeaveReview;