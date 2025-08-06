// This file will dynamically generate the sitemap.xml for your website.
import { posts } from '@/lib/posts';
import { pages } from '@/lib/pages';

export default function sitemap() {
  const siteUrl = 'https://www.hildashem.se'; // Replace with your actual domain
  const currentDate = new Date().toISOString();

  // Generate URLs for all blog posts
  const postUrls = posts.map((post) => {
    // Construct the correct URL based on the post type
    const postPath = post.year && post.month
      ? `/${post.year}/${post.month}/${post.slug}.html`
      : `/${post.slug}`;
      
    return {
      url: `${siteUrl}${postPath}`,
      lastModified: new Date(post.date).toISOString(), // Now safe due to standardized dates
      changeFrequency: 'monthly',
      priority: 0.8,
    };
  });

  // Generate URLs for all static pages
  const pageUrls = pages.map((page) => {
    return {
      url: `${siteUrl}/p/${page.slug}.html`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    };
  });

  // Add the homepage and other key pages manually
  const staticRoutes = [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/category/pysseltips`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  return [...staticRoutes, ...postUrls, ...pageUrls];
}
