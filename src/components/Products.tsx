import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { profileData } from '../data';
import {
  Cpu,
  ShieldAlert,
  AlertTriangle,
  Activity,
  Zap,
  CheckCircle2,
  AlertCircle,
  Wrench,
  Layers,
  X,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  FileText,
  PlayCircle,
  FolderCheck,
  Download
} from 'lucide-react';

type Product = (typeof profileData.products)[number];

const iconMap: Record<string, any> = {
  Cpu,
  ShieldAlert,
  AlertTriangle,
  Activity,
  Zap
};

const categories = [
  'All Systems',
  'AI Systems & Tooling',
  'Industrial IoT & Edge',
  'Enterprise Firmware & Security',
  'Safety-Critical Hardware',
  'Silicon & AI Automation'
] as const;

const doccraftViews = {
  outline: {
    src: '/products/stm32-doccraft.png',
    title: '1. Loaded STM32U3 Manual & New Logo',
    description: 'RM0487 manual (32MB, 65 chapters) loaded with active DocCraft MCU branding.',
    badge: 'Manual Outline Loaded'
  },
  pipeline: {
    src: '/products/stm32-doccraft-pipeline.png',
    title: '2. Active Full Pipeline Execution',
    description: 'Automated extraction & conversion executing chapter-by-chapter into /home/rahul/Downloads/temp.',
    badge: 'Pipeline Processing'
  },
  output: {
    src: '/products/stm32-doccraft-output.png',
    title: '3. Generated IP-PDFs & Markdowns',
    description: 'Targeted modular IP-PDFs and Markdown outputs generated with zero token overflow.',
    badge: 'Outputs Generated'
  }
} as const;

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Systems');
  const [activeLenses, setActiveLenses] = useState<Record<string, 'problem' | 'solution'>>({});
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [doccraftView, setDoccraftView] = useState<'outline' | 'pipeline' | 'output'>('outline');

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModalProduct(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (activeModalProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeModalProduct]);

  const filteredProducts = profileData.products.filter(
    (product) => selectedCategory === 'All Systems' || product.category === selectedCategory
  );

  const getLens = (id: string) => activeLenses[id] || 'solution';

  const toggleLens = (id: string, lens: 'problem' | 'solution') => {
    setActiveLenses((prev) => ({ ...prev, [id]: lens }));
  };

  return (
    <section id="products" className="py-24 bg-charcoal relative overflow-hidden border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-royal-blue/15 blur-[140px] rounded-full pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/10 blur-[140px] rounded-full pointer-events-none translate-x-1/2" />

      {/* Grid schematic overlay */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header with AI Systems Consultant Positioning */}
        <div className="max-w-4xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold tracking-widest uppercase">
                <Wrench size={14} className="text-gold" />
                Engineered Systems & Products
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase">
                <Sparkles size={14} className="text-cyan-400" />
                AI Systems Consultant & Architect
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Products Built to Solve <br />
              <span className="text-white/40 italic">Mission-Critical & AI Challenges</span>
            </h2>
            <p className="text-xl text-white/60 leading-relaxed font-light">
              From flagship AI context engines that eliminate LLM token exhaustion for embedded firmware engineers, to safety-critical hardware, high-reliability silicon drivers, and cryptographic firmware deployed across millions of devices.
            </p>
          </motion.div>
        </div>

        {/* Executive Problem-Solving Metric Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          <div className="glass-card p-6 border-l-2 border-l-cyan-400">
            <p className="text-3xl font-serif font-bold text-cyan-400 mb-1">90%</p>
            <p className="text-xs uppercase tracking-wider text-white/40 mb-1 font-semibold">LLM Token Reduction</p>
            <p className="text-xs text-white/60">STM32 DocCraft eliminates AI context exhaustion across 65 STM32U3 IP chapters.</p>
          </div>
          <div className="glass-card p-6 border-l-2 border-l-gold">
            <p className="text-3xl font-serif font-bold text-gold mb-1">15 Days</p>
            <p className="text-xs uppercase tracking-wider text-white/40 mb-1 font-semibold">Global Crisis Turnaround</p>
            <p className="text-xs text-white/60">Worldwide SHA-512 patch across Dell thin clients with zero regressions.</p>
          </div>
          <div className="glass-card p-6 border-l-2 border-l-gold">
            <p className="text-3xl font-serif font-bold text-gold mb-1">100%</p>
            <p className="text-xs uppercase tracking-wider text-white/40 mb-1 font-semibold">First-Pass Compliance</p>
            <p className="text-xs text-white/60">Full IEC 60598-2-22 & BIS certification for emergency lighting systems.</p>
          </div>
          <div className="glass-card p-6 border-l-2 border-l-gold">
            <p className="text-3xl font-serif font-bold text-gold mb-1">0</p>
            <p className="text-xs uppercase tracking-wider text-white/40 mb-1 font-semibold">Hardware Re-spins</p>
            <p className="text-xs text-white/60">Proactive DFMEA accelerated industrial IoT delivery by 2-4 months.</p>
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          <div className="flex items-center gap-2 p-1 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all relative whitespace-nowrap ${
                    isSelected ? 'text-charcoal font-bold' : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeProductFilter"
                      className="absolute inset-0 bg-gold rounded-lg -z-10 shadow-lg shadow-gold/20"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => {
              const IconComp = iconMap[product.icon] || Cpu;
              const currentLens = getLens(product.id);
              const isFlagship = product.id === 'stm32-doccraft';

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`glass-card p-8 rounded-2xl flex flex-col justify-between group transition-all duration-300 relative ${
                    isFlagship
                      ? 'border-gold/40 shadow-2xl shadow-gold/5 lg:col-span-2'
                      : 'hover:border-gold/30'
                  }`}
                >
                  {/* Card Header & Badges */}
                  <div>
                    {isFlagship && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
                        <Sparkles size={12} className="text-cyan-400 animate-pulse" />
                        Latest Flagship Project • AI System Consultant Spotlight
                      </div>
                    )}

                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                          isFlagship
                            ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-300'
                            : 'bg-royal-blue/30 border border-royal-blue/40 text-gold group-hover:bg-gold/20 group-hover:border-gold/40'
                        }`}>
                          {'logo' in product && product.logo ? (
                            <img src={product.logo} alt="DocCraft Logo" className="w-8 h-8 object-contain" />
                          ) : (
                            <IconComp size={24} />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={`text-xs font-semibold tracking-wide uppercase ${
                              isFlagship ? 'text-cyan-400' : 'text-gold'
                            }`}>
                              {product.company}
                            </span>
                            <span className="text-white/20 text-xs">•</span>
                            <span className="text-xs text-white/40">{product.period}</span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-serif font-bold text-white group-hover:text-gold transition-colors mt-0.5">
                            {product.title}
                          </h3>
                        </div>
                      </div>

                      <span className={`px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wider uppercase whitespace-nowrap ${
                        isFlagship
                          ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-300'
                          : 'bg-white/5 border border-white/10 text-white/70'
                      }`}>
                        {product.badge}
                      </span>
                    </div>

                    <p className="text-sm text-white/60 mb-6 font-light">{product.tagline}</p>

                    {/* Interactive Multi-Stage Pipeline Screenshot Gallery for Flagship Product */}
                    {isFlagship && (
                      <div className="mb-6 rounded-xl overflow-hidden border border-gold/30 bg-charcoal/80 group/img relative shadow-lg">
                        {/* Tab Switcher */}
                        <div className="p-2 bg-white/5 border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => setDoccraftView('outline')}
                              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                                doccraftView === 'outline'
                                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                                  : 'text-white/50 hover:text-white/80'
                              }`}
                            >
                              <FileText size={13} />
                              <span>1. Loaded Manual & New Logo</span>
                            </button>

                            <button
                              onClick={() => setDoccraftView('pipeline')}
                              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                                doccraftView === 'pipeline'
                                  ? 'bg-gold/20 text-gold border border-gold/40 shadow-sm'
                                  : 'text-white/50 hover:text-white/80'
                              }`}
                            >
                              <PlayCircle size={13} />
                              <span>2. Active Pipeline Run (RM0487)</span>
                            </button>

                            <button
                              onClick={() => setDoccraftView('output')}
                              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                                doccraftView === 'output'
                                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                                  : 'text-white/50 hover:text-white/80'
                              }`}
                            >
                              <FolderCheck size={13} />
                              <span>3. Generated Markdown Files</span>
                            </button>
                          </div>

                          <span className="text-[11px] text-white/40 hidden md:inline font-mono">
                            {doccraftViews[doccraftView].badge}
                          </span>
                        </div>

                        {/* Interactive Image Display */}
                        <div className="relative">
                          <img
                            src={doccraftViews[doccraftView].src}
                            alt={doccraftViews[doccraftView].title}
                            className="w-full aspect-[21/9] object-cover object-top hover:scale-[1.01] transition-transform duration-500 cursor-pointer"
                            onClick={() => setActiveModalProduct(product)}
                          />
                          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent p-3 flex items-center justify-between text-xs">
                            <span className="text-white/80 font-medium">
                              {doccraftViews[doccraftView].description}
                            </span>
                            <span className="text-gold text-[11px] font-semibold cursor-pointer hover:underline" onClick={() => setActiveModalProduct(product)}>
                              Click to inspect full architecture →
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Standard Screenshot Preview for other products with images if any */}
                    {!isFlagship && 'image' in product && product.image && (
                      <div className="mb-6 rounded-xl overflow-hidden border border-gold/30 bg-charcoal/80 group/img relative shadow-lg">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full aspect-[21/9] object-cover object-top hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                          onClick={() => setActiveModalProduct(product)}
                        />
                      </div>
                    )}

                    {/* Creative Interactive Lens Toggle */}
                    <div className="p-1 bg-charcoal/80 rounded-xl border border-white/10 flex items-center justify-between gap-2 mb-6">
                      <button
                        onClick={() => toggleLens(product.id, 'problem')}
                        className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                          currentLens === 'problem'
                            ? 'bg-red-500/20 text-red-300 border border-red-500/40 shadow-sm'
                            : 'text-white/50 hover:text-white/80'
                        }`}
                      >
                        <AlertCircle size={14} className={currentLens === 'problem' ? 'text-red-400' : ''} />
                        <span>The Problem / Risk</span>
                      </button>

                      <button
                        onClick={() => toggleLens(product.id, 'solution')}
                        className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                          currentLens === 'solution'
                            ? 'bg-gold/20 text-gold border border-gold/40 shadow-sm'
                            : 'text-white/50 hover:text-white/80'
                        }`}
                      >
                        <CheckCircle2 size={14} className={currentLens === 'solution' ? 'text-gold' : ''} />
                        <span>Engineered Solution</span>
                      </button>
                    </div>

                    {/* Dynamic Lens Content */}
                    <div className="min-h-[160px]">
                      <AnimatePresence mode="wait">
                        {currentLens === 'problem' ? (
                          <motion.div
                            key="problem-view"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.25 }}
                            className="bg-red-950/20 border border-red-500/20 rounded-xl p-5 mb-6"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                                Critical Challenge:
                              </span>
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/20 text-red-300">
                                {product.problem.riskLevel}
                              </span>
                            </div>
                            <h4 className="text-sm font-bold text-white mb-2">{product.problem.headline}</h4>
                            <p className="text-xs text-white/70 leading-relaxed mb-3">
                              {product.problem.description}
                            </p>
                            <ul className="space-y-1.5">
                              {product.problem.painPoints.map((point, pIdx) => (
                                <li key={pIdx} className="text-[11px] text-red-200/80 flex items-start gap-2">
                                  <span className="text-red-400 shrink-0 mt-0.5">•</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="solution-view"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.25 }}
                            className="bg-gold/5 border border-gold/20 rounded-xl p-5 mb-6"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs font-bold uppercase tracking-wider text-gold">
                                What I Built:
                              </span>
                            </div>
                            <h4 className="text-sm font-bold text-white mb-2">{product.solution.headline}</h4>
                            <p className="text-xs text-white/70 leading-relaxed mb-3">
                              {product.solution.description}
                            </p>
                            <ul className="space-y-1.5">
                              {product.solution.keyFeatures.map((feature, fIdx) => (
                                <li key={fIdx} className="text-[11px] text-white/80 flex items-start gap-2">
                                  <CheckCircle2 size={12} className="text-gold shrink-0 mt-0.5" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Impact Metric Bar */}
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex items-center justify-between gap-4 mb-6">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-white/40 block font-semibold">
                          Problem Solved & Impact
                        </span>
                        <p className="text-xs text-white/80 font-medium">{product.impact.details}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className={`text-2xl font-serif font-bold block leading-none ${
                          isFlagship ? 'text-cyan-400' : 'text-gold'
                        }`}>
                          {product.impact.metric}
                        </span>
                        <span className="text-[10px] text-white/40 uppercase tracking-widest">
                          {product.impact.label}
                        </span>
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {product.technologies.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded text-[11px] bg-white/5 border border-white/10 text-white/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {product.technologies.length > 6 && (
                        <span className="px-2 py-0.5 rounded text-[11px] bg-white/5 text-white/40">
                          +{product.technologies.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-white/40 uppercase tracking-widest">Compliance / Stack:</span>
                      <div className="flex gap-1.5 flex-wrap">
                        {product.standards.slice(0, 3).map((std) => (
                          <span
                            key={std}
                            className="px-2 py-0.5 rounded text-[10px] font-bold bg-gold/10 text-gold/90 border border-gold/20"
                          >
                            {std}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {'downloadUrl' in product && (product as any).downloadUrl && (
                        <a
                          href={(product as any).downloadUrl}
                          download={(product as any).downloadFilename || 'download'}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-bold transition-all shadow-sm group/dl"
                          title="Direct download standalone release binary"
                        >
                          <Download size={13} className="group-hover/dl:translate-y-0.5 transition-transform" />
                          <span>Download {((product as any).downloadSize) || 'Release'}</span>
                        </a>
                      )}

                      <button
                        onClick={() => setActiveModalProduct(product)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:text-gold-light group/btn transition-colors"
                      >
                        <span>Architecture & RCA</span>
                        <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Deep Dive Modal: System Blueprint & RCA */}
        <AnimatePresence>
          {activeModalProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModalProduct(null)}
                className="fixed inset-0 bg-charcoal/90 backdrop-blur-xl -z-10"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card bg-charcoal/95 border border-gold/30 rounded-2xl p-6 md:p-8 shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveModalProduct(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-gold/20 text-white/60 hover:text-gold transition-colors"
                  aria-label="Close details"
                >
                  <X size={20} />
                </button>

                {/* Modal Header */}
                <div className="mb-6 pr-8">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-gold/15 text-gold border border-gold/30">
                      {activeModalProduct.company}
                    </span>
                    <span className="text-white/40 text-xs">•</span>
                    <span className="text-xs text-white/50">{activeModalProduct.period}</span>
                    <span className="text-white/40 text-xs">•</span>
                    <span className="text-xs text-gold/80 font-medium">{activeModalProduct.category}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    {'logo' in activeModalProduct && activeModalProduct.logo && (
                      <img src={activeModalProduct.logo} alt="Logo" className="w-8 h-8 object-contain shrink-0" />
                    )}
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                      {activeModalProduct.title}
                    </h3>
                  </div>
                  <p className="text-white/70 text-sm mt-1 mb-3">{activeModalProduct.tagline}</p>

                  {'downloadUrl' in activeModalProduct && (activeModalProduct as any).downloadUrl && (
                    <div className="flex items-center gap-3">
                      <a
                        href={(activeModalProduct as any).downloadUrl}
                        download={(activeModalProduct as any).downloadFilename || 'download'}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-bold transition-all shadow-sm"
                      >
                        <Download size={14} />
                        <span>Download Standalone Release {((activeModalProduct as any).downloadFilename)} ({((activeModalProduct as any).downloadSize)})</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Application Screenshot in Modal if available */}
                {'image' in activeModalProduct && activeModalProduct.image && (
                  <div className="mb-8 rounded-xl overflow-hidden border border-gold/30 bg-charcoal/80">
                    <div className="p-2.5 bg-white/5 border-b border-white/10 flex items-center justify-between text-xs text-white/60">
                      <span className="font-semibold text-cyan-300 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        Application Interface Snapshot — Live Pipeline Run
                      </span>
                      <span className="text-[11px] text-white/40">Local Offline Server • Port 8000</span>
                    </div>
                    <img
                      src={activeModalProduct.id === 'stm32-doccraft' ? doccraftViews[doccraftView].src : activeModalProduct.image}
                      alt={activeModalProduct.title}
                      className="w-full max-h-80 object-cover object-top"
                    />
                  </div>
                )}

                {/* RCA Methodology Highlight Banner */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-royal-blue/30 via-royal-blue/10 to-gold/10 border border-gold/20 mb-8 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center text-gold shrink-0 mt-0.5">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-gold font-bold block mb-0.5">
                      Root Cause Analysis (RCA) & Risk Mitigation
                    </span>
                    <p className="text-sm font-semibold text-white mb-1">{activeModalProduct.rcaMethod}</p>
                    <p className="text-xs text-white/60">
                      Applied rigorous engineering governance methodologies to discover the root mechanism, eliminate failure modes, and prevent multi-million dollar regressions.
                    </p>
                  </div>
                </div>

                {/* System Layers Architecture Blueprint */}
                <div className="mb-8">
                  <h4 className="text-base font-serif font-bold text-white mb-4 flex items-center gap-2">
                    <Layers size={18} className="text-gold" />
                    System Anatomy & Architecture Layers
                  </h4>

                  <div className="grid gap-3">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-gold uppercase tracking-wider">
                          1. Hardware & Physical Protection Layer
                        </span>
                        <span className="text-[10px] text-white/40 uppercase tracking-widest">Hardware</span>
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed">
                        {activeModalProduct.systemLayers.hardware}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-gold uppercase tracking-wider">
                          2. Firmware & Deterministic Execution Layer
                        </span>
                        <span className="text-[10px] text-white/40 uppercase tracking-widest">Firmware</span>
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed">
                        {activeModalProduct.systemLayers.firmware}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-gold uppercase tracking-wider">
                          3. Protocols, Security & Telemetry Stack
                        </span>
                        <span className="text-[10px] text-white/40 uppercase tracking-widest">Protocols</span>
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed">
                        {activeModalProduct.systemLayers.protocols}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-gold uppercase tracking-wider">
                          4. Governance, Standards & Regulatory Audit
                        </span>
                        <span className="text-[10px] text-white/40 uppercase tracking-widest">Compliance</span>
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed">
                        {activeModalProduct.systemLayers.governance}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Standards & Technologies Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xs font-bold text-white/70 uppercase tracking-wider block mb-3">
                      Certified Standards & Frameworks
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeModalProduct.standards.map((std) => (
                        <span
                          key={std}
                          className="px-3 py-1 rounded-lg text-xs font-semibold bg-gold/10 text-gold border border-gold/20"
                        >
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xs font-bold text-white/70 uppercase tracking-wider block mb-3">
                      Technologies & Tools
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeModalProduct.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs bg-white/5 text-white/70 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Board-Level Takeaway */}
                <div className="p-4 rounded-xl bg-royal-blue/20 border border-royal-blue/30 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-1">
                      Fiduciary & Strategic Relevance
                    </span>
                    <p className="text-xs text-white/80">
                      Demonstrates hands-on mastery in evaluating technical risk, building privacy-first offline AI systems, and safeguarding shareholder value against software failure modes.
                    </p>
                  </div>
                  <a
                    href="#contact"
                    onClick={() => setActiveModalProduct(null)}
                    className="px-4 py-2 bg-gold hover:bg-gold-light text-charcoal font-bold text-xs rounded-lg transition-colors shrink-0"
                  >
                    Inquire for Advisory
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
