const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd471829", name: "Thriller" },
];

export function getGenres() {
  return genres.filter((g) => g);
}

// export function getGenreById(id) {
//   return genres.find((genre) => genre._id === id);
// }
