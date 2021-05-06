const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const characterSchema = new Schema(
    {
        characterData: {
            type: Object,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Character = model('Character', characterSchema);

module.exports = Character;
