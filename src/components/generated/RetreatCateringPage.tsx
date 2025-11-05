"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Leaf, Calendar, MapPin, CheckCircle2, ChevronDown, Mail, Phone } from 'lucide-react';
export interface RetreatCateringPageProps {
  onNavigate?: (section: string) => void;
  mpid?: string;
}
export default function RetreatCateringPage({
  onNavigate
}: RetreatCateringPageProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const whyChooseMe = [{
    icon: Users,
    title: "I Understand What Retreats Need",
    description: "I've catered retreats and worked as a professional chef. I know that your menu needs to nourish without being heavy, inspire without being complicated, and feel special without being fussy. I understand the rhythm of a retreat day and how food fits into that rhythm.",
    mpid: "05e47699-3fdd-4826-bf83-068e84700be2"
  }, {
    icon: Leaf,
    title: "Wholesome Ingredients, Thoughtful Sourcing",
    description: "I don't use processed shortcuts or cheap substitutes. Every ingredient is chosen with care. Plant-based doesn't mean fake; it means real, whole foods prepared beautifully.",
    mpid: "c1ba3409-7eeb-4fa0-a470-d9c76eb9f02e"
  }, {
    icon: Heart,
    title: "Fully Customizable",
    description: "Your retreat is unique. Your menu should be too. We work together to understand your guests, your values, your vision—and then I create something that feels authentic to your event.",
    mpid: "575c1fad-f0d2-486a-ac2d-eaef3ac472ad"
  }, {
    icon: CheckCircle2,
    title: "Inclusive by Design",
    description: "Plant-based and gluten-free, always. But beyond that, I work with any additional dietary needs—nut allergies, soy sensitivities, raw food preferences. Everyone at your retreat deserves to feel included and cared for.",
    mpid: "7c0dfdae-3a27-452c-af4e-07435ca9ffae"
  }, {
    icon: MapPin,
    title: "Flexible Logistics",
    description: "Whether your retreat is in Cork, Dublin, Galway, or across the UK, we work together on logistics. I'm committed to making this work for your location and timeline.",
    mpid: "d4ab8081-12e1-4073-a5c1-f72ee4c85acf"
  }] as any[];
  const whatICater = [{
    title: "Multi-Day Wellness Retreats",
    description: "Full catering: breakfast, lunch, dinner, snacks, and beverages. Designed to nourish and sustain over the course of your retreat.",
    mpid: "1e68f79c-4156-447e-bc4f-b7d5629d2be3"
  }, {
    title: "Yoga Retreats",
    description: "Light, energizing meals that support your practice and align with your retreat's energy.",
    mpid: "afa69b8c-c662-4dd6-8230-7d40c1548b80"
  }, {
    title: "Creative Retreats",
    description: "Nourishing food designed to fuel creativity and inspiration without weighing you down.",
    mpid: "89a0fe91-637d-4ae3-b266-ae1b580ee307"
  }, {
    title: "Corporate Wellness Events",
    description: "Day events, half-day workshops, or evening gatherings where plant-based food becomes part of your wellness message.",
    mpid: "f7b8849f-18dc-4804-aab4-c4624ae1c756"
  }, {
    title: "Special Occasion Celebrations",
    description: "Birthdays, anniversaries, ceremonies—with food that feels meaningful and memorable.",
    mpid: "740b4cb1-379d-4583-9834-e9dc37a60fdb"
  }] as any[];
  const howItWorks = [{
    step: "1",
    title: "Let's Talk",
    description: "Reach out with your dates, location, guest count, and vision. We schedule a call to discuss your retreat and what you're hoping to create.",
    mpid: "d37fb26c-68d2-47cd-bd8f-78863f1afeac"
  }, {
    step: "2",
    title: "Understand & Explore",
    description: "I ask questions about your guests, your retreat's focus, any dietary preferences, and your values. This is where I really get to know your vision.",
    mpid: "0971db07-d03d-42f7-a318-1880f32e238e"
  }, {
    step: "3",
    title: "Design the Menu",
    description: "Based on our conversation, I create 2-3 menu options for you to review. We refine together until it feels perfect.",
    mpid: "40dbd038-3eef-4fa8-a593-2a5c5d2eb417"
  }, {
    step: "4",
    title: "Confirm & Prepare",
    description: "Once we've finalized the menu and logistics, I prepare a detailed proposal. We confirm timing, delivery details, and any special setup needs.",
    mpid: "6f0d4767-fc90-4a7a-9ca1-b79b2b8abe01"
  }, {
    step: "5",
    title: "Nourish & Delight",
    description: "I handle all the cooking. Your job is to focus on your guests. I'll ensure food is prepared, delivered, and served beautifully.",
    mpid: "feacef2b-74ac-4734-acec-eda59f5baa5d"
  }] as any[];
  const sampleMenu = {
    day1: {
      breakfast: "Overnight oats with berries, chia seeds, and almond butter",
      lunch: "Buddha bowl with quinoa, roasted vegetables, tahini dressing",
      dinner: "Lentil shepherd's pie with roasted root vegetables",
      snack: "Energy balls with dates and nuts (nut-free option available)"
    },
    day2: {
      breakfast: "Smoothie bowls with granola and fresh fruit",
      lunch: "Mediterranean chickpea salad with fresh herbs",
      dinner: "Creamy mushroom risotto with asparagus",
      snack: "Homemade energy bars"
    },
    day3: {
      breakfast: "Avocado toast on sourdough with heirloom tomatoes",
      lunch: "Thai green curry with vegetables and jasmine rice",
      dinner: "Roasted cauliflower steaks with herb sauce and quinoa",
      snack: "Fresh fruit platter with homemade nut butter dips"
    }
  };
  const faqs = [{
    question: "How far in advance should I book?",
    answer: "I recommend 4-6 weeks before your retreat. This gives us time to collaborate on your menu and for me to prepare properly. Shorter timelines sometimes work—reach out and we'll see what's possible.",
    mpid: "974f65c5-829f-491c-b9d0-d816cebbd7dc"
  }, {
    question: "What's included in catering?",
    answer: "Food preparation and delivery. For some retreats, I can also provide serving, setup, and cleanup. Let's discuss what works best for your needs.",
    mpid: "cb7e5c34-809e-4ea9-83df-9cfda2ac2380"
  }, {
    question: "Can you cater large groups?",
    answer: "Yes! I've catered groups of 20+ people. Group size doesn't change my commitment to quality and care—it just means thoughtful planning.",
    mpid: "45b0a342-272b-40c7-a391-aed7f6ec473a"
  }, {
    question: "What if someone has a serious allergy?",
    answer: "Allergies are taken very seriously. I work with you to understand every guest's needs and prepare safely. Communication is key—the more details you share, the better I can serve.",
    mpid: "09d8cc2b-1a1a-459b-8bff-f950917c3cb1"
  }, {
    question: "Do you offer tasting sessions?",
    answer: "For larger events, I can often arrange a tasting. Let's discuss what works for your situation.",
    mpid: "a5413a0c-db0c-4b1a-82eb-4e9e05e35a53"
  }, {
    question: "What's your cancellation policy?",
    answer: "I'm flexible and fair. Let's talk about your specific situation if plans change.",
    mpid: "99ae816a-26b7-46cc-8649-3c7fb33ed4db"
  }, {
    question: "Do you provide equipment like tables, chairs, or linens?",
    answer: "Food only—I don't provide equipment rentals. But I can recommend trusted vendors in your area if you need them.",
    mpid: "64e1d085-aaa9-46fa-a8aa-5308130b600a"
  }, {
    question: "What if weather affects my outdoor retreat?",
    answer: "I'm prepared for this. We'll plan logistics together so that weather doesn't compromise your event.",
    mpid: "b776366e-6f13-4f68-a3c1-ac4d36aa472b"
  }] as any[];
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  return <SortableContainer dndKitId="6d912afd-8ce6-4931-8b7e-35d1a1b27927" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="RetreatCateringPage.tsx">
      {/* Hero Section */}
      <SortableContainer dndKitId="509bff17-4c89-4cc3-a066-557dc4fabc90" containerType="regular" prevTag="section" className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden" role="banner" aria-label="Retreat catering services hero section" data-magicpath-id="1" data-magicpath-path="RetreatCateringPage.tsx">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80)',
        filter: 'brightness(0.6)'
      }} data-magicpath-id="2" data-magicpath-path="RetreatCateringPage.tsx" />
        <SortableContainer dndKitId="b796cdb0-2188-4f41-88a8-1daef64d2ad0" containerType="regular" prevTag="div" className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl" data-magicpath-id="3" data-magicpath-path="RetreatCateringPage.tsx">
          <motion.h1 data-magicpath-motion-tag="motion.h1" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight" data-magicpath-id="4" data-magicpath-path="RetreatCateringPage.tsx">
            Catering Your Retreat with Care
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
        }} className="text-lg sm:text-xl md:text-2xl mb-4 leading-relaxed" data-magicpath-id="5" data-magicpath-path="RetreatCateringPage.tsx">
            For Retreat Organizers, Yoga Teachers & Wellness Professionals
          </motion.p>
          <motion.p data-magicpath-motion-tag="motion.p" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto" data-magicpath-id="6" data-magicpath-path="RetreatCateringPage.tsx">
            You know that food is part of the soul of a retreat experience. It's not a side cost or a checkbox—it's woven into the transformation your guests are seeking.
          </motion.p>
        </SortableContainer>
      </SortableContainer>

      {/* Introduction */}
      <SortableContainer dndKitId="6d0c791a-eb84-468e-ae22-7e9c261a2fcc" containerType="regular" prevTag="main" data-magicpath-id="7" data-magicpath-path="RetreatCateringPage.tsx">
      <SortableContainer dndKitId="867f6835-6320-49b5-80dd-2713fa722e8a" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" aria-labelledby="intro-heading" data-magicpath-id="8" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="e1e0adf1-1689-4422-a548-dc8cd6bc7414" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="9" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="c6eebf4f-a55b-413c-8c53-88e7861ed370" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} data-magicpath-id="10" data-magicpath-path="RetreatCateringPage.tsx">
            <h2 id="intro-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-6" data-magicpath-id="11" data-magicpath-path="RetreatCateringPage.tsx">
              That's exactly how I approach every retreat I cater.
            </h2>
            <p className="text-[#4A4A4A] text-base sm:text-lg md:text-xl leading-relaxed mb-6" data-magicpath-id="12" data-magicpath-path="RetreatCateringPage.tsx">
              I create custom menus that feel aligned with your retreat's energy and values. Every dish is made with intention, using wholesome ingredients sourced thoughtfully.
            </p>
            <p className="text-[#5e7155] text-lg sm:text-xl md:text-2xl font-semibold italic" data-magicpath-id="13" data-magicpath-path="RetreatCateringPage.tsx">
              Your guests don't just eat well; they feel genuinely cared for.
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Previous Retreats Images */}
      <SortableContainer dndKitId="d10fa655-babf-41c1-8f8d-ef36595a10bf" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="previous-retreats-heading" data-magicpath-id="14" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="a09648ee-48ac-467a-bf2b-2eef81081e48" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="15" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="2256bb78-4e8a-4807-8792-1777380f685c" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12" data-magicpath-id="16" data-magicpath-path="RetreatCateringPage.tsx">
            <h2 id="previous-retreats-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-4" data-magicpath-id="17" data-magicpath-path="RetreatCateringPage.tsx">
              Previous Retreats
            </h2>
            <p className="text-[#5e7155] text-lg sm:text-xl" data-magicpath-id="18" data-magicpath-path="RetreatCateringPage.tsx">
              A glimpse into the transformative experiences I've been part of
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="9dd3a080-e941-47c6-bcbf-90506dfdabae" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" data-magicpath-id="19" data-magicpath-path="RetreatCateringPage.tsx">
            <SortableContainer dndKitId="b9a23698-9edd-4398-99ab-a8689a155217" containerType="regular" prevTag="motion.div" initial={{
              opacity: 0,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="relative overflow-hidden rounded-lg shadow-lg group" data-magicpath-id="20" data-magicpath-path="RetreatCateringPage.tsx">
              <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80" alt="Group of retreat participants enjoying a healthy plant-based meal together at a wellness retreat" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" data-magicpath-id="21" data-magicpath-path="RetreatCateringPage.tsx" />
              <SortableContainer dndKitId="81f2b553-aa2a-4f9b-878b-41614c036edf" containerType="regular" prevTag="div" className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6" data-magicpath-id="22" data-magicpath-path="RetreatCateringPage.tsx">
                <p className="text-white text-lg font-semibold" data-magicpath-id="23" data-magicpath-path="RetreatCateringPage.tsx">Wicklow Wellness Retreat 2024</p>
                <p className="text-white/80 text-sm" data-magicpath-id="24" data-magicpath-path="RetreatCateringPage.tsx">3-day transformational experience</p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="ec743101-56d8-4032-895c-005813aee846" containerType="regular" prevTag="motion.div" initial={{
              opacity: 0,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} className="relative overflow-hidden rounded-lg shadow-lg group" data-magicpath-id="25" data-magicpath-path="RetreatCateringPage.tsx">
              <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80" alt="Outdoor yoga retreat setting with nourishing plant-based meals served in natural surroundings" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" data-magicpath-id="26" data-magicpath-path="RetreatCateringPage.tsx" />
              <SortableContainer dndKitId="c4882845-528f-4f12-a027-efbc234d05ef" containerType="regular" prevTag="div" className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6" data-magicpath-id="27" data-magicpath-path="RetreatCateringPage.tsx">
                <p className="text-white text-lg font-semibold" data-magicpath-id="28" data-magicpath-path="RetreatCateringPage.tsx">Cork Yoga Retreat 2024</p>
                <p className="text-white/80 text-sm" data-magicpath-id="29" data-magicpath-path="RetreatCateringPage.tsx">5-day mindful nourishment</p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Why Choose Me */}
      <SortableContainer dndKitId="ae8a6ebe-affb-43cc-901d-c9c5b1e08d70" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" aria-labelledby="why-choose-heading" data-magicpath-id="30" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="ff9b85b6-48de-4806-bdd0-602276b6bb51" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="31" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="92bb564b-a15e-4510-adcd-44d5a56e607b" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12 sm:mb-16" data-magicpath-id="32" data-magicpath-path="RetreatCateringPage.tsx">
            <h2 id="why-choose-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5e7155] mb-4" data-magicpath-id="33" data-magicpath-path="RetreatCateringPage.tsx">
              Why Choose Me for Your Retreat
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="a63b9239-bdc5-489e-91bf-f468518d7b6e" containerType="collection" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" data-magicpath-id="34" data-magicpath-path="RetreatCateringPage.tsx">
            {whyChooseMe.map((item, index) => {
              const IconComponent = item.icon;
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
              }} className="bg-[#F5F1E8] rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="35" data-magicpath-path="RetreatCateringPage.tsx">
                  <div className="flex items-start gap-4 mb-4" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="36" data-magicpath-path="RetreatCateringPage.tsx">
                    <div className="bg-[#5e7155] text-white p-3 rounded-full flex-shrink-0" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="37" data-magicpath-path="RetreatCateringPage.tsx">
                      <IconComponent className="w-6 h-6" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="38" data-magicpath-path="RetreatCateringPage.tsx" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2D2D2D] mt-1" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="39" data-magicpath-path="RetreatCateringPage.tsx">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="40" data-magicpath-path="RetreatCateringPage.tsx">
                    {item.description}
                  </p>
                </motion.div>;
            })}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* What I Can Cater */}
      <SortableContainer dndKitId="c2c5fb0a-35a1-4364-9599-c1c86ec7fb8d" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#5e7155]" aria-labelledby="what-i-cater-heading" data-magicpath-id="41" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="b72d3a41-19cd-49b1-95e7-15fe06a1073c" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="42" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="72be31f2-db25-4800-8927-ec07586554ad" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12 sm:mb-16" data-magicpath-id="43" data-magicpath-path="RetreatCateringPage.tsx">
            <h2 id="what-i-cater-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4" data-magicpath-id="44" data-magicpath-path="RetreatCateringPage.tsx">
              What I Can Cater
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="5d3845b9-7d74-4716-82a2-a468db93f10e" containerType="collection" prevTag="div" className="space-y-6" data-magicpath-id="45" data-magicpath-path="RetreatCateringPage.tsx">
            {whatICater.map((item, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 hover:bg-white/20 transition-colors" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="46" data-magicpath-path="RetreatCateringPage.tsx">
                <h3 className="font-serif text-xl sm:text-2xl text-white mb-3" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="47" data-magicpath-path="RetreatCateringPage.tsx">
                  {item.title}
                </h3>
                <p className="text-white/90 leading-relaxed text-sm sm:text-base" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="48" data-magicpath-path="RetreatCateringPage.tsx">
                  {item.description}
                </p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How It Works */}
      <SortableContainer dndKitId="caa0c0ac-7869-4ec1-be5b-bae614c2afdd" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" aria-labelledby="how-it-works-heading" data-magicpath-id="49" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="c34c4def-777f-43ee-8e12-8bb10a922ec6" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="50" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="7ff11355-a71f-40a3-aeaa-eaec0eb37a54" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12 sm:mb-16" data-magicpath-id="51" data-magicpath-path="RetreatCateringPage.tsx">
            <h2 id="how-it-works-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-4" data-magicpath-id="52" data-magicpath-path="RetreatCateringPage.tsx">
              How It Works
            </h2>
            <p className="text-[#5e7155] text-lg sm:text-xl" data-magicpath-id="53" data-magicpath-path="RetreatCateringPage.tsx">
              A simple, collaborative process from start to finish
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="d0712f80-27de-462c-adaf-d38256f4ad64" containerType="regular" prevTag="div" className="relative" data-magicpath-id="54" data-magicpath-path="RetreatCateringPage.tsx">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-12 top-0 bottom-0 w-0.5 bg-[#5e7155]/30" data-magicpath-id="55" data-magicpath-path="RetreatCateringPage.tsx" />

            <SortableContainer dndKitId="d3ef07c6-532b-4666-a7fd-568bbfd86fd1" containerType="collection" prevTag="div" className="space-y-8 sm:space-y-12" data-magicpath-id="56" data-magicpath-path="RetreatCateringPage.tsx">
              {howItWorks.map((step, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} initial={{
                opacity: 0,
                x: -30
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} className="relative flex gap-6" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="57" data-magicpath-path="RetreatCateringPage.tsx">
                  <div className="flex-shrink-0 w-24 h-24 bg-[#5e7155] rounded-full flex items-center justify-center z-10" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="58" data-magicpath-path="RetreatCateringPage.tsx">
                    <span className="text-white font-serif text-3xl" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="step:unknown" data-magicpath-id="59" data-magicpath-path="RetreatCateringPage.tsx">{step.step}</span>
                  </div>
                  <div className="flex-1 pt-4" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="60" data-magicpath-path="RetreatCateringPage.tsx">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2D2D2D] mb-3" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="61" data-magicpath-path="RetreatCateringPage.tsx">
                      {step.title}
                    </h3>
                    <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="62" data-magicpath-path="RetreatCateringPage.tsx">
                      {step.description}
                    </p>
                  </div>
                </motion.div>)}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Testimonial */}
      <SortableContainer dndKitId="a75340a4-dee6-4754-a660-99985b7ea13e" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="testimonial-heading" data-magicpath-id="63" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="af9f7a90-fb1b-457f-922d-0737a1d8f141" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="64" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="e9bff244-41fa-4f12-910c-9bb198b104ba" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12" data-magicpath-id="65" data-magicpath-path="RetreatCateringPage.tsx">
            <h2 id="testimonial-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5e7155] mb-4" data-magicpath-id="66" data-magicpath-path="RetreatCateringPage.tsx">
              Real Retreat Experience
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="e03b5fed-ce5e-48a5-b086-9c3ab904d7ce" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="bg-white rounded-lg p-8 sm:p-10 md:p-12 shadow-xl" data-magicpath-id="67" data-magicpath-path="RetreatCateringPage.tsx">
            <p className="text-[#4A4A4A] text-lg sm:text-xl md:text-2xl leading-relaxed mb-6 italic" data-magicpath-id="68" data-magicpath-path="RetreatCateringPage.tsx">
              "Juliana catered our yoga retreat in Wicklow, and it was transformative in ways I didn't expect. The food wasn't just plant-based; it felt like an extension of our retreat's healing mission. My participants felt genuinely nourished. Several of them told me the meals were the most memorable part of their three days with us."
            </p>
            <SortableContainer dndKitId="c161f596-54a2-4b1c-bd05-51bffca6a1f3" containerType="regular" prevTag="div" className="flex items-center justify-center" data-magicpath-id="69" data-magicpath-path="RetreatCateringPage.tsx">
              <SortableContainer dndKitId="180dd197-2a3a-4763-9df9-9e49189e2f39" containerType="regular" prevTag="div" className="text-center" data-magicpath-id="70" data-magicpath-path="RetreatCateringPage.tsx">
                <p className="font-semibold text-[#2D2D2D] text-base sm:text-lg" data-magicpath-id="71" data-magicpath-path="RetreatCateringPage.tsx">
                  Sarah
                </p>
                <p className="text-[#5e7155] text-sm sm:text-base" data-magicpath-id="72" data-magicpath-path="RetreatCateringPage.tsx">
                  Yoga Retreat Facilitator, Wicklow
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Sample Menu */}
      <SortableContainer dndKitId="2005bfab-3f38-4e1f-aaae-0e6ff25b19c5" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" aria-labelledby="sample-menu-heading" data-magicpath-id="73" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="eea67f73-c7d8-417d-bea7-5c8c97d84336" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="74" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="8de731db-daca-4945-bbf7-08921adecb3b" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12 sm:mb-16" data-magicpath-id="75" data-magicpath-path="RetreatCateringPage.tsx">
            <h2 id="sample-menu-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-4" data-magicpath-id="76" data-magicpath-path="RetreatCateringPage.tsx">
              Sample Menu
            </h2>
            <p className="text-[#5e7155] text-lg sm:text-xl" data-magicpath-id="77" data-magicpath-path="RetreatCateringPage.tsx">
              Wellness Retreat Menu (3 Days)
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="2375551e-d622-4343-aa31-2a226f2a021c" containerType="collection" prevTag="div" className="space-y-8 sm:space-y-10" data-magicpath-id="78" data-magicpath-path="RetreatCateringPage.tsx">
            {Object.entries(sampleMenu).map(([day, meals], dayIndex) => <motion.div data-magicpath-motion-tag="motion.div" key={day} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: dayIndex * 0.1
            }} className="bg-[#F5F1E8] rounded-lg p-6 sm:p-8" data-magicpath-id="79" data-magicpath-path="RetreatCateringPage.tsx">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#5e7155] mb-6" data-magicpath-id="80" data-magicpath-path="RetreatCateringPage.tsx">
                  Day {dayIndex + 1}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-magicpath-id="81" data-magicpath-path="RetreatCateringPage.tsx">
                  <div data-magicpath-id="82" data-magicpath-path="RetreatCateringPage.tsx">
                    <h4 className="font-semibold text-[#2D2D2D] mb-2 text-sm uppercase tracking-wide" data-magicpath-id="83" data-magicpath-path="RetreatCateringPage.tsx">
                      Breakfast
                    </h4>
                    <p className="text-[#4A4A4A] text-sm sm:text-base" data-magicpath-id="84" data-magicpath-path="RetreatCateringPage.tsx">{meals.breakfast}</p>
                  </div>
                  <div data-magicpath-id="85" data-magicpath-path="RetreatCateringPage.tsx">
                    <h4 className="font-semibold text-[#2D2D2D] mb-2 text-sm uppercase tracking-wide" data-magicpath-id="86" data-magicpath-path="RetreatCateringPage.tsx">
                      Lunch
                    </h4>
                    <p className="text-[#4A4A4A] text-sm sm:text-base" data-magicpath-id="87" data-magicpath-path="RetreatCateringPage.tsx">{meals.lunch}</p>
                  </div>
                  <div data-magicpath-id="88" data-magicpath-path="RetreatCateringPage.tsx">
                    <h4 className="font-semibold text-[#2D2D2D] mb-2 text-sm uppercase tracking-wide" data-magicpath-id="89" data-magicpath-path="RetreatCateringPage.tsx">
                      Dinner
                    </h4>
                    <p className="text-[#4A4A4A] text-sm sm:text-base" data-magicpath-id="90" data-magicpath-path="RetreatCateringPage.tsx">{meals.dinner}</p>
                  </div>
                  <div data-magicpath-id="91" data-magicpath-path="RetreatCateringPage.tsx">
                    <h4 className="font-semibold text-[#2D2D2D] mb-2 text-sm uppercase tracking-wide" data-magicpath-id="92" data-magicpath-path="RetreatCateringPage.tsx">
                      Snack
                    </h4>
                    <p className="text-[#4A4A4A] text-sm sm:text-base" data-magicpath-id="93" data-magicpath-path="RetreatCateringPage.tsx">{meals.snack}</p>
                  </div>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs */}
      <SortableContainer dndKitId="4d588195-419e-4db4-ac8c-fecd42c71ce4" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="faqs-heading" data-magicpath-id="94" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="c72ba8f1-da84-4aa2-8268-a5b82c34accb" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="95" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="91075341-51a9-4328-82d9-2d0feb42efa4" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12 sm:mb-16" data-magicpath-id="96" data-magicpath-path="RetreatCateringPage.tsx">
            <h2 id="faqs-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-4" data-magicpath-id="97" data-magicpath-path="RetreatCateringPage.tsx">
              Frequently Asked Questions
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="b1ee1712-56a0-402e-9eb5-2acfdf37db0c" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="98" data-magicpath-path="RetreatCateringPage.tsx">
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
            }} className="bg-white rounded-lg shadow-sm overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="99" data-magicpath-path="RetreatCateringPage.tsx">
                <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F5F1E8] transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="100" data-magicpath-path="RetreatCateringPage.tsx">
                  <span className="font-semibold text-[#2D2D2D] pr-4 text-sm sm:text-base" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:unknown" data-magicpath-id="101" data-magicpath-path="RetreatCateringPage.tsx">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#5e7155] transition-transform flex-shrink-0 ${expandedFaq === index ? 'transform rotate-180' : ''}`} data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="102" data-magicpath-path="RetreatCateringPage.tsx" />
                </button>
                {expandedFaq === index && <motion.div data-magicpath-motion-tag="motion.div" initial={{
                height: 0
              }} animate={{
                height: 'auto'
              }} exit={{
                height: 0
              }} transition={{
                duration: 0.3
              }} className="px-6 pb-6" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="103" data-magicpath-path="RetreatCateringPage.tsx">
                    <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:unknown" data-magicpath-id="104" data-magicpath-path="RetreatCateringPage.tsx">
                      {faq.answer}
                    </p>
                  </motion.div>}
              </motion.div>)}
          </SortableContainer>

          <SortableContainer dndKitId="97a2af10-2a34-4627-b6cf-1a96ce008d3a" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mt-12" data-magicpath-id="105" data-magicpath-path="RetreatCateringPage.tsx">
            <p className="text-[#4A4A4A] text-base sm:text-lg mb-6" data-magicpath-id="106" data-magicpath-path="RetreatCateringPage.tsx">
              Have other questions? I'm here to help.
            </p>
            <button onClick={() => onNavigate?.('#contact')} className="bg-[#5e7155] text-white px-8 py-3 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-base" data-magicpath-id="107" data-magicpath-path="RetreatCateringPage.tsx">
              Contact Me
            </button>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Final CTA */}
      <SortableContainer dndKitId="5cfe6499-002d-44f4-9dee-1715b26df319" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#5e7155]" aria-labelledby="final-cta-heading" data-magicpath-id="108" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="254fa036-ead6-4bf0-98e4-050187d16c2a" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="109" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="81dbd5ce-7c17-4eec-b5f8-35ade85ffab7" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} data-magicpath-id="110" data-magicpath-path="RetreatCateringPage.tsx">
            <h2 id="final-cta-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6" data-magicpath-id="111" data-magicpath-path="RetreatCateringPage.tsx">
              Ready to Nourish Your Retreat?
            </h2>
            <p className="text-white/90 text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed" data-magicpath-id="112" data-magicpath-path="RetreatCateringPage.tsx">
              Your guests deserve food that's as thoughtful as your retreat experience.
            </p>
            <SortableContainer dndKitId="5d652c2d-0a6e-4c97-aec6-5258f749c6fc" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4 justify-center" data-magicpath-id="113" data-magicpath-path="RetreatCateringPage.tsx">
              <button onClick={() => onNavigate?.('#contact')} className="bg-white text-[#5e7155] px-8 py-4 rounded-full hover:bg-[#F5F1E8] transition-colors font-medium text-base sm:text-lg" data-magicpath-id="114" data-magicpath-path="RetreatCateringPage.tsx">
                Get in Touch
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors font-medium text-base sm:text-lg" data-magicpath-id="115" data-magicpath-path="RetreatCateringPage.tsx">
                See Sample Menus
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
}