const genres = [
  { _id: "1", name: "Action" },
  { _id: "2", name: "Comedy" },
  { _id: "3", name: "Drama" },
  { _id: "4", name: "Thriller" },
];

export function getGenres() {
  return genres;
}

export function getGenreById(id) {
  return genres.find((genre) => genre._id === id);
}
