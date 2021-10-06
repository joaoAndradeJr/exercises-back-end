// Utilize o operador $max para alterar o imdbRating para 8.6 do filme Godzilla. Além disso, altere a categoria "adventure" para "thriller" do filme Godzilla.

db.movies.updateOne(
  { "title": "Godzilla" },
  { $set: { "category.1": "thriller" } },
  { $max: { "imdbRating": 8.6 } }
);

db.movies.find();
