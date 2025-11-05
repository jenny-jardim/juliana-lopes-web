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
    mpid: "87110c61-3f13-4fc2-be5c-cc0aec7d4531"
  }, {
    icon: Sparkles,
    title: "Authenticity",
    description: "Everything I share—from my social media to my kitchen stories to the food itself—is real. No pretense, no shortcuts. Just honest, intentional work.",
    mpid: "f4b310f4-d732-4b23-ba4b-6e89c56531f4"
  }, {
    icon: Leaf,
    title: "Connection to Nature",
    description: "I'm tuned to natural cycles. I source sustainably. I support practices that honor the earth and the animals. My plant-based choice isn't just dietary—it's philosophical.",
    mpid: "585223e6-d3c0-4749-b7a9-954877a48ad1"
  }, {
    icon: Users,
    title: "Warmth & Community",
    description: "I create inclusive spaces through food. Dietary preferences don't mean exclusion—they mean I care enough to nourish you exactly as you need to be nourished. Everyone belongs at my table.",
    mpid: "12125326-7964-4028-ac06-17232439bc22"
  }] as any[];
  const journeyMilestones = [{
    year: "The Beginning",
    title: "Cooking for Myself",
    text: "I've always loved cooking. For years, I prepared meals for myself because I believed in the power of real, wholesome food. I cooked from scratch, avoided processed foods, and found connection to what I was eating.",
    mpid: "b79f59ba-049b-4b04-8086-4624a6e927e1"
  }, {
    year: "2024",
    title: "The Turning Point",
    text: "I enrolled in a professional vegan chef course with Rawish Academy in Lisbon and a gluten-free baking course with Plantlife. I didn't just want to be vegan; I wanted to master it.",
    mpid: "47a3db0a-e70a-4c7d-88d5-eb32ee713976"
  }, {
    year: "Oct 2024",
    title: "First Retreat",
    text: "I catered my first three-day retreat, cooking with the same intention I brought to my own kitchen—with care, wholesome ingredients, and the belief that food could be part of healing.",
    mpid: "1c4f1dba-d424-46ae-abed-8b339b48b6db"
  }, {
    year: "Dec 2024",
    title: "The Leap",
    text: "I quit my accounting job and decided to dedicate 2025 entirely to my new career path. I launched Pep Me Up—my plant-based, gluten-free treats business.",
    mpid: "e7f95b90-0e16-4d98-b7a0-3076a9e6baa5"
  }, {
    year: "2025",
    title: "Building Something Real",
    text: "I've been growing Pep Me Up, taking orders, working as a chef in a vegan kitchen, and catering retreats. I've learned that food is never just food—it's connection, care, and nourishment.",
    mpid: "e88d08ad-b372-499c-9716-82a2cef10fe7"
  }] as any[];
  return <SortableContainer dndKitId="0f7d91e3-5fd7-458e-8ed2-a2b2aaf9085e" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="AboutPage.tsx">
      {/* Hero Section */}
      <SortableContainer dndKitId="6dbe020c-5cc2-44b8-bee9-ef496b989c72" containerType="regular" prevTag="section" className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden" role="banner" aria-label="About Juliana hero section" data-magicpath-id="1" data-magicpath-path="AboutPage.tsx">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80)',
        filter: 'brightness(0.6)'
      }} data-magicpath-id="2" data-magicpath-path="AboutPage.tsx" />
        <SortableContainer dndKitId="6027a095-f2bf-4c2a-b181-e1fbbf365c9a" containerType="regular" prevTag="div" className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl" data-magicpath-id="3" data-magicpath-path="AboutPage.tsx">
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
      <SortableContainer dndKitId="56d465a9-99ea-4e32-a5f0-8d94abfe5689" containerType="regular" prevTag="main" data-magicpath-id="6" data-magicpath-path="AboutPage.tsx">
      <SortableContainer dndKitId="bef7d050-781d-415c-b4b1-c3107450a5bb" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" aria-labelledby="journey-heading" data-magicpath-id="7" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="3faaf1fe-1825-4e13-89c1-890ac4428bb1" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="8" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="061e856e-756a-4b38-968f-7bb3c0da3938" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="c01ea746-4da4-46ac-a638-a762cd096662" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="6b28e848-a1ca-4cd5-8677-f2313257af94" containerType="collection" prevTag="div" className="space-y-6 sm:space-y-8" data-magicpath-id="13" data-magicpath-path="AboutPage.tsx">
              {journeyMilestones.map((milestone, index) => <div key={index} className="relative pl-8 sm:pl-10 border-l-2 border-[#5e7155]/20 last:border-l-0" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="AboutPage.tsx">
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#5e7155] border-4 border-white shadow-sm" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="AboutPage.tsx" />
                  
                  <div className="space-y-2" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-id="16" data-magicpath-path="AboutPage.tsx">
                    <div className="flex flex-wrap items-baseline gap-2 sm:gap-3" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="AboutPage.tsx">
                      <span className="inline-block bg-[#5e7155] text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-field="year:unknown" data-magicpath-id="18" data-magicpath-path="AboutPage.tsx">
                        {milestone.year}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl text-[#2D2D2D] font-semibold" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="19" data-magicpath-path="AboutPage.tsx">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-field="text:unknown" data-magicpath-id="20" data-magicpath-path="AboutPage.tsx">
                      {milestone.text}
                    </p>
                  </div>
                </div>)}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Brand Values Section */}
      <SortableContainer dndKitId="665a02d8-c55f-4935-a914-12c97d99dab8" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" aria-labelledby="values-heading" data-magicpath-id="21" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="f90c432e-a6fb-4d0f-800b-cfe354372156" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="22" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="9033e3b8-bc8c-4035-9a67-c4e696932f7d" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="6b5c8863-e0b0-49ac-86cb-d89e3e67e631" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8" data-magicpath-id="26" data-magicpath-path="AboutPage.tsx">
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
      <SortableContainer dndKitId="d90e7c6c-1ef7-45cb-8ab1-7693eb6da70a" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#5e7155]" aria-labelledby="why-heading" data-magicpath-id="33" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="8d69e81f-f3e0-4139-967e-b77f2992740e" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="34" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="a940b6f0-68c7-4be5-9272-6b5cd43c1bbe" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="94a3ffef-5317-46e6-904b-2cf837b03a2b" containerType="regular" prevTag="div" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8" data-magicpath-id="37" data-magicpath-path="AboutPage.tsx">
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
      <SortableContainer dndKitId="30865b08-3481-42f8-9cd1-ab72a2ad869a" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="gallery-heading" data-magicpath-id="40" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="49c01c68-32d0-4cc3-b492-286ed839d8d8" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="41" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="06e6bb8a-3b4c-42ed-b137-7ffcc5255955" containerType="regular" prevTag="motion.div" initial={{
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
              return <SortableContainer dndKitId="4cbd78bf-bfb7-4032-a91c-6f916b7f7947" containerType="regular" prevTag="motion.div" key={index} initial={{
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
      <SortableContainer dndKitId="9c456f7a-67aa-49bb-8e03-882cfe80915c" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" aria-labelledby="cta-heading" data-magicpath-id="47" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="cfd17283-ba8f-4f2b-b33d-677ccbf6b864" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="48" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="35519091-9172-4686-9a5a-22e736e9ab8f" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="d2d3ff10-389f-4d7e-ab2c-3eb75619d9bd" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4 justify-center" data-magicpath-id="52" data-magicpath-path="AboutPage.tsx">
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