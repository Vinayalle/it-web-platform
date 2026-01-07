export const blogData = [
  {
    id: 1,
    slug: "spring-boot-microservices-architecture",
    title: "Spring Boot Microservices Architecture – A Practical Guide",
    seo: {
      metaTitle: "Spring Boot Microservices Architecture Guide | Java & Kafka",
      metaDescription:
        "Learn how to build scalable Spring Boot microservices using API Gateway, Kafka, Docker, and best practices.",
      keywords:
        "Spring Boot microservices, Java microservices, Kafka, API Gateway, Docker",
    },
    excerpt:
      "Learn how to design scalable and production-ready microservices using Spring Boot, API Gateway, Kafka, and Docker.",
    content: `
      <p>Microservices architecture helps teams build scalable and resilient systems.
      In this guide, we will explore how Spring Boot simplifies microservice development.</p>

      <h2>Why Microservices?</h2>
      <p>Microservices allow independent deployment, better scalability, and fault isolation.</p>

      <h2>Core Components</h2>
      <ul>
        <li>Spring Boot</li>
        <li>Service Discovery</li>
        <li>API Gateway</li>
        <li>Kafka</li>
      </ul>

      <h2>Best Practices</h2>
      <p>Use centralized logging, distributed tracing, and proper CI/CD pipelines.</p>
    `,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    category: "Backend",
    tags: ["Spring Boot", "Microservices", "Java"],
    author: "Vinay Alle",
    date: "Jan 02, 2026",
    readTime: 7,
  },

  {
    id: 2,
    slug: "react-performance-optimization",
    title: "React Performance Optimization Techniques You Must Know",
    seo: {
      metaTitle: "React Performance Optimization Techniques You Must Know",
      metaDescription:
        "Discover practical React optimization techniques used by large-scale production applications.",
      keywords:
        "Spring Boot microservices, Java microservices, Kafka, API Gateway, Docker",
    },
    excerpt:
      "Discover practical React optimization techniques used by large-scale production applications.",
    content: `
      <p>React performance issues usually come from unnecessary re-renders.
      Let’s understand how to fix them.</p>

      <h2>Memoization</h2>
      <p>Using React.memo, useMemo, and useCallback wisely improves performance.</p>

      <h2>Code Splitting</h2>
      <p>Lazy loading reduces initial bundle size.</p>

      <h2>Virtualization</h2>
      <p>Libraries like react-window help render large lists efficiently.</p>
    `,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    category: "Frontend",
    tags: ["React", "Performance", "JavaScript"],
    author: "Vinay Alle",
    date: "Jan 01, 2026",
    readTime: 6,
  },

  {
    id: 3,
    slug: "kubernetes-for-java-developers",
    title: "Kubernetes for Java Developers – From Zero to Production",
    seo: {
      metaTitle: "Kubernetes for Java Developers – From Zero to Production",
      metaDescription:
        "Kubernetes for Java Developers – From Zero to Production",
      keywords: "Kubernetes, Docker",
    },
    excerpt:
      "A beginner-friendly Kubernetes guide for Java and Spring Boot developers.",
    content: `
      <p>Kubernetes is essential for deploying modern Java applications.</p>

      <h2>What is Kubernetes?</h2>
      <p>It is a container orchestration platform that automates deployment and scaling.</p>

      <h2>Core Concepts</h2>
      <ul>
        <li>Pods</li>
        <li>Services</li>
        <li>Deployments</li>
      </ul>

      <h2>Production Tips</h2>
      <p>Use HPA, resource limits, and health checks.</p>
    `,
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
    category: "DevOps",
    tags: ["Kubernetes", "Docker", "DevOps"],
    author: "Vinay Alle",
    date: "Dec 30, 2025",
    readTime: 8,
  },
];
