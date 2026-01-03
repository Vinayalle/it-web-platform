
import { blogData } from '../data/blogs'
import BlogCard from '../components/blog/BlogCard'

export const Blogs = () => {
  return (
    <div className="grid gap-8 py-5 sm:grid-cols-2 lg:grid-cols-3" >
  {blogData.map(blog => (
    <BlogCard key={blog.id} blog={blog} />
  ))}
</div>
  )
}
