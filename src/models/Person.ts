import mongoose, { Schema, model } from 'mongoose';

export interface intper extends mongoose.Document {
  email: String,
  fname: String,
  lname: String,
  cc: String,
  country:String

}

const person = new Schema({
  email: String,
  fname: String,
  lname: String,
  cc: String,
  country: String
});


export default model<intper>('Person', person);