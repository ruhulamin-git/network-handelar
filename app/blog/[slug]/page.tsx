import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allBlogPosts, getBlogPostBySlug } from "@/lib/blog-data";

export function generateStaticParams() {
  return allBlogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const relatedPosts = allBlogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="bg-white text-gray-900 font-sans min-h-screen mt-20">

      {/* ══ TOP NAV BAR ══ */}
    

      {/* ══ ARTICLE BODY ══ */}
      <article className="max-w-5xl mx-auto px-4 sm:px-8 pb-12 md:py-16 ">

        {/* Date label */}
        <div className="flex items-center gap-2 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-black" />
          <span className="text-xs tracking-[0.2em] uppercase font-semibold text-black">
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl  text-gray-900 tracking-tighter leading-[0.95] mb-6">
          {post.title}
        </h1>

        {/* Summary / intro paragraph */}
        <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-2xl">
          {post.summary}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 mb-10 pb-8 border-b border-gray-100">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-400">
            <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />
            {post.category}
          </span>
          <span className="text-gray-200">|</span>
          <span className="text-xs text-gray-400">{post.date}</span>
          <span className="text-gray-200">|</span>
          <span className="text-xs text-gray-400">{post.readTime}</span>
        </div>

        {/* Hero image — full width, rounded, matching screenshot */}
        <div className="relative w-full rounded-2xl overflow-hidden mb-12 bg-gray-100" style={{ aspectRatio: "16/9" }}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Intro paragraph */}
        <p className="text-gray-700 text-base leading-8 mb-10">
          {post.intro}
        </p>

        {/* Divider */}
        <div className="w-12 h-0.5 bg-[#CCFF00] mb-10" />

        {/* Body paragraphs with auto-generated subheadings */}
        <div className="space-y-10">
          {post.paragraphs.map((para, i) => {
            const headings = [
              "1. Elevating Human Creativity",
              "2. Scaling Personalized Care",
              "3. The Ethics of Intelligence",
            ];
            return (
              <div key={i}>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 leading-snug">
                  {headings[i] ?? `${i + 1}. Key Insight`}
                </h2>
                <p className="text-gray-600 text-base leading-8">{para}</p>
              </div>
            );
          })}
        </div>

        {/* Key Takeaways */}
        <div className="mt-14 rounded-3xl border border-gray-100 bg-gray-50 p-7 sm:p-9">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
              Key Takeaways
            </span>
          </div>
          <h2 className="text-2xl font-bold text-black mb-6">What this means in practice</h2>
          <ul className="space-y-4">
            {post.takeaways.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-2.5 w-2.5 h-2.5 rounded-full bg-[#CCFF00] shrink-0" />
                <span className="text-gray-700 text-base leading-7">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full hover:bg-black transition-colors"
          >
            Back to Articles
            <span className="w-7 h-7 rounded-full bg-[#CCFF00] flex items-center justify-center shrink-0">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7v10" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
          <span className="text-xs text-gray-400 font-medium">{post.eyebrow}</span>
        </div>
      </article>

      {/* ══ RELATED POSTS ══ */}
      <section className="border-t border-gray-100 bg-gray-50 py-14 px-4 sm:px-8 md:px-14 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span className="text-xs tracking-[0.2em] uppercase font-semibold text-black">More Articles</span>
          </div>
          <h2 className="text-3xl text-black mb-10">You might also like</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {relatedPosts.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="group block">
                <div className="relative h-52 rounded-2xl overflow-hidden mb-5 shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-900">{item.category}</span>
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-2">{item.date}</p>
                <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-gray-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1 mt-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  Read more
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" className="ml-0.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}