import { motion } from 'motion/react';
import { profileData } from '../data';
import { Mail, Linkedin, Send, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-charcoal/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gold text-sm font-bold tracking-widest uppercase mb-4">Contact</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Initiate a <br />
              <span className="text-white/40 italic">Board-Level Conversation</span>
            </h3>
            <p className="text-xl text-white/60 leading-relaxed mb-12 font-light">
              Available for Independent Director roles, Advisory Board positions, and Technical Governance consulting for manufacturing SMEs and technology startups.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail className="text-gold" size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Direct Email</p>
                  <a href={`mailto:${profileData.email}`} className="text-xl font-serif hover:text-gold transition-colors">{profileData.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Linkedin className="text-gold" size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Professional Network</p>
                  <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="text-xl font-serif hover:text-gold transition-colors">LinkedIn Profile</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border border-white/10"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/40 font-medium">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-gold/50 focus:outline-none transition-colors"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/40 font-medium">Organization</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-gold/50 focus:outline-none transition-colors"
                    placeholder="Company Name"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/40 font-medium">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-gold/50 focus:outline-none transition-colors"
                  placeholder="name@company.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/40 font-medium">Nature of Inquiry</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-gold/50 focus:outline-none transition-colors">
                  <option className="bg-charcoal">Board Appointment</option>
                  <option className="bg-charcoal">Advisory Role</option>
                  <option className="bg-charcoal">Technical Consulting</option>
                  <option className="bg-charcoal">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/40 font-medium">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-gold/50 focus:outline-none transition-colors"
                  placeholder="How can I assist your board?"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-gold text-charcoal font-bold rounded-lg hover:bg-gold-light transition-all flex items-center justify-center gap-3 group"
              >
                Send Inquiry
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
