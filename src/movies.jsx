import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as fa } from "@fortawesome/free-regular-svg-icons";
import Like from "./components/common/like";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  handleLike = (movie) => {
    console.log(movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].isLike = !movies[index].isLike;
    this.setState({ movies });
  };

  render() {
    return (
      <>
        {this.state.movies.length > 0 ? (
          <>
            <h4>Showing {this.state.movies.length} movies in the database</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                  <th>Rate</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.state.movies.map((movie) => (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Like onClick={this.handleLike} movie={movie} />
                      {/* <span onClick={() => this.handleLike(movie)}>
                        <FontAwesomeIcon
                          icon={movie.isLike === true ? fa : faHeart}
                        />
                      </span> */}
                    </td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(movie)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <h3>There are no movies in the database</h3>
        )}
      </>
    );
  }
}

export default Movies;
