const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const orderRoutes = require("./routes/orderRoutes")
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:3000/books
app.use("/placeOrder", orderRoutes); // localhost:3000/placeOrder

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
   
    if (email == "abc@gmail.com" && password == "12345") {
     // Successful login
    res.status(200).json({ message: 'Login successful' });
    }

    else {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
   
    
  } catch (error) {
    console.log('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




mongoose
  .connect(
    "mongodb://127.0.0.1:27017/BookStore"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
