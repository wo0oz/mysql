import express from "express"
import mysql from "mysql"
import cors from "cors"
const app=express()

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"wjy0910wjy",
    database:"book"
});

app.use(express.json());

app.use(cors());

app.get("/",(req,res)=>{
    res.json("hello this is the backend")
});

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });

app.post("/books", (req, res) => {
  const q = "INSERT INTO books(`title`, `desc`, `price`, `cover`) VALUES (?)";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
app.listen(8800,()=>{
    console.log("연결되었습니다!")
});