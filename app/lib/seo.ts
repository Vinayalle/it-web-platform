import type { Metadata } from "next"

type SEOInput = {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: "article" | "website";
  author: string;
  canonical: string;
};

export default function buildMetadata({
  title,
  description,
  keywords,
  image,
  type = "website",
  author,
  canonical
}: SEOInput):Metadata {
  return {
    title,
    description,
    keywords,


    openGraph: {
      title,
      description,
    
      type,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title
            }
          ]
        : undefined
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined
    }
  };
}
