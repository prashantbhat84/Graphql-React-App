import Event from '../models/Event';
const User = {
    createdEvents: async (parent, args, ctx, info) => {
        try {

            let events = await Event.find();

            events = events.filter(event => event.creator.toString() === parent.id);

            return events

        } catch (error) {
            throw new Error(error.message)
        }
    }
}
export default User;