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
    mpid: "e5265165-0480-4dc1-84bb-a14f1b398e5d"
  }, {
    name: "Brownies",
    description: "Rich, satisfying, completely plant-based",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    mpid: "45150279-5a7c-4f2a-8a3c-f9b769beedd5"
  }, {
    name: "Cookies",
    description: "Crispy edges, chewy centers, pure comfort",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80",
    mpid: "ba61a6b3-c99e-4d98-a93a-29a623097d77"
  }, {
    name: "Blondies",
    description: "Golden, buttery, irresistibly sweet",
    image: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&q=80",
    mpid: "3faf8fa4-dac5-41f8-b9e3-622ce0a5e700"
  }, {
    name: "Seasonal Treats",
    description: "Panettones (December) and seasonal specialties",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    mpid: "bb963cd9-358f-43c6-96e8-ead17e12b9d4"
  }, {
    name: "Custom Orders",
    description: "Corporate gifts, event platters, dietary needs—just ask",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80",
    mpid: "120d68e6-ffa5-4e0a-8149-0524f294d272"
  }] as any[];
  const testimonials = [{
    quote: "I'm vegan and gluten-free. Juliana's treats make me feel genuinely cared for.",
    author: "Róisín",
    location: "Dublin",
    mpid: "ff7661f2-8a8a-477d-b45b-fdebfae170bf"
  }, {
    quote: "I order every two weeks for my team. Everyone fights over what they get.",
    author: "Priya",
    location: "Dublin",
    mpid: "f0297aad-22bf-403a-bd51-411f72fb50f2"
  }, {
    quote: "I'll spend more on Pep Me Up because I trust the quality and intention behind it.",
    author: "Michael",
    location: "Dublin",
    mpid: "ce23559d-3178-4e49-b219-396362ac1bb1"
  }] as any[];
  const faqs = [{
    question: "How long do treats stay fresh?",
    answer: "5-7 days when stored properly. Storage instructions included.",
    mpid: "984c35d1-dc1e-4a22-8756-c46b5fdf70fd"
  }, {
    question: "Minimum order?",
    answer: "Depends on what you want—reach out and we'll figure it out.",
    mpid: "f15dcba8-d5dc-4a65-924f-d8b1ec466ae1"
  }, {
    question: "Corporate gifts?",
    answer: "Absolutely. It's a thoughtful, homemade way to show appreciation.",
    mpid: "c9cda0fc-63a5-49ed-beb9-309a97f141b5"
  }, {
    question: "Custom flavors?",
    answer: "Yes! Tell me what you're craving.",
    mpid: "fc1279c4-4ef3-4577-84ff-d7789295f117"
  }, {
    question: "Why the higher price?",
    answer: "Fresh baked, whole ingredients, genuine care. No mass production. Worth every penny.",
    mpid: "e64de2a7-6019-4eb1-ae38-9e72ea8e4889"
  }, {
    question: "Serious allergies?",
    answer: "Yes, I work with you safely.",
    mpid: "4cb3aee7-f54c-4d27-b0dd-000f5e35fb25"
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
  return <SortableContainer dndKitId="078b93be-c6df-4b86-b2fe-e107fc2f087d" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="TreatsBakesPage.tsx">
      {/* Hero Section with Pep Me Up Logo */}
      <SortableContainer dndKitId="6bcf8ebc-bc39-4d74-8b82-6143ad9faba3" containerType="regular" prevTag="section" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-[#C17857] to-[#5e7155]" role="banner" aria-label="Pep Me Up treats and bakes hero section" data-magicpath-id="1" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="15e528fa-2c4a-4ed1-95ac-7a34dfb5e834" containerType="regular" prevTag="div" className="max-w-5xl mx-auto text-center" data-magicpath-id="2" data-magicpath-path="TreatsBakesPage.tsx">
          {/* Pep Me Up Logo */}
          <SortableContainer dndKitId="243f19e1-3a66-4c78-a154-72195db17e56" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8
        }} className="mb-8 sm:mb-12 flex justify-center" data-magicpath-id="3" data-magicpath-path="TreatsBakesPage.tsx">
            <SortableContainer dndKitId="6ff25da6-ea42-4e35-8e94-3c5f4372ceb4" containerType="regular" prevTag="div" className="relative w-48 h-48 sm:w-64 sm:h-64" data-magicpath-id="4" data-magicpath-path="TreatsBakesPage.tsx">
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
      <SortableContainer dndKitId="77d1964f-4bd8-430d-bd8d-f6c46ffb5862" containerType="regular" prevTag="main" data-magicpath-id="8" data-magicpath-path="TreatsBakesPage.tsx">
      <SortableContainer dndKitId="e54f9b54-bb95-4a89-855e-69477e662f57" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" aria-labelledby="why-pep-me-up-heading" data-magicpath-id="9" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="5943129f-3eea-4f5e-969a-97ad2528042b" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="10" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="822b4261-7fb6-4a8c-98ca-9513cd06efc7" containerType="regular" prevTag="motion.div" initial={{
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
            {["Baked fresh, never mass-produced", "Whole ingredients, real nutrition", "Plant-based & gluten-friendly always", "Homemade feeling, professional quality", "A reminder that you're worth the care"].map((benefit, index) => <SortableContainer dndKitId="3a7e955e-fdca-49a1-ad5a-e29b785a5df1" containerType="regular" prevTag="motion.div" key={index} initial={{
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
      <SortableContainer dndKitId="86523438-c4ef-476f-81fa-5cb8f0f07bf8" containerType="regular" prevTag="section" className="py-12 px-4 sm:px-6 bg-[#FFF4ED]" aria-labelledby="safety-heading" data-magicpath-id="17" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="bca1d468-8293-4702-a5b8-d2fda03d34dc" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="18" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="46417dc6-30e8-4b4e-94d0-9e5eacd09dd0" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="444add10-705f-4b1d-95d4-6d8e4c6c3bca" containerType="regular" prevTag="div" className="flex items-start gap-4 mb-4" data-magicpath-id="20" data-magicpath-path="TreatsBakesPage.tsx">
              <AlertCircle className="w-6 h-6 text-[#C17857] flex-shrink-0 mt-1" aria-hidden="true" data-magicpath-id="21" data-magicpath-path="TreatsBakesPage.tsx" />
              <SortableContainer dndKitId="129ec71f-a043-4214-9f3a-ecb236c095a3" containerType="regular" prevTag="div" data-magicpath-id="22" data-magicpath-path="TreatsBakesPage.tsx">
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
      <SortableContainer dndKitId="7a9e059a-828c-4717-bebf-efda70f3655c" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="menu-heading" data-magicpath-id="27" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="533ac2de-f3ee-489d-a37e-821116acb42c" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="28" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="7856ddfe-3e58-4436-bd57-ccd5bb1f1b32" containerType="regular" prevTag="motion.div" initial={{
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
          <SortableContainer dndKitId="bca04250-b1b3-481b-bfd0-3b64d2194a52" containerType="regular" prevTag="div" className="max-w-2xl mx-auto" data-magicpath-id="32" data-magicpath-path="TreatsBakesPage.tsx">
            <SortableContainer dndKitId="14f11e3a-2d94-4d1c-b40f-38f815930e0e" containerType="regular" prevTag="div" className="bg-white rounded-2xl shadow-2xl overflow-hidden" data-magicpath-id="33" data-magicpath-path="TreatsBakesPage.tsx">
              <SortableContainer dndKitId="52f28a17-6e2d-4929-bcf4-42d48e7e6244" containerType="regular" prevTag="div" className="relative h-80 sm:h-96 overflow-hidden" data-magicpath-id="34" data-magicpath-path="TreatsBakesPage.tsx">
                <AnimatePresence mode="wait" data-magicpath-id="35" data-magicpath-path="TreatsBakesPage.tsx">
                  <SortableContainer dndKitId="fed68aea-1f2d-4cdb-b62e-b67ac9140e3a" containerType="regular" prevTag="motion.div" key={currentMenuIndex} initial={{
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
                <SortableContainer dndKitId="f87de715-550c-473b-bb65-a3a82b1b2e68" containerType="regular" prevTag="button" onClick={prevMenuItem} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#C17857] p-3 rounded-full shadow-lg transition-all z-10" aria-label="Previous item" data-magicpath-id="39" data-magicpath-path="TreatsBakesPage.tsx">
                  <ChevronLeft className="w-6 h-6" data-magicpath-id="40" data-magicpath-path="TreatsBakesPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="74a551d8-83e8-4e4d-b595-616d0cc115c5" containerType="regular" prevTag="button" onClick={nextMenuItem} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#C17857] p-3 rounded-full shadow-lg transition-all z-10" aria-label="Next item" data-magicpath-id="41" data-magicpath-path="TreatsBakesPage.tsx">
                  <ChevronRight className="w-6 h-6" data-magicpath-id="42" data-magicpath-path="TreatsBakesPage.tsx" />
                </SortableContainer>
              </SortableContainer>

              {/* Card Content */}
              <SortableContainer dndKitId="a9279ee3-0e90-4e12-97b5-eb27d190d013" containerType="regular" prevTag="div" className="p-6 sm:p-8" data-magicpath-id="43" data-magicpath-path="TreatsBakesPage.tsx">
                <AnimatePresence mode="wait" data-magicpath-id="44" data-magicpath-path="TreatsBakesPage.tsx">
                  <SortableContainer dndKitId="75ddd1b0-ac3c-404b-a797-fc5a3cca7b3f" containerType="regular" prevTag="motion.div" key={currentMenuIndex} initial={{
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
      <SortableContainer dndKitId="74d90f8b-77df-449a-bf21-ddb4afc030d9" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" aria-labelledby="how-to-order-heading" data-magicpath-id="50" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="666f40a1-3e00-4bf7-9338-18a3ad03f365" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="51" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="2419d353-7b4f-4e22-996f-6b6848a847ed" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="4414bfc5-5c53-49d4-b954-383cf00d7414" containerType="regular" prevTag="div" className="mb-12 space-y-8" data-magicpath-id="54" data-magicpath-path="TreatsBakesPage.tsx">
              <h3 className="text-2xl font-semibold text-[#C17857] mb-6 text-center" data-magicpath-id="55" data-magicpath-path="TreatsBakesPage.tsx">
                How to place your order:
              </h3>
              
              {/* Step 1 */}
              <SortableContainer dndKitId="76fa66ef-5cc3-4b5f-b3c0-e13baeb18918" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="56" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="6ce9dff0-dc22-486f-a6bd-2888a1156516" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="57" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="58" data-magicpath-path="TreatsBakesPage.tsx">
                    1
                  </div>
                  <SortableContainer dndKitId="f0c99caf-757c-4da4-a870-5fc31c984697" containerType="regular" prevTag="div" data-magicpath-id="59" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="60" data-magicpath-path="TreatsBakesPage.tsx">
                      Choose the base for your pie
                    </h4>
                    <p className="text-[#4A4A4A]" data-magicpath-id="61" data-magicpath-path="TreatsBakesPage.tsx">Raw or Biscuit</p>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              
              {/* Step 2 */}
              <SortableContainer dndKitId="fe091993-47db-42b8-817a-820af00177e1" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="62" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="8c33ccac-eea0-4a39-a57c-ca932add5560" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="63" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="64" data-magicpath-path="TreatsBakesPage.tsx">
                    2
                  </div>
                  <SortableContainer dndKitId="aa05df6f-6720-43f2-81ac-fbb64e2ed256" containerType="regular" prevTag="div" data-magicpath-id="65" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="66" data-magicpath-path="TreatsBakesPage.tsx">
                      Your favourite flavour (one or more)!
                    </h4>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
              
              {/* Step 3 - Sizes & Pricing */}
              <SortableContainer dndKitId="4e99cf5a-e306-4f96-8c82-647d6e4e8195" containerType="regular" prevTag="div" className="bg-[#F5F1E8] rounded-xl p-6" data-magicpath-id="67" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="d06b5724-0989-4282-9ed8-88870a958b0b" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="68" data-magicpath-path="TreatsBakesPage.tsx">
                  <div className="bg-[#C17857] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg" data-magicpath-id="69" data-magicpath-path="TreatsBakesPage.tsx">
                    3
                  </div>
                  <SortableContainer dndKitId="ba702d03-7960-4f31-aed2-33dc9bc1298b" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="70" data-magicpath-path="TreatsBakesPage.tsx">
                    <h4 className="text-xl font-semibold text-[#2D2D2D] mb-4" data-magicpath-id="71" data-magicpath-path="TreatsBakesPage.tsx">
                      The size of your treat:
                    </h4>
                    <SortableContainer dndKitId="62af4901-57f3-4e78-b849-e4314180a309" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-magicpath-id="72" data-magicpath-path="TreatsBakesPage.tsx">
                      <SortableContainer dndKitId="9a0fe84c-884c-4349-bd72-ad46943f17ca" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="73" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="74" data-magicpath-path="TreatsBakesPage.tsx">Pie in a Tub</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="75" data-magicpath-path="TreatsBakesPage.tsx">€7</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="a6e34cfb-83f1-425c-b225-21df153b34ff" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="76" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="77" data-magicpath-path="TreatsBakesPage.tsx">13 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="78" data-magicpath-path="TreatsBakesPage.tsx">€13</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="ee69d36f-8547-44ce-859d-a999d3a9980d" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="79" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="80" data-magicpath-path="TreatsBakesPage.tsx">16 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="81" data-magicpath-path="TreatsBakesPage.tsx">€25</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="31b9ab5e-28b2-481f-9a95-bba2981c5041" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center" data-magicpath-id="82" data-magicpath-path="TreatsBakesPage.tsx">
                        <span className="text-[#2D2D2D] font-medium" data-magicpath-id="83" data-magicpath-path="TreatsBakesPage.tsx">20 cm</span>
                        <span className="text-[#C17857] font-bold text-lg" data-magicpath-id="84" data-magicpath-path="TreatsBakesPage.tsx">€35</span>
                      </SortableContainer>
                      <SortableContainer dndKitId="a7badedd-b5ef-43b3-9e6e-b675fd1d9b5a" containerType="regular" prevTag="div" className="bg-white rounded-lg p-4 flex justify-between items-center sm:col-span-2" data-magicpath-id="85" data-magicpath-path="TreatsBakesPage.tsx">
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
            <SortableContainer dndKitId="c0446640-35e1-419f-8475-12a3bb41ee2e" containerType="regular" prevTag="div" className="bg-[#C17857] text-white rounded-xl p-8 sm:p-10 text-center" data-magicpath-id="89" data-magicpath-path="TreatsBakesPage.tsx">
              <p className="text-xl sm:text-2xl font-semibold mb-4" data-magicpath-id="90" data-magicpath-path="TreatsBakesPage.tsx">
                Place Your Order:
              </p>
              <p className="text-lg sm:text-xl mb-6" data-magicpath-id="91" data-magicpath-path="TreatsBakesPage.tsx">Monday–Friday, 10am–5pm</p>
              <SortableContainer dndKitId="a4aefb21-f05d-4514-8913-54e1590785dd" containerType="regular" prevTag="div" className="space-y-3 text-left max-w-xl mx-auto" data-magicpath-id="92" data-magicpath-path="TreatsBakesPage.tsx">
                <SortableContainer dndKitId="ff99c010-ff93-433d-ae25-148baf20f3f2" containerType="regular" prevTag="div" className="bg-white/10 rounded-lg p-4" data-magicpath-id="93" data-magicpath-path="TreatsBakesPage.tsx">
                  <p className="text-lg font-semibold mb-1" data-magicpath-id="94" data-magicpath-path="TreatsBakesPage.tsx">Collection:</p>
                  <p className="text-white/90" data-magicpath-id="95" data-magicpath-path="TreatsBakesPage.tsx">Dun Laoghaire, County Dublin</p>
                </SortableContainer>
                <SortableContainer dndKitId="713c0768-e5db-4b60-aa40-57a1b04141c9" containerType="regular" prevTag="div" className="bg-white/10 rounded-lg p-4" data-magicpath-id="96" data-magicpath-path="TreatsBakesPage.tsx">
                  <p className="text-lg font-semibold mb-1" data-magicpath-id="97" data-magicpath-path="TreatsBakesPage.tsx">Saturday Delivery:</p>
                  <p className="text-white/90" data-magicpath-id="98" data-magicpath-path="TreatsBakesPage.tsx">Dublin City Centre</p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Customer Testimonials */}
      <SortableContainer dndKitId="b22d57c1-7760-437e-a170-34b21f51c447" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#5e7155]" aria-labelledby="testimonials-heading" data-magicpath-id="99" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="13547959-2dec-4b9e-b55f-9a108a653941" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="100" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="ef0a919a-39eb-47f5-95e2-6fbff39fff0a" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="d89c4492-7c12-475f-aefa-0de32f1d71cd" containerType="collection" prevTag="div" className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" data-magicpath-id="103" data-magicpath-path="TreatsBakesPage.tsx">
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
      <SortableContainer dndKitId="d3efe8e6-61e9-4dc1-8261-d46870209982" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="faqs-heading" data-magicpath-id="109" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="a11b3f58-7348-4c7c-8b5b-575326487e1f" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="110" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="e19df8fb-6fab-4074-948a-a0f0112e4037" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="dbdeeb32-51f2-4b3f-ba43-4d936a97d502" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="113" data-magicpath-path="TreatsBakesPage.tsx">
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

          <SortableContainer dndKitId="213a0dff-706e-4239-9506-78b2f177fab6" containerType="regular" prevTag="div" className="text-center mt-8" data-magicpath-id="122" data-magicpath-path="TreatsBakesPage.tsx">
            <button onClick={() => onNavigate?.('#contact')} className="text-[#C17857] hover:text-[#B06847] font-semibold text-lg underline" data-magicpath-id="123" data-magicpath-path="TreatsBakesPage.tsx">
              More Questions? Contact Me
            </button>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Call to Action */}
      <SortableContainer dndKitId="c5bb2dd1-3c77-442b-a90d-f58188b3fd81" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#C17857] to-[#5e7155]" aria-labelledby="cta-heading" data-magicpath-id="124" data-magicpath-path="TreatsBakesPage.tsx">
        <SortableContainer dndKitId="bda8834a-9e42-440b-9287-8634cce3b329" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="125" data-magicpath-path="TreatsBakesPage.tsx">
          <SortableContainer dndKitId="b685e00b-8bc3-45d6-abc0-738110df0413" containerType="regular" prevTag="motion.div" initial={{
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