import { openDb } from '../database';


// Create a new user
export async function createUser(username: string, hashedPassword: string) {
  const db = await openDb();
  await db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
}

// Get a user by name
export async function getUserByUsername(username: string) {
  const db = await openDb();
  return db.get('SELECT * FROM users WHERE username = ?', [username]);
}

// Get a user by id
export async function getUserById(id: number) {
    const db = await openDb();
    return db.get('SELECT * FROM users WHERE id = ?', [id]);
  }
  
  // Update/PUT user information
  export async function updateUser(id: number, username: string, hashedPassword: string) {
    const db = await openDb();
    await db.run('UPDATE users SET username = ?, password = ? WHERE id = ?', [username, hashedPassword, id]);
  }
  
  // Delete a user by id
  export async function deleteUser(id: number) {
    const db = await openDb();
    await db.run('DELETE FROM users WHERE id = ?', [id]);
  }
  
  // Get all users
  export async function getAllUsers() {
    const db = await openDb();
    return db.all('SELECT * FROM users');
  }