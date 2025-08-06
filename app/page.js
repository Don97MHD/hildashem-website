import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// استيراد المكونات المشتركة
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// استيراد البيانات والدوال اللازمة
import { posts, getPostsByCategory } from '@/lib/posts';


// --- أيقونات SVG للاستخدام في قسم الفلسفة ---
const LeafIcon = () => (
  <svg className="h-10 w-10 text-rose-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c-5.13 0-9.75-3.015-11.25-7.5 1.5-4.485 6.12-7.5 11.25-7.5s9.75 3.015 11.25 7.5c-1.5 4.485-6.12 7.5-11.25 7.5zM12 6.75a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5z" />
  </svg>
);
const HeartIcon = () => (
    <svg className="h-10 w-10 text-rose-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
);
const SparklesIcon = () => (
    <svg className="h-10 w-10 text-rose-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.5 13.5h.008v.008h-.008v-.008z" />
    </svg>
);


// --- المكونات القابلة لإعادة الاستخدام (نفس السابق) ---
const HeroSection = () => (
    <div className="relative h-96 md:h-[500px] bg-stone-200 flex items-center justify-center text-center text-white mb-16">
        <Image src="/hero-background.jpg" alt="Välkomstbakgrund för Hildashem med pyssel och naturmaterial" fill style={{objectFit: 'cover'}} priority />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 p-6">
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-tight mb-4 text-white">Hildashem: Idéer för hem, trädgård & pyssel</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto font-sans">Här delar jag med mig av inspiration som förgyller livet och vardagen.</p>
        </div>
    </div>
);

const BlogPostCard = ({ post }) => {
    const postUrl = post.year && post.month ? `/${post.year}/${post.month}/${post.slug}.html` : `/${post.slug}`;
    return (
      <div className="group overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white">
        <Link href={postUrl} className="block">
          <div className="overflow-hidden relative h-48">
            <Image src={post.imageUrl} alt={`Bild för inlägget ${post.title}`} fill style={{objectFit: 'cover'}} className="group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-500 mb-1">{post.category} - {new Date(post.date).toLocaleDateString('sv-SE')}</p>
            <h3 className="text-xl font-serif font-medium text-gray-800 group-hover:text-rose-800 transition-colors duration-300">{post.title}</h3>
          </div>
        </Link>
      </div>
    );
};

const CategorySpotlight = ({ title, description, category, postsToShow = 3 }) => {
    const categoryPosts = getPostsByCategory(category).slice(0, postsToShow);
    return (
        <section className="py-12 md:py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-10 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800">{title}</h2>
                    {/* تم توسيع هذا النص */}
                    <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                        {description}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryPosts.map(post => (<BlogPostCard key={post.slug} post={post} />))}
                </div>
                <div className="text-center mt-12">
                    <Link href={`/category/${category.toLowerCase()}`} className="bg-rose-800 text-white font-bold py-3 px-8 rounded-full hover:bg-rose-900 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        Se alla inlägg om {category}
                    </Link>
                </div>
            </div>
        </section>
    );
};

const AboutHildaSection = () => (
    <section className="container mx-auto px-6 py-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3"><Image src="/page-om-mig.jpg" alt="Hilda, skaparen av Hildashem" width={400} height={400} style={{objectFit: 'cover'}} className="h-full w-full"/></div>
            <div className="w-full md:w-2/3 p-8 md:p-12 text-center md:text-left">
                <h2 className="text-3xl font-serif text-gray-800">Hej, jag är Hilda!</h2>
                <p className="mt-4 text-gray-600 leading-relaxed">Välkommen till min kreativa fristad! Hildashem är platsen där jag delar med mig av min passion för att skapa ett personligt hem, en prunkande trädgård och ett liv fyllt av meningsfull kreativitet. Min filosofi bygger på återbruk, loppisfynd och naturens egna material.</p>
                <Link href="/p/om-mig.html" className="mt-6 inline-block text-rose-800 font-bold hover:underline">Läs mer om min resa →</Link>
            </div>
        </div>
    </section>
);


// --- قسم جديد: فلسفة الموقع (غني بالنصوص للسيو) ---
const OurPhilosophySection = () => (
    <section className="bg-stone-100 py-16 md:py-24">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800">Min Filosofi</h2>
                <p className="mt-4 text-lg text-gray-600">
                    Allt jag skapar och skriver om på Hildashem grundar sig i tre enkla, men kraftfulla, principer. De är min kompass i allt från trädgårdsarbete till inredningsval.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                {/* النقطة الأولى */}
                <div className="flex flex-col items-center">
                    <div className="bg-white p-4 rounded-full shadow-md mb-4"><HeartIcon /></div>
                    <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">Personligt & Äkta</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Jag tror inte på att följa trender slaviskt. Ett hem ska berätta en historia om de som bor där. Därför älskar jag loppisfynd, ärvda möbler och handgjorda detaljer som ger själ och karaktär.
                    </p>
                </div>
                {/* النقطة الثانية */}
                <div className="flex flex-col items-center">
                    <div className="bg-white p-4 rounded-full shadow-md mb-4"><LeafIcon /></div>
                    <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">Hållbart & Naturnära</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Naturen är min största inspirationskälla. Jag strävar efter att använda hållbara och naturliga material, att återbruka istället för att köpa nytt, och att skapa en trädgård som är i harmoni med miljön.
                    </p>
                </div>
                {/* النقطة الثالثة */}
                <div className="flex flex-col items-center">
                    <div className="bg-white p-4 rounded-full shadow-md mb-4"><SparklesIcon /></div>
                    <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">Glädjen i att Skapa</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Den största glädjen ligger i själva skapandeprocessen. Oavsett om det är att baka, plantera ett frö eller måla en möbel, så är den kreativa akten i sig en källa till lugn och tillfredsställelse.
                    </p>
                </div>
            </div>
        </div>
    </section>
);


// --- الصفحة الرئيسية المجمعة والجديدة ---
export default function HomePage() {
  const latestPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);
 const siteUrl = 'https://www.hildashem.se';
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'url': siteUrl,
    'name': 'Hildashem',
    'description': 'En plats för kreativitet och skönhet i vardagen, med fokus på hem, trädgård och pyssel.',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    'publisher': {
        '@type': 'Person', // أو Organization إذا كان يمثل شركة
        'name': 'Hilda Shem'
    }
  };
  return (
    <div className="bg-stone-50 font-sans text-gray-700">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <HeroSection />
        
        {/* تم توسيع هذا القسم بشكل كبير */}
        <div className="container mx-auto px-6 py-16 text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800">En plats för kreativitet & skönhet i vardagen</h2>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                    Välkommen till min värld! Jag tror på magin i det handgjorda och på att finna glädje i de små, vardagliga ögonblicken. Det kan vara doften av en blommande syrenbuske, känslan av varm lera mellan fingrarna, eller smaken av ett nybakat bröd. Här på Hildashem samlar jag mina allra bästa projekt, favoritrecept och personliga tankar för att inspirera dig. Mitt mål är att visa hur du, med enkla och hållbara medel, kan skapa ett vackrare och mer meningsfullt liv. Låt oss utforska kreativitetens oändliga möjligheter tillsammans!
                </p>
            </div>
        </div>

        {/* قسم الفلسفة الجديد */}
        <OurPhilosophySection />
        
        {/* عرض أحدث المقالات */}
        <section className="container mx-auto px-6 pt-16 pb-12">
             <div className="text-center mb-10">
                <h2 className="text-3xl font-serif font-semibold text-gray-800">Mina senaste inlägg</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestPosts.map(post => (<BlogPostCard key={post.slug} post={post} />))}
            </div>
        </section>
        
        {/* قسم تسليط الضوء على فئة "نصائح يدوية" مع نص موسع */}
        <div className="bg-stone-100"><CategorySpotlight 
            title="Kreativa Pysseltips & DIY"
            description="Älskar du att skapa med händerna? Dyk ner i en värld av kreativitet! Här hittar du massor av roliga och enkla DIY-projekt för alla årstider. Lär dig hur du kan återbruka gamla jeans, skapa vackra och personliga juldekorationer, eller pyssla med material som du hittar gratis i naturen. Varje projekt är en chans att skapa något unikt."
            category="Pysseltips"
            postsToShow={3}
        /></div>

        {/* قسم تسليط الضوء على فئة "الحديقة" مع نص موسع */}
        <CategorySpotlight 
            title="Inspiration för Trädgård & Odling"
            description="Oavsett om du har en stor trädgård, en radhustomt eller en liten balkong, så finns det alltid något att odla och njuta av. Upptäck mina bästa råd för allt från frösådd och plantering till smart beskärning och hur du skapar en mysig, prunkande oas som lockar till sig fjärilar och bin. Låt oss odla tillsammans!"
            category="Trädgård"
            postsToShow={3}
        />

        {/* قسم التعريف بالكاتبة */}
        <div className="bg-stone-100"><AboutHildaSection /></div>

        {/* قسم تسليط الضوء على فئة "الوصفات" مع نص موسع */}
        <CategorySpotlight 
            title="Goda Recept för alla tillfällen"
            description="Från julens allra sötaste och segaste godis till snabba, enkla och smakrika vardagsrätter. Här samlar jag mina familjs favoritrecept som är gjorda med kärlek och bra råvaror. Hitta inspiration för nästa middagsbjudning eller helgfika. Det finns alltid en anledning att laga något gott!"
            category="Recept"
            postsToShow={3}
        />

      </main>
      <Footer />
    </div>
  );
}