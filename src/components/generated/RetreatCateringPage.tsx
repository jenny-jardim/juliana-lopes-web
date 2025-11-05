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
    mpid: "835b77f7-e7bf-4625-baf1-96912d06fcc5"
  }, {
    icon: Leaf,
    title: "Wholesome Ingredients, Thoughtful Sourcing",
    description: "I don't use processed shortcuts or cheap substitutes. Every ingredient is chosen with care. Plant-based doesn't mean fake; it means real, whole foods prepared beautifully.",
    mpid: "16a1b8e0-e88c-42da-aff1-36707a1a0d52"
  }, {
    icon: Heart,
    title: "Fully Customizable",
    description: "Your retreat is unique. Your menu should be too. We work together to understand your guests, your values, your vision—and then I create something that feels authentic to your event.",
    mpid: "d1b09a3f-554c-4a0d-b888-6231d97755f5"
  }, {
    icon: CheckCircle2,
    title: "Inclusive by Design",
    description: "Plant-based and gluten-free, always. But beyond that, I work with any additional dietary needs—nut allergies, soy sensitivities, raw food preferences. Everyone at your retreat deserves to feel included and cared for.",
    mpid: "af892a60-84b1-447b-8f3e-81ae8bc932c9"
  }, {
    icon: MapPin,
    title: "Flexible Logistics",
    description: "Whether your retreat is in Cork, Dublin, Galway, or across the UK, we work together on logistics. I'm committed to making this work for your location and timeline.",
    mpid: "a6a1f85d-2451-4c41-b387-66985271b034"
  }] as any[];
  const whatICater = [{
    title: "Multi-Day Wellness Retreats",
    description: "Full catering: breakfast, lunch, dinner, snacks, and beverages. Designed to nourish and sustain over the course of your retreat.",
    mpid: "09297314-8dc8-4509-a335-04e845734f68"
  }, {
    title: "Yoga Retreats",
    description: "Light, energizing meals that support your practice and align with your retreat's energy.",
    mpid: "59c3cb24-8e17-4506-bc44-e36b350fd451"
  }, {
    title: "Creative Retreats",
    description: "Nourishing food designed to fuel creativity and inspiration without weighing you down.",
    mpid: "9ad849af-e0c2-452a-84b5-b059cb6731f9"
  }, {
    title: "Corporate Wellness Events",
    description: "Day events, half-day workshops, or evening gatherings where plant-based food becomes part of your wellness message.",
    mpid: "2a9ef71e-f3f3-4a54-8009-fe87a5ede78e"
  }, {
    title: "Special Occasion Celebrations",
    description: "Birthdays, anniversaries, ceremonies—with food that feels meaningful and memorable.",
    mpid: "baf00c42-cbf9-457a-a119-da1d9f97a9dd"
  }] as any[];
  const howItWorks = [{
    step: "1",
    title: "Let's Talk",
    description: "Reach out with your dates, location, guest count, and vision. We schedule a call to discuss your retreat and what you're hoping to create.",
    mpid: "3fc08052-4719-4b45-bf05-b19c352922c7"
  }, {
    step: "2",
    title: "Understand & Explore",
    description: "I ask questions about your guests, your retreat's focus, any dietary preferences, and your values. This is where I really get to know your vision.",
    mpid: "aca7970b-d0c7-4cf5-a50a-0c7d5bacf138"
  }, {
    step: "3",
    title: "Design the Menu",
    description: "Based on our conversation, I create 2-3 menu options for you to review. We refine together until it feels perfect.",
    mpid: "1cdaad36-ec85-4c1a-86cc-f7104f3f71f3"
  }, {
    step: "4",
    title: "Confirm & Prepare",
    description: "Once we've finalized the menu and logistics, I prepare a detailed proposal. We confirm timing, delivery details, and any special setup needs.",
    mpid: "924ffa21-4b3f-424a-ac38-f7583ca9441c"
  }, {
    step: "5",
    title: "Nourish & Delight",
    description: "I handle all the cooking. Your job is to focus on your guests. I'll ensure food is prepared, delivered, and served beautifully.",
    mpid: "d572b00a-21d1-4031-b134-f6ef7a406fdd"
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
    mpid: "7db8611c-bdfe-4230-b722-00b832782541"
  }, {
    question: "What's included in catering?",
    answer: "Food preparation and delivery. For some retreats, I can also provide serving, setup, and cleanup. Let's discuss what works best for your needs.",
    mpid: "a0bd811e-d2ad-4b92-b16a-c1a4756da6ef"
  }, {
    question: "Can you cater large groups?",
    answer: "Yes! I've catered groups of 20+ people. Group size doesn't change my commitment to quality and care—it just means thoughtful planning.",
    mpid: "6dd06a03-b0df-43f9-be28-b6090686a1c8"
  }, {
    question: "What if someone has a serious allergy?",
    answer: "Allergies are taken very seriously. I work with you to understand every guest's needs and prepare safely. Communication is key—the more details you share, the better I can serve.",
    mpid: "6a97ac9c-c16e-4dc3-9615-c24d4305fe8c"
  }, {
    question: "Do you offer tasting sessions?",
    answer: "For larger events, I can often arrange a tasting. Let's discuss what works for your situation.",
    mpid: "1b097be0-7b15-402f-bafb-77bf4cb9ed87"
  }, {
    question: "What's your cancellation policy?",
    answer: "I'm flexible and fair. Let's talk about your specific situation if plans change.",
    mpid: "3d1f7519-3acf-4d2b-91cd-630c22eb77af"
  }, {
    question: "Do you provide equipment like tables, chairs, or linens?",
    answer: "Food only—I don't provide equipment rentals. But I can recommend trusted vendors in your area if you need them.",
    mpid: "a91bf879-b5f7-42c4-8b1f-0d7747e3ac5d"
  }, {
    question: "What if weather affects my outdoor retreat?",
    answer: "I'm prepared for this. We'll plan logistics together so that weather doesn't compromise your event.",
    mpid: "c04540c5-d29b-4408-b3fe-748bf30317f7"
  }] as any[];
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  return <SortableContainer dndKitId="051cd369-bbd4-43f4-8707-6a532527ca99" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="RetreatCateringPage.tsx">
      {/* Hero Section */}
      <SortableContainer dndKitId="4acfb2e9-7989-422d-9578-d436dfa75bff" containerType="regular" prevTag="section" className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden" data-magicpath-id="1" data-magicpath-path="RetreatCateringPage.tsx">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80)',
        filter: 'brightness(0.6)'
      }} data-magicpath-id="2" data-magicpath-path="RetreatCateringPage.tsx" />
        <SortableContainer dndKitId="065d049a-05a4-45d6-8491-e394571383ea" containerType="regular" prevTag="div" className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl" data-magicpath-id="3" data-magicpath-path="RetreatCateringPage.tsx">
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
      <SortableContainer dndKitId="94b4c492-c5d8-415d-bf81-b660065eaccc" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" data-magicpath-id="7" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="b6b14e51-b2c9-416a-aa84-50a7a7f84a8f" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="8" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="3ca12113-6e6b-4a56-927e-811e531efc53" containerType="regular" prevTag="motion.div" initial={{
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
            <p className="text-[#8B9B7F] text-lg sm:text-xl md:text-2xl font-semibold italic" data-magicpath-id="12" data-magicpath-path="RetreatCateringPage.tsx">
              Your guests don't just eat well; they feel genuinely cared for.
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Previous Retreats Images */}
      <SortableContainer dndKitId="ef519bb8-b46f-4968-abaf-8e2c7626bb98" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" data-magicpath-id="13" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="742e7f2a-c700-4cac-8aa2-77bad8791a42" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="14" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="d66cc8c8-f187-4098-815f-5afb6e914d77" containerType="regular" prevTag="motion.div" initial={{
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
            <p className="text-[#8B9B7F] text-lg sm:text-xl" data-magicpath-id="17" data-magicpath-path="RetreatCateringPage.tsx">
              A glimpse into the transformative experiences I've been part of
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="82ea2c80-0663-41e0-9566-ca22c68dd419" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" data-magicpath-id="18" data-magicpath-path="RetreatCateringPage.tsx">
            <SortableContainer dndKitId="35731d79-8f06-4042-b622-a6acf5131c31" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="2d2dfddb-bcc4-486d-b32c-113b84204649" containerType="regular" prevTag="div" className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6" data-magicpath-id="21" data-magicpath-path="RetreatCateringPage.tsx">
                <p className="text-white text-lg font-semibold" data-magicpath-id="22" data-magicpath-path="RetreatCateringPage.tsx">Wicklow Wellness Retreat 2024</p>
                <p className="text-white/80 text-sm" data-magicpath-id="23" data-magicpath-path="RetreatCateringPage.tsx">3-day transformational experience</p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="024a9497-cd42-4ee3-8757-90296c2767f9" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="56856762-ae37-47a4-bca0-ef8d00bf7028" containerType="regular" prevTag="div" className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6" data-magicpath-id="26" data-magicpath-path="RetreatCateringPage.tsx">
                <p className="text-white text-lg font-semibold" data-magicpath-id="27" data-magicpath-path="RetreatCateringPage.tsx">Cork Yoga Retreat 2024</p>
                <p className="text-white/80 text-sm" data-magicpath-id="28" data-magicpath-path="RetreatCateringPage.tsx">5-day mindful nourishment</p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Why Choose Me */}
      <SortableContainer dndKitId="6fd6086b-46fc-4adf-b5dd-f2411404efa3" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" data-magicpath-id="29" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="98647c34-c69a-40fb-b5a8-24293f6567bc" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="30" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="57a02b1c-0360-4c06-a783-a2ee532fef8e" containerType="regular" prevTag="motion.div" initial={{
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
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#8B9B7F] mb-4" data-magicpath-id="32" data-magicpath-path="RetreatCateringPage.tsx">
              Why Choose Me for Your Retreat
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="34d4b5f3-c689-44a5-882b-414f51d1a336" containerType="collection" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" data-magicpath-id="33" data-magicpath-path="RetreatCateringPage.tsx">
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
                    <div className="bg-[#8B9B7F] text-white p-3 rounded-full flex-shrink-0" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="36" data-magicpath-path="RetreatCateringPage.tsx">
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
      <SortableContainer dndKitId="e64c2cbc-2aa9-489b-a4c2-77d56e1be423" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#8B9B7F]" data-magicpath-id="40" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="487b1149-cdc5-4891-9a7d-8c06228c10b5" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="41" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="2e8845b4-7747-4963-ad7f-36c6f8e65b8e" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="73203988-9c5f-4417-bc26-faf396e0b866" containerType="collection" prevTag="div" className="space-y-6" data-magicpath-id="44" data-magicpath-path="RetreatCateringPage.tsx">
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
      <SortableContainer dndKitId="d6bb166b-e449-4447-8019-028f5f120621" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" data-magicpath-id="48" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="fee5c026-39c4-4ffb-bd38-bfda46454946" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="49" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="5c6ac4a7-2b50-4c52-85bb-61ce33af4e90" containerType="regular" prevTag="motion.div" initial={{
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
            <p className="text-[#8B9B7F] text-lg sm:text-xl" data-magicpath-id="52" data-magicpath-path="RetreatCateringPage.tsx">
              A simple, collaborative process from start to finish
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="c49b44c1-aa53-41ee-89eb-f1d055cf3fdd" containerType="regular" prevTag="div" className="relative" data-magicpath-id="53" data-magicpath-path="RetreatCateringPage.tsx">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-12 top-0 bottom-0 w-0.5 bg-[#8B9B7F]/30" data-magicpath-id="54" data-magicpath-path="RetreatCateringPage.tsx" />

            <SortableContainer dndKitId="706d7521-c786-4f69-af56-fe85ea185027" containerType="collection" prevTag="div" className="space-y-8 sm:space-y-12" data-magicpath-id="55" data-magicpath-path="RetreatCateringPage.tsx">
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
                  <div className="flex-shrink-0 w-24 h-24 bg-[#8B9B7F] rounded-full flex items-center justify-center z-10" data-magicpath-uuid={(step as any)["mpid"] ?? "unsafe"} data-magicpath-id="57" data-magicpath-path="RetreatCateringPage.tsx">
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
      <SortableContainer dndKitId="2921cefb-0db0-4c83-b1ee-67c8e2b515a8" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" data-magicpath-id="62" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="7607cad2-ead8-4116-86ed-7a5702391c56" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="63" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="74042289-a0c1-4ffd-a9be-1f8b17875718" containerType="regular" prevTag="motion.div" initial={{
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
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#8B9B7F] mb-4" data-magicpath-id="65" data-magicpath-path="RetreatCateringPage.tsx">
              Real Retreat Experience
            </h2>
          </SortableContainer>

          <SortableContainer dndKitId="fc23bf81-b1a1-4329-aa33-e6c7dc7350d1" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="3d3305e9-e24e-45e2-b9b5-3e33ff652c51" containerType="regular" prevTag="div" className="flex items-center justify-center" data-magicpath-id="68" data-magicpath-path="RetreatCateringPage.tsx">
              <SortableContainer dndKitId="43156836-257b-4dd0-b570-7a785fc610f7" containerType="regular" prevTag="div" className="text-center" data-magicpath-id="69" data-magicpath-path="RetreatCateringPage.tsx">
                <p className="font-semibold text-[#2D2D2D] text-base sm:text-lg" data-magicpath-id="70" data-magicpath-path="RetreatCateringPage.tsx">
                  Sarah
                </p>
                <p className="text-[#8B9B7F] text-sm sm:text-base" data-magicpath-id="71" data-magicpath-path="RetreatCateringPage.tsx">
                  Yoga Retreat Facilitator, Wicklow
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Sample Menu */}
      <SortableContainer dndKitId="776711b0-8662-441c-8638-4eff273d42e8" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white" data-magicpath-id="72" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="0c0f13e0-2ddc-4d0b-a731-bac018c4a96b" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="73" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="90f08562-bd73-4aa9-ba04-afb8fe64ddd9" containerType="regular" prevTag="motion.div" initial={{
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
            <p className="text-[#8B9B7F] text-lg sm:text-xl" data-magicpath-id="76" data-magicpath-path="RetreatCateringPage.tsx">
              Wellness Retreat Menu (3 Days)
            </p>
          </SortableContainer>

          <SortableContainer dndKitId="4848a970-c045-4f9c-9068-808115428ff3" containerType="collection" prevTag="div" className="space-y-8 sm:space-y-10" data-magicpath-id="77" data-magicpath-path="RetreatCateringPage.tsx">
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
                <h3 className="font-serif text-2xl sm:text-3xl text-[#8B9B7F] mb-6" data-magicpath-id="79" data-magicpath-path="RetreatCateringPage.tsx">
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
      <SortableContainer dndKitId="98a13af3-50ec-4319-8888-4e655f5832e5" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F5F1E8]" data-magicpath-id="93" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="bbfe2aa1-ef96-4f10-8729-6af594fba582" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="94" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="10532071-a414-4bf7-94ae-5087ff4f2ac4" containerType="regular" prevTag="motion.div" initial={{
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

          <SortableContainer dndKitId="f8c8ff18-0c5f-4fac-91c0-e45bf8709171" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="97" data-magicpath-path="RetreatCateringPage.tsx">
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
                  <ChevronDown className={`w-5 h-5 text-[#8B9B7F] transition-transform flex-shrink-0 ${expandedFaq === index ? 'transform rotate-180' : ''}`} data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="101" data-magicpath-path="RetreatCateringPage.tsx" />
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

          <SortableContainer dndKitId="3a306921-ca31-406b-a25a-3fd7da7a4f46" containerType="regular" prevTag="motion.div" initial={{
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
            <button onClick={() => onNavigate?.('#contact')} className="bg-[#8B9B7F] text-white px-8 py-3 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-base" data-magicpath-id="106" data-magicpath-path="RetreatCateringPage.tsx">
              Contact Me
            </button>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Final CTA */}
      <SortableContainer dndKitId="9e0ed9b6-6a2e-4ce3-be42-4442aafbe385" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#8B9B7F]" data-magicpath-id="107" data-magicpath-path="RetreatCateringPage.tsx">
        <SortableContainer dndKitId="8b47288f-1e6d-4885-9c56-647070a8f665" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="108" data-magicpath-path="RetreatCateringPage.tsx">
          <SortableContainer dndKitId="7b1a0394-24bc-4c84-acb1-65e431c5022f" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="94eb89be-2d57-47ba-b967-8d7ade2d510e" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row gap-4 justify-center" data-magicpath-id="112" data-magicpath-path="RetreatCateringPage.tsx">
              <button onClick={() => onNavigate?.('#contact')} className="bg-white text-[#8B9B7F] px-8 py-4 rounded-full hover:bg-[#F5F1E8] transition-colors font-medium text-base sm:text-lg" data-magicpath-id="113" data-magicpath-path="RetreatCateringPage.tsx">
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