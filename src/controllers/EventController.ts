import { NextFunction, Request, Response, response } from "express";
import { EventUseCase } from "../useCase/EventUseCase";

class EventController {
    constructor(private eventUsecase: EventUseCase ){}
    async create(request: Request, responsive: Response, next: NextFunction) {
        const eventData = request.body
        try{ 
          await this.eventUsecase.create(eventData);
          return response
          .status(201)
          .json({message: 'Evento criando com sucesso'});
        } catch (error) {
          next (error);
        }
    }
}

export { EventController };