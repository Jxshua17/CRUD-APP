import express from "express";

const app = express();

app.get("/", (request, response) => {
  //response.send("Hello and welcome to my website.");
  response.send(`the students in this class are ${students}`);
});

app.post("/");

app.listen(8080, () => {
  console.log("the current port should be localhost:8080");
});

let students = [];
