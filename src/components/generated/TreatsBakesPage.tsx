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
    mpid: "e54f7aec-3226-4968-b145-8d2adf69afd1"
  }, {
    name: "Brownies",
    description: "Rich, satisfying, completely plant-based",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    mpid: "97b676d3-eed3-428d-8d02-2f8ca0f66aa8"
  }, {
    name: "Cookies",
    description: "Crispy edges, chewy centers, pure comfort",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80",
    mpid: "3b1427b7-e79b-45bb-92eb-1f0ef4731cd2"
  }, {
    name: "Blondies",
    description: "Golden, buttery, irresistibly sweet",
    image: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&q=80",
    mpid: "16b755cd-d1a2-4777-a3c1-4b0258678c75"
  }, {
    name: "Seasonal Treats",
    description: "Panettones (December) and seasonal specialties",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    mpid: "6569a90b-2502-4b32-9378-4562e29289f6"
  }, {
    name: "Custom Orders",
    description: "Corporate gifts, event platters, dietary needs—just ask",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80",
    mpid: "d48f031d-980a-4e00-a852-a6bc8bca680c"
  }] as any[];
  const testimonials = [{
    quote: "I'm vegan and gluten-free. Juliana's treats make me feel genuinely cared for.",
    author: "Róisín",
    location: "Dublin",
    mpid: "ca8ff87f-19d2-4691-9e97-a327b53ff2a0"
  }, {
    quote: "I order every two weeks for my team. Everyone fights over what they get.",
    author: "Priya",
    location: "Dublin",
    mpid: "2978296d-a1e2-48b7-8fff-2e8584dc3875"
  }, {
    quote: "I'll spend more on Pep Me Up because I trust the quality and intention behind it.",
    author: "Michael",
    location: "Dublin",
    mpid: "fd304441-9ada-4ad8-a01f-6b903c1edc4d"
  }] as any[];
  const faqs = [{
    question: "How long do treats stay fresh?",
    answer: "5-7 days when stored properly. Storage instructions included.",
    mpid: "71c796e6-da4f-45c8-b8bf-1e2cbe9f90c2"
  }, {
    question: "Minimum order?",
    answer: "Depends on what you want—reach out and we'll figure it out.",
    mpid: "3546e598-f459-44c5-8472-a60b33d64e8e"
  }, {
    question: "Corporate gifts?",
    answer: "Absolutely. It's a thoughtful, homemade way to show appreciation.",
    mpid: "fd1044e0-ebeb-4940-bc31-1c4523d40df6"
  }, {
    question: "Custom flavors?",
    answer: "Yes! Tell me what you're craving.",
    mpid: "7ac64a89-e339-45f8-be24-64d85a2ea9d9"
  }, {
    question: "Why the higher price?",
    answer: "Fresh baked, whole ingredients, genuine care. No mass production. Worth every penny.",
    mpid: "611dccce-6f83-4bc3-9dd6-4b2fa43fd3d9"
  }, {
    question: "Serious allergies?",
    answer: "Yes, I work with you safely.",
    mpid: "aca7eea2-7214-4e0d-82c7-170497789585"
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
  return <SortableContainer dndKitId="a7b33c35-0137-4f90-bc96-a30be62c830a" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="TreatsBakesPage.tsx">
      {/* Hero Section with Pep Me Up Logo - Redesigned */}
      <SortableContainer dndKitId="e6884045-965a-4476-a929-f9ba62347645" containerType="regular" prevTag="section" className="relative py-12 sm:py-16 px-4 sm:px-6 bg-[#FCF2E3]" role="banner" aria-label="Pep Me Up treats and bakes hero section" data-magicpath-id="1" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="dcfa8125-b33b-4b5b-864c-f2b68f455125" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="2" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="c5dc2df5-5e44-4696-85f7-46401c4ffbb9" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-magicpath-id="3" data-magicpath-path="TreatsBakesPage.tsx">
            {/* Left: Logo */}
            <SortableContainer dndKitId="82e86f70-b16f-4531-a30c-6bbd73a4853e" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            x: -30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} className="flex justify-center md:justify-start" data-magicpath-id="4" data-magicpath-path="TreatsBakesPage.tsx">
              <SortableContainer dndKitId="ec85cf6e-bfb3-468b-9593-a4d3a80f9c45" containerType="regular" prevTag="div" className="relative w-56 h-56 sm:w-64 sm:h-64" data-magicpath-id="5" data-magicpath-path="TreatsBakesPage.tsx">
                <img src="https://storage.googleapis.com/magicpoint-public-assets/user/300600264317087744/assets/41c65110-9aa0-4c4f-9281-d9eb3017d4d8.png" alt="Pep Me Up logo - plant-based gluten-free treats" className="w-full h-full object-contain filter drop-shadow-2xl" data-magicpath-id="6" data-magicpath-path="TreatsBakesPage.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Right: Headline and Text */}
            <SortableContainer dndKitId="697dd25f-917e-4efc-9a6f-825892ab884a" containerType="regular" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="248f8fee-9eca-40f2-b363-2a6e44919408" containerType="regular" prevTag="main" data-magicpath-id="10" data-magicpath-path="TreatsBakesPage.tsx">
      <SortableContainer dndKitId="c891b43a-ceee-4749-b33e-10a1c8b9e8fc" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" aria-labelledby="why-pep-me-up-heading" data-magicpath-id="11" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="cf30d0f3-ba73-41b6-8456-d7d39235dbd1" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="12" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="bc38eeae-4649-466f-94a8-139185de5882" containerType="regular" prevTag="motion.div" initial={{
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
            {["Baked fresh, never mass-produced", "Whole ingredients, real nutrition", "Plant-based & gluten-friendly always", "Homemade feeling, professional quality", "A reminder that you're worth the care"].map((benefit, index) => <SortableContainer dndKitId="8422c730-bba8-403f-8939-8ca9455f8cdf" containerType="regular" prevTag="motion.div" key={index} initial={{
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
      <SortableContainer dndKitId="97961260-1549-4163-b5b4-2ae76f0b8594" containerType="regular" prevTag="section" className="py-10 px-4 sm:px-6 bg-[#FFF4ED]" aria-labelledby="safety-heading" data-magicpath-id="19" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="953f6179-3fee-496a-9fd5-a299cb95467b" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="20" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="715f692b-5ca4-4e49-9b85-5e23769bfc6d" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="d970d232-9824-46dc-bd46-2d01c92dde49" containerType="regular" prevTag="div" className="flex items-start gap-3" data-magicpath-id="22" data-magicpath-path="TreatsBakesPage.tsx">
              <AlertCircle className="w-5 h-5 text-[#C17857] flex-shrink-0 mt-0.5" aria-hidden="true" data-magicpath-id="23" data-magicpath-path="TreatsBakesPage.tsx" />
              <SortableContainer dndKitId="5c87acee-7a46-41de-b3a0-9e8b774916af" containerType="regular" prevTag="div" data-magicpath-id="24" data-magicpath-path="TreatsBakesPage.tsx">
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
      <SortableContainer dndKitId="6c7c752c-5a65-4d4a-bf75-be77f0f571b3" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="menu-heading" data-magicpath-id="29" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="f7b3aefd-2583-4a13-b944-7d879e684162" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="30" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="1497d07f-cbb3-4401-8100-973051a57e1b" containerType="regular" prevTag="motion.div" initial={{
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
          <SortableContainer dndKitId="8a020b77-43ce-4c41-b21e-2031949aae29" containerType="regular" prevTag="div" className="max-w-2xl mx-auto" data-magicpath-id="34" data-magicpath-path="TreatsBakesPage.tsx">
            <SortableContainer dndKitId="76969081-9d18-4477-971e-fdd798a77d77" containerType="regular" prevTag="div" className="bg-white rounded-2xl shadow-2xl overflow-hidden" data-magicpath-id="35" data-magicpath-path="TreatsBakesPage.tsx">
              <SortableContainer dndKitId="09629a26-48f3-4b88-87e9-6e6bcf44458c" containerType="regular" prevTag="div" className="relative h-80 sm:h-96 overflow-hidden" data-magicpath-id="36" data-magicpath-path="TreatsBakesPage.tsx">
                <AnimatePresence mode="wait" data-magicpath-id="37" data-magicpath-path="TreatsBakesPage.tsx">
                  <SortableContainer dndKitId="0fcabab7-4177-47b6-af8c-17e24549d49f" containerType="regular" prevTag="motion.div" key={currentMenuIndex} initial={{
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
                <SortableContainer dndKitId="e79cd3d3-8c2a-4a84-942b-0f4265e7aeed" containerType="regular" prevTag="button" onClick={prevMenuItem} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#C17857] p-3 rounded-full shadow-lg transition-all z-10" aria-label="Previous item" data-magicpath-id="41" data-magicpath-path="TreatsBakesPage.tsx">
                  <ChevronLeft className="w-6 h-6" data-magicpath-id="42" data-magicpath-path="TreatsBakesPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="bb7c1f3d-3a9b-405a-9058-64a351490958" containerType="regular" prevTag="button" onClick={nextMenuItem} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#C17857] p-3 rounded-full shadow-lg transition-all z-10" aria-label="Next item" data-magicpath-id="43" data-magicpath-path="TreatsBakesPage.tsx">
                  <ChevronRight className="w-6 h-6" data-magicpath-id="44" data-magicpath-path="TreatsBakesPage.tsx" />
                </SortableContainer>
              </SortableContainer>

              {/* Card Content */}
              <SortableContainer dndKitId="04e14177-340c-45d9-85d3-cae28774b29f" containerType="regular" prevTag="div" className="p-6 sm:p-8" data-magicpath-id="45" data-magicpath-path="TreatsBakesPage.tsx">
                <AnimatePresence mode="wait" data-magicpath-id="46" data-magicpath-path="TreatsBakesPage.tsx">
                  <SortableContainer dndKitId="1d4f56fa-5768-418f-8ead-bb0a342b4a87" containerType="regular" prevTag="motion.div" key={currentMenuIndex} initial={{
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
      <SortableContainer dndKitId="36dbdf95-8383-46a9-a515-c11fabe5325b" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" aria-labelledby="how-to-order-heading" data-magicpath-id="52" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="4acb6e8f-4433-43bd-bfbd-d31e10b26ade" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="53" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="3cd480c5-6c70-4c3b-9b83-158aebc91091" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="5e64652a-e898-48b1-8848-685641dcb819" containerType="regular" prevTag="div" className="mb-12 space-y-8" data-magicpath-id="56" data-magicpath-path="TreatsBakesPage.tsx">
              <h3 className="text-2xl font-semibold text-[#C17857] mb-6 text-center" data-magicpath-id="57" data-magicpath-path="TreatsBakesPage.tsx">
                How to place your order:
              </h3>
              
              {/* Step 1 */}
              <SortableContainer dndKitId="61e86a3d-8bfa-4790-98b1-72aaa8bbf864" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="58" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="2c346e17-d286-46a3-9106-398154878d83" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="59" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="60" data-magicpath-path="TreatsBakesPage.tsx">
                    1
                  </div>
                  <SortableContainer dndKitId="761b4961-ab14-4a8e-bbd3-1b78778ed118" containerType="regular" prevTag="div" data-magicpath-id="61" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="62" data-magicpath-path="TreatsBakesPage.tsx">
                      Choose the base for your pie
                    </h4>
                    <p className="text-[#4A4A4A]" data-magicpath-id="63" data-magicpath-path="TreatsBakesPage.tsx">Raw or Biscuit</p>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              
              {/* Step 2 */}
              <SortableContainer dndKitId="d933f88b-e8d4-4851-81fb-4d3b181176bb" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="64" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="080d721a-5f38-444d-8d3a-3e5cc22d19cc" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="65" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="66" data-magicpath-path="TreatsBakesPage.tsx">
                    2
                  </div>
                  <SortableContainer dndKitId="f1808606-6f2e-4790-9ebb-5ebeb7b486e0" containerType="regular" prevTag="div" data-magicpath-id="67" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="68" data-magicpath-path="TreatsBakesPage.tsx">
                      Your favourite flavour (one or more)!
                    </h4>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              
              {/* Step 3 - Sizes & Pricing */}
              <SortableContainer dndKitId="4abda4d6-3fa2-415b-b841-2cf186516cb0" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="69" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="23dd417b-8563-413f-9801-4a05624ccbbd" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="70" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="71" data-magicpath-path="TreatsBakesPage.tsx">
                    3
                  </div>
                  <SortableContainer dndKitId="37c948b4-2ccb-49c4-b1a8-d5e65275aa9d" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="72" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-4" data-magicpath-id="73" data-magicpath-path="TreatsBakesPage.tsx">
                      The size of your treat:
                    </h4>
                    <SortableContainer dndKitId="07606571-ee49-4248-af3b-73cdebc8f8cd" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-magicpath-id="74" data-magicpath-path="TreatsBakesPage.tsx">
                      <SortableContainer dndKitId="f7072a90-84bd-4b3e-aa03-53dafc1ea6cf" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="75" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="76" data-magicpath-path="TreatsBakesPage.tsx">Pie in a Tub</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="77" data-magicpath-path="TreatsBakesPage.tsx">€7</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="82fda5f4-a78d-4ce5-a3d9-91f8b358899f" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="78" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="79" data-magicpath-path="TreatsBakesPage.tsx">13 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="80" data-magicpath-path="TreatsBakesPage.tsx">€13</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="7955b5fe-a61d-4742-a64f-41f1f3493885" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="81" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="82" data-magicpath-path="TreatsBakesPage.tsx">16 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="83" data-magicpath-path="TreatsBakesPage.tsx">€25</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="a5bd691d-d71e-414c-aa45-716e4e532582" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="84" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="85" data-magicpath-path="TreatsBakesPage.tsx">20 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="86" data-magicpath-path="TreatsBakesPage.tsx">€35</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="e337a089-a4f5-4e89-b1bb-f667325b7619" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center sm:col-span-2" data-magicpath-id="87" data-magicpath-path="TreatsBakesPage.tsx">
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
            <SortableContainer dndKitId="70c86941-9967-48f2-9c65-8c649c4cc3e7" containerType="regular" prevTag="div" className="bg-[#C17857] text-white rounded-xl p-8 sm:p-10 text-center" data-magicpath-id="91" data-magicpath-path="TreatsBakesPage.tsx">
              <p className="text-xl sm:text-2xl font-semibold mb-4" data-magicpath-id="92" data-magicpath-path="TreatsBakesPage.tsx">
                Place Your Order:
              </p>
              <p className="text-lg sm:text-xl mb-6" data-magicpath-id="93" data-magicpath-path="TreatsBakesPage.tsx">Monday–Friday, 10am–5pm</p>
              
              {/* WhatsApp Order Button */}
              <SortableContainer dndKitId="d230ea1f-f2e7-4db4-a2f8-21574533eeed" containerType="regular" prevTag="button" onClick={handleWhatsAppOrder} className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3 mx-auto mb-6 transition-colors shadow-lg" data-magicpath-id="94" data-magicpath-path="TreatsBakesPage.tsx">
                <MessageCircle className="w-6 h-6" data-magicpath-id="95" data-magicpath-path="TreatsBakesPage.tsx" />
                Order via WhatsApp
              </SortableContainer>
              
              <SortableContainer dndKitId="7948fb9d-0283-4bfe-a54a-fdebd8c4d798" containerType="regular" prevTag="div" className="space-y-3 text-left max-w-xl mx-auto" data-magicpath-id="96" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="23f4244b-7781-4575-a242-2db0286084c9" containerType="regular" prevTag="div" className="bg-white/10 rounded-lg p-4" data-magicpath-id="97" data-magicpath-path="TreatsBakesPage.tsx">
                  <p className="text-lg font-semibold mb-1" data-magicpath-id="98" data-magicpath-path="TreatsBakesPage.tsx">Collection:</p>
                  <p className="text-white/90" data-magicpath-id="99" data-magicpath-path="TreatsBakesPage.tsx">Dun Laoghaire, County Dublin</p>
                </SortableContainer>
                <SortableContainer dndKitId="d3d113fa-30e2-4aad-b011-c7e16da09145" containerType="regular" prevTag="div" className="bg-white/10 rounded-lg p-4" data-magicpath-id="100" data-magicpath-path="TreatsBakesPage.tsx">
                  <p className="text-lg font-semibold mb-1" data-magicpath-id="101" data-magicpath-path="TreatsBakesPage.tsx">Saturday Delivery:</p>
                  <p className="text-white/90" data-magicpath-id="102" data-magicpath-path="TreatsBakesPage.tsx">Dublin City Centre</p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Customer Testimonials */}
      <SortableContainer dndKitId="cebcd6b1-2cd7-4cc4-bd42-b11e74c138ca" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#5e7155]" aria-labelledby="testimonials-heading" data-magicpath-id="103" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="21a3d573-3039-4e88-85a4-ebd851a1f7d0" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="104" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="7133a3fb-e685-462e-87ea-987fc032f86f" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="09a579fa-6876-40b4-a3b5-0d1577c8fba3" containerType="collection" prevTag="div" className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" data-magicpath-id="107" data-magicpath-path="TreatsBakesPage.tsx">
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
      <SortableContainer dndKitId="e4eda318-42d2-424e-afa1-272114f7bdf3" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="faqs-heading" data-magicpath-id="113" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="1d966750-0bb0-47ce-ba08-2825fd7c8a9e" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="114" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="e46a02ea-a392-4703-9873-0dc446a6a872" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="9f1cc458-221d-4a98-a1e3-bd8ebd1650a2" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="117" data-magicpath-path="TreatsBakesPage.tsx">
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

          <SortableContainer dndKitId="720d196d-e230-4284-a3f6-d88158fd1c31" containerType="regular" prevTag="div" className="text-center mt-8" data-magicpath-id="126" data-magicpath-path="TreatsBakesPage.tsx">
            <button onClick={() => onNavigate?.('#contact')} className="text-[#C17857] hover:text-[#B06847] font-semibold text-lg underline" data-magicpath-id="127" data-magicpath-path="TreatsBakesPage.tsx">
              More Questions? Contact Me
            </button>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Call to Action */}
      <SortableContainer dndKitId="ce7dbe7c-b8ff-4999-90fe-acf1cdabc0e3" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#C17857] to-[#5e7155]" aria-labelledby="cta-heading" data-magicpath-id="128" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="555372fb-4ae3-413e-8a5b-caf59b29f348" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="129" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="2b6ff66b-43c2-4dcd-aca0-de27f6921e95" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="48929005-5efe-43be-92b1-d99e0fada4ee" containerType="regular" prevTag="button" onClick={handleWhatsAppOrder} className="bg-white text-[#C17857] px-8 sm:px-10 py-4 rounded-full hover:bg-[#F5F1E8] transition-colors font-semibold text-base sm:text-lg shadow-xl flex items-center justify-center gap-3 mx-auto" data-magicpath-id="133" data-magicpath-path="TreatsBakesPage.tsx">
              <MessageCircle className="w-5 h-5" data-magicpath-id="134" data-magicpath-path="TreatsBakesPage.tsx" />
              Place an Order
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
}