import pool from './pool.js';

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function insertMessage(message) {
  await pool.query('INSERT INTO messages (message) VALUES ($1)', [message]);
}

export default { getAllMessages, insertMessage };
