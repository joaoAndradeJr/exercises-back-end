// Aumente em 5 o budget do filme Home Alone.

db.movies.updateOne(
  { "title": "Home Alone" },
  { $inc: { "budget": +5 } }
);

db.movies.find();
