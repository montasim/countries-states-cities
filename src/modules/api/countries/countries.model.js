import mongoose, { Schema } from 'mongoose';

const timezoneSchema = new Schema({
    zoneName: {
        type: String,
        required: [true, 'Zone name is required'],
        trim: true,
    },
    gmtOffset: { type: Number, required: [true, 'GMT offset is required'] },
    gmtOffsetName: {
        type: String,
        required: [true, 'GMT offset name is required'],
        trim: true,
    },
    abbreviation: {
        type: String,
        required: [true, 'Timezone abbreviation is required'],
        trim: true,
    },
    tzName: {
        type: String,
        required: [true, 'Timezone name is required'],
        trim: true,
    },
});

const countrySchema = new Schema({
    id: {
        type: Number,
        required: [true, 'Country ID is required'],
    },
    name: {
        trim: true,
        type: String,
        required: [true, 'Country name is required'],
    },
    iso3: {
        trim: true,
        type: String,
        required: [true, 'ISO3 code is required'],
    },
    iso2: {
        trim: true,
        type: String,
        required: [true, 'ISO2 code is required'],
    },
    numeric_code: {
        trim: true,
        type: String,
        required: [true, 'Numeric code is required'],
    },
    phone_code: {
        trim: true,
        type: String,
        required: [true, 'Phone code is required'],
    },
    capital: {
        trim: true,
        type: String,
        required: [true, 'Capital city is required'],
    },
    currency: {
        trim: true,
        type: String,
        required: [true, 'Currency code is required'],
    },
    currency_name: {
        trim: true,
        type: String,
        required: [true, 'Currency name is required'],
    },
    currency_symbol: {
        trim: true,
        type: String,
        required: [true, 'Currency symbol is required'],
    },
    tld: {
        trim: true,
        type: String,
        required: [true, 'Top-level domain is required'],
    },
    native: {
        trim: true,
        type: String,
        required: [true, 'Native name is required'],
    },
    region: {
        trim: true,
        type: String,
        required: [true, 'Region is required'],
    },
    region_id: {
        trim: true,
        type: String,
        required: [true, 'Region ID is required'],
    },
    subregion: {
        trim: true,
        type: String,
        required: [true, 'Subregion is required'],
    },
    subregion_id: {
        trim: true,
        type: String,
        required: [true, 'Subregion ID is required'],
    },
    nationality: {
        trim: true,
        type: String,
        required: [true, 'Nationality is required'],
    },
    timezones: {
        type: [timezoneSchema],
        required: [true, 'At least one timezone is required'],
    },
    translations: {
        kr: {
            trim: true,
            type: String,
            required: [true, 'Korean translation is required'],
        },
        pt_BR: {
            trim: true,
            type: String,
            required: [true, 'Portuguese (Brazil) translation is required'],
        },
        pt: {
            trim: true,
            type: String,
            required: [true, 'Portuguese translation is required'],
        },
        nl: {
            trim: true,
            type: String,
            required: [true, 'Dutch translation is required'],
        },
        hr: {
            trim: true,
            type: String,
            required: [true, 'Croatian translation is required'],
        },
        fa: {
            trim: true,
            type: String,
            required: [true, 'Persian translation is required'],
        },
        de: {
            trim: true,
            type: String,
            required: [true, 'German translation is required'],
        },
        es: {
            trim: true,
            type: String,
            required: [true, 'Spanish translation is required'],
        },
        fr: {
            trim: true,
            type: String,
            required: [true, 'French translation is required'],
        },
        ja: {
            trim: true,
            type: String,
            required: [true, 'Japanese translation is required'],
        },
        it: {
            trim: true,
            type: String,
            required: [true, 'Italian translation is required'],
        },
        cn: {
            trim: true,
            type: String,
            required: [true, 'Chinese translation is required'],
        },
        tr: {
            trim: true,
            type: String,
            required: [true, 'Turkish translation is required'],
        },
    },
    latitude: {
        trim: true,
        type: String,
        required: [true, 'Latitude is required'],
    },
    longitude: {
        trim: true,
        type: String,
        required: [true, 'Longitude is required'],
    },
    emoji: {
        trim: true,
        type: String,
        required: [true, 'Emoji is required'],
    },
    emojiU: {
        trim: true,
        type: String,
        required: [true, 'Emoji Unicode is required'],
    },
});

const CountryModel = mongoose.model('Country', countrySchema);

export default CountryModel;
