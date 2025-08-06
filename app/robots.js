// This file will dynamically generate the robots.txt for your website.

export default function robots() {
  const siteUrl = 'https://www.hildashem.se'; // Replace with your actual domain

  return {
    rules: [
      {
        userAgent: '*', // This rule applies to all search engine bots
        allow: '/',     // Allow crawling of all pages
        // disallow: '/private/', // Example: Use this to block a specific directory
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`, // Points bots to your sitemap
  };
}
