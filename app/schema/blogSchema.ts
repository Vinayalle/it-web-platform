// lib/blogSchema.ts
import { z } from "zod";

export const blogSchema = z.object({
  title: z.string().min(5, "Title is required"),
  slug: z.string().min(5, "Slug is required"),
  category: z.enum(["frontend", "backend", "system-design", "dsa"]),
  excerpt: z.string().min(20, "Excerpt must be at least 20 characters"),
  content: z.string().min(50, "Content must be at least 50 characters"),
  image: z.string().url("Invalid image URL"),
  tags: z.string().min(2, "Enter tags separated by commas"),
  readTime: z.number().min(1, "Read time required"),

   // ✅ SEO
  metaTitle: z.string().min(10, "Meta title required"),
  metaDescription: z.string().min(20, "Meta description required"),
  keywords: z.string().min(3, "Keywords required"),
});
