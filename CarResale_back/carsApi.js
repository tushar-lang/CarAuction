const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const carsRouter = require("express").Router();

const cors = require('cors');
const app = express();
const port = 7000;
app.use(cors())

app.use(bodyParser.json());
const uri = "mongodb+srv://tushar:tushar@tushar.y0ky74s.mongodb.net/test";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

const carsAddSchema = new mongoose.Schema({
  name: String,
  odometer: String,
  year: String,
  description: String,
  url: String,
});
const cartAddSchema = new mongoose.Schema({
  name: String,
  odometer: String,
  year: String,
  description: String,
  url: String,
});

const userLoginSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const userSignupSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});
const addcart = new mongoose.Schema({
  name: String
})

const Cars = mongoose.model("Cars", carsAddSchema);
const Cart = mongoose.model("Cart", cartAddSchema);
const UserSignup = mongoose.model("user", userSignupSchema);
const addtocart = mongoose.model("addcart", addcart);

const db = mongoose.connection;



db.once("open", async () => {
  const userSignup = await UserSignup.find();
  // const userlogin = await UserLogin.find();
  // console.log(JSON.stringify(cars));
});

//getcars
app.get("/getcars", async (req, res) => {
  try {
    const cars = await Cars.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).send("Failed to add cars with error");
  }
});

//serach car

// app.get("/getcars/:name",async (req, res) => {
//   const searchname = req.params.name;
//   const regex = new RegExp(searchname, "i");
//   const cars = Cars.find({ "name": regex })
//       .then((cars) => res.json(cars))
//       console.log(res.json(cars))
//       .catch((err) => res.status(400).json("Error: " + err));
// });

app.get("/getcars/:name", async (req, res) => {
  const searchname = req.params.name;
  const regex = new RegExp(searchname, "i");
  try {
    const cars = await Cars.find({ "name": regex }).exec();
    res.json(cars);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});



//addcart
app.post("/addtocart", async (req, res) => {
  try {
    if (
      req.body.name &&
      req.body.odometer &&
      req.body.year &&
      req.body.description &&
      req.body.url
    ) {
      const car = new Cart({
        name: req.body.name,
        odometer: req.body.odometer,
        year: req.body.year,
        description: req.body.description,
        url: req.body.url
      });
      await car.save();
      res.status(200).json(car);
    } else {
      res.status(400).json({ message: "Failed to add car." });
    }
  } catch (error) {
    res.status(500).send("Failed to add cars with error");
  }
});


//getcart
app.get("/getcart", async (req, res) => {
  try {
    const cars = await Cart.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).send("Failed to add cars with error");
  }
});


//addcar
app.post("/addcar", async (req, res) => {
  try {
    if (
      req.body.name &&
      req.body.odometer &&
      req.body.year &&
      req.body.description &&
      req.body.url
    ) {
      const car = new Cars({
        name: req.body.name,
        odometer: req.body.odometer,
        year: req.body.year,
        description: req.body.description,
        url: req.body.url
      });
      await car.save();
      res.status(200).json(car);
    } else {
      res.status(400).json({ message: "Failed to add car." });
    }
  } catch (error) {
    res.status(500).send("Failed to add cars with error");
  }
});

//login
app.post("/login", async (req, res) => {
  try {
    if (req.body.email && req.body.password) {
      // const user = "Login sucessfully";
      const username =  req.body.email
      const password = req.body.password
      console.log("user")
      const user = await UserSignup.find({"email": username, "password": password})
     console.log(user)
     if (user.length != 0) {
      res.status(200).json(user);
     } else {
      res.status(402).json({ message: "username and password is incorrect." });
     }   
    } else {
      res.status(400).json({ message: "username and password required." });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Create user
app.post("/signup", async (req, res) => {
  try {
    if (req.body.username && req.body.email && req.body.password) {
      const user = new UserSignup({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      await user.save();
      res.status(201).json(user);
    } else {
      res.status(400).json({ message: "email and pasword required." });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
