import mongoose, {Schema,model} from'mongoose';


export interface inthour extends mongoose.Document{
    datexe: String;
    dateat:String,
    fech:String,
    email:String,
    project:String,
    description:String,
    country:String,
    area:String,
    hoursg:Number,
    files:String,
    client:String,
    personqr:String,
    frente:String,
    datexec:String
}

const Hours=new Schema({
    dateat:String,
    fech:String,
    email:String,
    project:String,
    description:String,
    country:String,
    area:String,
    hoursg:Number,
    files:String,
    client:String,
    personqr:String,
    datexec:String,
    frente:String,
 });

 
export default model<inthour>('hours',Hours);