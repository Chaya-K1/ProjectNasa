const router = require('express').Router();
const checkToken=require('../middelwers/verify-token')
const{addImgBySite,addImgByUser}=require('../controllers/imgController')
//images

router.post('/addImageStock',checkToken,addImgBySite);
router.post('/addImageComputer',checkToken,addImgByUser);

module.exports = router