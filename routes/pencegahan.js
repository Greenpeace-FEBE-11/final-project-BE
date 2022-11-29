const express = require('express');
const router = express.Router();

const {createPrevention, updatePrevention, deletePrevention, getSinglePrevention, getAllPreventions,deleteallPreventions} = require('../controllers/pencegahanController');

router.route('/').post(createPrevention);
router.route('/:id').put(updatePrevention);
router.route('/:id').delete(deletePrevention);
router.route('/:id').get(getSinglePrevention);
router.route('/').get(getAllPreventions);
//router.route('/').delete(deleteallPreventions);
module.exports = router