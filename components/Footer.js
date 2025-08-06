import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/posts'; // استيراد بيانات المقالات

// --- أيقونات SVG لوسائل التواصل الاجتماعي (لا تغيير هنا) ---
const InstagramIcon = () => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg>
);
const PinterestIcon = () => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 0 5.396 0 12.017c0 5.075 3.065 9.438 7.337 11.16.02-.12.037-.33.037-.33s-.22-1.012.23-1.012c.38 0 .883.475.883 1.462 0 .73-.483 1.838-1.2 1.838-.987 0-1.725-.987-1.462-2.125.3-1.312.912-2.737.912-3.662 0-.838-.475-1.563-1.35-1.563-.9 0-1.612.9-1.612 2.025 0 .73.262 1.525.6 2.025.075.113.088.15.063.263-.087.387-.275 1.125-.337 1.35-.075.287-.388.425-.688.3-.925-.375-1.5-1.625-1.5-3.013 0-2.437 1.775-4.575 5.025-4.575 2.738 0 4.613 2.025 4.613 4.3 0 2.712-1.725 4.887-4.138 4.887-1.337 0-2.325-.688-2.025-1.5.337-.887.987-1.8 1.312-2.325.438-.688.35-1.5-.125-2.013-.525-.575-1.025-.6-1.025-1.5 0-.75.525-1.425 1.525-1.425 1.763 0 2.925 1.763 2.925 3.55 0 1.25-.3 2.175-.763 2.175-.237 0-.425-.2-.425-.462 0-.375.25-1.1.25-1.488 0-.912-.425-1.75-1.337-1.75-.925 0-1.65.9-1.65 2.025 0 .612.225 1.25.525 1.637.075.1.087.137.062.25-.087.375-.275 1.112-.337 1.337-.063.275-.375.413-.675.288-.913-.362-1.488-1.612-1.488-2.987 0-2.412 1.762-4.55 5-4.55 2.725 0 4.6 2.012 4.6 4.287 0 2.7-1.712 4.875-4.125 4.875-1.325 0-2.312-.675-2.012-1.487.325-.875.975-1.787 1.3-2.312.425-.675.338-1.487-.138-1.987-.512-.563-1.012-.588-1.012-1.488 0-.737.512-1.412 1.512-1.412 1.75 0 2.913 1.75 2.913 3.537z" /></svg>
);
const FacebookIcon = () => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82v-9.29H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h5.683c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z" /></svg>
);

// --- الفوتر الجديد ذو التصميم الفاتح ---
export default function Footer() {
    const latestPosts = [...posts]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);
    
    const mainCategories = ["Pysseltips", "Trädgård", "Recept", "Inredning"];

    return (
        // تم تغيير الخلفية إلى فاتحة وإضافة حد علوي
        <footer className="bg-stone-100 text-gray-700 font-sans border-t border-stone-200">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* العمود الأول: عن الموقع */}
                    <div className="md:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <Image src="/logo.png" alt="Hildashem Logo" width={40} height={40} />
                            {/* تم تغيير لون النص إلى داكن */}
                            <span className="text-xl font-serif font-bold text-gray-900">Hildashem</span>
                        </div>
                        <p className="text-sm leading-relaxed pr-4 text-gray-600">
                            En plats för kreativitet och skönhet i vardagen. Följ mig för kontinuerlig inspiration inom inredning, återbruk, trädgård och recept.
                        </p>
                    </div>

                    {/* العمود الثاني: الفئات */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Utforska</h3>
                        <ul className="space-y-3">
                            {mainCategories.map(cat => (
                                <li key={cat}>
                                    <Link href={`/category/${cat.toLowerCase()}`} className="text-gray-600 hover:text-rose-800 hover:underline transition-colors duration-200">
                                        {cat}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* العمود الثالث: أحدث المقالات */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Senaste Inläggen</h3>
                        <ul className="space-y-3">
                            {latestPosts.map(post => {
                                const postUrl = post.year && post.month 
                                    ? `/${post.year}/${post.month}/${post.slug}.html`
                                    : `/${post.slug}`;
                                return (
                                    <li key={post.slug}>
                                        <Link href={postUrl} className="text-gray-600 hover:text-rose-800 transition-colors duration-200">
                                            {post.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* العمود الرابع: تصفح وصفحات قانونية */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Information</h3>
                        <ul className="space-y-3">
                            <li><Link href="/p/om-mig.html" className="text-gray-600 hover:text-rose-800 hover:underline">Om Mig</Link></li>
                            <li><Link href="/p/kontakt.html" className="text-gray-600 hover:text-rose-800 hover:underline">Kontakt</Link></li>
                            {/* --- الروابط الجديدة المضافة --- */}
                            <li><Link href="/p/integritetspolicy.html" className="text-gray-600 hover:text-rose-800 hover:underline">Integritetspolicy</Link></li>
                            <li><Link href="/p/anvandarvillkor.html" className="text-gray-600 hover:text-rose-800 hover:underline">Användarvillkor</Link></li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* الشريط السفلي للفوتر */}
            <div className="bg-stone-200/70">
                <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-center">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Hildashem. Alla rättigheter förbehållna.
                    </p>
                    <div className="flex justify-center space-x-5 mt-4 sm:mt-0">
                       <a href="#" className="text-gray-500 hover:text-rose-800 transition-colors"><InstagramIcon /></a>
                       <a href="#" className="text-gray-500 hover:text-rose-800 transition-colors"><PinterestIcon /></a>
                       <a href="#" className="text-gray-500 hover:text-rose-800 transition-colors"><FacebookIcon /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}