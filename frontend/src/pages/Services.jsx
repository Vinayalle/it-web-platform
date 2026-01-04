import { Link } from "react-router-dom";
import { services } from "../data/services";

import React from 'react'

export const Services = () => {
  return (
   <div>
      <h1>Our Services</h1>

      {services.map((service) => (
        <div key={service.slug}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>

          <Link to={`/services/${service.slug}`}>
            View Details →
          </Link>
        </div>
      ))}
    </div>
  )
}

