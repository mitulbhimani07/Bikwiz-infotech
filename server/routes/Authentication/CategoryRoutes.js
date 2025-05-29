const express = require("express");
const category=require("../../controller/Authentication/CategoryController")
const router=express.Router();

router.post('/AddCategory',category.AddCategory);
router.get('/GetCategory',category.GetCategory)

module.exports=router;