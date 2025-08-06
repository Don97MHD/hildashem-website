import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hildashem - Inspiration & kreativa idéer",
  description: "En plats för kreativitet och skönhet i vardagen.",
    verification: {
    google: "PugY9QtDxFgnfGhHuYJLxudTTmLd8g30VMsEnxflKZ8",
  },
  icons: {
    // الأيقونة الرئيسية (للأجهزة التي تدعم SVG)
    icon: '/favicon.svg', 
    // أيقونة لأجهزة Apple
    apple: '/favicon.svg', 
    // تعريفات إضافية لضمان التوافق الأقصى
    other: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        url: '/favicon.svg',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
