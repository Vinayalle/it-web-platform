import { blogs } from "../data/blogs"; 

export type Blog = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readTime: number;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string;
  };
};

// 🔹 Get all blogs
export async function getAllBlogs(): Promise<Blog[]> {
  return blogs;
}

// 🔹 Get blog by slug
export async function getBlogBySlug(slug: string): Promise<Blog | undefined> {
  return blogs.find((blog:Blog) => blog.slug === slug);
}