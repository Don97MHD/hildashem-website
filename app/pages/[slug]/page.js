import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { pages, getPageBySlug } from '@/lib/pages';

export async function generateStaticParams() {
  return pages.map((page) => ({ slug: page.slug }));
}

export default function StaticPage({ params }) {
  const { slug } = params;
  const page = getPageBySlug(slug);
const siteUrl = 'https://www.hildashem.se';

  // ---  الكود الجديد الذي تم إضافته ---
  let structuredData = null;
  if (page && page.slug === 'om-mig') {
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': 'Hilda Shem',
      'url': `${siteUrl}/p/om-mig.html`,
      'image': `${siteUrl}${page.imageUrl}`,
      'jobTitle': 'Skapare & Bloggare',
      'description': 'Grundare av Hildashem, med en passion för kreativitet, trädgård och hållbar livsstil.',
      'sameAs': [ // أضف روابط صفحاتك الاجتماعية هنا
        'https://www.instagram.com/hildashem',
        'https://www.pinterest.com/hildashem'
      ]
    };
  }
  if (!page) {
    return (
      <div className="bg-white">
         {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
        <Header />
        <main className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-800">404 - Sidan hittades inte</h1>
          <p className="text-gray-600 mt-4">Tyvärr kunde vi inte hitta sidan du letar efter.</p>
          <Link href="/" className="mt-8 inline-block bg-rose-800 text-white font-bold py-3 px-6 rounded-full hover:bg-rose-900">
            Tillbaka till startsidan
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="relative h-80 bg-stone-200 flex items-center justify-center text-center text-white">
            <Image src={page.imageUrl} alt={`Bakgrundsbild för ${page.title}`} fill style={{objectFit: 'cover'}} priority />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 p-6">
                <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">{page.title}</h1>
            </div>
        </div>
        <div className="container mx-auto px-6 py-12 md:py-16">
            <article className="max-w-4xl mx-auto">
                <div className="prose prose-lg lg:prose-xl max-w-none mx-auto text-gray-800 font-serif" dangerouslySetInnerHTML={{ __html: page.content }} />
            </article>

            <div className="max-w-4xl mx-auto mt-16 p-8 bg-stone-100 rounded-lg text-center">
                <h2 className="text-2xl font-serif font-semibold text-gray-800">Utforska mer från Hildashem</h2>
                <p className="mt-2 text-gray-600">
                    Tack för att du läste! Nu när du är här, varför inte utforska några av mina populära kategorier?
                </p>
                <div className="mt-6 flex justify-center gap-4 flex-wrap">
                    <Link href="/category/pysseltips" className="bg-rose-800 text-white font-bold py-2 px-5 rounded-full hover:bg-rose-900 transition-colors">
                        Pysseltips
                    </Link>
                    <Link href="/category/trädgård" className="bg-green-800 text-white font-bold py-2 px-5 rounded-full hover:bg-green-900 transition-colors">
                        Trädgård
                    </Link>
                    <Link href="/category/recept" className="bg-amber-800 text-white font-bold py-2 px-5 rounded-full hover:bg-amber-900 transition-colors">
                        Recept
                    </Link>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}