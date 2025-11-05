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
    mpid: "093f910b-c0cb-44ad-a410-756b0371a6de"
  }, {
    icon: Leaf,
    title: "Wholesome Ingredients, Thoughtful Sourcing",
    description: "I don't use processed shortcuts or cheap substitutes. Every ingredient is chosen with care. Plant-based doesn't mean fake; it means real, whole foods prepared beautifully.",
    mpid: "2bda048f-512d-46ab-8c9a-a80419ac3a45"
  }, {
    icon: Heart,
    title: "Fully Customizable",
    description: "Your retreat is unique. Your menu should be too. We work together to understand your guests, your values, your vision—and then I create something that feels authentic to your event.",
    mpid: "f4333165-526d-491e-9472-3abcc20213dd"
  }, {
    icon: CheckCircle2,
    title: "Inclusive by Design",
    description: "Plant-based and gluten-free, always. But beyond that, I work with any additional dietary needs—nut allergies, soy sensitivities, raw food preferences. Everyone at your retreat deserves to feel included and cared for.",
    mpid: "dc43105f-7c8c-4538-9769-1c8b4b3012cb"
  }, {
    icon: MapPin,
    title: "Flexible Logistics",
    description: "Whether your retreat is in Cork, Dublin, Galway, or across the UK, we work together on logistics. I'm committed to making this work for your location and timeline.",
    mpid: "ca1bb917-c77e-45c5-98af-3188ddf9a53a"
  }] as any[];
  const whatICater = [{
    title: "Multi-Day Wellness Retreats",
    description: "Full catering: breakfast, lunch, dinner, snacks, and beverages. Designed to nourish and sustain over the course of your retreat.",
    mpid: "b60d7a77-921e-4af5-a80b-8091cc514ab6"
  }, {
    title: "Yoga Retreats",
    description: "Light, energizing meals that support your practice and align with your retreat's energy.",
    mpid: "1fcb0691-2f66-41f1-880c-b2eb904e6ccc"
  }, {
    title: "Creative Retreats",
    description: "Nourishing food designed to fuel creativity and inspiration without weighing you down.",
    mpid: "0bf0e8b7-2500-4d2c-9238-c8c0dea9a22a"
  }, {
    title: "Corporate Wellness Events",
    description: "Day events, half-day workshops, or evening gatherings where plant-based food becomes part of your wellness message.",
    mpid: "8395a11c-0439-4752-83b2-7ce3582304b0"
  }, {
    title: "Special Occasion Celebrations",
    description: "Birthdays, anniversaries, ceremonies—with food that feels meaningful and memorable.",
    mpid: "21850a15-d42e-4f0b-a477-92014e0cd3bc"
  }] as any[];
  const howItWorks = [{
    step: "1",
    title: "Let's Talk",
    description: "Reach out with your dates, location, guest count, and vision. We schedule a call to discuss your retreat and what you're hoping to create.",
    mpid: "5c428452-b51d-4bac-997c-3cebf37f4b46"
  }, {
    step: "2",
    title: "Understand & Explore",
    description: "I ask questions about your guests, your retreat's focus, any dietary preferences, and your values. This is where I really get to know your vision.",
    mpid: "d525c2fd-8003-45f6-ae17-b67ffd806bb9"
  }, {
    step: "3",
    title: "Design the Menu",
    description: "Based on our conversation, I create 2-3 menu options for you to review. We refine together until it feels perfect.",
    mpid: "9d1ba0dc-f8d1-4219-90e3-1ba2be1b7c74"
  }, {
    step: "4",
    title: "Confirm & Prepare",
    description: "Once we've finalized the menu and logistics, I prepare a detailed proposal. We confirm timing, delivery details, and any special setup needs.",
    mpid: "35d21c72-57af-4dc3-a888-55e16f94622b"
  }, {
    step: "5",
    title: "Nourish & Delight",
    description: "I handle all the cooking. Your job is to focus on your guests. I'll ensure food is prepared, delivered, and served beautifully.",
    mpid: "1ef8cdf3-2841-4112-8617-a186ab5c2880"
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
    mpid: "dee2aec3-effe-48e6-95e9-62b66b93115f"
  }, {
    question: "What's included in catering?",
    answer: "Food preparation and delivery. For some retreats, I can also provide serving, setup, and cleanup. Let's discuss what works best for your needs.",
    mpid: "649eb311-b68d-4a39-9a56-c118fdab3c9a"
  }, {
    question: "Can you cater large groups?",
    answer: "Yes! I've catered groups of 20+ people. Group size doesn't change my commitment to quality and care—it just means thoughtful planning.",
    mpid: "27cb86b2-4a88-4e9e-94e8-4d1bd8efbc10"
  }, {
    question: "What if someone has a serious allergy?",
    answer: "Allergies are taken very seriously. I work with you to understand every guest's needs and prepare safely. Communication is key—the more details you share, the better I can serve.",
    mpid: "905caca4-037a-46b3-a87c-5975f812834e"
  }, {
    question: "Do you offer tasting sessions?",
    answer: "For larger events, I can often arrange a tasting. Let's discuss what works for your situation.",
    mpid: "d5b8b70a-c1b5-4f0d-b63c-2e0dc2d99256"
  }, {
    question: "What's your cancellation policy?",
    answer: "I'm flexible and fair. Let's talk about your specific situation if plans change.",
    mpid: "367f9fda-a4a7-4034-9fd8-028b1c97cd96"
  }, {
    question: "Do you provide equipment like tables, chairs, or linens?",
    answer: "Food only—I don't provide equipment rentals. But I can recommend trusted vendors in your area if you need them.",
    mpid: "33b221f1-5a68-44fa-b7ef-699efbbb6b47"
  }, {
    question: "What if weather affects my outdoor retreat?",
    answer: "I'm prepared for this. We'll plan logistics together so that weather doesn't compromise your event.",
    mpid: "30510f9e-2c1f-4bd6-b407-9b322e4fdcfc"
  }] as any[];
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  return <SortableContainer dndKitId="1c1c811c-c990-444a-9776-1a83d2f8527f" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="RetreatCateringPage.tsx">
      {/* Hero Section */}
      <SortableContainer dndKitId="b4cfbf72-1af0-41a8-be94-179aaa1bcc66" containerType="regular" prevTag="section" className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden" role="banner" aria-label="Retreat catering services hero section" data-magicpath-id="1" data-magicpath-path="RetreatCateringPage.tsx">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80)',
        filter: 'brightness(0.6)'
      }} data-magicpath-id="2" data-magicpath-path="RetreatCateringPage.tsx" />
        <SortableContainer dndKitId="654dfc3d-7723-4020-b5b6-9e329e6aad54" containerType="regular" prevTag="div" className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl" data-magicpath-id="3" data-magicpath-path="RetreatCateringPage.tsx">
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
      <SortableContainer dndKitId="35adb800-0a3c-467c-a9e4-bdde5039ecab" containerType="regular" prevTag="main" data-magicpath-id="7" data-magicpath-path="RetreatCateringPage.tsx">
      <SortableContainer dndKitId="8f1f93d0-3dc9-40b9-85d3-73f0303d3c2e" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" aria-labelledby="intro-heading" data-magicpath-id="8" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="d57de2e2-a74a-458d-8905-0e5cc767c3a8" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="9" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="0af35265-5144-4ec5-b05d-fc1c2258fc3d" containerType="regular" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="d524e1be-01bd-45f5-8eae-11d7d44aff21" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="previous-retreats-heading" data-magicpath-id="14" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="a788a735-33ad-41e4-b748-d870c59100c8" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="15" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="167fd0e6-ae82-44db-9a8d-f78d733cab42" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="7701a404-4241-4851-945d-033dc271b87e" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" data-magicpath-id="19" data-magicpath-path="RetreatCateringPage.tsx">
            <SortableContainer dndKitId="3d4dc581-d615-40cf-8e95-fd98a0d63aea" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="368c07d1-de0a-4306-ae14-c75e4cc02387" containerType="regular" prevTag="div" className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6" data-magicpath-id="22" data-magicpath-path="RetreatCateringPage.tsx">
                <p className="text-white text-lg font-semibold" data-magicpath-id="23" data-magicpath-path="RetreatCateringPage.tsx">Wicklow Wellness Retreat 2024</p>
                <p className="text-white/80 text-sm" data-magicpath-id="24" data-magicpath-path="RetreatCateringPage.tsx">3-day transformational experience</p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="7aa6e421-24b3-4c3e-ad95-3955d427e190" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="e0832450-e220-4ea5-b1c9-694c77294d6e" containerType="regular" prevTag="div" className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6" data-magicpath-id="27" data-magicpath-path="RetreatCateringPage.tsx">
                <p className="text-white text-lg font-semibold" data-magicpath-id="28" data-magicpath-path="RetreatCateringPage.tsx">Cork Yoga Retreat 2024</p>
                <p className="text-white/80 text-sm" data-magicpath-id="29" data-magicpath-path="RetreatCateringPage.tsx">5-day mindful nourishment</p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Why Choose Me */}
      <SortableContainer dndKitId="011b3b96-941b-4381-96a9-463edec3eb97" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" aria-labelledby="why-choose-heading" data-magicpath-id="30" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="8d50d777-0a49-4ca6-9792-a56574390238" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="31" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="dd064721-83a0-4c90-8814-163244029263" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="d652d76a-bd7b-47a3-bcd9-d3f2f2d561ed" containerType="collection" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" data-magicpath-id="34" data-magicpath-path="RetreatCateringPage.tsx">
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
      <SortableContainer dndKitId="3b8eed92-8337-49fd-990a-0e6ced80c1b7" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#5e7155]" aria-labelledby="what-i-cater-heading" data-magicpath-id="41" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="04a654cc-c137-48e5-bf0f-87cc09e66ec6" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="42" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="92197ed3-fe9b-42d3-b110-8b58529a37ed" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="53dd9ebe-b698-4f9c-b215-472f3bed44ca" containerType="collection" prevTag="div" className="space-y-6" data-magicpath-id="45" data-magicpath-path="RetreatCateringPage.tsx">
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
      <SortableContainer dndKitId="901b4b6d-a39e-4dae-b313-c00012b9179f" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" aria-labelledby="how-it-works-heading" data-magicpath-id="49" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="5778a3f6-5298-4d4d-af23-bf4fe9a7f792" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="50" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="bce213a7-5e42-48a8-a1b3-cfcdbd45f92d" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="f996de9e-1b59-4414-a36c-090e4c7a52ad" containerType="regular" prevTag="div" className="relative" data-magicpath-id="54" data-magicpath-path="RetreatCateringPage.tsx">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-12 top-0 bottom-0 w-0.5 bg-[#5e7155]/30" data-magicpath-id="55" data-magicpath-path="RetreatCateringPage.tsx" />

            <SortableContainer dndKitId="0424cbfb-5855-4424-8a2d-09a94767dda5" containerType="collection" prevTag="div" className="space-y-8 sm:space-y-12" data-magicpath-id="56" data-magicpath-path="RetreatCateringPage.tsx">
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
      <SortableContainer dndKitId="0d121202-524f-4753-9f9c-8d44ef22bb42" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="testimonial-heading" data-magicpath-id="63" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="580677f9-4a5c-49d9-9993-e9e900f77d60" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="64" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="1e38ea9c-a987-44e7-9468-d201f6caa6e8" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="358c600c-4fd8-49f1-b56a-1d1a47af9b84" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="beac35a0-ecbe-4d55-b86b-84d50facce6c" containerType="regular" prevTag="div" className="flex items-center justify-center" data-magicpath-id="69" data-magicpath-path="RetreatCateringPage.tsx">
              <SortableContainer dndKitId="8f5b519b-6040-4e7b-a998-9ddf49f1b52c" containerType="regular" prevTag="div" className="text-center" data-magicpath-id="70" data-magicpath-path="RetreatCateringPage.tsx">
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
      <SortableContainer dndKitId="63ff1c39-c1c0-4811-a410-202f3ba1cbcc" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" aria-labelledby="sample-menu-heading" data-magicpath-id="73" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="c99855b4-8bee-4e05-a650-9e5f6b129a27" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="74" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="9059515a-fae7-4582-853e-79004316cf0c" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="1bd820b0-3cfc-46de-aeef-1fa3b123b217" containerType="collection" prevTag="div" className="space-y-8 sm:space-y-10" data-magicpath-id="78" data-magicpath-path="RetreatCateringPage.tsx">
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
      <SortableContainer dndKitId="f11fabca-8b19-496c-aca6-4e62cebec27b" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="faqs-heading" data-magicpath-id="94" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="4eb0a7d6-38c4-4cc7-a174-352199c6b066" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="95" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="8f881d7f-ec89-47f1-9a97-b3b2d73edf08" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="93b3c0f0-7d53-4877-9de7-bf7c1b083d1b" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="98" data-magicpath-path="RetreatCateringPage.tsx">
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

          <SortableContainer dndKitId="e23c8331-8aca-4b24-848e-516961497a17" containerType="regular" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="b410474c-d75b-4681-9552-130ee332c7ce" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#5e7155]" aria-labelledby="final-cta-heading" data-magicpath-id="108" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="59bc5be5-977f-4ba7-992f-8ac4fe632b31" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="109" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="00fb397c-91c7-4cb3-b3a4-36b5c7ede7c5" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="b7613e43-42f7-4a79-85ab-046da28fd2d7" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4 justify-center" data-magicpath-id="113" data-magicpath-path="RetreatCateringPage.tsx">
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