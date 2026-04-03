import { motion } from 'motion/react';
import { profileData } from '../data';
import * as Icons from 'lucide-react';

export default function BoardProfile() {
  return (
    <section id="board-profile" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#D4AF37_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-gold text-sm font-bold tracking-widest uppercase mb-4">Board Profile</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Strategic Governance & <br />
              <span className="text-white/40 italic">Technical Oversight</span>
            </h3>
            <p className="text-xl text-white/60 leading-relaxed font-light">
              Bridging the critical gap between technical execution and fiduciary responsibility. I provide boards with the engineering depth required to evaluate product integrity, manufacturing quality, and technological risk.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profileData.competencies.map((comp, index) => {
            const IconComponent = (Icons as any)[comp.icon] || Icons.Shield;
            return (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 group hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-royal-blue/30 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <IconComponent className="text-gold" size={28} />
                </div>
                <h4 className="text-xl font-serif font-bold mb-4 group-hover:text-gold transition-colors">{comp.title}</h4>
                <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                  {comp.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Value Proposition Grid */}
        <div className="mt-24 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-l-4 border-l-gold"
          >
            <h4 className="text-2xl font-serif mb-6">Why Technical Governance?</h4>
            <p className="text-white/60 leading-relaxed mb-6">
              Most boards lack the engineering depth to evaluate product risk, software integrity, or manufacturing quality until a crisis hits. I bring that depth—rooted in hands-on experience with DFMEA, stress analysis, and production optimization.
            </p>
            <ul className="space-y-4">
              {['Independent Risk Governance', 'R&D Fiduciary Oversight', 'AI ROI Assessment', 'Regulatory Moat Strategy'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/80">
                  <Icons.CheckCircle2 size={18} className="text-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="glass-card p-8 text-center">
              <p className="text-4xl font-serif text-gold mb-2">13+</p>
              <p className="text-xs uppercase tracking-widest text-white/40">Years Experience</p>
            </div>
            <div className="glass-card p-8 text-center">
              <p className="text-4xl font-serif text-gold mb-2">5+</p>
              <p className="text-xs uppercase tracking-widest text-white/40">Safety-Critical Products</p>
            </div>
            <div className="glass-card p-8 text-center">
              <p className="text-4xl font-serif text-gold mb-2">20+</p>
              <p className="text-xs uppercase tracking-widest text-white/40">Team Members Led</p>
            </div>
            <div className="glass-card p-8 text-center">
              <p className="text-4xl font-serif text-gold mb-2">100%</p>
              <p className="text-xs uppercase tracking-widest text-white/40">Regulatory Adherence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
