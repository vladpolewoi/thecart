import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import logger from 'morgan'
import dbConfig from './config/db'
import mainRoutes from './routes/main'
import cors from 'cors'

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use('/', mainRoutes);

mongoose.connect(dbConfig.url, { useNewUrlParser: true })
  .then(()=> {
    console.log('Database connected');
  })
  .catch(()=> {
    console.log('Error connecting to database');
  });

const port = 8090;

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Project Support',
  });
});

app.listen(port, () => {
  console.log(`Our server is running on port ${port}`);
});