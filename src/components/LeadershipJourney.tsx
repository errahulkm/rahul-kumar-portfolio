import { motion } from 'motion/react';
import { profileData } from '../data';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export default function LeadershipJourney() {
  return (
    <section id="leadership-journey" className="py-24 bg-charcoal/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gold text-sm font-bold tracking-widest uppercase mb-4">Leadership Journey</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              A Career at the Intersection of <br />
              <span className="text-white/40 italic">Technology & Business Impact</span>
            </h3>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="timeline-line" />

          {/* Experience Items */}
          <div className="space-y-16">
            {profileData.experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 w-4 h-4 bg-gold rounded-full border-4 border-charcoal z-10 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />

                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass-card p-8 hover:bg-white/10 transition-all duration-500 border-l-4 border-l-gold md:border-l-0 md:border-r-4 md:border-r-gold">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <Calendar size={16} className="text-gold" />
                      <span className="text-gold font-medium text-sm tracking-widest uppercase">{exp.period}</span>
                    </div>
                    <h4 className="text-2xl font-serif font-bold mb-2">{exp.company}</h4>
                    <p className="text-white/80 font-medium mb-6">{exp.role}</p>
                    <ul className={`space-y-3 text-white/50 text-sm leading-relaxed ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex gap-3">
                          {index % 2 !== 0 && <div className="w-1.5 h-1.5 rounded-full bg-gold/40 mt-1.5 shrink-0" />}
                          <span>{highlight}</span>
                          {index % 2 === 0 && <div className="w-1.5 h-1.5 rounded-full bg-gold/40 mt-1.5 shrink-0" />}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <h4 className="text-2xl font-serif text-white/80">Educational Qualifications</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {profileData.education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-card p-8 flex items-start gap-6"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="text-gold" size={24} />
                  </div>
                  <div>
                    <p className="text-gold text-xs font-bold tracking-widest uppercase mb-1">{edu.period}</p>
                    <h5 className="text-lg font-serif font-bold mb-2">{edu.degree}</h5>
                    <p className="text-white/40 text-sm">{edu.institution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
