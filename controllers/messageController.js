import db from '../db/queries.js';
import CustomNotFoundError from '../errors/CustomNotFoundError.js';
import { body, validationResult, matchedData } from 'express-validator';

const alphanumericErr = 'must only contain alphabet letters and numbers';
const emptyErr = 'cannot be empty';

const validateUser = [
  body('user')
    .trim()
    .notEmpty()
    .withMessage(`Author Name ${emptyErr}`)
    .isAlphanumeric('en-US', { ignore: ' ,' })
    .withMessage(`Author Name ${alphanumericErr}`),
  body('text')
    .trim()
    .notEmpty()
    .withMessage(`Message Text ${emptyErr}`)
    .isAlphanumeric('en-US', { ignore: ' ,' })
    .withMessage(`Message Text ${alphanumericErr}`),
];

async function getMessageByID(req, res) {
  const message = await db.getMessage(req.params.messageId);
  if (!message) {
    throw new CustomNotFoundError('Message not found');
  }
  res.render('message', { title: 'Single Message', message });
}

const insertMessage = [
  validateUser,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render('form', {
        title: 'Create Message',
        errors: errors.array(),
      });
    }
    const { text, user } = matchedData(req);
    await db.insertMessage(text, user);
    res.redirect('..');
  },
];

async function getMessageForm(req, res) {
  res.render('form');
}

export default { getMessageByID, insertMessage, getMessageForm };
