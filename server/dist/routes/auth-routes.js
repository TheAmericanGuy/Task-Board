import { Router } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
export const login = async (req, res) => {
    const { username, password } = req.body;
    const mockUsers = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
    ];
    const mockUser = mockUsers.find(u => u.username === username && u.password === password);
    if (mockUser) {
        const mockToken = jwt.sign({ username: mockUser.username }, process.env.JWT_SECRET || 'fallback_secret_key', {
            expiresIn: '1h',
        });
        res.json({ token: mockToken });
        return;
    }
    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            res.status(401).json({ message: 'Invalid username or password' });
            return;
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            res.status(401).json({ message: 'Invalid username or password' });
            return;
        }
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET || 'fallback_secret_key', {
            expiresIn: '1h',
        });
        res.json({ token });
        return;
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while trying to log in' });
        return;
    }
};
const router = Router();
router.post('/login', login);
export default router;
