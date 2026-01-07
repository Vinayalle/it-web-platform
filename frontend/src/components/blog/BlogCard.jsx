
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
   
  return (
    <article className="overflow-hidden transition bg-white shadow-sm rounded-2xl hover:shadow-lg">
      <img
        src={blog.image}
        alt={blog.title}
        className="object-cover w-full h-48"
      />

      <div className="p-5">
        <span className="text-sm font-medium text-indigo-600">
          {blog.category}
        </span>

        <h2 className="mt-2 text-xl font-semibold text-gray-900 line-clamp-2">
          {blog.title}
        </h2>

        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          {blog.excerpt}
        </p>

        <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
          <span>{blog.author}</span>
          <span>{blog.date} · {blog.readTime} min</span>
        </div>
       <Link to={`/blogs/${blog.slug}`}>Read More</Link>
      </div>
    </article>
  );
};

export default BlogCard;

