import { db } from ".";
import { movieTable, theaterTable } from "./schema";

const seedMovies = async () => {
  await db.insert(movieTable).values([
    {
      title: "The Batman 2",
      is_dubbed: true,
      is_domestic: false,
      is_live_action: true,
      theater_id: 1,
      view_start_datetime: "2022-01-01T00:00:00.000Z",
      view_end_datetime: "2022-01-01T12:00:00.000Z",
      accompanier: null,
      rating: null,
      comment: "Good movie",
    },
  ]);
};

const seedTheaters = async () => {
  await db.insert(theaterTable).values([
    {
      name: "Theater D",
    },
  ]);
};

Promise.allSettled([seedMovies(), seedTheaters()])
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
