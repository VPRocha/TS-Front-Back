import express from 'express';

// routes
import home from '../routes/home';

const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use('/', home)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})