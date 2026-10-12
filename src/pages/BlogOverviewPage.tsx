import React, { useState } from 'react';
import { Link } from 'wouter';
import { PageHero } from '../components/common/PageHero';
import { PageCta } from '../components/common/PageCta';
import { SeoMetadata } from '../components/common/SeoMetadata';
import { BLOG_POSTS_DETAILED } from '../data/postsData';
import { Search, ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';

interface BlogOverviewPageProps {
  onOpenDemo?: () => void;
  onOpenWhitepaper?: () => void;
}

export const BlogOverviewPage: React.FC<BlogOverviewPageProps> = ({ onOpenDemo, onOpenWhitepaper }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Kernel Engineering', 'Distributed Systems', 'Security & Compliance', 'AI & SRE Operations'];

  const filteredPosts = BLOG_POSTS_DETAILED.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <SeoMetadata
        title="Engineering Blog & Distributed Systems Research"
        description="Deep architectural teardowns on Linux eBPF, kernel bypass, multi-cloud active-active failover, and autonomous SRE models."
        schemaType="Blog"
        schemaData={{
          name: 'Hexbyte Engineering Blog',
          publisher: 'HEXBYTE'
        }}
      />

      <PageHero
        breadcrumbs={[{ label: 'Insights', href: '/blog' }]}
        kicker="Engineering Insights & Research"
        title="Distributed Systems & Kernel Architecture Journal"
        subtitle="Authored by Hexbyte principal systems engineers. Deep architectural teardowns, benchmark comparisons, and real-world failure analyses."
        metricBadge={{
          value: 'Weekly Research',
          label: 'Directly From Our Core Systems Lab'
        }}
      />

      {/* Search & Category Filter */}
      <section className="py-8 bg-slate-900/60 border-b border-slate-800 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All Topics' : cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/60 hover:bg-slate-900 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs pb-3 mb-3 border-b border-slate-800">
                    <span className="font-mono text-indigo-400 font-semibold">{post.category}</span>
                    <span className="text-slate-500 font-mono">{post.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-3">
                    {post.subtitle}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center font-mono text-[10px] font-bold">
                      {post.author.avatar}
                    </div>
                    <div className="text-xs text-slate-300">
                      <span className="font-semibold text-white">{post.author.name}</span> · {post.date}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Have an Engineering Challenge to Discuss?"
        subtitle="Schedule a technical architecture call with our principal distributed systems engineers."
        onOpenDemo={onOpenDemo}
        onOpenWhitepaper={onOpenWhitepaper}
      />
    </div>
  );
};
