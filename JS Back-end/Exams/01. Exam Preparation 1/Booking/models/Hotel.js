const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true, minLength: 4 },
    city: { type: String, required: true, minLength: 3 },
    imageUrl: { type: String, required: true, match:[/^https?/, 'Image must be valid URL'] },
    rooms: { type: Number, required: true, min: 1, max: 100 },
    bookedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    ownre: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

module.exports = model('Hotel', schema);