import React from 'react'
import { getAllBlogs } from '../lib/blog.service'
import BlogCard from '../components/BlogCard';

export default async  function BlogPage() {
    const blogs= await getAllBlogs();
    console.log(blogs);
  return (
    <div className='w-full p-5'>
        <div
    className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
  >
    {blogs.map((blog) => (
      <BlogCard key={blog.id} blog={blog} />
    ))}
  </div>
    </div>

  )
}
