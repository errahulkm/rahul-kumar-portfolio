import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { profileData } from '../data';
import { Mail, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    inquiry: 'Board Appointment',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Using FormSubmit.co for reliable email delivery using the email directly
      const response = await fetch(`https://formsubmit.co/ajax/${profileData.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Board Inquiry: ${formData.name} from ${formData.organization}`,
          _template: 'table'
        })
      });

      const result = await response.json();

      if (response.ok && result.success === 'true') {
        setStatus('success');
        setFormData({ name: '', organization: '', email: '', inquiry: 'Board Appointment', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-gold" size={40} />
                </div>
                <h4 className="text-2xl font-serif mb-4">Message Sent Successfully</h4>
                <p className="text-white/60 mb-8">Thank you for reaching out. I will review your inquiry and get back to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 border border-gold text-gold rounded-lg hover:bg-gold hover:text-charcoal transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-white/40 font-medium">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-gold/50 focus:outline-none transition-colors"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/40 font-medium">Organization</label>
                    <input 
                      type="text" 
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-gold/50 focus:outline-none transition-colors"
                      placeholder="Company Name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/40 font-medium">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-gold/50 focus:outline-none transition-colors"
                    placeholder="name@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/40 font-medium">Nature of Inquiry</label>
                  <select 
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-gold/50 focus:outline-none transition-colors"
                  >
                    <option className="bg-charcoal">Board Appointment</option>
                    <option className="bg-charcoal">Advisory Role</option>
                    <option className="bg-charcoal">Technical Consulting</option>
                    <option className="bg-charcoal">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/40 font-medium">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-gold/50 focus:outline-none transition-colors"
                    placeholder="How can I assist your board?"
                  />
                </div>
                
                {status === 'error' && (
                  <div className="flex items-center gap-3 text-red-400 text-sm bg-red-400/10 p-4 rounded-lg border border-red-400/20">
                    <AlertCircle size={18} />
                    <p>Something went wrong. Please try again or email directly.</p>
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-gold text-charcoal font-bold rounded-lg hover:bg-gold-light transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
