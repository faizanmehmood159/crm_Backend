const express = require('express');
const { signIn } = require('../controllers/auth/signIn');

const router = express.Router();

router.post("/signIn", signIn)


module.exports = router;