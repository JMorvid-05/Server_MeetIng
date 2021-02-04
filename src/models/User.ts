import mongoose,{ Schema, model,  } from "mongoose";

export interface intus extends mongoose.Document {
  
    email: String,
    fname: String,
    lname: String,
    token?: String,
}
const person = new Schema({
 
    email: String,
    fname: String,
    lname: String,
    
  });

  export default model<intus>('User', person);