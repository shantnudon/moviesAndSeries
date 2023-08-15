// require("dotenv").config();
// const mysql = require("mysql2");
// const connection = mysql.createConnection(
//   'mysql://r4gl86vtu7csb5i0pcwd:pscale_pw_OF16nvMNlJmAcN7EZPi2UuWRdARBabA9Jh4YOpM0lB4@aws.connect.psdb.cloud/mymooddb?ssl={"rejectUnauthorized":true}'
// );
// console.log("Connected to PlanetScale!");
// connection.end();

import * as fs from "fs";
export default function handler(req, res) {
  // res.status(200).json({ name: "Shantnu" });
  fs.readFile("data/moviesAndSeries.json", "utf-8", (err, data) => {
    res.status(200).json(JSON.parse(data));
    
  });
}
