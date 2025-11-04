import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronDown, Instagram, Facebook, Menu, X } from 'lucide-react';
import AboutPage from './AboutPage';
type JulianaChefWebsiteProps = {};
const navigation = [{
  name: 'Home',
  href: '#home',
  mpid: "ee76118a-7605-47aa-a33b-dfa2558fc24d"
}, {
  name: 'About Juliana',
  href: '#about',
  mpid: "55deccd8-2ed8-40b3-9ec5-02cdd0e29132"
}, {
  name: 'Retreat Catering',
  href: '#offerings',
  mpid: "4c1ad9a9-d094-4565-b515-94199ea1240c"
}, {
  name: 'Treats & Bakes',
  href: '#treats',
  mpid: "d96a54ae-dee9-4d16-a044-89af2ed8d28b"
}, {
  name: 'Contact',
  href: '#contact',
  mpid: "f4cd982c-d633-401e-b607-8948c41041b5"
}] as any[];
const testimonials = [{
  quote: "Juliana transformed our retreat experience. Her plant-based dishes were not only delicious but beautifully presented. Our guests couldn't stop raving about the food!",
  author: 'Sophie Martinez',
  location: 'Retreat Host, Portugal',
  mpid: "8ccaea04-3d47-4441-954c-6350414beef4"
}, {
  quote: "Working with Chef Juliana was incredible. She brought creativity and passion to every meal, making our wellness retreat truly unforgettable.",
  author: 'Marcus Chen',
  location: 'Wellness Coordinator, Bali',
  mpid: "5921a066-c23f-4c87-a1e4-e15410f9df21"
}, {
  quote: "The treats Juliana prepared were absolutely divine. Gluten-free, plant-based perfection that even our non-vegan guests adored.",
  author: 'Emma Thompson',
  location: 'Event Planner, UK',
  mpid: "2d81013f-35a6-487d-b7dc-d8311784d70c"
}] as any[];
const faqs = [{
  question: "I'm based in the UK. Can you cater my retreat?",
  answer: "Yes! I cater retreats and events across the world and the UK. Travel costs may apply for certain locations.",
  mpid: "5258dfc8-bc8e-4aa2-b781-39ec9cb88883"
}, {
  question: "How far ahead should I book your catering service?",
  answer: "I recommend booking at least 2-3 months in advance to ensure availability, especially for retreat seasons.",
  mpid: "215387d8-1ae3-4884-9395-edb0a3e28343"
}, {
  question: "What if my guests have lots of different dietary needs?",
  answer: "I specialize in accommodating various dietary requirements. All my dishes are plant-based and can be adapted for allergies and preferences.",
  mpid: "020fccbe-6c8a-4025-8447-a57decf31fe0"
}, {
  question: "How do I know everything is vegan if I can't see it being made?",
  answer: "I provide full transparency with ingredient lists and preparation methods. You're welcome to observe the cooking process.",
  mpid: "8a4c76f2-bc72-4b52-95e4-ee2dc64830d0"
}, {
  question: "I work a lot and eat out. Are your treats actually healthy?",
  answer: "Yes! My treats use wholesome, natural ingredients without refined sugars. They're designed to nourish while satisfying your sweet tooth.",
  mpid: "e6d118c9-9eda-4f88-869d-afff8b635fd9"
}] as any[];

// @component: JulianaChefWebsite
export const JulianaChefWebsite = (props: JulianaChefWebsiteProps) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);
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
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      setShowAboutPage(false);
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({
          behavior: 'smooth'
        });
      }, 100);
    }
  };
  const handleAboutNavigate = (section: string) => {
    setShowAboutPage(false);
    setTimeout(() => {
      document.querySelector(section)?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  };

  // If showing About page, render it with header and footer
  if (showAboutPage) {
    return <SortableContainer dndKitId="6b8a36e7-d675-44f1-82cc-b2f521fcfb89" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="0" data-magicpath-path="JulianaChefWebsite.tsx">
        {/* Header */}
        <SortableContainer dndKitId="56d0054d-a3c9-41a1-9418-f23bb585a6e3" containerType="regular" prevTag="motion.header" style={{
        opacity: headerOpacity
      }} className="fixed top-0 left-0 right-0 z-50 bg-[#8B9B7F]/95 backdrop-blur-sm" data-magicpath-id="1" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="8425a4ce-ad12-4206-a648-8e4015676a5a" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="2" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="23f956ae-e4ab-41ae-a0b0-40791d01c26b" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="3" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="9da277b1-4660-483f-becf-d666ebe0fbc4" containerType="regular" prevTag="button" onClick={() => {
              setShowAboutPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home" data-magicpath-id="4" data-magicpath-path="JulianaChefWebsite.tsx">
                <div className="text-white font-serif text-lg sm:text-xl" data-magicpath-id="5" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</div>
                <div className="text-white/80 text-xs sm:text-sm" data-magicpath-id="6" data-magicpath-path="JulianaChefWebsite.tsx">the vegan chef</div>
              </SortableContainer>

              <SortableContainer dndKitId="4d772297-4d9e-4c0e-84cb-b9d3e9f49593" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" data-magicpath-id="7" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="8" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>

              <SortableContainer dndKitId="a5e517ed-820f-4a80-9295-3d23823b173e" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="9" data-magicpath-path="JulianaChefWebsite.tsx">
                {mobileMenuOpen ? <X className="w-6 h-6" data-magicpath-id="10" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" data-magicpath-id="11" data-magicpath-path="JulianaChefWebsite.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {mobileMenuOpen && <SortableContainer dndKitId="fb6f8af1-ed4b-45fb-8cd5-22fe375a16a1" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-[#8B9B7F] border-t border-white/10" data-magicpath-id="12" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="8020d70a-560a-444f-97da-2976c9e28bb5" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" data-magicpath-id="13" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
              e.preventDefault();
              handleNavClick(item.href);
            }} className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="14" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>
            </SortableContainer>}
        </SortableContainer>

        {/* About Page Content */}
        <SortableContainer dndKitId="4cb446ca-957a-442a-b8d5-e6b19610ef7a" containerType="regular" prevTag="div" className="pt-16 sm:pt-20" data-magicpath-id="15" data-magicpath-path="JulianaChefWebsite.tsx">
          <AboutPage onNavigate={handleAboutNavigate} data-magicpath-id="16" data-magicpath-path="JulianaChefWebsite.tsx" />
        </SortableContainer>

        {/* Footer */}
        <SortableContainer dndKitId="83f4ede3-e9c9-483b-accb-848d35fd5a5c" containerType="regular" prevTag="footer" className="bg-[#8B9B7F] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" data-magicpath-id="17" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="f488ea45-d6bd-451d-a9fa-05bc98e1dd61" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="18" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="d17c17ba-b04e-4108-b779-14c0901d0cee" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="19" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="58daaf55-c5f3-4efc-b2ab-9f5aef6ac2c2" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="20" data-magicpath-path="JulianaChefWebsite.tsx">
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" data-magicpath-id="21" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
                <p className="text-white/80 text-xs sm:text-sm" data-magicpath-id="22" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
              </SortableContainer>
              <SortableContainer dndKitId="376467aa-0510-4782-9ccf-d9a471210f5b" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="23" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="24" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
                <SortableContainer dndKitId="9c71cce7-75cd-4ac6-b40c-2468db6e521e" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="25" data-magicpath-path="JulianaChefWebsite.tsx">
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
              <SortableContainer dndKitId="ac71d533-01a3-4377-b982-d8264c4dc752" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="36" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="37" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
                <SortableContainer dndKitId="1cf96c41-d54c-44f1-8cd1-5f0c5139477c" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="38" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="39" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="40" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="41" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="42" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="614199ea-6077-4f9a-8e91-f3152510dd37" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="43" data-magicpath-path="JulianaChefWebsite.tsx">
              <p data-magicpath-id="44" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  }

  // @return
  return <SortableContainer dndKitId="82a86dfa-896f-494a-ba16-51ae9e906924" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="45" data-magicpath-path="JulianaChefWebsite.tsx">
      {/* Mobile-First Header */}
      <SortableContainer dndKitId="6600d82b-f272-486c-9ad0-3e38a4864d18" containerType="regular" prevTag="motion.header" style={{
      opacity: headerOpacity
    }} className="fixed top-0 left-0 right-0 z-50 bg-[#8B9B7F]/95 backdrop-blur-sm" data-magicpath-id="46" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="f5608bc1-1d52-4836-87dd-ac30e0e2ab25" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="47" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="299e6da0-96c4-4031-944f-07b7553c732d" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="48" data-magicpath-path="JulianaChefWebsite.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="71a70cbb-f8f5-4c54-a48d-d876dde89d2d" containerType="regular" prevTag="button" onClick={() => document.getElementById('home')?.scrollIntoView({
            behavior: 'smooth'
          })} className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home" data-magicpath-id="49" data-magicpath-path="JulianaChefWebsite.tsx">
              <div className="text-white font-serif text-lg sm:text-xl" data-magicpath-id="50" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</div>
              <div className="text-white/80 text-xs sm:text-sm" data-magicpath-id="51" data-magicpath-path="JulianaChefWebsite.tsx">the vegan chef</div>
            </SortableContainer>

            {/* Desktop Navigation */}
            <SortableContainer dndKitId="bf919f84-5cc9-453b-9806-17bdb2371208" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" data-magicpath-id="52" data-magicpath-path="JulianaChefWebsite.tsx">
              {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
              e.preventDefault();
              handleNavClick(item.href);
            }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="53" data-magicpath-path="JulianaChefWebsite.tsx">
                  {item.name}
                </a>)}
            </SortableContainer>

            {/* Mobile Menu Button */}
            <SortableContainer dndKitId="a75db5b6-43c5-4a9d-92b0-d47a0c3574f0" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="54" data-magicpath-path="JulianaChefWebsite.tsx">
              {mobileMenuOpen ? <X className="w-6 h-6" data-magicpath-id="55" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" data-magicpath-id="56" data-magicpath-path="JulianaChefWebsite.tsx" />}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Mobile Menu */}
        {mobileMenuOpen && <SortableContainer dndKitId="faa201a3-2f9b-4bfb-babf-8a7ad93a9e19" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-[#8B9B7F] border-t border-white/10" data-magicpath-id="57" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="821c8311-2f77-4f65-a6b1-51f4ae07cb2b" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" data-magicpath-id="58" data-magicpath-path="JulianaChefWebsite.tsx">
              {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
            e.preventDefault();
            handleNavClick(item.href);
          }} className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="59" data-magicpath-path="JulianaChefWebsite.tsx">
                  {item.name}
                </a>)}
            </SortableContainer>
          </SortableContainer>}
      </SortableContainer>

      {/* Hero Section - Mobile First */}
      <SortableContainer dndKitId="f36142b8-f824-4a90-b91d-1fd46bbd07d6" containerType="regular" prevTag="section" id="home" className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden" data-magicpath-id="60" data-magicpath-path="JulianaChefWebsite.tsx">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80)',
        filter: 'brightness(0.7)'
      }} data-magicpath-id="61" data-magicpath-path="JulianaChefWebsite.tsx" />
        <SortableContainer dndKitId="5a794664-574e-4e13-bdbe-c8c2dd684b9f" containerType="regular" prevTag="div" className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl" data-magicpath-id="62" data-magicpath-path="JulianaChefWebsite.tsx">
          <motion.h1 data-magicpath-motion-tag="motion.h1" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 sm:mb-6 leading-tight" data-magicpath-id="63" data-magicpath-path="JulianaChefWebsite.tsx">
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
        }} className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4" data-magicpath-id="64" data-magicpath-path="JulianaChefWebsite.tsx">
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
        })} data-magicpath-id="65" data-magicpath-path="JulianaChefWebsite.tsx">
            Book Your Retreat Catering
          </motion.button>
        </SortableContainer>
      </SortableContainer>

      {/* About Section - Mobile First */}
      <SortableContainer dndKitId="d2e9fb92-c3d6-4c08-8edf-6e1bafe2feaa" containerType="regular" prevTag="section" id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" data-magicpath-id="66" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="fa2578c1-a77a-4279-afab-6cd621fd6006" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="67" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#2D2D2D]" data-magicpath-id="68" data-magicpath-path="JulianaChefWebsite.tsx">
            Meet Your Chef
          </h2>
          <SortableContainer dndKitId="0e4eec6b-3712-4560-b944-70cd49cf76d9" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center" data-magicpath-id="69" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="7b82d0e4-e715-46da-a656-65355818ec07" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} data-magicpath-id="70" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=600&q=80" alt="Chef Juliana" className="w-full rounded-lg shadow-lg" data-magicpath-id="71" data-magicpath-path="JulianaChefWebsite.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="bafcad55-1d47-4ed8-a8a8-b60ba84f69fe" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="space-y-4 sm:space-y-6" data-magicpath-id="72" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#8B9B7F]" data-magicpath-id="73" data-magicpath-path="JulianaChefWebsite.tsx">Hi, I'm Juliana!</h3>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-id="74" data-magicpath-path="JulianaChefWebsite.tsx">
                I'm a passionate plant-based chef with over 8 years of culinary experience. I built my business and brand on creating nourishing, delicious plant-based meals for wellness retreats around the world.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-id="75" data-magicpath-path="JulianaChefWebsite.tsx">
                What truly fuels my culinary passion is not just food itself but the transformative power it has to bring people together and foster genuine connections. I believe food has the unique ability to create shared experiences that inspire, heal, and unite us.
              </p>
              <button className="bg-[#8B9B7F] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-sm sm:text-base" onClick={() => setShowAboutPage(true)} data-magicpath-id="76" data-magicpath-path="JulianaChefWebsite.tsx">
                Read My Full Story
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Offerings Section - Mobile First */}
      <SortableContainer dndKitId="b645f2f4-9360-46d0-a781-be39b7797566" containerType="regular" prevTag="section" id="offerings" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" data-magicpath-id="77" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="b07e114b-5871-48a4-ad45-6805fb48ede4" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="78" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#8B9B7F]" data-magicpath-id="79" data-magicpath-path="JulianaChefWebsite.tsx">
            My Offerings
          </h2>

          {/* Retreat Catering */}
          <SortableContainer dndKitId="cfae22d9-8c12-42a5-8550-40b0405fd574" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20" data-magicpath-id="80" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="7d61b424-d0dc-4212-934d-ee06bdec58fd" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="space-y-4 sm:space-y-6" data-magicpath-id="81" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2D2D]" data-magicpath-id="82" data-magicpath-path="JulianaChefWebsite.tsx">Retreat & Event Catering</h3>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-id="83" data-magicpath-path="JulianaChefWebsite.tsx">
                Custom plant-based menus for retreats, and events across Ireland and the UK.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-id="84" data-magicpath-path="JulianaChefWebsite.tsx">
                Every dish is made with stunning presentation and extraordinary ingredients.
              </p>
              <button className="bg-[#8B9B7F] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-sm sm:text-base" data-magicpath-id="85" data-magicpath-path="JulianaChefWebsite.tsx">
                Find Out More
              </button>
            </SortableContainer>
            <SortableContainer dndKitId="f075e4d4-fa44-4d42-b4e3-91036f9da4bb" containerType="regular" prevTag="motion.div" initial={{
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
          }} data-magicpath-id="86" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80" alt="Gourmet plant-based dish" className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg" data-magicpath-id="87" data-magicpath-path="JulianaChefWebsite.tsx" />
            </SortableContainer>
          </SortableContainer>

          {/* Plant-Based Treats */}
          <SortableContainer dndKitId="6e37bbb6-a1e9-4121-bea3-1e343318e55c" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12" data-magicpath-id="88" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="9d37ca43-ff82-4fcc-9c33-4c70735408c9" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="md:order-1" data-magicpath-id="89" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" alt="Plant-based dessert" className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg" data-magicpath-id="90" data-magicpath-path="JulianaChefWebsite.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="8621f213-b352-4d83-9010-79f14aac5cfd" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="space-y-4 sm:space-y-6 md:order-2" data-magicpath-id="91" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2D2D]" data-magicpath-id="92" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Treats</h3>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-id="93" data-magicpath-path="JulianaChefWebsite.tsx">
                Fresh-baked, gluten-friendly, plant-based treats made to order just for you.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-id="94" data-magicpath-path="JulianaChefWebsite.tsx">
                Order Weekly Fridays 5am-9am. Collection in Dun Laoghaire or Weekly Pop-up Cake Stall.
              </p>
              <button className="bg-[#C17857] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#B06847] transition-colors font-medium text-sm sm:text-base" data-magicpath-id="95" data-magicpath-path="JulianaChefWebsite.tsx">
                See Treats Menu
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Treats & Bakes Section - Mobile First */}
      <SortableContainer dndKitId="03ac0fe1-3b06-4c1e-a90d-99a5bf50f663" containerType="regular" prevTag="section" id="treats" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" data-magicpath-id="96" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="a0f66f89-84c0-473c-8dfd-20811a2ef9c7" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="97" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#C17857]" data-magicpath-id="98" data-magicpath-path="JulianaChefWebsite.tsx">
            Treats & Bakes
          </h2>

          <SortableContainer dndKitId="c2fb893d-7646-4e2b-835b-c2c365f33b3d" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-16" data-magicpath-id="99" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="6858b091-aacc-495e-82f9-0ac851b27c96" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} data-magicpath-id="100" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" alt="Delicious plant-based treats" className="w-full rounded-lg shadow-lg" data-magicpath-id="101" data-magicpath-path="JulianaChefWebsite.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="6721f339-6f65-4a10-870b-85263223e5ee" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="space-y-4 sm:space-y-6" data-magicpath-id="102" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2D2D]" data-magicpath-id="103" data-magicpath-path="JulianaChefWebsite.tsx">
                Fresh-Baked Weekly Treats
              </h3>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-id="104" data-magicpath-path="JulianaChefWebsite.tsx">
                Indulge in my signature plant-based treats, freshly baked every week. From decadent brownies to fluffy cinnamon rolls, every treat is crafted with wholesome ingredients and lots of love.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-id="105" data-magicpath-path="JulianaChefWebsite.tsx">
                <strong data-magicpath-id="106" data-magicpath-path="JulianaChefWebsite.tsx">Order Window:</strong> Every Friday, 5am-9am<br data-magicpath-id="107" data-magicpath-path="JulianaChefWebsite.tsx" />
                <strong data-magicpath-id="108" data-magicpath-path="JulianaChefWebsite.tsx">Collection:</strong> Dun Laoghaire or Weekly Pop-up Cake Stall
              </p>
              <SortableContainer dndKitId="ce7074ba-92df-4ab3-a35e-80520457d882" containerType="regular" prevTag="div" className="space-y-3" data-magicpath-id="109" data-magicpath-path="JulianaChefWebsite.tsx">
                <SortableContainer dndKitId="4dae2d46-8862-46e6-90ab-997a0ec8913d" containerType="regular" prevTag="div" className="flex items-start space-x-2" data-magicpath-id="110" data-magicpath-path="JulianaChefWebsite.tsx">
                  <span className="text-[#C17857] text-lg" data-magicpath-id="111" data-magicpath-path="JulianaChefWebsite.tsx">✓</span>
                  <p className="text-[#4A4A4A] text-sm sm:text-base" data-magicpath-id="112" data-magicpath-path="JulianaChefWebsite.tsx">100% Plant-Based</p>
                </SortableContainer>
                <SortableContainer dndKitId="8f477e78-7a59-42b7-9655-a7810bace3fb" containerType="regular" prevTag="div" className="flex items-start space-x-2" data-magicpath-id="113" data-magicpath-path="JulianaChefWebsite.tsx">
                  <span className="text-[#C17857] text-lg" data-magicpath-id="114" data-magicpath-path="JulianaChefWebsite.tsx">✓</span>
                  <p className="text-[#4A4A4A] text-sm sm:text-base" data-magicpath-id="115" data-magicpath-path="JulianaChefWebsite.tsx">Gluten-Friendly Options</p>
                </SortableContainer>
                <SortableContainer dndKitId="d0b9f17a-2716-48d7-9aef-36036addc0c0" containerType="regular" prevTag="div" className="flex items-start space-x-2" data-magicpath-id="116" data-magicpath-path="JulianaChefWebsite.tsx">
                  <span className="text-[#C17857] text-lg" data-magicpath-id="117" data-magicpath-path="JulianaChefWebsite.tsx">✓</span>
                  <p className="text-[#4A4A4A] text-sm sm:text-base" data-magicpath-id="118" data-magicpath-path="JulianaChefWebsite.tsx">No Refined Sugars</p>
                </SortableContainer>
              </SortableContainer>
              <button className="bg-[#C17857] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#B06847] transition-colors font-medium text-sm sm:text-base" data-magicpath-id="119" data-magicpath-path="JulianaChefWebsite.tsx">
                View This Week's Menu
              </button>
            </SortableContainer>
          </SortableContainer>

          {/* Popular Treats Grid */}
          <SortableContainer dndKitId="34bedc32-75f2-4d37-8445-2bfba3594a3f" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" data-magicpath-id="120" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="1377cb01-ceb2-4aab-9b5e-1536c62c27d2" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow" data-magicpath-id="121" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80" alt="Chocolate brownies" className="w-full h-48 object-cover" data-magicpath-id="122" data-magicpath-path="JulianaChefWebsite.tsx" />
              <SortableContainer dndKitId="c6eda088-63dd-4481-ac68-6e158b4d177e" containerType="regular" prevTag="div" className="p-4 sm:p-6" data-magicpath-id="123" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="text-lg font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="124" data-magicpath-path="JulianaChefWebsite.tsx">Fudgy Brownies</h4>
                <p className="text-[#4A4A4A] text-sm" data-magicpath-id="125" data-magicpath-path="JulianaChefWebsite.tsx">
                  Rich, decadent, and impossibly fudgy. Made with premium dark chocolate and a secret ingredient.
                </p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="d4827761-1e20-442f-92c5-f113e8ddbda5" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow" data-magicpath-id="126" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80" alt="Cinnamon rolls" className="w-full h-48 object-cover" data-magicpath-id="127" data-magicpath-path="JulianaChefWebsite.tsx" />
              <SortableContainer dndKitId="9737f888-8d5d-49ea-bde4-db1109f5f811" containerType="regular" prevTag="div" className="p-4 sm:p-6" data-magicpath-id="128" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="text-lg font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="129" data-magicpath-path="JulianaChefWebsite.tsx">Cinnamon Rolls</h4>
                <p className="text-[#4A4A4A] text-sm" data-magicpath-id="130" data-magicpath-path="JulianaChefWebsite.tsx">
                  Soft, pillowy rolls swirled with cinnamon and topped with creamy glaze. Pure comfort in every bite.
                </p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="03272cb6-6c77-4f97-b166-08aec6e296ab" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow" data-magicpath-id="131" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80" alt="Cookies" className="w-full h-48 object-cover" data-magicpath-id="132" data-magicpath-path="JulianaChefWebsite.tsx" />
              <SortableContainer dndKitId="bf17072b-aa0a-4338-8c5d-667340166ec9" containerType="regular" prevTag="div" className="p-4 sm:p-6" data-magicpath-id="133" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="text-lg font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="134" data-magicpath-path="JulianaChefWebsite.tsx">Signature Cookies</h4>
                <p className="text-[#4A4A4A] text-sm" data-magicpath-id="135" data-magicpath-path="JulianaChefWebsite.tsx">
                  Crispy edges, chewy centers. From chocolate chip to oatmeal raisin, there's a cookie for everyone.
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Testimonials Section - Mobile First */}
      <SortableContainer dndKitId="7ea177e2-6928-4a9c-ab9d-8b7c3a76588a" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#8B9B7F]" data-magicpath-id="136" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="e297c477-fd94-437c-bffe-8f89fc895ed4" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="137" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-white" data-magicpath-id="138" data-magicpath-path="JulianaChefWebsite.tsx">
            What People Say
          </h2>
          <SortableContainer dndKitId="10f5da39-f4b5-4c75-9fa9-5d03b28e36d2" containerType="regular" prevTag="div" className="relative" data-magicpath-id="139" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="6d974a1d-373a-4fd6-bb14-aaf8d10682f3" containerType="regular" prevTag="motion.div" key={currentTestimonial} initial={{
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
          }} className="bg-white rounded-lg p-6 sm:p-8 md:p-12 shadow-xl" data-magicpath-id="140" data-magicpath-path="JulianaChefWebsite.tsx">
              <p className="text-[#4A4A4A] text-base sm:text-lg md:text-xl leading-relaxed mb-6 italic" data-magicpath-id="141" data-magicpath-path="JulianaChefWebsite.tsx">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <SortableContainer dndKitId="7ff4b5de-ed40-4dd5-8345-24a46ebc7e36" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="142" data-magicpath-path="JulianaChefWebsite.tsx">
                <SortableContainer dndKitId="1df6f997-811a-4e47-96e7-c2181128e86b" containerType="regular" prevTag="div" data-magicpath-id="143" data-magicpath-path="JulianaChefWebsite.tsx">
                  <p className="font-semibold text-[#2D2D2D] text-sm sm:text-base" data-magicpath-id="144" data-magicpath-path="JulianaChefWebsite.tsx">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-[#8B9B7F] text-xs sm:text-sm" data-magicpath-id="145" data-magicpath-path="JulianaChefWebsite.tsx">
                    {testimonials[currentTestimonial].location}
                  </p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Navigation Controls */}
            <SortableContainer dndKitId="7580b3d7-428e-4fd6-b015-50608a8b67c7" containerType="regular" prevTag="div" className="flex justify-center items-center mt-6 sm:mt-8 space-x-3 sm:space-x-4" data-magicpath-id="146" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="14e38b7a-f941-4d2f-9817-e5e341d8c1eb" containerType="regular" prevTag="button" onClick={prevTestimonial} className="bg-white text-[#8B9B7F] p-2 rounded-full hover:bg-[#F5F1E8] transition-colors" aria-label="Previous testimonial" data-magicpath-id="147" data-magicpath-path="JulianaChefWebsite.tsx">
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="148" data-magicpath-path="JulianaChefWebsite.tsx" />
              </SortableContainer>
              <div className="flex space-x-2" data-magicpath-id="149" data-magicpath-path="JulianaChefWebsite.tsx">
                {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentTestimonial(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentTestimonial ? 'bg-white' : 'bg-white/40'}`} aria-label={`Go to testimonial ${index + 1}`} data-magicpath-id="150" data-magicpath-path="JulianaChefWebsite.tsx" />)}
              </div>
              <SortableContainer dndKitId="ff001877-55b4-4515-9083-b965d9b3baee" containerType="regular" prevTag="button" onClick={nextTestimonial} className="bg-white text-[#8B9B7F] p-2 rounded-full hover:bg-[#F5F1E8] transition-colors" aria-label="Next testimonial" data-magicpath-id="151" data-magicpath-path="JulianaChefWebsite.tsx">
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="152" data-magicpath-path="JulianaChefWebsite.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs Section - Mobile First */}
      <SortableContainer dndKitId="55f1c962-a086-4551-ab29-226d853cf71a" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" data-magicpath-id="153" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="a25420b8-7d01-4a82-8685-920c13bfa43b" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="154" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#2D2D2D]" data-magicpath-id="155" data-magicpath-path="JulianaChefWebsite.tsx">
            FAQs
          </h2>
          <SortableContainer dndKitId="3140ff33-d738-413e-8fa8-53770f0d6612" containerType="collection" prevTag="div" className="space-y-3 sm:space-y-4" data-magicpath-id="156" data-magicpath-path="JulianaChefWebsite.tsx">
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
          }} className="bg-white rounded-lg shadow-sm overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="157" data-magicpath-path="JulianaChefWebsite.tsx">
                <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-[#F5F1E8] transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="158" data-magicpath-path="JulianaChefWebsite.tsx">
                  <span className="font-semibold text-[#2D2D2D] pr-4 text-sm sm:text-base" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:unknown" data-magicpath-id="159" data-magicpath-path="JulianaChefWebsite.tsx">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#8B9B7F] transition-transform flex-shrink-0 ${expandedFaq === index ? 'transform rotate-180' : ''}`} data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="160" data-magicpath-path="JulianaChefWebsite.tsx" />
                </button>
                {expandedFaq === index && <motion.div data-magicpath-motion-tag="motion.div" initial={{
              height: 0
            }} animate={{
              height: 'auto'
            }} exit={{
              height: 0
            }} transition={{
              duration: 0.3
            }} className="px-4 sm:px-6 pb-4 sm:pb-6" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="161" data-magicpath-path="JulianaChefWebsite.tsx">
                    <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:unknown" data-magicpath-id="162" data-magicpath-path="JulianaChefWebsite.tsx">{faq.answer}</p>
                  </motion.div>}
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Contact Section - Mobile First */}
      <SortableContainer dndKitId="5a0c94ae-f8a0-49d0-b9c1-707044b57e5c" containerType="regular" prevTag="section" id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" data-magicpath-id="163" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="9122870f-c094-4405-ba68-cdeee5909fd5" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="164" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-[#2D2D2D]" data-magicpath-id="165" data-magicpath-path="JulianaChefWebsite.tsx">
            Let's Work Together!
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#8B9B7F] mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4" data-magicpath-id="166" data-magicpath-path="JulianaChefWebsite.tsx">
            Food is how I show care. Let me be part of creating something meaningful for your retreat, event, or simply your week.
          </p>
          <button className="bg-[#8B9B7F] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-base sm:text-lg" data-magicpath-id="167" data-magicpath-path="JulianaChefWebsite.tsx">
            Get In Touch
          </button>
        </SortableContainer>
      </SortableContainer>

      {/* Footer - Mobile First */}
      <SortableContainer dndKitId="bab43126-9597-4704-bdda-c102c9a0a9ed" containerType="regular" prevTag="footer" className="bg-[#8B9B7F] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" data-magicpath-id="168" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="3734868b-f2dd-45b7-98d7-3dc777093a59" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="169" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="21dd1203-eb2e-4d0e-8326-aa3fa4b68308" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="170" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="de484100-dbfe-45b7-8470-f1be68e7cee7" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="171" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" data-magicpath-id="172" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
              <p className="text-white/80 text-xs sm:text-sm" data-magicpath-id="173" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
            </SortableContainer>
            <SortableContainer dndKitId="7f633057-5372-4433-8a2c-f5664b1b67c5" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="174" data-magicpath-path="JulianaChefWebsite.tsx">
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="175" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
              <SortableContainer dndKitId="618b6670-9b55-425f-aace-f77653817fdc" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="176" data-magicpath-path="JulianaChefWebsite.tsx">
                <li data-magicpath-id="177" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#home" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#home');
                }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="178" data-magicpath-path="JulianaChefWebsite.tsx">
                    Home
                  </a>
                </li>
                <li data-magicpath-id="179" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#about" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#about');
                }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="180" data-magicpath-path="JulianaChefWebsite.tsx">
                    About Juliana
                  </a>
                </li>
                <li data-magicpath-id="181" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#offerings" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#offerings');
                }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="182" data-magicpath-path="JulianaChefWebsite.tsx">
                    Retreat Catering
                  </a>
                </li>
                <li data-magicpath-id="183" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#treats" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#treats');
                }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="184" data-magicpath-path="JulianaChefWebsite.tsx">
                    Treats & Bakes
                  </a>
                </li>
                <li data-magicpath-id="185" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#contact" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="186" data-magicpath-path="JulianaChefWebsite.tsx">
                    Contact
                  </a>
                </li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="17731b4c-0a4f-43d9-922f-f050a45e7801" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="187" data-magicpath-path="JulianaChefWebsite.tsx">
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="188" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
              <SortableContainer dndKitId="2cd55cbf-d2a2-49c7-8d23-57598a70e67f" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="189" data-magicpath-path="JulianaChefWebsite.tsx">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="190" data-magicpath-path="JulianaChefWebsite.tsx">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="191" data-magicpath-path="JulianaChefWebsite.tsx" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="192" data-magicpath-path="JulianaChefWebsite.tsx">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="193" data-magicpath-path="JulianaChefWebsite.tsx" />
                </a>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="62a65341-9911-475e-a934-dfac7f2ed9b4" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="194" data-magicpath-path="JulianaChefWebsite.tsx">
            <p data-magicpath-id="195" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};