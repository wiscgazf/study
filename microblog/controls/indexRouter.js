/**
 * Created by 1 on 2017/6/23.
 */
var objRouter={};
objRouter.index= function(req, res) {
    res.render('index', { title: 'Express' });
}
objRouter.test= function(req, res) {
    res.render('test',{title:"周宏宇"});
}
objRouter.move=function (req,res) {
    res.render('move',{content:req.url.usename})
}
module.exports = objRouter;
