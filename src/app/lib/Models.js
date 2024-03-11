const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    password: {
        type: String,
        required: true,
        min: 5,
    },
    img: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: true,
    }
}, {
    timestamps: true,
});

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    userId: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

export const User= mongoose.models.User || mongoose.model("User",userSchema);
export const Post= mongoose.models.Post || mongoose.model("Post",postSchema);