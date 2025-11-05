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
    mpid: "d6235b1b-7e01-422d-9406-7f7ee2defcfc"
  }, {
    icon: Leaf,
    title: "Wholesome Ingredients, Thoughtful Sourcing",
    description: "I don't use processed shortcuts or cheap substitutes. Every ingredient is chosen with care. Plant-based doesn't mean fake; it means real, whole foods prepared beautifully.",
    mpid: "3397de9f-8119-48f8-bade-628bb7e17674"
  }, {
    icon: Heart,
    title: "Fully Customizable",
    description: "Your retreat is unique. Your menu should be too. We work together to understand your guests, your values, your vision—and then I create something that feels authentic to your event.",
    mpid: "1bb4668a-d36e-4b93-bc03-9656552789c0"
  }, {
    icon: CheckCircle2,
    title: "Inclusive by Design",
    description: "Plant-based and gluten-free, always. But beyond that, I work with any additional dietary needs—nut allergies, soy sensitivities, raw food preferences. Everyone at your retreat deserves to feel included and cared for.",
    mpid: "1f99a9a0-cb8b-4711-ac2c-906e9275755f"
  }, {
    icon: MapPin,
    title: "Flexible Logistics",
    description: "Whether your retreat is in Cork, Dublin, Galway, or across the UK, we work together on logistics. I'm committed to making this work for your location and timeline.",
    mpid: "e22baa78-40be-4d19-a501-1575be05e562"
  }] as any[];
  const whatICater = [{
    title: "Multi-Day Wellness Retreats",
    description: "Full catering: breakfast, lunch, dinner, snacks, and beverages. Designed to nourish and sustain over the course of your retreat.",
    mpid: "60070a74-86f7-452c-9766-f89dd42c70c9"
  }, {
    title: "Yoga Retreats",
    description: "Light, energizing meals that support your practice and align with your retreat's energy.",
    mpid: "601509ec-3d2d-4f92-b281-408df989beb2"
  }, {
    title: "Creative Retreats",
    description: "Nourishing food designed to fuel creativity and inspiration without weighing you down.",
    mpid: "015f2206-9dd9-40ec-ab23-3da3dfb92814"
  }, {
    title: "Corporate Wellness Events",
    description: "Day events, half-day workshops, or evening gatherings where plant-based food becomes part of your wellness message.",
    mpid: "89a92d90-6178-4760-80e0-db4363f9d20a"
  }, {
    title: "Special Occasion Celebrations",
    description: "Birthdays, anniversaries, ceremonies—with food that feels meaningful and memorable.",
    mpid: "d9d38d81-d9c0-42ba-a681-3da53ad84ea4"
  }] as any[];
  const howItWorks = [{
    step: "1",
    title: "Let's Talk",
    description: "Reach out with your dates, location, guest count, and vision. We schedule a call to discuss your retreat and what you're hoping to create.",
    mpid: "337bcf25-f9da-4213-9da5-6ca49ddefa2f"
  }, {
    step: "2",
    title: "Understand & Explore",
    description: "I ask questions about your guests, your retreat's focus, any dietary preferences, and your values. This is where I really get to know your vision.",
    mpid: "8eb87515-a39e-4bbc-bd3a-3c80d42f9290"
  }, {
    step: "3",
    title: "Design the Menu",
    description: "Based on our conversation, I create 2-3 menu options for you to review. We refine together until it feels perfect.",
    mpid: "3e3c740c-9dd0-4210-9dc4-1bbf11448027"
  }, {
    step: "4",
    title: "Confirm & Prepare",
    description: "Once we've finalized the menu and logistics, I prepare a detailed proposal. We confirm timing, delivery details, and any special setup needs.",
    mpid: "6b86a115-27d9-442e-956c-9acf054b3836"
  }, {
    step: "5",
    title: "Nourish & Delight",
    description: "I handle all the cooking. Your job is to focus on your guests. I'll ensure food is prepared, delivered, and served beautifully.",
    mpid: "846d061d-086a-4191-8090-4d404bf3e101"
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
    mpid: "38336311-872e-405d-84aa-a386ea6005f4"
  }, {
    question: "What's included in catering?",
    answer: "Food preparation and delivery. For some retreats, I can also provide serving, setup, and cleanup. Let's discuss what works best for your needs.",
    mpid: "c954c1f2-7cff-4d0d-8895-8ebdacd88713"
  }, {
    question: "Can you cater large groups?",
    answer: "Yes! I've catered groups of 20+ people. Group size doesn't change my commitment to quality and care—it just means thoughtful planning.",
    mpid: "12895a91-60cb-4ccf-97ff-27f9f5855293"
  }, {
    question: "What if someone has a serious allergy?",
    answer: "Allergies are taken very seriously. I work with you to understand every guest's needs and prepare safely. Communication is key—the more details you share, the better I can serve.",
    mpid: "07059a4d-7930-410a-844a-6b9661514433"
  }, {
    question: "Do you offer tasting sessions?",
    answer: "For larger events, I can often arrange a tasting. Let's discuss what works for your situation.",
    mpid: "bca3b1b6-5114-4211-aa9b-a70090b7b950"
  }, {
    question: "What's your cancellation policy?",
    answer: "I'm flexible and fair. Let's talk about your specific situation if plans change.",
    mpid: "f074df2f-0c25-4285-ac6f-1f030502c833"
  }, {
    question: "Do you provide equipment like tables, chairs, or linens?",
    answer: "Food only—I don't provide equipment rentals. But I can recommend trusted vendors in your area if you need them.",
    mpid: "01e6a61d-af34-4b64-81ed-8da1f2e1253c"
  }, {
    question: "What if weather affects my outdoor retreat?",
    answer: "I'm prepared for this. We'll plan logistics together so that weather doesn't compromise your event.",
    mpid: "9ea6a3c9-1646-4f24-93cc-67406525c47b"
  }] as any[];
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  return <SortableContainer dndKitId="4cdf1c1f-f043-46f2-9e4f-e96ed2e3556d" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="RetreatCateringPage.tsx">
      {/* Hero Section */}
      <SortableContainer dndKitId="6168bbc1-72c6-4c2d-ad5d-9a5b6d322eb3" containerType="regular" prevTag="section" className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden" role="banner" aria-label="Retreat catering services hero section" data-magicpath-id="1" data-magicpath-path="RetreatCateringPage.tsx">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80)',
        filter: 'brightness(0.6)'
      }} data-magicpath-id="2" data-magicpath-path="RetreatCateringPage.tsx" />
        <SortableContainer dndKitId="845b4e9f-cda5-47ac-a71d-ee3e013cf97e" containerType="regular" prevTag="div" className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl" data-magicpath-id="3" data-magicpath-path="RetreatCateringPage.tsx">
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
      <SortableContainer dndKitId="b354272f-ff44-40ee-8ff5-08b4a3af715c" containerType="regular" prevTag="main" data-magicpath-id="7" data-magicpath-path="RetreatCateringPage.tsx">
      <SortableContainer dndKitId="941d2900-ab83-4081-8649-5fd1c3b989f4" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" aria-labelledby="intro-heading" data-magicpath-id="8" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="7ff214d2-9099-44f2-af8f-75d46e768e3c" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="9" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="d72334c3-72d9-4fbf-81a9-7b254e42c238" containerType="regular" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="8c654f27-ca23-48d8-9629-e738390f68f4" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="previous-retreats-heading" data-magicpath-id="14" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="a4c05059-f5da-481a-836e-6fb19fe31bf9" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="15" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="899b960b-dc92-4c21-b286-2510b78a280d" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="b933d246-cae3-44bc-97a4-a0de4ab09884" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" data-magicpath-id="19" data-magicpath-path="RetreatCateringPage.tsx">
            <SortableContainer dndKitId="0c73f367-b007-45c3-9fa5-4c1d83ccdd89" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="1ebc87fc-3f92-4edb-8a20-60146c0b1487" containerType="regular" prevTag="div" className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6" data-magicpath-id="22" data-magicpath-path="RetreatCateringPage.tsx">
                <p className="text-white text-lg font-semibold" data-magicpath-id="23" data-magicpath-path="RetreatCateringPage.tsx">Wicklow Wellness Retreat 2024</p>
                <p className="text-white/80 text-sm" data-magicpath-id="24" data-magicpath-path="RetreatCateringPage.tsx">3-day transformational experience</p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="ac06ad23-e29c-40e8-9234-13970ad1f7b7" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="6927cf81-819e-412b-b07d-7bea01ae5e37" containerType="regular" prevTag="div" className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6" data-magicpath-id="27" data-magicpath-path="RetreatCateringPage.tsx">
                <p className="text-white text-lg font-semibold" data-magicpath-id="28" data-magicpath-path="RetreatCateringPage.tsx">Cork Yoga Retreat 2024</p>
                <p className="text-white/80 text-sm" data-magicpath-id="29" data-magicpath-path="RetreatCateringPage.tsx">5-day mindful nourishment</p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Why Choose Me */}
      <SortableContainer dndKitId="4b99ef61-7a01-4262-a253-61ab0ad4ed49" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" aria-labelledby="why-choose-heading" data-magicpath-id="30" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="a0a45d16-9895-4050-aa55-8227d5fe7fac" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="31" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="50a9fe7a-2968-495f-81b3-cf7c65431297" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="b68804e9-9ea7-40d3-a5d2-d7401cb5dd11" containerType="collection" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" data-magicpath-id="34" data-magicpath-path="RetreatCateringPage.tsx">
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
      <SortableContainer dndKitId="1a9c72aa-83dd-4dad-ba1e-c7afafbacaca" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#5e7155]" aria-labelledby="what-i-cater-heading" data-magicpath-id="41" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="d286968e-b04a-4cc3-ad4e-1809abed7507" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="42" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="332262dd-183c-4909-a082-81597f1c1e90" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="bae3ac08-6f6b-43dc-bf8f-dc2f028f42b6" containerType="collection" prevTag="div" className="space-y-6" data-magicpath-id="45" data-magicpath-path="RetreatCateringPage.tsx">
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
      <SortableContainer dndKitId="e1f3745a-bf72-49ca-8902-14e2db9ec358" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" aria-labelledby="how-it-works-heading" data-magicpath-id="49" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="a2461484-b7fb-49e7-97b9-4e8b05ffb9f6" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="50" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="afaaa10e-fbb4-4a34-adbc-931e08fa6d6e" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="47baaf93-e6c9-4e00-b5eb-bbf29c97d048" containerType="regular" prevTag="div" className="relative" data-magicpath-id="54" data-magicpath-path="RetreatCateringPage.tsx">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-12 top-0 bottom-0 w-0.5 bg-[#5e7155]/30" data-magicpath-id="55" data-magicpath-path="RetreatCateringPage.tsx" />

            <SortableContainer dndKitId="fde3b95b-44b6-4a22-9a14-7a56835994ba" containerType="collection" prevTag="div" className="space-y-8 sm:space-y-12" data-magicpath-id="56" data-magicpath-path="RetreatCateringPage.tsx">
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
      <SortableContainer dndKitId="84172ccf-479c-4925-873d-4e08bc6f2738" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="testimonial-heading" data-magicpath-id="63" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="14378461-c6c8-47cd-ab91-b8cf8bfcd04b" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="64" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="25801157-9a24-4614-a9ac-9b64d2d3ea91" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="3c0fa0fd-04f5-4b77-b770-06cf430ddade" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="744bd8a2-8ea1-4409-bb08-7424068bc7ca" containerType="regular" prevTag="div" className="flex items-center justify-center" data-magicpath-id="69" data-magicpath-path="RetreatCateringPage.tsx">
              <SortableContainer dndKitId="ebc1fa9c-0aff-403c-9e54-d15c56b7b23b" containerType="regular" prevTag="div" className="text-center" data-magicpath-id="70" data-magicpath-path="RetreatCateringPage.tsx">
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
      <SortableContainer dndKitId="09b11e8f-4d7a-4d9b-8800-cc0fbed5b0f0" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" aria-labelledby="sample-menu-heading" data-magicpath-id="73" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="ee833a22-ff32-40dc-8b48-e75b10525292" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="74" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="77146e70-c4ed-4ade-bf1b-9e1dbcd60c2a" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="5471b254-278b-4452-8119-00f07421e2c9" containerType="collection" prevTag="div" className="space-y-8 sm:space-y-10" data-magicpath-id="78" data-magicpath-path="RetreatCateringPage.tsx">
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
      <SortableContainer dndKitId="843ac9e5-e7b7-407e-8085-10bdadc3acce" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="faqs-heading" data-magicpath-id="94" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="de4552e4-bb5f-4aaf-a82b-3afe6448b758" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="95" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="1571334d-9dd4-4e51-8d55-b93b81d6efd0" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="4c901fbe-b89b-4e2f-b5c2-753197ce6bfb" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="98" data-magicpath-path="RetreatCateringPage.tsx">
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

          <SortableContainer dndKitId="e9eaada9-a7e2-4c53-8144-234626113cda" containerType="regular" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="964b3899-d265-4395-8d10-7011d2e0a510" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#5e7155]" aria-labelledby="final-cta-heading" data-magicpath-id="108" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="43f7cbaa-b121-4613-8125-af11202a4946" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="109" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="483ad8f6-f835-4aa9-8ac2-3d40761c18bf" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="66c6b834-d247-4d9e-a6de-209a85d45a08" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4 justify-center" data-magicpath-id="113" data-magicpath-path="RetreatCateringPage.tsx">
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