const express = require('express');

const router = express.Router();

// @route          GET  api/posts/test
// @desecription   Tests posts route
// @access         Public

router.get('/test', (req,res) => res.json({msg: 'Posts Works'}));

module.exports = router;