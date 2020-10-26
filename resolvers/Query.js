import Event from '../models/Event';
import Booking from '../models/Booking';

const Query = {
    events: async (parent, args, ctx, info) => {
        try {
            const events = await Event.find();
            return events;
        } catch (error) {
            return error.message
        }
    },
    bookings: async (parent, args, ctx, info) => {
        const bookings = await Booking.find();
        return bookings;

    }
}
export default Query;