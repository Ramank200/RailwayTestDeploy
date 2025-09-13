const pg = require("pg");

const client = new pg.Client({
  connectionString: process.env.PG_DATABASEURL,
});

// user: "postgres",
//   database: "railway",
//   port: 5432,
//   password: "OOuplLfLroQJMtxjBCVohPSJpljpbUVY",
//   host: "postgres-production-c2e6.up.railway.app",

const db = () => {
  client.connect((err) => {
    if (err) {
      console.warn("Can't Connect to DB due to ", err.cause, err.message);
    } else {
      console.log("Connected to DB");
    }
  });

  return client;
};

module.exports = db();
