const Category = require('../../Model/Authentication/CategoryModel');
const Blog = require('../../Model/Authentication/BlogModel');

module.exports.AddBlog = async (req, res) => {
  try {
    const { category, title, bloggerName, content } = req.body;

    // Validate category
    const categoryDoc = await Category.findById(category);
    if (!categoryDoc) {
      return res.status(400).json({ message: "Invalid category ID" });
    }

    // ✅ Use req.files with .fields()
    const blogImages = req.files?.img || [];
    const profileImages = req.files?.profileImg || [];

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
    };

    const data = await Blog.create(blogData);

    res.status(200).json({
      status: "Success",
      data
    });

  } catch (error) {
    console.error("Error in Add Blog:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports.GetBlog=async(req,res)=>{
    try{
        const data=await Blog.find();

        res.status(200).json({
            status:"Success",
            data
        })
    }catch(error){
        console.error("Error in Add Blog:", error);
    res.status(500).json({ message: "Internal server error" });
    }
}