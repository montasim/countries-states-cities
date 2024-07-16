import mongoose, { Schema } from 'mongoose';

const citiesSchema = new Schema({
    id: {
        type: Number,
        required: [true, 'Location ID is required'],
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: [true, 'Location name is required'],
        trim: true
    },
    state_id: {
        type: Number,
        required: [true, 'State ID is required'],
        trim: true
    },
    state_code: {
        type: String,
        required: [true, 'State code is required'],
        trim: true
    },
    state_name: {
        type: String,
        required: [true, 'State name is required'],
        trim: true
    },
    country_id: {
        type: Number,
        required: [true, 'Country ID is required'],
        trim: true
    },
    country_code: {
        type: String,
        required: [true, 'Country code is required'],
        trim: true
    },
    country_name: {
        type: String,
        required: [true, 'Country name is required'],
        trim: true
    },
    latitude: {
        type: String,
        required: [true, 'Latitude is required'],
        trim: true
    },
    longitude: {
        type: String,
        required: [true, 'Longitude is required'],
        trim: true
    },
    wikiDataId: {
        type: String,
        required: [false, 'WikiData ID is optional'],
        trim: true
    }
}, {
    timestamps: true  // Adds `createdAt` and `updatedAt` timestamps
});

const CitiesModel = mongoose.model('Cities', citiesSchema);

export default CitiesModel;
