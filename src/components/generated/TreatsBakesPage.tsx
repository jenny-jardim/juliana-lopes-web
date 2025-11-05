"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, AlertCircle, Check, MessageCircle } from 'lucide-react';
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
    mpid: "a43ded38-15ed-484d-a599-0ef19dddc68e"
  }, {
    name: "Brownies",
    description: "Rich, satisfying, completely plant-based",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    mpid: "a9431a48-40f1-4ea0-b90e-dd37e0b4a0f8"
  }, {
    name: "Cookies",
    description: "Crispy edges, chewy centers, pure comfort",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80",
    mpid: "b2648134-0b3d-4f74-8a21-4d5024cff7d9"
  }, {
    name: "Blondies",
    description: "Golden, buttery, irresistibly sweet",
    image: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&q=80",
    mpid: "8f2ce658-75a0-48f3-ab3e-53bfa226d628"
  }, {
    name: "Seasonal Treats",
    description: "Panettones (December) and seasonal specialties",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    mpid: "bcdefcf6-14e2-4af2-a4aa-6222fa28690e"
  }, {
    name: "Custom Orders",
    description: "Corporate gifts, event platters, dietary needs—just ask",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80",
    mpid: "b9991aae-81f6-4d49-897b-96042c3dd997"
  }] as any[];
  const testimonials = [{
    quote: "I'm vegan and gluten-free. Juliana's treats make me feel genuinely cared for.",
    author: "Róisín",
    location: "Dublin",
    mpid: "1e0ed27a-1f42-4e6e-b12d-d60bb978fb1f"
  }, {
    quote: "I order every two weeks for my team. Everyone fights over what they get.",
    author: "Priya",
    location: "Dublin",
    mpid: "161b2a7f-4cb4-41e1-b547-a4ea16d206db"
  }, {
    quote: "I'll spend more on Pep Me Up because I trust the quality and intention behind it.",
    author: "Michael",
    location: "Dublin",
    mpid: "7095bfc7-3372-451a-ba53-60655d67482b"
  }] as any[];
  const faqs = [{
    question: "How long do treats stay fresh?",
    answer: "5-7 days when stored properly. Storage instructions included.",
    mpid: "91430407-8444-45cd-81ec-b349811af2d6"
  }, {
    question: "Minimum order?",
    answer: "Depends on what you want—reach out and we'll figure it out.",
    mpid: "5ecdd067-46bb-4edb-ba19-30201b8e2312"
  }, {
    question: "Corporate gifts?",
    answer: "Absolutely. It's a thoughtful, homemade way to show appreciation.",
    mpid: "02db2807-b20f-4d54-ac56-e4ed6766d174"
  }, {
    question: "Custom flavors?",
    answer: "Yes! Tell me what you're craving.",
    mpid: "8b607194-ac85-4d56-88b5-13d5ce748671"
  }, {
    question: "Why the higher price?",
    answer: "Fresh baked, whole ingredients, genuine care. No mass production. Worth every penny.",
    mpid: "fd48d9fc-ee7d-4762-a17c-591c3c443822"
  }, {
    question: "Serious allergies?",
    answer: "Yes, I work with you safely.",
    mpid: "0987bbfe-b483-4122-a6aa-003f0c99b4c4"
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
  return <SortableContainer dndKitId="30a1b0e6-87b7-48b6-bca1-436d563a9d4b" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="TreatsBakesPage.tsx">
      {/* Hero Section with Pep Me Up Logo - Redesigned */}
      <SortableContainer dndKitId="e4a2b09e-8928-4e4e-9e9d-8db73495167f" containerType="regular" prevTag="section" className="relative py-12 sm:py-16 px-4 sm:px-6 bg-[#FCF2E3]" role="banner" aria-label="Pep Me Up treats and bakes hero section" data-magicpath-id="1" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="a956c48f-4cb3-44e3-aba3-2961bd794275" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="2" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="a1cf1e54-23d8-4acf-8894-96d68dae859d" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-magicpath-id="3" data-magicpath-path="TreatsBakesPage.tsx">
            {/* Left: Logo */}
            <SortableContainer dndKitId="7f94cfa3-75e0-4e7b-beba-92eb9d70ea56" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            x: -30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} className="flex justify-center md:justify-start" data-magicpath-id="4" data-magicpath-path="TreatsBakesPage.tsx">
              <SortableContainer dndKitId="3ca75e7d-5394-4cff-b48c-a7c2c0ab47b4" containerType="regular" prevTag="div" className="relative w-56 h-56 sm:w-64 sm:h-64" data-magicpath-id="5" data-magicpath-path="TreatsBakesPage.tsx">
                <img src="https://storage.googleapis.com/magicpoint-public-assets/user/300600264317087744/assets/41c65110-9aa0-4c4f-9281-d9eb3017d4d8.png" alt="Pep Me Up logo - plant-based gluten-free treats" className="w-full h-full object-contain filter drop-shadow-2xl" data-magicpath-id="6" data-magicpath-path="TreatsBakesPage.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Right: Headline and Text */}
            <SortableContainer dndKitId="df416501-d238-4046-bd64-01b70459a666" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="text-center md:text-left" data-magicpath-id="7" data-magicpath-path="TreatsBakesPage.tsx">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2D2D2D] mb-4 leading-tight" data-magicpath-id="8" data-magicpath-path="TreatsBakesPage.tsx">
                Treat Yourself Better!
              </h1>
              <p className="text-lg sm:text-xl text-[#4A4A4A] leading-relaxed" data-magicpath-id="9" data-magicpath-path="TreatsBakesPage.tsx">
                My treats are baked fresh to order, made from wholesome ingredients, and created with the intention that you feel cared for and included.
              </p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Why Pep Me Up Section */}
      <SortableContainer dndKitId="670e8424-b1f7-4b5d-ba02-cb9992a1dda9" containerType="regular" prevTag="main" data-magicpath-id="10" data-magicpath-path="TreatsBakesPage.tsx">
      <SortableContainer dndKitId="0ea57a6d-9ab5-482a-925b-e57a4631a9cd" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" aria-labelledby="why-pep-me-up-heading" data-magicpath-id="11" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="0b98eed3-9992-405a-8463-1850ce1e61e3" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="12" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="f779f246-a661-4a37-b1b6-1d4cd0c90e74" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12" data-magicpath-id="13" data-magicpath-path="TreatsBakesPage.tsx">
            <h2 id="why-pep-me-up-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-8" data-magicpath-id="14" data-magicpath-path="TreatsBakesPage.tsx">
              Why Pep Me Up
            </h2>
          </SortableContainer>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-magicpath-id="15" data-magicpath-path="TreatsBakesPage.tsx">
            {["Baked fresh, never mass-produced", "Whole ingredients, real nutrition", "Plant-based & gluten-friendly always", "Homemade feeling, professional quality", "A reminder that you're worth the care"].map((benefit, index) => <SortableContainer dndKitId="635ef5f6-0514-444e-9bb2-815a459f126f" containerType="regular" prevTag="motion.div" key={index} initial={{
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
            }} className="flex items-start gap-3 bg-[#F5F1E8] p-4 rounded-lg" data-magicpath-id="16" data-magicpath-path="TreatsBakesPage.tsx">
                <Check className="w-6 h-6 text-[#C17857] flex-shrink-0 mt-1" data-magicpath-id="17" data-magicpath-path="TreatsBakesPage.tsx" />
                <p className="text-[#2D2D2D] text-base sm:text-lg" data-magicpath-id="18" data-magicpath-path="TreatsBakesPage.tsx">{benefit}</p>
              </SortableContainer>)}
          </div>
        </SortableContainer>
      </SortableContainer>

      {/* Safety & Allergy Notice - Compact Version */}
      <SortableContainer dndKitId="db343564-1d89-4792-b9f2-0ff8851eb7fc" containerType="regular" prevTag="section" className="py-10 px-4 sm:px-6 bg-[#FFF4ED]" aria-labelledby="safety-heading" data-magicpath-id="19" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="2579f9b4-27cb-439b-9b7e-59c12de23187" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="20" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="a7577922-e713-4af1-9bf8-f36aa92f365c" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="bg-white border-2 border-[#C17857] rounded-lg p-5" data-magicpath-id="21" data-magicpath-path="TreatsBakesPage.tsx">
            <SortableContainer dndKitId="9f60a9a8-b7d3-49bc-bc50-2ba00496ea3f" containerType="regular" prevTag="div" className="flex items-start gap-3" data-magicpath-id="22" data-magicpath-path="TreatsBakesPage.tsx">
              <AlertCircle className="w-5 h-5 text-[#C17857] flex-shrink-0 mt-0.5" aria-hidden="true" data-magicpath-id="23" data-magicpath-path="TreatsBakesPage.tsx" />
              <SortableContainer dndKitId="79aa3005-1729-444b-8ac9-2bceaeb188fd" containerType="regular" prevTag="div" data-magicpath-id="24" data-magicpath-path="TreatsBakesPage.tsx">
                <h3 id="safety-heading" className="text-lg font-semibold text-[#2D2D2D] mb-1" data-magicpath-id="25" data-magicpath-path="TreatsBakesPage.tsx">
                  Safety Comes First
                </h3>
                <p className="text-[#4A4A4A] text-sm mb-2" data-magicpath-id="26" data-magicpath-path="TreatsBakesPage.tsx">
                  Check with your GP doctor about being okay with gluten traces.
                </p>
                <p className="text-[#4A4A4A] text-sm" data-magicpath-id="27" data-magicpath-path="TreatsBakesPage.tsx">
                  <span className="font-semibold" data-magicpath-id="28" data-magicpath-path="TreatsBakesPage.tsx">Allergies:</span> Nuts (cashew, pecan, walnuts, almonds, hazelnuts, Brazil nuts, pistachio nuts, macadamia nuts), peanuts and soya.
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Menu Carousel Section */}
      <SortableContainer dndKitId="6cb572cc-32e2-4f12-8080-a786decdaf4a" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="menu-heading" data-magicpath-id="29" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="19f93eba-51dd-4181-aef7-fc22760263f4" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="30" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="4c3fd06a-6c87-4edc-b740-2f1c8e8eb176" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12" data-magicpath-id="31" data-magicpath-path="TreatsBakesPage.tsx">
            <h2 id="menu-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#C17857] mb-4" data-magicpath-id="32" data-magicpath-path="TreatsBakesPage.tsx">
              Menu
            </h2>
            <p className="text-[#4A4A4A] text-lg" data-magicpath-id="33" data-magicpath-path="TreatsBakesPage.tsx">Explore our delicious treats</p>
          </SortableContainer>

          {/* Carousel Card */}
          <SortableContainer dndKitId="4756ac44-81b8-44d0-9622-1f7274a7ca23" containerType="regular" prevTag="div" className="max-w-2xl mx-auto" data-magicpath-id="34" data-magicpath-path="TreatsBakesPage.tsx">
            <SortableContainer dndKitId="12e2aa77-73ce-4366-9c10-60c6f81c3d9a" containerType="regular" prevTag="div" className="bg-white rounded-2xl shadow-2xl overflow-hidden" data-magicpath-id="35" data-magicpath-path="TreatsBakesPage.tsx">
              <SortableContainer dndKitId="4dd7cc34-8db8-436e-a230-7eb48da7650b" containerType="regular" prevTag="div" className="relative h-80 sm:h-96 overflow-hidden" data-magicpath-id="36" data-magicpath-path="TreatsBakesPage.tsx">
                <AnimatePresence mode="wait" data-magicpath-id="37" data-magicpath-path="TreatsBakesPage.tsx">
                  <SortableContainer dndKitId="732c0a6e-4a03-4400-903a-34409a7d8602" containerType="regular" prevTag="motion.div" key={currentMenuIndex} initial={{
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
                  }} className="absolute inset-0" data-magicpath-id="38" data-magicpath-path="TreatsBakesPage.tsx">
                    <img src={menuItems[currentMenuIndex].image} alt={`${menuItems[currentMenuIndex].name} - ${menuItems[currentMenuIndex].description}`} className="w-full h-full object-cover" data-magicpath-id="39" data-magicpath-path="TreatsBakesPage.tsx" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" data-magicpath-id="40" data-magicpath-path="TreatsBakesPage.tsx" />
                  </SortableContainer>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <SortableContainer dndKitId="63acff1c-5c7d-45a3-9837-543a8fb77851" containerType="regular" prevTag="button" onClick={prevMenuItem} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#C17857] p-3 rounded-full shadow-lg transition-all z-10" aria-label="Previous item" data-magicpath-id="41" data-magicpath-path="TreatsBakesPage.tsx">
                  <ChevronLeft className="w-6 h-6" data-magicpath-id="42" data-magicpath-path="TreatsBakesPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="fc66b1cb-6373-4ce7-9628-dd262a704217" containerType="regular" prevTag="button" onClick={nextMenuItem} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#C17857] p-3 rounded-full shadow-lg transition-all z-10" aria-label="Next item" data-magicpath-id="43" data-magicpath-path="TreatsBakesPage.tsx">
                  <ChevronRight className="w-6 h-6" data-magicpath-id="44" data-magicpath-path="TreatsBakesPage.tsx" />
                </SortableContainer>
              </SortableContainer>

              {/* Card Content */}
              <SortableContainer dndKitId="94a3bd87-6007-466d-80d5-a3ab8ab9f17d" containerType="regular" prevTag="div" className="p-6 sm:p-8" data-magicpath-id="45" data-magicpath-path="TreatsBakesPage.tsx">
                <AnimatePresence mode="wait" data-magicpath-id="46" data-magicpath-path="TreatsBakesPage.tsx">
                  <SortableContainer dndKitId="1fac1546-7c8a-4a7d-bb2e-120a7026be16" containerType="regular" prevTag="motion.div" key={currentMenuIndex} initial={{
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
                  }} data-magicpath-id="47" data-magicpath-path="TreatsBakesPage.tsx">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#2D2D2D] mb-3" data-magicpath-id="48" data-magicpath-path="TreatsBakesPage.tsx">
                      {menuItems[currentMenuIndex].name}
                    </h3>
                    <p className="text-[#4A4A4A] text-base sm:text-lg leading-relaxed" data-magicpath-id="49" data-magicpath-path="TreatsBakesPage.tsx">
                      {menuItems[currentMenuIndex].description}
                    </p>
                  </SortableContainer>
                </AnimatePresence>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6" data-magicpath-id="50" data-magicpath-path="TreatsBakesPage.tsx">
                  {menuItems.map((_, index) => <button key={index} onClick={() => setCurrentMenuIndex(index)} className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentMenuIndex ? 'bg-[#C17857] w-8' : 'bg-[#C17857]/30 hover:bg-[#C17857]/50'}`} aria-label={`Go to item ${index + 1}`} data-magicpath-id="51" data-magicpath-path="TreatsBakesPage.tsx" />)}
                </div>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How to Order Section */}
      <SortableContainer dndKitId="b3637791-2606-4048-9d82-31a135c85396" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" aria-labelledby="how-to-order-heading" data-magicpath-id="52" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="ec3df401-6e2a-4963-8fca-1e9509ef7c89" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="53" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="869ee91b-c494-459c-b3c1-2a0a902d9362" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} data-magicpath-id="54" data-magicpath-path="TreatsBakesPage.tsx">
            <h2 id="how-to-order-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-12 text-center" data-magicpath-id="55" data-magicpath-path="TreatsBakesPage.tsx">
              How to Order
            </h2>
            
            {/* Ordering Steps */}
            <SortableContainer dndKitId="14f8db3e-2154-4e10-b623-0ae3daf609f1" containerType="regular" prevTag="div" className="mb-12 space-y-8" data-magicpath-id="56" data-magicpath-path="TreatsBakesPage.tsx">
              <h3 className="text-2xl font-semibold text-[#C17857] mb-6 text-center" data-magicpath-id="57" data-magicpath-path="TreatsBakesPage.tsx">
                How to place your order:
              </h3>
              
              {/* Step 1 */}
              <SortableContainer dndKitId="fc764390-aad1-4778-bb43-a8cf65d6ea00" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="58" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="d3d1819a-04da-468f-8852-a5d4591b73f9" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="59" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="60" data-magicpath-path="TreatsBakesPage.tsx">
                    1
                  </div>
                  <SortableContainer dndKitId="04e51b68-9302-4cfd-a598-ac1dd3c9111c" containerType="regular" prevTag="div" data-magicpath-id="61" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="62" data-magicpath-path="TreatsBakesPage.tsx">
                      Choose the base for your pie
                    </h4>
                    <p className="text-[#4A4A4A]" data-magicpath-id="63" data-magicpath-path="TreatsBakesPage.tsx">Raw or Biscuit</p>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              
              {/* Step 2 */}
              <SortableContainer dndKitId="34ce0a51-2cfa-4531-aceb-30fe3c4056fd" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="64" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="c2ff39c8-69f0-4c67-9a51-a23838b389f0" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="65" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="66" data-magicpath-path="TreatsBakesPage.tsx">
                    2
                  </div>
                  <SortableContainer dndKitId="60344b74-649e-4310-b026-61af9e08276d" containerType="regular" prevTag="div" data-magicpath-id="67" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="68" data-magicpath-path="TreatsBakesPage.tsx">
                      Your favourite flavour (one or more)!
                    </h4>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              
              {/* Step 3 - Sizes & Pricing */}
              <SortableContainer dndKitId="b6c81dad-78ec-4e82-adb1-0f76596c8aae" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="69" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="0347dd00-9f5a-4be0-96c9-0b0e171e3990" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="70" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="71" data-magicpath-path="TreatsBakesPage.tsx">
                    3
                  </div>
                  <SortableContainer dndKitId="700f2cb1-07a0-4001-b602-48e4396a0092" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="72" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-4" data-magicpath-id="73" data-magicpath-path="TreatsBakesPage.tsx">
                      The size of your treat:
                    </h4>
                    <SortableContainer dndKitId="9926bda5-5e96-437c-a7e9-47a1ea98d7a3" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-magicpath-id="74" data-magicpath-path="TreatsBakesPage.tsx">
                      <SortableContainer dndKitId="d053d0b2-27a8-4873-b154-36ea23ebe801" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="75" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="76" data-magicpath-path="TreatsBakesPage.tsx">Pie in a Tub</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="77" data-magicpath-path="TreatsBakesPage.tsx">€7</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="bdf15330-db6c-489f-80ea-f0b2e4abe251" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="78" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="79" data-magicpath-path="TreatsBakesPage.tsx">13 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="80" data-magicpath-path="TreatsBakesPage.tsx">€13</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="646b3c18-c12d-44f5-965c-b2684d34703e" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="81" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="82" data-magicpath-path="TreatsBakesPage.tsx">16 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="83" data-magicpath-path="TreatsBakesPage.tsx">€25</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="c2e90631-3b4a-4f6b-9d45-ac66555d7464" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="84" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="85" data-magicpath-path="TreatsBakesPage.tsx">20 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="86" data-magicpath-path="TreatsBakesPage.tsx">€35</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="09093757-7022-4561-847a-a62e3945abaa" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center sm:col-span-2" data-magicpath-id="87" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="88" data-magicpath-path="TreatsBakesPage.tsx">25 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="89" data-magicpath-path="TreatsBakesPage.tsx">€45</span>
                      </SortableContainer>
                    </SortableContainer>
                    <p className="text-[#4A4A4A] mt-4 text-center italic" data-magicpath-id="90" data-magicpath-path="TreatsBakesPage.tsx">
                      Get in touch for info on slices gift boxes!
                    </p>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            
            {/* Contact & Delivery Info with WhatsApp */}
            <SortableContainer dndKitId="c4a20477-b90b-4a55-8bd8-3dfa436f5a0b" containerType="regular" prevTag="div" className="bg-[#C17857] text-white rounded-xl p-8 sm:p-10 text-center" data-magicpath-id="91" data-magicpath-path="TreatsBakesPage.tsx">
              <p className="text-xl sm:text-2xl font-semibold mb-4" data-magicpath-id="92" data-magicpath-path="TreatsBakesPage.tsx">
                Place Your Order:
              </p>
              <p className="text-lg sm:text-xl mb-6" data-magicpath-id="93" data-magicpath-path="TreatsBakesPage.tsx">Monday–Friday, 10am–5pm</p>
              
              {/* WhatsApp Order Button */}
              <SortableContainer dndKitId="ec937469-f5c9-45d2-91f1-76f959dfb844" containerType="regular" prevTag="button" onClick={handleWhatsAppOrder} className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3 mx-auto mb-6 transition-colors shadow-lg" data-magicpath-id="94" data-magicpath-path="TreatsBakesPage.tsx">
                <MessageCircle className="w-6 h-6" data-magicpath-id="95" data-magicpath-path="TreatsBakesPage.tsx" />
                Order via WhatsApp
              </SortableContainer>
              
              <SortableContainer dndKitId="be65aebd-49bd-4cee-8c93-44e43b424b37" containerType="regular" prevTag="div" className="space-y-3 text-left max-w-xl mx-auto" data-magicpath-id="96" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="e57ed8c6-0f92-4d7a-b1ac-794f3f054a88" containerType="regular" prevTag="div" className="bg-white/10 rounded-lg p-4" data-magicpath-id="97" data-magicpath-path="TreatsBakesPage.tsx">
                  <p className="text-lg font-semibold mb-1" data-magicpath-id="98" data-magicpath-path="TreatsBakesPage.tsx">Collection:</p>
                  <p className="text-white/90" data-magicpath-id="99" data-magicpath-path="TreatsBakesPage.tsx">Dun Laoghaire, County Dublin</p>
                </SortableContainer>
                <SortableContainer dndKitId="83424031-dac2-4589-97c4-afe31537d9bb" containerType="regular" prevTag="div" className="bg-white/10 rounded-lg p-4" data-magicpath-id="100" data-magicpath-path="TreatsBakesPage.tsx">
                  <p className="text-lg font-semibold mb-1" data-magicpath-id="101" data-magicpath-path="TreatsBakesPage.tsx">Saturday Delivery:</p>
                  <p className="text-white/90" data-magicpath-id="102" data-magicpath-path="TreatsBakesPage.tsx">Dublin City Centre</p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Customer Testimonials */}
      <SortableContainer dndKitId="a81b5e68-05b2-416f-801b-0e6f96760190" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#5e7155]" aria-labelledby="testimonials-heading" data-magicpath-id="103" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="5c4544d6-6d1f-4c5d-99c6-37a21ef9cf4f" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="104" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="72788474-c54b-46f5-b236-1c5ae414b0cf" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12" data-magicpath-id="105" data-magicpath-path="TreatsBakesPage.tsx">
            <h2 id="testimonials-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4" data-magicpath-id="106" data-magicpath-path="TreatsBakesPage.tsx">
              What Customers Say
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="d1d3f3d9-ffb4-4e08-86e9-2d690f0876c7" containerType="collection" prevTag="div" className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" data-magicpath-id="107" data-magicpath-path="TreatsBakesPage.tsx">
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
            }} className="bg-white rounded-lg p-6 shadow-lg" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-id="108" data-magicpath-path="TreatsBakesPage.tsx">
                <p className="text-[#4A4A4A] italic mb-4 leading-relaxed" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="quote:unknown" data-magicpath-id="109" data-magicpath-path="TreatsBakesPage.tsx">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-4" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-id="110" data-magicpath-path="TreatsBakesPage.tsx">
                  <p className="font-semibold text-[#2D2D2D]" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="author:unknown" data-magicpath-id="111" data-magicpath-path="TreatsBakesPage.tsx">{testimonial.author}</p>
                  <p className="text-[#5e7155] text-sm" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="location:unknown" data-magicpath-id="112" data-magicpath-path="TreatsBakesPage.tsx">{testimonial.location}</p>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs Section */}
      <SortableContainer dndKitId="b2633338-d74a-4af4-89db-6982aa20f656" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="faqs-heading" data-magicpath-id="113" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="648e4ca5-e45f-4804-a537-3e444c001488" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="114" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="681cf9e7-8333-4446-ae77-37e936c5c5ab" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12" data-magicpath-id="115" data-magicpath-path="TreatsBakesPage.tsx">
            <h2 id="faqs-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-4" data-magicpath-id="116" data-magicpath-path="TreatsBakesPage.tsx">
              Questions
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="72a8c42b-5fda-4bd0-88cd-ea81ba613f67" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="117" data-magicpath-path="TreatsBakesPage.tsx">
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
            }} className="bg-white rounded-lg shadow-sm overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="118" data-magicpath-path="TreatsBakesPage.tsx">
                <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-[#FFF4ED] transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="119" data-magicpath-path="TreatsBakesPage.tsx">
                  <span className="font-semibold text-[#2D2D2D] pr-4 text-base sm:text-lg" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:unknown" data-magicpath-id="120" data-magicpath-path="TreatsBakesPage.tsx">
                    {faq.question}
                  </span>
                  <ChevronRight className={`w-5 h-5 text-[#C17857] transition-transform flex-shrink-0 ${expandedFaq === index ? 'rotate-90' : ''}`} data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="121" data-magicpath-path="TreatsBakesPage.tsx" />
                </button>
                <AnimatePresence data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="122" data-magicpath-path="TreatsBakesPage.tsx">
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
                }} className="overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="123" data-magicpath-path="TreatsBakesPage.tsx">
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="124" data-magicpath-path="TreatsBakesPage.tsx">
                        <p className="text-[#4A4A4A] leading-relaxed" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:unknown" data-magicpath-id="125" data-magicpath-path="TreatsBakesPage.tsx">{faq.answer}</p>
                      </div>
                    </motion.div>}
                </AnimatePresence>
              </motion.div>)}
          </SortableContainer>

          <SortableContainer dndKitId="907ffea2-ba1b-4c9a-b794-1e81b82a3112" containerType="regular" prevTag="div" className="text-center mt-8" data-magicpath-id="126" data-magicpath-path="TreatsBakesPage.tsx">
            <button onClick={() => onNavigate?.('#contact')} className="text-[#C17857] hover:text-[#B06847] font-semibold text-lg underline" data-magicpath-id="127" data-magicpath-path="TreatsBakesPage.tsx">
              More Questions? Contact Me
            </button>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Call to Action */}
      <SortableContainer dndKitId="bcefa9e7-886d-4e67-b4e8-b04c0febd103" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#C17857] to-[#5e7155]" aria-labelledby="cta-heading" data-magicpath-id="128" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="eb320ac2-c4c2-454b-8660-157884dacf85" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="129" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="8898571b-191a-4734-a3e3-974154b3c436" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} data-magicpath-id="130" data-magicpath-path="TreatsBakesPage.tsx">
            <h2 id="cta-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6" data-magicpath-id="131" data-magicpath-path="TreatsBakesPage.tsx">
              Ready to Feel Cared For?
            </h2>
            <p className="text-white/90 text-lg sm:text-xl mb-8 max-w-2xl mx-auto" data-magicpath-id="132" data-magicpath-path="TreatsBakesPage.tsx">
              Order fresh-baked treats made with love and wholesome ingredients
            </p>
            <SortableContainer dndKitId="8e0ba749-7385-4329-99dc-3aba2ca9051d" containerType="regular" prevTag="button" onClick={handleWhatsAppOrder} className="bg-white text-[#C17857] px-8 sm:px-10 py-4 rounded-full hover:bg-[#F5F1E8] transition-colors font-semibold text-base sm:text-lg shadow-xl flex items-center justify-center gap-3 mx-auto" data-magicpath-id="133" data-magicpath-path="TreatsBakesPage.tsx">
              <MessageCircle className="w-5 h-5" data-magicpath-id="134" data-magicpath-path="TreatsBakesPage.tsx" />
              Place an Order
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
}