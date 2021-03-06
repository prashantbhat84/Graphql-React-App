import mongoose, { Schema } from 'mongoose';

const eventSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },


}, {
    timestamps: true
});


const Event = mongoose.model("Event", eventSchema);


export default Event;