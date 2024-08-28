const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categoryController');
const authenticate = require('../middleWare/authenticate');


router.post('/', authenticate("ROLE_ADMIN"), categoryController.createCategory);
router.get('/:id',authenticate(), categoryController.getCategoryById)
router.get('/', categoryController.getAllCategories)
router.get('/property/:propertyId', authenticate(),categoryController.getCategoriesByProperty);
router.get('/address/:addressId',authenticate(), categoryController.getCategoryByAddress);
router.get('/transactionType/:transactionType', authenticate(),categoryController.getCategoryByTransactionType);
module.exports = router;
