import mongoose, {Schema,model} from'mongoose';
export interface intmeet extends mongoose.Document{
    
    cdate:String,
    rdate:String,
    name:String,
    person:[String],
    paragraph:String,
    hour:string

}

const meetings=new Schema({
    
    cdate:String,
    rdate:String,
    name:String,
    person:Array,
    paragraph:String,
    hour:String
 });
 
 
export default model<intmeet>('meetings',meetings);