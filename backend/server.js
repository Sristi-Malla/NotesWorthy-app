const express = require("express");
const app = express();
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const userRoutes=require('./routes/userRoutes');
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const noteRoutes = require('./routes/noteRoutes');

dotenv.config();
connectDB();
app.use(express.json());

app.get('/',(req,res) => {
    res.send("API Is running");
}); //get request brings data from backend(from database) to the frontend and serves it


app.use('/api/users',userRoutes);
app.use('/api/notes', noteRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server started at PORT ${PORT}`));

