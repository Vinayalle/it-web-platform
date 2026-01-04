import { getBlogBySlug } from '@/app/lib/blog.service';
import buildMetadata from '@/app/lib/seo';
import { notFound } from 'next/navigation';
import React from 'react'

export async function generateMetadata({ params }: any) {
  const blog = await getBlogBySlug((await params).slug);
  if (!blog) return notFound();

  return buildMetadata({
    title: blog.seo?.metaTitle || blog.title,
    description: blog.seo?.metaDescription || blog.excerpt,
    keywords:blog.seo?.keywords,
    image: blog.image,
    author:blog.author,
    type: "article",
    canonical: `/blog/${blog.slug}`
  });
};

export default async function BlogDetails({ params }: any) {
    const blog = await getBlogBySlug((await params).slug);

  if (!blog) notFound();


  return (
    <article className="max-w-3xl px-4 py-10 mx-auto">
      <h1 className="text-4xl font-bold text-gray-900">
        {blog.title}
      </h1>

      <div className="flex items-center mt-4 text-sm text-gray-500">
        <span>{blog.author}</span>
        <span className="mx-2">•</span>
        <span>{blog.date}</span>
        <span className="mx-2">•</span>
        <span>{blog.readTime} min read</span>
      </div>

      <img
        src={blog.image}
        alt={blog.title}
        className="mt-8 rounded-xl"
      />

      <div
        className="mt-8 prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      <div className="flex gap-2 mt-10">
        {blog.tags.map(tag => (
          <span
            key={tag}
            className="px-3 py-1 text-sm bg-gray-100 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </article>
  )
}
