const router = require('express').Router();
//importing routes 
const userRoutes = require('./userRoutes.js');
const thoughtsRoutes = require('./thoughtRoutes.js');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);


module.exports = router;
