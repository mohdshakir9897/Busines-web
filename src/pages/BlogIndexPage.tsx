import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { BLOG_POSTS_DETAILED } from '../data/postsData';
import { Link } from 'wouter';
import { Clock, Calendar, ArrowRight, Search, FileText } from 'lucide-react';

interface BlogIndexPageProps {
  onOpenDemo: () => void;
  onOpenWhitepaper: () => void;
}

export const BlogIndexPage: React.FC<BlogIndexPageProps> = ({
  onOpenDemo,
  onOpenWhitepaper
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Kernel Engineering', 'Distributed Systems', 'Security & Compliance', 'AI & SRE Operations'];

  const filteredPosts = BLOG_POSTS_DETAILED.filter((post) => {
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesQuery = searchQuery.trim() === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoMetadata
        title="Hexbyte Engineering Blog | Systems, eBPF & Distributed Consensus"
        description="Deep architectural teardowns written by principal distributed systems engineers. Zero marketing fluff."
      />

      <PageHero
        breadcrumbs={[{ label: 'Resources', href: '/resources' }, { label: 'Engineering Blog' }]}
        kicker="Technical Publications"
        title="Engineering Teardowns on Systems, eBPF & Consensus"
        subtitle="Written by distributed systems researchers and Linux kernel contributors. Benchmark teardowns, mathematical proofs, and incident post-mortems."
        metricBadge={{ value: '4 Articles', label: 'Peer-Reviewed Technical Teardowns' }}
      />

      <section className="py-20 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/40 transition-all flex flex-col justify-between block"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs text-slate-400 font-mono">
                    <span className="text-indigo-400 font-semibold">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium mt-1">
                    {post.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 mt-3 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-indigo-600/30 text-indigo-300 font-mono font-bold text-[10px] flex items-center justify-center">
                      {post.author.avatar}
                    </div>
                    <span className="text-slate-300 font-medium">{post.author.name}</span>
                  </div>

                  <span className="inline-flex items-center gap-1 font-semibold text-indigo-400 group-hover:text-indigo-300">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Stay Ahead of Distributed Systems Advancements"
        subtitle="Subscribe to the bi-weekly Autonomous Enterprise Journal curated directly by our principal researchers."
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </div>
  );
};
