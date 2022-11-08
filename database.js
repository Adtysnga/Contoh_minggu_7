import Express  from "express";
import mysql from 'mysql2';
const app = Express();
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'store_db'
})
const hostname = '127.0.0.1';
const port = 3000;
conn.connect(err => {
    if(err){
        console.error("database is disconnect!");
        console.error(err);
    }
    else
    console.log("database is connected")
});

app.get('/api/custumers',(req,res)=>{
    let sql = "SELECT * FROM `customers` WHERE 1;";
    let query = conn.query(sql, (err, results)=>{
        res.json(results);
    })
});

app.listen(port, ()=>{
    console.log(`Server Running at ${hostname}:${port}`)
} )