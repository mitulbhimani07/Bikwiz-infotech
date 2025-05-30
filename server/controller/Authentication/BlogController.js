const Category = require('../../Model/Authentication/CategoryModel');
const Blog = require('../../Model/Authentication/BlogModel');

module.exports.AddBlog = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    console.log("Request files:", req.files);

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

    const imageNames = blogImages.map(file => file.originalname);
    const profileImage = profileImages[0]?.originalname || null;

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



module.exports.GetBlog=async(req,res)=>{
    try{
        const data=await Blog.find().populate('category');

        res.status(200).json({
            status:"Success",
            data
        })
    }catch(error){
        console.error("Error in Add Blog:", error);
    res.status(500).json({ message: "Internal server error" });
    }
}