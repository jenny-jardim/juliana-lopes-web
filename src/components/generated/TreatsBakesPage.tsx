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
    mpid: "fc400d03-dc15-4f41-bde2-c3a99fadd7b2"
  }, {
    name: "Brownies",
    description: "Rich, satisfying, completely plant-based",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    mpid: "ee077adb-6ea9-4163-a938-e7cc3fef67cd"
  }, {
    name: "Cookies",
    description: "Crispy edges, chewy centers, pure comfort",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80",
    mpid: "2570506b-6e95-402c-8060-c0bf25e88519"
  }, {
    name: "Blondies",
    description: "Golden, buttery, irresistibly sweet",
    image: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&q=80",
    mpid: "69b1767c-17f3-4fd8-b830-9223a20bd593"
  }, {
    name: "Seasonal Treats",
    description: "Panettones (December) and seasonal specialties",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    mpid: "2202a65f-121d-4abe-ac01-874944e66b8e"
  }, {
    name: "Custom Orders",
    description: "Corporate gifts, event platters, dietary needs—just ask",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80",
    mpid: "b023d167-77de-4f38-b4fa-4c1b1a8aad14"
  }] as any[];
  const testimonials = [{
    quote: "I'm vegan and gluten-free. Juliana's treats make me feel genuinely cared for.",
    author: "Róisín",
    location: "Dublin",
    mpid: "1d683927-5085-4750-8cb0-a5937fcbb5e1"
  }, {
    quote: "I order every two weeks for my team. Everyone fights over what they get.",
    author: "Priya",
    location: "Dublin",
    mpid: "431b67d5-45d0-4a6b-a541-3036a85207dc"
  }, {
    quote: "I'll spend more on Pep Me Up because I trust the quality and intention behind it.",
    author: "Michael",
    location: "Dublin",
    mpid: "bb6d25a7-8165-48ec-bb98-6dfc3b0ca217"
  }] as any[];
  const faqs = [{
    question: "How long do treats stay fresh?",
    answer: "5-7 days when stored properly. Storage instructions included.",
    mpid: "afd1de09-f9f0-439d-984f-47a58e2c0e7c"
  }, {
    question: "Minimum order?",
    answer: "Depends on what you want—reach out and we'll figure it out.",
    mpid: "58e69eb2-bc27-4573-b4ac-402d028c44c9"
  }, {
    question: "Corporate gifts?",
    answer: "Absolutely. It's a thoughtful, homemade way to show appreciation.",
    mpid: "a758ed45-d291-4613-ab1a-48e1b75257d1"
  }, {
    question: "Custom flavors?",
    answer: "Yes! Tell me what you're craving.",
    mpid: "09c460fd-854e-4a8f-b379-897c91e89ec4"
  }, {
    question: "Why the higher price?",
    answer: "Fresh baked, whole ingredients, genuine care. No mass production. Worth every penny.",
    mpid: "ed2912ea-1796-48d4-8247-ffb1691600c2"
  }, {
    question: "Serious allergies?",
    answer: "Yes, I work with you safely.",
    mpid: "a30f1998-ffcb-4512-a4b0-8d3a2544097b"
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
  return <SortableContainer dndKitId="b4b64d71-81d9-4c1e-9b0e-3de7269bbf06" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="TreatsBakesPage.tsx">
      {/* Hero Section with Pep Me Up Logo */}
      <SortableContainer dndKitId="6c8277dd-b948-449a-b91d-81fea1d24a46" containerType="regular" prevTag="section" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-[#C17857] to-[#8B9B7F]" data-magicpath-id="1" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="e7f236e3-0e49-4ec8-ada3-a0d358da99bc" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="2" data-magicpath-path="TreatsBakesPage.tsx">
          {/* Pep Me Up Logo */}
          <SortableContainer dndKitId="4d92223c-9995-402b-afb9-966b0471d981" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8
        }} className="mb-8 sm:mb-12 flex justify-center" data-magicpath-id="3" data-magicpath-path="TreatsBakesPage.tsx">
            <SortableContainer dndKitId="974a0797-16df-440d-be98-71a35526c24f" containerType="regular" prevTag="div" className="relative w-48 h-48 sm:w-64 sm:h-64" data-magicpath-id="4" data-magicpath-path="TreatsBakesPage.tsx">
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
      <SortableContainer dndKitId="8d461985-d12c-4af9-b74f-734c086cdc69" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" data-magicpath-id="8" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="dc2bc8bb-607f-4dd9-b379-396652bff626" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="9" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="e6fe389e-80ed-40b7-8cc3-91c7093c0627" containerType="regular" prevTag="motion.div" initial={{
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
            {["Baked fresh, never mass-produced", "Whole ingredients, real nutrition", "Plant-based & gluten-friendly always", "Homemade feeling, professional quality", "A reminder that you're worth the care"].map((benefit, index) => <SortableContainer dndKitId="c39964b4-0763-4a9d-85f8-8ff88160ca49" containerType="regular" prevTag="motion.div" key={index} initial={{
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
      <SortableContainer dndKitId="3fc28e3e-cb55-4b0e-b8ce-25b334b2d5e5" containerType="regular" prevTag="section" className="py-12 px-4 sm:px-6 bg-[#FFF4ED]" data-magicpath-id="16" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="85c75340-5f6f-4955-a66e-0a954c943140" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="17" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="21a79190-57af-4dc8-bed6-ed23274af555" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="da0b7da8-ae5b-48ba-b266-b46b21b6194d" containerType="regular" prevTag="div" className="flex items-start gap-4 mb-4" data-magicpath-id="19" data-magicpath-path="TreatsBakesPage.tsx">
              <AlertCircle className="w-6 h-6 text-[#C17857] flex-shrink-0 mt-1" data-magicpath-id="20" data-magicpath-path="TreatsBakesPage.tsx" />
              <SortableContainer dndKitId="e8afa192-1081-49ae-ab92-3c4287b080ee" containerType="regular" prevTag="div" data-magicpath-id="21" data-magicpath-path="TreatsBakesPage.tsx">
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
      <SortableContainer dndKitId="1946e26c-caff-4039-9d0b-e6f32c26f5ba" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" data-magicpath-id="26" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="0a2a3db5-b168-4921-8a70-669b6f2ba29b" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="27" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="8f19f4a5-8799-47f5-af4b-bf5c03085325" containerType="regular" prevTag="motion.div" initial={{
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
          <SortableContainer dndKitId="26ca506c-b8b9-44e2-95fc-3fbcd6deb873" containerType="regular" prevTag="div" className="max-w-2xl mx-auto" data-magicpath-id="31" data-magicpath-path="TreatsBakesPage.tsx">
            <SortableContainer dndKitId="7a151ddc-f8c3-4bea-88a6-c99c7f4991ad" containerType="regular" prevTag="div" className="bg-white rounded-2xl shadow-2xl overflow-hidden" data-magicpath-id="32" data-magicpath-path="TreatsBakesPage.tsx">
              <SortableContainer dndKitId="0871260b-a9e1-4190-aa38-70c3502743ed" containerType="regular" prevTag="div" className="relative h-80 sm:h-96 overflow-hidden" data-magicpath-id="33" data-magicpath-path="TreatsBakesPage.tsx">
                <AnimatePresence mode="wait" data-magicpath-id="34" data-magicpath-path="TreatsBakesPage.tsx">
                  <SortableContainer dndKitId="3406943a-7c5b-4bfe-bf75-ea724b94b0c2" containerType="regular" prevTag="motion.div" key={currentMenuIndex} initial={{
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
                <SortableContainer dndKitId="6f674537-a276-476f-8285-f4db5c37c937" containerType="regular" prevTag="button" onClick={prevMenuItem} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#C17857] p-3 rounded-full shadow-lg transition-all z-10" aria-label="Previous item" data-magicpath-id="38" data-magicpath-path="TreatsBakesPage.tsx">
                  <ChevronLeft className="w-6 h-6" data-magicpath-id="39" data-magicpath-path="TreatsBakesPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="57df97b0-9392-4ae6-b2b1-e4d94d2fc024" containerType="regular" prevTag="button" onClick={nextMenuItem} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#C17857] p-3 rounded-full shadow-lg transition-all z-10" aria-label="Next item" data-magicpath-id="40" data-magicpath-path="TreatsBakesPage.tsx">
                  <ChevronRight className="w-6 h-6" data-magicpath-id="41" data-magicpath-path="TreatsBakesPage.tsx" />
                </SortableContainer>
              </SortableContainer>

              {/* Card Content */}
              <SortableContainer dndKitId="ab716d33-6719-41b1-89a2-d7828c525fe2" containerType="regular" prevTag="div" className="p-6 sm:p-8" data-magicpath-id="42" data-magicpath-path="TreatsBakesPage.tsx">
                <AnimatePresence mode="wait" data-magicpath-id="43" data-magicpath-path="TreatsBakesPage.tsx">
                  <SortableContainer dndKitId="68088a80-e8ad-4896-b6bc-63bd8c6ec7c3" containerType="regular" prevTag="motion.div" key={currentMenuIndex} initial={{
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
      <SortableContainer dndKitId="ff541d7f-9a33-4a7a-9986-2ba93681da70" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" data-magicpath-id="49" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="d9c6b766-b6fc-41f1-aa93-3bec13e1ab9b" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="50" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="e92e78ba-d3df-4c22-8259-c13bf45830b2" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="b698c486-365f-4df8-a6c9-8a1b0849c5d8" containerType="regular" prevTag="div" className="mb-12 space-y-8" data-magicpath-id="53" data-magicpath-path="TreatsBakesPage.tsx">
              <h3 className="text-2xl font-semibold text-[#C17857] mb-6 text-center" data-magicpath-id="54" data-magicpath-path="TreatsBakesPage.tsx">
                How to place your order:
              </h3>
              
              {/* Step 1 */}
              <SortableContainer dndKitId="2a539e22-0ab8-436e-9198-4fffbdc960af" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="55" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="caef6957-2ebf-4317-9036-4f1fbbf2e67b" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="56" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="57" data-magicpath-path="TreatsBakesPage.tsx">
                    1
                  </div>
                  <SortableContainer dndKitId="531ed56d-9012-4cb9-b1f8-1c6886639557" containerType="regular" prevTag="div" data-magicpath-id="58" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="59" data-magicpath-path="TreatsBakesPage.tsx">
                      Choose the base for your pie
                    </h4>
                    <p className="text-[#4A4A4A]" data-magicpath-id="60" data-magicpath-path="TreatsBakesPage.tsx">Raw or Biscuit</p>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              
              {/* Step 2 */}
              <SortableContainer dndKitId="17be5534-ab40-4ced-a2c0-e6f82fbcf6c7" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="61" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="710924b6-69c3-4f0c-8977-8722e7b362d8" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="62" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="63" data-magicpath-path="TreatsBakesPage.tsx">
                    2
                  </div>
                  <SortableContainer dndKitId="5cec433d-c1be-4774-9319-02cd0daabd10" containerType="regular" prevTag="div" data-magicpath-id="64" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="65" data-magicpath-path="TreatsBakesPage.tsx">
                      Your favourite flavour (one or more)!
                    </h4>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              
              {/* Step 3 - Sizes & Pricing */}
              <SortableContainer dndKitId="ba5d917e-3619-4f8a-a6b7-b3b6b6cc771a" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="66" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="864adad4-882a-4a17-a689-cd1b919b4228" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="67" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="68" data-magicpath-path="TreatsBakesPage.tsx">
                    3
                  </div>
                  <SortableContainer dndKitId="16dfffc5-52d6-4b1b-adf1-dcce28c9d06d" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="69" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-4" data-magicpath-id="70" data-magicpath-path="TreatsBakesPage.tsx">
                      The size of your treat:
                    </h4>
                    <SortableContainer dndKitId="581a3283-6b39-4dff-b8b1-9f00b8fa7ab5" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-magicpath-id="71" data-magicpath-path="TreatsBakesPage.tsx">
                      <SortableContainer dndKitId="74e68f44-5d11-40ad-be2d-e9894cc9edfb" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="72" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="73" data-magicpath-path="TreatsBakesPage.tsx">Pie in a Tub</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="74" data-magicpath-path="TreatsBakesPage.tsx">€7</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="ef3b0da9-74e8-4c01-a104-eddae9a7bce3" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="75" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="76" data-magicpath-path="TreatsBakesPage.tsx">13 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="77" data-magicpath-path="TreatsBakesPage.tsx">€13</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="3154a7c8-e7a4-4a41-95e7-06491ff20419" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="78" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="79" data-magicpath-path="TreatsBakesPage.tsx">16 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="80" data-magicpath-path="TreatsBakesPage.tsx">€25</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="1ed995b0-5bae-4015-b2a9-69c909145dcd" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="81" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="82" data-magicpath-path="TreatsBakesPage.tsx">20 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="83" data-magicpath-path="TreatsBakesPage.tsx">€35</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="e0966a02-a573-48ae-a634-e46274f918d0" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center sm:col-span-2" data-magicpath-id="84" data-magicpath-path="TreatsBakesPage.tsx">
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
            <SortableContainer dndKitId="75bad741-252a-4464-85c3-3fd984c21fb9" containerType="regular" prevTag="div" className="bg-[#C17857] text-white rounded-xl p-8 sm:p-10 text-center" data-magicpath-id="88" data-magicpath-path="TreatsBakesPage.tsx">
              <p className="text-xl sm:text-2xl font-semibold mb-4" data-magicpath-id="89" data-magicpath-path="TreatsBakesPage.tsx">
                Place Your Order:
              </p>
              <p className="text-lg sm:text-xl mb-6" data-magicpath-id="90" data-magicpath-path="TreatsBakesPage.tsx">Monday–Friday, 10am–5pm</p>
              <SortableContainer dndKitId="2f7c3459-16e5-4790-a352-27601d82cf3b" containerType="regular" prevTag="div" className="space-y-3 text-left max-w-xl mx-auto" data-magicpath-id="91" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="80c0d918-e2c9-459c-a1a1-b4b7822265fa" containerType="regular" prevTag="div" className="bg-white/10 rounded-lg p-4" data-magicpath-id="92" data-magicpath-path="TreatsBakesPage.tsx">
                  <p className="text-lg font-semibold mb-1" data-magicpath-id="93" data-magicpath-path="TreatsBakesPage.tsx">Collection:</p>
                  <p className="text-white/90" data-magicpath-id="94" data-magicpath-path="TreatsBakesPage.tsx">Dun Laoghaire, County Dublin</p>
                </SortableContainer>
                <SortableContainer dndKitId="6c5ee4c8-8ec5-4e92-85b2-09dea28a6aa9" containerType="regular" prevTag="div" className="bg-white/10 rounded-lg p-4" data-magicpath-id="95" data-magicpath-path="TreatsBakesPage.tsx">
                  <p className="text-lg font-semibold mb-1" data-magicpath-id="96" data-magicpath-path="TreatsBakesPage.tsx">Saturday Delivery:</p>
                  <p className="text-white/90" data-magicpath-id="97" data-magicpath-path="TreatsBakesPage.tsx">Dublin City Centre</p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Customer Testimonials */}
      <SortableContainer dndKitId="321bdcb6-5353-4f80-9618-8f381106c461" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#8B9B7F]" data-magicpath-id="98" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="c750f61b-0878-48a7-acfc-684da589d19e" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="99" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="4b188fe0-e814-4cdd-bcab-53a9addf3472" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="c9a291e2-d4be-4002-9dfe-85a19f1449ff" containerType="collection" prevTag="div" className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" data-magicpath-id="102" data-magicpath-path="TreatsBakesPage.tsx">
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
      <SortableContainer dndKitId="bdf04392-3867-4a8a-8f5e-b4d1770d83c5" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#F5F1E8]" data-magicpath-id="108" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="b718bafd-e60c-4741-907a-f59a35d31c4f" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="109" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="0ced2d8e-681d-41df-bde2-2ec7c302131d" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="2e8dd5c6-3a70-4f50-a3e2-bcdf6be1c162" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="112" data-magicpath-path="TreatsBakesPage.tsx">
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

          <SortableContainer dndKitId="48ee0471-384d-4478-b72a-2d6cdca44497" containerType="regular" prevTag="div" className="text-center mt-8" data-magicpath-id="121" data-magicpath-path="TreatsBakesPage.tsx">
            <button onClick={() => onNavigate?.('#contact')} className="text-[#C17857] hover:text-[#B06847] font-semibold text-lg underline" data-magicpath-id="122" data-magicpath-path="TreatsBakesPage.tsx">
              More Questions? Contact Me
            </button>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Call to Action */}
      <SortableContainer dndKitId="344208e1-daaa-42c6-b0fa-e45253ae1c0a" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#C17857] to-[#8B9B7F]" data-magicpath-id="123" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="aca8a585-270f-4116-8224-9686e8e5b0f3" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="124" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="3349c99d-58c2-4de4-8354-3184e600ee48" containerType="regular" prevTag="motion.div" initial={{
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