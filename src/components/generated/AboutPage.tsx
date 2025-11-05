"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Users, Sparkles } from 'lucide-react';
export interface AboutPageProps {
  onNavigate?: (section: string) => void;
  mpid?: string;
}
export default function AboutPage({
  onNavigate
}: AboutPageProps) {
  const brandValues = [{
    icon: Heart,
    title: "Nourishment",
    description: "I use wholesome ingredients and cook with intention. My food isn't just plant-based and gluten-free—it's designed to genuinely nourish your body and spirit.",
    mpid: "3b4b3f43-7be0-402b-a41c-eddea8416dc0"
  }, {
    icon: Sparkles,
    title: "Authenticity",
    description: "Everything I share—from my social media to my kitchen stories to the food itself—is real. No pretense, no shortcuts. Just honest, intentional work.",
    mpid: "76586055-924c-436e-84fd-8b514dec3e96"
  }, {
    icon: Leaf,
    title: "Connection to Nature",
    description: "I'm tuned to natural cycles. I source sustainably. I support practices that honor the earth and the animals. My plant-based choice isn't just dietary—it's philosophical.",
    mpid: "75b1374c-381a-4fe0-a49b-230449b44376"
  }, {
    icon: Users,
    title: "Warmth & Community",
    description: "I create inclusive spaces through food. Dietary preferences don't mean exclusion—they mean I care enough to nourish you exactly as you need to be nourished. Everyone belongs at my table.",
    mpid: "95e4f30b-9cae-40bc-b6c1-5016feeedace"
  }] as any[];
  const journeyMilestones = [{
    year: "The Beginning",
    title: "Cooking for Myself",
    text: "I've always loved cooking. For years, I prepared meals for myself because I believed in the power of real, wholesome food. I cooked from scratch, avoided processed foods, and found connection to what I was eating.",
    mpid: "cf192dac-5ecd-45b7-8db6-15bfab1eb06e"
  }, {
    year: "2024",
    title: "The Turning Point",
    text: "I enrolled in a professional vegan chef course with Rawish Academy in Lisbon and a gluten-free baking course with Plantlife. I didn't just want to be vegan; I wanted to master it.",
    mpid: "a756fe69-13b5-415c-9256-58827dbd5494"
  }, {
    year: "Oct 2024",
    title: "First Retreat",
    text: "I catered my first three-day retreat, cooking with the same intention I brought to my own kitchen—with care, wholesome ingredients, and the belief that food could be part of healing.",
    mpid: "3ad37e76-9508-4562-b2e6-60135027dba6"
  }, {
    year: "Dec 2024",
    title: "The Leap",
    text: "I quit my accounting job and decided to dedicate 2025 entirely to my new career path. I launched Pep Me Up—my plant-based, gluten-free treats business.",
    mpid: "14d34c32-0308-4766-aae1-b2e234b5c4ba"
  }, {
    year: "2025",
    title: "Building Something Real",
    text: "I've been growing Pep Me Up, taking orders, working as a chef in a vegan kitchen, and catering retreats. I've learned that food is never just food—it's connection, care, and nourishment.",
    mpid: "f9640cd1-4146-462b-a125-9ab19f4a843f"
  }] as any[];
  return <SortableContainer dndKitId="bf24ead3-c81f-46d3-b3c7-3f2e899e56cc" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="AboutPage.tsx">
      {/* Hero Section */}
      <SortableContainer dndKitId="f831dee7-a96c-41db-816f-55b376cea711" containerType="regular" prevTag="section" className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden" role="banner" aria-label="About Juliana hero section" data-magicpath-id="1" data-magicpath-path="AboutPage.tsx">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80)',
        filter: 'brightness(0.6)'
      }} data-magicpath-id="2" data-magicpath-path="AboutPage.tsx" />
        <SortableContainer dndKitId="2c0fe7c8-2a3b-4d32-bf9d-1eb1cd3fa19e" containerType="regular" prevTag="div" className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl" data-magicpath-id="3" data-magicpath-path="AboutPage.tsx">
          <motion.h1 data-magicpath-motion-tag="motion.h1" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="font-serif text-4xl sm:text-5xl md:text-6xl mb-4 leading-tight" data-magicpath-id="4" data-magicpath-path="AboutPage.tsx">
            Juliana's Story
          </motion.h1>
          <motion.p data-magicpath-motion-tag="motion.p" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-lg sm:text-xl md:text-2xl leading-relaxed" data-magicpath-id="5" data-magicpath-path="AboutPage.tsx">
            From a home kitchen to nourishing retreats worldwide
          </motion.p>
        </SortableContainer>
      </SortableContainer>

      {/* Journey Timeline - Single Card */}
      <SortableContainer dndKitId="805b2acf-e007-4ec6-8bd2-a814632a7a4c" containerType="regular" prevTag="main" data-magicpath-id="6" data-magicpath-path="AboutPage.tsx">
      <SortableContainer dndKitId="360ffecc-8f1b-4980-98ac-b03aa26f2568" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" aria-labelledby="journey-heading" data-magicpath-id="7" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="5a62e47e-95cc-45fd-9a34-6b786ec96bd5" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="8" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="4af78eb1-237e-4e9c-b5fb-ed708f93e4ff" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-8 sm:mb-12" data-magicpath-id="9" data-magicpath-path="AboutPage.tsx">
            <h2 id="journey-heading" className="font-serif text-3xl sm:text-4xl text-[#2D2D2D] mb-3" data-magicpath-id="10" data-magicpath-path="AboutPage.tsx">
              My Journey
            </h2>
            <p className="text-[#5e7155] text-base sm:text-lg" data-magicpath-id="11" data-magicpath-path="AboutPage.tsx">
              How I became the chef I am today
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="b03979e2-c7b7-427c-8b3e-7f837217311b" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="bg-white rounded-lg p-6 sm:p-8 md:p-10 shadow-lg" data-magicpath-id="12" data-magicpath-path="AboutPage.tsx">
            <SortableContainer dndKitId="ecd4786d-cd17-4905-95d2-733d03e04b1b" containerType="collection" prevTag="div" className="space-y-6 sm:space-y-8" data-magicpath-id="13" data-magicpath-path="AboutPage.tsx">
              {journeyMilestones.map((milestone, index) => <div key={index} className="relative pl-8 sm:pl-10 border-l-2 border-[#5e7155]/20 last:border-l-0" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="AboutPage.tsx">
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#5e7155] border-4 border-white shadow-sm" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="AboutPage.tsx" />
                  
                  <div className="space-y-2" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-id="16" data-magicpath-path="AboutPage.tsx">
                    <div className="flex flex-wrap items-baseline gap-2 sm:gap-3" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="AboutPage.tsx">
                      <span className="inline-block bg-[#5e7155] text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-field="year:string" data-magicpath-id="18" data-magicpath-path="AboutPage.tsx">
                        {milestone.year}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl text-[#2D2D2D] font-semibold" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="19" data-magicpath-path="AboutPage.tsx">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-field="text:string" data-magicpath-id="20" data-magicpath-path="AboutPage.tsx">
                      {milestone.text}
                    </p>
                  </div>
                </div>)}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Brand Values Section */}
      <SortableContainer dndKitId="09c4d295-3f5c-4255-a153-ab72543cc487" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" aria-labelledby="values-heading" data-magicpath-id="21" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="f2586aa8-7b12-42f2-9cbb-a0766fe7c182" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="22" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="a7689ae1-ae47-402b-be89-5fa7304f6ac1" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-8 sm:mb-12" data-magicpath-id="23" data-magicpath-path="AboutPage.tsx">
            <h2 id="values-heading" className="font-serif text-3xl sm:text-4xl text-[#5e7155] mb-3" data-magicpath-id="24" data-magicpath-path="AboutPage.tsx">
              My Brand Values
            </h2>
            <p className="text-[#4A4A4A] text-base sm:text-lg max-w-3xl mx-auto" data-magicpath-id="25" data-magicpath-path="AboutPage.tsx">
              Everything I do flows from these four commitments
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="04b65446-3b0a-4614-a19d-2a6eb5be9529" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8" data-magicpath-id="26" data-magicpath-path="AboutPage.tsx">
            {brandValues.map((value, index) => {
              const IconComponent = value.icon;
              return <motion.div data-magicpath-motion-tag="motion.div" key={index} initial={{
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
              }} className="bg-[#F5F1E8] rounded-lg p-6 sm:p-7 hover:shadow-lg transition-shadow" data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-id="27" data-magicpath-path="AboutPage.tsx">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3" data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-id="28" data-magicpath-path="AboutPage.tsx">
                    <div className="bg-[#5e7155] text-white p-2.5 rounded-full flex-shrink-0" data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-id="29" data-magicpath-path="AboutPage.tsx">
                      <IconComponent className="w-5 h-5" data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-id="30" data-magicpath-path="AboutPage.tsx" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2D2D2D] mt-0.5" data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="31" data-magicpath-path="AboutPage.tsx">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="32" data-magicpath-path="AboutPage.tsx">
                    {value.description}
                  </p>
                </motion.div>;
            })}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Why I Do This Section */}
      <SortableContainer dndKitId="d34a200e-f62c-442b-bb17-e56ba6311ebd" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#5e7155]" aria-labelledby="why-heading" data-magicpath-id="33" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="b3178771-bd7e-4633-b1ce-1dfe54ba7716" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="34" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="485e8631-e4dd-4dc7-983f-ce5997b1fc23" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center" data-magicpath-id="35" data-magicpath-path="AboutPage.tsx">
            <h2 id="why-heading" className="font-serif text-3xl sm:text-4xl text-white mb-6 sm:mb-8" data-magicpath-id="36" data-magicpath-path="AboutPage.tsx">
              Why I Do This
            </h2>
            <SortableContainer dndKitId="94baf8b5-7026-45cf-85da-2a503086ace9" containerType="regular" prevTag="div" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8" data-magicpath-id="37" data-magicpath-path="AboutPage.tsx">
              <p className="text-white text-base sm:text-lg leading-relaxed mb-4" data-magicpath-id="38" data-magicpath-path="AboutPage.tsx">
                I do this because I believe food can be transformative. I do it because retreat organizers and professionals deserve to eat well without guilt. I do it because someone working a demanding job should be able to buy a treat that feels homemade and made just for them.
              </p>
              <p className="text-white text-lg sm:text-xl leading-relaxed font-semibold italic" data-magicpath-id="39" data-magicpath-path="AboutPage.tsx">
                I do it because connection and care matter. And food is one of the most beautiful ways to express both.
              </p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Image Gallery Section */}
      <SortableContainer dndKitId="12c02349-0985-4d16-96e8-51b4c743dce5" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="gallery-heading" data-magicpath-id="40" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="67cf4d8b-5fde-4a1c-b161-96c19f70088c" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="41" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="a31252e2-d0ff-46cb-a67b-5cfa8524a1a7" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-8 sm:mb-12" data-magicpath-id="42" data-magicpath-path="AboutPage.tsx">
            <h2 id="gallery-heading" className="font-serif text-3xl sm:text-4xl text-[#2D2D2D]" data-magicpath-id="43" data-magicpath-path="AboutPage.tsx">
              A Glimpse Into My Kitchen
            </h2>
          </SortableContainer>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" data-magicpath-id="44" data-magicpath-path="AboutPage.tsx">
            {['https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80', 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=600&q=80', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80', 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80', 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80'].map((image, index) => {
              const altTexts = ['Chef preparing fresh ingredients in a bright kitchen', 'Colorful array of fresh vegetables and plant-based ingredients', 'Beautifully plated vegan dish with artistic presentation', 'Fresh seasonal produce and wholesome cooking ingredients', 'Homemade plant-based baked treats cooling on a rack', 'Fresh cinnamon rolls with glaze, ready to serve'];
              return <SortableContainer dndKitId="1fcb5b65-cb37-436f-bdc0-688fb41497f1" containerType="regular" prevTag="motion.div" key={index} initial={{
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
              }} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow" data-magicpath-id="45" data-magicpath-path="AboutPage.tsx">
                <img src={image} alt={altTexts[index]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" data-magicpath-id="46" data-magicpath-path="AboutPage.tsx" />
              </SortableContainer>;
            })}
          </div>
        </SortableContainer>
      </SortableContainer>

      {/* Call to Action */}
      <SortableContainer dndKitId="553be9c9-3db2-41b6-a788-ed9339278c5c" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" aria-labelledby="cta-heading" data-magicpath-id="47" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="ab552e99-5e71-4a30-b296-3f3a003104b3" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="48" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="fef2de6a-2534-4cbd-bfbd-791cf45906f4" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} data-magicpath-id="49" data-magicpath-path="AboutPage.tsx">
            <h2 id="cta-heading" className="font-serif text-3xl sm:text-4xl text-[#2D2D2D] mb-5" data-magicpath-id="50" data-magicpath-path="AboutPage.tsx">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-[#4A4A4A] text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto" data-magicpath-id="51" data-magicpath-path="AboutPage.tsx">
              Whether it's catering your retreat or baking treats for your week, I'd love to nourish you with food made from the heart.
            </p>
            <SortableContainer dndKitId="7d9b7bf8-2206-49b5-8aaa-a3a2a43083d6" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4 justify-center" data-magicpath-id="52" data-magicpath-path="AboutPage.tsx">
              <button onClick={() => onNavigate?.('#contact')} className="bg-[#5e7155] text-white px-8 py-4 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-base sm:text-lg" data-magicpath-id="53" data-magicpath-path="AboutPage.tsx">
                Get In Touch
              </button>
              <button onClick={() => onNavigate?.('#offerings')} className="bg-white text-[#5e7155] border-2 border-[#5e7155] px-8 py-4 rounded-full hover:bg-[#5e7155] hover:text-white transition-colors font-medium text-base sm:text-lg" data-magicpath-id="54" data-magicpath-path="AboutPage.tsx">
                See My Services
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
}