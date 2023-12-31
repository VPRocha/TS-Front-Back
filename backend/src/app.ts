import express from 'express';
import cors from 'cors'

// routes
import home from '../routes/home';
import user from '../routes/user';

const app = express();

app.use(express.json());

app.use(cors({
  origin:['http://localhost:8080']
}));

app.use('/', home)
app.use('/user', user)

app.listen(3000, function () {
  console.log('App listening on port localhost:3000!')
})