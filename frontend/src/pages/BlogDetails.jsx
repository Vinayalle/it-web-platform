import { useParams } from 'react-router-dom';
import { blogData } from '../data/blogs';
import { SEO } from '../components/SEO/SEO';

export const BlogDetails = () => {
    const { slug } = useParams();
    const blog = blogData.find((s) => s.slug === slug);
    console.log(blog);
    if (!blog) {
    return <Navigate to="/404" />;
  }
  return (
    <>
    <SEO
        title={blog.seo.metaTitle}
        description={blog.seo.metaDescription}
        keywords={blog.seo.keywords}
        image={blog.image}
        url={`https://yourdomain.com/blog/${blog.slug}`}
      />
   
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
     </>
  )
}
