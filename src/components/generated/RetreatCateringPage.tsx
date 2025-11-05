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
    mpid: "35b8ff0a-8ba1-4c7a-9694-e448d42905ec"
  }, {
    icon: Leaf,
    title: "Wholesome Ingredients, Thoughtful Sourcing",
    description: "I don't use processed shortcuts or cheap substitutes. Every ingredient is chosen with care. Plant-based doesn't mean fake; it means real, whole foods prepared beautifully.",
    mpid: "f0c9791a-3ce6-49c4-ae10-ee98be7303d4"
  }, {
    icon: Heart,
    title: "Fully Customizable",
    description: "Your retreat is unique. Your menu should be too. We work together to understand your guests, your values, your vision—and then I create something that feels authentic to your event.",
    mpid: "a73e561c-a5f0-4cc9-b33e-cb7f72a6bfdd"
  }, {
    icon: CheckCircle2,
    title: "Inclusive by Design",
    description: "Plant-based and gluten-free, always. But beyond that, I work with any additional dietary needs—nut allergies, soy sensitivities, raw food preferences. Everyone at your retreat deserves to feel included and cared for.",
    mpid: "b35bd54f-396a-4193-bac7-132bfe475670"
  }, {
    icon: MapPin,
    title: "Flexible Logistics",
    description: "Whether your retreat is in Cork, Dublin, Galway, or across the UK, we work together on logistics. I'm committed to making this work for your location and timeline.",
    mpid: "917dcd94-865c-4dea-862b-1a37945a97bd"
  }] as any[];
  const whatICater = [{
    title: "Multi-Day Wellness Retreats",
    description: "Full catering: breakfast, lunch, dinner, snacks, and beverages. Designed to nourish and sustain over the course of your retreat.",
    mpid: "0434c4e2-97d8-4a25-87e8-14766793a089"
  }, {
    title: "Yoga Retreats",
    description: "Light, energizing meals that support your practice and align with your retreat's energy.",
    mpid: "c3b033de-2e39-4c89-a1f6-52dec166ff5a"
  }, {
    title: "Creative Retreats",
    description: "Nourishing food designed to fuel creativity and inspiration without weighing you down.",
    mpid: "91ca04cd-81ea-42a9-af20-ea6ff8d318e7"
  }, {
    title: "Corporate Wellness Events",
    description: "Day events, half-day workshops, or evening gatherings where plant-based food becomes part of your wellness message.",
    mpid: "e6048a59-d8c8-4183-9cc6-3cbcd4a1a132"
  }, {
    title: "Special Occasion Celebrations",
    description: "Birthdays, anniversaries, ceremonies—with food that feels meaningful and memorable.",
    mpid: "a7afb230-1ca8-4dc7-928f-9f2964e07af3"
  }] as any[];
  const howItWorks = [{
    step: "1",
    title: "Let's Talk",
    description: "Reach out with your dates, location, guest count, and vision. We schedule a call to discuss your retreat and what you're hoping to create.",
    mpid: "55d23929-a685-4de6-9b00-795c18efd3d9"
  }, {
    step: "2",
    title: "Understand & Explore",
    description: "I ask questions about your guests, your retreat's focus, any dietary preferences, and your values. This is where I really get to know your vision.",
    mpid: "0b295abd-8c81-4144-af20-c687206c88f6"
  }, {
    step: "3",
    title: "Design the Menu",
    description: "Based on our conversation, I create 2-3 menu options for you to review. We refine together until it feels perfect.",
    mpid: "d29b6899-4eef-4da5-8532-3fad9a6b5922"
  }, {
    step: "4",
    title: "Confirm & Prepare",
    description: "Once we've finalized the menu and logistics, I prepare a detailed proposal. We confirm timing, delivery details, and any special setup needs.",
    mpid: "fdcf50c7-f33c-42f5-b6a0-85c0a2e10b7d"
  }, {
    step: "5",
    title: "Nourish & Delight",
    description: "I handle all the cooking. Your job is to focus on your guests. I'll ensure food is prepared, delivered, and served beautifully.",
    mpid: "404b69df-906e-44bf-ac19-9e9121f42586"
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
    mpid: "bd82df45-8d77-400c-aa50-5d2ca7e3861e"
  }, {
    question: "What's included in catering?",
    answer: "Food preparation and delivery. For some retreats, I can also provide serving, setup, and cleanup. Let's discuss what works best for your needs.",
    mpid: "31a64d80-0f5c-4986-8bf3-b718f1ec861b"
  }, {
    question: "Can you cater large groups?",
    answer: "Yes! I've catered groups of 20+ people. Group size doesn't change my commitment to quality and care—it just means thoughtful planning.",
    mpid: "316e55e0-5e1b-4098-acb5-195baf46bf90"
  }, {
    question: "What if someone has a serious allergy?",
    answer: "Allergies are taken very seriously. I work with you to understand every guest's needs and prepare safely. Communication is key—the more details you share, the better I can serve.",
    mpid: "a78d662e-00dd-489b-895a-1c0bc98090bb"
  }, {
    question: "Do you offer tasting sessions?",
    answer: "For larger events, I can often arrange a tasting. Let's discuss what works for your situation.",
    mpid: "89fc673a-c68c-473b-a7ef-2d96d92415dd"
  }, {
    question: "What's your cancellation policy?",
    answer: "I'm flexible and fair. Let's talk about your specific situation if plans change.",
    mpid: "b6f16ddb-d784-4fdd-9c92-498541c35df3"
  }, {
    question: "Do you provide equipment like tables, chairs, or linens?",
    answer: "Food only—I don't provide equipment rentals. But I can recommend trusted vendors in your area if you need them.",
    mpid: "cd6f58c9-82a7-4c93-8781-0a6a0073d610"
  }, {
    question: "What if weather affects my outdoor retreat?",
    answer: "I'm prepared for this. We'll plan logistics together so that weather doesn't compromise your event.",
    mpid: "ce7822b3-203d-4ac0-a636-67fe39864d37"
  }] as any[];
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  return <SortableContainer dndKitId="78929360-cd16-44d8-b82c-010202bf39ef" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="RetreatCateringPage.tsx">
      {/* Hero Section */}
      <SortableContainer dndKitId="7cdd9df1-2903-48dc-806c-5cb2f45f1470" containerType="regular" prevTag="section" className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden" data-magicpath-id="1" data-magicpath-path="RetreatCateringPage.tsx">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80)',
        filter: 'brightness(0.6)'
      }} data-magicpath-id="2" data-magicpath-path="RetreatCateringPage.tsx" />
        <SortableContainer dndKitId="635e7c4d-5f40-4481-acd7-637988432491" containerType="regular" prevTag="div" className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl" data-magicpath-id="3" data-magicpath-path="RetreatCateringPage.tsx">
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
      <SortableContainer dndKitId="d12bf238-6186-424a-8efe-8cf125c99e6c" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" data-magicpath-id="7" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="1c0e5765-b3a5-4e1b-bfda-cdaddcee533a" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="8" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="625c997f-70cb-4357-90dd-5caa68b9e2af" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} data-magicpath-id="9" data-magicpath-path="RetreatCateringPage.tsx">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-6" data-magicpath-id="10" data-magicpath-path="RetreatCateringPage.tsx">
              That's exactly how I approach every retreat I cater.
            </h2>
            <p className="text-[#4A4A4A] text-base sm:text-lg md:text-xl leading-relaxed mb-6" data-magicpath-id="11" data-magicpath-path="RetreatCateringPage.tsx">
              I create custom menus that feel aligned with your retreat's energy and values. Every dish is made with intention, using wholesome ingredients sourced thoughtfully.
            </p>
            <p className="text-[#5e7155] text-lg sm:text-xl md:text-2xl font-semibold italic" data-magicpath-id="12" data-magicpath-path="RetreatCateringPage.tsx">
              Your guests don't just eat well; they feel genuinely cared for.
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Previous Retreats Images */}
      <SortableContainer dndKitId="fb7cfae8-6a40-442d-8022-9d6c3a93d763" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" data-magicpath-id="13" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="0371d36a-e1ae-46ab-883e-4d0c73e7d568" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="14" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="5842f001-e67b-4b7d-93ee-b412ec3e2f5d" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12" data-magicpath-id="15" data-magicpath-path="RetreatCateringPage.tsx">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-4" data-magicpath-id="16" data-magicpath-path="RetreatCateringPage.tsx">
              Previous Retreats
            </h2>
            <p className="text-[#5e7155] text-lg sm:text-xl" data-magicpath-id="17" data-magicpath-path="RetreatCateringPage.tsx">
              A glimpse into the transformative experiences I've been part of
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="eeb19d3d-2c61-482a-a584-6fe1bb8b8107" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" data-magicpath-id="18" data-magicpath-path="RetreatCateringPage.tsx">
            <SortableContainer dndKitId="d7754655-8c5d-4531-b9b3-97c0b4fd6dd9" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="relative overflow-hidden rounded-lg shadow-lg group" data-magicpath-id="19" data-magicpath-path="RetreatCateringPage.tsx">
              <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80" alt="Wellness retreat group dining" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" data-magicpath-id="20" data-magicpath-path="RetreatCateringPage.tsx" />
              <SortableContainer dndKitId="8632b398-19ca-45cc-886a-4bed5d4aad5c" containerType="regular" prevTag="div" className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6" data-magicpath-id="21" data-magicpath-path="RetreatCateringPage.tsx">
                <p className="text-white text-lg font-semibold" data-magicpath-id="22" data-magicpath-path="RetreatCateringPage.tsx">Wicklow Wellness Retreat 2024</p>
                <p className="text-white/80 text-sm" data-magicpath-id="23" data-magicpath-path="RetreatCateringPage.tsx">3-day transformational experience</p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="0b67546c-0204-4900-9fda-fbb603f27340" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="relative overflow-hidden rounded-lg shadow-lg group" data-magicpath-id="24" data-magicpath-path="RetreatCateringPage.tsx">
              <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80" alt="Yoga retreat outdoor dining" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" data-magicpath-id="25" data-magicpath-path="RetreatCateringPage.tsx" />
              <SortableContainer dndKitId="23d5480b-f84e-4bac-b13f-bc6f73b11d2c" containerType="regular" prevTag="div" className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6" data-magicpath-id="26" data-magicpath-path="RetreatCateringPage.tsx">
                <p className="text-white text-lg font-semibold" data-magicpath-id="27" data-magicpath-path="RetreatCateringPage.tsx">Cork Yoga Retreat 2024</p>
                <p className="text-white/80 text-sm" data-magicpath-id="28" data-magicpath-path="RetreatCateringPage.tsx">5-day mindful nourishment</p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Why Choose Me */}
      <SortableContainer dndKitId="6aff3c24-6939-4391-ba61-df2909fdcb5c" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" data-magicpath-id="29" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="a76b7d81-c7a4-4a23-881b-9244ac1c17b1" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="30" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="e0da4689-c6df-46ce-bd5e-9d1c3a49875a" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12 sm:mb-16" data-magicpath-id="31" data-magicpath-path="RetreatCateringPage.tsx">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5e7155] mb-4" data-magicpath-id="32" data-magicpath-path="RetreatCateringPage.tsx">
              Why Choose Me for Your Retreat
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="11ac9130-8719-4ac0-9a83-cbe6690fa2b0" containerType="collection" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" data-magicpath-id="33" data-magicpath-path="RetreatCateringPage.tsx">
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
            }} className="bg-[#F5F1E8] rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="34" data-magicpath-path="RetreatCateringPage.tsx">
                  <div className="flex items-start gap-4 mb-4" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="35" data-magicpath-path="RetreatCateringPage.tsx">
                    <div className="bg-[#5e7155] text-white p-3 rounded-full flex-shrink-0" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="36" data-magicpath-path="RetreatCateringPage.tsx">
                      <IconComponent className="w-6 h-6" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="37" data-magicpath-path="RetreatCateringPage.tsx" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2D2D2D] mt-1" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="38" data-magicpath-path="RetreatCateringPage.tsx">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="39" data-magicpath-path="RetreatCateringPage.tsx">
                    {item.description}
                  </p>
                </motion.div>;
          })}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* What I Can Cater */}
      <SortableContainer dndKitId="1af1d252-2e44-4df4-b2c3-3a3a0f1676ab" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#5e7155]" data-magicpath-id="40" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="eb26d6b2-57f0-40a0-8e91-669133de8c97" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="41" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="7c932a62-6549-42fc-bbc8-9d996c39965f" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12 sm:mb-16" data-magicpath-id="42" data-magicpath-path="RetreatCateringPage.tsx">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4" data-magicpath-id="43" data-magicpath-path="RetreatCateringPage.tsx">
              What I Can Cater
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="66b0728e-4312-4311-9fdc-b0eb61a67624" containerType="collection" prevTag="div" className="space-y-6" data-magicpath-id="44" data-magicpath-path="RetreatCateringPage.tsx">
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
          }} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 hover:bg-white/20 transition-colors" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="45" data-magicpath-path="RetreatCateringPage.tsx">
                <h3 className="font-serif text-xl sm:text-2xl text-white mb-3" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="46" data-magicpath-path="RetreatCateringPage.tsx">
                  {item.title}
                </h3>
                <p className="text-white/90 leading-relaxed text-sm sm:text-base" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="47" data-magicpath-path="RetreatCateringPage.tsx">
                  {item.description}
                </p>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* How It Works */}
      <SortableContainer dndKitId="3bb36f38-92e6-435f-83d6-c66900345ea5" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" data-magicpath-id="48" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="14b96a15-9b5d-4861-bf9e-76fb44fca325" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="49" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="f00ae2b0-b4c9-44d6-8c7a-a1a310bc987d" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12 sm:mb-16" data-magicpath-id="50" data-magicpath-path="RetreatCateringPage.tsx">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-4" data-magicpath-id="51" data-magicpath-path="RetreatCateringPage.tsx">
              How It Works
            </h2>
            <p className="text-[#5e7155] text-lg sm:text-xl" data-magicpath-id="52" data-magicpath-path="RetreatCateringPage.tsx">
              A simple, collaborative process from start to finish
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="4bcd2108-e86d-4232-bddb-a02cc8f3cfc8" containerType="regular" prevTag="div" className="relative" data-magicpath-id="53" data-magicpath-path="RetreatCateringPage.tsx">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-12 top-0 bottom-0 w-0.5 bg-[#5e7155]/30" data-magicpath-id="54" data-magicpath-path="RetreatCateringPage.tsx" />

            <SortableContainer dndKitId="f1ec23cb-38dc-4bc7-9abc-4994055d3d1b" containerType="collection" prevTag="div" className="space-y-8 sm:space-y-12" data-magicpath-id="55" data-magicpath-path="RetreatCateringPage.tsx">
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
            }} className="relative flex gap-6" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="56" data-magicpath-path="RetreatCateringPage.tsx">
                  <div className="flex-shrink-0 w-24 h-24 bg-[#5e7155] rounded-full flex items-center justify-center z-10" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="57" data-magicpath-path="RetreatCateringPage.tsx">
                    <span className="text-white font-serif text-3xl" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="step:unknown" data-magicpath-id="58" data-magicpath-path="RetreatCateringPage.tsx">{step.step}</span>
                  </div>
                  <div className="flex-1 pt-4" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="59" data-magicpath-path="RetreatCateringPage.tsx">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2D2D2D] mb-3" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="60" data-magicpath-path="RetreatCateringPage.tsx">
                      {step.title}
                    </h3>
                    <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="61" data-magicpath-path="RetreatCateringPage.tsx">
                      {step.description}
                    </p>
                  </div>
                </motion.div>)}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Testimonial */}
      <SortableContainer dndKitId="cef8aad5-ed2d-41eb-bd78-149be30bdaf5" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" data-magicpath-id="62" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="84116e25-ba55-4550-b80c-0e2b2341e795" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="63" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="18e11f61-c52d-4bdb-9f54-3d6d18b45a38" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12" data-magicpath-id="64" data-magicpath-path="RetreatCateringPage.tsx">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5e7155] mb-4" data-magicpath-id="65" data-magicpath-path="RetreatCateringPage.tsx">
              Real Retreat Experience
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="57465137-78bd-4f48-9927-34a33995402d" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="bg-white rounded-lg p-8 sm:p-10 md:p-12 shadow-xl" data-magicpath-id="66" data-magicpath-path="RetreatCateringPage.tsx">
            <p className="text-[#4A4A4A] text-lg sm:text-xl md:text-2xl leading-relaxed mb-6 italic" data-magicpath-id="67" data-magicpath-path="RetreatCateringPage.tsx">
              "Juliana catered our yoga retreat in Wicklow, and it was transformative in ways I didn't expect. The food wasn't just plant-based; it felt like an extension of our retreat's healing mission. My participants felt genuinely nourished. Several of them told me the meals were the most memorable part of their three days with us."
            </p>
            <SortableContainer dndKitId="5065fc72-c809-46c3-a221-c03aca4afe5a" containerType="regular" prevTag="div" className="flex items-center justify-center" data-magicpath-id="68" data-magicpath-path="RetreatCateringPage.tsx">
              <SortableContainer dndKitId="18bf7654-0909-416e-835e-e73d7131ab6b" containerType="regular" prevTag="div" className="text-center" data-magicpath-id="69" data-magicpath-path="RetreatCateringPage.tsx">
                <p className="font-semibold text-[#2D2D2D] text-base sm:text-lg" data-magicpath-id="70" data-magicpath-path="RetreatCateringPage.tsx">
                  Sarah
                </p>
                <p className="text-[#5e7155] text-sm sm:text-base" data-magicpath-id="71" data-magicpath-path="RetreatCateringPage.tsx">
                  Yoga Retreat Facilitator, Wicklow
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Sample Menu */}
      <SortableContainer dndKitId="2d68c086-02b2-401e-b3be-f5fb307e7711" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" data-magicpath-id="72" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="e20de188-5292-4a8a-a147-bed74de36986" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="73" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="c144eacb-68af-4cdf-adc3-ae33205edb53" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12 sm:mb-16" data-magicpath-id="74" data-magicpath-path="RetreatCateringPage.tsx">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-4" data-magicpath-id="75" data-magicpath-path="RetreatCateringPage.tsx">
              Sample Menu
            </h2>
            <p className="text-[#5e7155] text-lg sm:text-xl" data-magicpath-id="76" data-magicpath-path="RetreatCateringPage.tsx">
              Wellness Retreat Menu (3 Days)
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="76e974a8-afe1-466b-a933-d395b4d3485d" containerType="collection" prevTag="div" className="space-y-8 sm:space-y-10" data-magicpath-id="77" data-magicpath-path="RetreatCateringPage.tsx">
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
          }} className="bg-[#F5F1E8] rounded-lg p-6 sm:p-8" data-magicpath-id="78" data-magicpath-path="RetreatCateringPage.tsx">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#5e7155] mb-6" data-magicpath-id="79" data-magicpath-path="RetreatCateringPage.tsx">
                  Day {dayIndex + 1}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-magicpath-id="80" data-magicpath-path="RetreatCateringPage.tsx">
                  <div data-magicpath-id="81" data-magicpath-path="RetreatCateringPage.tsx">
                    <h4 className="font-semibold text-[#2D2D2D] mb-2 text-sm uppercase tracking-wide" data-magicpath-id="82" data-magicpath-path="RetreatCateringPage.tsx">
                      Breakfast
                    </h4>
                    <p className="text-[#4A4A4A] text-sm sm:text-base" data-magicpath-id="83" data-magicpath-path="RetreatCateringPage.tsx">{meals.breakfast}</p>
                  </div>
                  <div data-magicpath-id="84" data-magicpath-path="RetreatCateringPage.tsx">
                    <h4 className="font-semibold text-[#2D2D2D] mb-2 text-sm uppercase tracking-wide" data-magicpath-id="85" data-magicpath-path="RetreatCateringPage.tsx">
                      Lunch
                    </h4>
                    <p className="text-[#4A4A4A] text-sm sm:text-base" data-magicpath-id="86" data-magicpath-path="RetreatCateringPage.tsx">{meals.lunch}</p>
                  </div>
                  <div data-magicpath-id="87" data-magicpath-path="RetreatCateringPage.tsx">
                    <h4 className="font-semibold text-[#2D2D2D] mb-2 text-sm uppercase tracking-wide" data-magicpath-id="88" data-magicpath-path="RetreatCateringPage.tsx">
                      Dinner
                    </h4>
                    <p className="text-[#4A4A4A] text-sm sm:text-base" data-magicpath-id="89" data-magicpath-path="RetreatCateringPage.tsx">{meals.dinner}</p>
                  </div>
                  <div data-magicpath-id="90" data-magicpath-path="RetreatCateringPage.tsx">
                    <h4 className="font-semibold text-[#2D2D2D] mb-2 text-sm uppercase tracking-wide" data-magicpath-id="91" data-magicpath-path="RetreatCateringPage.tsx">
                      Snack
                    </h4>
                    <p className="text-[#4A4A4A] text-sm sm:text-base" data-magicpath-id="92" data-magicpath-path="RetreatCateringPage.tsx">{meals.snack}</p>
                  </div>
                </div>
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs */}
      <SortableContainer dndKitId="c9e3798f-b40e-45a8-a17d-b267853fe808" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" data-magicpath-id="93" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="5936d3df-7f4b-4669-a1a8-9b377b7c7e21" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="94" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="8767d7d7-eab5-4e07-ad3c-79e03a246c39" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12 sm:mb-16" data-magicpath-id="95" data-magicpath-path="RetreatCateringPage.tsx">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-4" data-magicpath-id="96" data-magicpath-path="RetreatCateringPage.tsx">
              Frequently Asked Questions
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="a2dd388a-9f32-4787-8cfe-560c6d61fc1a" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="97" data-magicpath-path="RetreatCateringPage.tsx">
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
          }} className="bg-white rounded-lg shadow-sm overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="98" data-magicpath-path="RetreatCateringPage.tsx">
                <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F5F1E8] transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="99" data-magicpath-path="RetreatCateringPage.tsx">
                  <span className="font-semibold text-[#2D2D2D] pr-4 text-sm sm:text-base" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:unknown" data-magicpath-id="100" data-magicpath-path="RetreatCateringPage.tsx">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#5e7155] transition-transform flex-shrink-0 ${expandedFaq === index ? 'transform rotate-180' : ''}`} data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="101" data-magicpath-path="RetreatCateringPage.tsx" />
                </button>
                {expandedFaq === index && <motion.div data-magicpath-motion-tag="motion.div" initial={{
              height: 0
            }} animate={{
              height: 'auto'
            }} exit={{
              height: 0
            }} transition={{
              duration: 0.3
            }} className="px-6 pb-6" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="102" data-magicpath-path="RetreatCateringPage.tsx">
                    <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:unknown" data-magicpath-id="103" data-magicpath-path="RetreatCateringPage.tsx">
                      {faq.answer}
                    </p>
                  </motion.div>}
              </motion.div>)}
          </SortableContainer>

          <SortableContainer dndKitId="62e56a2c-42eb-4771-addd-789ba06c3573" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mt-12" data-magicpath-id="104" data-magicpath-path="RetreatCateringPage.tsx">
            <p className="text-[#4A4A4A] text-base sm:text-lg mb-6" data-magicpath-id="105" data-magicpath-path="RetreatCateringPage.tsx">
              Have other questions? I'm here to help.
            </p>
            <button onClick={() => onNavigate?.('#contact')} className="bg-[#5e7155] text-white px-8 py-3 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-base" data-magicpath-id="106" data-magicpath-path="RetreatCateringPage.tsx">
              Contact Me
            </button>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Final CTA */}
      <SortableContainer dndKitId="ca3d9777-6f45-4432-bcdb-487bc840cf9c" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#5e7155]" data-magicpath-id="107" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="ef420b49-76db-48dd-8b04-5a3a66fb0383" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="108" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="e65086b9-3c50-4a21-808e-724e1a40892b" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} data-magicpath-id="109" data-magicpath-path="RetreatCateringPage.tsx">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6" data-magicpath-id="110" data-magicpath-path="RetreatCateringPage.tsx">
              Ready to Nourish Your Retreat?
            </h2>
            <p className="text-white/90 text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed" data-magicpath-id="111" data-magicpath-path="RetreatCateringPage.tsx">
              Your guests deserve food that's as thoughtful as your retreat experience.
            </p>
            <SortableContainer dndKitId="546b345a-0633-4fd0-81e3-fa29b20e1328" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4 justify-center" data-magicpath-id="112" data-magicpath-path="RetreatCateringPage.tsx">
              <button onClick={() => onNavigate?.('#contact')} className="bg-white text-[#5e7155] px-8 py-4 rounded-full hover:bg-[#F5F1E8] transition-colors font-medium text-base sm:text-lg" data-magicpath-id="113" data-magicpath-path="RetreatCateringPage.tsx">
                Get in Touch
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors font-medium text-base sm:text-lg" data-magicpath-id="114" data-magicpath-path="RetreatCateringPage.tsx">
                See Sample Menus
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
}