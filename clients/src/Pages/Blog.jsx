import React, { useEffect, useState } from 'react'
import Header from '../header-footer/Header'
import banner from '../assets/images/Blog.png'
import Footer from '../header-footer/Footer'
import toast from 'react-hot-toast'
import { GetAllBlogs } from '../API/Api'
import { Link } from 'react-router-dom'






export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() =>{
   const fetchBlogPosts=async () => {
    try {
        const response = await GetAllBlogs()
        console.log("blogsssssssssssssss",response.data);
        
        setBlogPosts(response.data)
    } catch (error) {
        console.error("Error in GetAllBlogs API:", error);
        throw error;
    }
   }
   fetchBlogPosts();

  },[] )


  return (
    <div>
      <Header />

      {/* Banner */}
      <section
        className="banner-section relative w-[95%] mx-auto h-[450px] flex items-center justify-center bg-cover bg-center my-5"
        style={{
          backgroundImage: `url(${banner})`,
          borderRadius: '20px',
          overflow: 'hidden',
        }}
      >
        <div className="relative z-10 text-center px-4 md:px-10 max-w-7xl">
          <h1 className="text-white text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Blogs
          </h1>
          <p className="text-white text-base sm:text-lg mt-6 leading-relaxed max-w-[800px] mx-auto">
            Want to grow as a freelancer or find the right talent for your team? The Bikwiz blog brings you real stories, useful tips, and smart insights to help you work better, earn more, and build lasting freelance success.          </p>
        </div>
      </section>

      {/* Blog Grid */}
     
      <section className="w-[80%] my-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link to={`/singleBlog/${post._id}`} className="no-underline text-black" key={post._id}>
          <div
            key={post._id}
            className="bg-white border p-3 border-orange-200 rounded-xl hover:shadow-md transition-shadow overflow-hidden"
          >
            <img
              className="w-full h-70 object-cover rounded-xl"
              src={post.img}
              alt="Blog post"
            />
            <div className="p-5">
              <span className="inline-block px-3 py-1 text-sm text-orange-500 bg-orange-50 rounded-full mb-3">
                {post.category?.categoryname}
              </span>
              <h2 className="mb-2 text-lg font-semibold text-gray-900">
                {post.title.slice(0, 100)}...
              </h2>
              <div className="flex items-center mt-4 space-x-2">
                <img className="w-8 h-8 rounded-full" src={post.profileImg} alt="Author" />
                <span className="text-l text-gray-700">{post.bloggerName}</span>
                <span className="text-l ps-10 text-gray-500">{post.publishDate.slice(0, 10)}</span>
              </div>
            </div>
          </div>
           </Link>
        ))}
      </section>
      {/* Footer */}
      <Footer />
    </div>
  )
}
