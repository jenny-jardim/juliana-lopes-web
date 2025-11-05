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
    mpid: "db0c0f8f-ba3a-42b5-b0f7-4ae5c590ef82"
  }, {
    name: "Brownies",
    description: "Rich, satisfying, completely plant-based",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    mpid: "4827820b-bd7a-4cd0-ab5f-dc336e57f786"
  }, {
    name: "Cookies",
    description: "Crispy edges, chewy centers, pure comfort",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80",
    mpid: "435d25d4-1a50-48ae-b161-a79469d61e0f"
  }, {
    name: "Blondies",
    description: "Golden, buttery, irresistibly sweet",
    image: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&q=80",
    mpid: "476c6ff2-8852-42ce-a243-5420f1a7e4d3"
  }, {
    name: "Seasonal Treats",
    description: "Panettones (December) and seasonal specialties",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    mpid: "7a4490d3-cef5-44e7-8427-739150d04cf3"
  }, {
    name: "Custom Orders",
    description: "Corporate gifts, event platters, dietary needs—just ask",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80",
    mpid: "3c450a3d-b8e3-4937-8374-bb2132b699be"
  }] as any[];
  const testimonials = [{
    quote: "I'm vegan and gluten-free. Juliana's treats make me feel genuinely cared for.",
    author: "Róisín",
    location: "Dublin",
    mpid: "4d708670-940d-4e66-9b09-1c5a47d8f200"
  }, {
    quote: "I order every two weeks for my team. Everyone fights over what they get.",
    author: "Priya",
    location: "Dublin",
    mpid: "a4fa0896-c8ae-4491-9f7d-20ca9ada2a30"
  }, {
    quote: "I'll spend more on Pep Me Up because I trust the quality and intention behind it.",
    author: "Michael",
    location: "Dublin",
    mpid: "6f2a3378-bca1-4ea6-9289-cf245633ad4a"
  }] as any[];
  const faqs = [{
    question: "How long do treats stay fresh?",
    answer: "5-7 days when stored properly. Storage instructions included.",
    mpid: "c8fc3a7b-23b3-4fbf-910c-51c5e55dd316"
  }, {
    question: "Minimum order?",
    answer: "Depends on what you want—reach out and we'll figure it out.",
    mpid: "260cac2c-b828-4f07-8e3f-e0de6550f11a"
  }, {
    question: "Corporate gifts?",
    answer: "Absolutely. It's a thoughtful, homemade way to show appreciation.",
    mpid: "f1280c04-cade-498f-b74d-e33ce10c6c5a"
  }, {
    question: "Custom flavors?",
    answer: "Yes! Tell me what you're craving.",
    mpid: "f0f1d935-584b-45ea-bf7e-18454fd97928"
  }, {
    question: "Why the higher price?",
    answer: "Fresh baked, whole ingredients, genuine care. No mass production. Worth every penny.",
    mpid: "00e64ee2-2afd-4d12-a20d-b3ffd823a296"
  }, {
    question: "Serious allergies?",
    answer: "Yes, I work with you safely.",
    mpid: "75c16489-e802-4f6a-bc47-2fad832b9f8e"
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
  return <SortableContainer dndKitId="86d52f23-b48e-4309-90cf-3c9d19121b52" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="TreatsBakesPage.tsx">
      {/* Hero Section with Pep Me Up Logo - Redesigned */}
      <SortableContainer dndKitId="152f4ec1-f47c-4ed8-a741-f272ede4e208" containerType="regular" prevTag="section" className="relative py-12 sm:py-16 px-4 sm:px-6 bg-[#FCF2E3]" role="banner" aria-label="Pep Me Up treats and bakes hero section" data-magicpath-id="1" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="434c36e9-9b15-42bd-a258-c14770062668" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="2" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="8adbdb25-f890-4a0f-b5b8-bb0f450a2563" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-magicpath-id="3" data-magicpath-path="TreatsBakesPage.tsx">
            {/* Left: Logo */}
            <SortableContainer dndKitId="47aedf5b-981d-4d07-9091-933d8c1e4a0d" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            x: -30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} className="flex justify-center md:justify-start" data-magicpath-id="4" data-magicpath-path="TreatsBakesPage.tsx">
              <SortableContainer dndKitId="28b09f5f-3826-481a-85d1-9106af51671e" containerType="regular" prevTag="div" className="relative w-56 h-56 sm:w-64 sm:h-64" data-magicpath-id="5" data-magicpath-path="TreatsBakesPage.tsx">
                <img src="https://storage.googleapis.com/magicpoint-public-assets/user/300600264317087744/assets/41c65110-9aa0-4c4f-9281-d9eb3017d4d8.png" alt="Pep Me Up logo - plant-based gluten-free treats" className="w-full h-full object-contain filter drop-shadow-2xl" data-magicpath-id="6" data-magicpath-path="TreatsBakesPage.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Right: Headline and Text */}
            <SortableContainer dndKitId="0692d295-3169-4946-923a-466540361bfe" containerType="regular" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="8a33dca2-2d11-4875-b6e1-3eec4fe2c1ae" containerType="regular" prevTag="main" data-magicpath-id="10" data-magicpath-path="TreatsBakesPage.tsx">
      <SortableContainer dndKitId="73a5c8ac-461b-42ef-b519-56d8e14c824a" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" aria-labelledby="why-pep-me-up-heading" data-magicpath-id="11" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="5a5240ba-4d6d-459b-bfee-33555296e4c8" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="12" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="7b0e2f9c-4c5e-4d36-856a-98c1729b8a36" containerType="regular" prevTag="motion.div" initial={{
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
            {["Baked fresh, never mass-produced", "Whole ingredients, real nutrition", "Plant-based & gluten-friendly always", "Homemade feeling, professional quality", "A reminder that you're worth the care"].map((benefit, index) => <SortableContainer dndKitId="78e3e197-1d4c-41f5-9bf6-703c9da4beac" containerType="regular" prevTag="motion.div" key={index} initial={{
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
      <SortableContainer dndKitId="3d713a41-7c26-4430-a98a-dd2f683228d2" containerType="regular" prevTag="section" className="py-10 px-4 sm:px-6 bg-[#FFF4ED]" aria-labelledby="safety-heading" data-magicpath-id="19" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="187eb243-dd01-4761-903f-c040f2a4b4c7" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="20" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="0ea2bf2c-8c20-42cd-bb71-2a77af08e895" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="97b3b87b-8f7c-40db-b77b-dd313f97d3f9" containerType="regular" prevTag="div" className="flex items-start gap-3" data-magicpath-id="22" data-magicpath-path="TreatsBakesPage.tsx">
              <AlertCircle className="w-5 h-5 text-[#C17857] flex-shrink-0 mt-0.5" aria-hidden="true" data-magicpath-id="23" data-magicpath-path="TreatsBakesPage.tsx" />
              <SortableContainer dndKitId="19ddd9ed-29d5-460d-8d8e-82160a29aee3" containerType="regular" prevTag="div" data-magicpath-id="24" data-magicpath-path="TreatsBakesPage.tsx">
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
      <SortableContainer dndKitId="334c2932-778b-4374-b6e7-1864a028f96f" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="menu-heading" data-magicpath-id="29" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="fffb5d4d-be43-47ea-8264-d66fd188ab35" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="30" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="44e9175e-6c09-47e3-9209-27f19d5452dc" containerType="regular" prevTag="motion.div" initial={{
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
          <SortableContainer dndKitId="6da0009b-ab36-4158-ade4-2a0dd4f5a5aa" containerType="regular" prevTag="div" className="max-w-2xl mx-auto" data-magicpath-id="34" data-magicpath-path="TreatsBakesPage.tsx">
            <SortableContainer dndKitId="1e5667fc-299b-4b23-9898-2f9582fb32ed" containerType="regular" prevTag="div" className="bg-white rounded-2xl shadow-2xl overflow-hidden" data-magicpath-id="35" data-magicpath-path="TreatsBakesPage.tsx">
              <SortableContainer dndKitId="fe1dd737-2673-4db7-8e57-09197adfef03" containerType="regular" prevTag="div" className="relative h-80 sm:h-96 overflow-hidden" data-magicpath-id="36" data-magicpath-path="TreatsBakesPage.tsx">
                <AnimatePresence mode="wait" data-magicpath-id="37" data-magicpath-path="TreatsBakesPage.tsx">
                  <SortableContainer dndKitId="f1c63e20-646a-4bdf-98da-d5c0e8828064" containerType="regular" prevTag="motion.div" key={currentMenuIndex} initial={{
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
                <SortableContainer dndKitId="d17413d9-86b1-4da4-8e3c-f10e2675cf1b" containerType="regular" prevTag="button" onClick={prevMenuItem} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#C17857] p-3 rounded-full shadow-lg transition-all z-10" aria-label="Previous item" data-magicpath-id="41" data-magicpath-path="TreatsBakesPage.tsx">
                  <ChevronLeft className="w-6 h-6" data-magicpath-id="42" data-magicpath-path="TreatsBakesPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="c392c97f-9dc7-460f-acc9-55a6c35b3236" containerType="regular" prevTag="button" onClick={nextMenuItem} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#C17857] p-3 rounded-full shadow-lg transition-all z-10" aria-label="Next item" data-magicpath-id="43" data-magicpath-path="TreatsBakesPage.tsx">
                  <ChevronRight className="w-6 h-6" data-magicpath-id="44" data-magicpath-path="TreatsBakesPage.tsx" />
                </SortableContainer>
              </SortableContainer>

              {/* Card Content */}
              <SortableContainer dndKitId="01f380a4-fec7-49aa-8ebb-fed86c762108" containerType="regular" prevTag="div" className="p-6 sm:p-8" data-magicpath-id="45" data-magicpath-path="TreatsBakesPage.tsx">
                <AnimatePresence mode="wait" data-magicpath-id="46" data-magicpath-path="TreatsBakesPage.tsx">
                  <SortableContainer dndKitId="c06dbb8c-e013-478c-ba3b-cfbb7891cb52" containerType="regular" prevTag="motion.div" key={currentMenuIndex} initial={{
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
      <SortableContainer dndKitId="0a5ac9d6-7717-4bad-8dc1-7897f728eb07" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" aria-labelledby="how-to-order-heading" data-magicpath-id="52" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="4e057342-0c7c-479d-a005-c5fcd1413f66" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="53" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="4aa1e2b4-cbd3-4d83-988d-ed359e8c1e9a" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="6040cba8-6428-49b9-ba22-458f61f674a9" containerType="regular" prevTag="div" className="mb-12 space-y-8" data-magicpath-id="56" data-magicpath-path="TreatsBakesPage.tsx">
              <h3 className="text-2xl font-semibold text-[#C17857] mb-6 text-center" data-magicpath-id="57" data-magicpath-path="TreatsBakesPage.tsx">
                How to place your order:
              </h3>
              
              {/* Step 1 */}
              <SortableContainer dndKitId="9762a630-169f-4059-811a-69036a51f5d5" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="58" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="4d48a7f0-b653-4ab1-82e1-409f8f7a33ee" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="59" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="60" data-magicpath-path="TreatsBakesPage.tsx">
                    1
                  </div>
                  <SortableContainer dndKitId="c86336ae-4672-431e-b5c0-acf909b65aab" containerType="regular" prevTag="div" data-magicpath-id="61" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="62" data-magicpath-path="TreatsBakesPage.tsx">
                      Choose the base for your pie
                    </h4>
                    <p className="text-[#4A4A4A]" data-magicpath-id="63" data-magicpath-path="TreatsBakesPage.tsx">Raw or Biscuit</p>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              
              {/* Step 2 */}
              <SortableContainer dndKitId="785451a2-a92f-4c2b-a840-b54177216faf" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="64" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="10a83d36-bb99-4cc2-87f0-cf442939d147" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="65" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="66" data-magicpath-path="TreatsBakesPage.tsx">
                    2
                  </div>
                  <SortableContainer dndKitId="34e51252-944d-4137-acde-25679849294e" containerType="regular" prevTag="div" data-magicpath-id="67" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="68" data-magicpath-path="TreatsBakesPage.tsx">
                      Your favourite flavour (one or more)!
                    </h4>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              
              {/* Step 3 - Sizes & Pricing */}
              <SortableContainer dndKitId="0a77fb5d-6afb-4230-a6b1-6d0717b42a00" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="69" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="93b467b7-c407-41a3-8cc1-1d86df00eeb2" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="70" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="71" data-magicpath-path="TreatsBakesPage.tsx">
                    3
                  </div>
                  <SortableContainer dndKitId="9320ebda-93f5-4316-9daa-e514d846110c" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="72" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-4" data-magicpath-id="73" data-magicpath-path="TreatsBakesPage.tsx">
                      The size of your treat:
                    </h4>
                    <SortableContainer dndKitId="74dbb74f-1bd2-4c8e-9d2f-9de1375dd80d" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-magicpath-id="74" data-magicpath-path="TreatsBakesPage.tsx">
                      <SortableContainer dndKitId="7d75dc52-ce25-43ea-9a8a-4247d80fcf5c" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="75" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="76" data-magicpath-path="TreatsBakesPage.tsx">Pie in a Tub</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="77" data-magicpath-path="TreatsBakesPage.tsx">€7</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="95d8ddc9-aec6-4132-8913-78c2b382d66c" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="78" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="79" data-magicpath-path="TreatsBakesPage.tsx">13 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="80" data-magicpath-path="TreatsBakesPage.tsx">€13</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="da54215a-db17-466c-a7df-5fa6dda6f135" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="81" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="82" data-magicpath-path="TreatsBakesPage.tsx">16 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="83" data-magicpath-path="TreatsBakesPage.tsx">€25</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="45a6f990-fad3-481d-9d1a-847d9fc56fc9" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="84" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="85" data-magicpath-path="TreatsBakesPage.tsx">20 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="86" data-magicpath-path="TreatsBakesPage.tsx">€35</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="5b96fcbb-4981-4307-abbd-580e7839fe89" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center sm:col-span-2" data-magicpath-id="87" data-magicpath-path="TreatsBakesPage.tsx">
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
            <SortableContainer dndKitId="efb83e8f-9fd5-434c-b548-91db724e5b58" containerType="regular" prevTag="div" className="bg-[#C17857] text-white rounded-xl p-8 sm:p-10 text-center" data-magicpath-id="91" data-magicpath-path="TreatsBakesPage.tsx">
              <p className="text-xl sm:text-2xl font-semibold mb-4" data-magicpath-id="92" data-magicpath-path="TreatsBakesPage.tsx">
                Place Your Order:
              </p>
              <p className="text-lg sm:text-xl mb-6" data-magicpath-id="93" data-magicpath-path="TreatsBakesPage.tsx">Monday–Friday, 10am–5pm</p>
              
              {/* WhatsApp Order Button */}
              <SortableContainer dndKitId="5429287b-ecb4-4434-aa13-280495ebdc8c" containerType="regular" prevTag="button" onClick={handleWhatsAppOrder} className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3 mx-auto mb-6 transition-colors shadow-lg" data-magicpath-id="94" data-magicpath-path="TreatsBakesPage.tsx">
                <MessageCircle className="w-6 h-6" data-magicpath-id="95" data-magicpath-path="TreatsBakesPage.tsx" />
                Order via WhatsApp
              </SortableContainer>
              
              <SortableContainer dndKitId="963520aa-2252-48ac-a2e6-b9166809e600" containerType="regular" prevTag="div" className="space-y-3 text-left max-w-xl mx-auto" data-magicpath-id="96" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="2eef75a0-994a-4924-9bcc-5c80cd1f773d" containerType="regular" prevTag="div" className="bg-white/10 rounded-lg p-4" data-magicpath-id="97" data-magicpath-path="TreatsBakesPage.tsx">
                  <p className="text-lg font-semibold mb-1" data-magicpath-id="98" data-magicpath-path="TreatsBakesPage.tsx">Collection:</p>
                  <p className="text-white/90" data-magicpath-id="99" data-magicpath-path="TreatsBakesPage.tsx">Dun Laoghaire, County Dublin</p>
                </SortableContainer>
                <SortableContainer dndKitId="06f0a74b-ae58-4b4b-afb7-75e5b4b7cbab" containerType="regular" prevTag="div" className="bg-white/10 rounded-lg p-4" data-magicpath-id="100" data-magicpath-path="TreatsBakesPage.tsx">
                  <p className="text-lg font-semibold mb-1" data-magicpath-id="101" data-magicpath-path="TreatsBakesPage.tsx">Saturday Delivery:</p>
                  <p className="text-white/90" data-magicpath-id="102" data-magicpath-path="TreatsBakesPage.tsx">Dublin City Centre</p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Customer Testimonials */}
      <SortableContainer dndKitId="a02566c6-d037-4bac-bd79-0813d5c0247a" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#5e7155]" aria-labelledby="testimonials-heading" data-magicpath-id="103" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="c9f72ffb-5c08-45b7-9b38-4052c8aec99f" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="104" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="943a1caa-4428-4522-9c18-21ba58291c8b" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="a3ac9ceb-00ba-436e-8f78-602e8a2c8b2e" containerType="collection" prevTag="div" className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" data-magicpath-id="107" data-magicpath-path="TreatsBakesPage.tsx">
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
      <SortableContainer dndKitId="32c42dfd-9a4d-4626-9fab-2f7da9aac62f" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="faqs-heading" data-magicpath-id="113" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="2b7cbeed-df4f-4967-9072-e45d29743905" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="114" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="0a1a0e97-3ea0-4d38-bfd0-787844049d88" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="21552f85-b447-48b3-bbf0-9d7831073582" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="117" data-magicpath-path="TreatsBakesPage.tsx">
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

          <SortableContainer dndKitId="b3c07bb1-ac73-4bdc-aa41-bbd68dbf6752" containerType="regular" prevTag="div" className="text-center mt-8" data-magicpath-id="126" data-magicpath-path="TreatsBakesPage.tsx">
            <button onClick={() => onNavigate?.('#contact')} className="text-[#C17857] hover:text-[#B06847] font-semibold text-lg underline" data-magicpath-id="127" data-magicpath-path="TreatsBakesPage.tsx">
              More Questions? Contact Me
            </button>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Call to Action */}
      <SortableContainer dndKitId="bd36150e-a3e7-40db-bb8d-c0f6fe4b0bf5" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#C17857] to-[#5e7155]" aria-labelledby="cta-heading" data-magicpath-id="128" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="be3bd8dc-137a-40a4-b5d6-78868c4712c6" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="129" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="2c4e5096-ba55-4086-9977-61fe933ac754" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="3e5d3ac1-458a-4518-a382-dce10b8dcd92" containerType="regular" prevTag="button" onClick={handleWhatsAppOrder} className="bg-white text-[#C17857] px-8 sm:px-10 py-4 rounded-full hover:bg-[#F5F1E8] transition-colors font-semibold text-base sm:text-lg shadow-xl flex items-center justify-center gap-3 mx-auto" data-magicpath-id="133" data-magicpath-path="TreatsBakesPage.tsx">
              <MessageCircle className="w-5 h-5" data-magicpath-id="134" data-magicpath-path="TreatsBakesPage.tsx" />
              Place an Order
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
}