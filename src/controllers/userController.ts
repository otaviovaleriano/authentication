import { Request, Response } from 'express';
import { createUser, getUserByUsername, getUserById, updateUser, deleteUser, getAllUsers } from '../models/userModel';
import bcrypt from 'bcryptjs';

export async function createNewUser(req: Request, res: Response) {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await createUser(username, hashedPassword);
  res.status(201).json({ message: 'User created' });
}

export async function getUser(req: Request, res: Response) {
  const { id } = req.params;
  const user = await getUserById(Number(id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
}

export async function getUserByName(req: Request, res: Response) {
  const { username } = req.params;
  const user = await getUserByUsername(username);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
}

export async function updateUserDetails(req: Request, res: Response) {
  const { id } = req.params;
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await updateUser(Number(id), username, hashedPassword);
  res.json({ message: 'User updated' });
}

export async function removeUser(req: Request, res: Response) {
  const { id } = req.params;
  await deleteUser(Number(id));
  res.json({ message: 'User deleted' });
}

export async function listUsers(req: Request, res: Response) {
  const users = await getAllUsers();
  res.json(users);
}
