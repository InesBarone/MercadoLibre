import express from 'express'
import items from './routes/items.js'
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors());

app.get('/ping', (req, res) => {
    res.send('pong');
})

app.use('/api/items', items);

app.listen(8080, () => console.log('Server is running on port 8080'));