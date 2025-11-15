export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  url: string;
  technologies: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform for Delhi Startup",
    description:
      "Custom e-commerce website with Razorpay payment integration, real-time inventory management, and advanced analytics dashboard. Increased client's sales by 300% in first 6 months.",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1460925895917-aaf4d8e02c70?w=600&h=400&fit=crop",
    url: "https://example.com",
    technologies: ["React", "Node.js", "MongoDB", "Razorpay"],
    featured: true,
  },
  {
    id: 2,
    title: "SaaS Analytics Dashboard for Indian Tech Company",
    description:
      "Interactive analytics dashboard with real-time data visualization, custom reports, and multi-user collaboration features. Built for a fast-growing Indian SaaS startup.",
    category: "SaaS",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    url: "https://example.com",
    technologies: ["React", "TypeScript", "GraphQL", "PostgreSQL"],
    featured: true,
  },
  {
    id: 3,
    title: "Corporate Website Redesign for Fortune 500 Company",
    description:
      "Modern responsive website redesign for an established Indian corporation. Improved SEO rankings, page speed, and user engagement with latest web technologies.",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    url: "https://example.com",
    technologies: ["Next.js", "TailwindCSS", "Vercel"],
    featured: false,
  },
  {
    id: 4,
    title: "Mobile-First Web App for NGO",
    description:
      "Cross-platform mobile web application with offline-first architecture for an Indian NGO. Seamless synchronization across all devices for field workers.",
    category: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=600&h=400&fit=crop",
    url: "https://example.com",
    technologies: ["React Native", "Firebase", "Redux"],
    featured: true,
  },
  {
    id: 5,
    title: "Headless CMS for Content Agency",
    description:
      "Custom headless content management system with powerful workflow automation and multi-channel publishing. Perfect for scaling content operations in India.",
    category: "CMS",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop",
    url: "https://example.com",
    technologies: ["Next.js", "Strapi", "PostgreSQL"],
    featured: false,
  },
  {
    id: 6,
    title: "Real Estate Marketplace with Virtual Tours",
    description:
      "Comprehensive real estate marketplace for Delhi and NCR region with property listings, virtual 3D tours, and integrated booking system. Supporting 500+ properties.",
    category: "Marketplace",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    url: "https://example.com",
    technologies: ["React", "Express", "PostgreSQL", "Mapbox"],
    featured: true,
  },
];

export const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
