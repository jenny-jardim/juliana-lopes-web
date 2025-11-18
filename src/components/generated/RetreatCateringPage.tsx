"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Leaf, Calendar, MapPin, CheckCircle2, ChevronDown, Mail, Phone } from 'lucide-react';
export interface RetreatCateringPageProps {
  onNavigate?: (section: string) => void;
}
export default function RetreatCateringPage({
  onNavigate
}: RetreatCateringPageProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const whyChooseMe = [{
    icon: Users,
    title: "I Understand What Retreats Need",
    description: "I've catered retreats and worked as a professional chef. I know that your menu needs to nourish without being heavy, inspire without being complicated, and feel special without being fussy. I understand the rhythm of a retreat day and how food fits into that rhythm."
  }, {
    icon: Leaf,
    title: "Wholesome Ingredients, Thoughtful Sourcing",
    description: "I don't use processed shortcuts or cheap substitutes. Every ingredient is chosen with care. Plant-based doesn't mean fake; it means real, whole foods prepared beautifully."
  }, {
    icon: Heart,
    title: "Fully Customizable",
    description: "Your retreat is unique. Your menu should be too. We work together to understand your guests, your values, your vision—and then I create something that feels authentic to your event."
  }, {
    icon: CheckCircle2,
    title: "Inclusive by Design",
    description: "Plant-based and gluten-free, always. But beyond that, I work with any additional dietary needs—nut allergies, soy sensitivities, raw food preferences. Everyone at your retreat deserves to feel included and cared for."
  }, {
    icon: MapPin,
    title: "Flexible Logistics",
    description: "Whether your retreat is in Cork, Dublin, Galway, or across the UK, we work together on logistics. I'm committed to making this work for your location and timeline."
  }] as any[];
  const whatICater = [{
    title: "Multi-Day Wellness Retreats",
    description: "Full catering: breakfast, lunch, dinner, snacks, and beverages. Designed to nourish and sustain over the course of your retreat."
  }, {
    title: "Yoga Retreats",
    description: "Light, energizing meals that support your practice and align with your retreat's energy."
  }, {
    title: "Creative Retreats",
    description: "Nourishing food designed to fuel creativity and inspiration without weighing you down."
  }, {
    title: "Corporate Wellness Events",
    description: "Day events, half-day workshops, or evening gatherings where plant-based food becomes part of your wellness message."
  }, {
    title: "Special Occasion Celebrations",
    description: "Birthdays, anniversaries, ceremonies—with food that feels meaningful and memorable."
  }] as any[];
  const howItWorks = [{
    step: "1",
    title: "Let's Talk",
    description: "Reach out with your dates, location, guest count, and vision. We schedule a call to discuss your retreat and what you're hoping to create."
  }, {
    step: "2",
    title: "Understand & Explore",
    description: "I ask questions about your guests, your retreat's focus, any dietary preferences, and your values. This is where I really get to know your vision."
  }, {
    step: "3",
    title: "Design the Menu",
    description: "Based on our conversation, I create 2-3 menu options for you to review. We refine together until it feels perfect."
  }, {
    step: "4",
    title: "Confirm & Prepare",
    description: "Once we've finalized the menu and logistics, I prepare a detailed proposal. We confirm timing, delivery details, and any special setup needs."
  }, {
    step: "5",
    title: "Nourish & Delight",
    description: "I handle all the cooking. Your job is to focus on your guests. I'll ensure food is prepared, delivered, and served beautifully."
  }] as any[];
  const sampleMenu = {
    day1: {
      breakfast: "Overnight oats with berries, chia seeds, and almond butter",
      lunch: "Buddha bowl with quinoa, roasted vegetables, tahini dressing",
      dinner: "Lentil shepherd's pie with roasted root vegetables",
      snack: "Energy balls with dates and nuts (nut-free option available)"
    },
    day2: {
      breakfast: "Smoothie bowls with granola and fresh fruit",
      lunch: "Mediterranean chickpea salad with fresh herbs",
      dinner: "Creamy mushroom risotto with asparagus",
      snack: "Homemade energy bars"
    },
    day3: {
      breakfast: "Avocado toast on sourdough with heirloom tomatoes",
      lunch: "Thai green curry with vegetables and jasmine rice",
      dinner: "Roasted cauliflower steaks with herb sauce and quinoa",
      snack: "Fresh fruit platter with homemade nut butter dips"
    }
  };
  const faqs = [{
    question: "How far in advance should I book?",
    answer: "I recommend 4-6 weeks before your retreat. This gives us time to collaborate on your menu and for me to prepare properly. Shorter timelines sometimes work—reach out and we'll see what's possible."
  }, {
    question: "What's included in catering?",
    answer: "Food preparation and delivery. For some retreats, I can also provide serving, setup, and cleanup. Let's discuss what works best for your needs."
  }, {
    question: "Can you cater large groups?",
    answer: "Yes! I've catered groups of 20+ people. Group size doesn't change my commitment to quality and care—it just means thoughtful planning."
  }, {
    question: "What if someone has a serious allergy?",
    answer: "Allergies are taken very seriously. I work with you to understand every guest's needs and prepare safely. Communication is key—the more details you share, the better I can serve."
  }, {
    question: "Do you offer tasting sessions?",
    answer: "For larger events, I can often arrange a tasting. Let's discuss what works for your situation."
  }, {
    question: "What's your cancellation policy?",
    answer: "I'm flexible and fair. Let's talk about your specific situation if plans change."
  }, {
    question: "Do you provide equipment like tables, chairs, or linens?",
    answer: "Food only—I don't provide equipment rentals. But I can recommend trusted vendors in your area if you need them."
  }, {
    question: "What if weather affects my outdoor retreat?",
    answer: "I'm prepared for this. We'll plan logistics together so that weather doesn't compromise your event."
  }] as any[];
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  return <div className="min-h-screen bg-[#FCF2E3]" style={{ fontFamily: 'Montserrat' }}>
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden" role="banner" aria-label="Retreat catering services hero section">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url(/images/hero-retreat.jpg)',
        filter: 'brightness(0.6)'
      }} />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl">
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
        }} className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Catering Your Retreat with Care
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
        }} className="text-lg sm:text-xl md:text-2xl mb-4 leading-relaxed">
            For Retreat Organizers, Yoga Teachers & Wellness Professionals
          </motion.p>
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            You know that food is part of the soul of a retreat experience. It's not a side cost or a checkbox—it's woven into the transformation your guests are seeking.
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <main>
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" aria-labelledby="intro-heading">
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
            <h2 id="intro-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#404d3a] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              That's exactly how I approach every retreat I cater.
            </h2>
            <p className="text-[#404d3a] text-base sm:text-lg md:text-xl leading-relaxed mb-6">
              I create custom menus that feel aligned with your retreat's energy and values. Every dish is made with intention, using wholesome ingredients sourced thoughtfully.
            </p>
            <p className="text-[#5e7155] text-lg sm:text-xl md:text-2xl font-semibold italic">
              Your guests don't just eat well; they feel genuinely cared for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Previous Retreats Images */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#FCF2E3]" aria-labelledby="previous-retreats-heading">
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
          }} className="text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            <h2 id="previous-retreats-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#404d3a] mb-4">
              Previous Retreats
            </h2>
            <p className="text-[#5e7155] text-lg sm:text-xl">
              A glimpse into the transformative experiences I've been part of
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div initial={{
              opacity: 0,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="relative overflow-hidden rounded-lg shadow-lg group">
              <picture>
                <source srcSet="/images/retreat-1.webp" type="image/webp" />
                <img src="/images/retreat-1.jpg" alt="Group of retreat participants enjoying a healthy plant-based meal together at a wellness retreat" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </picture>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-lg font-semibold">Wicklow Wellness Retreat 2024</p>
                <p className="text-white/80 text-sm">3-day transformational experience</p>
              </div>
            </motion.div>

            <motion.div initial={{
              opacity: 0,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} className="relative overflow-hidden rounded-lg shadow-lg group">
              <picture>
                <source srcSet="/images/retreat-2.webp" type="image/webp" />
                <img src="/images/retreat-2.jpg" alt="Outdoor yoga retreat setting with nourishing plant-based meals served in natural surroundings" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </picture>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-lg font-semibold">Cork Yoga Retreat 2024</p>
                <p className="text-white/80 text-sm">5-day mindful nourishment</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" aria-labelledby="why-choose-heading">
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
          }} className="text-center mb-12 sm:mb-16" style={{ fontFamily: 'Playfair Display, serif' }}>
            <h2 id="why-choose-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5e7155] mb-4">
              Why Choose Me for Your Retreat
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {whyChooseMe.map((item, index) => {
              const IconComponent = item.icon;
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
              }} className="bg-[#FCF2E3] rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-[#5e7155] text-white p-3 rounded-full flex-shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#404d3a] mt-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[#404d3a] leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </motion.div>;
            })}
          </div>
        </div>
      </section>

      {/* What I Can Cater */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#5e7155]" aria-labelledby="what-i-cater-heading">
        <div className="max-w-5xl mx-auto">
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
          }} className="text-center mb-12 sm:mb-16">
            <h2 id="what-i-cater-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              What I Can Cater
            </h2>
          </motion.div>

          <div className="space-y-6">
            {whatICater.map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 hover:bg-white/20 transition-colors">
                <h3 className="font-serif text-xl sm:text-2xl text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" aria-labelledby="how-it-works-heading">
        <div className="max-w-5xl mx-auto">
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
          }} className="text-center mb-12 sm:mb-16" style={{ fontFamily: 'Playfair Display, serif' }}> 
            <h2 id="how-it-works-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5E7155] mb-4">
              How It Works
            </h2>
            <p className="text-[#5e7155] text-lg sm:text-xl">
              A simple, collaborative process from start to finish
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-12 top-0 bottom-0 w-0.5 bg-[#5e7155]/30" />

            <div className="space-y-8 sm:space-y-12">
              {howItWorks.map((step, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: -30
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} className="relative flex gap-6">
                  <div className="flex-shrink-0 w-24 h-24 bg-[#5e7155] rounded-full flex items-center justify-center z-10">
                    <span className="text-white font-serif text-3xl">{step.step}</span>
                  </div>
                  <div className="flex-1 pt-4">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#404d3a] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {step.title}
                    </h3>
                    <p className="text-[#404d3a] leading-relaxed text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="testimonial-heading">
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
          }} className="text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            <h2 id="testimonial-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5e7155] mb-4">
              Real Retreat Experience
            </h2>
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
          }} className="bg-white rounded-lg p-8 sm:p-10 md:p-12 shadow-xl" style={{ fontFamily: 'Montserrat' }}>
            <p className="text-[#404d3a] text-lg sm:text-xl md:text-2xl leading-relaxed mb-6 italic">
              "Juliana catered our yoga retreat in Wicklow, and it was transformative in ways I didn't expect. The food wasn't just plant-based; it felt like an extension of our retreat's healing mission. My participants felt genuinely nourished. Several of them told me the meals were the most memorable part of their three days with us."
            </p>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p className="font-semibold text-[#404d3a] text-base sm:text-lg">
                  Sarah
                </p>
                <p className="text-[#5e7155] text-sm sm:text-base">
                  Yoga Retreat Facilitator, Wicklow
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sample Menu */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" aria-labelledby="sample-menu-heading">
        <div className="max-w-5xl mx-auto">
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
          }} className="text-center mb-12 sm:mb-16" style={{ fontFamily: 'Playfair Display, serif' }}>
            <h2 id="sample-menu-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#404d3a] mb-4">
              Sample Menu
            </h2>
            <p className="text-[#5e7155] text-lg sm:text-xl">
              Wellness Retreat Menu (3 Days)
            </p>
          </motion.div>

          <div className="space-y-8 sm:space-y-10">
            {Object.entries(sampleMenu).map(([day, meals], dayIndex) => <motion.div key={day} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{ //
              once: true
            }} transition={{
              duration: 0.6,
              delay: dayIndex * 0.1
            }} className="bg-[#F5F1E8] rounded-lg p-6 sm:p-8">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#5e7155] mb-6">
                  Day {dayIndex + 1}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#404d3a] mb-2 text-sm uppercase tracking-wide">
                      Breakfast
                    </h4>
                    <p className="text-[#404d3a] text-sm sm:text-base">{meals.breakfast}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#404d3a] mb-2 text-sm uppercase tracking-wide">
                      Lunch
                    </h4>
                    <p className="text-[#404d3a] text-sm sm:text-base">{meals.lunch}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#404d3a] mb-2 text-sm uppercase tracking-wide">
                      Dinner
                    </h4>
                    <p className="text-[#404d3a] text-sm sm:text-base">{meals.dinner}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#404d3a] mb-2 text-sm uppercase tracking-wide">
                      Snack
                    </h4>
                    <p className="text-[#404d3a] text-sm sm:text-base">{meals.snack}</p>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#FCF2E3]" aria-labelledby="faqs-heading">
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
          }} className="text-center mb-12 sm:mb-16" style={{ fontFamily: 'Playfair Display, serif' }}>
            <h2 id="faqs-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#404d3a] mb-4">
              Frequently Asked Questions
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
                <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F5F1E8] transition-colors">
                  <span className="font-semibold text-[#404d3a] pr-4 text-sm sm:text-base">
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
              }} className="px-6 pb-6">
                    <p className="text-[#404d3a] leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </motion.div>}
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#5e7155]" aria-labelledby="final-cta-heading">
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
            <h2 id="final-cta-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              Ready to Nourish Your Retreat?
            </h2>
            <p className="text-white/90 text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed">
              Your guests deserve food that's as thoughtful as your retreat experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => onNavigate?.('#contact')} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors font-medium text-base sm:text-lg">
                Get in Touch
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      </main>
    </div>;
}