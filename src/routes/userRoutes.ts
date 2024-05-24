import { Router } from 'express';
import { createNewUser, getUser, updateUserDetails, removeUser, listUsers, getUserByName } from '../controllers/userController';

const router = Router();

router.post('/register', createNewUser);
router.get('/user/:id', getUser);
router.get('/user/username/:username', getUserByName);
router.put('/user/:id', updateUserDetails);
router.delete('/user/:id', removeUser);
router.get('/users', listUsers);

export default router;
