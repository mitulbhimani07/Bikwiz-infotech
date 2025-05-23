import React from 'react'
import Header from '../header-footer/Header'
import banner from '../assets/images/Blog.png'
import blog1 from '../assets/images/image-1.jpg'
import blog2 from '../assets/images/image-2.png'
import blog3 from '../assets/images/image-3.png'
import blog4 from '../assets/images/image-4.png'
import blog5 from '../assets/images/image-5.png'
import blog6 from '../assets/images/image-6.png'
import blog7 from '../assets/images/image-7.png'
import blog8 from '../assets/images/image-8.png'
import blog9 from '../assets/images/image-9.png'
import Footer from '../header-footer/Footer'

const blogPosts = [
  {
    id: 1,
    category: 'Technology',
    title: 'The Impact of Technology on the Workplace: How Technology is Changing',
    author: 'Tracey Wilson',
    date: 'August 20, 2022',
    image: blog1,
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 2,
    category: 'Company',
    title: 'The Impact of Technology on the Workplace: How Technology is Changing',
    author: 'Jason Francisco',
    date: 'August 20, 2022',
    image: blog2,
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    id: 3,
    category: 'Finance',
    title: 'The Impact of Technology on the Workplace: How Technology is Changing',
    author: 'Elizabeth Slavin',
    date: 'August 20, 2022',
    image: blog3,
    avatar: 'https://randomuser.me/api/portraits/women/69.jpg',
  },
  {
    id: 4,
    category: 'Finance',
    title: 'The Impact of Technology on the Workplace: How Technology is Changing',
    author: 'Elizabeth Slavin',
    date: 'August 20, 2022',
    image: blog4,
    avatar: 'https://randomuser.me/api/portraits/women/69.jpg',
  },
  {
    id: 5,
    category: 'Finance',
    title: 'The Impact of Technology on the Workplace: How Technology is Changing',
    author: 'Elizabeth Slavin',
    date: 'August 20, 2022',
    image: blog5,
    avatar: 'https://randomuser.me/api/portraits/women/69.jpg',
  },
  {
    id: 6,
    category: 'Finance',
    title: 'The Impact of Technology on the Workplace: How Technology is Changing',
    author: 'Elizabeth Slavin',
    date: 'August 20, 2022',
    image: blog6,
    avatar: 'https://randomuser.me/api/portraits/women/69.jpg',
  },
  {
    id: 7,
    category: 'Finance',
    title: 'The Impact of Technology on the Workplace: How Technology is Changing',
    author: 'Elizabeth Slavin',
    date: 'August 20, 2022',
    image: blog7,
    avatar: 'https://randomuser.me/api/portraits/women/69.jpg',
  },
  {
    id: 8,
    category: 'Finance',
    title: 'The Impact of Technology on the Workplace: How Technology is Changing',
    author: 'Elizabeth Slavin',
    date: 'August 20, 2022',
    image: blog8,
    avatar: 'https://randomuser.me/api/portraits/women/69.jpg',
  },
  {
    id: 9,
    category: 'Finance',
    title: 'The Impact of Technology on the Workplace: How Technology is Changing',
    author: 'Elizabeth Slavin',
    date: 'August 20, 2022',
    image: blog9,
    avatar: 'https://randomuser.me/api/portraits/women/69.jpg',
  },
  // Add more posts...
]

export default function Blog() {
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
            Get in Touch
          </h1>
          <p className="text-white text-base sm:text-lg mt-6 leading-relaxed">
            Looking to hire top talent or land quality projects? Whether you're expanding your team or building your freelance career, get in touch, we connect passionate freelancers and ambitious clients for long-term, successful collaborations.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="w-[80%] my-20 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white border p-3 border-orange-200 rounded-xl hover:shadow-md transition-shadow overflow-hidden"
          >
            <img
              className="w-full h-70 object-cover rounded-xl"
              src={post.image}
              alt="Blog post"
            />
            <div className="p-5">
              <span className="inline-block px-3 py-1 text-sm text-orange-500 bg-orange-50 rounded-full mb-3">
                {post.category}
              </span>
              <h2 className="mb-2 text-lg font-semibold text-gray-900">
                {post.title}
              </h2>
              <div className="flex items-center mt-4 space-x-2">
                <img className="w-8 h-8 rounded-full" src={post.avatar} alt="Author" />
                <span className="text-sm text-gray-700">{post.author}</span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Load More Button */}
      <div className="w-full flex justify-center mt-8 mb-16">
        <button className="px-6 py-2 text-orange-500 border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition">
          Load More
        </button>
      </div>
        {/* Footer */}
        <Footer />
    </div>
  )
}
