"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, AlertCircle, Check, MessageCircle } from 'lucide-react';
export interface TreatsBakesPageProps {
  onNavigate?: (section: string) => void;
}
export default function TreatsBakesPage({
  onNavigate
}: TreatsBakesPageProps) {
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);
  const menuItems = [{
    name: "Cheese Cakes",
    description: "Dates, nuts, natural ingredients. Perfect for celebrations",
    image: "/images/menu/cheese-cakes.jpg"
  }, {
    name: "Brownies",
    description: "Rich, satisfying, completely plant-based",
    image: "/images/menu/brownies.jpg"
  }, {
    name: "Cookies",
    description: "Crispy edges, chewy centers, pure comfort",
    image: "/images/menu/cookies.jpg"
  }, {
    name: "Blondies",
    description: "Golden, buttery, irresistibly sweet",
    image: "/images/menu/blondies.jpg"
  }, {
    name: "Seasonal Treats",
    description: "Panettones (December) and seasonal specialties",
    image: "/images/menu/seasonal-treats.jpg"
  }, {
    name: "Custom Orders",
    description: "Corporate gifts, event platters, dietary needs—just ask",
    image: "/images/menu/custom-orders.jpg"
  }] as any[];
  const faqs = [{
    question: "How long do treats stay fresh?",
    answer: "5-7 days when stored properly. Storage instructions included."
  }, {
    question: "Minimum order?",
    answer: "Depends on what you want—reach out and we'll figure it out."
  }, {
    question: "Corporate gifts?",
    answer: "Absolutely. It's a thoughtful, homemade way to show appreciation."
  }, {
    question: "Custom flavors?",
    answer: "Yes! Tell me what you're craving."
  }, {
    question: "Why the higher price?",
    answer: "Fresh baked, whole ingredients, genuine care. No mass production. Worth every penny."
  }, {
    question: "Serious allergies?",
    answer: "Yes, I work with you safely."
  }] as any[];
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const nextMenuItem = () => {
    setCurrentMenuIndex(prev => (prev + 1) % menuItems.length);
  };
  const prevMenuItem = () => {
    setCurrentMenuIndex(prev => (prev - 1 + menuItems.length) % menuItems.length);
  };
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // WhatsApp link - Update with Juliana's actual phone number
  const handleWhatsAppOrder = () => {
    const phoneNumber = "353871234567"; // Replace with actual number
    const message = encodeURIComponent("Hi Juliana! I'd like to place an order for Pep Me Up treats.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  return <div className="min-h-screen bg-[#FCF2E3]" style={{ fontFamily: 'Montserrat' }}>
      {/* Hero Section with Pep Me Up Logo - Redesigned */}
      <section className="relative py-8 sm:py-12 px-4 sm:px-6 bg-[#FCF2E3]" role="banner" aria-label="Pep Me Up treats and bakes hero section">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8 items-center">
            {/* Left: Logo */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} className="flex justify-center">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64">
                <img src="/images/pep-me-up-logo.png" alt="Pep Me Up logo - plant-based gluten-free treats" className="w-full h-full object-contain filter drop-shadow-2xl" />
              </div>
            </motion.div>

            {/* Right: Headline and Text */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="text-center">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#C76942] mb-4 leading-tight">
                Treat Yourself Better!
              </h1>
              <p className="text-lg sm:text-xl text-[#404d3a] leading-relaxed">
                My treats are baked fresh to order, made from wholesome ingredients, and created with the intention that you feel cared for and included.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Carousel Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#FCF2E3]" aria-labelledby="menu-heading">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-6 sm:p-8">
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
              }} className="text-center mb-8" style={{ color: "#c76942" }}>
                <h2 id="menu-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#C76942] mb-4">
                  Menu
                </h2>
                <p className="text-[#404d3a] text-lg">Explore our delicious treats</p>
              </motion.div>
            </div>
            <div className="relative">
              <div className="relative h-80 sm:h-96 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div key={currentMenuIndex} initial={{
                    opacity: 0,
                    x: 100
                  }} animate={{
                    opacity: 1,
                    x: 0
                  }} exit={{
                    opacity: 0,
                    x: -100
                  }} transition={{
                    duration: 0.4
                  }} className="absolute inset-0">
                    <img src={menuItems[currentMenuIndex].image} alt={`${menuItems[currentMenuIndex].name} - ${menuItems[currentMenuIndex].description}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button onClick={prevMenuItem} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#C17857] p-3 rounded-full shadow-lg transition-all z-10" aria-label="Previous item">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={nextMenuItem} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#C17857] p-3 rounded-full shadow-lg transition-all z-10" aria-label="Next item">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 bg-white">
                <AnimatePresence mode="wait">
                  <motion.div key={currentMenuIndex} initial={{
                    opacity: 0,
                    y: 20
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} exit={{
                    opacity: 0,
                    y: -20
                  }} transition={{
                    duration: 0.3
                  }}>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#2D2D2D] mb-3">
                      {menuItems[currentMenuIndex].name}
                    </h3>
                    <p className="text-[#404d3a] text-base sm:text-lg leading-relaxed">
                      {menuItems[currentMenuIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                  {menuItems.map((_, index) => <button key={index} onClick={() => setCurrentMenuIndex(index)} className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentMenuIndex ? 'bg-[#C17857] w-8' : 'bg-[#C17857]/30 hover:bg-[#C17857]/50'}`} aria-label={`Go to item ${index + 1}`} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white" aria-labelledby="how-to-order-heading">
        <div className="max-w-4xl mx-auto">
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
            <h2 id="how-to-order-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#C76942] mb-12 text-center">
              How to Order
            </h2>
            
            {/* Ordering Steps */}
            <div className="mb-12 space-y-8">
              <h3 className="text-2xl font-semibold text-[#C17857] mb-6 text-center">
                How to place your order:
              </h3>
              
              {/* Step 1 */}
              <div className="bg-[#FCF2E3] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-2">
                      Choose the base for your pie
                    </h4>
                    <p className="text-[#404d3a]">Raw or Biscuit</p>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="bg-[#FCF2E3] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-2">
                      Your favourite flavour (one or more)!
                    </h4>
                  </div>
                </div>
              </div>
              
              {/* Step 3 - Sizes & Pricing */}
              <div className="bg-[#FCF2E3] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-4">
                      The size of your treat:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                        <span className="text-[#2D2D2D] font-medium">Pie in a Tub</span>
                        <span className="text-[#C17857] font-bold text-lg">€7</span>
                      </div>
                      <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                        <span className="text-[#2D2D2D] font-medium">13 cm</span>
                        <span className="text-[#C17857] font-bold text-lg">€13</span>
                      </div>
                      <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                        <span className="text-[#2D2D2D] font-medium">16 cm</span>
                        <span className="text-[#C17857] font-bold text-lg">€25</span>
                      </div>
                      <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                        <span className="text-[#2D2D2D] font-medium">20 cm</span>
                        <span className="text-[#C17857] font-bold text-lg">€35</span>
                      </div>
                      <div className="bg-white rounded-lg p-4 flex justify-between items-center sm:col-span-2">
                        <span className="text-[#2D2D2D] font-medium">25 cm</span>
                        <span className="text-[#C17857] font-bold text-lg">€45</span>
                      </div>
                    </div>
                    <p className="text-[#404d3a] mt-4 text-center italic">
                      Get in touch for info on slices gift boxes!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact & Delivery Info with WhatsApp */}
            <div className="bg-[#C17857] text-white rounded-xl p-8 sm:p-10 text-center">
              <p className="text-xl sm:text-2xl font-semibold mb-4">
                Place Your Order:
              </p>
              <p className="text-lg sm:text-xl mb-6">Monday–Friday, 10am–5pm</p>
              
              {/* WhatsApp Order Button - Styled to match CTA */}
              <button onClick={handleWhatsAppOrder} className="bg-white text-[#C17857] px-8 sm:px-10 py-4 rounded-full hover:bg-[#F5F1E8] transition-colors font-semibold text-base sm:text-lg shadow-xl flex items-center justify-center gap-3 mx-auto mb-6">
                <MessageCircle className="w-5 h-5" />
                Order via WhatsApp
              </button>
              
              <div className="space-y-3 text-left max-w-xl mx-auto">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-lg font-semibold mb-1">Collection:</p>
                  <p className="text-white/90">Dun Laoghaire, County Dublin</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-lg font-semibold mb-1">Saturday Delivery:</p>
                  <p className="text-white/90">Dublin City Centre</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Pep Me Up Section */}
      <main>
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white" aria-labelledby="why-pep-me-up-heading">
        <div className="max-w-4xl mx-auto">
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
          }} className="text-center mb-12" style={{ color: "#c76942" }}>
            <h2 id="why-pep-me-up-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#C76942] mb-6">
              Why Pep Me Up
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {["Baked fresh, never mass-produced", "Whole ingredients, real nutrition", "Plant-based & gluten-friendly always", "Homemade feeling, professional quality", "A reminder that you're worth the care"].map((benefit, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="flex items-start gap-3 bg-[#F5F1E8] p-4 rounded-lg">
                <Check className="w-6 h-6 text-[#C17857] flex-shrink-0 mt-1" />
                <p className="text-[#404d3a] text-base sm:text-lg">{benefit}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Safety & Allergy Notice - Compact Version */}
      <section className="pb-16 pt-4 sm:pt-6 px-4 sm:px-6 bg-white" aria-labelledby="safety-heading">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="bg-white border-2 border-[#C17857] rounded-lg p-5">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#C17857] flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h3 id="safety-heading" className="text-lg font-semibold text-[#2D2D2D] mb-1">
                  Safety Comes First
                </h3>
                <p className="text-[#404d3a] text-sm mb-2">
                  Check with your GP doctor about being okay with gluten traces.
                </p>
                <p className="text-[#404d3a] text-sm">
                  <span className="font-semibold">Allergies:</span> Nuts (cashew, pecan, walnuts, almonds, hazelnuts, Brazil nuts, pistachio nuts, macadamia nuts), peanuts and soya.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#FCF2E3]" aria-labelledby="faqs-heading">
        <div className="max-w-3xl mx-auto">
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
          }} className="text-center mb-12" style={{ color: "#c76942" }}>
            <h2 id="faqs-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#C76942] mb-4">
              Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
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
              delay: index * 0.05
            }} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-[#FFF4ED] transition-colors">
                  <span className="font-semibold text-[#404d3a] pr-4 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronRight className={`w-5 h-5 text-[#C17857] transition-transform flex-shrink-0 ${expandedFaq === index ? 'rotate-90' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedFaq === index && <motion.div initial={{
                  height: 0,
                  opacity: 0
                }} animate={{
                  height: 'auto',
                  opacity: 1
                }} exit={{
                  height: 0,
                  opacity: 0
                }} transition={{
                  duration: 0.3
                }} className="overflow-hidden">
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                        <p className="text-[#404d3a] leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>}
                </AnimatePresence>
              </motion.div>)}
          </div>

          <div className="text-center mt-8">
            <button onClick={() => onNavigate?.('#contact')} className="text-[#C17857] hover:text-[#B06847] font-semibold text-lg underline">
              More Questions? Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#C17857] to-[#5e7155]" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center">
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
            <h2 id="cta-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              Ready to Feel Cared For?
            </h2>
            <p className="text-white/90 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              Order fresh-baked treats made with love and wholesome ingredients
            </p>
            <button onClick={handleWhatsAppOrder} className="bg-white text-[#C17857] px-8 sm:px-10 py-4 rounded-full hover:bg-[#F5F1E8] transition-colors font-semibold text-base sm:text-lg shadow-xl flex items-center justify-center gap-3 mx-auto">
              <MessageCircle className="w-5 h-5" />
              Place an Order
            </button>
          </motion.div>
        </div>
      </section>
      </main>
    </div>;
}