const express = require('express');
const { getCatagory } = require('../controller/getCatagory.controller');

const router = express.Router()

router.get('/getCatagoryData' , getCatagory )


module.exports = router;