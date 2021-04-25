const router = require('express').Router();
const checkToken=require('../middelwers/verify-token')
const {createUser,loginUser,getImg}=require('../controllers/userController');
//users

router.post('/createUser',createUser);
router.post('/loginUser',loginUser);
router.get('/getImg/:userId',checkToken,getImg);

module.exports = router
