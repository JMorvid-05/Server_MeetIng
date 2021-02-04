import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User,{ intus } from "../models/User";
import  Person,{intper} from '../models/Person'


export const login = async (req: Request, res: Response) => {
    const rq =req.body;
  const authToken:intus= new User();
    authToken.fname=rq.fname;
    authToken.lname=rq.lname;
    authToken.email=rq.email;
    authToken.token=rq.token;
    console.log(rq.authToken);
    console.log('aquí~~~');
    console.log(rq.email);
   const a = await Person.findOne({'email':authToken.email}).lean().exec();
   console.log(a);
   
if (a!=null) {
  const token = jwt.sign({ _id: authToken._id  },process.env.token_secret || 'D0G5');
  req.headers.token = token;
  return res.status(200).json({ token });
} else{
  return res.status(404).json('El usuario no está registrado en el sistema');
  
  
}



};

