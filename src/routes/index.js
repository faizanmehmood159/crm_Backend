const express = require('express');
const auth = require('./auth.js');
const adminRoutes = require('./adminRoutes/admin.js');

const router = express.Router();

router.use('/auth', auth);
router.use('/admin', adminRoutes);

module.exports = router;
