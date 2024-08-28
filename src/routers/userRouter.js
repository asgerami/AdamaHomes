const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const authenticate = require('../middleWare/authenticate');


router.get('/profile',  authenticate(), userController.getUserProfileHandler);
router.get('/',  authenticate(), userController.findAllUsers);
router.get('/:id',  authenticate(), userController.findUserById);
router.put('/changeprofiles/:id',  authenticate(), userController.updateUser)
module.exports = router;
