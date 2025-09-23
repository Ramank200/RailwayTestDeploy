const pg = require("pg");

// const client = new pg.Client({
//   user: "postgres",
//   database: "railway",
//   port: 5432,
//   password: "OOuplLfLroQJMtxjBCVohPSJpljpbUVY",
//   host: "postgres-production-c2e6.up.railway.app",
// });

const client = new pg.Client({
  connectionString:
    "postgresql://postgres:EMXnOOXOvgtjhmyoMyzDkllDEqDVnKcr@yamanote.proxy.rlwy.net:41594/railway",
});

const db = () => {
  client.connect((err) => {
    if (err) {
      console.warn("Can't Connect to DB due to ", err.message);
    } else {
      console.log("Connected to DB");
    }
  });

  return client;
};

module.exports = db();
