import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronDown, Instagram, Facebook, Menu, X } from 'lucide-react';
import AboutPage from './AboutPage';
import RetreatCateringPage from './RetreatCateringPage';
import TreatsBakesPage from './TreatsBakesPage';
import ContactPage from './ContactPage';
type JulianaChefWebsiteProps = {};
const navigation = [{
  name: 'About Juliana',
  href: '#about',
  mpid: "f8b35ce9-2721-405e-9d4a-ad25cab712bd"
}, {
  name: 'Retreat Catering',
  href: '#offerings',
  mpid: "b8ffab99-f8c9-4ad0-a078-5f0cd65679a8"
}, {
  name: 'Treats & Bakes',
  href: '#treats',
  mpid: "4ee53db7-35b0-412b-bdda-d794aa3a7c25"
}, {
  name: 'Contact',
  href: '#contact',
  mpid: "8740800e-dfaa-4322-9455-159fd17c8deb"
}] as any[];
const testimonials = [{
  quote: "Juliana transformed our retreat experience. Her plant-based dishes were not only delicious but beautifully presented. Our guests couldn't stop raving about the food!",
  author: 'Sophie Martinez',
  location: 'Retreat Host, Portugal',
  mpid: "ec360a3f-adfa-4a94-8a79-c385fac4a953"
}, {
  quote: "Working with Chef Juliana was incredible. She brought creativity and passion to every meal, making our wellness retreat truly unforgettable.",
  author: 'Marcus Chen',
  location: 'Wellness Coordinator, Bali',
  mpid: "1e10bd0c-1945-4bba-91f9-7d08c214122b"
}, {
  quote: "The treats Juliana prepared were absolutely divine. Gluten-free, plant-based perfection that even our non-vegan guests adored.",
  author: 'Emma Thompson',
  location: 'Event Planner, UK',
  mpid: "e97abda2-dd86-4ad3-8e0e-1732cc2f972c"
}] as any[];
const faqs = [{
  question: "I'm based in the UK. Can you cater my retreat?",
  answer: "Yes! I cater retreats and events across the world and the UK. Travel costs may apply for certain locations.",
  mpid: "4bf5d655-af3e-471d-90e6-d46c05246664"
}, {
  question: "How far ahead should I book your catering service?",
  answer: "I recommend booking at least 2-3 months in advance to ensure availability, especially for retreat seasons.",
  mpid: "a141a7af-997e-4d18-82b0-7d3d30cf30b1"
}, {
  question: "What if my guests have lots of different dietary needs?",
  answer: "I specialize in accommodating various dietary requirements. All my dishes are plant-based and can be adapted for allergies and preferences.",
  mpid: "f7ec955e-272a-4aa8-b6cd-c82adced79ff"
}, {
  question: "How do I know everything is vegan if I can't see it being made?",
  answer: "I provide full transparency with ingredient lists and preparation methods. You're welcome to observe the cooking process.",
  mpid: "3c034655-1e6e-4e6f-aa20-0e3f061fff0b"
}, {
  question: "I work a lot and eat out. Are your treats actually healthy?",
  answer: "Yes! My treats use wholesome, natural ingredients without refined sugars. They're designed to nourish while satisfying your sweet tooth.",
  mpid: "091a986b-75c2-42f8-b941-6e0917147008"
}] as any[];

// @component: JulianaChefWebsite
export const JulianaChefWebsite = (props: JulianaChefWebsiteProps) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [showRetreatCateringPage, setShowRetreatCateringPage] = useState(false);
  const [showTreatsBakesPage, setShowTreatsBakesPage] = useState(false);
  const [showContactPage, setShowContactPage] = useState(false);
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
      setShowTreatsBakesPage(false);
      setShowContactPage(false);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (href === '#offerings') {
      setShowRetreatCateringPage(true);
      setShowAboutPage(false);
      setShowTreatsBakesPage(false);
      setShowContactPage(false);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (href === '#treats') {
      setShowTreatsBakesPage(true);
      setShowAboutPage(false);
      setShowRetreatCateringPage(false);
      setShowContactPage(false);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (href === '#contact') {
      setShowContactPage(true);
      setShowAboutPage(false);
      setShowRetreatCateringPage(false);
      setShowTreatsBakesPage(false);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      setShowAboutPage(false);
      setShowRetreatCateringPage(false);
      setShowTreatsBakesPage(false);
      setShowContactPage(false);
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
    setShowTreatsBakesPage(false);
    setShowContactPage(false);
    setTimeout(() => {
      document.querySelector(section)?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  };
  const handleRetreatNavigate = (section: string) => {
    setShowRetreatCateringPage(false);
    setShowAboutPage(false);
    setShowTreatsBakesPage(false);
    setShowContactPage(false);
    setTimeout(() => {
      document.querySelector(section)?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  };
  const handleTreatsNavigate = (section: string) => {
    setShowTreatsBakesPage(false);
    setShowAboutPage(false);
    setShowRetreatCateringPage(false);
    setShowContactPage(false);
    setTimeout(() => {
      document.querySelector(section)?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  };
  const handleContactNavigate = (section: string) => {
    setShowContactPage(false);
    setShowAboutPage(false);
    setShowRetreatCateringPage(false);
    setShowTreatsBakesPage(false);
    setTimeout(() => {
      document.querySelector(section)?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  };

  // If showing Contact page, render it with header and footer
  if (showContactPage) {
    return <SortableContainer dndKitId="18152f51-a174-4630-a247-324a711aa9c0" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="0" data-magicpath-path="JulianaChefWebsite.tsx">
        {/* Header */}
        <SortableContainer dndKitId="59d4a32b-cc74-44bd-97d0-6d83c39c928b" containerType="regular" prevTag="motion.header" style={{
        opacity: headerOpacity
      }} className="fixed top-0 left-0 right-0 z-50 bg-[#5e7155]/95 backdrop-blur-sm" role="banner" data-magicpath-id="1" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="0a1ef869-c90f-4c2e-9cf7-f350919374f4" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="2" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="e896cf70-c271-42f6-9147-1f6887eaf95d" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="3" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="a088dcf8-c279-4488-83a2-81f8178ea0da" containerType="regular" prevTag="button" onClick={() => {
              setShowContactPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="flex items-center hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home" data-magicpath-id="4" data-magicpath-path="JulianaChefWebsite.tsx">
                <img src="https://storage.googleapis.com/magicpoint-public-assets/user/300600264317087744/assets/0d9d49d2-8c2e-4b14-b09a-5b31e903e01f.png" alt="Juliana Lopes - The Vegan Chef" className="h-12 sm:h-14 w-auto object-contain" data-magicpath-id="5" data-magicpath-path="JulianaChefWebsite.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="f33ac8ee-bf88-4b64-80f4-627da170663b" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation" data-magicpath-id="6" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" style={{
                color: "#fcf2e3"
              }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="7" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>

              <SortableContainer dndKitId="20ff6e08-7edd-46bf-8610-afb646d8e113" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="8" data-magicpath-path="JulianaChefWebsite.tsx">
                {mobileMenuOpen ? <X className="w-6 h-6" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="9" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="10" data-magicpath-path="JulianaChefWebsite.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {mobileMenuOpen && <SortableContainer dndKitId="1b1ff720-13eb-470b-ab4f-d2fd92aca304" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-[#5e7155] border-t border-white/10" data-magicpath-id="11" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="5cc5cee3-534c-4094-b88a-b92e5dd27967" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" role="navigation" aria-label="Mobile navigation" data-magicpath-id="12" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
              e.preventDefault();
              handleNavClick(item.href);
            }} className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium" style={{
              color: "#fcf2e3"
            }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="13" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>
            </SortableContainer>}
        </SortableContainer>

        {/* Contact Page Content */}
        <SortableContainer dndKitId="11bea2da-c835-4373-84bb-57d5708ecd14" containerType="regular" prevTag="div" className="pt-16 sm:pt-20" data-magicpath-id="14" data-magicpath-path="JulianaChefWebsite.tsx">
          <ContactPage onNavigate={handleContactNavigate} data-magicpath-id="15" data-magicpath-path="JulianaChefWebsite.tsx" />
        </SortableContainer>

        {/* Footer */}
        <SortableContainer dndKitId="2e97c94d-959b-4230-971a-5b6b39147f86" containerType="regular" prevTag="footer" className="bg-[#5e7155] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" role="contentinfo" data-magicpath-id="16" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="e6b94cc1-5602-46a7-a777-38079e08c621" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="17" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="a808def2-ac6d-4b6b-bfb2-db4fb2ed537f" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="18" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="d678d6f9-ec39-4d1c-a11c-213fe7f0ce86" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="19" data-magicpath-path="JulianaChefWebsite.tsx">
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="20" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
                <p className="text-white/80 text-xs sm:text-sm" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="21" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
              </SortableContainer>
              <SortableContainer dndKitId="72a93122-3271-43d7-b647-c819d9eafaeb" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="22" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="23" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
                <SortableContainer dndKitId="1f90d728-e9d6-4674-b313-e6c1a4e3d507" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="24" data-magicpath-path="JulianaChefWebsite.tsx">
                  <li data-magicpath-id="25" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#home" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#home');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="26" data-magicpath-path="JulianaChefWebsite.tsx">
                      Home
                    </a>
                  </li>
                  <li data-magicpath-id="27" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#about" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#about');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="28" data-magicpath-path="JulianaChefWebsite.tsx">
                      About Juliana
                    </a>
                  </li>
                  <li data-magicpath-id="29" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#offerings" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#offerings');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="30" data-magicpath-path="JulianaChefWebsite.tsx">
                      Retreat Catering
                    </a>
                  </li>
                  <li data-magicpath-id="31" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#treats" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#treats');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="32" data-magicpath-path="JulianaChefWebsite.tsx">
                      Treats & Bakes
                    </a>
                  </li>
                  <li data-magicpath-id="33" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#contact" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="34" data-magicpath-path="JulianaChefWebsite.tsx">
                      Contact
                    </a>
                  </li>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="d9b5e624-2617-4dae-841f-c5d26061262b" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="35" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="36" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
                <SortableContainer dndKitId="cc342dc1-ade6-4cab-be98-d08cd330503d" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="37" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="38" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="39" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="40" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="41" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="3f165dfe-07a8-4ed9-bfea-d48a62356b9f" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="42" data-magicpath-path="JulianaChefWebsite.tsx">
              <p style={{
              color: "#fcf2e3"
            }} data-magicpath-id="43" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  }

  // If showing Treats & Bakes page, render it with header and footer
  if (showTreatsBakesPage) {
    return <SortableContainer dndKitId="8cdb9e2d-bf5a-4f57-be32-35b13d0a9517" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="44" data-magicpath-path="JulianaChefWebsite.tsx">
        {/* Header */}
        <SortableContainer dndKitId="f9ca2405-b839-43fe-afaf-f283d434633f" containerType="regular" prevTag="motion.header" style={{
        opacity: headerOpacity
      }} className="fixed top-0 left-0 right-0 z-50 bg-[#5e7155]/95 backdrop-blur-sm" role="banner" data-magicpath-id="45" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="b3095c0b-7e8a-4877-869d-2ecd73f63ee0" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="46" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="dddd64d3-d6fc-471d-8b70-b74c1fc3b9dc" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="47" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="f4369daa-31e9-477b-a05e-1c51f4a9db43" containerType="regular" prevTag="button" onClick={() => {
              setShowTreatsBakesPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="flex items-center hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home" data-magicpath-id="48" data-magicpath-path="JulianaChefWebsite.tsx">
                <img src="https://storage.googleapis.com/magicpoint-public-assets/user/300600264317087744/assets/0d9d49d2-8c2e-4b14-b09a-5b31e903e01f.png" alt="Juliana Lopes - The Vegan Chef" className="h-12 sm:h-14 w-auto object-contain" data-magicpath-id="49" data-magicpath-path="JulianaChefWebsite.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="5d42b152-18d2-4218-82bb-6678b2c575e6" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation" data-magicpath-id="50" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" style={{
                color: "#fcf2e3"
              }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="51" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>

              <SortableContainer dndKitId="0592ff7e-334b-4ac8-90de-ddaa07048408" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="52" data-magicpath-path="JulianaChefWebsite.tsx">
                {mobileMenuOpen ? <X className="w-6 h-6" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="53" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="54" data-magicpath-path="JulianaChefWebsite.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {mobileMenuOpen && <SortableContainer dndKitId="ad444eb9-6f67-4be6-b7d3-f9d73a00339d" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-[#5e7155] border-t border-white/10" data-magicpath-id="55" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="986bf1c3-3903-44ac-bd35-5e371ae26a59" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" role="navigation" aria-label="Mobile navigation" data-magicpath-id="56" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
              e.preventDefault();
              handleNavClick(item.href);
            }} className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium" style={{
              color: "#fcf2e3"
            }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="57" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>
            </SortableContainer>}
        </SortableContainer>

        {/* Treats & Bakes Page Content */}
        <SortableContainer dndKitId="542bc1aa-a59d-43a7-982a-cef4fa3b6696" containerType="regular" prevTag="div" className="pt-16 sm:pt-20" data-magicpath-id="58" data-magicpath-path="JulianaChefWebsite.tsx">
          <TreatsBakesPage onNavigate={handleTreatsNavigate} data-magicpath-id="59" data-magicpath-path="JulianaChefWebsite.tsx" />
        </SortableContainer>

        {/* Footer */}
        <SortableContainer dndKitId="fe0d20c8-9d72-4e05-b174-848264bb4f9b" containerType="regular" prevTag="footer" className="bg-[#5e7155] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" role="contentinfo" data-magicpath-id="60" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="07e0d5ad-acd7-4e8a-affe-6f85d09035c9" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="61" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="30e1ff40-5e97-43b4-9028-ee1aed9a8e09" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="62" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="13af36f5-3002-4623-a63e-58e9b4e669d5" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="63" data-magicpath-path="JulianaChefWebsite.tsx">
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="64" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
                <p className="text-white/80 text-xs sm:text-sm" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="65" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
              </SortableContainer>
              <SortableContainer dndKitId="e31f1af6-492b-4ab7-8e69-3b71ac1e8dea" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="66" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="67" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
                <SortableContainer dndKitId="7a3221ea-0588-4079-9878-3bbb267be017" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="68" data-magicpath-path="JulianaChefWebsite.tsx">
                  <li data-magicpath-id="69" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#home" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#home');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="70" data-magicpath-path="JulianaChefWebsite.tsx">
                      Home
                    </a>
                  </li>
                  <li data-magicpath-id="71" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#about" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#about');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="72" data-magicpath-path="JulianaChefWebsite.tsx">
                      About Juliana
                    </a>
                  </li>
                  <li data-magicpath-id="73" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#offerings" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#offerings');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="74" data-magicpath-path="JulianaChefWebsite.tsx">
                      Retreat Catering
                    </a>
                  </li>
                  <li data-magicpath-id="75" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#treats" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#treats');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="76" data-magicpath-path="JulianaChefWebsite.tsx">
                      Treats & Bakes
                    </a>
                  </li>
                  <li data-magicpath-id="77" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#contact" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="78" data-magicpath-path="JulianaChefWebsite.tsx">
                      Contact
                    </a>
                  </li>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="5a9b74ac-33c3-48be-88d1-c9c6885f7f9f" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="79" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="80" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
                <SortableContainer dndKitId="3b0d1126-1385-4799-85d7-00f83ef09906" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="81" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="82" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="83" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="84" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="85" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="3932d320-aa00-403c-a322-c74af35ec8c8" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="86" data-magicpath-path="JulianaChefWebsite.tsx">
              <p style={{
              color: "#fcf2e3"
            }} data-magicpath-id="87" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  }

  // If showing Retreat Catering page, render it with header and footer
  if (showRetreatCateringPage) {
    return <SortableContainer dndKitId="ac2efb21-65f4-4882-bed6-e0bc02f82b36" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="88" data-magicpath-path="JulianaChefWebsite.tsx">
        {/* Header */}
        <SortableContainer dndKitId="04927334-c720-4b89-8ab7-b5b2afbe8306" containerType="regular" prevTag="motion.header" style={{
        opacity: headerOpacity
      }} className="fixed top-0 left-0 right-0 z-50 bg-[#5e7155]/95 backdrop-blur-sm" role="banner" data-magicpath-id="89" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="3124b4db-92ff-40ee-b842-1481e123d4e7" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="90" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="879bd355-3433-4b6a-8eb3-0a240d4f2fc6" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="91" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="5edc5744-8426-4ff1-b462-8389e5a7de70" containerType="regular" prevTag="button" onClick={() => {
              setShowRetreatCateringPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="flex items-center hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home" data-magicpath-id="92" data-magicpath-path="JulianaChefWebsite.tsx">
                <img src="https://storage.googleapis.com/magicpoint-public-assets/user/300600264317087744/assets/0d9d49d2-8c2e-4b14-b09a-5b31e903e01f.png" alt="Juliana Lopes - The Vegan Chef" className="h-12 sm:h-14 w-auto object-contain" data-magicpath-id="93" data-magicpath-path="JulianaChefWebsite.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="c185e9bd-4025-4bde-a29c-76f744d5e7a7" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation" data-magicpath-id="94" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" style={{
                color: "#fcf2e3"
              }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="95" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>

              <SortableContainer dndKitId="1ebd4290-b8a1-4e73-b392-c3d6d6d427e5" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="96" data-magicpath-path="JulianaChefWebsite.tsx">
                {mobileMenuOpen ? <X className="w-6 h-6" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="97" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="98" data-magicpath-path="JulianaChefWebsite.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {mobileMenuOpen && <SortableContainer dndKitId="1fb40fb7-7df7-491b-b1eb-984a6f5413da" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-[#5e7155] border-t border-white/10" data-magicpath-id="99" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="244e0a93-a7cb-445c-b375-b8e6b9c04106" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" role="navigation" aria-label="Mobile navigation" data-magicpath-id="100" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
              e.preventDefault();
              handleNavClick(item.href);
            }} className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium" style={{
              color: "#fcf2e3"
            }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="101" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>
            </SortableContainer>}
        </SortableContainer>

        {/* Retreat Catering Page Content */}
        <SortableContainer dndKitId="2809bc08-05c6-4827-bbfc-72a7353833c5" containerType="regular" prevTag="div" className="pt-16 sm:pt-20" data-magicpath-id="102" data-magicpath-path="JulianaChefWebsite.tsx">
          <RetreatCateringPage onNavigate={handleRetreatNavigate} data-magicpath-id="103" data-magicpath-path="JulianaChefWebsite.tsx" />
        </SortableContainer>

        {/* Footer */}
        <SortableContainer dndKitId="8aadc729-07a3-4b9c-be42-cdb99fc5aa01" containerType="regular" prevTag="footer" className="bg-[#5e7155] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" role="contentinfo" data-magicpath-id="104" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="5229f9a6-5447-467e-b850-e6d41aa91fcc" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="105" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="ea8081b0-cbf9-4a99-900d-369fef61373a" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="106" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="6d48e4da-6845-4f2b-8245-78cdc630540a" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="107" data-magicpath-path="JulianaChefWebsite.tsx">
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="108" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
                <p className="text-white/80 text-xs sm:text-sm" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="109" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
              </SortableContainer>
              <SortableContainer dndKitId="f784b4e9-c4ca-45d7-abb0-fe8f0296b5c6" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="110" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="111" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
                <SortableContainer dndKitId="6209d72b-30f1-4e43-826b-bc351d09ed13" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="112" data-magicpath-path="JulianaChefWebsite.tsx">
                  <li data-magicpath-id="113" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#home" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#home');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="114" data-magicpath-path="JulianaChefWebsite.tsx">
                      Home
                    </a>
                  </li>
                  <li data-magicpath-id="115" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#about" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#about');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="116" data-magicpath-path="JulianaChefWebsite.tsx">
                      About Juliana
                    </a>
                  </li>
                  <li data-magicpath-id="117" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#offerings" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#offerings');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="118" data-magicpath-path="JulianaChefWebsite.tsx">
                      Retreat Catering
                    </a>
                  </li>
                  <li data-magicpath-id="119" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#treats" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#treats');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="120" data-magicpath-path="JulianaChefWebsite.tsx">
                      Treats & Bakes
                    </a>
                  </li>
                  <li data-magicpath-id="121" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#contact" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="122" data-magicpath-path="JulianaChefWebsite.tsx">
                      Contact
                    </a>
                  </li>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="4c75a9a2-1763-4d27-b9c9-a8fae2ccf6fb" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="123" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="124" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
                <SortableContainer dndKitId="aad1dfd4-6826-4989-b147-647a2881a020" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="125" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="126" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="127" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="128" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="129" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="c4054aa8-b491-481e-a88d-48dfd2097703" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="130" data-magicpath-path="JulianaChefWebsite.tsx">
              <p style={{
              color: "#fcf2e3"
            }} data-magicpath-id="131" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  }

  // If showing About page, render it with header and footer
  if (showAboutPage) {
    return <SortableContainer dndKitId="c9639355-74b3-4dde-8e01-57581f022e3f" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="132" data-magicpath-path="JulianaChefWebsite.tsx">
        {/* Header */}
        <SortableContainer dndKitId="11c1cb8e-3d62-4505-afe1-27e2acdd4e62" containerType="regular" prevTag="motion.header" style={{
        opacity: headerOpacity
      }} className="fixed top-0 left-0 right-0 z-50 bg-[#5e7155]/95 backdrop-blur-sm" role="banner" data-magicpath-id="133" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="5a8ac04e-b375-4132-8f28-80e5faad061f" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="134" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="188f9f9c-8a0d-4d4d-a77c-daf54b8d8fea" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="135" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="a4e0fa44-3dd6-4b37-9afe-186a7592fce5" containerType="regular" prevTag="button" onClick={() => {
              setShowAboutPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="flex items-center hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home" data-magicpath-id="136" data-magicpath-path="JulianaChefWebsite.tsx">
                <img src="https://storage.googleapis.com/magicpoint-public-assets/user/300600264317087744/assets/0d9d49d2-8c2e-4b14-b09a-5b31e903e01f.png" alt="Juliana Lopes - The Vegan Chef" className="h-12 sm:h-14 w-auto object-contain" data-magicpath-id="137" data-magicpath-path="JulianaChefWebsite.tsx" />
              </SortableContainer>

              <SortableContainer dndKitId="303a10a5-cd49-4914-8521-5b1913da98f8" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation" data-magicpath-id="138" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" style={{
                color: "#fcf2e3"
              }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="139" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>

              <SortableContainer dndKitId="563e74e5-80c7-4923-b01a-5898946391e6" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="140" data-magicpath-path="JulianaChefWebsite.tsx">
                {mobileMenuOpen ? <X className="w-6 h-6" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="141" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="142" data-magicpath-path="JulianaChefWebsite.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {mobileMenuOpen && <SortableContainer dndKitId="3570d5d2-df94-4f75-b4c0-261026ae7e19" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-[#5e7155] border-t border-white/10" data-magicpath-id="143" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="03b77f08-e802-4846-9fc9-a4b01eae77bc" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" role="navigation" aria-label="Mobile navigation" data-magicpath-id="144" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
              e.preventDefault();
              handleNavClick(item.href);
            }} className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium" style={{
              color: "#fcf2e3"
            }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="145" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>
            </SortableContainer>}
        </SortableContainer>

        {/* About Page Content */}
        <SortableContainer dndKitId="b9061808-a37a-465e-b3be-b0c881dd0324" containerType="regular" prevTag="div" className="pt-16 sm:pt-20" data-magicpath-id="146" data-magicpath-path="JulianaChefWebsite.tsx">
          <AboutPage onNavigate={handleAboutNavigate} data-magicpath-id="147" data-magicpath-path="JulianaChefWebsite.tsx" />
        </SortableContainer>

        {/* Footer */}
        <SortableContainer dndKitId="0fa39cdd-8c4d-4d22-b68e-f22be4a782ee" containerType="regular" prevTag="footer" className="bg-[#5e7155] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" role="contentinfo" data-magicpath-id="148" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="f41de84e-ae37-4213-a0ff-8b2fb911c1fc" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="149" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="41b00224-cf8c-4b64-8d42-4a7dbf7a44f0" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="150" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="47318e55-edd9-4f72-b2e2-ea6e3f5d65a9" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="151" data-magicpath-path="JulianaChefWebsite.tsx">
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="152" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
                <p className="text-white/80 text-xs sm:text-sm" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="153" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
              </SortableContainer>
              <SortableContainer dndKitId="893b9383-20f4-45b8-8064-ce1e60d843c6" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="154" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="155" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
                <SortableContainer dndKitId="24d9356a-1866-4a44-b5cc-b96745667d75" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="156" data-magicpath-path="JulianaChefWebsite.tsx">
                  <li data-magicpath-id="157" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#home" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#home');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="158" data-magicpath-path="JulianaChefWebsite.tsx">
                      Home
                    </a>
                  </li>
                  <li data-magicpath-id="159" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#about" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#about');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="160" data-magicpath-path="JulianaChefWebsite.tsx">
                      About Juliana
                    </a>
                  </li>
                  <li data-magicpath-id="161" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#offerings" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#offerings');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="162" data-magicpath-path="JulianaChefWebsite.tsx">
                      Retreat Catering
                    </a>
                  </li>
                  <li data-magicpath-id="163" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#treats" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#treats');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="164" data-magicpath-path="JulianaChefWebsite.tsx">
                      Treats & Bakes
                    </a>
                  </li>
                  <li data-magicpath-id="165" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#contact" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }} className="text-white/80 hover:text-white transition-colors" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="166" data-magicpath-path="JulianaChefWebsite.tsx">
                      Contact
                    </a>
                  </li>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="0fb7d844-6b3a-46c8-9fc4-4c30d392bb60" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="167" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{
                color: "#fcf2e3"
              }} data-magicpath-id="168" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
                <SortableContainer dndKitId="9769f3be-49ae-49f3-909c-06d30716487a" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="169" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="170" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="171" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="172" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" style={{
                    color: "#fcf2e3"
                  }} data-magicpath-id="173" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="fc8d0c49-185e-4307-8afa-63372e99aa91" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="174" data-magicpath-path="JulianaChefWebsite.tsx">
              <p style={{
              color: "#fcf2e3"
            }} data-magicpath-id="175" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  }

  // @return
  return <SortableContainer dndKitId="4b5c09a4-dc5b-4c59-b6fb-2f02fcbebe9e" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="176" data-magicpath-path="JulianaChefWebsite.tsx">
      {/* Mobile-First Header */}
      <SortableContainer dndKitId="16d39071-b401-45c3-9f88-ecd19cd563de" containerType="regular" prevTag="motion.header" style={{
      opacity: headerOpacity
    }} className="fixed top-0 left-0 right-0 z-50 bg-[#5e7155]/95 backdrop-blur-sm" role="banner" data-magicpath-id="177" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="868db683-2c0f-444a-8674-b016c6aafade" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="178" data-magicpath-path="JulianaChefWebsite.tsx" style={{
        background: "#5e7155"
      }}>
          <SortableContainer dndKitId="5f2bf164-2b56-4be4-a30f-ebc4e47b064c" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="179" data-magicpath-path="JulianaChefWebsite.tsx" style={{
          background: "#5e7155",
          outline: "0.8px solid rgb(94 113 85 / 0)",
          outlineStyle: "solid",
          outlineWidth: "0.8px",
          outlineColor: "rgb(94 113 85 / 0)",
          outlineOffset: "0px",
          color: "rgb(94 113 85 / 0)"
        }}>
            {/* Logo */}
            <SortableContainer dndKitId="1eb6d2cc-2112-4c97-9586-b056b134a5c8" containerType="regular" prevTag="button" onClick={() => document.getElementById('home')?.scrollIntoView({
            behavior: 'smooth'
          })} className="flex items-center hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home" data-magicpath-id="180" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/300600264317087744/assets/deff7a85-6f9d-44a9-a015-f831a5396e4f.png" alt="Juliana Lopes - The Vegan Chef" className="h-12 sm:h-14 w-auto object-contain" data-magicpath-id="181" data-magicpath-path="JulianaChefWebsite.tsx" style={{
              objectFit: "contain",
              objectPosition: "50% 50%",
              opacity: "1",
              outline: "none",
              outlineStyle: "none",
              outlineWidth: "0px",
              outlineColor: "oklab(0 0 0 / 0.1)",
              outlineOffset: "0px",
              color: "#5e7155",
              height: "70px"
            }} />
            </SortableContainer>

            {/* Desktop Navigation */}
            <SortableContainer dndKitId="538efffc-155d-446a-9421-1c41c88bfa0e" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation" data-magicpath-id="182" data-magicpath-path="JulianaChefWebsite.tsx">
              {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
              e.preventDefault();
              handleNavClick(item.href);
            }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" style={{
              color: "#fcf2e3",
              fontFamily: "Montserrat"
            }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="183" data-magicpath-path="JulianaChefWebsite.tsx">
                  {item.name}
                </a>)}
            </SortableContainer>

            {/* Mobile Menu Button */}
            <SortableContainer dndKitId="b5eb8be2-f41f-4836-b7c3-fd6fd81ea60e" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="184" data-magicpath-path="JulianaChefWebsite.tsx">
              {mobileMenuOpen ? <X className="w-6 h-6" style={{
              color: "#fcf2e3"
            }} data-magicpath-id="185" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" style={{
              color: "#fcf2e3"
            }} data-magicpath-id="186" data-magicpath-path="JulianaChefWebsite.tsx" />}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Mobile Menu */}
        {mobileMenuOpen && <SortableContainer dndKitId="458e2649-2dd2-41a6-a733-c13360a150f3" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-[#5e7155] border-t border-white/10" data-magicpath-id="187" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="3ea3348e-9a41-41e8-a8d9-ef2c5dc91e59" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" role="navigation" aria-label="Mobile navigation" data-magicpath-id="188" data-magicpath-path="JulianaChefWebsite.tsx">
              {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
            e.preventDefault();
            handleNavClick(item.href);
          }} className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium" style={{
            color: "#fcf2e3"
          }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="189" data-magicpath-path="JulianaChefWebsite.tsx">
                  {item.name}
                </a>)}
            </SortableContainer>
          </SortableContainer>}
      </SortableContainer>

      {/* Hero Section - Mobile First */}
      <SortableContainer dndKitId="4b5c3f80-6043-4076-bde0-ac4384f0588a" containerType="regular" prevTag="section" id="home" className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden" role="main" aria-label="Hero section featuring plant-based retreat chef services" data-magicpath-id="190" data-magicpath-path="JulianaChefWebsite.tsx">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        filter: 'brightness(0.7)',
        backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/300600264317087744/assets/665cd21b-9e06-4fcc-8e44-61ef845fae0e.png)",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "repeat",
        opacity: "1"
      }} data-magicpath-id="191" data-magicpath-path="JulianaChefWebsite.tsx" />
        <SortableContainer dndKitId="4165459d-c907-4d57-a3a9-6a030507195e" containerType="regular" prevTag="div" className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl" data-magicpath-id="192" data-magicpath-path="JulianaChefWebsite.tsx">
          <motion.h1 data-magicpath-motion-tag="motion.h1" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 sm:mb-6 leading-tight" style={{
          color: "#fcf2e3"
        }} data-magicpath-id="193" data-magicpath-path="JulianaChefWebsite.tsx">
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
        }} className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4" style={{
          color: "#fcf2e3",
          fontFamily: "Montserrat",
          fontWeight: "600"
        }} data-magicpath-id="194" data-magicpath-path="JulianaChefWebsite.tsx">Specialising in Transformational Food Experiences For Wellness Retreats Worldwide</motion.p>
          <motion.button data-magicpath-motion-tag="motion.button" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="bg-[#5e7155] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-sm sm:text-base" onClick={() => {
          setShowContactPage(true);
          setShowAboutPage(false);
          setShowRetreatCateringPage(false);
          setShowTreatsBakesPage(false);
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }} style={{
          background: "#c76942",
          color: "#fcf2e3",
          fontFamily: "Montserrat",
          fontWeight: "600"
        }} data-magicpath-id="195" data-magicpath-path="JulianaChefWebsite.tsx">
            Book Your Retreat Catering
          </motion.button>
        </SortableContainer>
      </SortableContainer>

      {/* About Section - Mobile First */}
      <SortableContainer dndKitId="ba48a70b-1ae6-4e93-86e8-54a8bf4ec97d" containerType="regular" prevTag="section" id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" style={{
      background: "#fcf2e3"
    }} aria-labelledby="about-heading" data-magicpath-id="196" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="802009d3-7e0d-4858-8d0c-6eecf0acfe18" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="197" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 id="about-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#2D2D2D]" style={{
          color: "#404d3a"
        }} data-magicpath-id="198" data-magicpath-path="JulianaChefWebsite.tsx">
            Meet Your Chef
          </h2>
          <SortableContainer dndKitId="8d5366cf-d294-48b5-bf04-a744101fbe34" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center" data-magicpath-id="199" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="526d65d9-4fce-4a87-8ca3-d78c904602d2" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} data-magicpath-id="200" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/300600264317087744/assets/ba3e07e1-150a-4e48-b1c9-9383828fc6ce.png" alt="Chef Juliana smiling in her kitchen, preparing plant-based dishes" className="w-full rounded-lg shadow-lg" style={{
              objectFit: "fill",
              objectPosition: "50% 50%",
              opacity: "1"
            }} data-magicpath-id="201" data-magicpath-path="JulianaChefWebsite.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="998e7cf9-3393-4ca4-8494-ee1a15ddfc59" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="space-y-4 sm:space-y-6" data-magicpath-id="202" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2D2D]" style={{
              color: "#404d3a",
              textAlign: "center",
              justifyContent: "center",
              fontFamily: "Montserrat"
            }} data-magicpath-id="203" data-magicpath-path="JulianaChefWebsite.tsx">Hi, I'm Juliana!</h3>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              textAlign: "center",
              justifyContent: "center"
            }} data-magicpath-id="204" data-magicpath-path="JulianaChefWebsite.tsx">
                I'm a passionate plant-based chef with over 8 years of culinary experience. I built my business and brand on creating nourishing, delicious plant-based meals for wellness retreats around the world.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              textAlign: "center",
              justifyContent: "center"
            }} data-magicpath-id="205" data-magicpath-path="JulianaChefWebsite.tsx">
                What truly fuels my culinary passion is not just food itself but the transformative power it has to bring people together and foster genuine connections. I believe food has the unique ability to create shared experiences that inspire, heal, and unite us.
              </p>
              <button className="bg-[#5e7155] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-sm sm:text-base flex mx-auto" onClick={() => setShowAboutPage(true)} style={{
              textAlign: "center",
              justifyContent: "center",
              fontFamily: "Montserrat",
              fontWeight: "600"
            }} data-magicpath-id="206" data-magicpath-path="JulianaChefWebsite.tsx">
                Read My Full Story
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Offerings Section - Mobile First */}
      <SortableContainer dndKitId="0699d5a1-1ea9-419f-9e87-d3bd928798cf" containerType="regular" prevTag="section" id="offerings" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" aria-labelledby="offerings-heading" data-magicpath-id="207" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="44dcced9-ebc3-4f38-b66a-644c82fdfe37" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="208" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 id="offerings-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#5e7155]" style={{
          color: "#c76942"
        }} data-magicpath-id="209" data-magicpath-path="JulianaChefWebsite.tsx">
            My Offerings
          </h2>

          {/* Retreat Catering */}
          <SortableContainer dndKitId="b923227b-aac9-464c-b729-4543dab20f46" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20" data-magicpath-id="210" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="f018aafb-34cf-4790-a6a5-777686542983" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="space-y-4 sm:space-y-6" data-magicpath-id="211" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2D2D]" style={{
              color: "#404d3a",
              fontFamily: "Montserrat"
            }} data-magicpath-id="212" data-magicpath-path="JulianaChefWebsite.tsx">Retreat & Event Catering</h3>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" style={{
              color: "#404d3a",
              textAlign: "center",
              justifyContent: "center",
              fontFamily: "Montserrat"
            }} data-magicpath-id="213" data-magicpath-path="JulianaChefWebsite.tsx">
                Custom plant-based menus for retreats, and events across Ireland and the UK.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" style={{
              color: "#404d3a",
              textAlign: "center",
              justifyContent: "center",
              fontFamily: "Montserrat"
            }} data-magicpath-id="214" data-magicpath-path="JulianaChefWebsite.tsx">
                Every dish is made with stunning presentation and extraordinary ingredients.
              </p>
              <button className="bg-[#5e7155] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-sm sm:text-base flex mx-auto" onClick={() => {
              setShowRetreatCateringPage(true);
              setShowAboutPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} style={{
              background: "#c76942",
              fontFamily: "Montserrat",
              fontWeight: "600"
            }} data-magicpath-id="215" data-magicpath-path="JulianaChefWebsite.tsx">
                Find Out More
              </button>
            </SortableContainer>
            <SortableContainer dndKitId="0341cce4-1b4b-4a7b-a8ac-b1f01b3661db" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="flex justify-center" data-magicpath-id="216" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/300600264317087744/assets/57e9f442-497a-4c95-baa9-b4df09cab964.png" alt="Beautifully plated gourmet plant-based dish with colorful vegetables" className="w-full rounded-lg shadow-lg" style={{
              minHeight: "500px",
              maxWidth: "450px",
              objectFit: "cover",
              objectPosition: "50% 100%",
              opacity: "1"
            }} data-magicpath-id="217" data-magicpath-path="JulianaChefWebsite.tsx" />
            </SortableContainer>
          </SortableContainer>

          {/* Plant-Based Treats */}
          <SortableContainer dndKitId="0e9779ee-94c2-4276-9fc3-fb4fb943b621" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12" data-magicpath-id="218" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="100c3580-05a4-4ccf-a703-cb13838048c1" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="space-y-4 sm:space-y-6 order-1 md:order-2" data-magicpath-id="219" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2D2D]" style={{
              color: "#404d3a",
              fontFamily: "Montserrat"
            }} data-magicpath-id="220" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Treats</h3>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" style={{
              color: "#404d3a",
              fontFamily: "Montserrat",
              textAlign: "center",
              justifyContent: "center"
            }} data-magicpath-id="221" data-magicpath-path="JulianaChefWebsite.tsx">
                Fresh-baked, gluten-friendly, plant-based treats made to order just for you.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" style={{
              color: "#404d3a",
              fontFamily: "Montserrat",
              textAlign: "center",
              justifyContent: "center"
            }} data-magicpath-id="222" data-magicpath-path="JulianaChefWebsite.tsx">
                Order Weekly Fridays 5am-9am. Collection in Dun Laoghaire or Weekly Pop-up Cake Stall.
              </p>
              <button className="bg-[#5e7155] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-sm sm:text-base flex mx-auto" onClick={() => {
              setShowTreatsBakesPage(true);
              setShowAboutPage(false);
              setShowRetreatCateringPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} style={{
              background: "#c76942",
              fontFamily: "Montserrat",
              fontWeight: "600"
            }} data-magicpath-id="223" data-magicpath-path="JulianaChefWebsite.tsx">
                See Treats Menu
              </button>
            </SortableContainer>
            <SortableContainer dndKitId="c266c607-e6ca-4174-ba2e-cf4175f2ccb7" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="flex justify-center order-2 md:order-1" data-magicpath-id="224" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/300600264317087744/assets/29367085-1af0-41c6-a000-7e7ffe3ff643.jpg" alt="Decadent plant-based dessert with rich chocolate layers" className="w-full rounded-lg shadow-lg" style={{
              objectFit: "cover",
              objectPosition: "50% 50%",
              opacity: "1",
              minHeight: "500px",
              maxWidth: "450px"
            }} data-magicpath-id="225" data-magicpath-path="JulianaChefWebsite.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Treats & Bakes Section - Mobile First */}
      <SortableContainer dndKitId="2ca49555-422d-429d-8191-9a3a71f9f571" containerType="regular" prevTag="section" id="treats" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" style={{
      background: "#fcf2e3",
      display: "none"
    }} aria-labelledby="treats-heading" data-magicpath-id="226" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="2762a76f-3439-4971-8aeb-fa4f386328ae" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" style={{
        display: "none"
      }} data-magicpath-id="227" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 id="treats-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#5e7155]" style={{
          display: "none"
        }} data-magicpath-id="228" data-magicpath-path="JulianaChefWebsite.tsx">
            Treats & Bakes
          </h2>

          <SortableContainer dndKitId="90f272e1-3857-459e-8b6f-abb65d4c94ef" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" data-magicpath-id="229" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="e5e42797-3f7f-499f-9e5d-5de7f960ddc5" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow" data-magicpath-id="230" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80" alt="Chocolate brownies" className="w-full h-48 object-cover" data-magicpath-id="231" data-magicpath-path="JulianaChefWebsite.tsx" />
              <SortableContainer dndKitId="0d7c2be3-24df-462f-bae4-4d159aedc37f" containerType="regular" prevTag="div" className="p-4 sm:p-6" data-magicpath-id="232" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="text-lg font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="233" data-magicpath-path="JulianaChefWebsite.tsx">Fudgy Brownies</h4>
                <p className="text-[#4A4A4A] text-sm" data-magicpath-id="234" data-magicpath-path="JulianaChefWebsite.tsx">
                  Rich, decadent, and impossibly fudgy. Made with premium dark chocolate and a secret ingredient.
                </p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="a87e6487-ee58-41bb-8caf-c0bb15d5d20f" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow" data-magicpath-id="235" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80" alt="Cinnamon rolls" className="w-full h-48 object-cover" data-magicpath-id="236" data-magicpath-path="JulianaChefWebsite.tsx" />
              <SortableContainer dndKitId="c04a3bb3-56ea-406b-b9e1-f70105b87910" containerType="regular" prevTag="div" className="p-4 sm:p-6" data-magicpath-id="237" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="text-lg font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="238" data-magicpath-path="JulianaChefWebsite.tsx">Cinnamon Rolls</h4>
                <p className="text-[#4A4A4A] text-sm" data-magicpath-id="239" data-magicpath-path="JulianaChefWebsite.tsx">
                  Soft, pillowy rolls swirled with cinnamon and topped with creamy glaze. Pure comfort in every bite.
                </p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="4122e85d-049a-4a08-85c1-0d5c1c780950" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow" data-magicpath-id="240" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80" alt="Cookies" className="w-full h-48 object-cover" data-magicpath-id="241" data-magicpath-path="JulianaChefWebsite.tsx" />
              <SortableContainer dndKitId="61821be6-5956-4999-aab4-626694a60956" containerType="regular" prevTag="div" className="p-4 sm:p-6" data-magicpath-id="242" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="text-lg font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="243" data-magicpath-path="JulianaChefWebsite.tsx">Signature Cookies</h4>
                <p className="text-[#4A4A4A] text-sm" data-magicpath-id="244" data-magicpath-path="JulianaChefWebsite.tsx">
                  Crispy edges, chewy centers. From chocolate chip to oatmeal raisin, there's a cookie for everyone.
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Testimonials Section - Mobile First */}
      <SortableContainer dndKitId="df3089d6-cc02-4080-b0a0-081aaeb60516" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#5e7155]" aria-labelledby="testimonials-heading" data-magicpath-id="245" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="406e7ea1-6390-427d-a038-f3187341f37f" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="246" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 id="testimonials-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-white" style={{
          color: "#fcf2e3"
        }} data-magicpath-id="247" data-magicpath-path="JulianaChefWebsite.tsx">
            What People Say
          </h2>
          <SortableContainer dndKitId="e4cb81f9-28bb-4dbf-804d-84443c137de2" containerType="regular" prevTag="div" className="relative" data-magicpath-id="248" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="ebc6e05e-903b-4301-8235-7047a6f811fc" containerType="regular" prevTag="motion.div" key={currentTestimonial} initial={{
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
          }} className="bg-white rounded-lg p-6 sm:p-8 md:p-12 shadow-xl" style={{
            color: "#fcf2e3",
            background: "#fcf2e3"
          }} data-magicpath-id="249" data-magicpath-path="JulianaChefWebsite.tsx">
              <p className="text-[#4A4A4A] text-base sm:text-lg md:text-xl leading-relaxed mb-6 italic" style={{
              color: "#404d3a",
              fontFamily: "Montserrat"
            }} data-magicpath-id="250" data-magicpath-path="JulianaChefWebsite.tsx">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <SortableContainer dndKitId="9e4bfc48-8c7b-444c-b9d7-0871f08d415d" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="251" data-magicpath-path="JulianaChefWebsite.tsx">
                <SortableContainer dndKitId="494790b1-b607-4e00-ab83-1e19faa21a9b" containerType="regular" prevTag="div" data-magicpath-id="252" data-magicpath-path="JulianaChefWebsite.tsx">
                  <p className="font-semibold text-[#2D2D2D] text-sm sm:text-base" style={{
                  color: "#404d3a",
                  fontFamily: "Montserrat"
                }} data-magicpath-id="253" data-magicpath-path="JulianaChefWebsite.tsx">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-[#5e7155] text-xs sm:text-sm" data-magicpath-id="254" data-magicpath-path="JulianaChefWebsite.tsx">
                    {testimonials[currentTestimonial].location}
                  </p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Navigation Controls */}
            <SortableContainer dndKitId="dc170bbe-c575-48fe-98bb-a8b7d087b119" containerType="regular" prevTag="div" className="flex justify-center items-center mt-6 sm:mt-8 space-x-3 sm:space-x-4" data-magicpath-id="255" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="69adc73d-6c5a-44a9-ab50-66f529844aa0" containerType="regular" prevTag="button" onClick={prevTestimonial} className="bg-white text-[#5e7155] p-2 rounded-full hover:bg-[#F5F1E8] transition-colors" aria-label="Previous testimonial" style={{
              background: "#fcf2e3"
            }} data-magicpath-id="256" data-magicpath-path="JulianaChefWebsite.tsx">
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" style={{
                background: "#fcf2e3"
              }} data-magicpath-id="257" data-magicpath-path="JulianaChefWebsite.tsx" />
              </SortableContainer>
              <div className="flex space-x-2" data-magicpath-id="258" data-magicpath-path="JulianaChefWebsite.tsx">
                {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentTestimonial(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentTestimonial ? 'bg-white' : 'bg-white/40'}`} aria-label={`Go to testimonial ${index + 1}`} data-magicpath-id="259" data-magicpath-path="JulianaChefWebsite.tsx" />)}
              </div>
              <SortableContainer dndKitId="b305fd60-b688-49a1-bf17-b45410ff3690" containerType="regular" prevTag="button" onClick={nextTestimonial} className="bg-white text-[#5e7155] p-2 rounded-full hover:bg-[#F5F1E8] transition-colors" aria-label="Next testimonial" style={{
              background: "#fcf2e3"
            }} data-magicpath-id="260" data-magicpath-path="JulianaChefWebsite.tsx">
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" style={{
                background: "#fcf2e3"
              }} data-magicpath-id="261" data-magicpath-path="JulianaChefWebsite.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs Section - Mobile First */}
      <SortableContainer dndKitId="c13446c4-b958-4281-a528-0b1eabe2b6ce" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" style={{
      background: "#fcf2e3"
    }} aria-labelledby="faqs-heading" data-magicpath-id="262" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="aca56a53-faed-4fde-a912-932b182dfcbf" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="263" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 id="faqs-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#2D2D2D]" style={{
          color: "#404d3a"
        }} data-magicpath-id="264" data-magicpath-path="JulianaChefWebsite.tsx">
            FAQs
          </h2>
          <SortableContainer dndKitId="0d60ee26-27fb-4732-90bc-d186da9a9eca" containerType="collection" prevTag="div" className="space-y-3 sm:space-y-4" data-magicpath-id="265" data-magicpath-path="JulianaChefWebsite.tsx">
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
          }} className="bg-white rounded-lg shadow-sm overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="266" data-magicpath-path="JulianaChefWebsite.tsx">
                <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-[#F5F1E8] transition-colors" style={{
              color: "#404d3a"
            }} data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="267" data-magicpath-path="JulianaChefWebsite.tsx">
                  <span className="font-semibold text-[#2D2D2D] pr-4 text-sm sm:text-base" style={{
                color: "#404d3a",
                fontFamily: "Montserrat"
              }} data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:unknown" data-magicpath-id="268" data-magicpath-path="JulianaChefWebsite.tsx">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#5e7155] transition-transform flex-shrink-0 ${expandedFaq === index ? 'transform rotate-180' : ''}`} data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="269" data-magicpath-path="JulianaChefWebsite.tsx" />
                </button>
                {expandedFaq === index && <motion.div data-magicpath-motion-tag="motion.div" initial={{
              height: 0
            }} animate={{
              height: 'auto'
            }} exit={{
              height: 0
            }} transition={{
              duration: 0.3
            }} className="px-4 sm:px-6 pb-4 sm:pb-6" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="270" data-magicpath-path="JulianaChefWebsite.tsx">
                    <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:unknown" data-magicpath-id="271" data-magicpath-path="JulianaChefWebsite.tsx">{faq.answer}</p>
                  </motion.div>}
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Contact Section - Mobile First */}
      <SortableContainer dndKitId="a328e73e-0dda-4f47-81c3-4fd9c52fa8d2" containerType="regular" prevTag="section" id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" aria-labelledby="contact-heading" data-magicpath-id="272" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="1d7668f8-f0c7-4800-b7a9-be277b7561a4" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="273" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 id="contact-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-[#2D2D2D]" style={{
          color: "#c76942"
        }} data-magicpath-id="274" data-magicpath-path="JulianaChefWebsite.tsx">
            Let's Work Together!
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#5e7155] mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4" style={{
          fontFamily: "Montserrat",
          fontWeight: "500"
        }} data-magicpath-id="275" data-magicpath-path="JulianaChefWebsite.tsx">
            Food is how I show care. Let me be part of creating something meaningful for your retreat, event, or simply your week.
          </p>
          <button onClick={() => {
          setShowContactPage(true);
          setShowAboutPage(false);
          setShowRetreatCateringPage(false);
          setShowTreatsBakesPage(false);
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }} className="bg-[#5e7155] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-base sm:text-lg" style={{
          background: "#404d3a",
          fontFamily: "Montserrat",
          fontWeight: "600"
        }} data-magicpath-id="276" data-magicpath-path="JulianaChefWebsite.tsx">
            Get In Touch
          </button>
        </SortableContainer>
      </SortableContainer>

      {/* Footer - Mobile First */}
      <SortableContainer dndKitId="5a848340-d8ae-4033-acad-3ace75bdb940" containerType="regular" prevTag="footer" className="bg-[#5e7155] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" style={{
      color: "#fcf2e3"
    }} role="contentinfo" data-magicpath-id="277" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="92bf7eae-4f20-4a31-acc7-e76e82b624ea" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="278" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="0229ad9d-8b79-4f7c-8c33-243de6a8950e" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="279" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="13865961-c4a5-4205-a960-3cf93c445716" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="280" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" data-magicpath-id="281" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
              <p className="text-white/80 text-xs sm:text-sm" style={{
              color: "#fcf2e3",
              fontFamily: "Montserrat"
            }} data-magicpath-id="282" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
            </SortableContainer>
            <SortableContainer dndKitId="1732a3d2-769c-4672-b814-055d4d54669b" containerType="regular" prevTag="div" className="text-center sm:text-left" style={{
            color: "#fcf2e3"
          }} data-magicpath-id="283" data-magicpath-path="JulianaChefWebsite.tsx">
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{
              fontFamily: "Montserrat"
            }} data-magicpath-id="284" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
              <SortableContainer dndKitId="f75c910b-3776-4e83-9636-22ff86fa2202" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="285" data-magicpath-path="JulianaChefWebsite.tsx">
                <li style={{
                fontFamily: "Montserrat"
              }} data-magicpath-id="286" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#home" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#home');
                }} className="text-white/80 hover:text-white transition-colors" style={{
                  color: "#fcf2e3"
                }} data-magicpath-id="287" data-magicpath-path="JulianaChefWebsite.tsx">
                    Home
                  </a>
                </li>
                <li style={{
                fontFamily: "Montserrat"
              }} data-magicpath-id="288" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#about" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#about');
                }} className="text-white/80 hover:text-white transition-colors" style={{
                  color: "#fcf2e3"
                }} data-magicpath-id="289" data-magicpath-path="JulianaChefWebsite.tsx">
                    About Juliana
                  </a>
                </li>
                <li data-magicpath-id="290" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#offerings" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#offerings');
                }} className="text-white/80 hover:text-white transition-colors" style={{
                  color: "#fcf2e3",
                  fontFamily: "Montserrat"
                }} data-magicpath-id="291" data-magicpath-path="JulianaChefWebsite.tsx">
                    Retreat Catering
                  </a>
                </li>
                <li style={{
                fontFamily: "Montserrat"
              }} data-magicpath-id="292" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#treats" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#treats');
                }} className="text-white/80 hover:text-white transition-colors" style={{
                  color: "#fcf2e3"
                }} data-magicpath-id="293" data-magicpath-path="JulianaChefWebsite.tsx">
                    Treats & Bakes
                  </a>
                </li>
                <li style={{
                color: "#fcf2e3",
                fontFamily: "Montserrat"
              }} data-magicpath-id="294" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#contact" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }} className="text-white/80 hover:text-white transition-colors" style={{
                  color: "#fcf2e3"
                }} data-magicpath-id="295" data-magicpath-path="JulianaChefWebsite.tsx">
                    Contact
                  </a>
                </li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="4ccb4aa5-90e3-4187-b1e2-ed658df30741" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="296" data-magicpath-path="JulianaChefWebsite.tsx">
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{
              fontFamily: "Montserrat"
            }} data-magicpath-id="297" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
              <SortableContainer dndKitId="c646b53b-a45c-43f4-a697-878cd61bbac4" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="298" data-magicpath-path="JulianaChefWebsite.tsx">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="299" data-magicpath-path="JulianaChefWebsite.tsx">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" style={{
                  color: "#fcf2e3"
                }} data-magicpath-id="300" data-magicpath-path="JulianaChefWebsite.tsx" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="301" data-magicpath-path="JulianaChefWebsite.tsx">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" style={{
                  color: "#fcf2e3"
                }} data-magicpath-id="302" data-magicpath-path="JulianaChefWebsite.tsx" />
                </a>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="b3059f8b-8cee-44d9-8b62-ced636637d34" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="303" data-magicpath-path="JulianaChefWebsite.tsx">
            <p style={{
            color: "#fcf2e3",
            fontFamily: "Montserrat"
          }} data-magicpath-id="304" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};