const mongoose = require('mongoose');

const imgSchema = mongoose.Schema({

    media_type: {
        type: String,
    },
    title: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Img', imgSchema)