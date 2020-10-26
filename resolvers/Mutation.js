import Event from '../models/Event';
import Booking from '../models/Booking';
import User from '../models/User';
import bcrypt from 'bcryptjs'

const Mutation = {
    createEvent: async (parent, args, ctx, info) => {
        try {
            args.data.creator = "5f95770119665a258466a2ef";
            const event = await Event.create(args.data);
            const user = await User.findById("5f95770119665a258466a2ef");
            if (!user) {
                throw new Error("User not found");
            }
            user.createdEvents.push(event);
            const updatedUser = await user.save();
            console.log(updatedUser);
            return event;

        } catch (error) {
            throw new Error(error.message)
        }
    },
    createUser: async (parent, args, ctx, info) => {
        try {
            args.data.password = await bcrypt.hash(args.data.password, 10);
            const existingUser = await User.findOne({ email: args.data.email });
            if (existingUser) {
                throw new Error("User with this email already exists")
            }
            const user = await User.create(args.data);
            user.password = null;
            return user;
        } catch (error) {
            throw new Error(error.message)
        }

    },
    bookEvent: async (parent, args, ctx, info) => {

        const booking = await Booking.create({
            event: args.eventID,
            user: "5f95770119665a258466a2ef"
        });

        return booking;
    },
    cancelBooking: async (parent, args, ctx, info) => {
        const booking = await Booking.findById(args.bookingID);
        let events = await Event.find();
        console.log(events);
        if (!booking) {
            throw new Error("Booking does not exist");
        }


        events = events.find(event => event.id === booking.event.toString());

        const deletedBooking = await Booking.findByIdAndDelete(args.bookingID);
        return events;

    }

}

export default Mutation