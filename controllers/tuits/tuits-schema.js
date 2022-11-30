import mongoose from 'mongoose';
import React from 'react';

const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
}, {collection: 'tuits'});
export default schema;

