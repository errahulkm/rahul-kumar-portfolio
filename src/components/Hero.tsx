import { useState } from 'react';
import { motion } from 'motion/react';
import { profileData } from '../data';
import { Linkedin, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [imgSrc, setImgSrc] = useState('/profile.jpg');
  const [hasTriedPng, setHasTriedPng] = useState(false);

  const handleImageError = () => {
    if (!hasTriedPng) {
      setImgSrc('/profile.png');
      setHasTriedPng(true);
    } else {
      // If both fail, don't fallback to external sources
      // Just keep the broken state or a local placeholder if we had one
      console.error("Profile image not found in public folder.");
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-royal-blue/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gold/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            Board-Ready Independent Director
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Rahul <span className="gold-gradient">Kumar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 font-light mb-8 max-w-xl leading-relaxed">
            {profileData.subHeadline}
          </p>

          <div className="flex flex-wrap gap-6 mb-12">
            <div className="flex items-center gap-2 text-white/60">
              <MapPin size={18} className="text-gold" />
              <span>{profileData.location}</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Linkedin size={18} className="text-gold" />
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">LinkedIn Profile</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-gold text-charcoal font-semibold rounded-lg hover:bg-gold-light transition-all flex items-center justify-center gap-2 group"
            >
              Request Board Profile
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#board-profile" 
              className="px-8 py-4 border border-white/20 hover:border-gold/50 transition-all rounded-lg flex items-center justify-center"
            >
              View Competencies
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src={imgSrc} 
              alt="Rahul Kumar - Board-Ready Independent Director"
              className="w-full aspect-[4/5] object-cover hover:scale-105 transition-all duration-700"
              onError={handleImageError}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-gold/30 rounded-tr-3xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-gold/30 rounded-bl-3xl" />
          
          <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden xl:block">
            <div className="glass-card p-6 rotate-90 origin-left">
              <p className="text-gold font-serif tracking-widest uppercase text-xs">Governance • Risk • Strategy</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
