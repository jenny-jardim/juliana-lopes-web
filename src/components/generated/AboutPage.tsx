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
    mpid: "46c1d5b7-7856-445f-a9aa-d80052ce06fb"
  }, {
    icon: Sparkles,
    title: "Authenticity",
    description: "Everything I share—from my social media to my kitchen stories to the food itself—is real. No pretense, no shortcuts. Just honest, intentional work.",
    mpid: "cf6656f8-f35b-4814-ad64-d90aca29d82b"
  }, {
    icon: Leaf,
    title: "Connection to Nature",
    description: "I'm tuned to natural cycles. I source sustainably. I support practices that honor the earth and the animals. My plant-based choice isn't just dietary—it's philosophical.",
    mpid: "166996a3-e57d-470a-b043-ae9a8fa370bc"
  }, {
    icon: Users,
    title: "Warmth & Community",
    description: "I create inclusive spaces through food. Dietary preferences don't mean exclusion—they mean I care enough to nourish you exactly as you need to be nourished. Everyone belongs at my table.",
    mpid: "890dc77a-63b1-4a37-a3fc-6825c8a0bdac"
  }] as any[];
  const journeyMilestones = [{
    year: "The Beginning",
    title: "Cooking for Myself",
    text: "I've always loved cooking. For years, I prepared meals for myself because I believed in the power of real, wholesome food. I cooked from scratch, avoided processed foods, and found connection to what I was eating.",
    mpid: "02b5a79f-d875-4c25-ad0e-766b39b05a44"
  }, {
    year: "2024",
    title: "The Turning Point",
    text: "I enrolled in a professional vegan chef course with Rawish Academy in Lisbon and a gluten-free baking course with Plantlife. I didn't just want to be vegan; I wanted to master it.",
    mpid: "36b2046d-0c96-42a5-b9bf-1ca3bac703dd"
  }, {
    year: "Oct 2024",
    title: "First Retreat",
    text: "I catered my first three-day retreat, cooking with the same intention I brought to my own kitchen—with care, wholesome ingredients, and the belief that food could be part of healing.",
    mpid: "d2e75c3b-ad11-48da-8bbc-16c29138e071"
  }, {
    year: "Dec 2024",
    title: "The Leap",
    text: "I quit my accounting job and decided to dedicate 2025 entirely to my new career path. I launched Pep Me Up—my plant-based, gluten-free treats business.",
    mpid: "2e068abe-01dc-4bf2-b0a1-16e17341fbb9"
  }, {
    year: "2025",
    title: "Building Something Real",
    text: "I've been growing Pep Me Up, taking orders, working as a chef in a vegan kitchen, and catering retreats. I've learned that food is never just food—it's connection, care, and nourishment.",
    mpid: "8562dea8-3896-4c82-a7c6-4bc1b4e0ea49"
  }] as any[];
  return <SortableContainer dndKitId="927aa2b0-94a0-4a1c-af4c-4d0021fd3c31" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="AboutPage.tsx">
      {/* Hero Section */}
      <SortableContainer dndKitId="39f2c2e9-4f5e-4010-a78b-b5dbb57a8db9" containerType="regular" prevTag="section" className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden" role="banner" aria-label="About Juliana hero section" data-magicpath-id="1" data-magicpath-path="AboutPage.tsx">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80)',
        filter: 'brightness(0.6)'
      }} data-magicpath-id="2" data-magicpath-path="AboutPage.tsx" />
        <SortableContainer dndKitId="5760b06f-e816-4116-89d2-27a036adcf14" containerType="regular" prevTag="div" className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl" data-magicpath-id="3" data-magicpath-path="AboutPage.tsx">
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
      <SortableContainer dndKitId="e4672fad-3969-4ed5-9e68-a8733e339d4e" containerType="regular" prevTag="main" data-magicpath-id="6" data-magicpath-path="AboutPage.tsx">
      <SortableContainer dndKitId="c0692e93-0341-4a39-ad01-c746333be3ec" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" aria-labelledby="journey-heading" data-magicpath-id="7" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="8f1e25fc-7456-4a86-953d-c59b9f577ecc" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="8" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="c83338de-3394-445e-aeb3-0a192f0c7dd9" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="0adb4bc8-dc1f-40af-9521-5171be6c34d0" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="3762ad43-aa15-4be8-9e53-5131e5e8f3dc" containerType="collection" prevTag="div" className="space-y-6 sm:space-y-8" data-magicpath-id="13" data-magicpath-path="AboutPage.tsx">
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
      <SortableContainer dndKitId="d40955a2-8e20-423e-9ff8-1510f3548894" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" aria-labelledby="values-heading" data-magicpath-id="21" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="cfb2a622-8a33-44fc-9085-1d01f25d2d74" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="22" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="bad0f3c2-acea-494a-9d2e-0a884b157d14" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="edaae37c-e3fe-46e5-a68e-73dd390e5799" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8" data-magicpath-id="26" data-magicpath-path="AboutPage.tsx">
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
      <SortableContainer dndKitId="f6782d2c-6c5d-4292-899c-19c5a4aa1531" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#5e7155]" aria-labelledby="why-heading" data-magicpath-id="33" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="e6d104a6-9563-4235-aa39-31739d97cacb" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="34" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="979bc493-2bba-4ece-83c7-7d570235b539" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="93b2e588-8148-4030-a3db-51dda497e809" containerType="regular" prevTag="div" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8" data-magicpath-id="37" data-magicpath-path="AboutPage.tsx">
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
      <SortableContainer dndKitId="969a889a-af53-4b10-a4f8-b0ae8a53c730" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="gallery-heading" data-magicpath-id="40" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="88024934-a860-469a-8691-5d0771109cb6" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="41" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="20f61d1e-ae9c-49b0-9e19-8488e65c696d" containerType="regular" prevTag="motion.div" initial={{
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
              return <SortableContainer dndKitId="fd46d54c-5f29-48fb-b959-db92a1c333ee" containerType="regular" prevTag="motion.div" key={index} initial={{
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
      <SortableContainer dndKitId="bbbd06f7-c645-4fb5-88fb-e280712178fc" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" aria-labelledby="cta-heading" data-magicpath-id="47" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="cb8183e1-c4eb-43d0-ba25-bf8ad8399e6a" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="48" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="ccdfec55-1187-49b2-9a3c-a4dfa86184f6" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="7f2fff37-fb02-47cd-80bf-c2289f0b891b" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4 justify-center" data-magicpath-id="52" data-magicpath-path="AboutPage.tsx">
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