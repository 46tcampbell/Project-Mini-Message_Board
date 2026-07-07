import pool from './pool.js';

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function insertMessage(text, user) {
  await pool.query('INSERT INTO messages (text, "user") VALUES ($1, $2)', [
    text,
    user,
  ]);
}

async function getMessage(id) {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [
    id,
  ]);
  return rows;
}

export default { getAllMessages, insertMessage, getMessage };
