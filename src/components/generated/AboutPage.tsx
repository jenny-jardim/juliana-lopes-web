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
    mpid: "34b854b9-24c2-4964-8b7a-baab0969b1f5"
  }, {
    icon: Sparkles,
    title: "Authenticity",
    description: "Everything I share—from my social media to my kitchen stories to the food itself—is real. No pretense, no shortcuts. Just honest, intentional work.",
    mpid: "aadc5e7c-650a-4af0-96c0-dfc0c5b51423"
  }, {
    icon: Leaf,
    title: "Connection to Nature",
    description: "I'm tuned to natural cycles. I source sustainably. I support practices that honor the earth and the animals. My plant-based choice isn't just dietary—it's philosophical.",
    mpid: "9608b406-17a9-4db3-be33-14ae20c4acd0"
  }, {
    icon: Users,
    title: "Warmth & Community",
    description: "I create inclusive spaces through food. Dietary preferences don't mean exclusion—they mean I care enough to nourish you exactly as you need to be nourished. Everyone belongs at my table.",
    mpid: "532d0f15-aef4-44fb-ba98-1eb8f7c98120"
  }] as any[];
  const journeyMilestones = [{
    year: "The Beginning",
    title: "Cooking for Myself",
    description: "I've always loved cooking. For years, I prepared meals for myself not because it was Instagram-worthy or trendy, but because I believed in the power of real, wholesome food. My kitchen was where I took control of my health and my choices. I cooked from scratch, avoided processed foods, and found that preparing my own meals gave me not just better nutrition—but peace of mind and connection to what I was eating.",
    highlight: "But for a long time, I never thought of myself as a chef. I was just someone who cared deeply about food.",
    mpid: "72bde0b3-8bb4-48c1-9ece-de7515fac736"
  }, {
    year: "2024",
    title: "The Turning Point",
    description: "In 2024, something shifted. I realized that my passion for cooking and nourishment wasn't just a personal practice—it was a calling.",
    highlight: "I made a decision that scared me a little: I enrolled in a professional vegan chef course with Rawish Academy in Lisbon. I studied intensively, learning techniques, flavor profiles, and the philosophy behind plant-based cooking. I didn't just want to be vegan; I wanted to master it.",
    additional: "At the same time, I enrolled in a gluten-free baking course with Plantlife. I learned how to create baked goods that weren't just free of gluten—they were genuinely delicious, satisfying, and nourishing.",
    mpid: "ca3876ce-8ec8-43bc-954e-ce38f09464e5"
  }, {
    year: "October 2024",
    title: "First Retreat",
    description: "My first real test came in October 2024, when I catered a three-day retreat. I was nervous, excited, and absolutely committed to getting it right.",
    highlight: "I cooked for those retreat participants with the same intention I brought to my own kitchen—with care, with wholesome ingredients, with the belief that food could be part of their healing and transformation.",
    additional: "The retreat was everything I hoped it would be. My clients felt nourished. They felt seen. Food became a beautiful part of their experience. That's when I knew I was on the right path.",
    mpid: "e7fb4fbb-4820-419f-8601-11624cf6eccb"
  }, {
    year: "December 2024",
    title: "The Leap",
    description: "Two months after my first retreat, I made the biggest decision of my career: I quit my job.",
    highlight: "I had been working at a small accounting firm—steady work, good paycheck, safe choice. But something inside me said it was time to fully commit to what I believed in.",
    additional: "In December 2024, I left that job and decided to dedicate 2025 entirely to my new career path. I launched Pep Me Up—my plant-based, gluten-free treats business. I offered vegan and gluten-free panettones as my first seasonal offering. It was a leap of faith, but it was authentic.",
    mpid: "2b5f704e-c135-46fb-bbfc-810c95d97cd8"
  }, {
    year: "2025",
    title: "Building Something Real",
    description: "This past year has been about growing Pep Me Up, taking orders from the community, and also working as a chef in a vegan kitchen. I've catered more retreats. I've baked hundreds of treats for people who trusted me. I've built relationships with people who believe in what I'm doing.",
    highlight: "And I've learned something profound: Food is never just food. It's connection. It's care. It's a way of saying 'I see you, I value you, you deserve nourishment.'",
    mpid: "adad1da3-2393-4ccc-9074-352c96f2c373"
  }] as any[];
  return <SortableContainer dndKitId="c8e27f6d-76f9-40c8-b540-286e2392884d" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="AboutPage.tsx">
      {/* Hero Section */}
      <SortableContainer dndKitId="88a95156-a03a-4498-9f0b-053dca076dfc" containerType="regular" prevTag="section" className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden" role="banner" aria-label="About Juliana hero section" data-magicpath-id="1" data-magicpath-path="AboutPage.tsx">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80)',
        filter: 'brightness(0.6)'
      }} data-magicpath-id="2" data-magicpath-path="AboutPage.tsx" />
        <SortableContainer dndKitId="f0ee0041-b7d1-4f8c-a679-7eaa3cf7df28" containerType="regular" prevTag="div" className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl" data-magicpath-id="3" data-magicpath-path="AboutPage.tsx">
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
      <SortableContainer dndKitId="27777a65-20b9-45d0-92d7-3b6a04229d5d" containerType="regular" prevTag="main" data-magicpath-id="6" data-magicpath-path="AboutPage.tsx">
      <SortableContainer dndKitId="d25893ce-fbd3-4527-9a1e-623e35e2d598" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6" aria-labelledby="journey-heading" data-magicpath-id="7" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="69e2aca4-4cea-483e-8b0d-f3c7817d92d2" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="8" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="4fa98948-aee7-4c25-98e1-444c1321acdc" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12 sm:mb-16" data-magicpath-id="9" data-magicpath-path="AboutPage.tsx">
            <h2 id="journey-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-4" data-magicpath-id="10" data-magicpath-path="AboutPage.tsx">
              The Journey
            </h2>
            <p className="text-[#5e7155] text-lg sm:text-xl" data-magicpath-id="11" data-magicpath-path="AboutPage.tsx">
              How I became the chef I am today
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="a776e6e7-c77a-4ce6-b02b-29f27cf91002" containerType="collection" prevTag="div" className="space-y-12 sm:space-y-16" data-magicpath-id="12" data-magicpath-path="AboutPage.tsx">
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
            }} className="relative" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="AboutPage.tsx">
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="AboutPage.tsx">
                  <div className="flex items-start gap-4 sm:gap-6 mb-4" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="AboutPage.tsx">
                    <div className="bg-[#5e7155] text-white px-4 py-2 rounded-full font-semibold text-sm sm:text-base flex-shrink-0" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-field="year:unknown" data-magicpath-id="16" data-magicpath-path="AboutPage.tsx">
                      {milestone.year}
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#2D2D2D]" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="17" data-magicpath-path="AboutPage.tsx">
                      {milestone.title}
                    </h3>
                  </div>
                  <div className="space-y-4 text-[#4A4A4A] leading-relaxed" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-id="18" data-magicpath-path="AboutPage.tsx">
                    <p className="text-sm sm:text-base" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="19" data-magicpath-path="AboutPage.tsx">{milestone.description}</p>
                    {milestone.highlight && <p className="text-sm sm:text-base italic text-[#5e7155] font-medium" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-field="highlight:unknown" data-magicpath-id="20" data-magicpath-path="AboutPage.tsx">
                        {milestone.highlight}
                      </p>}
                    {milestone.additional && <p className="text-sm sm:text-base" data-magicpath-uuid={(milestone as any)["mpid"] ?? "unsafe"} data-magicpath-field="additional:unknown" data-magicpath-id="21" data-magicpath-path="AboutPage.tsx">{milestone.additional}</p>}
                  </div>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Brand Values Section */}
      <SortableContainer dndKitId="903a24fb-fa2d-4272-99d3-ed8c7519b0a1" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" aria-labelledby="values-heading" data-magicpath-id="22" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="9ce8ecca-fba8-4a18-a884-273576ab034c" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="23" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="d06975f8-e325-412d-af28-0aabe9aa0024" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12 sm:mb-16" data-magicpath-id="24" data-magicpath-path="AboutPage.tsx">
            <h2 id="values-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5e7155] mb-4" data-magicpath-id="25" data-magicpath-path="AboutPage.tsx">
              My Brand Values
            </h2>
            <p className="text-[#4A4A4A] text-lg sm:text-xl max-w-3xl mx-auto" data-magicpath-id="26" data-magicpath-path="AboutPage.tsx">
              Everything I do flows from these four commitments
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="65d7c859-c4f1-4512-a76d-fd63104fd6ba" containerType="collection" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10" data-magicpath-id="27" data-magicpath-path="AboutPage.tsx">
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
              }} className="bg-[#F5F1E8] rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow" data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-id="28" data-magicpath-path="AboutPage.tsx">
                  <div className="flex items-start gap-4 mb-4" data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-id="29" data-magicpath-path="AboutPage.tsx">
                    <div className="bg-[#5e7155] text-white p-3 rounded-full flex-shrink-0" data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-id="30" data-magicpath-path="AboutPage.tsx">
                      <IconComponent className="w-6 h-6" data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-id="31" data-magicpath-path="AboutPage.tsx" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2D2D2D] mt-1" data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="32" data-magicpath-path="AboutPage.tsx">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-uuid={(value as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="33" data-magicpath-path="AboutPage.tsx">
                    {value.description}
                  </p>
                </motion.div>;
            })}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Why I Do This Section */}
      <SortableContainer dndKitId="2f4e1647-1885-4485-a591-7c460cb8c09c" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#5e7155]" aria-labelledby="why-heading" data-magicpath-id="34" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="17f4858a-8957-4b60-9f75-44f753c4af1d" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="35" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="a7fee9c0-768e-4747-8956-5e3e604ed6a3" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center" data-magicpath-id="36" data-magicpath-path="AboutPage.tsx">
            <h2 id="why-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6 sm:mb-8" data-magicpath-id="37" data-magicpath-path="AboutPage.tsx">
              Why I Do This
            </h2>
            <SortableContainer dndKitId="57b9dedd-2b03-4e81-b5b1-01228f357c29" containerType="regular" prevTag="div" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 md:p-10" data-magicpath-id="38" data-magicpath-path="AboutPage.tsx">
              <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-6" data-magicpath-id="39" data-magicpath-path="AboutPage.tsx">
                I do this because I believe food can be transformative. I do it because retreat organizers and professionals deserve to eat well without guilt. I do it because someone working a demanding job should be able to buy a treat that feels homemade and made just for them.
              </p>
              <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed font-semibold italic" data-magicpath-id="40" data-magicpath-path="AboutPage.tsx">
                I do it because connection and care matter. And food is one of the most beautiful ways to express both.
              </p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Image Gallery Section */}
      <SortableContainer dndKitId="e1481c96-bd20-4c59-bf45-0dc6b60ced3a" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="gallery-heading" data-magicpath-id="41" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="456be0a0-a45f-4c38-b527-b5aa19f48223" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="42" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="c933ca3b-7e07-43d8-8fed-f394dfa92705" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12 sm:mb-16" data-magicpath-id="43" data-magicpath-path="AboutPage.tsx">
            <h2 id="gallery-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-4" data-magicpath-id="44" data-magicpath-path="AboutPage.tsx">
              A Glimpse Into My Kitchen
            </h2>
          </SortableContainer>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" data-magicpath-id="45" data-magicpath-path="AboutPage.tsx">
            {['https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80', 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=600&q=80', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80', 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80', 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80'].map((image, index) => {
              const altTexts = ['Chef preparing fresh ingredients in a bright kitchen', 'Colorful array of fresh vegetables and plant-based ingredients', 'Beautifully plated vegan dish with artistic presentation', 'Fresh seasonal produce and wholesome cooking ingredients', 'Homemade plant-based baked treats cooling on a rack', 'Fresh cinnamon rolls with glaze, ready to serve'];
              return <SortableContainer dndKitId="6c9e9ed4-63da-4fdc-92c8-df01bca0cbca" containerType="regular" prevTag="motion.div" key={index} initial={{
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
              }} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow" data-magicpath-id="46" data-magicpath-path="AboutPage.tsx">
                <img src={image} alt={altTexts[index]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" data-magicpath-id="47" data-magicpath-path="AboutPage.tsx" />
              </SortableContainer>;
            })}
          </div>
        </SortableContainer>
      </SortableContainer>

      {/* Call to Action */}
      <SortableContainer dndKitId="8525746c-417b-493e-a3ab-064aa922989c" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" aria-labelledby="cta-heading" data-magicpath-id="48" data-magicpath-path="AboutPage.tsx">
        <SortableContainer dndKitId="edd4468e-d0cb-4184-9f24-08c778662b80" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="49" data-magicpath-path="AboutPage.tsx">
          <SortableContainer dndKitId="13cd994a-73f8-4483-abd4-42b6baf9268b" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} data-magicpath-id="50" data-magicpath-path="AboutPage.tsx">
            <h2 id="cta-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-6" data-magicpath-id="51" data-magicpath-path="AboutPage.tsx">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-[#4A4A4A] text-base sm:text-lg md:text-xl mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto" data-magicpath-id="52" data-magicpath-path="AboutPage.tsx">
              Whether it's catering your retreat or baking treats for your week, I'd love to nourish you with food made from the heart.
            </p>
            <SortableContainer dndKitId="b2434feb-2440-44c1-9657-9e5967026156" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4 justify-center" data-magicpath-id="53" data-magicpath-path="AboutPage.tsx">
              <button onClick={() => onNavigate?.('#contact')} className="bg-[#5e7155] text-white px-8 py-4 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-base sm:text-lg" data-magicpath-id="54" data-magicpath-path="AboutPage.tsx">
                Get In Touch
              </button>
              <button onClick={() => onNavigate?.('#offerings')} className="bg-white text-[#5e7155] border-2 border-[#5e7155] px-8 py-4 rounded-full hover:bg-[#5e7155] hover:text-white transition-colors font-medium text-base sm:text-lg" data-magicpath-id="55" data-magicpath-path="AboutPage.tsx">
                See My Services
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
}