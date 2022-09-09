const express = require ('express');
const router = express.Router();
const {index,contact,about,music,admin,login,noEntry} = require('../controllers/mainController')


const accessAdmin = require ('../middlewares/accessAdmin')

router
    .get('/',index )
    .get('/contact', contact )
    .get('/about', about)
    .get('/music', music )
    .get('/admin',accessAdmin, admin )
    .get('/login', login )
    .get('/noEntry', noEntry )


module.exports = router