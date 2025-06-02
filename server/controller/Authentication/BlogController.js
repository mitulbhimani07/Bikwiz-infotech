const Category = require('../../Model/Authentication/CategoryModel');
const Blog = require('../../Model/Authentication/BlogModel');
var path = require('path');

module.exports.AddBlog = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    console.log("Request files:", req.files);

    const files = req.files;

    const { category, title, bloggerName, content, publishDate } = req.body;

    // Validate required fields
    if (!title || !bloggerName || !content) {
      return res.status(400).json({ 
        message: "Title, blogger name, and content are required" 
      });
    }

    // Validate category - check if it's a valid ObjectId first
    if (!category) {
      return res.status(400).json({ message: "Category is required" });
    }

    let categoryDoc;
    try {
      categoryDoc = await Category.findById(category);
      if (!categoryDoc) {
        return res.status(400).json({ message: "Invalid category ID" });
      }
    } catch (categoryError) {
      return res.status(400).json({ message: "Invalid category ID format" });
    }

    // Handle file uploads
    const blogImages = req.files?.img || [];
    const profileImages = req.files?.profileImg || [];

    if (blogImages.length === 0) {
      return res.status(400).json({ message: "Blog image is required" });
    }

    if (profileImages.length === 0) {
      return res.status(400).json({ message: "Profile image is required" });
    }

     const imageNames = files?.img?.map(file => `http://localhost:3000/images/${file.filename}`);
    const profileImage = files?.profileImg?.[0]
      ? `http://localhost:3000/images/${files.profileImg[0].filename}`
      : null;

    // Create blog object
    const blogData = {
      img: imageNames,
      profileImg: profileImage,
      category: categoryDoc._id,
      title,
      bloggerName,
      content,
      publishDate: publishDate ? new Date(publishDate) : new Date()
    };

    console.log("Blog data to be saved:", blogData);

    const data = await Blog.create(blogData);

    res.status(200).json({
      status: "Success",
      data
    });

  } catch (error) {
    console.error("Error in Add Blog:", error);
    
    // Send more detailed error information
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        message: "Validation error", 
        details: error.message 
      });
    }
    
    if (error.name === 'CastError') {
      return res.status(400).json({ 
        message: "Invalid data format", 
        details: error.message 
      });
    }
    
    res.status(500).json({ 
      message: "Internal server error",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};



module.exports.GetBlog = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('category');
    const baseUrl = `${process.env.imgurl}`;

    const data = blogs.map(blog => ({
      ...blog._doc,
      img: blog.img.map(filename => `${baseUrl}/${filename}`),
      profileImg: blog.profileImg ? `${baseUrl}/${blog.profileImg}` : null
    }));

    res.status(200).json({
      status: "Success",
      data
    });
  } catch (error) {
    console.error("Error in GetBlog:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.GetSingleBlog = async (req, res) => {
  try {
    const SingleBlog = await Blog.findById(req.params.id).populate('category');

    if (!SingleBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const baseUrl = `${process.env.imgurl}`;

    const data = {
      ...SingleBlog._doc,
      img: SingleBlog.img.map(filename => `${baseUrl}/${filename}`),
      profileImg: SingleBlog.profileImg ? `${baseUrl}/${SingleBlog.profileImg}` : null
    };

    res.status(200).json({
      message: "Blog data fetched successfully",
      data
    });

  } catch (error) {
    console.error("Error in GetSingleBlog:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

  


  