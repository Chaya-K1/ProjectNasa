const Img = require('../models/imgModel')
const User = require('../models/userModel')
const request = require('request');

const requestApi = (data) => {
    return new Promise((resolve, reject) => {
        let options = {
            method: "GET",
            url: 'https://api.nasa.gov/planetary/apod?api_key=AxYmZ2SvB2PTSWPxZAiityAhRqk4cgPndlrKE6YU'

        }
        request(options, (err, res, body) => {
            if (err)
                reject(err)

            else {
                resolve(body)
            }
        })
    })
}

const addImgBySite = async (req, res) => {
    try {
        const image = await requestApi();
        const addImg = new Img(JSON.parse(image));
        addImg.userId = req.body.userId;
        addImg.save();

        const updateUser = await User.findByIdAndUpdate(req.body.userId, { $push: { images: addImg._id } })
        res.status(201).json({ image: addImg })
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`)
    }
}

const addImgByUser = async (req, res) => {

    try {
        const addImg = await new Img(req.body);
        const img = await addImg.save();
        const updateUser = await User.findByIdAndUpdate(req.body.userId, { $push: { images: addImg._id } })
        res.status(201).json({ Image: img })
    } catch (error) {
        res.status(500).send(`Error: ${error}`)
    }
}

module.exports = { addImgBySite, addImgByUser }