const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/homepage');
const ctrlWorks = require('../controllers/my-works');
const ctrlAbout = require('../controllers/about');
const ctrlBlog = require('../controllers/blog');
const ctrlAdmin = require('../controllers/admin');

/* GET home page. */
router.get('/', ctrlHome.getIndex);

router.get('/my-works', ctrlWorks.getWorks);

router.get('/about', ctrlAbout.getAbout);

router.get('/blog', ctrlBlog.getBlog);

router.get('/admin', ctrlAdmin.getAdmin);

module.exports = router;