import { getBlogBySlug } from '@/app/lib/blog.service';
import buildMetadata from '@/app/lib/seo';
import { notFound } from 'next/navigation';
import React from 'react'


type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};
async function getBlog(slug: string) {
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/v1/blogs/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params; // ✅ MUST await
  const blog = await getBlog(slug);

  if (!blog) return notFound();

  return buildMetadata({
    title: blog.seo?.metaTitle || blog.title,
    description: blog.seo?.metaDescription || blog.excerpt,
    keywords: blog.seo?.keywords,
    image: blog.image,
    author: blog.author,
    type: "article",
    canonical: `/blog/${blog.slug}`,
  });
}



/* ---------- PAGE ---------- */
export default async function BlogDetails({ params }: PageProps) {
  const { slug } = await params; // ✅ MUST await
  const blog = await getBlog(slug);

  if (!blog) notFound();

  return (
    <article className="max-w-3xl px-4 py-10 mx-auto">
      <h1 className="text-4xl font-bold text-gray-900">
        {blog.title}
      </h1>

      <div className="flex items-center mt-4 text-sm text-gray-500">
        <span>{blog.author}</span>
        <span className="mx-2">•</span>
        <span>{blog.publishedDate}</span>
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

      {blog.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-10">
          {blog.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-gray-100 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}