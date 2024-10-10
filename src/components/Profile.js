import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
    const [movies, setMovies] = useState([]);
    const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);  
    // Simulate fetching user data
    useEffect(() => {
      const fetchMovieData = () => {
        setTimeout(() => {
            setMovies([
            {id: "1100",
            name: "The Conjuring",
            genre: "Horror",
            director: "James Wan",
            description: "Rod and Carolyn find their pet dog dead under mysterious circumstances and experience a spirit that harms their daughter Andrea. They finally call investigators who can help them get out of the mess." },
            {id: "1101",
            name: "Insidious",
            genre: "Horror",
            director: "Patrick Wilson, Leigh Whannell, Adam Robitel, James Wan",
            description: "Insidious is an American horror franchise created by Leigh Whannell and James Wan that has been produced by Blumhouse in association with Sony’s Stage 6 Films since 2010. The films in the franchise include Insidious, Chapter 2, Chapter 3, The Last Key, and The Red Door."},
            {id: "1103",
            name: "Annabelle",
            genre: "Horror",
            director: "Warner Bros., Warner Bros. Pictures",
            description: "John and Mia Form are attacked by members of a satanic cult that uses their old doll as a conduit to make their life miserable. This unleashes a string of paranormal events in the Forms' residence."},
            { id: "1104",
                name: "Get Out",
                genre: "Horror",
                director: "Jordan Peele",
                description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point." },
            { id: "1104",
                name: "Us",
                genre: "Horror",
                director: "Jordan Peele",
                description: "In order to get away from their busy lives, the Wilson family takes a vacation to Santa Cruz, California. At night, four strangers break into Adelaide's childhood home. The family is shocked to find out that the intruders look like them." },
          ]);
        }, 1000); // Simulate a delay
      };
      fetchMovieData();
    }, []);
  
    if (movies.length === 0) {
      return <div>Loading user profiles...</div>;
    }
    const selectedMovie = movies[selectedMovieIndex];
  

    return (
        <div>
        

        <div class="movies-select">
      <h1>Select a Movie</h1>
      <select onChange={(e) => setSelectedMovieIndex(e.target.value)} value={selectedMovieIndex}>
        {movies.map((movie, index) => (
          <option key={index} value={index}>
            {movie.name}
          </option>
        ))}
      </select>

      <h2>Movie Details</h2>
      <h3>{selectedMovie.name}</h3>
      
      <p><b>Director:</b></p>
      <p> {selectedMovie.director}</p>

      <p><b>Genre:</b></p>
      <p>{selectedMovie.genre}</p>

      <p><b>Description:</b></p>
      <p>{selectedMovie.description}</p>

    </div>
    </div>

    
    );
}

export default Profile;