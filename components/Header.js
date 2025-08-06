'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/posts';

// --- أيقونات SVG ---
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
);
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
);
const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
);
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);
const ChevronRightIcon = ({ isOpen }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" 
        className={`h-5 w-5 ml-2 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);


// --- نافذة البحث المنبثقة ---
const SearchOverlay = ({ closeSearch }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (query.length > 2) {
            const searchResults = posts.filter(post => 
                post.title.toLowerCase().includes(query.toLowerCase()) || 
                post.content.toLowerCase().includes(query.toLowerCase())
            );
            setResults(searchResults);
        } else {
            setResults([]);
        }
    }, [query]);

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-start p-4 pt-20 md:pt-32" onClick={closeSearch}>
            <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl text-gray-900" onClick={(e) => e.stopPropagation()}>
                <button onClick={closeSearch} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
                    <CloseIcon />
                </button>
                <div className="p-8">
                    <input 
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Sök efter recept, pyssel, inspiration..."
                        className="w-full text-xl border-b-2 border-gray-300 focus:border-rose-800 focus:outline-none pb-2"
                        autoFocus
                    />
                    <div className="mt-6 max-h-96 overflow-y-auto">
                        {results.length > 0 ? (
                            results.map(post => {
                                const postUrl = post.year ? `/${post.year}/${post.month}/${post.slug}.html` : `/${post.slug}`;
                                return (
                                    <Link href={postUrl} key={post.slug} className="block p-4 -mx-4 rounded-md hover:bg-gray-100" onClick={closeSearch}>
                                        <h3 className="font-semibold text-gray-800">{post.title}</h3>
                                        <p className="text-sm text-gray-600 line-clamp-2">{post.content.replace(/<[^>]*>/g, '').substring(0, 100)}...</p>
                                    </Link>
                                )
                            })
                        ) : (
                            query.length > 2 && <p className="text-gray-500">Inga resultat hittades.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- قائمة الموبايل مع قائمة فرعية قابلة للطي ---
const MobileMenu = ({ closeMenu, categories }) => {
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

    return (
        <div className="fixed inset-0 z-50 bg-white text-gray-900 md:hidden animate-fade-in">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" onClick={closeMenu}>
                    <span className="text-xl font-serif font-bold">Hildashem</span>
                </Link>
                <button onClick={closeMenu} className="text-gray-700">
                    <CloseIcon />
                </button>
            </div>
            <nav className="flex flex-col items-center justify-center h-full -mt-16">
                <ul className="text-center space-y-6">
                    <li><Link href="/" className="text-2xl font-serif hover:text-rose-800" onClick={closeMenu}>Hem</Link></li>
                    
                    <li>
                        <button 
                            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)} 
                            className="flex items-center justify-center w-full text-2xl font-serif hover:text-rose-800"
                        >
                            Kategorier
                            <ChevronRightIcon isOpen={isCategoriesOpen} />
                        </button>
                        
                        {isCategoriesOpen && (
                            <ul className='space-y-4 mt-4 animate-fade-in'>
                                {categories.map(category => (
                                    <li key={category}>
                                        <Link href={`/category/${category.toLowerCase()}`} className="block text-lg text-gray-600 hover:text-rose-800" onClick={closeMenu}>
                                            {category}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                    
                    <li><Link href="/p/om-mig.html" className="text-2xl font-serif hover:text-rose-800" onClick={closeMenu}>Om mig</Link></li>
                    <li><Link href="/p/kontakt.html" className="text-2xl font-serif hover:text-rose-800" onClick={closeMenu}>Kontakt</Link></li>
                </ul>
            </nav>
        </div>
    );
};

// --- المكون الرئيسي للهيدر ---
export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [...new Set(posts.map(p => p.category))];
  
  const closeAllOverlays = () => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }

  return (
    <>
      <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-40 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          
          <div className="flex items-center gap-4">
            <Link href="/" onClick={closeAllOverlays}>
              <Image src="/logo.png" alt="Hildashem Logo" width={40} height={40} className="h-10 w-auto" />
            </Link>
            <div>
                <Link href="/" className="text-xl md:text-2xl font-serif font-bold text-gray-800 tracking-wider" onClick={closeAllOverlays}>Hildashem</Link>
                <p className="text-xs text-gray-500 font-sans hidden sm:block">Inspiration & kreativa idéer</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 font-sans text-gray-700">
            <Link href="/" className="hover:text-rose-800 transition-colors">Hem</Link>
            
            <div 
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
            >
                <button className="flex items-center hover:text-rose-800 transition-colors">
                    Kategorier
                    <ChevronDownIcon />
                </button>
                {isDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-100 py-1">
                        {categories.map(category => (
                            <Link key={category} href={`/category/${category.toLowerCase()}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-rose-800">
                                {category}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <Link href="/p/om-mig.html" className="hover:text-rose-800 transition-colors">Om mig</Link>
            <Link href="/p/kontakt.html" className="hover:text-rose-800 transition-colors">Kontakt</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <button onClick={() => setSearchOpen(true)} className="text-gray-600 hover:text-rose-800">
              <SearchIcon />
            </button>

            <button onClick={() => setMobileMenuOpen(true)} className="text-gray-600 hover:text-rose-800 md:hidden">
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {isSearchOpen && <SearchOverlay closeSearch={() => setSearchOpen(false)} />}
      {isMobileMenuOpen && <MobileMenu closeMenu={() => setMobileMenuOpen(false)} categories={categories} />}
    </>
  );
}