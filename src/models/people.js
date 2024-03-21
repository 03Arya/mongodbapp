import { Schema, model, models } from 'mongoose';

const peopleSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    age: {
        type: Number,
    }

},{timestamps: true})

export default models.People || model('People', peopleSchema)