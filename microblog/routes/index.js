var express = require('express');
var router = express.Router();
var indexRouter=require("../controls/indexRouter");
/* GET home page. */
router.get('/',indexRouter.index);
router.get("/test",indexRouter.test);
router.get("/:")
module.exports = router;
