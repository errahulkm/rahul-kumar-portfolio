import { profileData } from '../data';
import { Linkedin, Mail, MapPin, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 bg-charcoal border-t border-white/10 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] rounded-full translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center font-serif text-charcoal font-bold text-xl">
                RK
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-white">Rahul Kumar</span>
            </div>
            <p className="text-white/50 leading-relaxed max-w-md mb-8">
              Engineering leader specializing in technical governance, R&D oversight, and product risk management for manufacturing and IoT companies. Board-ready independent director.
            </p>
            <div className="flex gap-4">
              <a 
                href={profileData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors text-white/60 hover:text-gold"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`mailto:${profileData.email}`} 
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors text-white/60 hover:text-gold"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Board Profile', 'Leadership Journey', 'Insights', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-white/40 hover:text-gold transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/40 text-sm">
                <MapPin size={18} className="text-gold shrink-0" />
                <span>{profileData.location}</span>
              </li>
              <li className="flex items-start gap-3 text-white/40 text-sm">
                <Mail size={18} className="text-gold shrink-0" />
                <a href={`mailto:${profileData.email}`} className="hover:text-gold transition-colors">{profileData.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/20 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Rahul Kumar • All Rights Reserved
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-white/40 hover:text-gold transition-colors text-xs uppercase tracking-widest"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold/50 transition-colors">
              <ChevronUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
