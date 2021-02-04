import App from './app';
import { connect } from './database';
import dotenv from 'dotenv';
dotenv.config();


const app = new App();
connect();

app.start();