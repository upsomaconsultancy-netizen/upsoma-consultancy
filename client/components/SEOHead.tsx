import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export default function SEOHead({
  title = "Web Development & Design Agency in Delhi | TRM Consultancy Services",
  description = "Award-winning web development agency in Delhi offering custom website design, e-commerce solutions, WordPress development, and mobile app services. 50+ projects delivered.",
  keywords = "web development Delhi, website design company India, custom web development, e-commerce website development, responsive web design",
  ogImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop",
  canonicalUrl = "https://trmconsultancy.com/",
}: SEOHeadProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    updateMetaTag("name", "description", description);
    updateMetaTag("name", "keywords", keywords);
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:image", ogImage);
    updateMetaTag("property", "twitter:title", title);
    updateMetaTag("property", "twitter:description", description);
    updateMetaTag("property", "twitter:image", ogImage);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null;
}

function updateMetaTag(
  type: "name" | "property",
  name: string,
  content: string
) {
  let tag = document.querySelector(
    `meta[${type}="${name}"]`
  ) as HTMLMetaElement;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(type, name);
    document.head.appendChild(tag);
  }
  tag.content = content;
}
