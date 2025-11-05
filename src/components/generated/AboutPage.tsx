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
    mpid: "cd6f30d1-14db-4567-8108-8288e6653b73"
  }, {
    icon: Sparkles,
    title: "Authenticity",
    description: "Everything I share—from my social media to my kitchen stories to the food itself—is real. No pretense, no shortcuts. Just honest, intentional work.",
    mpid: "f3d6ec7e-9c2f-4976-a6c5-92ddd1163b0b"
  }, {
    icon: Leaf,
    title: "Connection to Nature",
    description: "I'm tuned to natural cycles. I source sustainably. I support practices that honor the earth and the animals. My plant-based choice isn't just dietary—it's philosophical.",
    mpid: "09f9dd92-73da-428a-bd57-9ff7476229bc"
  }, {
    icon: Users,
    title: "Warmth & Community",
    description: "I create inclusive spaces through food. Dietary preferences don't mean exclusion—they mean I care enough to nourish you exactly as you need to be nourished. Everyone belongs at my table.",
    mpid: "86b073ca-6262-4f59-913f-d294e58821d4"
  }] as any[];
  const journeyMilestones = [{
    year: "The Beginning",
    title: "Cooking for Myself",
    description: "I've always loved cooking. For years, I prepared meals for myself not because it was Instagram-worthy or trendy, but because I believed in the power of real, wholesome food. My kitchen was where I took control of my health and my choices. I cooked from scratch, avoided processed foods, and found that preparing my own meals gave me not just better nutrition—but peace of mind and connection to what I was eating.",
    highlight: "But for a long time, I never thought of myself as a chef. I was just someone who cared deeply about food.",
    mpid: "fafb8b57-8118-4b31-a7a6-e42e7c3b7c71"
  }, {
    year: "2024",
    title: "The Turning Point",
    description: "In 2024, something shifted. I realized that my passion for cooking and nourishment wasn't just a personal practice—it was a calling.",
    highlight: "I made a decision that scared me a little: I enrolled in a professional vegan chef course with Rawish Academy in Lisbon. I studied intensively, learning techniques, flavor profiles, and the philosophy behind plant-based cooking. I didn't just want to be vegan; I wanted to master it.",
    additional: "At the same time, I enrolled in a gluten-free baking course with Plantlife. I learned how to create baked goods that weren't just free of gluten—they were genuinely delicious, satisfying, and nourishing.",
    mpid: "643d9bec-17a0-4847-8fc2-4fbd4dfd2202"
  }, {
    year: "October 2024",
    title: "First Retreat",
    description: "My first real test came in October 2024, when I catered a three-day retreat. I was nervous, excited, and absolutely committed to getting it right.",
    highlight: "I cooked for those retreat participants with the same intention I brought to my own kitchen—with care, with wholesome ingredients, with the belief that food could be part of their healing and transformation.",
    additional: "The retreat was everything I hoped it would be. My clients felt nourished. They felt seen. Food became a beautiful part of their experience. That's when I knew I was on the right path.",
    mpid: "8bc7c51d-f82d-480f-92b5-bbdd2cbda3b1"
  }, {
    year: "December 2024",
    title: "The Leap",
    description: "Two months after my first retreat, I made the biggest decision of my career: I quit my job.",
    highlight: "I had been working at a small accounting firm—steady work, good paycheck, safe choice. But something inside me said it was time to fully commit to what I believed in.",
    additional: "In December 2024, I left that job and decided to dedicate 2025 entirely to my new career path. I launched Pep Me Up—my plant-based, gluten-free treats business. I offered vegan and gluten-free panettones as my first seasonal offering. It was a leap of faith, but it was authentic.",
    mpid: "30381012-1ece-4e39-9f08-db06b7f88a59"
  }, {
    year: "2025",
    title: "Building Something Real",
    description: "This past year has been about growing Pep Me Up, taking orders from the community, and also working as a chef in a vegan kitchen. I've catered more retreats. I've baked hundreds of treats for people who trusted me. I've built relationships with people who believe in what I'm doing.",
    highlight: "And I've learned something profound: Food is never just food. It's connection. It's care. It's a way of saying 'I see you, I value you, you deserve nourishment.'",
    mpid: "483a8c90-b59d-4277-97be-5b793cd80c5c"
  }] as any[];
  return <SortableContainer dndKitId="72a3fa20-a889-48b1-b505-06cfb387dee9" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="AboutPage.tsx">
      {/* Hero Section */}
      <SortableContainer dndKitId="7db2300e-2269-4220-be6b-2bc2ae3128e7" containerType="regular" prevTag="section" className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden" data-magicpath-id="1" data-magicpath-path="AboutPage.tsx">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80)',
        filter: 'brightness(0.6)'
      }} data-magicpath-id="2" data-magicpath-path="AboutPage.tsx" />
        <SortableContainer dndKitId="c10d4157-948a-47ad-858d-28f80d1f72a4" containerType="regular" prevTag="div" className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl" data-magicpath-id="3" data-magicpath-path="AboutPage.tsx">
          <motion.h1 data-magicpath-motion-tag="motion.h1" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 leading-tight" data-magicpath-id="4" data-magicpath-path="AboutPage.tsx">
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

      {/* Journey Timeline */}
      <SortableContainer dndKitId="7431af16-60c8-4931-9dd3-46322d84de5b" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6" data-magicpath-id="6" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="27b54598-c673-4079-8e2f-8041554d47a4" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="7" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="53f5f35c-ee83-4381-bd2e-3f3c578bd11f" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12 sm:mb-16" data-magicpath-id="8" data-magicpath-path="AboutPage.tsx">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-4" data-magicpath-id="9" data-magicpath-path="AboutPage.tsx">
              The Journey
            </h2>
            <p className="text-[#8B9B7F] text-lg sm:text-xl" data-magicpath-id="10" data-magicpath-path="AboutPage.tsx">
              How I became the chef I am today
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="3ef3bf33-a008-4ac8-a0b2-d3c024ab6b67" containerType="collection" prevTag="div" className="space-y-12 sm:space-y-16" data-magicpath-id="11" data-magicpath-path="AboutPage.tsx">
            {journeyMilestones.map((milestone, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} initial={{
            opacity: 0,
            x: index % 2 === 0 ? -30 : 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="relative" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="AboutPage.tsx">
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="AboutPage.tsx">
                  <div className="flex items-start gap-4 sm:gap-6 mb-4" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="AboutPage.tsx">
                    <div className="bg-[#8B9B7F] text-white px-4 py-2 rounded-full font-semibold text-sm sm:text-base flex-shrink-0" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-field="year:unknown" data-magicpath-id="15" data-magicpath-path="AboutPage.tsx">
                      {milestone.year}
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#2D2D2D]" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="16" data-magicpath-path="AboutPage.tsx">
                      {milestone.title}
                    </h3>
                  </div>
                  <div className="space-y-4 text-[#4A4A4A] leading-relaxed" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="AboutPage.tsx">
                    <p className="text-sm sm:text-base" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="18" data-magicpath-path="AboutPage.tsx">{milestone.description}</p>
                    {milestone.highlight && <p className="text-sm sm:text-base italic text-[#8B9B7F] font-medium" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-field="highlight:unknown" data-magicpath-id="19" data-magicpath-path="AboutPage.tsx">
                        {milestone.highlight}
                      </p>}
                    {milestone.additional && <p className="text-sm sm:text-base" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-field="additional:unknown" data-magicpath-id="20" data-magicpath-path="AboutPage.tsx">{milestone.additional}</p>}
                  </div>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Brand Values Section */}
      <SortableContainer dndKitId="744f1c59-92cc-406e-87f1-8ea7ed7c6f8f" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" data-magicpath-id="21" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="858da44c-59b9-4923-ad4e-3b2233c53435" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="22" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="b8d8e4bc-cb98-4b5c-a8e5-6e4cd89f2b00" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12 sm:mb-16" data-magicpath-id="23" data-magicpath-path="AboutPage.tsx">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#8B9B7F] mb-4" data-magicpath-id="24" data-magicpath-path="AboutPage.tsx">
              My Brand Values
            </h2>
            <p className="text-[#4A4A4A] text-lg sm:text-xl max-w-3xl mx-auto" data-magicpath-id="25" data-magicpath-path="AboutPage.tsx">
              Everything I do flows from these four commitments
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="a9661ffb-8bdb-41ae-a340-d3d72cdc92a9" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10" data-magicpath-id="26" data-magicpath-path="AboutPage.tsx">
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
            }} className="bg-[#F5F1E8] rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow" data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-id="27" data-magicpath-path="AboutPage.tsx">
                  <div className="flex items-start gap-4 mb-4" data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-id="28" data-magicpath-path="AboutPage.tsx">
                    <div className="bg-[#8B9B7F] text-white p-3 rounded-full flex-shrink-0" data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-id="29" data-magicpath-path="AboutPage.tsx">
                      <IconComponent className="w-6 h-6" data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-id="30" data-magicpath-path="AboutPage.tsx" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2D2D2D] mt-1" data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="31" data-magicpath-path="AboutPage.tsx">
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
      <SortableContainer dndKitId="a694b9fb-7da3-4efd-b7bc-7523e675c8e8" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#8B9B7F]" data-magicpath-id="33" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="8b444fa7-f8a0-45b6-851b-dcf401faa853" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="34" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="43bc7d76-e88b-46dd-ae8e-077a9ba5bd05" containerType="regular" prevTag="motion.div" initial={{
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
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6 sm:mb-8" data-magicpath-id="36" data-magicpath-path="AboutPage.tsx">
              Why I Do This
            </h2>
            <SortableContainer dndKitId="9f03c64f-4356-4a22-9e56-9d6867b68f0f" containerType="regular" prevTag="div" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 md:p-10" data-magicpath-id="37" data-magicpath-path="AboutPage.tsx">
              <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-6" data-magicpath-id="38" data-magicpath-path="AboutPage.tsx">
                I do this because I believe food can be transformative. I do it because retreat organizers and professionals deserve to eat well without guilt. I do it because someone working a demanding job should be able to buy a treat that feels homemade and made just for them.
              </p>
              <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed font-semibold italic" data-magicpath-id="39" data-magicpath-path="AboutPage.tsx">
                I do it because connection and care matter. And food is one of the most beautiful ways to express both.
              </p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Image Gallery Section */}
      <SortableContainer dndKitId="b0b38660-5fb5-49ca-9bb2-f2c3b837ce42" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" data-magicpath-id="40" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="49e9fb2a-2720-4157-a656-b134f21c3f3b" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="41" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="0aa452e1-6a8d-4b42-8b61-ea8d89d1095b" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12 sm:mb-16" data-magicpath-id="42" data-magicpath-path="AboutPage.tsx">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-4" data-magicpath-id="43" data-magicpath-path="AboutPage.tsx">
              A Glimpse Into My Kitchen
            </h2>
          </SortableContainer>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" data-magicpath-id="44" data-magicpath-path="AboutPage.tsx">
            {['https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80', 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=600&q=80', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80', 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80', 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80'].map((image, index) => <SortableContainer dndKitId="6edcf155-031c-4611-82c6-16e4e633131f" containerType="regular" prevTag="motion.div" key={index} initial={{
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
                <img src={image} alt={`Kitchen moment ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" data-magicpath-id="46" data-magicpath-path="AboutPage.tsx" />
              </SortableContainer>)}
          </div>
        </SortableContainer>
      </SortableContainer>

      {/* Call to Action */}
      <SortableContainer dndKitId="9170acf3-39c8-40f3-87a7-3766685581a5" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" data-magicpath-id="47" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="1d6ac222-cf3b-4254-8b36-60463c4cc204" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="48" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="dea27eb7-c199-4a56-a2f6-8660f014e0c9" containerType="regular" prevTag="motion.div" initial={{
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
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-6" data-magicpath-id="50" data-magicpath-path="AboutPage.tsx">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-[#4A4A4A] text-base sm:text-lg md:text-xl mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto" data-magicpath-id="51" data-magicpath-path="AboutPage.tsx">
              Whether it's catering your retreat or baking treats for your week, I'd love to nourish you with food made from the heart.
            </p>
            <SortableContainer dndKitId="e0b0ff5e-17c0-45e0-bcae-0d0557189417" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4 justify-center" data-magicpath-id="52" data-magicpath-path="AboutPage.tsx">
              <button onClick={() => onNavigate?.('#contact')} className="bg-[#8B9B7F] text-white px-8 py-4 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-base sm:text-lg" data-magicpath-id="53" data-magicpath-path="AboutPage.tsx">
                Get In Touch
              </button>
              <button onClick={() => onNavigate?.('#offerings')} className="bg-white text-[#8B9B7F] border-2 border-[#8B9B7F] px-8 py-4 rounded-full hover:bg-[#8B9B7F] hover:text-white transition-colors font-medium text-base sm:text-lg" data-magicpath-id="54" data-magicpath-path="AboutPage.tsx">
                See My Services
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
}