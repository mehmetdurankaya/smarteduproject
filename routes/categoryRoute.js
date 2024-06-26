const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.route('/').post(categoryController.createCategory); //http://localhost:3000/categories
router.route('/:id').delete(categoryController.deleteCategory); //http://localhost:3000/users/logiout

module.exports = router;
