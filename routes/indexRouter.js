import Router from 'express';
import indexController from '../controllers/indexController.js';

export const indexRouter = Router();
export const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    id: crypto.randomUUID(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    id: crypto.randomUUID(),
  },
];

indexRouter.get('/', indexController.getMessages);
