import { motion } from 'motion/react';
import { profileData } from '../data';
import { Quote, ArrowRight } from 'lucide-react';

export default function Insights() {
  return (
    <section id="insights" className="py-24 bg-charcoal relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gold text-sm font-bold tracking-widest uppercase mb-4">Insights & Vision</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Thought Leadership for the <br />
              <span className="text-white/40 italic">Modern Boardroom</span>
            </h3>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {profileData.insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-12 relative group hover:bg-white/10 transition-all duration-500"
            >
              <Quote className="absolute top-8 right-8 text-gold/20 group-hover:text-gold/40 transition-colors" size={64} />
              <h4 className="text-2xl font-serif font-bold mb-6 group-hover:text-gold transition-colors leading-snug">
                {insight.title}
              </h4>
              <p className="text-xl text-white/50 font-light leading-relaxed mb-10 italic">
                "{insight.excerpt}"
              </p>
              <button className="flex items-center gap-3 text-gold font-medium group/btn">
                Read Full Perspective
                <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Board-Level Perspective Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 glass-card p-12 bg-gradient-to-r from-royal-blue/20 to-gold/10 border-gold/20 flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <div className="max-w-2xl">
            <h4 className="text-3xl font-serif mb-4">The Engineering Depth Boards Lack</h4>
            <p className="text-white/60 leading-relaxed">
              Technical failures are board-level fiduciary risks. I specialize in governance for technology-driven companies: manufacturing firms scaling through Industry 4.0, IoT ventures connecting hardware to cloud, and family businesses transitioning to data-driven decision-making.
            </p>
          </div>
          <a 
            href="#contact" 
            className="px-10 py-5 bg-gold text-charcoal font-bold rounded-lg hover:bg-gold-light transition-all whitespace-nowrap shadow-xl shadow-gold/10"
          >
            Connect for Advisory
          </a>
        </motion.div>
      </div>
    </section>
  );
}
