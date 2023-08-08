import express, { Application } from 'express';
import { connect } from './infra/database';
import { errorMiddleware } from './middlewares/error.middleware';
import { EventRoutes } from './routes/event.routes'

class App {
    public app: Application;
    private eventRoutes = new EventRoutes()
    constructor(){
       this.app = express();
       this.middlewaresInitialize();
       this.InitializeRoutes();
       this.interceptionError();
       connect();
    }

    InitializeRoutes(){
        this.app.use('./events', this.eventRoutes.router);
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