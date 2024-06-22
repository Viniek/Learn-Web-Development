import express, { request, response } from 'express';
const app = express();
import users from './data.js';

app.get("/users/:user_id",(req,res)=>{
  const user=users.filter(user=>user.id==req.params_id)
  res.send("user");
})

//status 
// function getusers(req,res){
//   res.status(201).json(users);
// }
// app.get("/users",getusers)

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