const express = require('express');

const {getAllbooks,getSinglebook,AddNewbook,updatebook,deletebook} = require('../controllers/Books-controller')
// create express router

const router = express.Router()

// all the routes that are related to books only

router.get('/get',getAllbooks);
router.get('/get/:id',getSinglebook);
router.post('/add',AddNewbook);
router.put('/update/:id',updatebook);
router.delete('/delete/:id',deletebook)


module.exports = router;