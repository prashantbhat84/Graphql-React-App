import User from '../models/User';
const Event = {
    creator: async (parent, args, ctx, info) => {
        try {
            const user = await User.findById(parent.creator);
            return user;
        } catch (error) {
            throw new Error(error.message)
        }
    }
}
export default Event