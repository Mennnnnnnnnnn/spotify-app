import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';

const app = express();  
const port = process.env.PORT || 5000;
connectDB();
connectCloudinary();

//middeleware
app.use(cors());
app.use(express.json());


//initialize routes
app.use("/api/song",songRouter);
app.use("/api/album",albumRouter);


app.get('/', (req, res) => {
    res.send('API WORKign')
})

app.listen(port, () => {
    console.log(`start app listening on port ${port}`)
})