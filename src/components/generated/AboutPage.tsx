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
    mpid: "d1a62df4-24ff-4f5c-a583-9bb66b0c3851"
  }, {
    icon: Sparkles,
    title: "Authenticity",
    description: "Everything I share—from my social media to my kitchen stories to the food itself—is real. No pretense, no shortcuts. Just honest, intentional work.",
    mpid: "04a42f67-4f10-464b-b356-227050a02060"
  }, {
    icon: Leaf,
    title: "Connection to Nature",
    description: "I'm tuned to natural cycles. I source sustainably. I support practices that honor the earth and the animals. My plant-based choice isn't just dietary—it's philosophical.",
    mpid: "52b948ad-770f-4202-8bfc-23d0ae3ddaad"
  }, {
    icon: Users,
    title: "Warmth & Community",
    description: "I create inclusive spaces through food. Dietary preferences don't mean exclusion—they mean I care enough to nourish you exactly as you need to be nourished. Everyone belongs at my table.",
    mpid: "7ca0b25b-6433-4ead-be4a-f5f728fb1a50"
  }] as any[];
  const journeyMilestones = [{
    year: "The Beginning",
    title: "Cooking for Myself",
    text: "I've always loved cooking. For years, I prepared meals for myself because I believed in the power of real, wholesome food. I cooked from scratch, avoided processed foods, and found connection to what I was eating.",
    mpid: "3679d540-a3f3-4ae4-81c1-2a6b176d4424"
  }, {
    year: "2024",
    title: "The Turning Point",
    text: "I enrolled in a professional vegan chef course with Rawish Academy in Lisbon and a gluten-free baking course with Plantlife. I didn't just want to be vegan; I wanted to master it.",
    mpid: "75e773b9-c86f-4c3c-8572-779986f597ed"
  }, {
    year: "Oct 2024",
    title: "First Retreat",
    text: "I catered my first three-day retreat, cooking with the same intention I brought to my own kitchen—with care, wholesome ingredients, and the belief that food could be part of healing.",
    mpid: "86b9a2bf-5bc3-42c0-a24c-5109ec4c1b89"
  }, {
    year: "Dec 2024",
    title: "The Leap",
    text: "I quit my accounting job and decided to dedicate 2025 entirely to my new career path. I launched Pep Me Up—my plant-based, gluten-free treats business.",
    mpid: "374a6e35-7a68-412f-9020-8b86621eafe9"
  }, {
    year: "2025",
    title: "Building Something Real",
    text: "I've been growing Pep Me Up, taking orders, working as a chef in a vegan kitchen, and catering retreats. I've learned that food is never just food—it's connection, care, and nourishment.",
    mpid: "b0d1ba67-41ae-4f1f-9c24-caa6b51588c7"
  }] as any[];
  return <SortableContainer dndKitId="f374858b-e740-45cf-a0d0-d2ecc70f489b" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="AboutPage.tsx">
      {/* Hero Section */}
      <SortableContainer dndKitId="2c7e60c9-d067-4139-bfd7-ac60e0db38d7" containerType="regular" prevTag="section" className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden" role="banner" aria-label="About Juliana hero section" data-magicpath-id="1" data-magicpath-path="AboutPage.tsx">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80)',
        filter: 'brightness(0.6)'
      }} data-magicpath-id="2" data-magicpath-path="AboutPage.tsx" />
        <SortableContainer dndKitId="fbd4cc74-2f0a-4e35-bca3-2847ccaae08f" containerType="regular" prevTag="div" className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl" data-magicpath-id="3" data-magicpath-path="AboutPage.tsx">
          <motion.h1 data-magicpath-motion-tag="motion.h1" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="font-serif text-4xl sm:text-5xl md:text-6xl mb-4 leading-tight" style={{
          fontFamily: "Playfair Display, serif"
        }} data-magicpath-id="4" data-magicpath-path="AboutPage.tsx">
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
        }} className="text-lg sm:text-xl md:text-2xl leading-relaxed" style={{
          fontFamily: "Montserrat"
        }} data-magicpath-id="5" data-magicpath-path="AboutPage.tsx">
            From a home kitchen to nourishing retreats worldwide
          </motion.p>
        </SortableContainer>
      </SortableContainer>

      {/* Journey Timeline - Single Card */}
      <SortableContainer dndKitId="729ab520-221d-4b1c-909a-db1f67b17d47" containerType="regular" prevTag="main" data-magicpath-id="6" data-magicpath-path="AboutPage.tsx">
      <SortableContainer dndKitId="7a3eb942-4cb2-449e-b8f7-36a338c6b9ad" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" aria-labelledby="journey-heading" data-magicpath-id="7" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="51ca693b-940a-4911-b0a5-d61597241a63" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="8" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="f462b727-247b-410c-a8f4-ca33068958aa" containerType="regular" prevTag="motion.div" initial={{
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
            <h2 id="journey-heading" className="font-serif text-3xl sm:text-4xl text-[#2D2D2D] mb-3" style={{
              fontFamily: "Playfair Display, serif"
            }} data-magicpath-id="10" data-magicpath-path="AboutPage.tsx">
              My Journey
            </h2>
            <p className="text-[#5e7155] text-base sm:text-lg" style={{
              fontFamily: "Montserrat"
            }} data-magicpath-id="11" data-magicpath-path="AboutPage.tsx">
              How I became the chef I am today
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="08f4fd50-ca58-480e-aac4-aa38fb4953af" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="5e5ff0bd-ee15-4122-8b56-3db08527688d" containerType="collection" prevTag="div" className="space-y-6 sm:space-y-8" data-magicpath-id="13" data-magicpath-path="AboutPage.tsx">
              {journeyMilestones.map((milestone, index) => <div key={index} className="relative pl-8 sm:pl-10 border-l-2 border-[#5e7155]/20 last:border-l-0" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="AboutPage.tsx">
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#5e7155] border-4 border-white shadow-sm" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="AboutPage.tsx" />
                  
                  <div className="space-y-2" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-id="16" data-magicpath-path="AboutPage.tsx">
                    <div className="flex flex-wrap items-baseline gap-2 sm:gap-3" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="AboutPage.tsx">
                      <span className="inline-block bg-[#5e7155] text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold" style={{
                      fontFamily: "Montserrat"
                    }} data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-field="year:unknown" data-magicpath-id="18" data-magicpath-path="AboutPage.tsx">
                        {milestone.year}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl text-[#2D2D2D] font-semibold" style={{
                      fontFamily: "Playfair Display, serif"
                    }} data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="19" data-magicpath-path="AboutPage.tsx">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed" style={{
                    fontFamily: "Montserrat"
                  }} data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-field="text:unknown" data-magicpath-id="20" data-magicpath-path="AboutPage.tsx">
                      {milestone.text}
                    </p>
                  </div>
                </div>)}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Brand Values Section */}
      <SortableContainer dndKitId="1baac8c1-182e-4aae-8fc9-bd304a7d7e10" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" aria-labelledby="values-heading" data-magicpath-id="21" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="ff9f016a-59c7-4f7c-bdb9-945505cd63c4" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="22" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="42586823-9e0a-4b02-83de-521c41a3be63" containerType="regular" prevTag="motion.div" initial={{
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
            <h2 id="values-heading" className="font-serif text-3xl sm:text-4xl text-[#5e7155] mb-3" style={{
              fontFamily: "Playfair Display, serif"
            }} data-magicpath-id="24" data-magicpath-path="AboutPage.tsx">
              My Brand Values
            </h2>
            <p className="text-[#4A4A4A] text-base sm:text-lg max-w-3xl mx-auto" style={{
              fontFamily: "Montserrat"
            }} data-magicpath-id="25" data-magicpath-path="AboutPage.tsx">
              Everything I do flows from these four commitments
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="0e6e3b14-4716-42b5-b325-708bddd7bea3" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8" data-magicpath-id="26" data-magicpath-path="AboutPage.tsx">
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
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2D2D2D] mt-0.5" style={{
                    fontFamily: "Playfair Display, serif"
                  }} data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="31" data-magicpath-path="AboutPage.tsx">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" style={{
                  fontFamily: "Montserrat"
                }} data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="32" data-magicpath-path="AboutPage.tsx">
                    {value.description}
                  </p>
                </motion.div>;
            })}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Why I Do This Section */}
      <SortableContainer dndKitId="f4a8ea62-a433-41fa-a145-b732f5ecb608" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#5e7155]" aria-labelledby="why-heading" data-magicpath-id="33" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="280c7ab4-1797-462f-a1bc-9d6c290d082a" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="34" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="6386502b-b8cb-4dc1-89e4-6de2b5e95458" containerType="regular" prevTag="motion.div" initial={{
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
            <h2 id="why-heading" className="font-serif text-3xl sm:text-4xl text-white mb-6 sm:mb-8" style={{
              fontFamily: "Montserrat"
            }} data-magicpath-id="36" data-magicpath-path="AboutPage.tsx">
              Why I Do This
            </h2>
            <SortableContainer dndKitId="9e971398-cdfe-42fa-9656-13f2e04f75c5" containerType="regular" prevTag="div" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8" data-magicpath-id="37" data-magicpath-path="AboutPage.tsx">
              <p className="text-white text-base sm:text-lg leading-relaxed mb-4" style={{
                fontFamily: "Montserrat"
              }} data-magicpath-id="38" data-magicpath-path="AboutPage.tsx">
                I do this because I believe food can be transformative. I do it because retreat organizers and professionals deserve to eat well without guilt. I do it because someone working a demanding job should be able to buy a treat that feels homemade and made just for them.
              </p>
              <p className="text-white text-lg sm:text-xl leading-relaxed font-semibold italic" style={{
                fontFamily: "Montserrat"
              }} data-magicpath-id="39" data-magicpath-path="AboutPage.tsx">
                I do it because connection and care matter. And food is one of the most beautiful ways to express both.
              </p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Image Gallery Section */}
      <SortableContainer dndKitId="d6d88554-77f7-46d8-82ca-af5b2e6ad16c" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="gallery-heading" data-magicpath-id="40" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="58cd93d2-e3bd-4ac2-880a-180ab47d1b59" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="41" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="8470c64e-5a8a-42c6-b464-2445c6a294d8" containerType="regular" prevTag="motion.div" initial={{
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
            <h2 id="gallery-heading" className="font-serif text-3xl sm:text-4xl text-[#2D2D2D]" style={{
              fontFamily: "Montserrat"
            }} data-magicpath-id="43" data-magicpath-path="AboutPage.tsx">
              A Glimpse Into My Kitchen
            </h2>
          </SortableContainer>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" data-magicpath-id="44" data-magicpath-path="AboutPage.tsx">
            {['https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80', 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=600&q=80', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80', 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80', 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80'].map((image, index) => {
              const altTexts = ['Chef preparing fresh ingredients in a bright kitchen', 'Colorful array of fresh vegetables and plant-based ingredients', 'Beautifully plated vegan dish with artistic presentation', 'Fresh seasonal produce and wholesome cooking ingredients', 'Homemade plant-based baked treats cooling on a rack', 'Fresh cinnamon rolls with glaze, ready to serve'];
              return <SortableContainer dndKitId="ed128108-705e-44e2-a73b-cc718cae6b02" containerType="regular" prevTag="motion.div" key={index} initial={{
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
      <SortableContainer dndKitId="ae099544-5b77-4290-b4a0-bee94bed15ca" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" aria-labelledby="cta-heading" data-magicpath-id="47" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="1f73eb5e-be12-46c9-82a6-eb9722796fa7" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="48" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="76f45358-50cf-4719-9f3a-c137f0e1bf7d" containerType="regular" prevTag="motion.div" initial={{
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
            <h2 id="cta-heading" className="font-serif text-3xl sm:text-4xl text-[#2D2D2D] mb-5" style={{
              fontFamily: "Montserrat"
            }} data-magicpath-id="50" data-magicpath-path="AboutPage.tsx">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-[#4A4A4A] text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto" style={{
              fontFamily: "Montserrat"
            }} data-magicpath-id="51" data-magicpath-path="AboutPage.tsx">
              Whether it's catering your retreat or baking treats for your week, I'd love to nourish you with food made from the heart.
            </p>
            <SortableContainer dndKitId="b17e1899-8724-4eb3-b9e7-f873700d91fa" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4 justify-center" data-magicpath-id="52" data-magicpath-path="AboutPage.tsx">
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