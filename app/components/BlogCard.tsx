import Link from 'next/link';
import React from 'react'


type BlogCardProps = {
  blog: any;
};

export default function BlogCard({blog}:BlogCardProps) {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="overflow-hidden transition shadow-xl rounded-xl hover:shadow-lg">
        <img
          src={blog.image}
          alt={blog.title}
          className="object-cover w-full h-48"
        />

        <div className="p-4 space-y-3">
          {/* Category Badge */}
          <span
            className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-black text-white`}
          >
            {blog.category.name}
          </span>

          <h2 className="text-lg font-semibold line-clamp-2">
            {blog.title}
          </h2>

          <p className="text-sm text-gray-600 line-clamp-2">
            {blog.excerpt}
          </p>

          <div className="flex justify-between text-xs text-gray-500">
            <span>{blog.author}</span>
            <span>{blog.readTime} min read</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
