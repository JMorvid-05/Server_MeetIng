//middleware (every one of routes first must check this file)
import jwt, { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';
import { Request, Response, NextFunction, request } from 'express';
import { IPayload } from '../models/Payload';

//undefined header token 

export async function tokenV(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization'] as string;
  try {
    if (token == null) {
      return res.status(401).send('unathorize Request!');
    }
    const tok = await token.split(' ')[0];
    if (tok == null) {
      return res.status(400).send('Unathorize Request.');
    }
    const payload: IPayload = jwt.verify(token, 'D0G5') as IPayload;
    if (!payload) {
      return res.status(401).send('Unathorized Request');
    }

    next();

  } catch (error) {
    console.log('Error: ' + error);
    if (error != null) {
      return res.status(404).send('¡This token has expired!');
    }


  }
}
