const mongoose = require('mongoose');

const userScema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        validate: {
            validator: (e) => {
                return /^[A-Za-z0-9]+$/.test(e);
            },
            message: props => ` error: ${props.value} is not valid\n/,
            the password should contain letters and numbers!`
        }
    },
    email: {
        type: String,
        validate: {
            validator: (e) => {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e);
            },
            message: props => ` error: ${props.value} is not valid!`
        }
    },
    images: [{
        type: mongoose.Types.ObjectId,
        ref: 'Img'
    }]
})

module.exports = mongoose.model('User', userScema)