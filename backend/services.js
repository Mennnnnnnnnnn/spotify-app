import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();  
const port = process.env.PORT || 5000;

//middeleware
app.use(cors());
app.use(express.json());


//initialize routes

app.get('/', (req, res) => {
    res.send('API WORKign')
})

app.listen(port, () => {
    console.log(`start app listening on port ${port}`)
})