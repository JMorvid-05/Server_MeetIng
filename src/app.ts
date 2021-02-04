import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

// Routes
import personroutes from './routes/person';
import meetRoutes from './routes/meetings';
import authroutes from './routes/auth';
import houroutes from './routes/hour';

class Application {

    app: express.Application;

    constructor() {

        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
      
    }
    
   
       /* if (this.app.get('env') === 'production') {
            this.app.set('trust proxy', 1)
            session.cookie.secure = true

        }*/

    settings() {
        this.app.set('port', 27017);
    }

 

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(cors({origin:'*',optionsSuccessStatus:200}))
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/',authroutes);
        this.app.use('/meetings', meetRoutes);
        this.app.use('/persons', personroutes);
        this.app.use('/hours',houroutes);
        this.app.use('/uploads',express.static(path.resolve('uploads')));
        

        this.app.use(express.static(path.join(__dirname, 'public')));
    }

    start(): void {

        this.app.listen(this.app.get('port'), () => {
            console.log('>>> Server is running at', this.app.get('port'));
        });
    }
}


export default Application;