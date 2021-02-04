import { Router, Request, Response, json } from 'express';
const router = Router();
//model 
import {tokenV} from '../libs/validateToken';
import Person from '../models/Person';


router.route('/create') 
  .post ( tokenV, async (req: Request, res: Response) => {
    //sesión para mensaje cuando es registrado como si fuera alguien nuevo del sistema
    console.log('Aqui ');
    const rq = req.body;
    const person = new Person();
    //========mejorar==========//
    person.email = rq.email;
    person.fname = rq.fname;
    person.lname = rq.lname;
    person.cc = rq.cc;
    person.country=rq.country
    //=========================//
    console.log(person);
    await person.save();
    res.json({ text: 'person Create' });
  });

router.route('/list')
  .get(tokenV,async (req: Request, res: Response): Promise<void> => {

    Person.find({}, (err, per) => {
      // title=JSON.stringify(tasks[0]);
      //no se debe hacer
      res.json(per);
    })

  }),
  router.route('/delete/:id')
    .get(tokenV,async (req: Request, res: Response): Promise<void> => {
      const { id } = req.params;
      await Person.find({})
      await Person.findByIdAndDelete(id);
      // await Person.remove({'email':email});
      res.json({ text: 'person deleted' + id });
    });

router.route('/edit/:id')
  .put(tokenV,async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const rq = req.body;
    const person = new Person();
    const email = person.email = rq.email;
    const fname = person.fname = rq.fname;
    const lname = person.lname = rq.lname;
    const cc = person.cc = rq.cc;
    const country= person.country=rq.country
    console.log(person);
    await Person.findByIdAndUpdate(id, {
      email, fname, lname, cc,country
    });
    res.json({ text: 'person updated' + id });
  });

router.route('/get/:id')
  .get(tokenV,async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
    const person = await Person.findById(id).lean().exec();

    if (person != null) {
      console.log(person);
      return res.json(person);
    }
    res.status(404).json({ text: "The person doesn't exits" });
  });

  

export default router;


