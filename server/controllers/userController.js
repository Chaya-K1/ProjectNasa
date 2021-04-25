const User = require('../models/userModel')
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
    const addUser = new User(req.body)
    try {
        const user = await addUser.save();
        let token = jwt.sign({ email: req.body.email, password: req.body.password }, process.env.SECREET)
        res.status(201).json({ "messege": "Logged in successfully", user, token });
    } catch (err) {
        console.log(err)
    }
}

const loginUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, password: req.body.password })
        if (user) {
            let token = jwt.sign({ email: req.body.email, password: req.body.password }, process.env.SECREET)
            res.status(200).json({ "messege": "Logged in successfully", user, token });
        }
        else {
            res.status(404).send("The user undifaind in system")
        }
    } catch (error) {
        res.status(404).send(`Error: ${err}`)
    }
}

const getImg = async (req, res) => {
    try {
        const user = await User.findById({ _id: req.params.userId })
            .populate({ path: 'images', select: 'title url' });
        if (user) {
            console.log(user.images);
            res.status(200).json({ user: user })
        }
        else
            res.status(404).send('You are not registered in the system')

    } catch (error) {
        console.log(`Error: ${err}`);
        res.status(500).send(`Error: ${err}`)
    }
}

module.exports = { createUser, loginUser, getImg }