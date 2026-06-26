import express from 'express';
import path from 'node:path';
const app = express();
import { indexRouter } from './routes/indexRouter.js';
import { messageRouter } from './routes/messageRouter.js';

const __dirname = import.meta.url;
// const assetsPath = path.join(__dirname, 'public');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use('/new', messageRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Mini Message Board listening on port ${PORT}!`);
  //   console.log(assetsPath);
});
