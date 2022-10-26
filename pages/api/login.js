import postgres from "postgres";

const sqlConnection = postgres(
  process.env.DB_CONNECTION_URL,
  process.env.NODE_ENV === "production"
    ? {
        ssl: { rejectUnauthorized: false },
        // max_lifetime: 60 * 30,
      }
    : {}
);

export default async function login(req, res) {
  if (req.method === "GET") {
    try {
      const getUser = await sqlConnection `SELECT * FROM players`;
      res.status(200).json(getUser);
    } catch (error) {
      console.log(error, "dev error for 500");
    }
  } else {
    console.log(res.status(400), "not able to connect");
  }
}
