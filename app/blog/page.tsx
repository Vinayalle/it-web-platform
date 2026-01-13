"use client";
import React, { useEffect, useState } from 'react'
import { getAllBlogs } from '../lib/blog.service'
import BlogCard from '../components/BlogCard';

export default   function BlogPage() {
     const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const res = await fetch("/api/blogs");
      const data = await res.json(); // ✅ IMPORTANT
      setBlogs(data.blogs);
    }

    fetchBlogs();
  }, []);
  console.log(blogs);

  return (
    <div className='w-full p-5'>
        <div
    className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
  >
    {blogs.map((blog) => (
      <BlogCard key={blog} blog={blog} />
    ))}
  </div>
    </div>

  )
}
