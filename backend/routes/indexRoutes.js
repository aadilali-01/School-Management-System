const express = require('express');
const { homepage, adminSignUp, adminSignIn, adminSignOut, currentAdmin, adminForgot, adminForgotLink, adminReset, viewSignInPage } = require('../controllers/indexController');
const { isAuthenticated } = require('../middlewares/auth');
const router = express.Router();

// GET /
router.get('/',isAuthenticated, homepage )

// POST /admin/current
router.post('/current',isAuthenticated, currentAdmin )

// POST /admin/signup
router.post('/signup', adminSignUp )

// GET /admin/signin for view signin page
// router.get('/signin', viewSignInPage )

// POST /admin/signin
router.post('/signin', adminSignIn )

// GET /admin/signout
router.get('/signout',isAuthenticated, adminSignOut )

// POST /admin/forgot
router.post('/forgot', adminForgot )

// GET /admin/forgot-link/:id 
router.get('/forgot-link/:id', adminForgotLink )

// POST /admin/reset
router.post('/reset',isAuthenticated, adminReset )

module.exports = router;