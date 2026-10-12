import React from 'react';
import { useRoute, Link } from 'wouter';
import { BLOG_POSTS_DETAILED } from '../data/postsData';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { Clock, Calendar, User, CheckCircle2, ArrowLeft } from 'lucide-react';

interface BlogPostPageTemplateProps {
  onOpenDemo: () => void;
  onOpenWhitepaper: () => void;
}

export const BlogPostPageTemplate: React.FC<BlogPostPageTemplateProps> = ({
  onOpenDemo,
  onOpenWhitepaper
}) => {
  const [, params] = useRoute('/blog/:slug');
  const post = BLOG_POSTS_DETAILED.find(p => p.slug === params?.slug) || BLOG_POSTS_DETAILED[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoMetadata
        title={post.title}
        description={post.summary}
        schemaType="BlogPosting"
        schemaData={{
          headline: post.title,
          author: { '@type': 'Person', name: post.author.name },
          datePublished: post.date,
          publisher: { '@type': 'Corporation', name: 'HEXBYTE' }
        }}
      />

      {/* 1. Page Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'Engineering Blog', href: '/blog' },
          { label: post.category }
        ]}
        kicker={`${post.category} · Technical Teardown`}
        title={post.title}
        subtitle={post.subtitle}
      >
        <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-400 border-t border-slate-800/80">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center font-mono font-bold text-[11px] text-indigo-300">
              {post.author.avatar}
            </div>
            <div>
              <div className="text-white font-semibold">{post.author.name}</div>
              <div className="text-[10px] text-slate-400">{post.author.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>{post.date}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </PageHero>

      {/* 2. Executive Summary Lead */}
      <section className="py-12 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-6">
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300 text-base leading-relaxed font-medium">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 block mb-2">
              Abstract
            </span>
            {post.summary}
          </div>
        </div>
      </section>

      {/* 3. Main Content Sections */}
      <article className="py-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
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
                <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-4 font-mono text-xs text-sky-300 overflow-x-auto">
                  <pre>{sec.codeSnippet}</pre>
                </div>
              )}
            </div>
          ))}

          {/* Key Takeaways Box */}
          <div className="p-8 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 space-y-4">
            <h3 className="text-lg font-bold text-white">
              Key Engineering Takeaways
            </h3>
            <ul className="space-y-2.5">
              {post.keyTakeaways.map((takeaway, tIdx) => (
                <li key={tIdx} className="flex items-start gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all engineering articles</span>
            </Link>
          </div>
        </div>
      </article>

      {/* 4. Conversion CTA */}
      <PageCta
        title="Experience Hexbyte Kernel-Level Resilience"
        subtitle="Schedule a technical demo to see our eBPF mesh and autonomous recovery in a live environment."
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </div>
  );
};
