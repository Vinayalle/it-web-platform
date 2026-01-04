import React from 'react'
import { useParams, Navigate } from "react-router-dom";
import { services } from "../data/services";
import { SEO } from '../components/SEO/SEO';

export const ServiceDetails = () => {
    const { slug } = useParams();

  const service = services.find((s) => s.slug === slug);
  if (!service) {
    return <Navigate to="/404" />;
  }
  return (
    <>
    <SEO
            title={service.seo.metaTitle}
            description={service.seo.metaDescription}
            keywords={service.seo.keywords}
            image={service.image}
            url={`https://yourdomain.com/blog/${service.slug}`}
          />
   
    <div>
      <h1>{service.title}</h1>
      <p>{service.content}</p>
    </div>
     </>
  )
}
