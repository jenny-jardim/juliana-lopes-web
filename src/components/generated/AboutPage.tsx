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
    mpid: "460f23b4-ffc3-4618-b111-e01cbf428a25"
  }, {
    icon: Sparkles,
    title: "Authenticity",
    description: "Everything I share—from my social media to my kitchen stories to the food itself—is real. No pretense, no shortcuts. Just honest, intentional work.",
    mpid: "742041a0-66a9-4239-8713-2670510d9d73"
  }, {
    icon: Leaf,
    title: "Connection to Nature",
    description: "I'm tuned to natural cycles. I source sustainably. I support practices that honor the earth and the animals. My plant-based choice isn't just dietary—it's philosophical.",
    mpid: "dee28dc9-1e84-4dca-8639-737f23ebb6d2"
  }, {
    icon: Users,
    title: "Warmth & Community",
    description: "I create inclusive spaces through food. Dietary preferences don't mean exclusion—they mean I care enough to nourish you exactly as you need to be nourished. Everyone belongs at my table.",
    mpid: "dd7749d0-bcc4-4ea3-8f23-c28a131c3603"
  }] as any[];
  const journeyMilestones = [{
    year: "The Beginning",
    title: "Cooking for Myself",
    description: "I've always loved cooking. For years, I prepared meals for myself not because it was Instagram-worthy or trendy, but because I believed in the power of real, wholesome food. My kitchen was where I took control of my health and my choices. I cooked from scratch, avoided processed foods, and found that preparing my own meals gave me not just better nutrition—but peace of mind and connection to what I was eating.",
    highlight: "But for a long time, I never thought of myself as a chef. I was just someone who cared deeply about food.",
    mpid: "ed4d4da3-a0c0-4751-ae9f-c168d71b297d"
  }, {
    year: "2024",
    title: "The Turning Point",
    description: "In 2024, something shifted. I realized that my passion for cooking and nourishment wasn't just a personal practice—it was a calling.",
    highlight: "I made a decision that scared me a little: I enrolled in a professional vegan chef course with Rawish Academy in Lisbon. I studied intensively, learning techniques, flavor profiles, and the philosophy behind plant-based cooking. I didn't just want to be vegan; I wanted to master it.",
    additional: "At the same time, I enrolled in a gluten-free baking course with Plantlife. I learned how to create baked goods that weren't just free of gluten—they were genuinely delicious, satisfying, and nourishing.",
    mpid: "be63380a-2997-4b55-85f5-921891d16858"
  }, {
    year: "October 2024",
    title: "First Retreat",
    description: "My first real test came in October 2024, when I catered a three-day retreat. I was nervous, excited, and absolutely committed to getting it right.",
    highlight: "I cooked for those retreat participants with the same intention I brought to my own kitchen—with care, with wholesome ingredients, with the belief that food could be part of their healing and transformation.",
    additional: "The retreat was everything I hoped it would be. My clients felt nourished. They felt seen. Food became a beautiful part of their experience. That's when I knew I was on the right path.",
    mpid: "01d72e23-321d-409a-ac96-e673b1dd0150"
  }, {
    year: "December 2024",
    title: "The Leap",
    description: "Two months after my first retreat, I made the biggest decision of my career: I quit my job.",
    highlight: "I had been working at a small accounting firm—steady work, good paycheck, safe choice. But something inside me said it was time to fully commit to what I believed in.",
    additional: "In December 2024, I left that job and decided to dedicate 2025 entirely to my new career path. I launched Pep Me Up—my plant-based, gluten-free treats business. I offered vegan and gluten-free panettones as my first seasonal offering. It was a leap of faith, but it was authentic.",
    mpid: "09aabc61-a425-4211-b097-feef2650e870"
  }, {
    year: "2025",
    title: "Building Something Real",
    description: "This past year has been about growing Pep Me Up, taking orders from the community, and also working as a chef in a vegan kitchen. I've catered more retreats. I've baked hundreds of treats for people who trusted me. I've built relationships with people who believe in what I'm doing.",
    highlight: "And I've learned something profound: Food is never just food. It's connection. It's care. It's a way of saying 'I see you, I value you, you deserve nourishment.'",
    mpid: "30377852-28ba-4c42-8287-a4abce5200db"
  }] as any[];
  return <SortableContainer dndKitId="59e86392-aefe-41cf-9e11-a7c53cae3737" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="AboutPage.tsx">
      {/* Hero Section */}
      <SortableContainer dndKitId="f256bd13-2d5b-4035-a75a-b70b76669c5e" containerType="regular" prevTag="section" className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden" data-magicpath-id="1" data-magicpath-path="AboutPage.tsx">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80)',
        filter: 'brightness(0.6)'
      }} data-magicpath-id="2" data-magicpath-path="AboutPage.tsx" />
        <SortableContainer dndKitId="aabe9916-87ca-46c4-a032-54dd233125de" containerType="regular" prevTag="div" className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl" data-magicpath-id="3" data-magicpath-path="AboutPage.tsx">
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
      <SortableContainer dndKitId="9bbf74d1-103e-4aee-a520-1884616d6779" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6" data-magicpath-id="6" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="a4216d29-7b1f-44fd-9da0-c1b0f2082358" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="7" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="abb88170-56e7-4b4b-af2f-f1b6de1aa3a4" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="9c520a86-d04d-4e5b-83a1-1950ec484142" containerType="collection" prevTag="div" className="space-y-12 sm:space-y-16" data-magicpath-id="11" data-magicpath-path="AboutPage.tsx">
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
      <SortableContainer dndKitId="77bbfab5-2963-42b1-9ee8-4d9c775a8bdb" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" data-magicpath-id="21" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="40f5f2db-2807-49bd-ac24-179f244ae88b" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="22" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="6f89a541-d612-4675-908d-289d4c129d50" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="1d1c8dd2-e6e7-4f78-821f-afa62d9606e2" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10" data-magicpath-id="26" data-magicpath-path="AboutPage.tsx">
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
      <SortableContainer dndKitId="343838dd-9096-46c3-90d2-4878533c74ab" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#8B9B7F]" data-magicpath-id="33" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="7d8f8944-00ad-427f-ab1e-b6799f1f33b4" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="34" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="6cdcdb47-2e22-481e-a0f1-137c4ca6ff58" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="f3e98857-dbbf-4fff-979e-475c26c9e687" containerType="regular" prevTag="div" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 md:p-10" data-magicpath-id="37" data-magicpath-path="AboutPage.tsx">
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
      <SortableContainer dndKitId="3950981e-7484-4d36-b958-88a91cf8ca0a" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" data-magicpath-id="40" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="c8789a90-c2ec-4db3-b027-2e7d81b40733" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="41" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="5714adf7-a152-41d2-aef9-61eed24576a4" containerType="regular" prevTag="motion.div" initial={{
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
            {['https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80', 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=600&q=80', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80', 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80', 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80'].map((image, index) => <SortableContainer dndKitId="bedacbc6-34ea-4de4-8b9a-e97b4b3e96c9" containerType="regular" prevTag="motion.div" key={index} initial={{
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
      <SortableContainer dndKitId="97ed8c73-493e-4783-afb7-ac9979b2bd06" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" data-magicpath-id="47" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="0c1f765f-4910-47f1-85d5-6dd528efd3f8" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="48" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="1915c0f0-26bf-4c69-bcac-d95989474db6" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="00fa28e7-cd2f-4735-b0b7-e47ffe4859ad" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4 justify-center" data-magicpath-id="52" data-magicpath-path="AboutPage.tsx">
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