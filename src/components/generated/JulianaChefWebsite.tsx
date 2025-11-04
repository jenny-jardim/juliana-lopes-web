import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronDown, Instagram, Facebook, Menu, X } from 'lucide-react';
import AboutPage from './AboutPage';
import RetreatCateringPage from './RetreatCateringPage';
type JulianaChefWebsiteProps = {};
const navigation = [{
  name: 'Home',
  href: '#home',
  mpid: "6f668b73-f22d-4bde-8543-6e2419cd44a5"
}, {
  name: 'About Juliana',
  href: '#about',
  mpid: "53710ce1-997f-4953-8f20-fefdacbef793"
}, {
  name: 'Retreat Catering',
  href: '#offerings',
  mpid: "84073350-f22e-4cb8-9eeb-b9f4d932e576"
}, {
  name: 'Treats & Bakes',
  href: '#treats',
  mpid: "9ca4deb1-6e72-4343-bc64-ad6ce4c3d05d"
}, {
  name: 'Contact',
  href: '#contact',
  mpid: "c15baf49-c192-428a-b13a-2ff574c4aa03"
}] as any[];
const testimonials = [{
  quote: "Juliana transformed our retreat experience. Her plant-based dishes were not only delicious but beautifully presented. Our guests couldn't stop raving about the food!",
  author: 'Sophie Martinez',
  location: 'Retreat Host, Portugal',
  mpid: "6bc80506-ebc8-42ec-83e6-9ce834c82dde"
}, {
  quote: "Working with Chef Juliana was incredible. She brought creativity and passion to every meal, making our wellness retreat truly unforgettable.",
  author: 'Marcus Chen',
  location: 'Wellness Coordinator, Bali',
  mpid: "195fec84-07f6-4c50-ac71-56de0350c883"
}, {
  quote: "The treats Juliana prepared were absolutely divine. Gluten-free, plant-based perfection that even our non-vegan guests adored.",
  author: 'Emma Thompson',
  location: 'Event Planner, UK',
  mpid: "50449f6b-5e79-4d0f-8809-d3f9d1810ec2"
}] as any[];
const faqs = [{
  question: "I'm based in the UK. Can you cater my retreat?",
  answer: "Yes! I cater retreats and events across the world and the UK. Travel costs may apply for certain locations.",
  mpid: "b14ffad8-87de-45cc-b71a-81321470e688"
}, {
  question: "How far ahead should I book your catering service?",
  answer: "I recommend booking at least 2-3 months in advance to ensure availability, especially for retreat seasons.",
  mpid: "2afe3849-0b39-41ce-9552-8dd0a4ebae29"
}, {
  question: "What if my guests have lots of different dietary needs?",
  answer: "I specialize in accommodating various dietary requirements. All my dishes are plant-based and can be adapted for allergies and preferences.",
  mpid: "5ef76bd5-9d87-400a-b544-a27d7c6356f7"
}, {
  question: "How do I know everything is vegan if I can't see it being made?",
  answer: "I provide full transparency with ingredient lists and preparation methods. You're welcome to observe the cooking process.",
  mpid: "600404d0-0f70-4244-9d41-6d067fe23a91"
}, {
  question: "I work a lot and eat out. Are your treats actually healthy?",
  answer: "Yes! My treats use wholesome, natural ingredients without refined sugars. They're designed to nourish while satisfying your sweet tooth.",
  mpid: "080e8b63-980b-4645-a27c-b506a649ffdb"
}] as any[];

// @component: JulianaChefWebsite
export const JulianaChefWebsite = (props: JulianaChefWebsiteProps) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [showRetreatCateringPage, setShowRetreatCateringPage] = useState(false);
  const {
    scrollY
  } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === '#about') {
      setShowAboutPage(true);
      setShowRetreatCateringPage(false);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (href === '#offerings') {
      setShowRetreatCateringPage(true);
      setShowAboutPage(false);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      setShowAboutPage(false);
      setShowRetreatCateringPage(false);
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({
          behavior: 'smooth'
        });
      }, 100);
    }
  };
  const handleAboutNavigate = (section: string) => {
    setShowAboutPage(false);
    setShowRetreatCateringPage(false);
    setTimeout(() => {
      document.querySelector(section)?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  };
  const handleRetreatNavigate = (section: string) => {
    setShowRetreatCateringPage(false);
    setShowAboutPage(false);
    setTimeout(() => {
      document.querySelector(section)?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  };

  // If showing Retreat Catering page, render it with header and footer
  if (showRetreatCateringPage) {
    return <SortableContainer dndKitId="06268ded-6c31-4c1c-821e-db154e49568d" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="0" data-magicpath-path="JulianaChefWebsite.tsx">
        {/* Header */}
        <SortableContainer dndKitId="f5920f0a-e5eb-42af-8016-ad933d7ba70a" containerType="regular" prevTag="motion.header" style={{
        opacity: headerOpacity
      }} className="fixed top-0 left-0 right-0 z-50 bg-[#8B9B7F]/95 backdrop-blur-sm" data-magicpath-id="1" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="533be3ad-72c8-4fbd-a52e-79b1c4286be8" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="2" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="a6fc4f92-7a0e-4f44-a360-da520a26cfc7" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="3" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="9d4f18f8-f372-4941-8bbe-d19628d1b03c" containerType="regular" prevTag="button" onClick={() => {
              setShowRetreatCateringPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home" data-magicpath-id="4" data-magicpath-path="JulianaChefWebsite.tsx">
                <div className="text-white font-serif text-lg sm:text-xl" data-magicpath-id="5" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</div>
                <div className="text-white/80 text-xs sm:text-sm" data-magicpath-id="6" data-magicpath-path="JulianaChefWebsite.tsx">the vegan chef</div>
              </SortableContainer>

              <SortableContainer dndKitId="7223496f-4c99-4acc-a070-d5e3aa7d5703" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" data-magicpath-id="7" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="8" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>

              <SortableContainer dndKitId="361c6954-b590-4396-b29c-2205473aa98c" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="9" data-magicpath-path="JulianaChefWebsite.tsx">
                {mobileMenuOpen ? <X className="w-6 h-6" data-magicpath-id="10" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" data-magicpath-id="11" data-magicpath-path="JulianaChefWebsite.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {mobileMenuOpen && <SortableContainer dndKitId="c9e3a2a6-5199-4a7e-9f5e-05a843db9e16" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-[#8B9B7F] border-t border-white/10" data-magicpath-id="12" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="96d2cccf-62e6-471a-a4b4-5d63b60b448b" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" data-magicpath-id="13" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
              e.preventDefault();
              handleNavClick(item.href);
            }} className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="14" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>
            </SortableContainer>}
        </SortableContainer>

        {/* Retreat Catering Page Content */}
        <SortableContainer dndKitId="a89dd236-7b78-49ad-ad17-a42678b7fd93" containerType="regular" prevTag="div" className="pt-16 sm:pt-20" data-magicpath-id="15" data-magicpath-path="JulianaChefWebsite.tsx">
          <RetreatCateringPage onNavigate={handleRetreatNavigate} data-magicpath-id="16" data-magicpath-path="JulianaChefWebsite.tsx" />
        </SortableContainer>

        {/* Footer */}
        <SortableContainer dndKitId="e3ba34ef-ea35-4ddd-b69d-190c8fcc031e" containerType="regular" prevTag="footer" className="bg-[#8B9B7F] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" data-magicpath-id="17" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="770a889b-21ba-496d-aadb-e42851e4abe0" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="18" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="d648d792-00dd-4363-88a4-13f9be2bd896" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="19" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="1cd61225-e621-4514-91c3-1194e995ade2" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="20" data-magicpath-path="JulianaChefWebsite.tsx">
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" data-magicpath-id="21" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
                <p className="text-white/80 text-xs sm:text-sm" data-magicpath-id="22" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
              </SortableContainer>
              <SortableContainer dndKitId="78536880-d87e-4837-9d9c-6438a0be21c0" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="23" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="24" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
                <SortableContainer dndKitId="c2ded6e4-9aca-4447-9c2f-0dc6b02185cb" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="25" data-magicpath-path="JulianaChefWebsite.tsx">
                  <li data-magicpath-id="26" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#home" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#home');
                  }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="27" data-magicpath-path="JulianaChefWebsite.tsx">
                      Home
                    </a>
                  </li>
                  <li data-magicpath-id="28" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#about" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#about');
                  }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="29" data-magicpath-path="JulianaChefWebsite.tsx">
                      About Juliana
                    </a>
                  </li>
                  <li data-magicpath-id="30" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#offerings" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#offerings');
                  }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="31" data-magicpath-path="JulianaChefWebsite.tsx">
                      Retreat Catering
                    </a>
                  </li>
                  <li data-magicpath-id="32" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#treats" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#treats');
                  }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="33" data-magicpath-path="JulianaChefWebsite.tsx">
                      Treats & Bakes
                    </a>
                  </li>
                  <li data-magicpath-id="34" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#contact" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="35" data-magicpath-path="JulianaChefWebsite.tsx">
                      Contact
                    </a>
                  </li>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="3cf2b163-f6d0-4a2b-90d9-d292fe7aa0c0" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="36" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="37" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
                <SortableContainer dndKitId="d639fbe6-036b-4160-aa08-f02cf198639c" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="38" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="39" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="40" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="41" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="42" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="b92c5eaa-0bfd-4a9c-aee2-406cfff82b64" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="43" data-magicpath-path="JulianaChefWebsite.tsx">
              <p data-magicpath-id="44" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  }

  // If showing About page, render it with header and footer
  if (showAboutPage) {
    return <SortableContainer dndKitId="135e6e67-2fa1-40a0-b16f-63172d8b4226" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="45" data-magicpath-path="JulianaChefWebsite.tsx">
        {/* Header */}
        <SortableContainer dndKitId="99a58ed5-f2f0-4850-86c8-ccdc2a5a6205" containerType="regular" prevTag="motion.header" style={{
        opacity: headerOpacity
      }} className="fixed top-0 left-0 right-0 z-50 bg-[#8B9B7F]/95 backdrop-blur-sm" data-magicpath-id="46" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="dc132750-6978-43fb-a64f-0ba8c46af6d6" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="47" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="fa0d5c6c-59d6-4224-bf9e-9ac78057ee16" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="48" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="e912b868-28e6-4178-a6c4-dbfc83bb80ff" containerType="regular" prevTag="button" onClick={() => {
              setShowAboutPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home" data-magicpath-id="49" data-magicpath-path="JulianaChefWebsite.tsx">
                <div className="text-white font-serif text-lg sm:text-xl" data-magicpath-id="50" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</div>
                <div className="text-white/80 text-xs sm:text-sm" data-magicpath-id="51" data-magicpath-path="JulianaChefWebsite.tsx">the vegan chef</div>
              </SortableContainer>

              <SortableContainer dndKitId="f40e4443-fa4a-4b91-b864-4a1e7bd51042" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" data-magicpath-id="52" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="53" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>

              <SortableContainer dndKitId="cbc9c14f-c65a-4b4c-9039-1fbee3d34d08" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="54" data-magicpath-path="JulianaChefWebsite.tsx">
                {mobileMenuOpen ? <X className="w-6 h-6" data-magicpath-id="55" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" data-magicpath-id="56" data-magicpath-path="JulianaChefWebsite.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {mobileMenuOpen && <SortableContainer dndKitId="51fc1335-0224-4c46-98c3-18139d8785b6" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-[#8B9B7F] border-t border-white/10" data-magicpath-id="57" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="af1aad98-df28-4dda-a001-9f747a4d5d35" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" data-magicpath-id="58" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
              e.preventDefault();
              handleNavClick(item.href);
            }} className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="59" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>
            </SortableContainer>}
        </SortableContainer>

        {/* About Page Content */}
        <SortableContainer dndKitId="cc4a77f5-3d44-4449-a313-4540d36b1ed1" containerType="regular" prevTag="div" className="pt-16 sm:pt-20" data-magicpath-id="60" data-magicpath-path="JulianaChefWebsite.tsx">
          <AboutPage onNavigate={handleAboutNavigate} data-magicpath-id="61" data-magicpath-path="JulianaChefWebsite.tsx" />
        </SortableContainer>

        {/* Footer */}
        <SortableContainer dndKitId="a1bb8f13-0773-45f0-b1df-c9ed7e1a4a3f" containerType="regular" prevTag="footer" className="bg-[#8B9B7F] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" data-magicpath-id="62" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="58c53b2c-9c37-4a09-9d5f-2daaf801110f" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="63" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="bcdfdc32-eb32-42c9-9569-b21c601967ec" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="64" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="af534755-89d0-4ae4-b49d-7e6f65d40ee7" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="65" data-magicpath-path="JulianaChefWebsite.tsx">
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" data-magicpath-id="66" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
                <p className="text-white/80 text-xs sm:text-sm" data-magicpath-id="67" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
              </SortableContainer>
              <SortableContainer dndKitId="baa23f9b-baa7-46fb-bb7a-ed43eac9543b" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="68" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="69" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
                <SortableContainer dndKitId="e27585e7-5423-48c4-b339-b34c194553cc" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="70" data-magicpath-path="JulianaChefWebsite.tsx">
                  <li data-magicpath-id="71" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#home" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#home');
                  }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="72" data-magicpath-path="JulianaChefWebsite.tsx">
                      Home
                    </a>
                  </li>
                  <li data-magicpath-id="73" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#about" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#about');
                  }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="74" data-magicpath-path="JulianaChefWebsite.tsx">
                      About Juliana
                    </a>
                  </li>
                  <li data-magicpath-id="75" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#offerings" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#offerings');
                  }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="76" data-magicpath-path="JulianaChefWebsite.tsx">
                      Retreat Catering
                    </a>
                  </li>
                  <li data-magicpath-id="77" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#treats" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#treats');
                  }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="78" data-magicpath-path="JulianaChefWebsite.tsx">
                      Treats & Bakes
                    </a>
                  </li>
                  <li data-magicpath-id="79" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#contact" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="80" data-magicpath-path="JulianaChefWebsite.tsx">
                      Contact
                    </a>
                  </li>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="421feb21-809a-4e5b-80b1-6dc5b424e982" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="81" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="82" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
                <SortableContainer dndKitId="a087509e-737f-4012-a787-3487e0b99827" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="83" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="84" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="85" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="86" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="87" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="4eec6711-cc83-4853-94a4-9c05198b1bff" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="88" data-magicpath-path="JulianaChefWebsite.tsx">
              <p data-magicpath-id="89" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  }

  // @return
  return <SortableContainer dndKitId="f7ebf7b9-f172-4fb3-bf00-e440b444830d" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="90" data-magicpath-path="JulianaChefWebsite.tsx">
      {/* Mobile-First Header */}
      <SortableContainer dndKitId="d53494f5-03ec-4ec5-9e7e-b4da9b95fc55" containerType="regular" prevTag="motion.header" style={{
      opacity: headerOpacity
    }} className="fixed top-0 left-0 right-0 z-50 bg-[#8B9B7F]/95 backdrop-blur-sm" data-magicpath-id="91" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="b2186569-f37d-4d80-a123-483530874c1f" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="92" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="4be4f696-53c8-49b4-b0a6-1efd21dc7bcb" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="93" data-magicpath-path="JulianaChefWebsite.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="88ac4cb1-b570-4012-9613-a39bdd701d98" containerType="regular" prevTag="button" onClick={() => document.getElementById('home')?.scrollIntoView({
            behavior: 'smooth'
          })} className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home" data-magicpath-id="94" data-magicpath-path="JulianaChefWebsite.tsx">
              <div className="text-white font-serif text-lg sm:text-xl" data-magicpath-id="95" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</div>
              <div className="text-white/80 text-xs sm:text-sm" data-magicpath-id="96" data-magicpath-path="JulianaChefWebsite.tsx">the vegan chef</div>
            </SortableContainer>

            {/* Desktop Navigation */}
            <SortableContainer dndKitId="bbe5fb61-1bd0-4351-885b-70e3a2f7fced" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" data-magicpath-id="97" data-magicpath-path="JulianaChefWebsite.tsx">
              {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
              e.preventDefault();
              handleNavClick(item.href);
            }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="98" data-magicpath-path="JulianaChefWebsite.tsx">
                  {item.name}
                </a>)}
            </SortableContainer>

            {/* Mobile Menu Button */}
            <SortableContainer dndKitId="0bbc6fc4-0faf-4854-82d3-cb1458311268" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="99" data-magicpath-path="JulianaChefWebsite.tsx">
              {mobileMenuOpen ? <X className="w-6 h-6" data-magicpath-id="100" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" data-magicpath-id="101" data-magicpath-path="JulianaChefWebsite.tsx" />}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Mobile Menu */}
        {mobileMenuOpen && <SortableContainer dndKitId="d8f71761-d11d-4c62-81f9-f5ea5aa1b87c" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-[#8B9B7F] border-t border-white/10" data-magicpath-id="102" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="314aa852-36da-4ae5-a865-12f14c0a71d9" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" data-magicpath-id="103" data-magicpath-path="JulianaChefWebsite.tsx">
              {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
            e.preventDefault();
            handleNavClick(item.href);
          }} className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="104" data-magicpath-path="JulianaChefWebsite.tsx">
                  {item.name}
                </a>)}
            </SortableContainer>
          </SortableContainer>}
      </SortableContainer>

      {/* Hero Section - Mobile First */}
      <SortableContainer dndKitId="7f2c437e-bb47-460b-a7ee-9ffe0dcdd164" containerType="regular" prevTag="section" id="home" className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden" data-magicpath-id="105" data-magicpath-path="JulianaChefWebsite.tsx">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80)',
        filter: 'brightness(0.7)'
      }} data-magicpath-id="106" data-magicpath-path="JulianaChefWebsite.tsx" />
        <SortableContainer dndKitId="bcf304d6-7274-40b6-b6c0-2cd315741d50" containerType="regular" prevTag="div" className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl" data-magicpath-id="107" data-magicpath-path="JulianaChefWebsite.tsx">
          <motion.h1 data-magicpath-motion-tag="motion.h1" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 sm:mb-6 leading-tight" data-magicpath-id="108" data-magicpath-path="JulianaChefWebsite.tsx">
            Plant-Based Retreat Chef
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
        }} className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4" data-magicpath-id="109" data-magicpath-path="JulianaChefWebsite.tsx">
            Specializing in Transformational Food Experiences For Wellness Retreats Worldwide
          </motion.p>
          <motion.button data-magicpath-motion-tag="motion.button" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="bg-[#8B9B7F] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-sm sm:text-base" onClick={() => document.getElementById('contact')?.scrollIntoView({
          behavior: 'smooth'
        })} data-magicpath-id="110" data-magicpath-path="JulianaChefWebsite.tsx">
            Book Your Retreat Catering
          </motion.button>
        </SortableContainer>
      </SortableContainer>

      {/* About Section - Mobile First */}
      <SortableContainer dndKitId="222386da-73b1-4a2e-924a-13307d8438ad" containerType="regular" prevTag="section" id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" data-magicpath-id="111" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="71f74fc9-8b0d-4543-90fb-a0d000d0b975" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="112" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#2D2D2D]" data-magicpath-id="113" data-magicpath-path="JulianaChefWebsite.tsx">
            Meet Your Chef
          </h2>
          <SortableContainer dndKitId="dcd20cea-1fb8-46aa-9e64-6ed5b8d9c6eb" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center" data-magicpath-id="114" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="9e2f4b1a-e1e3-47b4-b8c8-a9aa1b06c138" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} data-magicpath-id="115" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=600&q=80" alt="Chef Juliana" className="w-full rounded-lg shadow-lg" data-magicpath-id="116" data-magicpath-path="JulianaChefWebsite.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="dcc6b957-644f-4de3-bf6e-defb995b0deb" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="space-y-4 sm:space-y-6" data-magicpath-id="117" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#8B9B7F]" data-magicpath-id="118" data-magicpath-path="JulianaChefWebsite.tsx">Hi, I'm Juliana!</h3>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-id="119" data-magicpath-path="JulianaChefWebsite.tsx">
                I'm a passionate plant-based chef with over 8 years of culinary experience. I built my business and brand on creating nourishing, delicious plant-based meals for wellness retreats around the world.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-id="120" data-magicpath-path="JulianaChefWebsite.tsx">
                What truly fuels my culinary passion is not just food itself but the transformative power it has to bring people together and foster genuine connections. I believe food has the unique ability to create shared experiences that inspire, heal, and unite us.
              </p>
              <button className="bg-[#8B9B7F] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-sm sm:text-base" onClick={() => setShowAboutPage(true)} data-magicpath-id="121" data-magicpath-path="JulianaChefWebsite.tsx">
                Read My Full Story
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Offerings Section - Mobile First */}
      <SortableContainer dndKitId="5ae11cd0-7f2e-4650-b659-8258cf51167f" containerType="regular" prevTag="section" id="offerings" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" data-magicpath-id="122" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="bc64698c-8fc0-4781-b192-c05c9570c51b" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="123" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#8B9B7F]" data-magicpath-id="124" data-magicpath-path="JulianaChefWebsite.tsx">
            My Offerings
          </h2>

          {/* Retreat Catering */}
          <SortableContainer dndKitId="d5bccfdb-12de-43ae-a1c1-05f7baa3c0c6" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20" data-magicpath-id="125" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="f839c731-47d5-4974-9a26-3e80c9d24e08" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="space-y-4 sm:space-y-6" data-magicpath-id="126" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2D2D]" data-magicpath-id="127" data-magicpath-path="JulianaChefWebsite.tsx">Retreat & Event Catering</h3>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-id="128" data-magicpath-path="JulianaChefWebsite.tsx">
                Custom plant-based menus for retreats, and events across Ireland and the UK.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-id="129" data-magicpath-path="JulianaChefWebsite.tsx">
                Every dish is made with stunning presentation and extraordinary ingredients.
              </p>
              <button className="bg-[#8B9B7F] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-sm sm:text-base" onClick={() => {
              setShowRetreatCateringPage(true);
              setShowAboutPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} data-magicpath-id="130" data-magicpath-path="JulianaChefWebsite.tsx">
                Find Out More
              </button>
            </SortableContainer>
            <SortableContainer dndKitId="81ceb957-ebce-41e1-a0d7-6b549d3c0744" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} data-magicpath-id="131" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80" alt="Gourmet plant-based dish" className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg" data-magicpath-id="132" data-magicpath-path="JulianaChefWebsite.tsx" />
            </SortableContainer>
          </SortableContainer>

          {/* Plant-Based Treats */}
          <SortableContainer dndKitId="0745c368-4b98-4e7d-a561-a4f7ed732889" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12" data-magicpath-id="133" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="7500466d-8cdd-4740-8520-7d7cfe5dbdfb" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="md:order-1" data-magicpath-id="134" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" alt="Plant-based dessert" className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg" data-magicpath-id="135" data-magicpath-path="JulianaChefWebsite.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="249dc824-f2b3-4381-a9a4-01b808182715" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="space-y-4 sm:space-y-6 md:order-2" data-magicpath-id="136" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2D2D]" data-magicpath-id="137" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Treats</h3>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-id="138" data-magicpath-path="JulianaChefWebsite.tsx">
                Fresh-baked, gluten-friendly, plant-based treats made to order just for you.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-id="139" data-magicpath-path="JulianaChefWebsite.tsx">
                Order Weekly Fridays 5am-9am. Collection in Dun Laoghaire or Weekly Pop-up Cake Stall.
              </p>
              <button className="bg-[#C17857] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#B06847] transition-colors font-medium text-sm sm:text-base" data-magicpath-id="140" data-magicpath-path="JulianaChefWebsite.tsx">
                See Treats Menu
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Treats & Bakes Section - Mobile First */}
      <SortableContainer dndKitId="986dd68e-106b-427f-91fb-f319b0d920b9" containerType="regular" prevTag="section" id="treats" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" data-magicpath-id="141" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="38683fb8-f9c5-4bf4-be62-fbf7dff3bc6c" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="142" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#C17857]" data-magicpath-id="143" data-magicpath-path="JulianaChefWebsite.tsx">
            Treats & Bakes
          </h2>

          <SortableContainer dndKitId="de3dd0f8-8049-46ad-bcb7-38e822d74de2" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-16" data-magicpath-id="144" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="ce765349-503c-42f7-b4bf-c62d270ecc4e" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} data-magicpath-id="145" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" alt="Delicious plant-based treats" className="w-full rounded-lg shadow-lg" data-magicpath-id="146" data-magicpath-path="JulianaChefWebsite.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="f810a2a6-3201-49a2-9cc4-a58977e0baf6" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="space-y-4 sm:space-y-6" data-magicpath-id="147" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2D2D]" data-magicpath-id="148" data-magicpath-path="JulianaChefWebsite.tsx">
                Fresh-Baked Weekly Treats
              </h3>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-id="149" data-magicpath-path="JulianaChefWebsite.tsx">
                Indulge in my signature plant-based treats, freshly baked every week. From decadent brownies to fluffy cinnamon rolls, every treat is crafted with wholesome ingredients and lots of love.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-id="150" data-magicpath-path="JulianaChefWebsite.tsx">
                <strong data-magicpath-id="151" data-magicpath-path="JulianaChefWebsite.tsx">Order Window:</strong> Every Friday, 5am-9am<br data-magicpath-id="152" data-magicpath-path="JulianaChefWebsite.tsx" />
                <strong data-magicpath-id="153" data-magicpath-path="JulianaChefWebsite.tsx">Collection:</strong> Dun Laoghaire or Weekly Pop-up Cake Stall
              </p>
              <SortableContainer dndKitId="d617ee7c-5619-428c-8fff-c7a911e97077" containerType="regular" prevTag="div" className="space-y-3" data-magicpath-id="154" data-magicpath-path="JulianaChefWebsite.tsx">
                <SortableContainer dndKitId="474484f8-8d62-43cd-b978-0e6869f25e11" containerType="regular" prevTag="div" className="flex items-start space-x-2" data-magicpath-id="155" data-magicpath-path="JulianaChefWebsite.tsx">
                  <span className="text-[#C17857] text-lg" data-magicpath-id="156" data-magicpath-path="JulianaChefWebsite.tsx">✓</span>
                  <p className="text-[#4A4A4A] text-sm sm:text-base" data-magicpath-id="157" data-magicpath-path="JulianaChefWebsite.tsx">100% Plant-Based</p>
                </SortableContainer>
                <SortableContainer dndKitId="04366532-edb9-4781-92ec-ff461983c3d5" containerType="regular" prevTag="div" className="flex items-start space-x-2" data-magicpath-id="158" data-magicpath-path="JulianaChefWebsite.tsx">
                  <span className="text-[#C17857] text-lg" data-magicpath-id="159" data-magicpath-path="JulianaChefWebsite.tsx">✓</span>
                  <p className="text-[#4A4A4A] text-sm sm:text-base" data-magicpath-id="160" data-magicpath-path="JulianaChefWebsite.tsx">Gluten-Friendly Options</p>
                </SortableContainer>
                <SortableContainer dndKitId="25517b55-8bc5-4132-b0b3-b33caf5ff344" containerType="regular" prevTag="div" className="flex items-start space-x-2" data-magicpath-id="161" data-magicpath-path="JulianaChefWebsite.tsx">
                  <span className="text-[#C17857] text-lg" data-magicpath-id="162" data-magicpath-path="JulianaChefWebsite.tsx">✓</span>
                  <p className="text-[#4A4A4A] text-sm sm:text-base" data-magicpath-id="163" data-magicpath-path="JulianaChefWebsite.tsx">No Refined Sugars</p>
                </SortableContainer>
              </SortableContainer>
              <button className="bg-[#C17857] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#B06847] transition-colors font-medium text-sm sm:text-base" data-magicpath-id="164" data-magicpath-path="JulianaChefWebsite.tsx">
                View This Week's Menu
              </button>
            </SortableContainer>
          </SortableContainer>

          {/* Popular Treats Grid */}
          <SortableContainer dndKitId="b481caeb-06da-4fc9-956a-7aa1c874f2e3" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" data-magicpath-id="165" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="891a6d14-828b-4c28-b691-6914c7da789e" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow" data-magicpath-id="166" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80" alt="Chocolate brownies" className="w-full h-48 object-cover" data-magicpath-id="167" data-magicpath-path="JulianaChefWebsite.tsx" />
              <SortableContainer dndKitId="ae452c97-9a7f-469b-95d7-a02d85253a01" containerType="regular" prevTag="div" className="p-4 sm:p-6" data-magicpath-id="168" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="text-lg font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="169" data-magicpath-path="JulianaChefWebsite.tsx">Fudgy Brownies</h4>
                <p className="text-[#4A4A4A] text-sm" data-magicpath-id="170" data-magicpath-path="JulianaChefWebsite.tsx">
                  Rich, decadent, and impossibly fudgy. Made with premium dark chocolate and a secret ingredient.
                </p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="42e99b16-000a-405e-97e1-97e3e3078c7f" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow" data-magicpath-id="171" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80" alt="Cinnamon rolls" className="w-full h-48 object-cover" data-magicpath-id="172" data-magicpath-path="JulianaChefWebsite.tsx" />
              <SortableContainer dndKitId="04b9d81c-e040-48e3-bfe9-6c34ad6e8827" containerType="regular" prevTag="div" className="p-4 sm:p-6" data-magicpath-id="173" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="text-lg font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="174" data-magicpath-path="JulianaChefWebsite.tsx">Cinnamon Rolls</h4>
                <p className="text-[#4A4A4A] text-sm" data-magicpath-id="175" data-magicpath-path="JulianaChefWebsite.tsx">
                  Soft, pillowy rolls swirled with cinnamon and topped with creamy glaze. Pure comfort in every bite.
                </p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="04cc5778-eec7-4425-aa1b-31a31d6e9e58" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow" data-magicpath-id="176" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80" alt="Cookies" className="w-full h-48 object-cover" data-magicpath-id="177" data-magicpath-path="JulianaChefWebsite.tsx" />
              <SortableContainer dndKitId="9520f961-05c1-4c60-8649-1616bc16f9d8" containerType="regular" prevTag="div" className="p-4 sm:p-6" data-magicpath-id="178" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="text-lg font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="179" data-magicpath-path="JulianaChefWebsite.tsx">Signature Cookies</h4>
                <p className="text-[#4A4A4A] text-sm" data-magicpath-id="180" data-magicpath-path="JulianaChefWebsite.tsx">
                  Crispy edges, chewy centers. From chocolate chip to oatmeal raisin, there's a cookie for everyone.
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Testimonials Section - Mobile First */}
      <SortableContainer dndKitId="e0b48f32-f90f-402c-b2b7-9e75feaf4a5a" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#8B9B7F]" data-magicpath-id="181" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="6e06bff8-0b59-4098-9a01-7d0525f2518a" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="182" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-white" data-magicpath-id="183" data-magicpath-path="JulianaChefWebsite.tsx">
            What People Say
          </h2>
          <SortableContainer dndKitId="69d4cb28-1424-4874-86bc-60895f615e21" containerType="regular" prevTag="div" className="relative" data-magicpath-id="184" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="68534041-b429-4569-a7e0-b84dfc5d59bd" containerType="regular" prevTag="motion.div" key={currentTestimonial} initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: -50
          }} transition={{
            duration: 0.5
          }} className="bg-white rounded-lg p-6 sm:p-8 md:p-12 shadow-xl" data-magicpath-id="185" data-magicpath-path="JulianaChefWebsite.tsx">
              <p className="text-[#4A4A4A] text-base sm:text-lg md:text-xl leading-relaxed mb-6 italic" data-magicpath-id="186" data-magicpath-path="JulianaChefWebsite.tsx">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <SortableContainer dndKitId="94cbfa9d-fab4-4275-8c74-1cb9716f7fb5" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="187" data-magicpath-path="JulianaChefWebsite.tsx">
                <SortableContainer dndKitId="c5217db6-e757-44a4-b429-e4bb8dbd5d84" containerType="regular" prevTag="div" data-magicpath-id="188" data-magicpath-path="JulianaChefWebsite.tsx">
                  <p className="font-semibold text-[#2D2D2D] text-sm sm:text-base" data-magicpath-id="189" data-magicpath-path="JulianaChefWebsite.tsx">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-[#8B9B7F] text-xs sm:text-sm" data-magicpath-id="190" data-magicpath-path="JulianaChefWebsite.tsx">
                    {testimonials[currentTestimonial].location}
                  </p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Navigation Controls */}
            <SortableContainer dndKitId="5fcaf15f-ee55-4e03-9443-ff878c44da10" containerType="regular" prevTag="div" className="flex justify-center items-center mt-6 sm:mt-8 space-x-3 sm:space-x-4" data-magicpath-id="191" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="691d7c37-a5ca-4965-9747-3b60e952a141" containerType="regular" prevTag="button" onClick={prevTestimonial} className="bg-white text-[#8B9B7F] p-2 rounded-full hover:bg-[#F5F1E8] transition-colors" aria-label="Previous testimonial" data-magicpath-id="192" data-magicpath-path="JulianaChefWebsite.tsx">
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="193" data-magicpath-path="JulianaChefWebsite.tsx" />
              </SortableContainer>
              <div className="flex space-x-2" data-magicpath-id="194" data-magicpath-path="JulianaChefWebsite.tsx">
                {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentTestimonial(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentTestimonial ? 'bg-white' : 'bg-white/40'}`} aria-label={`Go to testimonial ${index + 1}`} data-magicpath-id="195" data-magicpath-path="JulianaChefWebsite.tsx" />)}
              </div>
              <SortableContainer dndKitId="5a4cdcb2-52c1-4504-933d-628161d996d4" containerType="regular" prevTag="button" onClick={nextTestimonial} className="bg-white text-[#8B9B7F] p-2 rounded-full hover:bg-[#F5F1E8] transition-colors" aria-label="Next testimonial" data-magicpath-id="196" data-magicpath-path="JulianaChefWebsite.tsx">
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="197" data-magicpath-path="JulianaChefWebsite.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs Section - Mobile First */}
      <SortableContainer dndKitId="70fd0b50-6c46-488b-8246-b86be9f0ff11" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" data-magicpath-id="198" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="39207ab0-1faa-4905-8702-428b3ec4cbce" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="199" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#2D2D2D]" data-magicpath-id="200" data-magicpath-path="JulianaChefWebsite.tsx">
            FAQs
          </h2>
          <SortableContainer dndKitId="9906249b-10b6-4465-8c05-826743edb00b" containerType="collection" prevTag="div" className="space-y-3 sm:space-y-4" data-magicpath-id="201" data-magicpath-path="JulianaChefWebsite.tsx">
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
            delay: index * 0.1
          }} className="bg-white rounded-lg shadow-sm overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="202" data-magicpath-path="JulianaChefWebsite.tsx">
                <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-[#F5F1E8] transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="203" data-magicpath-path="JulianaChefWebsite.tsx">
                  <span className="font-semibold text-[#2D2D2D] pr-4 text-sm sm:text-base" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:unknown" data-magicpath-id="204" data-magicpath-path="JulianaChefWebsite.tsx">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#8B9B7F] transition-transform flex-shrink-0 ${expandedFaq === index ? 'transform rotate-180' : ''}`} data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="205" data-magicpath-path="JulianaChefWebsite.tsx" />
                </button>
                {expandedFaq === index && <motion.div data-magicpath-motion-tag="motion.div" initial={{
              height: 0
            }} animate={{
              height: 'auto'
            }} exit={{
              height: 0
            }} transition={{
              duration: 0.3
            }} className="px-4 sm:px-6 pb-4 sm:pb-6" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="206" data-magicpath-path="JulianaChefWebsite.tsx">
                    <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:unknown" data-magicpath-id="207" data-magicpath-path="JulianaChefWebsite.tsx">{faq.answer}</p>
                  </motion.div>}
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Contact Section - Mobile First */}
      <SortableContainer dndKitId="2e84b6cf-25cf-4943-839c-627a6be9f819" containerType="regular" prevTag="section" id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" data-magicpath-id="208" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="35c1c636-9da0-45d2-bb2f-3619cb36ea69" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="209" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-[#2D2D2D]" data-magicpath-id="210" data-magicpath-path="JulianaChefWebsite.tsx">
            Let's Work Together!
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#8B9B7F] mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4" data-magicpath-id="211" data-magicpath-path="JulianaChefWebsite.tsx">
            Food is how I show care. Let me be part of creating something meaningful for your retreat, event, or simply your week.
          </p>
          <button className="bg-[#8B9B7F] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-base sm:text-lg" data-magicpath-id="212" data-magicpath-path="JulianaChefWebsite.tsx">
            Get In Touch
          </button>
        </SortableContainer>
      </SortableContainer>

      {/* Footer - Mobile First */}
      <SortableContainer dndKitId="b25b7007-73f0-43f0-813f-b66776234013" containerType="regular" prevTag="footer" className="bg-[#8B9B7F] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" data-magicpath-id="213" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="092a4ee2-3841-4afb-a5a8-1b429c35b18c" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="214" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="8829a578-b03d-453b-a2ab-df84e39f0deb" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="215" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="d152b79b-3f18-47be-951d-6cb53153c662" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="216" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" data-magicpath-id="217" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
              <p className="text-white/80 text-xs sm:text-sm" data-magicpath-id="218" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
            </SortableContainer>
            <SortableContainer dndKitId="910a8ab4-a6cd-4d1e-a0b0-6c3afa46df30" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="219" data-magicpath-path="JulianaChefWebsite.tsx">
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="220" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
              <SortableContainer dndKitId="c88deada-182f-4765-bf46-600fcf7eb242" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="221" data-magicpath-path="JulianaChefWebsite.tsx">
                <li data-magicpath-id="222" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#home" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#home');
                }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="223" data-magicpath-path="JulianaChefWebsite.tsx">
                    Home
                  </a>
                </li>
                <li data-magicpath-id="224" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#about" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#about');
                }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="225" data-magicpath-path="JulianaChefWebsite.tsx">
                    About Juliana
                  </a>
                </li>
                <li data-magicpath-id="226" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#offerings" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#offerings');
                }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="227" data-magicpath-path="JulianaChefWebsite.tsx">
                    Retreat Catering
                  </a>
                </li>
                <li data-magicpath-id="228" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#treats" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#treats');
                }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="229" data-magicpath-path="JulianaChefWebsite.tsx">
                    Treats & Bakes
                  </a>
                </li>
                <li data-magicpath-id="230" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#contact" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="231" data-magicpath-path="JulianaChefWebsite.tsx">
                    Contact
                  </a>
                </li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="d38e74e3-dc20-4011-a51f-8b173bf51952" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="232" data-magicpath-path="JulianaChefWebsite.tsx">
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="233" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
              <SortableContainer dndKitId="0251935d-5549-4d55-84a2-1588d06bacb2" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="234" data-magicpath-path="JulianaChefWebsite.tsx">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="235" data-magicpath-path="JulianaChefWebsite.tsx">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="236" data-magicpath-path="JulianaChefWebsite.tsx" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="237" data-magicpath-path="JulianaChefWebsite.tsx">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="238" data-magicpath-path="JulianaChefWebsite.tsx" />
                </a>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="34b8b3f2-cea7-4d89-af8e-fb8d8219a3c3" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="239" data-magicpath-path="JulianaChefWebsite.tsx">
            <p data-magicpath-id="240" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};