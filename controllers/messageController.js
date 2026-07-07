import db from '../db/queries.js';
import CustomNotFoundError from '../errors/CustomNotFoundError.js';

async function getMessageByID(req, res) {
  const message = await db.getMessage(req.params.messageId);
  if (!message) {
    throw new CustomNotFoundError('Message not found');
  }
  res.render('message', { title: 'Single Message', message });
}

async function insertMessage(req, res) {
  await db.insertMessage(req.body.text, req.body.user);
  res.redirect('..');
}

async function getMessageForm(req, res) {
  res.render('form');
}

export default { getMessageByID, insertMessage, getMessageForm };
