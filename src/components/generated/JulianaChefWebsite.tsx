import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronDown, Instagram, Facebook, Menu, X } from 'lucide-react';
import AboutPage from './AboutPage';
import RetreatCateringPage from './RetreatCateringPage';
import TreatsBakesPage from './TreatsBakesPage';
import ContactPage from './ContactPage';
type JulianaChefWebsiteProps = {};
const navigation = [{
  name: 'About Juliana',
  href: '#about'
}, {
  name: 'Retreat Catering',
  href: '#offerings'
}, {
  name: 'Treats & Bakes',
  href: '#treats'
}, {
  name: 'Contact',
  href: '#contact'
}] as any[];
const testimonials = [{
  quote: "Juliana transformed our retreat experience. Her plant-based dishes were not only delicious but beautifully presented. Our guests couldn't stop raving about the food!",
  author: 'Sophie Martinez',
  location: 'Retreat Host, Portugal'
}, {
  quote: "Working with Chef Juliana was incredible. She brought creativity and passion to every meal, making our wellness retreat truly unforgettable.",
  author: 'Marcus Chen',
  location: 'Wellness Coordinator, Bali'
}, {
  quote: "The treats Juliana prepared were absolutely divine. Gluten-free, plant-based perfection that even our non-vegan guests adored.",
  author: 'Emma Thompson',
  location: 'Event Planner, UK'
}] as any[];
const faqs = [{
  question: "I'm based in the UK. Can you cater my retreat?",
  answer: "Yes! I cater retreats and events across the world and the UK. Travel costs may apply for certain locations."
}, {
  question: "How far ahead should I book your catering service?",
  answer: "I recommend booking at least 2-3 months in advance to ensure availability, especially for retreat seasons."
}, {
  question: "What if my guests have lots of different dietary needs?",
  answer: "I specialize in accommodating various dietary requirements. All my dishes are plant-based and can be adapted for allergies and preferences."
}, {
  question: "How do I know everything is vegan if I can't see it being made?",
  answer: "I provide full transparency with ingredient lists and preparation methods. You're welcome to observe the cooking process."
}, {
  question: "I work a lot and eat out. Are your treats actually healthy?",
  answer: "Yes! My treats use wholesome, natural ingredients without refined sugars. They're designed to nourish while satisfying your sweet tooth."
}] as any[];

// @component: JulianaChefWebsite
export const JulianaChefWebsite = (props: JulianaChefWebsiteProps) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [showRetreatCateringPage, setShowRetreatCateringPage] = useState(false);
  const [showTreatsBakesPage, setShowTreatsBakesPage] = useState(false);
  const [showContactPage, setShowContactPage] = useState(false);
  const {
    scrollY
  } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === '#about') {
      setShowAboutPage(true);
      setShowRetreatCateringPage(false);
      setShowTreatsBakesPage(false);
      setShowContactPage(false);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (href === '#offerings') {
      setShowRetreatCateringPage(true);
      setShowAboutPage(false);
      setShowTreatsBakesPage(false);
      setShowContactPage(false);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (href === '#treats') {
      setShowTreatsBakesPage(true);
      setShowAboutPage(false);
      setShowRetreatCateringPage(false);
      setShowContactPage(false);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (href === '#contact') {
      setShowContactPage(true);
      setShowAboutPage(false);
      setShowRetreatCateringPage(false);
      setShowTreatsBakesPage(false);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      setShowAboutPage(false);
      setShowRetreatCateringPage(false);
      setShowTreatsBakesPage(false);
      setShowContactPage(false);
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({
          behavior: 'smooth'
        });
      }, 100);
    }
  };
  const handleAboutNavigate = (section: string) => {
    setShowAboutPage(false);
    setShowRetreatCateringPage(false);
    setShowTreatsBakesPage(false);
    setShowContactPage(false);
    setTimeout(() => {
      document.querySelector(section)?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  };
  const handleRetreatNavigate = (section: string) => {
    setShowRetreatCateringPage(false);
    setShowAboutPage(false);
    setShowTreatsBakesPage(false);
    setShowContactPage(false);
    setTimeout(() => {
      document.querySelector(section)?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  };
  const handleTreatsNavigate = (section: string) => {
    setShowTreatsBakesPage(false);
    setShowAboutPage(false);
    setShowRetreatCateringPage(false);
    setShowContactPage(false);
    setTimeout(() => {
      document.querySelector(section)?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  };
  const handleContactNavigate = (section: string) => {
    setShowContactPage(false);
    setShowAboutPage(false);
    setShowRetreatCateringPage(false);
    setShowTreatsBakesPage(false);
    setTimeout(() => {
      document.querySelector(section)?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  };

  // If showing Contact page, render it with header and footer
  if (showContactPage) {
    return <div className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]">
        {/* Header */}
        <motion.header style={{
        opacity: headerOpacity
      }} className="fixed top-0 left-0 right-0 z-50 bg-[#5e7155]/95 backdrop-blur-sm" role="banner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              <button onClick={() => {
              setShowContactPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="flex items-center hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home">
                <img src="https://storage.googleapis.com/magicpoint-public-assets/user/300600264317087744/assets/0d9d49d2-8c2e-4b14-b09a-5b31e903e01f.png" alt="Juliana Lopes - The Vegan Chef" className="h-12 sm:h-14 w-auto object-contain" />
              </button>

              <nav className="hidden md:flex space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" style={{
                color: "#fcf2e3"
              }}>
                    {item.name}
                  </a>)}
              </nav>

              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu">
                {mobileMenuOpen ? <X className="w-6 h-6" style={{
                color: "#fcf2e3"
              }} /> : <Menu className="w-6 h-6" style={{
                color: "#fcf2e3"
              }} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-[#5e7155] border-t border-white/10">
              <nav className="px-4 py-4 space-y-2" role="navigation" aria-label="Mobile navigation">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
              e.preventDefault();
              handleNavClick(item.href);
            }} className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium" style={{
              color: "#fcf2e3"
            }}>
                    {item.name}
                  </a>)}
              </nav>
            </motion.div>}
        </motion.header>

        {/* Contact Page Content */}
        <div className="pt-16 sm:pt-20">
          <ContactPage onNavigate={handleContactNavigate} />
        </div>

        {/* Footer */}
        <footer className="bg-[#5e7155] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" role="contentinfo">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div className="text-center sm:text-left">
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" style={{
                color: "#fcf2e3"
              }}>Juliana</h3>
                <p className="text-white/80 text-xs sm:text-sm" style={{
                color: "#fcf2e3"
              }}>Plant-Based Retreat Chef</p>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{
                color: "#fcf2e3"
              }}>Quick Links</h4>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li>
                    <a href="#home" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#home');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#about');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }}>
                      About Juliana
                    </a>
                  </li>
                  <li>
                    <a href="#offerings" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#offerings');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }}>
                      Retreat Catering
                    </a>
                  </li>
                  <li>
                    <a href="#treats" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#treats');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }}>
                      Treats & Bakes
                    </a>
                  </li>
                  <li>
                    <a href="#contact" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }}>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{
                color: "#fcf2e3"
              }}>Connect</h4>
                <div className="flex space-x-4 justify-center sm:justify-start">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" style={{
                    color: "#fcf2e3"
                  }} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" style={{
                    color: "#fcf2e3"
                  }} />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60">
              <p style={{
              color: "#fcf2e3"
            }}>© 2024 Juliana the Vegan Chef. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>;
  }

  // If showing Treats & Bakes page, render it with header and footer
  if (showTreatsBakesPage) {
    return <div className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]">
        {/* Header */}
        <motion.header style={{
        opacity: headerOpacity
      }} className="fixed top-0 left-0 right-0 z-50 bg-[#5e7155]/95 backdrop-blur-sm" role="banner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              <button onClick={() => {
              setShowTreatsBakesPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="flex items-center hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home">
                <img src="https://storage.googleapis.com/magicpoint-public-assets/user/300600264317087744/assets/0d9d49d2-8c2e-4b14-b09a-5b31e903e01f.png" alt="Juliana Lopes - The Vegan Chef" className="h-12 sm:h-14 w-auto object-contain" />
              </button>

              <nav className="hidden md:flex space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" style={{
                color: "#fcf2e3"
              }}>
                    {item.name}
                  </a>)}
              </nav>

              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu">
                {mobileMenuOpen ? <X className="w-6 h-6" style={{
                color: "#fcf2e3"
              }} /> : <Menu className="w-6 h-6" style={{
                color: "#fcf2e3"
              }} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-[#5e7155] border-t border-white/10">
              <nav className="px-4 py-4 space-y-2" role="navigation" aria-label="Mobile navigation">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
              e.preventDefault();
              handleNavClick(item.href);
            }} className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium" style={{
              color: "#fcf2e3"
            }}>
                    {item.name}
                  </a>)}
              </nav>
            </motion.div>}
        </motion.header>

        {/* Treats & Bakes Page Content */}
        <div className="pt-16 sm:pt-20">
          <TreatsBakesPage onNavigate={handleTreatsNavigate} />
        </div>

        {/* Footer */}
        <footer className="bg-[#5e7155] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" role="contentinfo">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div className="text-center sm:text-left">
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" style={{
                color: "#fcf2e3"
              }}>Juliana</h3>
                <p className="text-white/80 text-xs sm:text-sm" style={{
                color: "#fcf2e3"
              }}>Plant-Based Retreat Chef</p>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{
                color: "#fcf2e3"
              }}>Quick Links</h4>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li>
                    <a href="#home" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#home');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#about');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }}>
                      About Juliana
                    </a>
                  </li>
                  <li>
                    <a href="#offerings" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#offerings');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }}>
                      Retreat Catering
                    </a>
                  </li>
                  <li>
                    <a href="#treats" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#treats');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }}>
                      Treats & Bakes
                    </a>
                  </li>
                  <li>
                    <a href="#contact" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }}>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{
                color: "#fcf2e3"
              }}>Connect</h4>
                <div className="flex space-x-4 justify-center sm:justify-start">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" style={{
                    color: "#fcf2e3"
                  }} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" style={{
                    color: "#fcf2e3"
                  }} />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60">
              <p style={{
              color: "#fcf2e3"
            }}>© 2024 Juliana the Vegan Chef. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>;
  }

  // If showing Retreat Catering page, render it with header and footer
  if (showRetreatCateringPage) {
    return <div className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]">
        {/* Header */}
        <motion.header style={{
        opacity: headerOpacity
      }} className="fixed top-0 left-0 right-0 z-50 bg-[#5e7155]/95 backdrop-blur-sm" role="banner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              <button onClick={() => {
              setShowRetreatCateringPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="flex items-center hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home">
                <img src="https://storage.googleapis.com/magicpoint-public-assets/user/300600264317087744/assets/0d9d49d2-8c2e-4b14-b09a-5b31e903e01f.png" alt="Juliana Lopes - The Vegan Chef" className="h-12 sm:h-14 w-auto object-contain" />
              </button>

              <nav className="hidden md:flex space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" style={{
                color: "#fcf2e3"
              }}>
                    {item.name}
                  </a>)}
              </nav>

              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu">
                {mobileMenuOpen ? <X className="w-6 h-6" style={{
                color: "#fcf2e3"
              }} /> : <Menu className="w-6 h-6" style={{
                color: "#fcf2e3"
              }} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-[#5e7155] border-t border-white/10">
              <nav className="px-4 py-4 space-y-2" role="navigation" aria-label="Mobile navigation">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
              e.preventDefault();
              handleNavClick(item.href);
            }} className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium" style={{
              color: "#fcf2e3"
            }}>
                    {item.name}
                  </a>)}
              </nav>
            </motion.div>}
        </motion.header>

        {/* Retreat Catering Page Content */}
        <div className="pt-16 sm:pt-20">
          <RetreatCateringPage onNavigate={handleRetreatNavigate} />
        </div>

        {/* Footer */}
        <footer className="bg-[#5e7155] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" role="contentinfo">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div className="text-center sm:text-left">
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" style={{
                color: "#fcf2e3"
              }}>Juliana</h3>
                <p className="text-white/80 text-xs sm:text-sm" style={{
                color: "#fcf2e3"
              }}>Plant-Based Retreat Chef</p>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{
                color: "#fcf2e3"
              }}>Quick Links</h4>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li>
                    <a href="#home" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#home');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#about');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }}>
                      About Juliana
                    </a>
                  </li>
                  <li>
                    <a href="#offerings" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#offerings');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }}>
                      Retreat Catering
                    </a>
                  </li>
                  <li>
                    <a href="#treats" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#treats');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }}>
                      Treats & Bakes
                    </a>
                  </li>
                  <li>
                    <a href="#contact" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }}>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{
                color: "#fcf2e3"
              }}>Connect</h4>
                <div className="flex space-x-4 justify-center sm:justify-start">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" style={{
                    color: "#fcf2e3"
                  }} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" style={{
                    color: "#fcf2e3"
                  }} />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60">
              <p style={{
              color: "#fcf2e3"
            }}>© 2024 Juliana the Vegan Chef. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>;
  }

  // If showing About page, render it with header and footer
  if (showAboutPage) {
    return <div className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]">
        {/* Header */}
        <motion.header style={{
        opacity: headerOpacity
      }} className="fixed top-0 left-0 right-0 z-50 bg-[#5e7155]/95 backdrop-blur-sm" role="banner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              <button onClick={() => {
              setShowAboutPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="flex items-center hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home">
                <img src="https://storage.googleapis.com/magicpoint-public-assets/user/300600264317087744/assets/0d9d49d2-8c2e-4b14-b09a-5b31e903e01f.png" alt="Juliana Lopes - The Vegan Chef" className="h-12 sm:h-14 w-auto object-contain" />
              </button>

              <nav className="hidden md:flex space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" style={{
                color: "#fcf2e3"
              }}>
                    {item.name}
                  </a>)}
              </nav>

              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu">
                {mobileMenuOpen ? <X className="w-6 h-6" style={{
                color: "#fcf2e3"
              }} /> : <Menu className="w-6 h-6" style={{
                color: "#fcf2e3"
              }} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-[#5e7155] border-t border-white/10">
              <nav className="px-4 py-4 space-y-2" role="navigation" aria-label="Mobile navigation">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
              e.preventDefault();
              handleNavClick(item.href);
            }} className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium" style={{
              color: "#fcf2e3"
            }}>
                    {item.name}
                  </a>)}
              </nav>
            </motion.div>}
        </motion.header>

        {/* About Page Content */}
        <div className="pt-16 sm:pt-20">
          <AboutPage onNavigate={handleAboutNavigate} />
        </div>

        {/* Footer */}
        <footer className="bg-[#5e7155] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" role="contentinfo">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div className="text-center sm:text-left">
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" style={{
                color: "#fcf2e3"
              }}>Juliana</h3>
                <p className="text-white/80 text-xs sm:text-sm" style={{
                color: "#fcf2e3"
              }}>Plant-Based Retreat Chef</p>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{
                color: "#fcf2e3"
              }}>Quick Links</h4>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li>
                    <a href="#home" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#home');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#about');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }}>
                      About Juliana
                    </a>
                  </li>
                  <li>
                    <a href="#offerings" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#offerings');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }}>
                      Retreat Catering
                    </a>
                  </li>
                  <li>
                    <a href="#treats" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#treats');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }}>
                      Treats & Bakes
                    </a>
                  </li>
                  <li>
                    <a href="#contact" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }}>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{
                color: "#fcf2e3"
              }}>Connect</h4>
                <div className="flex space-x-4 justify-center sm:justify-start">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" style={{
                    color: "#fcf2e3"
                  }} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" style={{
                    color: "#fcf2e3"
                  }} />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60">
              <p style={{
              color: "#fcf2e3"
            }}>© 2024 Juliana the Vegan Chef. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>;
  }

  // @return
  return <div className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]">
      {/* Mobile-First Header */}
      <motion.header style={{
      opacity: headerOpacity
    }} className="fixed top-0 left-0 right-0 z-50 bg-[#5e7155]/95 backdrop-blur-sm" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{
        background: "#5e7155"
      }}>
          <div className="flex items-center justify-between h-16 sm:h-20" style={{
          background: "#5e7155",
          outline: "0.8px solid rgb(94 113 85 / 0)",
          outlineStyle: "solid",
          outlineWidth: "0.8px",
          outlineColor: "rgb(94 113 85 / 0)",
          outlineOffset: "0px",
          color: "rgb(94 113 85 / 0)"
        }}>
            {/* Logo */}
            <button onClick={() => document.getElementById('home')?.scrollIntoView({
            behavior: 'smooth'
          })} className="flex items-center hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home">
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/300600264317087744/assets/deff7a85-6f9d-44a9-a015-f831a5396e4f.png" alt="Juliana Lopes - The Vegan Chef" className="h-12 sm:h-14 w-auto object-contain" style={{
              objectFit: "contain",
              objectPosition: "50% 50%",
              opacity: "1",
              outline: "none",
              outlineStyle: "none",
              outlineWidth: "0px",
              outlineColor: "oklab(0 0 0 / 0.1)",
              outlineOffset: "0px",
              color: "#5e7155",
              height: "70px"
            }} />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation">
              {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
              e.preventDefault();
              handleNavClick(item.href);
            }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" style={{
              color: "#fcf2e3",
              fontFamily: "Montserrat"
            }}>
                  {item.name}
                </a>)}
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="w-6 h-6" style={{
              color: "#fcf2e3"
            }} /> : <Menu className="w-6 h-6" style={{
              color: "#fcf2e3"
            }} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-[#5e7155] border-t border-white/10">
            <nav className="px-4 py-4 space-y-2" role="navigation" aria-label="Mobile navigation">
              {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
            e.preventDefault();
            handleNavClick(item.href);
          }} className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium" style={{
            color: "#fcf2e3"
          }}>
                  {item.name}
                </a>)}
            </nav>
          </motion.div>}
      </motion.header>

      {/* Hero Section - Mobile First */}
      <section id="home" className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden" role="main" aria-label="Hero section featuring plant-based retreat chef services">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        filter: 'brightness(0.7)',
        backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/300600264317087744/assets/665cd21b-9e06-4fcc-8e44-61ef845fae0e.png)",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "repeat",
        opacity: "1"
      }} />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl">
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 sm:mb-6 leading-tight" style={{
          color: "#fcf2e3"
        }}>
            Plant-Based Retreat Chef
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4" style={{
          color: "#fcf2e3",
          fontFamily: "Montserrat",
          fontWeight: "600"
        }}>Specialising in Transformational Food Experiences For Wellness Retreats Worldwide</motion.p>
          <motion.button initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="bg-[#5e7155] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-sm sm:text-base" onClick={() => {
          setShowContactPage(true);
          setShowAboutPage(false);
          setShowRetreatCateringPage(false);
          setShowTreatsBakesPage(false);
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }} style={{
          background: "#c76942",
          color: "#fcf2e3",
          fontFamily: "Montserrat",
          fontWeight: "600"
        }}>
            Book Your Retreat Catering
          </motion.button>
        </div>
      </section>

      {/* About Section - Mobile First */}
      <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" style={{
      background: "#fcf2e3"
    }} aria-labelledby="about-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="about-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#2D2D2D]" style={{
          color: "#404d3a"
        }}>
            Meet Your Chef
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/300600264317087744/assets/ba3e07e1-150a-4e48-b1c9-9383828fc6ce.png" alt="Chef Juliana smiling in her kitchen, preparing plant-based dishes" className="w-full rounded-lg shadow-lg" style={{
              objectFit: "fill",
              objectPosition: "50% 50%",
              opacity: "1"
            }} />
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2D2D]" style={{
              color: "#404d3a",
              textAlign: "center",
              justifyContent: "center",
              fontFamily: "Montserrat"
            }}>Hi, I'm Juliana!</h3>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              textAlign: "center",
              justifyContent: "center"
            }}>
                I'm a passionate plant-based chef with over 8 years of culinary experience. I built my business and brand on creating nourishing, delicious plant-based meals for wellness retreats around the world.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              textAlign: "center",
              justifyContent: "center"
            }}>
                What truly fuels my culinary passion is not just food itself but the transformative power it has to bring people together and foster genuine connections. I believe food has the unique ability to create shared experiences that inspire, heal, and unite us.
              </p>
              <button className="bg-[#5e7155] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-sm sm:text-base flex mx-auto" onClick={() => setShowAboutPage(true)} style={{
              textAlign: "center",
              justifyContent: "center",
              fontFamily: "Montserrat",
              fontWeight: "600"
            }}>
                Read My Full Story
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offerings Section - Mobile First */}
      <section id="offerings" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" aria-labelledby="offerings-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="offerings-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#5e7155]" style={{
          color: "#c76942"
        }}>
            My Offerings
          </h2>

          {/* Retreat Catering */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2D2D]" style={{
              color: "#404d3a",
              fontFamily: "Montserrat"
            }}>Retreat & Event Catering</h3>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" style={{
              color: "#404d3a",
              textAlign: "center",
              justifyContent: "center",
              fontFamily: "Montserrat"
            }}>
                Custom plant-based menus for retreats, and events across Ireland and the UK.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" style={{
              color: "#404d3a",
              textAlign: "center",
              justifyContent: "center",
              fontFamily: "Montserrat"
            }}>
                Every dish is made with stunning presentation and extraordinary ingredients.
              </p>
              <button className="bg-[#5e7155] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-sm sm:text-base flex mx-auto" onClick={() => {
              setShowRetreatCateringPage(true);
              setShowAboutPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} style={{
              background: "#c76942",
              fontFamily: "Montserrat",
              fontWeight: "600"
            }}>
                Find Out More
              </button>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="flex justify-center">
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/300600264317087744/assets/57e9f442-497a-4c95-baa9-b4df09cab964.png" alt="Beautifully plated gourmet plant-based dish with colorful vegetables" className="w-full rounded-lg shadow-lg" style={{
              minHeight: "500px",
              maxWidth: "450px",
              objectFit: "cover",
              objectPosition: "50% 100%",
              opacity: "1"
            }} />
            </motion.div>
          </div>

          {/* Plant-Based Treats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="space-y-4 sm:space-y-6 order-1 md:order-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2D2D]" style={{
              color: "#404d3a",
              fontFamily: "Montserrat"
            }}>Plant-Based Treats</h3>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" style={{
              color: "#404d3a",
              fontFamily: "Montserrat",
              textAlign: "center",
              justifyContent: "center"
            }}>
                Fresh-baked, gluten-friendly, plant-based treats made to order just for you.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" style={{
              color: "#404d3a",
              fontFamily: "Montserrat",
              textAlign: "center",
              justifyContent: "center"
            }}>
                Order Weekly Fridays 5am-9am. Collection in Dun Laoghaire or Weekly Pop-up Cake Stall.
              </p>
              <button className="bg-[#5e7155] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-sm sm:text-base flex mx-auto" onClick={() => {
              setShowTreatsBakesPage(true);
              setShowAboutPage(false);
              setShowRetreatCateringPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} style={{
              background: "#c76942",
              fontFamily: "Montserrat",
              fontWeight: "600"
            }}>
                See Treats Menu
              </button>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="flex justify-center order-2 md:order-1">
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/300600264317087744/assets/29367085-1af0-41c6-a000-7e7ffe3ff643.jpg" alt="Decadent plant-based dessert with rich chocolate layers" className="w-full rounded-lg shadow-lg" style={{
              objectFit: "cover",
              objectPosition: "50% 50%",
              opacity: "1",
              minHeight: "500px",
              maxWidth: "450px"
            }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treats & Bakes Section - Mobile First */}
      <section id="treats" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" style={{
      background: "#fcf2e3",
      display: "none"
    }} aria-labelledby="treats-heading">
        <div className="max-w-6xl mx-auto" style={{
        display: "none"
      }}>
          <h2 id="treats-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#5e7155]" style={{
          display: "none"
        }}>
            Treats & Bakes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80" alt="Chocolate brownies" className="w-full h-48 object-cover" />
              <div className="p-4 sm:p-6">
                <h4 className="text-lg font-semibold text-[#2D2D2D] mb-2">Fudgy Brownies</h4>
                <p className="text-[#4A4A4A] text-sm">
                  Rich, decadent, and impossibly fudgy. Made with premium dark chocolate and a secret ingredient.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80" alt="Cinnamon rolls" className="w-full h-48 object-cover" />
              <div className="p-4 sm:p-6">
                <h4 className="text-lg font-semibold text-[#2D2D2D] mb-2">Cinnamon Rolls</h4>
                <p className="text-[#4A4A4A] text-sm">
                  Soft, pillowy rolls swirled with cinnamon and topped with creamy glaze. Pure comfort in every bite.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80" alt="Cookies" className="w-full h-48 object-cover" />
              <div className="p-4 sm:p-6">
                <h4 className="text-lg font-semibold text-[#2D2D2D] mb-2">Signature Cookies</h4>
                <p className="text-[#4A4A4A] text-sm">
                  Crispy edges, chewy centers. From chocolate chip to oatmeal raisin, there's a cookie for everyone.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Mobile First */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#5e7155]" aria-labelledby="testimonials-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="testimonials-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-white" style={{
          color: "#fcf2e3"
        }}>
            What People Say
          </h2>
          <div className="relative">
            <motion.div key={currentTestimonial} initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: -50
          }} transition={{
            duration: 0.5
          }} className="bg-white rounded-lg p-6 sm:p-8 md:p-12 shadow-xl" style={{
            color: "#fcf2e3",
            background: "#fcf2e3"
          }}>
              <p className="text-[#4A4A4A] text-base sm:text-lg md:text-xl leading-relaxed mb-6 italic" style={{
              color: "#404d3a",
              fontFamily: "Montserrat"
            }}>
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#2D2D2D] text-sm sm:text-base" style={{
                  color: "#404d3a",
                  fontFamily: "Montserrat"
                }}>
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-[#5e7155] text-xs sm:text-sm">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center mt-6 sm:mt-8 space-x-3 sm:space-x-4">
              <button onClick={prevTestimonial} className="bg-white text-[#5e7155] p-2 rounded-full hover:bg-[#F5F1E8] transition-colors" aria-label="Previous testimonial" style={{
              background: "#fcf2e3"
            }}>
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" style={{
                background: "#fcf2e3"
              }} />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentTestimonial(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentTestimonial ? 'bg-white' : 'bg-white/40'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
              </div>
              <button onClick={nextTestimonial} className="bg-white text-[#5e7155] p-2 rounded-full hover:bg-[#F5F1E8] transition-colors" aria-label="Next testimonial" style={{
              background: "#fcf2e3"
            }}>
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" style={{
                background: "#fcf2e3"
              }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section - Mobile First */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" style={{
      background: "#fcf2e3"
    }} aria-labelledby="faqs-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="faqs-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#2D2D2D]" style={{
          color: "#404d3a"
        }}>
            FAQs
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.4,
            delay: index * 0.1
          }} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-[#F5F1E8] transition-colors" style={{
              color: "#404d3a"
            }}>
                  <span className="font-semibold text-[#2D2D2D] pr-4 text-sm sm:text-base" style={{
                color: "#404d3a",
                fontFamily: "Montserrat"
              }}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#5e7155] transition-transform flex-shrink-0 ${expandedFaq === index ? 'transform rotate-180' : ''}`} />
                </button>
                {expandedFaq === index && <motion.div initial={{
              height: 0
            }} animate={{
              height: 'auto'
            }} exit={{
              height: 0
            }} transition={{
              duration: 0.3
            }} className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                  </motion.div>}
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Contact Section - Mobile First */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" aria-labelledby="contact-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="contact-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-[#2D2D2D]" style={{
          color: "#c76942"
        }}>
            Let's Work Together!
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#5e7155] mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4" style={{
          fontFamily: "Montserrat",
          fontWeight: "500"
        }}>
            Food is how I show care. Let me be part of creating something meaningful for your retreat, event, or simply your week.
          </p>
          <button onClick={() => {
          setShowContactPage(true);
          setShowAboutPage(false);
          setShowRetreatCateringPage(false);
          setShowTreatsBakesPage(false);
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }} className="bg-[#5e7155] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-base sm:text-lg" style={{
          background: "#404d3a",
          fontFamily: "Montserrat",
          fontWeight: "600"
        }}>
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer - Mobile First */}
      <footer className="bg-[#5e7155] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" style={{
      color: "#fcf2e3"
    }} role="contentinfo">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="text-center sm:text-left">
              <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4">Juliana</h3>
              <p className="text-white/80 text-xs sm:text-sm" style={{
              color: "#fcf2e3",
              fontFamily: "Montserrat"
            }}>Plant-Based Retreat Chef</p>
            </div>
            <div className="text-center sm:text-left" style={{
            color: "#fcf2e3"
          }}>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{
              fontFamily: "Montserrat"
            }}>Quick Links</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li style={{
                fontFamily: "Montserrat"
              }}>
                  <a href="#home" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#home');
                }} className="text-white/80 hover:text-white transition-colors" style={{
                  color: "#fcf2e3"
                }}>
                    Home
                  </a>
                </li>
                <li style={{
                fontFamily: "Montserrat"
              }}>
                  <a href="#about" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#about');
                }} className="text-white/80 hover:text-white transition-colors" style={{
                  color: "#fcf2e3"
                }}>
                    About Juliana
                  </a>
                </li>
                <li>
                  <a href="#offerings" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#offerings');
                }} className="text-white/80 hover:text-white transition-colors" style={{
                  color: "#fcf2e3",
                  fontFamily: "Montserrat"
                }}>
                    Retreat Catering
                  </a>
                </li>
                <li style={{
                fontFamily: "Montserrat"
              }}>
                  <a href="#treats" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#treats');
                }} className="text-white/80 hover:text-white transition-colors" style={{
                  color: "#fcf2e3"
                }}>
                    Treats & Bakes
                  </a>
                </li>
                <li style={{
                color: "#fcf2e3",
                fontFamily: "Montserrat"
              }}>
                  <a href="#contact" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }} className="text-white/80 hover:text-white transition-colors" style={{
                  color: "#fcf2e3"
                }}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{
              fontFamily: "Montserrat"
            }}>Connect</h4>
              <div className="flex space-x-4 justify-center sm:justify-start">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" style={{
                  color: "#fcf2e3"
                }} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" style={{
                  color: "#fcf2e3"
                }} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60">
            <p style={{
            color: "#fcf2e3",
            fontFamily: "Montserrat"
          }}>© 2024 Juliana the Vegan Chef. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};