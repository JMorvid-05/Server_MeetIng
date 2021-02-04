import { Router } from "express";
import { Save } from '../controllers/HourSave';
import upload from "../libs/multer";
import { tokenV } from '../libs/validateToken';
import { Request, Response } from 'express';
import Hour, { inthour } from '../models/Hour';

const router = Router();
router.post('/save',upload.single('file'), Save);

router.get('/list',tokenV, async (req: Request, res: Response) => {
    
    console.log("========WWWWWWW====");
    console.log(req.body);
    const email=req.body['email'];
        console.log(email);
        
  await  Hour.find({}, (err, hour) => {
        console.log('==!owo');
        
   res.json(hour);
    })
});
router.route('/get/:id')
    .get(tokenV,async (req: Request, res: Response): Promise<any> => {
        const { id } = req.params;
        const hour = await Hour.findById(id).lean().exec();
        if (hour != null) {
          
            return res.json(hour);
        }
        res.status(404).json({ text: "The hour doesn't exits" });
    });

    /*
router.put('/edit/:id',tokenV, async (req: Request, res: Response) => {
  const { id } = req.params;
        const { project,description,country,area,hoursg,files,client,personqr,datexe,frente } = req.body;
        // const person= meet.person=r.person;
        // const paragraph=meet.paragraph=r.paragraph;
        await Hour.findByIdAndUpdate(id,
            { $set: { project:project,description:description,country:country,area:area,hoursg:hoursg,files:files,client:client,personqr:personqr,datexe:datexe,frente:frente } }
        );
        res.json({ text: 'Hour updated!' });
        });
    */
    



export default router;