// app/admin/blog/page.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogSchema } from "@/app/schema/blogSchema";
import { BLOG_CATEGORIES } from "@/app/constants/categories";
import Input from "@/app/components/ui/Input";
import Select from "@/app/components/ui/Select";
import Textarea from "@/app/components/ui/Textarea";
import { z } from "zod";
import RichTextField from "@/app/components/ui/form/RichTextField";

type BlogFormData = z.infer<typeof blogSchema>;

export default function BlogForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
  });

  function onSubmit(data: BlogFormData) {
    const payload = {
      ...data,
      tags: data.tags.split(",").map((t) => t.trim()),
    };
    console.log(payload);
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="mb-6 text-2xl font-bold">Create Blog</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 space-y-6 bg-white border shadow rounded-xl"
      >
        {/* BLOG INFO */}
        <Input
          label="Blog Title"
          register={register("title")}
          error={errors.title}
        />

        <Input
          label="Slug"
          register={register("slug")}
          error={errors.slug}
        />

        <Select
          label="Category"
          options={BLOG_CATEGORIES}
          register={register("category")}
          error={errors.category}
        />

        <Textarea
          label="Excerpt"
          rows={3}
          register={register("excerpt")}
          error={errors.excerpt}
        />

       <RichTextField
  name="content"
  label="Content"
  control={control}
  error={errors.content}
/>


        <Input
          label="Image URL"
          register={register("image")}
          error={errors.image}
        />

        <Input
          label="Tags"
          register={register("tags")}
          error={errors.tags}
        />

        <Input
          label="Read Time (minutes)"
          type="number"
          register={register("readTime", { valueAsNumber: true })}
          error={errors.readTime}
        />

        {/* ✅ SEO SECTION */}
        <div className="p-4 border rounded-lg bg-gray-50">
          <h2 className="mb-3 text-lg font-semibold">SEO Information</h2>

          <Input
            label="Meta Title"
            placeholder="SEO optimized title"
            register={register("metaTitle")}
            error={errors.metaTitle}
          />

          <Textarea
            label="Meta Description"
            rows={3}
            placeholder="SEO description for search engines"
            register={register("metaDescription")}
            error={errors.metaDescription}
          />

          <Input
            label="Keywords"
            placeholder="spring boot, microservices, java"
            register={register("keywords")}
            error={errors.keywords}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
}
