import db from '../db/queries.js';

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  console.log('Messages: ', messages);
  res.render('index', { title: 'Mini Messageboard', messages });
}

export default {
  getMessages,
};
