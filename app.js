require('dotenv').config();
//const conn    = require('config/database');
//
const express = require("express");
const app     = express();
//const pool    = require("./config/database");
const userRouter = require("./api/users/user.router");
app.use(express.json());

app.use("/api/users", userRouter);

/*app.get('/api', (req, res) => {
    const users = pool.query(
        `select id,email,password,mobile from test`,
      [],
      (error, results, fields) => {
        if (error) {
          //callBack(error);
        }
        return results;
      }
    );
    res.json({
        success: 1,
        message: 'this is working',
        users: users
    });
});*/

app.listen(process.env.APP_PORT, () => {
    console.log("server up and running on PORT :", process.env.APP_PORT);
});