const multer = require('multer');
const express = require('express');
const router = express.Router();
const blogController = require('../../controller/Authentication/BlogController');
var path = require('path');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'Public/images');
  },
  filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// ✅ use .fields() with matching field names from frontend
const cpUpload = upload.fields([
  { name: 'img', maxCount: 8 },
  { name: 'profileImg', maxCount: 1 }
]);

router.post('/AddBlog', cpUpload, blogController.AddBlog);
router.get('/getblog',blogController.GetBlog)
router.get("/GetSingleBlog/:id", blogController.GetSingleBlog);

module.exports = router;
