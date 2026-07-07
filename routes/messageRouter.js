import Router from 'express';
import messageController from '../controllers/messageController.js';

export const messageRouter = Router();

messageRouter.get('/', messageController.getMessageForm);

messageRouter.post('/', messageController.insertMessage);

messageRouter.get('/:messageId', messageController.getMessageByID);
