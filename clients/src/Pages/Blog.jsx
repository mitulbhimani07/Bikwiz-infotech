import React, { useEffect, useState } from 'react';
import Header from '../header-footer/Header';
import banner from '../assets/images/Blog.png';
import Footer from '../header-footer/Footer';
import toast from 'react-hot-toast';
import { GetAllBlogs } from '../API/Api';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await GetAllBlogs();
        setAllBlogs(response.data);
        setBlogPosts(response.data.slice(0, 6));
      } catch (error) {
        console.error('Error in GetAllBlogs API:', error);
        toast.error('Failed to load blogs');
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/category/GetCategory');
        const categoryList = Array.isArray(response.data)
          ? response.data
          : response.data.categories || response.data.data || [];
        setCategories(categoryList);
      } catch (error) {
        console.error('Error fetching categories:', error);
        toast.error('Failed to load categories');
      }
    };

    fetchBlogPosts();
    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setVisibleCount(6); // Reset visible count on category change

    if (categoryName === 'All') {
      setBlogPosts(allBlogs.slice(0, 6));
    } else {
      const filtered = allBlogs.filter(
        (post) => post.category?.categoryname === categoryName
      );
      setBlogPosts(filtered.slice(0, 6));
    }
  };

  const handleLoadMore = () => {
    const allVisiblePosts =
      selectedCategory === 'All'
        ? allBlogs
        : allBlogs.filter((post) => post.category?.categoryname === selectedCategory);

    const newVisibleCount = visibleCount + 6;
    const updatedPosts = allVisiblePosts.slice(0, newVisibleCount);
    setBlogPosts(updatedPosts);
    setVisibleCount(newVisibleCount);
  };

  const allVisiblePosts =
    selectedCategory === 'All'
      ? allBlogs
      : allBlogs.filter((post) => post.category?.categoryname === selectedCategory);

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
            Want to grow as a freelancer or find the right talent for your team? The Bikwiz blog brings you real stories, useful tips, and smart insights to help you work better, earn more, and build lasting freelance success.
          </p>
        </div>
      </section>

      {/* Category Filter Buttons */}
      <div className="w-[80%] mx-auto flex flex-wrap gap-3 justify-center mb-10">
        <button
          onClick={() => handleCategoryClick('All')}
          className={`px-4 py-2 rounded-full text-sm border transition-all duration-200 ${
            selectedCategory === 'All'
              ? 'bg-orange-500 text-white border-orange-500 hover:bg-orange-600 hover:shadow-lg transform hover:scale-105'
              : 'bg-white text-gray-700 border-orange-500 hover:bg-orange-100 hover:border-orange-300'
          }`}
        >
          All
        </button>
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map((cat) => (
            <button
              key={cat._id}
              onClick={() => handleCategoryClick(cat.categoryname)}
              className={`px-4 py-2 rounded-full text-sm border transition-all duration-200 ${
                selectedCategory === cat.categoryname
                  ? 'bg-orange-500 text-white border-orange-500 hover:bg-orange-600 hover:shadow-lg transform hover:scale-105'
                  : 'bg-white text-gray-700 border-orange-500 hover:bg-orange-100 hover:border-orange-300'
              }`}
            >
              {cat.categoryname}
            </button>
          ))
        ) : (
          <p className="text-sm text-gray-400">No categories available.</p>
        )}
      </div>

      {/* Blog Grid */}
      <section className="w-[80%] my-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.length > 0 ? (
          blogPosts.map((post) => (
            <Link to={`/singleBlog/${post._id}`} className="no-underline text-black" key={post._id}>
              <div className="bg-white border p-3 border-orange-200 rounded-xl hover:shadow-md transition-shadow overflow-hidden">
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
                    {post.title.length > 100 ? post.title.slice(0, 100) + '...' : post.title}
                  </h2>
                  <div className="flex items-center mt-4 space-x-2">
                    <img className="w-8 h-8 rounded-full" src={post.profileImg} alt="Author" />
                    <span className="text-l text-gray-700">{post.bloggerName}</span>
                    <span className="text-l ps-10 text-gray-500">{post.publishDate?.slice(0, 10)}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">No blog posts found.</p>
        )}
      </section>

      {/* Load More Button */}
      {visibleCount < allVisiblePosts.length && (
        <div className="text-center mb-12">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-300"
          >
            Load More
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}
