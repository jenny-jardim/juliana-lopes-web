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
    mpid: "b552d7c4-3c87-4505-ba4d-04fb737eaf6d"
  }, {
    name: "Brownies",
    description: "Rich, satisfying, completely plant-based",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    mpid: "5e58689d-cc43-4cd3-b67e-a390d35c4fb8"
  }, {
    name: "Cookies",
    description: "Crispy edges, chewy centers, pure comfort",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80",
    mpid: "af58391a-a5ad-4056-ae08-290811c01385"
  }, {
    name: "Blondies",
    description: "Golden, buttery, irresistibly sweet",
    image: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&q=80",
    mpid: "f7ff31c4-ce6c-40bf-9e4b-4bd27807edda"
  }, {
    name: "Seasonal Treats",
    description: "Panettones (December) and seasonal specialties",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    mpid: "ee7a3e9f-2a5d-4eab-8f77-0b2b02140140"
  }, {
    name: "Custom Orders",
    description: "Corporate gifts, event platters, dietary needs—just ask",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80",
    mpid: "841e88f6-dc71-47ac-9472-ed07f83a25e8"
  }] as any[];
  const testimonials = [{
    quote: "I'm vegan and gluten-free. Juliana's treats make me feel genuinely cared for.",
    author: "Róisín",
    location: "Dublin",
    mpid: "cd853bbb-a343-4d00-ab2d-d3f48d3f1973"
  }, {
    quote: "I order every two weeks for my team. Everyone fights over what they get.",
    author: "Priya",
    location: "Dublin",
    mpid: "e59dddaa-9a16-4ee8-a2fd-402213a81125"
  }, {
    quote: "I'll spend more on Pep Me Up because I trust the quality and intention behind it.",
    author: "Michael",
    location: "Dublin",
    mpid: "8647cf1d-c9a2-45d4-86b8-f7d0be293f1f"
  }] as any[];
  const faqs = [{
    question: "How long do treats stay fresh?",
    answer: "5-7 days when stored properly. Storage instructions included.",
    mpid: "6abaeeeb-821c-49de-89a5-a0b23b197a00"
  }, {
    question: "Minimum order?",
    answer: "Depends on what you want—reach out and we'll figure it out.",
    mpid: "e2be4637-13ca-410b-a605-84adc206b5cc"
  }, {
    question: "Corporate gifts?",
    answer: "Absolutely. It's a thoughtful, homemade way to show appreciation.",
    mpid: "509c5ed8-6d85-42e9-9d19-3491f43d5a4b"
  }, {
    question: "Custom flavors?",
    answer: "Yes! Tell me what you're craving.",
    mpid: "7df430fc-8ac5-43a9-9c1d-b4ce00aa09a2"
  }, {
    question: "Why the higher price?",
    answer: "Fresh baked, whole ingredients, genuine care. No mass production. Worth every penny.",
    mpid: "ee34d834-aafc-4147-ace2-a58b72bed3f7"
  }, {
    question: "Serious allergies?",
    answer: "Yes, I work with you safely.",
    mpid: "84c5547b-15f1-4bd6-9972-578404c91262"
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
  return <SortableContainer dndKitId="d8402186-8b64-4d1b-a755-aa92399628a2" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="TreatsBakesPage.tsx">
      {/* Hero Section with Pep Me Up Logo */}
      <SortableContainer dndKitId="4871398b-3316-4ff2-8a8f-b5d644b994e2" containerType="regular" prevTag="section" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-[#C17857] to-[#8B9B7F]" data-magicpath-id="1" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="6a984ab4-b540-4202-ac2f-a2fc02a03937" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="2" data-magicpath-path="TreatsBakesPage.tsx">
          {/* Pep Me Up Logo */}
          <SortableContainer dndKitId="47986f1d-2247-47ba-8d17-5561b29dec84" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8
        }} className="mb-8 sm:mb-12 flex justify-center" data-magicpath-id="3" data-magicpath-path="TreatsBakesPage.tsx">
            <SortableContainer dndKitId="45f3633a-a6e7-48c3-aecd-08152f655e79" containerType="regular" prevTag="div" className="relative w-48 h-48 sm:w-64 sm:h-64" data-magicpath-id="4" data-magicpath-path="TreatsBakesPage.tsx">
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
      <SortableContainer dndKitId="249fb28a-e508-4720-bc47-c6eba8d9a77f" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" data-magicpath-id="8" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="6a81539e-05c6-435a-857f-2dd1a583db8b" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="9" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="d8150d53-bf44-4b91-81e0-05c157daab72" containerType="regular" prevTag="motion.div" initial={{
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
            {["Baked fresh, never mass-produced", "Whole ingredients, real nutrition", "Plant-based & gluten-friendly always", "Homemade feeling, professional quality", "A reminder that you're worth the care"].map((benefit, index) => <SortableContainer dndKitId="8fe91411-efbd-4da4-9680-817ada310b5d" containerType="regular" prevTag="motion.div" key={index} initial={{
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
      <SortableContainer dndKitId="e45c9ee5-5734-4020-a684-b3639ad3b864" containerType="regular" prevTag="section" className="py-12 px-4 sm:px-6 bg-[#FFF4ED]" data-magicpath-id="16" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="99ae697a-15bb-4592-a1ce-28d3799a6df4" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="17" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="34b3297b-4369-43a4-87d4-c3ae10072874" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="6d81861e-6071-4aa6-9977-785fdf64fa41" containerType="regular" prevTag="div" className="flex items-start gap-4 mb-4" data-magicpath-id="19" data-magicpath-path="TreatsBakesPage.tsx">
              <AlertCircle className="w-6 h-6 text-[#C17857] flex-shrink-0 mt-1" data-magicpath-id="20" data-magicpath-path="TreatsBakesPage.tsx" />
              <SortableContainer dndKitId="6c4d7e72-c230-4762-9c16-39b1298b5b94" containerType="regular" prevTag="div" data-magicpath-id="21" data-magicpath-path="TreatsBakesPage.tsx">
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
      <SortableContainer dndKitId="0d061cfd-2457-4381-ac5b-3d6d40aa90a1" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" data-magicpath-id="26" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="9373ec1b-8bfb-47df-9b5d-75412cb0c9ed" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="27" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="753355e2-4a44-4990-896f-9c049417077d" containerType="regular" prevTag="motion.div" initial={{
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
          <SortableContainer dndKitId="f95af996-ecd3-4b26-9c3a-65781c0779a7" containerType="regular" prevTag="div" className="max-w-2xl mx-auto" data-magicpath-id="31" data-magicpath-path="TreatsBakesPage.tsx">
            <SortableContainer dndKitId="6e331e22-2b73-4a11-a2eb-4c8a750e744d" containerType="regular" prevTag="div" className="bg-white rounded-2xl shadow-2xl overflow-hidden" data-magicpath-id="32" data-magicpath-path="TreatsBakesPage.tsx">
              <SortableContainer dndKitId="d5565ce8-8679-48fa-ad3c-cb87fb1c03c9" containerType="regular" prevTag="div" className="relative h-80 sm:h-96 overflow-hidden" data-magicpath-id="33" data-magicpath-path="TreatsBakesPage.tsx">
                <AnimatePresence mode="wait" data-magicpath-id="34" data-magicpath-path="TreatsBakesPage.tsx">
                  <SortableContainer dndKitId="25ba31c1-8153-4018-af44-975c7bab8fe1" containerType="regular" prevTag="motion.div" key={currentMenuIndex} initial={{
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
                <SortableContainer dndKitId="cfc2ae8d-d4b7-420a-82cf-c862c640cdb6" containerType="regular" prevTag="button" onClick={prevMenuItem} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#C17857] p-3 rounded-full shadow-lg transition-all z-10" aria-label="Previous item" data-magicpath-id="38" data-magicpath-path="TreatsBakesPage.tsx">
                  <ChevronLeft className="w-6 h-6" data-magicpath-id="39" data-magicpath-path="TreatsBakesPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="4c29db01-f5f4-4c2c-aae0-3979fb0aea27" containerType="regular" prevTag="button" onClick={nextMenuItem} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#C17857] p-3 rounded-full shadow-lg transition-all z-10" aria-label="Next item" data-magicpath-id="40" data-magicpath-path="TreatsBakesPage.tsx">
                  <ChevronRight className="w-6 h-6" data-magicpath-id="41" data-magicpath-path="TreatsBakesPage.tsx" />
                </SortableContainer>
              </SortableContainer>

              {/* Card Content */}
              <SortableContainer dndKitId="a7861c78-c6ab-41ae-9b84-b8488d521642" containerType="regular" prevTag="div" className="p-6 sm:p-8" data-magicpath-id="42" data-magicpath-path="TreatsBakesPage.tsx">
                <AnimatePresence mode="wait" data-magicpath-id="43" data-magicpath-path="TreatsBakesPage.tsx">
                  <SortableContainer dndKitId="e7d7acba-16b6-41b4-bacf-7f9ee1b5b21e" containerType="regular" prevTag="motion.div" key={currentMenuIndex} initial={{
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
      <SortableContainer dndKitId="0644bd22-4bb4-4605-8ae2-14c563b90be1" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" data-magicpath-id="49" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="bfbadfea-0f76-44ee-9708-abed66fde0dc" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="50" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="5652bafa-552c-48ed-8395-c5988b9dfb0f" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="1de0ddec-abd3-41db-958b-8b457dff67b1" containerType="regular" prevTag="div" className="mb-12 space-y-8" data-magicpath-id="53" data-magicpath-path="TreatsBakesPage.tsx">
              <h3 className="text-2xl font-semibold text-[#C17857] mb-6 text-center" data-magicpath-id="54" data-magicpath-path="TreatsBakesPage.tsx">
                How to place your order:
              </h3>
              
              {/* Step 1 */}
              <SortableContainer dndKitId="69702723-2573-49a3-9bef-ef489010fcac" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="55" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="191b0d02-29c4-4d17-82df-372d00cabf98" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="56" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="57" data-magicpath-path="TreatsBakesPage.tsx">
                    1
                  </div>
                  <SortableContainer dndKitId="d41158c7-3cda-4363-95e3-b9ae6415b373" containerType="regular" prevTag="div" data-magicpath-id="58" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="59" data-magicpath-path="TreatsBakesPage.tsx">
                      Choose the base for your pie
                    </h4>
                    <p className="text-[#4A4A4A]" data-magicpath-id="60" data-magicpath-path="TreatsBakesPage.tsx">Raw or Biscuit</p>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              
              {/* Step 2 */}
              <SortableContainer dndKitId="90193517-39ea-4e58-a773-de46d017c6c1" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="61" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="5e1e2f30-07ca-4c65-b3b6-be3d7f908976" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="62" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="63" data-magicpath-path="TreatsBakesPage.tsx">
                    2
                  </div>
                  <SortableContainer dndKitId="18af6443-7e10-4df3-93b7-0d475a81c8f7" containerType="regular" prevTag="div" data-magicpath-id="64" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="65" data-magicpath-path="TreatsBakesPage.tsx">
                      Your favourite flavour (one or more)!
                    </h4>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              
              {/* Step 3 - Sizes & Pricing */}
              <SortableContainer dndKitId="dce3672c-d6ae-44fe-9582-18e5b37c466d" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="66" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="9ca3f5fa-4418-4635-97f9-b99761a57cb8" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="67" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="68" data-magicpath-path="TreatsBakesPage.tsx">
                    3
                  </div>
                  <SortableContainer dndKitId="19bfa6da-c3c3-4725-a22a-5a20b04fdc36" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="69" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-4" data-magicpath-id="70" data-magicpath-path="TreatsBakesPage.tsx">
                      The size of your treat:
                    </h4>
                    <SortableContainer dndKitId="24d4ecbc-ece4-42b5-a513-83c5ead16315" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-magicpath-id="71" data-magicpath-path="TreatsBakesPage.tsx">
                      <SortableContainer dndKitId="591c2b96-8cee-4dc5-8202-77c23566d01f" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="72" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="73" data-magicpath-path="TreatsBakesPage.tsx">Pie in a Tub</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="74" data-magicpath-path="TreatsBakesPage.tsx">€7</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="dc21e6d3-a0cf-4194-9d87-59055c0c3a09" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="75" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="76" data-magicpath-path="TreatsBakesPage.tsx">13 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="77" data-magicpath-path="TreatsBakesPage.tsx">€13</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="7696269f-904d-4717-8e5b-30800a3c945a" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="78" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="79" data-magicpath-path="TreatsBakesPage.tsx">16 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="80" data-magicpath-path="TreatsBakesPage.tsx">€25</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="bd5d3699-cfa3-4a10-8262-142b8bb77130" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="81" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="82" data-magicpath-path="TreatsBakesPage.tsx">20 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="83" data-magicpath-path="TreatsBakesPage.tsx">€35</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="2cded9af-685a-419c-b0c5-e6238162605d" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center sm:col-span-2" data-magicpath-id="84" data-magicpath-path="TreatsBakesPage.tsx">
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
            <SortableContainer dndKitId="654fd7f6-6e76-446a-923c-78c366ad95bf" containerType="regular" prevTag="div" className="bg-[#C17857] text-white rounded-xl p-8 sm:p-10 text-center" data-magicpath-id="88" data-magicpath-path="TreatsBakesPage.tsx">
              <p className="text-xl sm:text-2xl font-semibold mb-4" data-magicpath-id="89" data-magicpath-path="TreatsBakesPage.tsx">
                Place Your Order:
              </p>
              <p className="text-lg sm:text-xl mb-6" data-magicpath-id="90" data-magicpath-path="TreatsBakesPage.tsx">Monday–Friday, 10am–5pm</p>
              <SortableContainer dndKitId="e7bcbce7-da21-478b-97d4-04512bd3ae85" containerType="regular" prevTag="div" className="space-y-3 text-left max-w-xl mx-auto" data-magicpath-id="91" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="cc315aa9-86ee-4cd4-89d7-2dd70dfbe319" containerType="regular" prevTag="div" className="bg-white/10 rounded-lg p-4" data-magicpath-id="92" data-magicpath-path="TreatsBakesPage.tsx">
                  <p className="text-lg font-semibold mb-1" data-magicpath-id="93" data-magicpath-path="TreatsBakesPage.tsx">Collection:</p>
                  <p className="text-white/90" data-magicpath-id="94" data-magicpath-path="TreatsBakesPage.tsx">Dun Laoghaire, County Dublin</p>
                </SortableContainer>
                <SortableContainer dndKitId="689ab245-d602-409e-9b95-59be09569573" containerType="regular" prevTag="div" className="bg-white/10 rounded-lg p-4" data-magicpath-id="95" data-magicpath-path="TreatsBakesPage.tsx">
                  <p className="text-lg font-semibold mb-1" data-magicpath-id="96" data-magicpath-path="TreatsBakesPage.tsx">Saturday Delivery:</p>
                  <p className="text-white/90" data-magicpath-id="97" data-magicpath-path="TreatsBakesPage.tsx">Dublin City Centre</p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Customer Testimonials */}
      <SortableContainer dndKitId="f00fb871-8c76-45d1-bb6a-55699448aa08" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#8B9B7F]" data-magicpath-id="98" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="1019af95-feb1-4f69-ad41-4e4626409ec9" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="99" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="8b74ce87-16c7-4e36-a49a-545526719577" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="dfce30ae-d510-40e7-9047-293ac4b373be" containerType="collection" prevTag="div" className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" data-magicpath-id="102" data-magicpath-path="TreatsBakesPage.tsx">
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
                  <p className="text-[#8B9B7F] text-sm" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="location:unknown" data-magicpath-id="107" data-magicpath-path="TreatsBakesPage.tsx">{testimonial.location}</p>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs Section */}
      <SortableContainer dndKitId="15888023-edb3-482d-9530-ea545fe415a7" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#F5F1E8]" data-magicpath-id="108" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="0ca077f4-f5c7-4f05-b91a-b4a08ee088c6" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="109" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="e48aa19b-312b-4548-be64-de1cd8733485" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="8ae4cb4a-f155-4cb3-9abe-d2aacddd0b18" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="112" data-magicpath-path="TreatsBakesPage.tsx">
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

          <SortableContainer dndKitId="f102bd57-7914-4f48-84b0-7d50213d2c7f" containerType="regular" prevTag="div" className="text-center mt-8" data-magicpath-id="121" data-magicpath-path="TreatsBakesPage.tsx">
            <button onClick={() => onNavigate?.('#contact')} className="text-[#C17857] hover:text-[#B06847] font-semibold text-lg underline" data-magicpath-id="122" data-magicpath-path="TreatsBakesPage.tsx">
              More Questions? Contact Me
            </button>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Call to Action */}
      <SortableContainer dndKitId="543c711e-3d40-4062-978f-d0915b1aa61b" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#C17857] to-[#8B9B7F]" data-magicpath-id="123" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="17d837aa-42c0-4dcb-a905-394840ac94c0" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="124" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="e24e1b5c-fa8e-45b6-9740-c1ef08a63f65" containerType="regular" prevTag="motion.div" initial={{
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