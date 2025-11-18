"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Users, Sparkles } from 'lucide-react';
export interface AboutPageProps {
  onNavigate?: (section: string) => void;
}
export default function AboutPage({
  onNavigate
}: AboutPageProps) {
  const brandValues = [{
    icon: Heart,
    title: "Nourishment",
    description: "I use wholesome ingredients and cook with intention. My food isn't just plant-based and gluten-free—it's designed to genuinely nourish your body and spirit."
  }, {
    icon: Sparkles,
    title: "Authenticity",
    description: "Everything I share—from my social media to my kitchen stories to the food itself—is real. No pretense, no shortcuts. Just honest, intentional work."
  }, {
    icon: Leaf,
    title: "Connection to Nature",
    description: "I'm tuned to natural cycles. I source sustainably. I support practices that honor the earth and the animals. My plant-based choice isn't just dietary—it's philosophical."
  }, {
    icon: Users,
    title: "Warmth & Community",
    description: "I create inclusive spaces through food. Dietary preferences don't mean exclusion—they mean I care enough to nourish you exactly as you need to be nourished. Everyone belongs at my table."
  }] as any[];
  const journeyMilestones = [{
    year: "The Beginning",
    title: "Cooking for Myself",
    text: "I've always loved cooking. For years, I prepared meals for myself because I believed in the power of real, wholesome food. I cooked from scratch, avoided processed foods, and found connection to what I was eating."
  }, {
    year: "2024",
    title: "The Turning Point",
    text: "I enrolled in a professional vegan chef course with Rawish Academy in Lisbon and a gluten-free baking course with Plantlife. I didn't just want to be vegan; I wanted to master it."
  }, {
    year: "Oct 2024",
    title: "First Retreat",
    text: "I catered my first three-day retreat, cooking with the same intention I brought to my own kitchen—with care, wholesome ingredients, and the belief that food could be part of healing."
  }, {
    year: "Dec 2024",
    title: "The Leap",
    text: "I quit my accounting job and decided to dedicate 2025 entirely to my new career path. I launched Pep Me Up—my plant-based, gluten-free treats business."
  }, {
    year: "2025",
    title: "Building Something Real",
    text: "I've been growing Pep Me Up, taking orders, working as a chef in a vegan kitchen, and catering retreats. I've learned that food is never just food—it's connection, care, and nourishment."
  }] as any[]; //
  return <div className="min-h-screen bg-[#FCF2E3]" style={{ fontFamily: 'Montserrat' }}>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden" role="banner" aria-label="About Juliana hero section">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url(/images/hero-about.jpg)',
        filter: 'brightness(0.6)'
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
        }} className="font-serif text-4xl sm:text-5xl md:text-6xl mb-4 leading-tight" style={{
          fontFamily: "Playfair Display, serif"
        }}>
            About Me
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
        }} className="text-lg sm:text-xl md:text-2xl leading-relaxed" style={{
          fontFamily: "Montserrat"
        }}>
            From a home kitchen to nourishing retreats worldwide
          </motion.p>
        </div>
      </section>

      {/* Journey Timeline - Single Card */}
      <main>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" aria-labelledby="journey-heading">
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
          }} className="text-center mb-8 sm:mb-12">
            <h2 id="journey-heading" className="font-serif text-3xl sm:text-4xl text-[#404d3a] mb-3" style={{
              fontFamily: "Playfair Display, serif"
            }}>
              My Journey
            </h2>
            <p className="text-[#5e7155] text-base sm:text-lg" style={{
              fontFamily: "Montserrat"
            }}>
              How I became the chef I am today
            </p>
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
            duration: 0.6
          }} className="bg-white rounded-lg p-6 sm:p-8 md:p-10 shadow-lg">
            <div className="space-y-6 sm:space-y-8">
              {journeyMilestones.map((milestone, index) => <div key={index} className="relative pl-8 sm:pl-10 border-l-2 border-[#5e7155]/20 last:border-l-0">
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#5e7155] border-4 border-white shadow-sm" />
                  
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
                      <span className="inline-block bg-[#5e7155] text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold" style={{
                      fontFamily: "Montserrat"
                    }}>
                        {milestone.year}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl text-[#404d3a] font-semibold" style={{
                      fontFamily: "Playfair Display, serif"
                    }}>
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-[#404d3a] text-sm sm:text-base leading-relaxed" style={{
                    fontFamily: "Montserrat"
                  }}>
                      {milestone.text}
                    </p>
                  </div>
                </div>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Values Section - Updated */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" aria-labelledby="values-heading">
        <div className="max-w-6xl mx-auto">
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
          }} className="text-center mb-8 sm:mb-12">
            <h2 id="values-heading" className="font-serif text-3xl sm:text-4xl text-[#5e7155] mb-3" style={{
              fontFamily: "Playfair Display, serif"
            }}>
              My Brand Values
            </h2>
            <p className="text-[#404d3a] text-base sm:text-lg max-w-3xl mx-auto" style={{
              fontFamily: "Montserrat"
            }}>
              Everything I do flows from these four commitments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {brandValues.map((value, index) => {
              const IconComponent = value.icon;
              return <motion.div key={index} initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} className="bg-[#FCF2E3] rounded-lg p-6 sm:p-7 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3">
                    <div className="bg-[#5e7155] text-white p-2.5 rounded-full flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#404d3a] mt-0.5" style={{
                    fontFamily: "Playfair Display, serif"
                  }}>
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-[#404d3a] leading-relaxed text-sm sm:text-base" style={{
                  fontFamily: "Montserrat"
                }}>
                    {value.description}
                  </p>
                </motion.div>;
            })}
          </div>
        </div>
      </section>

      {/* Why I Do This Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#5e7155]" aria-labelledby="why-heading">
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
          }} className="text-center">
            <h2 id="why-heading" className="font-serif text-3xl sm:text-4xl text-white mb-6 sm:mb-8" style={{
              fontFamily: "Montserrat"
            }}>
              Why I Do This
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8">
              <p className="text-white text-base sm:text-lg leading-relaxed mb-4" style={{
                fontFamily: "Montserrat"
              }}>
                I do this because I believe food can be transformative. I do it because retreat organizers and professionals deserve to eat well without guilt. I do it because someone working a demanding job should be able to buy a treat that feels homemade and made just for them.
              </p>
              <p className="text-white text-lg sm:text-xl leading-relaxed font-semibold italic" style={{
                fontFamily: "Montserrat"
              }}>
                I do it because connection and care matter. And food is one of the most beautiful ways to express both.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#FCF2E3]" aria-labelledby="gallery-heading">
        <div className="max-w-6xl mx-auto">
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
          }} className="text-center mb-8 sm:mb-12">
            <h2 id="gallery-heading" className="font-serif text-3xl sm:text-4xl text-[#404d3a]" style={{
              fontFamily: "Montserrat"
            }}>
              A Glimpse Into My Kitchen
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { webp: '/images/gallery/chef-preparing-food.webp', fallback: '/images/gallery/chef-preparing-food.jpg' },
              { webp: '/images/gallery/fresh-vegetables.webp', fallback: '/images/gallery/fresh-vegetables.jpg' },
              { webp: '/images/gallery/plated-vegan-dish.webp', fallback: '/images/gallery/plated-vegan-dish.jpg' },
              { webp: '/images/gallery/seasonal-produce.webp', fallback: '/images/gallery/seasonal-produce.jpg' },
              { webp: '/images/gallery/cakes.webp', fallback: '/images/gallery/cakes.jpg' },
              { webp: '/images/gallery/pastries.webp', fallback: '/images/gallery/pastries.jpg' },
            ].map((image, index) => {
              const altTexts = ['Chef preparing fresh ingredients in a bright kitchen', 'Colorful array of fresh vegetables and plant-based ingredients', 'Beautifully plated vegan dish with artistic presentation', 'Fresh seasonal produce and wholesome cooking ingredients', 'Assortment of delicious vegan cakes on display', 'Freshly baked vegan pastries ready to be served'];
              return <motion.div key={index} initial={{
                opacity: 0,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <picture>
                  <source srcSet={image.webp} type="image/webp" />
                  <source srcSet={image.fallback} type="image/jpeg" />
                  <img src={image.fallback} alt={altTexts[index]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </picture>
              </motion.div>;
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" aria-labelledby="cta-heading">
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
            <h2 id="cta-heading" className="font-serif text-3xl sm:text-4xl text-[#404d3a] mb-5" style={{
              fontFamily: "Montserrat"
            }}>
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-[#404d3a] text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto" style={{
              fontFamily: "Montserrat"
            }}>
              Whether it's catering your retreat or baking treats for your week, I'd love to nourish you with food made from the heart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => onNavigate?.('#contact')} className="bg-[#5e7155] text-white px-8 py-4 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-base sm:text-lg">
                Get In Touch
              </button>
              <button onClick={() => onNavigate?.('#offerings')} className="bg-white text-[#5e7155] border-2 border-[#5e7155] px-8 py-4 rounded-full hover:bg-[#5e7155] hover:text-white transition-colors font-medium text-base sm:text-lg">
                See My Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      </main>
    </div>;
}