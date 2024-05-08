const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    movie: {type: String},
    slot: {type: String},
    seats: {
        A1: {type: Number},
        A2: {type: Number},
        B1: {type: Number},
        B2: {type: Number},
        B3: {type: Number},
        B4: {type: Number},
        C1: {type: Number},
        C2: {type: Number}
    }
})

const Ticket = mongoose.model('bookmovietickets',TicketSchema)
module.exports = Ticket