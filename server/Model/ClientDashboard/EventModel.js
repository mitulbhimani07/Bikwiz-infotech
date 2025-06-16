const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String },
    startTime: { type: String },
    endTime: { type: String },
    date: { type: Date },
    location: { type: String },
    guest: [{ type: String }],
    category: { type: String },
    color: { type: String },
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
    notifications: {
        twoDaysBefore: { type: Boolean, default: true },
        dayOf: { type: Boolean, default: true },
        oneHourBefore: { type: Boolean, default: true }
    },
    notified: {
        twoDaysBefore: { type: Boolean, default: false },
        dayOf: { type: Boolean, default: false },
        oneHourBefore: { type: Boolean, default: false }
    }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);


