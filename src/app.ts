import express, { Application } from 'express';
import { connect } from './infra/database';
import { errorMiddleware } from './middlewares/error.middleware';

class App {
    public app: Application;
    constructor(){
       this.app = express();
       this.middlewaresInitialize();
       this.InitializeRoutes();
       this.interceptionError();
       connect();
    }

    InitializeRoutes(){
       
        // this.app.use('./',) 
    }

    interceptionError(){
        this.app.use(errorMiddleware);
    }

    middlewaresInitialize(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true})); 
    }

    listen(){
        this.app.listen(3333, ()=>console.log('sever is running'));
    }
}

export {App};