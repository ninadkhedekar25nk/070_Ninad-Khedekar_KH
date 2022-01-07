const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const{addUser,selectUser}=require('./user');

app.get("/userlist", async(req, res) => {
    const list = await selectUser();
    res.json(list);
});

app.post("/newUser" , (req,res) => {
    const user = req.body;
    addUser(user);
    res.json({n:"I am in Exam"});
});

app.listen(4000, ()=> console.log("Server Started"));