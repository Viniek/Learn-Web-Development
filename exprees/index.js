import express, { request, response } from 'express';

const app = express();

const users=[
  {
    id:1,
    firstname:"Victory",
    Lastname:"Njeri",
    Email:"njerivictory52@gmail.com",
  },
  {
    id:2,
    firstname:"Vee",
    Lastname:"Njee",
    Email:"njerivictory94@gmail.com",
  }
]

function getusers(req,res){
  res.status(200).json(users);
}
app.get("/users",getusers)

// function getmusic(req,res){
//   res.send("Retrieve music")
// }
// app.get("/music",getmusic)
// /////////////////////////////////////////////
// function updatemusic(req,res){
//   res.send("Update music")
// }
// app.patch("/music",updatemusic)
// /////////////////////////////////
// function addmusic(req,res){
//   res.send("Add music")
// }
// app.post("/music",addmusic)
// /////////////////////////////////
// function deletemusic(req,res){
//   res.send("Delete music")
// }
// app.delete("/music",deletemusic)
// /////////////////////////////////
// function getmovies(req,res){
//   res.json({success:true, data:["terminal list","game of thrones","Nikita","Prison Break"]})
// }
// app.get("/movies",getmovies)
// /////////////////////////////////

app.listen(3000, () => {
  console.log("App running on port 3000...");
});