import { Router } from "express";
import { EventRepositoryMongose } from "../repositories/EventRepositoryMongose";
import { EventController } from "../controllers/EventController";
import { EventUseCase } from "../useCase/EventUseCase";

class EventRoutes {
    public router: Router;
    private eventController: EventController;
    constructor(){
        this.router = Router();
        const eventRepositoy = new EventRepositoryMongose();
        const eventUsecase = new EventUseCase( eventRepositoy );
        this.eventController = new EventController( eventUsecase );
        this.initRoutes();
    }
    initRoutes(){
        this.router.post('/', this.eventController.create.bind(this.eventController));
    }
}

export { EventRoutes }