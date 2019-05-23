import React from "react";
import axios from "axios";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export class MainView extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: null,
      selectedMovie: null
    };
  }
  // One of the "hooks" available in a React Component
  // constructor() {
  //   super();
  //   this.state = {
  //     movies: []
  //   }
  // }
  componentDidMount() {
    axios
      .get("https://myflixapi.herokuapp.com/movies")
      .then(response => {
        // Assign the result to the state
        this.setState({
          movies: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onMovieClick(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

  goMainView() {
    this.setState({
      selectedMovie: null
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;

    // Before the movies have been loaded
    if (!movies) return <div className="main-view" />;

    return (
      <div className="main-view">
        {selectedMovie ? (
          <MovieView movie={selectedMovie} onClick={() => this.goMainView()} />
        ) : (
          movies.map(movie => <MovieCard key={movie._id} movie={movie} onClick={movie => this.onMovieClick(movie)} />)
        )}
      </div>
    );
  }
}
