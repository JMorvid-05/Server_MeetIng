import { Router, Request, Response, json } from 'express';
const router = Router();
import moment from 'moment';
//model 
import Meeting, { intmeet } from "../models/Meeting";
import { tokenV } from '../libs/validateToken';



router.route('/create')
    .post(tokenV,async (req: Request, res: Response) => {

        var { name, hour,  rdate } = req.body;
        const cdate = moment().format('DD-MM-YYYY');
        rdate = moment(rdate).format('DD-MM-YYYY');
        if (cdate>rdate) {
            res.json('Error, La fecha colocada no se permite al ser del pasado y no una futura');
            
        } else {
            const meet = new Meeting({ cdate, rdate, hour, name, person: [], paragraph: '' });
            console.log(meet);
    
            await meet.save();
            res.status(500).json({ text: 'Meet created' + meet });
        }



  

    });

router.route('/list')
    .get(tokenV,async (req: Request, res: Response) => {
        Meeting.find({}, (err, meet) => {
            res.json(meet);
            console.log(meet);
            
        })
    });

router.route('/get/:id')
    .get(tokenV,async (req: Request, res: Response): Promise<any> => {
        const { id } = req.params;
        const meet = await Meeting.findById(id).lean().exec();
        if (meet != null) {
            console.log(meet);
            return res.json(meet);
        }
        res.status(404).json({ text: "The meeting doesn't exits" });
    });
 /*
router.route('/delete/:id')
    .get(tokenV,async (req: Request, res: Response) => {
        const { id } = req.params;
        await Meeting.find({})
        await Meeting.findByIdAndDelete(id);
        // await Person.remove({'email':email});
        res.json({ text: 'Meet deleted' + id });
    });*/
router.route('/edit/:id')
.put(tokenV,async (req: Request, res: Response) => {
        const { id } = req.params;
        const { person, paragraph } = req.body;
        console.log('aqui');
        console.log(req.body);
        console.log(person);
        console.log('-----------------')
        // const person= meet.person=r.person;
        // const paragraph=meet.paragraph=r.paragraph;
        await Meeting.findByIdAndUpdate(id,
            { $set: { person: person, paragraph: paragraph } }
        );
        res.json({ text: 'Meeting updated!' });
    });
    router.route('/delete/:id')
.delete(tokenV,async (req: Request, res: Response) => {
        const { id } = req.params;
        const { person, paragraph } = req.body;
        console.log('aqui');
        console.log(req.body);
        console.log(person);
        console.log('-----------------')

        await Meeting.findByIdAndDelete(id,);
        res.json({ text: 'Meeting deleted!' });
    });
export default router;


