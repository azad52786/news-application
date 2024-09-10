const express = require('express');
const { getCatagory } = require('../controller/getCatagory.controller');
const { getSearchData } = require('../controller/getSearchData.controller');

const router = express.Router()

router.get('/getCatagoryData' , getCatagory )
router.get('/getSearchData' , getSearchData);

module.exports = router;