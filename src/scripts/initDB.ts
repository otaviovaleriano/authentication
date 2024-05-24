import { openDb } from '../database';

const initializeDatabase = async () => {
  const db = await openDb();
  await db.exec('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)');
  console.log('Database initialized');
};

initializeDatabase().catch((err) => {
  console.error('Error initializing database:', err);
});