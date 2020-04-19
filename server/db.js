const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres", //benjamin
  password: "postgres", //my_password
  host: "localhost",
  database: "perntodo",
  port: 5432,
});

module.exports = pool;
