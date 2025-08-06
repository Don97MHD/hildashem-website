import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { posts, getPostBySlug } from '@/lib/posts';

// --- مكونات فرعية يتم استخدامها داخل الصفحة ---

// 1. شريط التنقل (Breadcrumbs)
const Breadcrumbs = ({ post }) => (
    <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-4 font-sans">
        <Link href="/" className="hover:underline">Hem</Link>
        {' / '}
        <Link href={`/category/${post.category.toLowerCase()}`} className="hover:underline">
            {post.category}
        </Link>
    </nav>
);

// 2. صندوق معلومات الكاتب
const AuthorBio = ({ post }) => (
    <div className="mt-12 p-6 bg-stone-100 rounded-lg flex items-center gap-6">
        <Image 
            src="/page-om-mig.jpg" // استخدم صورة شخصية جيدة هنا
            alt={`Porträtt av ${post.author}`}
            width={80}
            height={80}
            className="rounded-full"
        />
        <div>
            <p className="text-sm text-gray-600 font-semibold">Skrivet av</p>
            <h3 className="text-xl font-serif font-bold text-gray-900">{post.author}</h3>
            <p className="text-gray-600 mt-1">Grundare av Hildashem, med en passion för kreativitet, trädgård och hållbar livsstil.</p>
            <Link href="/p/om-mig.html" className="text-sm text-rose-800 font-bold hover:underline mt-2 inline-block">
                Läs mer om mig →
            </Link>
        </div>
    </div>
);

// 3. قسم المقالات ذات الصلة
const RelatedPosts = ({ post }) => {
    const related = posts
        .filter(p => p.category === post.category && p.slug !== post.slug)
        .slice(0, 3);

    if (related.length === 0) return null;

    return (
        <div className="bg-stone-50 -mx-6 px-6 py-16">
            <div className="container mx-auto">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center text-gray-800 mb-8">
                    Du kanske också gillar...
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {related.map(p => {
                        const postUrl = p.year ? `/${p.year}/${p.month}/${p.slug}.html` : `/${p.slug}`;
                        return (
                            <div key={p.slug} className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow">
                                <Link href={postUrl} className="block">
                                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                                        <Image src={p.imageUrl} alt={p.title} fill style={{objectFit:'cover'}} className="group-hover:scale-105 transition-transform"/>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-serif text-lg font-semibold text-gray-800 group-hover:text-rose-800">{p.title}</h3>
                                        <p className="text-sm text-gray-500 mt-1">{p.category}</p>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// --- الدوال الأساسية للصفحة (generateStaticParams, generateMetadata) ---
// (لا تغيير هنا)

export async function generateStaticParams() {
  const simplePosts = posts.filter(p => !p.year && !p.month);
  return simplePosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return { title: 'Inlägg hittades inte' };
  }

  const description = post.content.substring(0, 155).replace(/<[^>]*>/g, '').trim() + '...';
  const siteUrl = 'https://www.hildashem.se';

    // ... بقية كود الميتا ...
    return {
        title: `${post.title} | Hildashem`,
        description: description,
        openGraph: {
            title: `${post.title} | Hildashem`,
            description: description,
            url: `${siteUrl}/${post.slug}`,
            siteName: 'Hildashem',
            images: [ { url: `${siteUrl}${post.imageUrl}`, width: 1200, height: 630 } ],
            locale: 'sv_SE',
            type: 'article',
            publishedTime: new Date(post.date).toISOString(),
            author: post.author,
        },
        twitter: {
            card: 'summary_large_image',
            title: `${post.title} | Hildashem`,
            description: description,
            images: [`${siteUrl}${post.imageUrl}`],
        },
    };
}

// --- المكون الرئيسي للصفحة ---
export default function SimplePostPage({ params }) {
    const post = getPostBySlug(params.slug);
    const siteUrl = 'https://www.hildashem.se';

    if (!post) {
        return (
            <div>
                <Header />
                <main className="container mx-auto px-6 py-12 text-center">
                    <h1 className="text-4xl">404 - Inlägg hittades inte</h1>
                </main>
                <Footer />
            </div>
        );
    }
  
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'mainEntityOfPage': { '@type': 'WebPage', '@id': `${siteUrl}/${post.slug}` },
      'headline': post.title,
      'image': `${siteUrl}${post.imageUrl}`,
      'datePublished': new Date(post.date).toISOString(),
      'dateModified': new Date(post.date).toISOString(),
      'author': { '@type': 'Person', 'name': post.author },
      'publisher': { '@type': 'Organization', 'name': 'Hildashem', 'logo': { '@type': 'ImageObject', 'url': `${siteUrl}/logo.png` } },
      'description': post.content.substring(0, 155).replace(/<[^>]*>/g, '').trim() + '...',
    };
  
    return (
      <div className="bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main>
          <div className="container mx-auto px-6 py-8 md:py-12">
            <article className="max-w-4xl mx-auto">
              <Breadcrumbs post={post} />
              <header className="mb-8">
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">{post.title}</h1>
                  <p className="text-md text-gray-500 mt-4">
                      Publicerad den {new Date(post.date).toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
              </header>

              <div className="mb-8 rounded-lg overflow-hidden relative h-[300px] md:h-[500px] shadow-lg">
                  <Image src={post.imageUrl} alt={`Huvudbild för ${post.title}`} fill style={{objectFit: 'cover'}} priority />
              </div>

              <div 
                  className="prose prose-lg lg:prose-xl max-w-none mx-auto text-gray-800 font-serif"
                  dangerouslySetInnerHTML={{ __html: post.content }}
              />
            
              <AuthorBio post={post} />
            </article>
          </div>
          
          <RelatedPosts post={post} />

        </main>
        <Footer />
      </div>
    );
}