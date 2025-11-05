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
    mpid: "0db55ea4-50a1-46d5-afc6-133795b19982"
  }, {
    name: "Brownies",
    description: "Rich, satisfying, completely plant-based",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    mpid: "2c81bfe3-1d6f-4c98-a0c7-454c01be15b2"
  }, {
    name: "Cookies",
    description: "Crispy edges, chewy centers, pure comfort",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80",
    mpid: "5bd0d985-302c-48b5-b7b7-58917adc1b2c"
  }, {
    name: "Blondies",
    description: "Golden, buttery, irresistibly sweet",
    image: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&q=80",
    mpid: "829ee327-b106-4ab7-b7c1-b4a6a4b5f712"
  }, {
    name: "Seasonal Treats",
    description: "Panettones (December) and seasonal specialties",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    mpid: "1a380a0f-9dab-4de6-99a3-4e5e62ebcd67"
  }, {
    name: "Custom Orders",
    description: "Corporate gifts, event platters, dietary needs—just ask",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80",
    mpid: "54b8baab-2b48-4d97-be90-454db4dbb238"
  }] as any[];
  const testimonials = [{
    quote: "I'm vegan and gluten-free. Juliana's treats make me feel genuinely cared for.",
    author: "Róisín",
    location: "Dublin",
    mpid: "88c27b1c-2401-4adb-b0f3-8a19f7aa1211"
  }, {
    quote: "I order every two weeks for my team. Everyone fights over what they get.",
    author: "Priya",
    location: "Dublin",
    mpid: "64e06edc-d9e6-4c00-80de-a2f56ff02130"
  }, {
    quote: "I'll spend more on Pep Me Up because I trust the quality and intention behind it.",
    author: "Michael",
    location: "Dublin",
    mpid: "13595485-82b8-415f-82be-1ccee802f0be"
  }] as any[];
  const faqs = [{
    question: "How long do treats stay fresh?",
    answer: "5-7 days when stored properly. Storage instructions included.",
    mpid: "ed6f9035-9fc7-4096-a983-df5823dc309c"
  }, {
    question: "Minimum order?",
    answer: "Depends on what you want—reach out and we'll figure it out.",
    mpid: "ff557c79-61af-4ea9-b0c3-31b3f0880e9d"
  }, {
    question: "Corporate gifts?",
    answer: "Absolutely. It's a thoughtful, homemade way to show appreciation.",
    mpid: "1f386106-85c9-490b-ab75-248c121a5874"
  }, {
    question: "Custom flavors?",
    answer: "Yes! Tell me what you're craving.",
    mpid: "a946fa5b-8c8d-41f6-8322-bdbaf4f666a0"
  }, {
    question: "Why the higher price?",
    answer: "Fresh baked, whole ingredients, genuine care. No mass production. Worth every penny.",
    mpid: "db4908ee-ff9e-4a81-9063-a808eff3befe"
  }, {
    question: "Serious allergies?",
    answer: "Yes, I work with you safely.",
    mpid: "75fa94e4-0bdc-4a40-8476-c0ab06f279cc"
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
  return <SortableContainer dndKitId="0107b4f1-3909-4888-9a81-2c4280dd97bd" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="TreatsBakesPage.tsx">
      {/* Hero Section with Pep Me Up Logo */}
      <SortableContainer dndKitId="c9615618-ecc2-4668-aa25-be2a4ac4cd45" containerType="regular" prevTag="section" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-[#C17857] to-[#5e7155]" data-magicpath-id="1" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="7a5fb9ea-6618-440f-88f9-f07d162e5ca5" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="2" data-magicpath-path="TreatsBakesPage.tsx">
          {/* Pep Me Up Logo */}
          <SortableContainer dndKitId="9ce7135b-27f3-49f6-bf5a-f444c8f28506" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8
        }} className="mb-8 sm:mb-12 flex justify-center" data-magicpath-id="3" data-magicpath-path="TreatsBakesPage.tsx">
            <SortableContainer dndKitId="0f4c0b3c-43aa-407e-b377-f52adce984b4" containerType="regular" prevTag="div" className="relative w-48 h-48 sm:w-64 sm:h-64" data-magicpath-id="4" data-magicpath-path="TreatsBakesPage.tsx">
              <img src="https://storage.googleapis.com/magicpoint-public-assets/user/300600264317087744/assets/41c65110-9aa0-4c4f-9281-d9eb3017d4d8.png" alt="Pep Me Up Logo" className="w-full h-full object-contain filter drop-shadow-2xl" data-magicpath-id="5" data-magicpath-path="TreatsBakesPage.tsx" />
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
      <SortableContainer dndKitId="206c465c-8e41-42ba-aa7c-e2a11dacc4d6" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" data-magicpath-id="8" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="b5f5d0a6-b823-4f22-a255-0d724b57efbb" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="9" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="b57414dc-12d7-4f10-b9ec-f6ab91780348" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12" data-magicpath-id="10" data-magicpath-path="TreatsBakesPage.tsx">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-8" data-magicpath-id="11" data-magicpath-path="TreatsBakesPage.tsx">
              Why Pep Me Up
            </h2>
          </SortableContainer>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-magicpath-id="12" data-magicpath-path="TreatsBakesPage.tsx">
            {["Baked fresh, never mass-produced", "Whole ingredients, real nutrition", "Plant-based & gluten-friendly always", "Homemade feeling, professional quality", "A reminder that you're worth the care"].map((benefit, index) => <SortableContainer dndKitId="0256fa77-c42b-4c06-809c-27d98a089502" containerType="regular" prevTag="motion.div" key={index} initial={{
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
          }} className="flex items-start gap-3 bg-[#F5F1E8] p-4 rounded-lg" data-magicpath-id="13" data-magicpath-path="TreatsBakesPage.tsx">
                <Check className="w-6 h-6 text-[#C17857] flex-shrink-0 mt-1" data-magicpath-id="14" data-magicpath-path="TreatsBakesPage.tsx" />
                <p className="text-[#2D2D2D] text-base sm:text-lg" data-magicpath-id="15" data-magicpath-path="TreatsBakesPage.tsx">{benefit}</p>
              </SortableContainer>)}
          </div>
        </SortableContainer>
      </SortableContainer>

      {/* Safety & Allergy Notice */}
      <SortableContainer dndKitId="10c45ad2-473d-40d7-9d96-4659e829a8ff" containerType="regular" prevTag="section" className="py-12 px-4 sm:px-6 bg-[#FFF4ED]" data-magicpath-id="16" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="6f8a8426-76d2-48db-9d80-c6e80f992030" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="17" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="912a768f-c83d-4bc0-b47f-05ad1104cc88" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="bg-white border-2 border-[#C17857] rounded-lg p-6 sm:p-8" data-magicpath-id="18" data-magicpath-path="TreatsBakesPage.tsx">
            <SortableContainer dndKitId="d8597306-26a8-4653-8201-38aa1cdf2f36" containerType="regular" prevTag="div" className="flex items-start gap-4 mb-4" data-magicpath-id="19" data-magicpath-path="TreatsBakesPage.tsx">
              <AlertCircle className="w-6 h-6 text-[#C17857] flex-shrink-0 mt-1" data-magicpath-id="20" data-magicpath-path="TreatsBakesPage.tsx" />
              <SortableContainer dndKitId="2c833ca9-cd5a-4931-852f-f8dfa01b0351" containerType="regular" prevTag="div" data-magicpath-id="21" data-magicpath-path="TreatsBakesPage.tsx">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="22" data-magicpath-path="TreatsBakesPage.tsx">
                  Safety Comes First
                </h3>
                <p className="text-[#4A4A4A] mb-4" data-magicpath-id="23" data-magicpath-path="TreatsBakesPage.tsx">
                  Check with your GP doctor about being okay with gluten traces.
                </p>
                <h4 className="font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="24" data-magicpath-path="TreatsBakesPage.tsx">Allergies:</h4>
                <p className="text-[#4A4A4A]" data-magicpath-id="25" data-magicpath-path="TreatsBakesPage.tsx">
                  Nuts (cashew, pecan, walnuts, almonds, hazelnuts, Brazil nuts, pistachio nuts, macadamia nuts), peanuts and soya.
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Menu Carousel Section */}
      <SortableContainer dndKitId="61b4643f-645e-48cb-bca7-5db2de7caad4" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" data-magicpath-id="26" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="83e07335-8c5c-42fd-a7b9-886d46928726" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="27" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="a24c5edd-75c9-4059-a0f9-a0af2e0ea2f5" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12" data-magicpath-id="28" data-magicpath-path="TreatsBakesPage.tsx">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#C17857] mb-4" data-magicpath-id="29" data-magicpath-path="TreatsBakesPage.tsx">
              Menu
            </h2>
            <p className="text-[#4A4A4A] text-lg" data-magicpath-id="30" data-magicpath-path="TreatsBakesPage.tsx">Explore our delicious treats</p>
          </SortableContainer>

          {/* Carousel Card */}
          <SortableContainer dndKitId="4c93a20f-8949-4408-859a-cf179a0d2416" containerType="regular" prevTag="div" className="max-w-2xl mx-auto" data-magicpath-id="31" data-magicpath-path="TreatsBakesPage.tsx">
            <SortableContainer dndKitId="d1f40d44-0eba-47a2-8b84-dfc27940dbdc" containerType="regular" prevTag="div" className="bg-white rounded-2xl shadow-2xl overflow-hidden" data-magicpath-id="32" data-magicpath-path="TreatsBakesPage.tsx">
              <SortableContainer dndKitId="5ef5d08c-72fe-4e9d-ae8d-7f9e97442525" containerType="regular" prevTag="div" className="relative h-80 sm:h-96 overflow-hidden" data-magicpath-id="33" data-magicpath-path="TreatsBakesPage.tsx">
                <AnimatePresence mode="wait" data-magicpath-id="34" data-magicpath-path="TreatsBakesPage.tsx">
                  <SortableContainer dndKitId="4584aff8-385f-44b4-812c-6ef1f5f01e5b" containerType="regular" prevTag="motion.div" key={currentMenuIndex} initial={{
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
                }} className="absolute inset-0" data-magicpath-id="35" data-magicpath-path="TreatsBakesPage.tsx">
                    <img src={menuItems[currentMenuIndex].image} alt={menuItems[currentMenuIndex].name} className="w-full h-full object-cover" data-magicpath-id="36" data-magicpath-path="TreatsBakesPage.tsx" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" data-magicpath-id="37" data-magicpath-path="TreatsBakesPage.tsx" />
                  </SortableContainer>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <SortableContainer dndKitId="d008e13f-9faf-4113-ac04-aadd69a94df7" containerType="regular" prevTag="button" onClick={prevMenuItem} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#C17857] p-3 rounded-full shadow-lg transition-all z-10" aria-label="Previous item" data-magicpath-id="38" data-magicpath-path="TreatsBakesPage.tsx">
                  <ChevronLeft className="w-6 h-6" data-magicpath-id="39" data-magicpath-path="TreatsBakesPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="abc095cd-2ce7-4376-8fd5-8f12bd292250" containerType="regular" prevTag="button" onClick={nextMenuItem} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#C17857] p-3 rounded-full shadow-lg transition-all z-10" aria-label="Next item" data-magicpath-id="40" data-magicpath-path="TreatsBakesPage.tsx">
                  <ChevronRight className="w-6 h-6" data-magicpath-id="41" data-magicpath-path="TreatsBakesPage.tsx" />
                </SortableContainer>
              </SortableContainer>

              {/* Card Content */}
              <SortableContainer dndKitId="212644a8-e461-4c0e-8821-cfcb764e6fba" containerType="regular" prevTag="div" className="p-6 sm:p-8" data-magicpath-id="42" data-magicpath-path="TreatsBakesPage.tsx">
                <AnimatePresence mode="wait" data-magicpath-id="43" data-magicpath-path="TreatsBakesPage.tsx">
                  <SortableContainer dndKitId="47f02152-d42f-47ec-a491-e390cf7d1c4c" containerType="regular" prevTag="motion.div" key={currentMenuIndex} initial={{
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
                }} data-magicpath-id="44" data-magicpath-path="TreatsBakesPage.tsx">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#2D2D2D] mb-3" data-magicpath-id="45" data-magicpath-path="TreatsBakesPage.tsx">
                      {menuItems[currentMenuIndex].name}
                    </h3>
                    <p className="text-[#4A4A4A] text-base sm:text-lg leading-relaxed" data-magicpath-id="46" data-magicpath-path="TreatsBakesPage.tsx">
                      {menuItems[currentMenuIndex].description}
                    </p>
                  </SortableContainer>
                </AnimatePresence>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6" data-magicpath-id="47" data-magicpath-path="TreatsBakesPage.tsx">
                  {menuItems.map((_, index) => <button key={index} onClick={() => setCurrentMenuIndex(index)} className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentMenuIndex ? 'bg-[#C17857] w-8' : 'bg-[#C17857]/30 hover:bg-[#C17857]/50'}`} aria-label={`Go to item ${index + 1}`} data-magicpath-id="48" data-magicpath-path="TreatsBakesPage.tsx" />)}
                </div>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How to Order Section */}
      <SortableContainer dndKitId="f343da6f-2efb-455b-88b6-fcce2ab54d82" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" data-magicpath-id="49" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="a9d3e8db-fd14-4ca6-a689-03beef5d3a07" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="50" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="5a32dc03-3bd5-49ce-a575-1466ee85ec30" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} data-magicpath-id="51" data-magicpath-path="TreatsBakesPage.tsx">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-12 text-center" data-magicpath-id="52" data-magicpath-path="TreatsBakesPage.tsx">
              How to Order
            </h2>
            
            {/* Ordering Steps */}
            <SortableContainer dndKitId="a05da226-006f-4bc7-9179-a40f7581d2f9" containerType="regular" prevTag="div" className="mb-12 space-y-8" data-magicpath-id="53" data-magicpath-path="TreatsBakesPage.tsx">
              <h3 className="text-2xl font-semibold text-[#C17857] mb-6 text-center" data-magicpath-id="54" data-magicpath-path="TreatsBakesPage.tsx">
                How to place your order:
              </h3>
              
              {/* Step 1 */}
              <SortableContainer dndKitId="42704852-5526-4b15-915d-80c8a4a14202" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="55" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="41ca96c0-e9de-4da9-9c82-8b2c17360e1a" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="56" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="57" data-magicpath-path="TreatsBakesPage.tsx">
                    1
                  </div>
                  <SortableContainer dndKitId="5b8d6852-6035-40a0-992a-bf9feabb9122" containerType="regular" prevTag="div" data-magicpath-id="58" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="59" data-magicpath-path="TreatsBakesPage.tsx">
                      Choose the base for your pie
                    </h4>
                    <p className="text-[#4A4A4A]" data-magicpath-id="60" data-magicpath-path="TreatsBakesPage.tsx">Raw or Biscuit</p>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              
              {/* Step 2 */}
              <SortableContainer dndKitId="f66de825-09c1-44f7-a660-9f9e52161aec" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="61" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="9480a17d-dda3-43ac-b23d-e46b8d854450" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="62" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="63" data-magicpath-path="TreatsBakesPage.tsx">
                    2
                  </div>
                  <SortableContainer dndKitId="9790cc26-3911-4da1-8b9d-e64a412ef197" containerType="regular" prevTag="div" data-magicpath-id="64" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="65" data-magicpath-path="TreatsBakesPage.tsx">
                      Your favourite flavour (one or more)!
                    </h4>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              
              {/* Step 3 - Sizes & Pricing */}
              <SortableContainer dndKitId="520b4754-3ebd-4d67-a855-21a6b12f078b" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="66" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="f8e698ef-a6ee-4b8a-bc46-d8dc2e8a985e" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="67" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="68" data-magicpath-path="TreatsBakesPage.tsx">
                    3
                  </div>
                  <SortableContainer dndKitId="85a618a7-4b41-47de-bb35-f8f61d2f3429" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="69" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-4" data-magicpath-id="70" data-magicpath-path="TreatsBakesPage.tsx">
                      The size of your treat:
                    </h4>
                    <SortableContainer dndKitId="0f33fc46-439f-4fe5-9513-39bcb3a52b08" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-magicpath-id="71" data-magicpath-path="TreatsBakesPage.tsx">
                      <SortableContainer dndKitId="3f074615-f2cf-42b0-b9dc-17e5337473e2" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="72" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="73" data-magicpath-path="TreatsBakesPage.tsx">Pie in a Tub</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="74" data-magicpath-path="TreatsBakesPage.tsx">€7</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="eb9f3b30-e1d6-4657-bc79-0c639853a01f" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="75" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="76" data-magicpath-path="TreatsBakesPage.tsx">13 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="77" data-magicpath-path="TreatsBakesPage.tsx">€13</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="923f337e-fbab-458c-babd-6f43de9a6159" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="78" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="79" data-magicpath-path="TreatsBakesPage.tsx">16 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="80" data-magicpath-path="TreatsBakesPage.tsx">€25</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="fcc26b3f-21a3-4eed-9d63-cbf61e95296d" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="81" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="82" data-magicpath-path="TreatsBakesPage.tsx">20 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="83" data-magicpath-path="TreatsBakesPage.tsx">€35</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="6b12294e-b83a-4473-b6f4-cfaed4658c5a" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center sm:col-span-2" data-magicpath-id="84" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="85" data-magicpath-path="TreatsBakesPage.tsx">25 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="86" data-magicpath-path="TreatsBakesPage.tsx">€45</span>
                      </SortableContainer>
                    </SortableContainer>
                    <p className="text-[#4A4A4A] mt-4 text-center italic" data-magicpath-id="87" data-magicpath-path="TreatsBakesPage.tsx">
                      Get in touch for info on slices gift boxes!
                    </p>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            
            {/* Contact & Delivery Info */}
            <SortableContainer dndKitId="7d6a4bc2-b9a6-4695-853d-40c21a80e3d7" containerType="regular" prevTag="div" className="bg-[#C17857] text-white rounded-xl p-8 sm:p-10 text-center" data-magicpath-id="88" data-magicpath-path="TreatsBakesPage.tsx">
              <p className="text-xl sm:text-2xl font-semibold mb-4" data-magicpath-id="89" data-magicpath-path="TreatsBakesPage.tsx">
                Place Your Order:
              </p>
              <p className="text-lg sm:text-xl mb-6" data-magicpath-id="90" data-magicpath-path="TreatsBakesPage.tsx">Monday–Friday, 10am–5pm</p>
              <SortableContainer dndKitId="a9b2a68e-b7e0-4eb1-8cbe-e1859992b3fe" containerType="regular" prevTag="div" className="space-y-3 text-left max-w-xl mx-auto" data-magicpath-id="91" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="f62d6d98-7bb0-41eb-8adf-f1530a80828a" containerType="regular" prevTag="div" className="bg-white/10 rounded-lg p-4" data-magicpath-id="92" data-magicpath-path="TreatsBakesPage.tsx">
                  <p className="text-lg font-semibold mb-1" data-magicpath-id="93" data-magicpath-path="TreatsBakesPage.tsx">Collection:</p>
                  <p className="text-white/90" data-magicpath-id="94" data-magicpath-path="TreatsBakesPage.tsx">Dun Laoghaire, County Dublin</p>
                </SortableContainer>
                <SortableContainer dndKitId="ca27f8c8-7458-4128-a15c-3610b5abb445" containerType="regular" prevTag="div" className="bg-white/10 rounded-lg p-4" data-magicpath-id="95" data-magicpath-path="TreatsBakesPage.tsx">
                  <p className="text-lg font-semibold mb-1" data-magicpath-id="96" data-magicpath-path="TreatsBakesPage.tsx">Saturday Delivery:</p>
                  <p className="text-white/90" data-magicpath-id="97" data-magicpath-path="TreatsBakesPage.tsx">Dublin City Centre</p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Customer Testimonials */}
      <SortableContainer dndKitId="50950595-b8ba-45f9-9eb4-602b7535f838" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#5e7155]" data-magicpath-id="98" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="8fb51ab4-69e8-4097-af55-9ce125cb3891" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="99" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="eaa68bf0-7ce4-479d-84c1-289ab7138c7a" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12" data-magicpath-id="100" data-magicpath-path="TreatsBakesPage.tsx">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4" data-magicpath-id="101" data-magicpath-path="TreatsBakesPage.tsx">
              What Customers Say
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="f9a828d7-6c76-4604-8b0f-cab82c56b176" containerType="collection" prevTag="div" className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" data-magicpath-id="102" data-magicpath-path="TreatsBakesPage.tsx">
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
          }} className="bg-white rounded-lg p-6 shadow-lg" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-id="103" data-magicpath-path="TreatsBakesPage.tsx">
                <p className="text-[#4A4A4A] italic mb-4 leading-relaxed" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="quote:unknown" data-magicpath-id="104" data-magicpath-path="TreatsBakesPage.tsx">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-4" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-id="105" data-magicpath-path="TreatsBakesPage.tsx">
                  <p className="font-semibold text-[#2D2D2D]" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="author:unknown" data-magicpath-id="106" data-magicpath-path="TreatsBakesPage.tsx">{testimonial.author}</p>
                  <p className="text-[#5e7155] text-sm" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="location:unknown" data-magicpath-id="107" data-magicpath-path="TreatsBakesPage.tsx">{testimonial.location}</p>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs Section */}
      <SortableContainer dndKitId="41423f2d-6cbb-408e-bfed-256497a43125" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#F5F1E8]" data-magicpath-id="108" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="0fa9e204-4d84-4856-abcf-051b5055caca" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="109" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="aa76406e-2d9e-420c-845e-ff576f364829" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12" data-magicpath-id="110" data-magicpath-path="TreatsBakesPage.tsx">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-4" data-magicpath-id="111" data-magicpath-path="TreatsBakesPage.tsx">
              Questions
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="c0b1c030-8cfc-471c-b0bb-f6f9bfc39552" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="112" data-magicpath-path="TreatsBakesPage.tsx">
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
          }} className="bg-white rounded-lg shadow-sm overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="113" data-magicpath-path="TreatsBakesPage.tsx">
                <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-[#FFF4ED] transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="114" data-magicpath-path="TreatsBakesPage.tsx">
                  <span className="font-semibold text-[#2D2D2D] pr-4 text-base sm:text-lg" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:unknown" data-magicpath-id="115" data-magicpath-path="TreatsBakesPage.tsx">
                    {faq.question}
                  </span>
                  <ChevronRight className={`w-5 h-5 text-[#C17857] transition-transform flex-shrink-0 ${expandedFaq === index ? 'rotate-90' : ''}`} data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="116" data-magicpath-path="TreatsBakesPage.tsx" />
                </button>
                <AnimatePresence data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="117" data-magicpath-path="TreatsBakesPage.tsx">
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
              }} className="overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="118" data-magicpath-path="TreatsBakesPage.tsx">
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="119" data-magicpath-path="TreatsBakesPage.tsx">
                        <p className="text-[#4A4A4A] leading-relaxed" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:unknown" data-magicpath-id="120" data-magicpath-path="TreatsBakesPage.tsx">{faq.answer}</p>
                      </div>
                    </motion.div>}
                </AnimatePresence>
              </motion.div>)}
          </SortableContainer>

          <SortableContainer dndKitId="4c23e401-f0e6-4ba4-91cb-6acb78856a68" containerType="regular" prevTag="div" className="text-center mt-8" data-magicpath-id="121" data-magicpath-path="TreatsBakesPage.tsx">
            <button onClick={() => onNavigate?.('#contact')} className="text-[#C17857] hover:text-[#B06847] font-semibold text-lg underline" data-magicpath-id="122" data-magicpath-path="TreatsBakesPage.tsx">
              More Questions? Contact Me
            </button>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Call to Action */}
      <SortableContainer dndKitId="ba9b6443-5e8f-4ee6-8630-5cfb0a4c3359" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#C17857] to-[#5e7155]" data-magicpath-id="123" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="de2dbaf8-c982-4440-8bf3-bc244fa18159" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="124" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="cd44063a-cecb-4db6-8e6d-1157ece8d78b" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} data-magicpath-id="125" data-magicpath-path="TreatsBakesPage.tsx">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6" data-magicpath-id="126" data-magicpath-path="TreatsBakesPage.tsx">
              Ready to Feel Cared For?
            </h2>
            <p className="text-white/90 text-lg sm:text-xl mb-8 max-w-2xl mx-auto" data-magicpath-id="127" data-magicpath-path="TreatsBakesPage.tsx">
              Order fresh-baked treats made with love and wholesome ingredients
            </p>
            <button onClick={() => onNavigate?.('#contact')} className="bg-white text-[#C17857] px-8 sm:px-10 py-4 rounded-full hover:bg-[#F5F1E8] transition-colors font-semibold text-base sm:text-lg shadow-xl" data-magicpath-id="128" data-magicpath-path="TreatsBakesPage.tsx">
              Place an Order
            </button>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
}