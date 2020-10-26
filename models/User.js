import mongoose, { Schema } from 'mongoose';


const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdEvents: [
        {
            type: Schema.Types.ObjectId,
            ref: "Event"
        }
    ]

}, {
    timestamps: true
});


const User = mongoose.model("User", userSchema);


export default User;