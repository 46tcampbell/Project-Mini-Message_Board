import Router from 'express';
import { messages } from './indexRouter.js';

export const messageRouter = Router();

messageRouter.get('/', (req, res) => {
  res.render('form');
});

messageRouter.post('/', (req, res) => {
  console.log(req.body);
  messages.push({
    user: req.body.user,
    text: req.body.text,
    added: new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    id: crypto.randomUUID(),
  });
  console.log(messages);
  res.redirect('/');
});

messageRouter.get('/:messageId', (req, res) => {
  //   res.send(req.params);
  const message = messages.find(
    (element) => element.id === req.params.messageId
  );
  res.render('message', { title: 'Single Message', message });
});
