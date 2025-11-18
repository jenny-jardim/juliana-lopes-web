import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { Instagram, Facebook, Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

interface LayoutProps {
  children: React.ReactNode;
  navigation: NavItem[];
  handleNavClick: (href: string) => void;
  onLogoClick: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  headerOpacity: MotionValue<number>;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  navigation,
  handleNavClick,
  onLogoClick,
  mobileMenuOpen,
  setMobileMenuOpen,
  headerOpacity,
}) => {
  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]">
      <motion.header
        style={{ opacity: headerOpacity }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#5e7155]"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button onClick={onLogoClick} className="flex items-center hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home">
              <img src="/images/logo.png" alt="Juliana Lopes - The Vegan Chef" className="h-12 sm:h-14 w-auto object-contain" style={{ height: "70px" }} />
            </button>

            <nav className="hidden md:flex space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation">
              {navigation.map(item => (
                <a key={item.name} href={item.href} onClick={e => { e.preventDefault(); handleNavClick(item.href); }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" style={{ color: "#fcf2e3", fontFamily: "Montserrat" }}>
                  {item.name}
                </a>
              ))}
            </nav>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="w-6 h-6" style={{ color: "#fcf2e3" }} /> : <Menu className="w-6 h-6" style={{ color: "#fcf2e3" }} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#5e7155] border-t border-white/10">
            <nav className="px-4 py-4 space-y-2" role="navigation" aria-label="Mobile navigation">
              {navigation.map(item => (
                <a key={item.name} href={item.href} onClick={e => { e.preventDefault(); handleNavClick(item.href); }} className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium" style={{ color: "#fcf2e3", fontFamily: "Montserrat" }}>
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </motion.header>

      <div className="pt-20">
        {children}
      </div>

      <footer className="bg-[#5e7155] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" role="contentinfo">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="text-center sm:text-left">
              <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" style={{ color: "#fcf2e3" }}>Juliana</h3>
              <p className="text-white/80 text-xs sm:text-sm" style={{ color: "#fcf2e3", fontFamily: "Montserrat" }}>Plant-Based Retreat Chef</p>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: "#fcf2e3", fontFamily: "Montserrat" }}>Quick Links</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                {[{ name: 'Home', href: '#home' }, ...navigation].map(item => (
                  <li key={item.name} style={{ fontFamily: "Montserrat" }}>
                    <a href={item.href} onClick={e => { e.preventDefault(); handleNavClick(item.href); }} className="text-white/80 hover:text-white transition-colors" style={{ color: "#fcf2e3" }}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{ fontFamily: "Montserrat" }}>Connect</h4>
              <div className="flex space-x-4 justify-center sm:justify-start">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#fcf2e3" }} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#fcf2e3" }} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60">
            <p style={{ color: "#fcf2e3", fontFamily: "Montserrat" }}>© 2024 Juliana the Vegan Chef. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};