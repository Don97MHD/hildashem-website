/** @type {import('next').NextConfig} */
const nextConfig = {
  // هذه هي القواعد التي ستقوم بتحويل الروابط
  async rewrites() {
    return [
      // القاعدة الحالية للروابط التي تحتوي على تاريخ
      {
        source: '/:year(\\d{4})/:month(\\d{2})/:slug*.html',
        destination: '/posts/:year/:month/:slug*',
      },
      // القاعدة الحالية للصفحات الثابتة
      {
        source: '/p/:slug.html',
        destination: '/pages/:slug',
      },
      // ## القاعدة الجديدة والمصححة للمقالات ذات الروابط البسيطة ##
      // هذا التعبير يمنع القاعدة من التطابق مع الملفات (مثل favicon.ico) أو المسارات المحجوزة (مثل _next)
      {
        source: '/:slug((?!_next|api|p|category)[^.]*)',
        destination: '/simple-posts/:slug',
      },
    ];
  },
};

export default nextConfig;
