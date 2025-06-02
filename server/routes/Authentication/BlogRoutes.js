const express = require('express');
const router = express.Router();
const blogController = require('../../controller/Authentication/BlogController');

const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../../config/cloudinary');

// ✅ Configure Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    let folder = 'images';
    return {
      folder: folder,
      allowed_formats: ['jpg', 'jpeg', 'png'],
      public_id: `${Date.now()}-${file.originalname.split('.')[0]}`,
    };
  },
});

const upload = multer({ storage });

const cpUpload = upload.fields([
  { name: 'img', maxCount: 8 },
  { name: 'profileImg', maxCount: 1 },
]);

router.post('/AddBlog', cpUpload, blogController.AddBlog);
router.get('/getblog', blogController.GetBlog);
router.get('/GetSingleBlog/:id', blogController.GetSingleBlog);

module.exports = router;
