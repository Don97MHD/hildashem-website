import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPostsByCategory } from '@/lib/posts';

const BlogPostCard = ({ post }) => {
    const postUrl = post.year && post.month 
        ? `/${post.year}/${post.month}/${post.slug}.html`
        : `/${post.slug}`;

    return (
      <div className="group overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white">
        <Link href={postUrl} className="block">
          <div className="overflow-hidden relative h-48">
            <Image src={post.imageUrl} alt={`Bild för inlägget ${post.title}`} fill style={{objectFit: 'cover'}} className="group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-500 mb-1">{post.category} - {post.date}</p>
            <h3 className="text-xl font-serif font-medium text-gray-800 group-hover:text-rose-800 transition-colors duration-300">{post.title}</h3>
          </div>
        </Link>
      </div>
    );
};

export default function CategoryPage({ params }) {
  const { categoryName } = params;
  const posts = getPostsByCategory(categoryName);
  const decodedCategoryName = decodeURIComponent(categoryName);
  const siteUrl = 'https://www.hildashem.se';

  // ---  الكود الجديد الذي تم إضافته ---
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': `Inlägg i kategorin: ${decodedCategoryName}`,
    'description': `Utforska alla inlägg och artiklar i kategorin "${decodedCategoryName}" på Hildashem.`,
    'url': `${siteUrl}/category/${categoryName}`,
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': posts.map((post, index) => {
        const postPath = post.year && post.month
          ? `/${post.year}/${post.month}/${post.slug}.html`
          : `/${post.slug}`;
        return {
          '@type': 'ListItem',
          'position': index + 1,
          'url': `${siteUrl}${postPath}`
        };
      })
    }
  };
  return (
    <div className="bg-stone-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <p className="text-gray-500 font-sans">Visar inlägg i kategorin</p>
          <h1 className="text-4xl font-serif font-bold text-gray-800 capitalize">
            {decodedCategoryName}
          </h1>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            Hittade inga inlägg i denna kategori.
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}
