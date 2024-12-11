import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization']; 
  const token = authHeader && authHeader.split(' ')[1]; 

  if (!token) {
    res.status(401).json({ message: 'Access token is missing or invalid' });
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret_key', (err, decoded) => {
    if (err) {
      res.status(403).json({ message: 'Invalid or expired token' });
      return; 
    }

    const payload = decoded as JwtPayload;
    req.user = { username: payload.username };

    next();
  });
};
