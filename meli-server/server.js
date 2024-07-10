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
app.use(function(req, res){
    res.status(404);
  
    // Respuesta html
    if (req.accepts('html')) {
      res.render('404', { url: req.url });
      return;
    }
  
    // Respuesta json
    if (req.accepts('json')) {
      res.send({ error: 'Not found' });
      return;
    }
  
    // Texto plano
    res.type('txt').send('Not found');
  });

app.listen(8080, () => console.log('Server is running on port 8080'));