import Event from '../models/Event';
import User from '../models/User';

const Booking = {
    event: async (parent, args, ctx, info) => {
        try {
            let events = await Event.find();

            events = events.find(event => event._id.toString() === parent.event.toString());

            return events
        } catch (error) {
            throw new Error(error.message)
        }
    },
    user: async (parent, args, ctx, info) => {
        try {
            const users = await User.find();
            return users.find(user => user._id.toString() === parent.user.toString());


        } catch (error) {
            throw new Error(error.message)
        }

    }
}
export default Booking