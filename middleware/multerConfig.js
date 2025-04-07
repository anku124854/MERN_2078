 const multer = require("multer");

const storage = multer.diskStorage({
    destination : function(req, file, cb) { //posted file defined as a destination
        cb(null,'./storage')        //callback(error,sucess)
    },
    filename : function(req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
 });

 module.exports = {
    storage,
    multer,
 };