import React from 'react';
import { Link, useRoute } from 'wouter';
import { PageHero } from '../common/PageHero';
import { PageCta } from '../common/PageCta';
import { SeoMetadata } from '../common/SeoMetadata';
import { BLOG_POSTS_DETAILED } from '../../data/postsData';
import { ArrowLeft, ArrowRight, Share2, Bookmark, CheckCircle2 } from 'lucide-react';

interface BlogPostPageTemplateProps {
  onOpenWhitepaper?: () => void;
  onOpenDemo?: () => void;
}

export const BlogPostPageTemplate: React.FC<BlogPostPageTemplateProps> = ({ onOpenWhitepaper, onOpenDemo }) => {
  const [, params] = useRoute('/blog/:slug');
  const slug = params?.slug || 'ebpf-kernel-bypass-benchmarks';

  const post = BLOG_POSTS_DETAILED.find(p => p.slug === slug) || BLOG_POSTS_DETAILED[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title={post.title}
        description={post.summary}
        schemaType="Article"
        schemaData={{
          headline: post.title,
          author: {
            '@type': 'Person',
            name: post.author.name
          },
          datePublished: post.date,
          publisher: 'HEXBYTE'
        }}
      />

      {/* 1. Article Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'Insights', href: '/blog' },
          { label: post.category }
        ]}
        kicker={`${post.category} · ${post.readTime}`}
        title={post.title}
        subtitle={post.subtitle}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center font-mono font-bold text-xs text-indigo-300">
              {post.author.avatar}
            </div>
            <div>
              <div className="text-xs font-bold text-white">{post.author.name}</div>
              <div className="text-[11px] text-slate-400">{post.author.role} · {post.date}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Articles</span>
            </Link>
          </div>
        </div>
      </PageHero>

      {/* 2. Article Body Content */}
      <article className="py-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {/* Executive Summary Lead */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-sm text-slate-200 leading-relaxed font-medium">
            <span className="text-xs font-mono uppercase text-indigo-400 block mb-1">Executive Summary</span>
            {post.summary}
          </div>

          {/* Detailed Content Sections */}
          {post.contentSections.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base text-slate-300 leading-relaxed">
                  {p}
                </p>
              ))}

              {sec.codeSnippet && (
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 font-mono text-xs text-sky-300 overflow-x-auto shadow-inner">
                  <pre>{sec.codeSnippet}</pre>
                </div>
              )}
            </div>
          ))}

          {/* Key Takeaways Box */}
          <div className="p-8 rounded-3xl bg-indigo-950/40 border border-indigo-500/30 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Key Architectural Takeaways</span>
            </h3>
            <ul className="space-y-2.5">
              {post.keyTakeaways.map((item, tIdx) => (
                <li key={tIdx} className="flex items-start gap-3 text-sm text-slate-200">
                  <span className="text-indigo-400 font-mono mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      {/* 3. Related Articles */}
      <section className="py-16 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl font-bold text-white mb-6">More Engineering Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS_DETAILED.filter(p => p.slug !== post.slug).slice(0, 3).map((p, idx) => (
              <Link
                key={idx}
                href={`/blog/${p.slug}`}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase text-indigo-400">{p.category}</span>
                  <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors mt-1">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                    {p.subtitle}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>{p.readTime}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Page CTA */}
      <PageCta
        title="Stay Ahead of Distributed Systems Innovations"
        subtitle="Subscribe to our bi-weekly architecture journal or schedule a technical review."
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </div>
  );
};
