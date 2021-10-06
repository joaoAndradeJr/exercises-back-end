// Altere o imdbRating para 7.7 no filme Batman .
use class;

db.movies.updateOne(
  { "title": "Batman" },
  { $set: { imdbRating: 7.7 }}
);

db.movies.find();
