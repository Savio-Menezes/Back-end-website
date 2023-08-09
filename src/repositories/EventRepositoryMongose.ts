import mongoose from "mongoose";
import { Event } from "../entities/Event";
import { EventRepository } from "./EventRepository";

const eventSchema = new mongoose.Schema({
    tittle: String,
    Location:{
        latitude: String,
        longitude: String,
    },
    date: Date,
    createdAt: {
        type: Date,
        default: Date.now
    },
    description: String,
    categories: [String],
    banner: String,
    flyers: [String],
    price: {
        type: Array,
    },
    city: String,
    participants: {
        type: Array,
        ref: 'User',
    },

});

const EventModel = mongoose.model('Event', eventSchema);

class EventRepositoryMongose implements EventRepository{
    async add(event: Event): Promise<Event> {
        const eventModel = new EventModel(event);

        await eventModel.save();
        return event;
    }
}

export { EventRepositoryMongose };