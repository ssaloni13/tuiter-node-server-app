import mongoose from 'mongoose';
import schema from './tuits-schema.js';
import React from 'react';


const tuitsModel = mongoose
    .model('TuitModel', schema);
export default tuitsModel;

