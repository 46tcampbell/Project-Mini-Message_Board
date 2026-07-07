import { Client } from 'pg';

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT,
  "user" TEXT,
  added TIMESTAMPTZ DEFAULT NOW()
  );

  INSERT INTO messages (text, "user")
  VALUES
  ('Hey, Hey', 'Harry Caray'),
  ('Hey, Hey, Hey', 'Fat Albert'),
  ('Hey Jude', 'The Beatles'),
  ('Hey diddle diddle', 'The Cat and the Fiddle')
`;

async function main() {
  console.log('seeding...');
  const client = new Client();
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
