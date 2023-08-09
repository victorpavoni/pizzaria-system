import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload{
  sub: string;
}

function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if(!authToken) {
    throw new Error("Token is missing");
  };

  const token = req.headers.authorization.split(' ')[1];

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;
    req.user_id = sub;
    return next();
  } catch (err) {
    return res.status(401).end();
  }
}

export default isAuthenticated;
