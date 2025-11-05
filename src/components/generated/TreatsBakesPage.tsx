"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, AlertCircle, Check } from 'lucide-react';
export interface TreatsBakesPageProps {
  onNavigate?: (section: string) => void;
  mpid?: string;
}
export default function TreatsBakesPage({
  onNavigate
}: TreatsBakesPageProps) {
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);
  const menuItems = [{
    name: "Cheese Cakes",
    description: "Dates, nuts, natural ingredients. Perfect for celebrations",
    image: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=600&q=80",
    mpid: "bcd4028d-d7b4-4c0b-8cb2-53a12eed2c4a"
  }, {
    name: "Brownies",
    description: "Rich, satisfying, completely plant-based",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    mpid: "eddead0b-a10b-4d07-b711-926ad0cf0068"
  }, {
    name: "Cookies",
    description: "Crispy edges, chewy centers, pure comfort",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80",
    mpid: "0c33544b-7f71-4a68-9096-3bf048971163"
  }, {
    name: "Blondies",
    description: "Golden, buttery, irresistibly sweet",
    image: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&q=80",
    mpid: "fdc04ade-05e7-443a-a082-6c81fab2962a"
  }, {
    name: "Seasonal Treats",
    description: "Panettones (December) and seasonal specialties",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    mpid: "32e007f3-4e10-4325-9524-a6a5e85b361a"
  }, {
    name: "Custom Orders",
    description: "Corporate gifts, event platters, dietary needs—just ask",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80",
    mpid: "04107631-09ea-47c0-bdd3-d2dcaf0bd17f"
  }] as any[];
  const testimonials = [{
    quote: "I'm vegan and gluten-free. Juliana's treats make me feel genuinely cared for.",
    author: "Róisín",
    location: "Dublin",
    mpid: "9dd0ff38-6da9-4c55-b42a-27b4b1f90b66"
  }, {
    quote: "I order every two weeks for my team. Everyone fights over what they get.",
    author: "Priya",
    location: "Dublin",
    mpid: "9efa82cc-021d-4740-9832-baa54833cfc0"
  }, {
    quote: "I'll spend more on Pep Me Up because I trust the quality and intention behind it.",
    author: "Michael",
    location: "Dublin",
    mpid: "8cbde7a5-3872-4bff-b83c-3b365807ced2"
  }] as any[];
  const faqs = [{
    question: "How long do treats stay fresh?",
    answer: "5-7 days when stored properly. Storage instructions included.",
    mpid: "499dd4cd-92e9-4ad2-af2b-783484b6f2af"
  }, {
    question: "Minimum order?",
    answer: "Depends on what you want—reach out and we'll figure it out.",
    mpid: "f3dc8c55-37ba-43fd-a28a-58efe6a0efbf"
  }, {
    question: "Corporate gifts?",
    answer: "Absolutely. It's a thoughtful, homemade way to show appreciation.",
    mpid: "d77094a5-aad6-4208-ad7a-7942d3ee1cea"
  }, {
    question: "Custom flavors?",
    answer: "Yes! Tell me what you're craving.",
    mpid: "e3ff2cb6-5aab-4b3a-9faa-7d9ea3dc4660"
  }, {
    question: "Why the higher price?",
    answer: "Fresh baked, whole ingredients, genuine care. No mass production. Worth every penny.",
    mpid: "ac499c7b-d66e-4800-9de2-b962a6ba91ac"
  }, {
    question: "Serious allergies?",
    answer: "Yes, I work with you safely.",
    mpid: "1957eade-58da-4326-b189-29cd9a6eab04"
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
  return <SortableContainer dndKitId="4c5ff50e-ef31-4b80-bf68-336e09211dd2" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="TreatsBakesPage.tsx">
      {/* Hero Section with Pep Me Up Logo */}
      <SortableContainer dndKitId="42326f61-4461-416c-8773-bb28ad3b95b9" containerType="regular" prevTag="section" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-[#C17857] to-[#5e7155]" role="banner" aria-label="Pep Me Up treats and bakes hero section" data-magicpath-id="1" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="a66d52d3-a06e-4666-a74e-635aa1973bc3" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="2" data-magicpath-path="TreatsBakesPage.tsx">
          {/* Pep Me Up Logo */}
          <SortableContainer dndKitId="fcf2936d-8b5a-4452-a243-aa8ebbca5fbb" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8
        }} className="mb-8 sm:mb-12 flex justify-center" data-magicpath-id="3" data-magicpath-path="TreatsBakesPage.tsx">
            <SortableContainer dndKitId="a6da3ec3-1d00-43a9-ae70-f7a0cd4682e9" containerType="regular" prevTag="div" className="relative w-48 h-48 sm:w-64 sm:h-64" data-magicpath-id="4" data-magicpath-path="TreatsBakesPage.tsx">
              <img src="https://storage.googleapis.com/magicpoint-public-assets/user/300600264317087744/assets/41c65110-9aa0-4c4f-9281-d9eb3017d4d8.png" alt="Pep Me Up logo - plant-based gluten-free treats" className="w-full h-full object-contain filter drop-shadow-2xl" data-magicpath-id="5" data-magicpath-path="TreatsBakesPage.tsx" />
            </SortableContainer>
          </SortableContainer>

          <motion.h1 data-magicpath-motion-tag="motion.h1" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight" data-magicpath-id="6" data-magicpath-path="TreatsBakesPage.tsx">
            Treat Yourself Better!
          </motion.h1>

          <motion.p data-magicpath-motion-tag="motion.p" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8" data-magicpath-id="7" data-magicpath-path="TreatsBakesPage.tsx">
            My treats are baked fresh to order, made from wholesome ingredients, and created with the intention that you feel cared for and included.
          </motion.p>
        </SortableContainer>
      </SortableContainer>

      {/* Why Pep Me Up Section */}
      <SortableContainer dndKitId="53b53e20-cd9c-4001-9b26-ead89e12ca8a" containerType="regular" prevTag="main" data-magicpath-id="8" data-magicpath-path="TreatsBakesPage.tsx">
      <SortableContainer dndKitId="712cb385-629a-4393-91da-59d60b711931" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" aria-labelledby="why-pep-me-up-heading" data-magicpath-id="9" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="95fbd856-231a-458f-9148-494e3e708902" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="10" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="f291aba5-dfb6-4925-88c7-664332496756" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12" data-magicpath-id="11" data-magicpath-path="TreatsBakesPage.tsx">
            <h2 id="why-pep-me-up-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-8" data-magicpath-id="12" data-magicpath-path="TreatsBakesPage.tsx">
              Why Pep Me Up
            </h2>
          </SortableContainer>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-magicpath-id="13" data-magicpath-path="TreatsBakesPage.tsx">
            {["Baked fresh, never mass-produced", "Whole ingredients, real nutrition", "Plant-based & gluten-friendly always", "Homemade feeling, professional quality", "A reminder that you're worth the care"].map((benefit, index) => <SortableContainer dndKitId="e39df8d7-9f59-4d4b-ac27-d2063bb97783" containerType="regular" prevTag="motion.div" key={index} initial={{
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
            }} className="flex items-start gap-3 bg-[#F5F1E8] p-4 rounded-lg" data-magicpath-id="14" data-magicpath-path="TreatsBakesPage.tsx">
                <Check className="w-6 h-6 text-[#C17857] flex-shrink-0 mt-1" data-magicpath-id="15" data-magicpath-path="TreatsBakesPage.tsx" />
                <p className="text-[#2D2D2D] text-base sm:text-lg" data-magicpath-id="16" data-magicpath-path="TreatsBakesPage.tsx">{benefit}</p>
              </SortableContainer>)}
          </div>
        </SortableContainer>
      </SortableContainer>

      {/* Safety & Allergy Notice */}
      <SortableContainer dndKitId="16edeb40-a975-4a9a-bd4f-6d05e77a8cb1" containerType="regular" prevTag="section" className="py-12 px-4 sm:px-6 bg-[#FFF4ED]" aria-labelledby="safety-heading" data-magicpath-id="17" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="24d4c4c3-5f52-479e-a215-1ae9f5a2db58" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="18" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="fec2a7f7-992a-4948-800e-b552d744c13f" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="bg-white border-2 border-[#C17857] rounded-lg p-6 sm:p-8" data-magicpath-id="19" data-magicpath-path="TreatsBakesPage.tsx">
            <SortableContainer dndKitId="16051275-3977-4c87-acb9-eaefd4c6307b" containerType="regular" prevTag="div" className="flex items-start gap-4 mb-4" data-magicpath-id="20" data-magicpath-path="TreatsBakesPage.tsx">
              <AlertCircle className="w-6 h-6 text-[#C17857] flex-shrink-0 mt-1" aria-hidden="true" data-magicpath-id="21" data-magicpath-path="TreatsBakesPage.tsx" />
              <SortableContainer dndKitId="e6b0e7f7-9360-4faa-bfc3-420e63c4af69" containerType="regular" prevTag="div" data-magicpath-id="22" data-magicpath-path="TreatsBakesPage.tsx">
                <h3 id="safety-heading" className="text-xl font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="23" data-magicpath-path="TreatsBakesPage.tsx">
                  Safety Comes First
                </h3>
                <p className="text-[#4A4A4A] mb-4" data-magicpath-id="24" data-magicpath-path="TreatsBakesPage.tsx">
                  Check with your GP doctor about being okay with gluten traces.
                </p>
                <h4 className="font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="25" data-magicpath-path="TreatsBakesPage.tsx">Allergies:</h4>
                <p className="text-[#4A4A4A]" data-magicpath-id="26" data-magicpath-path="TreatsBakesPage.tsx">
                  Nuts (cashew, pecan, walnuts, almonds, hazelnuts, Brazil nuts, pistachio nuts, macadamia nuts), peanuts and soya.
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Menu Carousel Section */}
      <SortableContainer dndKitId="6c147122-98ad-48ed-b6b3-2176057b7d26" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="menu-heading" data-magicpath-id="27" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="65bd8dca-b5b5-4b23-bc37-e8d7127e660f" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="28" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="ed370042-02bc-4eca-a864-6fa9cb1f10de" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12" data-magicpath-id="29" data-magicpath-path="TreatsBakesPage.tsx">
            <h2 id="menu-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#C17857] mb-4" data-magicpath-id="30" data-magicpath-path="TreatsBakesPage.tsx">
              Menu
            </h2>
            <p className="text-[#4A4A4A] text-lg" data-magicpath-id="31" data-magicpath-path="TreatsBakesPage.tsx">Explore our delicious treats</p>
          </SortableContainer>

          {/* Carousel Card */}
          <SortableContainer dndKitId="ad93d73c-8058-4ae2-bff8-a34823337421" containerType="regular" prevTag="div" className="max-w-2xl mx-auto" data-magicpath-id="32" data-magicpath-path="TreatsBakesPage.tsx">
            <SortableContainer dndKitId="8f03b9ba-1a82-49cd-a672-11c23d7e2dc2" containerType="regular" prevTag="div" className="bg-white rounded-2xl shadow-2xl overflow-hidden" data-magicpath-id="33" data-magicpath-path="TreatsBakesPage.tsx">
              <SortableContainer dndKitId="b08ed48e-3729-4ce9-854c-464538c09f50" containerType="regular" prevTag="div" className="relative h-80 sm:h-96 overflow-hidden" data-magicpath-id="34" data-magicpath-path="TreatsBakesPage.tsx">
                <AnimatePresence mode="wait" data-magicpath-id="35" data-magicpath-path="TreatsBakesPage.tsx">
                  <SortableContainer dndKitId="85baf57a-d402-4002-affa-243d9efc7198" containerType="regular" prevTag="motion.div" key={currentMenuIndex} initial={{
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
                  }} className="absolute inset-0" data-magicpath-id="36" data-magicpath-path="TreatsBakesPage.tsx">
                    <img src={menuItems[currentMenuIndex].image} alt={`${menuItems[currentMenuIndex].name} - ${menuItems[currentMenuIndex].description}`} className="w-full h-full object-cover" data-magicpath-id="37" data-magicpath-path="TreatsBakesPage.tsx" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" data-magicpath-id="38" data-magicpath-path="TreatsBakesPage.tsx" />
                  </SortableContainer>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <SortableContainer dndKitId="630be129-d4f0-4d62-96df-0e7f62face7b" containerType="regular" prevTag="button" onClick={prevMenuItem} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#C17857] p-3 rounded-full shadow-lg transition-all z-10" aria-label="Previous item" data-magicpath-id="39" data-magicpath-path="TreatsBakesPage.tsx">
                  <ChevronLeft className="w-6 h-6" data-magicpath-id="40" data-magicpath-path="TreatsBakesPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="4b927739-6ef3-4da4-a830-94717d3ea18a" containerType="regular" prevTag="button" onClick={nextMenuItem} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#C17857] p-3 rounded-full shadow-lg transition-all z-10" aria-label="Next item" data-magicpath-id="41" data-magicpath-path="TreatsBakesPage.tsx">
                  <ChevronRight className="w-6 h-6" data-magicpath-id="42" data-magicpath-path="TreatsBakesPage.tsx" />
                </SortableContainer>
              </SortableContainer>

              {/* Card Content */}
              <SortableContainer dndKitId="51074035-cc76-4a6b-98e1-06fdd2c2a28c" containerType="regular" prevTag="div" className="p-6 sm:p-8" data-magicpath-id="43" data-magicpath-path="TreatsBakesPage.tsx">
                <AnimatePresence mode="wait" data-magicpath-id="44" data-magicpath-path="TreatsBakesPage.tsx">
                  <SortableContainer dndKitId="937b9b3e-6c47-433b-8706-981ec2777fe9" containerType="regular" prevTag="motion.div" key={currentMenuIndex} initial={{
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
                  }} data-magicpath-id="45" data-magicpath-path="TreatsBakesPage.tsx">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#2D2D2D] mb-3" data-magicpath-id="46" data-magicpath-path="TreatsBakesPage.tsx">
                      {menuItems[currentMenuIndex].name}
                    </h3>
                    <p className="text-[#4A4A4A] text-base sm:text-lg leading-relaxed" data-magicpath-id="47" data-magicpath-path="TreatsBakesPage.tsx">
                      {menuItems[currentMenuIndex].description}
                    </p>
                  </SortableContainer>
                </AnimatePresence>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6" data-magicpath-id="48" data-magicpath-path="TreatsBakesPage.tsx">
                  {menuItems.map((_, index) => <button key={index} onClick={() => setCurrentMenuIndex(index)} className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentMenuIndex ? 'bg-[#C17857] w-8' : 'bg-[#C17857]/30 hover:bg-[#C17857]/50'}`} aria-label={`Go to item ${index + 1}`} data-magicpath-id="49" data-magicpath-path="TreatsBakesPage.tsx" />)}
                </div>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How to Order Section */}
      <SortableContainer dndKitId="fc617d47-1103-454f-96b0-9b9f27067440" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" aria-labelledby="how-to-order-heading" data-magicpath-id="50" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="362065ef-c136-4875-a368-c75cb4991a38" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="51" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="06f15da1-0966-49eb-a62a-ade68bfa65b0" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} data-magicpath-id="52" data-magicpath-path="TreatsBakesPage.tsx">
            <h2 id="how-to-order-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-12 text-center" data-magicpath-id="53" data-magicpath-path="TreatsBakesPage.tsx">
              How to Order
            </h2>
            
            {/* Ordering Steps */}
            <SortableContainer dndKitId="63b6e634-2f9d-42bf-a1f4-fc9431d23c99" containerType="regular" prevTag="div" className="mb-12 space-y-8" data-magicpath-id="54" data-magicpath-path="TreatsBakesPage.tsx">
              <h3 className="text-2xl font-semibold text-[#C17857] mb-6 text-center" data-magicpath-id="55" data-magicpath-path="TreatsBakesPage.tsx">
                How to place your order:
              </h3>
              
              {/* Step 1 */}
              <SortableContainer dndKitId="21bdbce2-bc37-4fa9-a239-4f3991fec3b9" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="56" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="326996cb-6ffa-40fd-9eb2-d0d46018f05b" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="57" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="58" data-magicpath-path="TreatsBakesPage.tsx">
                    1
                  </div>
                  <SortableContainer dndKitId="7933c99f-e2a8-4c91-897d-3cd416ac3cda" containerType="regular" prevTag="div" data-magicpath-id="59" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="60" data-magicpath-path="TreatsBakesPage.tsx">
                      Choose the base for your pie
                    </h4>
                    <p className="text-[#4A4A4A]" data-magicpath-id="61" data-magicpath-path="TreatsBakesPage.tsx">Raw or Biscuit</p>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              
              {/* Step 2 */}
              <SortableContainer dndKitId="34dfbfd3-00f5-41f5-b409-f3dff9b1fb22" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="62" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="5a0d5c23-57d1-4ec2-98f7-b20bbd905695" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="63" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="64" data-magicpath-path="TreatsBakesPage.tsx">
                    2
                  </div>
                  <SortableContainer dndKitId="bc882cc8-14f9-47bf-b150-8c71f561e624" containerType="regular" prevTag="div" data-magicpath-id="65" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="66" data-magicpath-path="TreatsBakesPage.tsx">
                      Your favourite flavour (one or more)!
                    </h4>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              
              {/* Step 3 - Sizes & Pricing */}
              <SortableContainer dndKitId="14f8b013-ca26-4e59-a7b0-7d2a81299ed2" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="67" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="b078b0d9-b9f6-4fea-a5c6-bb7446ab3e1e" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="68" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="69" data-magicpath-path="TreatsBakesPage.tsx">
                    3
                  </div>
                  <SortableContainer dndKitId="0aa43b30-b039-4814-a9f5-663cc1960d3a" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="70" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-4" data-magicpath-id="71" data-magicpath-path="TreatsBakesPage.tsx">
                      The size of your treat:
                    </h4>
                    <SortableContainer dndKitId="f296a540-1734-447c-8c96-327cd0cf278e" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-magicpath-id="72" data-magicpath-path="TreatsBakesPage.tsx">
                      <SortableContainer dndKitId="a01cd0f6-6f1c-499b-b344-819acd4bef37" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="73" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="74" data-magicpath-path="TreatsBakesPage.tsx">Pie in a Tub</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="75" data-magicpath-path="TreatsBakesPage.tsx">€7</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="dcb8a7da-fa54-4b02-ac1f-100479588884" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="76" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="77" data-magicpath-path="TreatsBakesPage.tsx">13 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="78" data-magicpath-path="TreatsBakesPage.tsx">€13</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="83bad5d8-d49f-4f31-ae0e-9a259df1deb4" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="79" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="80" data-magicpath-path="TreatsBakesPage.tsx">16 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="81" data-magicpath-path="TreatsBakesPage.tsx">€25</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="032cd4bd-3345-433c-949f-a54726b8bc09" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="82" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="83" data-magicpath-path="TreatsBakesPage.tsx">20 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="84" data-magicpath-path="TreatsBakesPage.tsx">€35</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="b8b6a49b-5dcf-40f0-b903-2dcd90eff315" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center sm:col-span-2" data-magicpath-id="85" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="86" data-magicpath-path="TreatsBakesPage.tsx">25 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="87" data-magicpath-path="TreatsBakesPage.tsx">€45</span>
                      </SortableContainer>
                    </SortableContainer>
                    <p className="text-[#4A4A4A] mt-4 text-center italic" data-magicpath-id="88" data-magicpath-path="TreatsBakesPage.tsx">
                      Get in touch for info on slices gift boxes!
                    </p>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            
            {/* Contact & Delivery Info */}
            <SortableContainer dndKitId="d12459a1-fe2f-435f-9866-4e37a4c2850f" containerType="regular" prevTag="div" className="bg-[#C17857] text-white rounded-xl p-8 sm:p-10 text-center" data-magicpath-id="89" data-magicpath-path="TreatsBakesPage.tsx">
              <p className="text-xl sm:text-2xl font-semibold mb-4" data-magicpath-id="90" data-magicpath-path="TreatsBakesPage.tsx">
                Place Your Order:
              </p>
              <p className="text-lg sm:text-xl mb-6" data-magicpath-id="91" data-magicpath-path="TreatsBakesPage.tsx">Monday–Friday, 10am–5pm</p>
              <SortableContainer dndKitId="9489c341-cd9d-44f3-8fa3-76bdd47a302b" containerType="regular" prevTag="div" className="space-y-3 text-left max-w-xl mx-auto" data-magicpath-id="92" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="adcfb04f-d24b-4de6-9cc3-412a0d8a6c9c" containerType="regular" prevTag="div" className="bg-white/10 rounded-lg p-4" data-magicpath-id="93" data-magicpath-path="TreatsBakesPage.tsx">
                  <p className="text-lg font-semibold mb-1" data-magicpath-id="94" data-magicpath-path="TreatsBakesPage.tsx">Collection:</p>
                  <p className="text-white/90" data-magicpath-id="95" data-magicpath-path="TreatsBakesPage.tsx">Dun Laoghaire, County Dublin</p>
                </SortableContainer>
                <SortableContainer dndKitId="7b0f5867-d54c-4e9d-ade7-3fed462d1bb3" containerType="regular" prevTag="div" className="bg-white/10 rounded-lg p-4" data-magicpath-id="96" data-magicpath-path="TreatsBakesPage.tsx">
                  <p className="text-lg font-semibold mb-1" data-magicpath-id="97" data-magicpath-path="TreatsBakesPage.tsx">Saturday Delivery:</p>
                  <p className="text-white/90" data-magicpath-id="98" data-magicpath-path="TreatsBakesPage.tsx">Dublin City Centre</p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Customer Testimonials */}
      <SortableContainer dndKitId="85f3a7e7-f812-4689-95f8-5722c074290a" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#5e7155]" aria-labelledby="testimonials-heading" data-magicpath-id="99" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="4b61c784-3dda-4528-a3e1-ee88f669cbc7" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="100" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="86d37307-31dd-4e64-aa71-3b46de9b4640" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12" data-magicpath-id="101" data-magicpath-path="TreatsBakesPage.tsx">
            <h2 id="testimonials-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4" data-magicpath-id="102" data-magicpath-path="TreatsBakesPage.tsx">
              What Customers Say
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="4b2d6c85-bda6-4baa-86d4-3a1263b1f490" containerType="collection" prevTag="div" className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" data-magicpath-id="103" data-magicpath-path="TreatsBakesPage.tsx">
            {testimonials.map((testimonial, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} initial={{
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
            }} className="bg-white rounded-lg p-6 shadow-lg" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-id="104" data-magicpath-path="TreatsBakesPage.tsx">
                <p className="text-[#4A4A4A] italic mb-4 leading-relaxed" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="quote:unknown" data-magicpath-id="105" data-magicpath-path="TreatsBakesPage.tsx">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-4" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-id="106" data-magicpath-path="TreatsBakesPage.tsx">
                  <p className="font-semibold text-[#2D2D2D]" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="author:unknown" data-magicpath-id="107" data-magicpath-path="TreatsBakesPage.tsx">{testimonial.author}</p>
                  <p className="text-[#5e7155] text-sm" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="location:unknown" data-magicpath-id="108" data-magicpath-path="TreatsBakesPage.tsx">{testimonial.location}</p>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs Section */}
      <SortableContainer dndKitId="d3b81084-5392-4d65-8808-84ca471e8bdf" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="faqs-heading" data-magicpath-id="109" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="6fa59adc-66bb-4fcf-82eb-d84f6c1e7748" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="110" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="55eb992b-d420-49aa-8571-7b9d4b9f9744" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12" data-magicpath-id="111" data-magicpath-path="TreatsBakesPage.tsx">
            <h2 id="faqs-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-4" data-magicpath-id="112" data-magicpath-path="TreatsBakesPage.tsx">
              Questions
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="05cfdf20-f208-4942-ba2d-347b62947a8a" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="113" data-magicpath-path="TreatsBakesPage.tsx">
            {faqs.map((faq, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} initial={{
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
            }} className="bg-white rounded-lg shadow-sm overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="114" data-magicpath-path="TreatsBakesPage.tsx">
                <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-[#FFF4ED] transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="115" data-magicpath-path="TreatsBakesPage.tsx">
                  <span className="font-semibold text-[#2D2D2D] pr-4 text-base sm:text-lg" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:unknown" data-magicpath-id="116" data-magicpath-path="TreatsBakesPage.tsx">
                    {faq.question}
                  </span>
                  <ChevronRight className={`w-5 h-5 text-[#C17857] transition-transform flex-shrink-0 ${expandedFaq === index ? 'rotate-90' : ''}`} data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="117" data-magicpath-path="TreatsBakesPage.tsx" />
                </button>
                <AnimatePresence data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="118" data-magicpath-path="TreatsBakesPage.tsx">
                  {expandedFaq === index && <motion.div data-magicpath-motion-tag="motion.div" initial={{
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
                }} className="overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="119" data-magicpath-path="TreatsBakesPage.tsx">
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="120" data-magicpath-path="TreatsBakesPage.tsx">
                        <p className="text-[#4A4A4A] leading-relaxed" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:unknown" data-magicpath-id="121" data-magicpath-path="TreatsBakesPage.tsx">{faq.answer}</p>
                      </div>
                    </motion.div>}
                </AnimatePresence>
              </motion.div>)}
          </SortableContainer>

          <SortableContainer dndKitId="0b774708-b607-4898-ae58-9de95197689b" containerType="regular" prevTag="div" className="text-center mt-8" data-magicpath-id="122" data-magicpath-path="TreatsBakesPage.tsx">
            <button onClick={() => onNavigate?.('#contact')} className="text-[#C17857] hover:text-[#B06847] font-semibold text-lg underline" data-magicpath-id="123" data-magicpath-path="TreatsBakesPage.tsx">
              More Questions? Contact Me
            </button>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Call to Action */}
      <SortableContainer dndKitId="8993e2c6-88f0-4871-aab3-0082439ccaa2" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#C17857] to-[#5e7155]" aria-labelledby="cta-heading" data-magicpath-id="124" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="a85a105e-eb3f-4a23-a632-b354d4ffd776" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="125" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="6cce241d-0e8f-4540-89b7-ac0e25e642e5" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} data-magicpath-id="126" data-magicpath-path="TreatsBakesPage.tsx">
            <h2 id="cta-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6" data-magicpath-id="127" data-magicpath-path="TreatsBakesPage.tsx">
              Ready to Feel Cared For?
            </h2>
            <p className="text-white/90 text-lg sm:text-xl mb-8 max-w-2xl mx-auto" data-magicpath-id="128" data-magicpath-path="TreatsBakesPage.tsx">
              Order fresh-baked treats made with love and wholesome ingredients
            </p>
            <button onClick={() => onNavigate?.('#contact')} className="bg-white text-[#C17857] px-8 sm:px-10 py-4 rounded-full hover:bg-[#F5F1E8] transition-colors font-semibold text-base sm:text-lg shadow-xl" data-magicpath-id="129" data-magicpath-path="TreatsBakesPage.tsx">
              Place an Order
            </button>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
}