import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BoardProfile from './components/BoardProfile';
import LeadershipJourney from './components/LeadershipJourney';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  useEffect(() => {
    document.title = "Rahul Kumar | Board-Ready Independent Director | Technical Governance Expert";
    
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-charcoal selection:bg-gold selection:text-charcoal">
      {/* SEO Optimized Semantic Structure */}
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <BoardProfile />
        <LeadershipJourney />
        <Insights />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
