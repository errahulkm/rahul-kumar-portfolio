import { useState } from 'react';
import { motion } from 'motion/react';
import { profileData } from '../data';
import {
  Download,
  Terminal,
  Check,
  Copy,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Package,
  Layers,
  Sparkles
} from 'lucide-react';

export default function Downloads() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const releases = (profileData as any).releases || [];

  return (
    <section id="downloads" className="py-24 bg-charcoal/60 relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none translate-x-1/2" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gold/10 blur-[150px] rounded-full pointer-events-none -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-4">
              <Package size={14} className="text-cyan-400" />
              Software Releases & Developer Tooling
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Download Production <br />
              <span className="text-white/40 italic">Standalone Software Releases</span>
            </h2>
            <p className="text-xl text-white/60 leading-relaxed font-light">
              Get immediate access to self-contained, offline developer tools and AI context engines. Zero external dependencies, enterprise IP security, and instant setup.
            </p>
          </motion.div>
        </div>

        {/* Releases Grid */}
        <div className="space-y-8 max-w-5xl">
          {releases.map((release: any, rIdx: number) => {
            const commandString = release.quickStartCommands.join('\n');
            const isCopied = copiedIndex === rIdx;

            return (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: rIdx * 0.1 }}
                className="glass-card p-8 md:p-10 rounded-2xl border border-gold/30 shadow-2xl relative overflow-hidden"
              >
                {/* Decorative corner glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-500/15 via-gold/5 to-transparent rounded-bl-full pointer-events-none" />

                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-8">
                  {/* Title and metadata */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles size={12} className="text-cyan-400" />
                        {release.version} • {release.tag}
                      </span>
                      <span className="text-xs text-white/40">•</span>
                      <span className="text-xs text-white/50">{release.releaseDate}</span>
                      <span className="text-xs text-white/40">•</span>
                      <span className="text-xs text-gold/90 font-medium">{release.platform}</span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
                        <img src="/products/DocCraft-logo.svg" alt="Logo" className="w-6 h-6 object-contain" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                        {release.productName}
                      </h3>
                    </div>

                    <p className="text-sm text-white/70 max-w-2xl leading-relaxed font-light">
                      {release.description}
                    </p>
                  </div>

                  {/* Direct Download Action Button */}
                  <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                    <a
                      href={release.downloadUrl}
                      download={release.filename}
                      className="px-6 py-4 bg-gradient-to-r from-gold via-gold-light to-gold text-charcoal font-bold text-sm rounded-xl hover:shadow-xl hover:shadow-gold/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
                    >
                      <Download size={18} className="text-charcoal group-hover:-translate-y-0.5 transition-transform" />
                      <span>Download {release.filename}</span>
                    </a>

                    <div className="flex items-center justify-between px-2 text-xs text-white/50">
                      <span>Archive size: <strong className="text-white/80">{release.fileSize}</strong></span>
                      <a
                        href={release.releaseNotesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold/80 hover:text-gold flex items-center gap-1 hover:underline"
                      >
                        Release notes <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Highlights Grid */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {release.highlights.map((highlight: string, hIdx: number) => (
                    <div
                      key={hIdx}
                      className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs text-white/80"
                    >
                      <ShieldCheck size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Quick Start Terminal Snippet */}
                <div className="rounded-xl overflow-hidden border border-white/10 bg-charcoal/90">
                  <div className="px-4 py-2.5 bg-white/5 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Terminal size={14} className="text-gold" />
                      <span className="text-xs font-mono font-semibold text-white/80">
                        Quick Start Terminal Command (Linux)
                      </span>
                    </div>

                    <button
                      onClick={() => copyToClipboard(commandString, rIdx)}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                    >
                      {isCopied ? (
                        <>
                          <Check size={12} className="text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Copy Commands</span>
                        </>
                      )}
                    </button>
                  </div>

                  <pre className="p-4 text-xs font-mono text-cyan-300/90 leading-relaxed overflow-x-auto selection:bg-cyan-500/30 selection:text-white">
                    {commandString}
                  </pre>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
