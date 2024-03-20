import {Schema, model, models} from 'mongoose';

const peopleSchema = new Schema({
    name: {
        type: String,
        required: true
    }


    })

    export default models.People || model('People', peopleSchema)