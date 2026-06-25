import Router from 'express';

export const messageRouter = Router();

messageRouter.get('/', (req, res) => {
  res.render('message', { message: "I'm the message" });
});
