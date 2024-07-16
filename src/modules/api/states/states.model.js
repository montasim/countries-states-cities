import mongoose, { Schema } from 'mongoose';

const statesSchema = new Schema({
    id: {
        type: Number,
        required: [true, 'Area ID is required'],
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: [true, 'Area name is required'],
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
    state_code: {
        type: String,
        required: [true, 'State code is required'],
        trim: true
    },
    type: {
        type: String,
        default: null, // Sets the default value if none is provided
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
    }
}, {
    timestamps: true  // Adds `createdAt` and `updatedAt` timestamps
});

const StatesModel = mongoose.model('States', statesSchema);

export default StatesModel;
