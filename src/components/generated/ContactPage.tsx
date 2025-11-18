"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Heart, MessageCircle, Instagram as InstagramIcon } from 'lucide-react';
export interface ContactPageProps {
  onNavigate?: (section: string) => void;
}
export default function ContactPage({
  onNavigate
}: ContactPageProps) {
  // WhatsApp link - Update with Juliana's actual phone number
  const handleWhatsAppContact = () => {
    const phoneNumber = "353892392900"; // Replace with actual number
    const message = encodeURIComponent("Hi Juliana! I'd like to get in touch.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  const handleEmailContact = () => {
    window.location.href = "mailto:hello@byjulianalopes.com";
  };
  const handleInstagramContact = () => {
    window.open("https://instagram.com/pepme.up", '_blank');
  };
  return <div className="min-h-screen bg-[#FCF2E3]" style={{ fontFamily: 'Montserrat' }}>
      {/* Hero Section - Minimal */}
      <section className="relative pt-16 pb-8 px-4 sm:px-6 bg-[#FCF2E3]" role="banner" aria-label="Contact page hero section">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <h1 className="font-serif text-5xl md:text-6xl text-[#404d3a] mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Let's Connect
            </h1>
            <p className="text-lg text-[#404d3a] max-w-2xl mx-auto">
              I'd love to hear from you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Card - Single, Clean, Elegant */}
      <main>
        <section className="pt-12 pb-20 px-4 sm:px-6" aria-labelledby="contact-methods-heading">
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
          }} className="bg-white rounded-3xl shadow-xl p-10 sm:p-14">
              <h2 id="contact-methods-heading" className="font-serif text-3xl sm:text-4xl text-[#404d3a] mb-3 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                Get In Touch
              </h2>
              <p className="text-[#5e7155] text-center mb-12">
                Choose your preferred way to reach me
              </p>

              {/* Contact Methods - Minimal List */}
              <div className="space-y-8">
                {/* WhatsApp */}
                <motion.button onClick={handleWhatsAppContact} whileHover={{
                x: 4
              }} className="w-full flex items-center gap-6 group">
                  <div className="bg-green-50 p-4 rounded-2xl group-hover:bg-green-500 transition-colors">
                    <MessageCircle className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 text-left" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <h3 className="font-serif text-2xl text-[#404d3a] mb-1 group-hover:text-green-600 transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                      WhatsApp
                    </h3>
                    <p className="text-[#5e7155] text-sm">
                      to place orders - quick response
                    </p>
                  </div>
                  <div className="text-[#5e7155] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </motion.button>

                <div className="border-t border-gray-100" />

                {/* Email */}
                <motion.button onClick={handleEmailContact} whileHover={{
                x: 4
              }} className="w-full flex items-center gap-6 group">
                  <div className="bg-orange-50 p-4 rounded-2xl group-hover:bg-[#c76942] transition-colors">
                    <Mail className="w-8 h-8 text-[#c76942] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 text-left" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <h3 className="font-serif text-2xl text-[#404d3a] mb-1 group-hover:text-[#c76942] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Email
                    </h3>
                    <p className="text-[#5e7155] text-sm">
                      hello@byjulianalopes.com — for retreat planning & event quotes
                    </p>
                  </div>
                  <div className="text-[#5e7155] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </motion.button>

                <div className="border-t border-gray-100" />

                {/* Instagram */}
                <motion.button onClick={handleInstagramContact} whileHover={{
                x: 4
              }} className="w-full flex items-center gap-6 group">
                  <div className="bg-pink-50 p-4 rounded-2xl group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500 transition-all">
                    <InstagramIcon className="w-8 h-8 text-pink-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 text-left" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <h3 className="font-serif text-2xl text-[#404d3a] mb-1 group-hover:text-pink-600 transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Instagram
                    </h3>
                    <p className="text-[#5e7155] text-sm">
                      @pepme.up — food photos & updates
                    </p>
                  </div>
                  <div className="text-[#5e7155] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </motion.button>
              </div>

              {/* Additional Details - Minimal */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#5e7155] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[#404d3a] mb-1">
                        Location
                      </p>
                      <p className="text-sm text-[#5e7155]">
                        Dun Laoghaire, Dublin
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#5e7155] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[#404d3a] mb-1">
                        Response Time
                      </p>
                      <p className="text-sm text-[#5e7155]">
                        Within 24-48 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Closing Message */}
        <section className="py-16 px-4 sm:px-6" aria-label="Closing message">
          <div className="max-w-3xl mx-auto text-center">
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
          }}>
              <p className="text-2xl sm:text-3xl font-serif text-[#404d3a] mb-4 leading-relaxed italic" style={{ fontFamily: 'Playfair Display, serif' }}>
                "Looking forward to connecting."
              </p>
              <p className="text-[#5e7155] text-lg">
                — Juliana
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4 sm:px-6 bg-white" aria-labelledby="explore-heading">
          <div className="max-w-4xl mx-auto">
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
          }}>
              <h2 id="explore-heading" className="font-serif text-2xl text-center text-[#404d3a] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                Explore More
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button onClick={() => onNavigate?.('#offerings')} className="bg-white hover:bg-[#5e7155] text-[#404d3a] hover:text-white p-6 rounded-xl transition-all shadow-sm hover:shadow-md">
                  <h3 className="font-semibold text-lg mb-1">
                    Retreat Catering
                  </h3>
                  <p className="text-sm opacity-70">
                    Catering services
                  </p>
                </button>
                <button onClick={() => onNavigate?.('#treats')} className="bg-white hover:bg-[#c76942] text-[#404d3a] hover:text-white p-6 rounded-xl transition-all shadow-sm hover:shadow-md">
                  <h3 className="font-semibold text-lg mb-1">
                    Pep Me Up Treats
                  </h3>
                  <p className="text-sm opacity-70">
                    Weekly treats menu
                  </p>
                </button>
                <button onClick={() => onNavigate?.('#about')} className="bg-white hover:bg-[#5e7155] text-[#404d3a] hover:text-white p-6 rounded-xl transition-all shadow-sm hover:shadow-md">
                  <h3 className="font-semibold text-lg mb-1">
                    About Juliana
                  </h3>
                  <p className="text-sm opacity-70">
                    My story
                  </p>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>;
}