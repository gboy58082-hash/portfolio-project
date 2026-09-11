import React from 'react';
import { Project } from '@/data/projects';
import GlassCard from '../ui/GlassCard';
import { Target, Compass, Layers, CheckCircle2, Sparkles, ArrowRight, BarChart2 } from 'lucide-react';

interface CaseStudyProps {
  project: Project;
}

export default function CaseStudy({ project }: CaseStudyProps) {
  const cs = project.caseStudy;

  return (
    <div className="space-y-12">
      {/* 1. Case Study Visual Architecture Banner */}
      <GlassCard className="p-8 border-cyan-500/30" glow>
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest">
            STRATEGY ARCHITECTURE VISUALIZATION
          </span>
          <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 font-mono text-[10px] text-cyan-300">
            ILLUSTRATIVE STRATEGY BLUEPRINT
          </span>
        </div>

        {/* Project Visual Artwork */}
        {project.image && (
          <div className="mb-6 relative aspect-[16/8] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 text-xs font-mono text-cyan-300 font-bold tracking-wider">
              {project.category} • CAMPAIGN ASSET ARCHIVE
            </div>
          </div>
        )}

        {/* Dynamic Visual Breakdown per Project */}
        {project.id === 'google-ads' && (
          <div className="space-y-4">
            <div className="text-sm font-mono text-slate-300 mb-2">
              Campaign Hierarchy: ₹10 Lakh Planned Market Expansion
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs font-mono">
              {['Campaign Plan', 'Ad Groups (STAG)', 'Keyword Intent', 'RSAs & Extensions', 'Landing Page CRO', 'Lead Conversion'].map((step, idx) => (
                <div key={step} className="p-3 rounded-xl bg-white/5 border border-cyan-400/20">
                  <span className="text-[10px] text-cyan-400 font-bold block mb-1">0{idx + 1}</span>
                  <span className="text-white font-semibold">{step}</span>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-slate-400 flex justify-between flex-wrap gap-2">
              <span>Budget Allocation: 50% Search • 25% PMax • 15% Display • 10% Remarketing</span>
              <span className="text-cyan-400 font-bold">500+ Negative Keywords Mapped</span>
            </div>
          </div>
        )}

        {project.id === 'brand-presence' && (
          <div className="space-y-4">
            <div className="text-sm font-mono text-slate-300 mb-2">
              90-Day Organic SEO Growth Journey:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs font-mono">
              {['Keyword Research', 'On-Page SEO', 'Technical SEO (CWV)', 'Content Clusters', 'Backlink Outreach', 'Organic Traffic'].map((step, idx) => (
                <div key={step} className="p-3 rounded-xl bg-white/5 border border-cyan-400/20">
                  <span className="text-[10px] text-cyan-400 font-bold block mb-1">0{idx + 1}</span>
                  <span className="text-white font-semibold">{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.id === 'social-growth' && (
          <div className="space-y-4">
            <div className="text-sm font-mono text-slate-300 mb-2">
              Full-Funnel Organic + Paid Social Architecture:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-xs font-mono">
              {[
                { stage: 'Reach', desc: 'Short-Form Reels & Infographics' },
                { stage: 'Engagement', desc: 'Interactive Carousels & Polls' },
                { stage: 'Consideration', desc: 'Client Proof & Long-Form Video' },
                { stage: 'Conversion', desc: 'Targeted Retargeting Lead Ads' },
                { stage: 'Retention', desc: 'Community Advocacy & Nurture' }
              ].map((item, idx) => (
                <div key={item.stage} className="p-3 rounded-xl bg-white/5 border border-cyan-400/20">
                  <span className="text-[10px] text-cyan-400 font-bold block mb-1">0{idx + 1} • {item.stage.toUpperCase()}</span>
                  <span className="text-slate-300 text-[11px]">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.id === 'conversion-funnel' && (
          <div className="space-y-4">
            <div className="text-sm font-mono text-slate-300 mb-2">
              Google Merchandise Store 5-Tier Funnel:
            </div>
            <div className="space-y-2 font-mono text-xs">
              {[
                { name: '1. AWARENESS', tactic: 'High-Intent Branded Google Search Ads + Category SEO', width: '100%' },
                { name: '2. ACQUISITION', tactic: 'Landing Page Direct Category Entry & Offer Banners', width: '85%' },
                { name: '3. ENGAGEMENT', tactic: 'Interactive Size Chart, Cart Preview, Stock Indicators', width: '70%' },
                { name: '4. CONVERSION', tactic: '3-Step Guest Checkout with Security Badges', width: '50%' },
                { name: '5. RETENTION', tactic: '3-Part Automated Lifecycle Email Nurture Sequence', width: '35%' }
              ].map((tier) => (
                <div key={tier.name} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-cyan-400/20">
                  <span className="font-bold text-white">{tier.name}</span>
                  <span className="text-slate-400">{tier.tactic}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.id === 'marketing-blueprint' && (
          <div className="space-y-4">
            <div className="text-sm font-mono text-slate-300 mb-2">
              360° Cross-Channel Synergy & Budget Modeling:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="font-bold text-cyan-400 mb-1">SEO & Organic</div>
                <div className="text-slate-400">Captures continuous search demand</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="font-bold text-blue-400 mb-1">Paid Ads (Google & Meta)</div>
                <div className="text-slate-400">Immediate high-intent acquisition</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="font-bold text-indigo-400 mb-1">Email Nurture (Brevo)</div>
                <div className="text-slate-400">Maximizes LTV & repeat checkout</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="font-bold text-emerald-400 mb-1">Financial Modeling</div>
                <div className="text-slate-400">Weekly Excel CPA pacing matrix</div>
              </div>
            </div>
          </div>
        )}
      </GlassCard>

      {/* 2. Structured Narrative: Problem & Objective */}
      <div className="grid md:grid-cols-2 gap-6">
        <GlassCard className="p-6 sm:p-8">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold block mb-2">
            THE STRATEGIC CHALLENGE
          </span>
          <h4 className="text-xl font-bold text-white mb-3 font-sans">Problem Statement</h4>
          <p className="text-slate-300 text-sm leading-relaxed">{cs.problem}</p>
        </GlassCard>

        <GlassCard className="p-6 sm:p-8">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-400 font-bold block mb-2">
            PRIMARY GOAL
          </span>
          <h4 className="text-xl font-bold text-white mb-3 font-sans">Project Objective</h4>
          <p className="text-slate-300 text-sm leading-relaxed">{cs.objective}</p>
        </GlassCard>
      </div>

      {/* 3. Target Audience & Research */}
      <div className="grid md:grid-cols-2 gap-6">
        <GlassCard className="p-6 sm:p-8">
          <h4 className="text-lg font-bold text-white mb-2 font-sans">Target Audience & Intent</h4>
          <p className="text-slate-300 text-sm leading-relaxed">{cs.targetAudience}</p>
        </GlassCard>

        <GlassCard className="p-6 sm:p-8">
          <h4 className="text-lg font-bold text-white mb-2 font-sans">Research & Insights</h4>
          <p className="text-slate-300 text-sm leading-relaxed">{cs.research}</p>
        </GlassCard>
      </div>

      {/* 4. Funnel & Strategy */}
      <GlassCard className="p-6 sm:p-8">
        <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold block mb-4">
          TACTICAL FUNNEL STAGES
        </span>
        <div className="space-y-4">
          {cs.funnel.map((item, i) => (
            <div key={item.stage} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-4">
              <span className="font-mono text-xs text-cyan-400 font-bold shrink-0 mt-0.5">
                STAGE 0{i + 1}
              </span>
              <div>
                <strong className="text-white text-sm font-sans block mb-1">{item.stage}</strong>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.tactic}</p>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* 5. Creative & Targeting Strategy */}
      <div className="grid md:grid-cols-2 gap-6">
        <GlassCard className="p-6 sm:p-8">
          <h4 className="text-lg font-bold text-white mb-2 font-sans">Creative Strategy</h4>
          <p className="text-slate-300 text-sm leading-relaxed">{cs.creatives}</p>
        </GlassCard>

        <GlassCard className="p-6 sm:p-8">
          <h4 className="text-lg font-bold text-white mb-2 font-sans">Keyword & Paid Media Strategy</h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            {cs.keywordStrategy || cs.paidMediaStrategy || 'High-intent search query and audience clustering.'}
          </p>
        </GlassCard>
      </div>

      {/* 6. KPIs & Performance Metrics */}
      <GlassCard className="p-6 sm:p-8">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold">
            STRATEGY VALIDATION KPIS
          </span>
          <span className="text-[11px] font-mono text-slate-500">
            Performance metrics available on request / Simulated campaign
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {project.kpis.map((kpi) => (
            <div key={kpi.label} className="p-4 rounded-xl bg-black/50 border border-white/10 text-center">
              <div className="text-xs font-mono text-slate-400 mb-1">{kpi.label}</div>
              <div className="text-xl font-bold text-cyan-400 font-sans">{kpi.value}</div>
              <div className="text-[11px] text-slate-500 mt-1">{kpi.detail}</div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* 7. Qualitative Learnings & Final Strategy */}
      <div className="grid md:grid-cols-2 gap-6">
        <GlassCard className="p-6 sm:p-8 border-cyan-500/20">
          <div className="flex items-center gap-2 text-cyan-400 font-bold mb-2">
            <Sparkles size={16} />
            <h4 className="text-lg text-white font-sans">Qualitative Learnings</h4>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">{cs.learnings}</p>
        </GlassCard>

        <GlassCard className="p-6 sm:p-8 border-blue-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5">
          <div className="flex items-center gap-2 text-blue-400 font-bold mb-2">
            <CheckCircle2 size={16} />
            <h4 className="text-lg text-white font-sans">Final Strategy Takeaway</h4>
          </div>
          <p className="text-slate-200 text-sm leading-relaxed font-medium">{cs.finalStrategy}</p>
        </GlassCard>
      </div>
    </div>
  );
}
