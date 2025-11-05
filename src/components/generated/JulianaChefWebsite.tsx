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
  name: 'Home',
  href: '#home',
  mpid: "4c9bb4fb-90c0-4f8c-8bac-90428cc52d38"
}, {
  name: 'About Juliana',
  href: '#about',
  mpid: "8498b4ff-c3f4-409b-b986-6d305a3e4de2"
}, {
  name: 'Retreat Catering',
  href: '#offerings',
  mpid: "4af46513-7992-4bc0-83c3-7baceea85e81"
}, {
  name: 'Treats & Bakes',
  href: '#treats',
  mpid: "341c538f-8d45-43d4-a12e-2003c2f797f6"
}, {
  name: 'Contact',
  href: '#contact',
  mpid: "6a8a5501-ea05-4000-9c41-14f70dbc7304"
}] as any[];
const testimonials = [{
  quote: "Juliana transformed our retreat experience. Her plant-based dishes were not only delicious but beautifully presented. Our guests couldn't stop raving about the food!",
  author: 'Sophie Martinez',
  location: 'Retreat Host, Portugal',
  mpid: "8693d916-15d8-42b6-bf1a-86534769a863"
}, {
  quote: "Working with Chef Juliana was incredible. She brought creativity and passion to every meal, making our wellness retreat truly unforgettable.",
  author: 'Marcus Chen',
  location: 'Wellness Coordinator, Bali',
  mpid: "4da050ba-1d9c-4d31-9296-3d8f7df43e79"
}, {
  quote: "The treats Juliana prepared were absolutely divine. Gluten-free, plant-based perfection that even our non-vegan guests adored.",
  author: 'Emma Thompson',
  location: 'Event Planner, UK',
  mpid: "a1f40797-5c80-41ab-82f1-5e495c28dfd5"
}] as any[];
const faqs = [{
  question: "I'm based in the UK. Can you cater my retreat?",
  answer: "Yes! I cater retreats and events across the world and the UK. Travel costs may apply for certain locations.",
  mpid: "1baf86c2-4aa7-4772-a3a3-fe7d96a59abe"
}, {
  question: "How far ahead should I book your catering service?",
  answer: "I recommend booking at least 2-3 months in advance to ensure availability, especially for retreat seasons.",
  mpid: "e88a7cb1-22ec-401d-b5fc-c7ca46e8162f"
}, {
  question: "What if my guests have lots of different dietary needs?",
  answer: "I specialize in accommodating various dietary requirements. All my dishes are plant-based and can be adapted for allergies and preferences.",
  mpid: "e1497acc-8e17-43a4-9927-487e01715421"
}, {
  question: "How do I know everything is vegan if I can't see it being made?",
  answer: "I provide full transparency with ingredient lists and preparation methods. You're welcome to observe the cooking process.",
  mpid: "cdf5ec9c-9223-483a-a9a9-a00e97afc307"
}, {
  question: "I work a lot and eat out. Are your treats actually healthy?",
  answer: "Yes! My treats use wholesome, natural ingredients without refined sugars. They're designed to nourish while satisfying your sweet tooth.",
  mpid: "f9e7e88a-3481-467f-88b0-a712171d3600"
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
    return <SortableContainer dndKitId="7d7ad481-9755-4190-94bf-7484524e003f" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="0" data-magicpath-path="JulianaChefWebsite.tsx">
        {/* Header */}
        <SortableContainer dndKitId="64ab4218-8fa5-4c00-8a89-dbd870d899fd" containerType="regular" prevTag="motion.header" style={{
        opacity: headerOpacity
      }} className="fixed top-0 left-0 right-0 z-50 bg-[#5e7155]/95 backdrop-blur-sm" data-magicpath-id="1" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="773593b7-67aa-4dd9-9179-233758ea79df" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="2" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="b3099d32-a8b6-40cc-92ae-81a657bc2871" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="3" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="6af79716-0fec-4413-a42e-62aa04b4b99b" containerType="regular" prevTag="button" onClick={() => {
              setShowContactPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home" data-magicpath-id="4" data-magicpath-path="JulianaChefWebsite.tsx">
                <div className="text-white font-serif text-lg sm:text-xl" data-magicpath-id="5" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</div>
                <div className="text-white/80 text-xs sm:text-sm" data-magicpath-id="6" data-magicpath-path="JulianaChefWebsite.tsx">the vegan chef</div>
              </SortableContainer>

              <SortableContainer dndKitId="f3569e40-15c7-44d8-976d-eb975e32a3f6" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" data-magicpath-id="7" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="8" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>

              <SortableContainer dndKitId="d4426746-4e2c-458e-9afd-77ad2299fbe2" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="9" data-magicpath-path="JulianaChefWebsite.tsx">
                {mobileMenuOpen ? <X className="w-6 h-6" data-magicpath-id="10" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" data-magicpath-id="11" data-magicpath-path="JulianaChefWebsite.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {mobileMenuOpen && <SortableContainer dndKitId="8ed3d15d-7830-4a40-925b-31523850f845" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-[#5e7155] border-t border-white/10" data-magicpath-id="12" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="d3f45985-84c8-4280-ad30-3a2af2d0ddd6" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" data-magicpath-id="13" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
              e.preventDefault();
              handleNavClick(item.href);
            }} className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="14" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>
            </SortableContainer>}
        </SortableContainer>

        {/* Contact Page Content */}
        <SortableContainer dndKitId="d8b479dc-f947-419b-8f69-6b344f21099b" containerType="regular" prevTag="div" className="pt-16 sm:pt-20" data-magicpath-id="15" data-magicpath-path="JulianaChefWebsite.tsx">
          <ContactPage onNavigate={handleContactNavigate} data-magicpath-id="16" data-magicpath-path="JulianaChefWebsite.tsx" />
        </SortableContainer>

        {/* Footer */}
        <SortableContainer dndKitId="9a4166ff-0c95-4960-af03-177900367ca0" containerType="regular" prevTag="footer" className="bg-[#5e7155] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" data-magicpath-id="17" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="fc521402-ef26-4050-91bc-8b05899b55fd" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="18" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="2a4f5ae9-e40a-4591-b266-de8af271f334" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="19" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="a1a8b3f9-a227-4f3b-846e-0e6fd3ba052d" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="20" data-magicpath-path="JulianaChefWebsite.tsx">
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" data-magicpath-id="21" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
                <p className="text-white/80 text-xs sm:text-sm" data-magicpath-id="22" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
              </SortableContainer>
              <SortableContainer dndKitId="1e78db6b-d2e2-4b03-ba7e-5eee387c3c48" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="23" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="24" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
                <SortableContainer dndKitId="c0626a42-94cd-4d6e-8dda-c05ca465ea52" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="25" data-magicpath-path="JulianaChefWebsite.tsx">
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
              <SortableContainer dndKitId="7172453d-0643-4ac0-bc52-bbe4a96c33de" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="36" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="37" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
                <SortableContainer dndKitId="50dc4caf-aa6f-437c-bfa6-c5c3e30d7889" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="38" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="39" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="40" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="41" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="42" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="8306226e-c772-40e2-9dcf-b0162f485d37" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="43" data-magicpath-path="JulianaChefWebsite.tsx">
              <p data-magicpath-id="44" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  }

  // If showing Treats & Bakes page, render it with header and footer
  if (showTreatsBakesPage) {
    return <SortableContainer dndKitId="920d0c7b-8ad5-4aad-a643-4fd3bde7264c" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="45" data-magicpath-path="JulianaChefWebsite.tsx">
        {/* Header */}
        <SortableContainer dndKitId="717dbc0b-6937-47b3-9f1b-565a63638822" containerType="regular" prevTag="motion.header" style={{
        opacity: headerOpacity
      }} className="fixed top-0 left-0 right-0 z-50 bg-[#5e7155]/95 backdrop-blur-sm" data-magicpath-id="46" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="28dc0726-ac82-44ae-b16b-84943dc21454" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="47" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="abfac378-8fe4-4157-a462-41ec9ddff354" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="48" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="20413e1b-b20c-4fd2-b7cf-02fcd804fc1d" containerType="regular" prevTag="button" onClick={() => {
              setShowTreatsBakesPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home" data-magicpath-id="49" data-magicpath-path="JulianaChefWebsite.tsx">
                <div className="text-white font-serif text-lg sm:text-xl" data-magicpath-id="50" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</div>
                <div className="text-white/80 text-xs sm:text-sm" data-magicpath-id="51" data-magicpath-path="JulianaChefWebsite.tsx">the vegan chef</div>
              </SortableContainer>

              <SortableContainer dndKitId="d8e95b2a-478a-4693-a56a-bd2d4bc31e0d" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" data-magicpath-id="52" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="53" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>

              <SortableContainer dndKitId="09def140-ac12-4927-8acb-970c95d13185" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="54" data-magicpath-path="JulianaChefWebsite.tsx">
                {mobileMenuOpen ? <X className="w-6 h-6" data-magicpath-id="55" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" data-magicpath-id="56" data-magicpath-path="JulianaChefWebsite.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {mobileMenuOpen && <SortableContainer dndKitId="7ad3a54a-b7be-4dec-915c-e82eaa7fbfa4" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-[#5e7155] border-t border-white/10" data-magicpath-id="57" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="97c49858-aa9d-4da6-b9f4-06c308a9f8c1" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" data-magicpath-id="58" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
              e.preventDefault();
              handleNavClick(item.href);
            }} className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="59" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>
            </SortableContainer>}
        </SortableContainer>

        {/* Treats & Bakes Page Content */}
        <SortableContainer dndKitId="6fb9dcf7-9156-4570-8d39-49e381de8434" containerType="regular" prevTag="div" className="pt-16 sm:pt-20" data-magicpath-id="60" data-magicpath-path="JulianaChefWebsite.tsx">
          <TreatsBakesPage onNavigate={handleTreatsNavigate} data-magicpath-id="61" data-magicpath-path="JulianaChefWebsite.tsx" />
        </SortableContainer>

        {/* Footer */}
        <SortableContainer dndKitId="3d386852-61e7-438f-9805-f3d355678306" containerType="regular" prevTag="footer" className="bg-[#5e7155] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" data-magicpath-id="62" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="938c8558-2323-4b9b-90af-c6a195639055" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="63" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="18e39d22-6981-4af7-9388-9fbb7a66f1dc" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="64" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="4fc605ab-ede5-4de0-a473-b995d4336408" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="65" data-magicpath-path="JulianaChefWebsite.tsx">
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" data-magicpath-id="66" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
                <p className="text-white/80 text-xs sm:text-sm" data-magicpath-id="67" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
              </SortableContainer>
              <SortableContainer dndKitId="dd874c15-7767-417b-84fb-aa0cef34df31" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="68" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="69" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
                <SortableContainer dndKitId="325e3da4-dc86-4612-8b69-0483759bbc08" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="70" data-magicpath-path="JulianaChefWebsite.tsx">
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
              <SortableContainer dndKitId="a8a89845-5777-4837-a0dd-4b766860b9af" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="81" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="82" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
                <SortableContainer dndKitId="e0d20630-b2de-41e8-9fbb-08e73c07c485" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="83" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="84" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="85" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="86" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="87" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="e6d69544-5c35-4885-989b-b413ae36bbf4" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="88" data-magicpath-path="JulianaChefWebsite.tsx">
              <p data-magicpath-id="89" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  }

  // If showing Retreat Catering page, render it with header and footer
  if (showRetreatCateringPage) {
    return <SortableContainer dndKitId="98e4fe84-a015-4347-a487-a7b03ed61c7b" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="90" data-magicpath-path="JulianaChefWebsite.tsx">
        {/* Header */}
        <SortableContainer dndKitId="39bbc3cf-0e85-459b-abb5-fe50840673ae" containerType="regular" prevTag="motion.header" style={{
        opacity: headerOpacity
      }} className="fixed top-0 left-0 right-0 z-50 bg-[#5e7155]/95 backdrop-blur-sm" data-magicpath-id="91" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="0b535003-d6b4-4464-9cd0-07beb6faa326" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="92" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="6931e38f-262d-48cd-8dcb-7e0e9ee313c3" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="93" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="8a20c29f-3f8e-4159-95ea-803cc686b45d" containerType="regular" prevTag="button" onClick={() => {
              setShowRetreatCateringPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home" data-magicpath-id="94" data-magicpath-path="JulianaChefWebsite.tsx">
                <div className="text-white font-serif text-lg sm:text-xl" data-magicpath-id="95" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</div>
                <div className="text-white/80 text-xs sm:text-sm" data-magicpath-id="96" data-magicpath-path="JulianaChefWebsite.tsx">the vegan chef</div>
              </SortableContainer>

              <SortableContainer dndKitId="fde2a53e-5629-4718-9b89-b5154ae22c54" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" data-magicpath-id="97" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="98" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>

              <SortableContainer dndKitId="063d33a6-be45-4ebf-acc2-b157e4ccecb2" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="99" data-magicpath-path="JulianaChefWebsite.tsx">
                {mobileMenuOpen ? <X className="w-6 h-6" data-magicpath-id="100" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" data-magicpath-id="101" data-magicpath-path="JulianaChefWebsite.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {mobileMenuOpen && <SortableContainer dndKitId="e1120612-5e9f-4547-ba82-33b12473ae7c" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-[#5e7155] border-t border-white/10" data-magicpath-id="102" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="fd38832c-b30f-46e7-8b46-8ed2ec939ec2" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" data-magicpath-id="103" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
              e.preventDefault();
              handleNavClick(item.href);
            }} className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="104" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>
            </SortableContainer>}
        </SortableContainer>

        {/* Retreat Catering Page Content */}
        <SortableContainer dndKitId="058dee40-3504-48f0-8663-8fb44f4582f5" containerType="regular" prevTag="div" className="pt-16 sm:pt-20" data-magicpath-id="105" data-magicpath-path="JulianaChefWebsite.tsx">
          <RetreatCateringPage onNavigate={handleRetreatNavigate} data-magicpath-id="106" data-magicpath-path="JulianaChefWebsite.tsx" />
        </SortableContainer>

        {/* Footer */}
        <SortableContainer dndKitId="4146e811-e463-4f6d-af14-f3ad43f4a467" containerType="regular" prevTag="footer" className="bg-[#5e7155] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" data-magicpath-id="107" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="061500f4-6955-42d4-a720-f1f7e4224cb2" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="108" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="482e3830-3138-46e9-9bcf-d659281f05c2" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="109" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="409621fb-462c-4a00-8cf5-eab30eb1fb10" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="110" data-magicpath-path="JulianaChefWebsite.tsx">
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" data-magicpath-id="111" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
                <p className="text-white/80 text-xs sm:text-sm" data-magicpath-id="112" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
              </SortableContainer>
              <SortableContainer dndKitId="2c18c0d9-c221-4911-bbd5-d7e21aa2d733" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="113" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="114" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
                <SortableContainer dndKitId="493eec5e-d8f0-41e5-89c6-6ec5d8ca41ae" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="115" data-magicpath-path="JulianaChefWebsite.tsx">
                  <li data-magicpath-id="116" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#home" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#home');
                  }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="117" data-magicpath-path="JulianaChefWebsite.tsx">
                      Home
                    </a>
                  </li>
                  <li data-magicpath-id="118" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#about" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#about');
                  }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="119" data-magicpath-path="JulianaChefWebsite.tsx">
                      About Juliana
                    </a>
                  </li>
                  <li data-magicpath-id="120" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#offerings" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#offerings');
                  }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="121" data-magicpath-path="JulianaChefWebsite.tsx">
                      Retreat Catering
                    </a>
                  </li>
                  <li data-magicpath-id="122" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#treats" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#treats');
                  }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="123" data-magicpath-path="JulianaChefWebsite.tsx">
                      Treats & Bakes
                    </a>
                  </li>
                  <li data-magicpath-id="124" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#contact" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="125" data-magicpath-path="JulianaChefWebsite.tsx">
                      Contact
                    </a>
                  </li>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="f60922b2-7e35-4232-b284-2f6fb93e5980" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="126" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="127" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
                <SortableContainer dndKitId="a2a70b3c-360a-4957-8e9d-7808e7d39c84" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="128" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="129" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="130" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="131" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="132" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="15ce78c8-7f03-417a-9b07-7074ff87cc70" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="133" data-magicpath-path="JulianaChefWebsite.tsx">
              <p data-magicpath-id="134" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  }

  // If showing About page, render it with header and footer
  if (showAboutPage) {
    return <SortableContainer dndKitId="8b14b432-c9e3-45b8-8d11-f1eaa82dd2bc" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="135" data-magicpath-path="JulianaChefWebsite.tsx">
        {/* Header */}
        <SortableContainer dndKitId="4108cb88-fac2-4a07-8bc3-263d54ad53f5" containerType="regular" prevTag="motion.header" style={{
        opacity: headerOpacity
      }} className="fixed top-0 left-0 right-0 z-50 bg-[#5e7155]/95 backdrop-blur-sm" data-magicpath-id="136" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="eff56917-1a84-4e35-9b5f-dd48ca582d83" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="137" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="6aac2e9d-4c48-4c41-80e2-69765b3451ba" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="138" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="9b4ecc50-6ea2-4920-afa6-05a2d7588fff" containerType="regular" prevTag="button" onClick={() => {
              setShowAboutPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home" data-magicpath-id="139" data-magicpath-path="JulianaChefWebsite.tsx">
                <div className="text-white font-serif text-lg sm:text-xl" data-magicpath-id="140" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</div>
                <div className="text-white/80 text-xs sm:text-sm" data-magicpath-id="141" data-magicpath-path="JulianaChefWebsite.tsx">the vegan chef</div>
              </SortableContainer>

              <SortableContainer dndKitId="83374ee3-bee6-47ef-ad36-f785350d6cf2" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" data-magicpath-id="142" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="143" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>

              <SortableContainer dndKitId="4ac8370e-8b12-4321-bc54-db67b2a95024" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="144" data-magicpath-path="JulianaChefWebsite.tsx">
                {mobileMenuOpen ? <X className="w-6 h-6" data-magicpath-id="145" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" data-magicpath-id="146" data-magicpath-path="JulianaChefWebsite.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {mobileMenuOpen && <SortableContainer dndKitId="38e3994d-b4f6-4327-9934-355e608a0726" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-[#5e7155] border-t border-white/10" data-magicpath-id="147" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="13890d0c-be79-40c5-8316-0bbae70a901d" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" data-magicpath-id="148" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
              e.preventDefault();
              handleNavClick(item.href);
            }} className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="149" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>
            </SortableContainer>}
        </SortableContainer>

        {/* About Page Content */}
        <SortableContainer dndKitId="0c9e8bca-8582-4b63-836f-76df03daf568" containerType="regular" prevTag="div" className="pt-16 sm:pt-20" data-magicpath-id="150" data-magicpath-path="JulianaChefWebsite.tsx">
          <AboutPage onNavigate={handleAboutNavigate} data-magicpath-id="151" data-magicpath-path="JulianaChefWebsite.tsx" />
        </SortableContainer>

        {/* Footer */}
        <SortableContainer dndKitId="e5d94de2-3790-4b4e-a9c3-e89dbfa5a35a" containerType="regular" prevTag="footer" className="bg-[#5e7155] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" data-magicpath-id="152" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="343460f7-5a12-40f7-9e24-0a5c8c245906" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="153" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="59fe3d1c-4342-41f2-920b-35920ae0cf6c" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="154" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="ecc24d1a-f518-4e43-b703-bd1d7466aed2" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="155" data-magicpath-path="JulianaChefWebsite.tsx">
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" data-magicpath-id="156" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
                <p className="text-white/80 text-xs sm:text-sm" data-magicpath-id="157" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
              </SortableContainer>
              <SortableContainer dndKitId="368d683f-03fe-4a1c-bbf6-5d1703e45fd5" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="158" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="159" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
                <SortableContainer dndKitId="1234b030-c5de-4782-9f1e-62cb336b5c8c" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="160" data-magicpath-path="JulianaChefWebsite.tsx">
                  <li data-magicpath-id="161" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#home" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#home');
                  }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="162" data-magicpath-path="JulianaChefWebsite.tsx">
                      Home
                    </a>
                  </li>
                  <li data-magicpath-id="163" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#about" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#about');
                  }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="164" data-magicpath-path="JulianaChefWebsite.tsx">
                      About Juliana
                    </a>
                  </li>
                  <li data-magicpath-id="165" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#offerings" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#offerings');
                  }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="166" data-magicpath-path="JulianaChefWebsite.tsx">
                      Retreat Catering
                    </a>
                  </li>
                  <li data-magicpath-id="167" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#treats" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#treats');
                  }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="168" data-magicpath-path="JulianaChefWebsite.tsx">
                      Treats & Bakes
                    </a>
                  </li>
                  <li data-magicpath-id="169" data-magicpath-path="JulianaChefWebsite.tsx">
                    <a href="#contact" onClick={e => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="170" data-magicpath-path="JulianaChefWebsite.tsx">
                      Contact
                    </a>
                  </li>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="81d9a9b2-0620-46c1-80f5-36fa9041815e" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="171" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="172" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
                <SortableContainer dndKitId="145cff07-b26e-4f9e-b81d-09501a308f50" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="173" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="174" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="175" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="176" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="177" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="3c2a0b1b-a398-4dd5-84b0-f650ad459a46" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="178" data-magicpath-path="JulianaChefWebsite.tsx">
              <p data-magicpath-id="179" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  }

  // @return
  return <SortableContainer dndKitId="f3c4a3ac-7ca8-4baf-b085-285cfe52080a" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="180" data-magicpath-path="JulianaChefWebsite.tsx">
      {/* Mobile-First Header */}
      <SortableContainer dndKitId="e3530f27-6f17-4249-9a45-724a084543f4" containerType="regular" prevTag="motion.header" style={{
      opacity: headerOpacity
    }} className="fixed top-0 left-0 right-0 z-50 bg-[#5e7155]/95 backdrop-blur-sm" data-magicpath-id="181" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="cf39213c-0785-424b-af53-9fdb15d06c40" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="182" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="e9237f3a-0ae3-4b97-bb31-be8bb9e4938c" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="183" data-magicpath-path="JulianaChefWebsite.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="a860cde9-a2fe-4002-b4f8-a3c41e4f43f2" containerType="regular" prevTag="button" onClick={() => document.getElementById('home')?.scrollIntoView({
            behavior: 'smooth'
          })} className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home" data-magicpath-id="184" data-magicpath-path="JulianaChefWebsite.tsx">
              <div className="text-white font-serif text-lg sm:text-xl" style={{
              color: "#fcf2e3"
            }} data-magicpath-id="185" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</div>
              <div className="text-white/80 text-xs sm:text-sm" style={{
              color: "#fcf2e3"
            }} data-magicpath-id="186" data-magicpath-path="JulianaChefWebsite.tsx">the vegan chef</div>
            </SortableContainer>

            {/* Desktop Navigation */}
            <SortableContainer dndKitId="325af310-0c26-4d9a-bb89-fbd06017c7e0" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" data-magicpath-id="187" data-magicpath-path="JulianaChefWebsite.tsx">
              {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
              e.preventDefault();
              handleNavClick(item.href);
            }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" style={{
              color: "#fcf2e3"
            }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="188" data-magicpath-path="JulianaChefWebsite.tsx">
                  {item.name}
                </a>)}
            </SortableContainer>

            {/* Mobile Menu Button */}
            <SortableContainer dndKitId="da50c41b-399b-47b2-94a8-ecf05a893d68" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="189" data-magicpath-path="JulianaChefWebsite.tsx">
              {mobileMenuOpen ? <X className="w-6 h-6" data-magicpath-id="190" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" data-magicpath-id="191" data-magicpath-path="JulianaChefWebsite.tsx" />}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Mobile Menu */}
        {mobileMenuOpen && <SortableContainer dndKitId="37d56e8b-ce40-407f-bd2c-661819410d0e" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-[#5e7155] border-t border-white/10" data-magicpath-id="192" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="a4a24964-dd11-4008-827f-bc62e6d77a98" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" data-magicpath-id="193" data-magicpath-path="JulianaChefWebsite.tsx">
              {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
            e.preventDefault();
            handleNavClick(item.href);
          }} className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="194" data-magicpath-path="JulianaChefWebsite.tsx">
                  {item.name}
                </a>)}
            </SortableContainer>
          </SortableContainer>}
      </SortableContainer>

      {/* Hero Section - Mobile First */}
      <SortableContainer dndKitId="97219457-6f19-4ac2-8b39-c5ebce5abe59" containerType="regular" prevTag="section" id="home" className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden" data-magicpath-id="195" data-magicpath-path="JulianaChefWebsite.tsx">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        filter: 'brightness(0.7)',
        backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/300600264317087744/assets/665cd21b-9e06-4fcc-8e44-61ef845fae0e.png)",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "repeat",
        opacity: "1"
      }} data-magicpath-id="196" data-magicpath-path="JulianaChefWebsite.tsx" />
        <SortableContainer dndKitId="75440e39-b20e-4d38-9c79-25615c792a9d" containerType="regular" prevTag="div" className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl" data-magicpath-id="197" data-magicpath-path="JulianaChefWebsite.tsx">
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
        }} data-magicpath-id="198" data-magicpath-path="JulianaChefWebsite.tsx">
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
          color: "#fcf2e3"
        }} data-magicpath-id="199" data-magicpath-path="JulianaChefWebsite.tsx">
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
          color: "#fcf2e3"
        }} data-magicpath-id="200" data-magicpath-path="JulianaChefWebsite.tsx">
            Book Your Retreat Catering
          </motion.button>
        </SortableContainer>
      </SortableContainer>

      {/* About Section - Mobile First */}
      <SortableContainer dndKitId="69cdf8c0-4200-4cd1-876f-1e1b536f22c6" containerType="regular" prevTag="section" id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" style={{
      background: "#fcf2e3"
    }} data-magicpath-id="201" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="c341ecbb-7fc2-4c85-aa33-4bd35e0d97bb" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="202" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#2D2D2D]" style={{
          color: "#404d3a"
        }} data-magicpath-id="203" data-magicpath-path="JulianaChefWebsite.tsx">
            Meet Your Chef
          </h2>
          <SortableContainer dndKitId="444c32dc-c141-422d-8a30-49e2c407c95a" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center" data-magicpath-id="204" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="9bd65aea-d9b3-47bf-b2dc-e87be96dceae" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} data-magicpath-id="205" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/300600264317087744/assets/14f8bd6c-f085-44f9-b974-e2b94bdd0564.png" alt="Chef Juliana" className="w-full rounded-lg shadow-lg" style={{
              objectFit: "fill",
              objectPosition: "50% 50%",
              opacity: "1"
            }} data-magicpath-id="206" data-magicpath-path="JulianaChefWebsite.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="ccf58cd8-ec39-4c4f-9374-64ee713a0570" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="space-y-4 sm:space-y-6" data-magicpath-id="207" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#5e7155]" data-magicpath-id="208" data-magicpath-path="JulianaChefWebsite.tsx">Hi, I'm Juliana!</h3>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-id="209" data-magicpath-path="JulianaChefWebsite.tsx">
                I'm a passionate plant-based chef with over 8 years of culinary experience. I built my business and brand on creating nourishing, delicious plant-based meals for wellness retreats around the world.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-id="210" data-magicpath-path="JulianaChefWebsite.tsx">
                What truly fuels my culinary passion is not just food itself but the transformative power it has to bring people together and foster genuine connections. I believe food has the unique ability to create shared experiences that inspire, heal, and unite us.
              </p>
              <button className="bg-[#5e7155] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-sm sm:text-base" onClick={() => setShowAboutPage(true)} data-magicpath-id="211" data-magicpath-path="JulianaChefWebsite.tsx">
                Read My Full Story
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Offerings Section - Mobile First */}
      <SortableContainer dndKitId="0f20238c-acb5-49ee-9e50-e0dd01590c97" containerType="regular" prevTag="section" id="offerings" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" data-magicpath-id="212" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="f6a5d19d-eb17-457a-b1f0-ae3f9c6fa21f" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="213" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#5e7155]" style={{
          color: "#c76942"
        }} data-magicpath-id="214" data-magicpath-path="JulianaChefWebsite.tsx">
            My Offerings
          </h2>

          {/* Retreat Catering */}
          <SortableContainer dndKitId="0480f5ed-7bc9-43ef-b5f8-b396f2e8f549" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20" data-magicpath-id="215" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="9f5222fe-2856-4c87-94ad-8b3a25f38c7e" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="space-y-4 sm:space-y-6" data-magicpath-id="216" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2D2D]" style={{
              color: "#404d3a"
            }} data-magicpath-id="217" data-magicpath-path="JulianaChefWebsite.tsx">Retreat & Event Catering</h3>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" style={{
              color: "#404d3a"
            }} data-magicpath-id="218" data-magicpath-path="JulianaChefWebsite.tsx">
                Custom plant-based menus for retreats, and events across Ireland and the UK.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" style={{
              color: "#404d3a"
            }} data-magicpath-id="219" data-magicpath-path="JulianaChefWebsite.tsx">
                Every dish is made with stunning presentation and extraordinary ingredients.
              </p>
              <button className="bg-[#5e7155] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-sm sm:text-base" onClick={() => {
              setShowRetreatCateringPage(true);
              setShowAboutPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} style={{
              background: "#c76942"
            }} data-magicpath-id="220" data-magicpath-path="JulianaChefWebsite.tsx">
                Find Out More
              </button>
            </SortableContainer>
            <SortableContainer dndKitId="68011f8a-5970-4615-9f95-a662fd75c225" containerType="regular" prevTag="motion.div" initial={{
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
          }} data-magicpath-id="221" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/300600264317087744/assets/f7d14c4e-9317-48a6-b706-edc843541fea.png" alt="Gourmet plant-based dish" className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg" style={{
              objectFit: "cover",
              objectPosition: "bottom",
              opacity: "1"
            }} data-magicpath-id="222" data-magicpath-path="JulianaChefWebsite.tsx" />
            </SortableContainer>
          </SortableContainer>

          {/* Plant-Based Treats */}
          <SortableContainer dndKitId="4570a129-a7ff-4c8a-8393-3735d3d2abb4" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12" data-magicpath-id="223" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="02e9c0f6-7330-485c-9ed5-c0f8a5be3c31" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="md:order-1" data-magicpath-id="224" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/300600264317087744/assets/29367085-1af0-41c6-a000-7e7ffe3ff643.jpg" alt="Plant-based dessert" className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg" style={{
              objectFit: "cover",
              objectPosition: "50% 50%",
              opacity: "1"
            }} data-magicpath-id="225" data-magicpath-path="JulianaChefWebsite.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="ed345a63-8ff4-41a1-89ec-a521fb63e3c6" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="space-y-4 sm:space-y-6 md:order-2" data-magicpath-id="226" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2D2D]" style={{
              color: "#404d3a"
            }} data-magicpath-id="227" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Treats</h3>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" style={{
              color: "#404d3a"
            }} data-magicpath-id="228" data-magicpath-path="JulianaChefWebsite.tsx">
                Fresh-baked, gluten-friendly, plant-based treats made to order just for you.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" style={{
              color: "#404d3a"
            }} data-magicpath-id="229" data-magicpath-path="JulianaChefWebsite.tsx">
                Order Weekly Fridays 5am-9am. Collection in Dun Laoghaire or Weekly Pop-up Cake Stall.
              </p>
              <button className="bg-[#5e7155] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-sm sm:text-base" onClick={() => {
              setShowTreatsBakesPage(true);
              setShowAboutPage(false);
              setShowRetreatCateringPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} style={{
              background: "#c76942"
            }} data-magicpath-id="230" data-magicpath-path="JulianaChefWebsite.tsx">
                See Treats Menu
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Treats & Bakes Section - Mobile First */}
      <SortableContainer dndKitId="e270b7a2-8463-40f5-8861-bd8505bfe6c4" containerType="regular" prevTag="section" id="treats" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" style={{
      background: "#fcf2e3",
      display: "none"
    }} data-magicpath-id="231" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="e340ba89-fb43-4d27-b29f-8757471f6e33" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" style={{
        display: "none"
      }} data-magicpath-id="232" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#5e7155]" style={{
          display: "none"
        }} data-magicpath-id="233" data-magicpath-path="JulianaChefWebsite.tsx">
            Treats & Bakes
          </h2>

          <SortableContainer dndKitId="2e081602-e406-45ba-abd7-9911e73e39d7" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" data-magicpath-id="234" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="7afe26e4-0894-45e2-8d8e-428560696f3c" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow" data-magicpath-id="235" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80" alt="Chocolate brownies" className="w-full h-48 object-cover" data-magicpath-id="236" data-magicpath-path="JulianaChefWebsite.tsx" />
              <SortableContainer dndKitId="75ba4ed8-0b0a-44ee-95b5-cdaea353aafd" containerType="regular" prevTag="div" className="p-4 sm:p-6" data-magicpath-id="237" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="text-lg font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="238" data-magicpath-path="JulianaChefWebsite.tsx">Fudgy Brownies</h4>
                <p className="text-[#4A4A4A] text-sm" data-magicpath-id="239" data-magicpath-path="JulianaChefWebsite.tsx">
                  Rich, decadent, and impossibly fudgy. Made with premium dark chocolate and a secret ingredient.
                </p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="15b1c585-efb1-482f-8738-8df1d0bd350c" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow" data-magicpath-id="240" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80" alt="Cinnamon rolls" className="w-full h-48 object-cover" data-magicpath-id="241" data-magicpath-path="JulianaChefWebsite.tsx" />
              <SortableContainer dndKitId="a83dcfd4-9ed5-4075-a9ee-853a05eb3e45" containerType="regular" prevTag="div" className="p-4 sm:p-6" data-magicpath-id="242" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="text-lg font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="243" data-magicpath-path="JulianaChefWebsite.tsx">Cinnamon Rolls</h4>
                <p className="text-[#4A4A4A] text-sm" data-magicpath-id="244" data-magicpath-path="JulianaChefWebsite.tsx">
                  Soft, pillowy rolls swirled with cinnamon and topped with creamy glaze. Pure comfort in every bite.
                </p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="9b684d17-df01-45c0-849d-604f92a77123" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow" data-magicpath-id="245" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80" alt="Cookies" className="w-full h-48 object-cover" data-magicpath-id="246" data-magicpath-path="JulianaChefWebsite.tsx" />
              <SortableContainer dndKitId="7d0ee0aa-735b-4f16-a164-c5785c367b73" containerType="regular" prevTag="div" className="p-4 sm:p-6" data-magicpath-id="247" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="text-lg font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="248" data-magicpath-path="JulianaChefWebsite.tsx">Signature Cookies</h4>
                <p className="text-[#4A4A4A] text-sm" data-magicpath-id="249" data-magicpath-path="JulianaChefWebsite.tsx">
                  Crispy edges, chewy centers. From chocolate chip to oatmeal raisin, there's a cookie for everyone.
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Testimonials Section - Mobile First */}
      <SortableContainer dndKitId="04b3771c-0dbd-4311-82d8-62da82b6c68a" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#5e7155]" data-magicpath-id="250" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="a8a8dade-1f77-4ffc-a432-78f54a953562" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="251" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-white" style={{
          color: "#fcf2e3"
        }} data-magicpath-id="252" data-magicpath-path="JulianaChefWebsite.tsx">
            What People Say
          </h2>
          <SortableContainer dndKitId="8b2ce804-fdfd-4cdb-a129-98daf506f480" containerType="regular" prevTag="div" className="relative" data-magicpath-id="253" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="414e6809-d6d2-42ea-8259-a60c0a429373" containerType="regular" prevTag="motion.div" key={currentTestimonial} initial={{
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
          }} data-magicpath-id="254" data-magicpath-path="JulianaChefWebsite.tsx">
              <p className="text-[#4A4A4A] text-base sm:text-lg md:text-xl leading-relaxed mb-6 italic" style={{
              color: "#404d3a"
            }} data-magicpath-id="255" data-magicpath-path="JulianaChefWebsite.tsx">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <SortableContainer dndKitId="829fcd6e-f8f1-4644-a076-30878c7b35a9" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="256" data-magicpath-path="JulianaChefWebsite.tsx">
                <SortableContainer dndKitId="ba86cfa9-a1b3-473d-b3e5-82ac312600b9" containerType="regular" prevTag="div" data-magicpath-id="257" data-magicpath-path="JulianaChefWebsite.tsx">
                  <p className="font-semibold text-[#2D2D2D] text-sm sm:text-base" style={{
                  color: "#404d3a"
                }} data-magicpath-id="258" data-magicpath-path="JulianaChefWebsite.tsx">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-[#5e7155] text-xs sm:text-sm" data-magicpath-id="259" data-magicpath-path="JulianaChefWebsite.tsx">
                    {testimonials[currentTestimonial].location}
                  </p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Navigation Controls */}
            <SortableContainer dndKitId="32c4e603-4628-4e74-8183-85a2f9da66dc" containerType="regular" prevTag="div" className="flex justify-center items-center mt-6 sm:mt-8 space-x-3 sm:space-x-4" data-magicpath-id="260" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="5e7fba6f-6b31-4f82-a39c-8239ef901833" containerType="regular" prevTag="button" onClick={prevTestimonial} className="bg-white text-[#5e7155] p-2 rounded-full hover:bg-[#F5F1E8] transition-colors" aria-label="Previous testimonial" style={{
              background: "#fcf2e3"
            }} data-magicpath-id="261" data-magicpath-path="JulianaChefWebsite.tsx">
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" style={{
                background: "#fcf2e3"
              }} data-magicpath-id="262" data-magicpath-path="JulianaChefWebsite.tsx" />
              </SortableContainer>
              <div className="flex space-x-2" data-magicpath-id="263" data-magicpath-path="JulianaChefWebsite.tsx">
                {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentTestimonial(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentTestimonial ? 'bg-white' : 'bg-white/40'}`} aria-label={`Go to testimonial ${index + 1}`} data-magicpath-id="264" data-magicpath-path="JulianaChefWebsite.tsx" />)}
              </div>
              <SortableContainer dndKitId="5514e30f-56c5-4ffd-9b10-dbf9c0dd8189" containerType="regular" prevTag="button" onClick={nextTestimonial} className="bg-white text-[#5e7155] p-2 rounded-full hover:bg-[#F5F1E8] transition-colors" aria-label="Next testimonial" style={{
              background: "#fcf2e3"
            }} data-magicpath-id="265" data-magicpath-path="JulianaChefWebsite.tsx">
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" style={{
                background: "#fcf2e3"
              }} data-magicpath-id="266" data-magicpath-path="JulianaChefWebsite.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs Section - Mobile First */}
      <SortableContainer dndKitId="f0b6fde1-65e8-4465-a0fd-8a45b8bb5c6f" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" style={{
      background: "#fcf2e3"
    }} data-magicpath-id="267" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="997b21c5-a87e-43a4-89cc-51ea18287fbf" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="268" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#2D2D2D]" style={{
          color: "#404d3a"
        }} data-magicpath-id="269" data-magicpath-path="JulianaChefWebsite.tsx">
            FAQs
          </h2>
          <SortableContainer dndKitId="bd854104-c528-40f9-bdbc-98d5d2383bc1" containerType="collection" prevTag="div" className="space-y-3 sm:space-y-4" data-magicpath-id="270" data-magicpath-path="JulianaChefWebsite.tsx">
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
          }} className="bg-white rounded-lg shadow-sm overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="271" data-magicpath-path="JulianaChefWebsite.tsx">
                <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-[#F5F1E8] transition-colors" style={{
              color: "#404d3a"
            }} data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="272" data-magicpath-path="JulianaChefWebsite.tsx">
                  <span className="font-semibold text-[#2D2D2D] pr-4 text-sm sm:text-base" style={{
                color: "#404d3a"
              }} data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:unknown" data-magicpath-id="273" data-magicpath-path="JulianaChefWebsite.tsx">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#5e7155] transition-transform flex-shrink-0 ${expandedFaq === index ? 'transform rotate-180' : ''}`} data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="274" data-magicpath-path="JulianaChefWebsite.tsx" />
                </button>
                {expandedFaq === index && <motion.div data-magicpath-motion-tag="motion.div" initial={{
              height: 0
            }} animate={{
              height: 'auto'
            }} exit={{
              height: 0
            }} transition={{
              duration: 0.3
            }} className="px-4 sm:px-6 pb-4 sm:pb-6" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="275" data-magicpath-path="JulianaChefWebsite.tsx">
                    <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:unknown" data-magicpath-id="276" data-magicpath-path="JulianaChefWebsite.tsx">{faq.answer}</p>
                  </motion.div>}
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Contact Section - Mobile First */}
      <SortableContainer dndKitId="bab7522d-6fc1-49a6-8fe9-6aa7f7453761" containerType="regular" prevTag="section" id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" data-magicpath-id="277" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="39654f3d-f411-46dd-ac9e-4db9e3b82537" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="278" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-[#2D2D2D]" style={{
          color: "#c76942"
        }} data-magicpath-id="279" data-magicpath-path="JulianaChefWebsite.tsx">
            Let's Work Together!
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#5e7155] mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4" data-magicpath-id="280" data-magicpath-path="JulianaChefWebsite.tsx">
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
          background: "#404d3a"
        }} data-magicpath-id="281" data-magicpath-path="JulianaChefWebsite.tsx">
            Get In Touch
          </button>
        </SortableContainer>
      </SortableContainer>

      {/* Footer - Mobile First */}
      <SortableContainer dndKitId="12503a64-3492-4d8d-a5c4-1001f59b135e" containerType="regular" prevTag="footer" className="bg-[#5e7155] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" style={{
      color: "#fcf2e3"
    }} data-magicpath-id="282" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="e20f10fc-a85d-4b46-b8c2-982b587683b0" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="283" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="3ceac326-fda5-4710-beba-e879f550164e" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="284" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="d20bc556-43a0-4771-ba6b-13319050ea55" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="285" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" data-magicpath-id="286" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
              <p className="text-white/80 text-xs sm:text-sm" style={{
              color: "#fcf2e3"
            }} data-magicpath-id="287" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
            </SortableContainer>
            <SortableContainer dndKitId="7e311588-0a56-4be1-bfba-df11983155bd" containerType="regular" prevTag="div" className="text-center sm:text-left" style={{
            color: "#fcf2e3"
          }} data-magicpath-id="288" data-magicpath-path="JulianaChefWebsite.tsx">
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="289" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
              <SortableContainer dndKitId="83799040-5a08-41fd-9afd-b3abe262da22" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="290" data-magicpath-path="JulianaChefWebsite.tsx">
                <li data-magicpath-id="291" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#home" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#home');
                }} className="text-white/80 hover:text-white transition-colors" style={{
                  color: "#fcf2e3"
                }} data-magicpath-id="292" data-magicpath-path="JulianaChefWebsite.tsx">
                    Home
                  </a>
                </li>
                <li data-magicpath-id="293" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#about" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#about');
                }} className="text-white/80 hover:text-white transition-colors" style={{
                  color: "#fcf2e3"
                }} data-magicpath-id="294" data-magicpath-path="JulianaChefWebsite.tsx">
                    About Juliana
                  </a>
                </li>
                <li data-magicpath-id="295" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#offerings" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#offerings');
                }} className="text-white/80 hover:text-white transition-colors" style={{
                  color: "#fcf2e3"
                }} data-magicpath-id="296" data-magicpath-path="JulianaChefWebsite.tsx">
                    Retreat Catering
                  </a>
                </li>
                <li data-magicpath-id="297" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#treats" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#treats');
                }} className="text-white/80 hover:text-white transition-colors" style={{
                  color: "#fcf2e3"
                }} data-magicpath-id="298" data-magicpath-path="JulianaChefWebsite.tsx">
                    Treats & Bakes
                  </a>
                </li>
                <li style={{
                color: "#fcf2e3"
              }} data-magicpath-id="299" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#contact" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }} className="text-white/80 hover:text-white transition-colors" style={{
                  color: "#fcf2e3"
                }} data-magicpath-id="300" data-magicpath-path="JulianaChefWebsite.tsx">
                    Contact
                  </a>
                </li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="1ff85a67-1f6a-4d4f-84d6-77b60d73fd5f" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="301" data-magicpath-path="JulianaChefWebsite.tsx">
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="302" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
              <SortableContainer dndKitId="b5228234-977c-49eb-9101-a546f1051680" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="303" data-magicpath-path="JulianaChefWebsite.tsx">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="304" data-magicpath-path="JulianaChefWebsite.tsx">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" style={{
                  color: "#fcf2e3"
                }} data-magicpath-id="305" data-magicpath-path="JulianaChefWebsite.tsx" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="306" data-magicpath-path="JulianaChefWebsite.tsx">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" style={{
                  color: "#fcf2e3"
                }} data-magicpath-id="307" data-magicpath-path="JulianaChefWebsite.tsx" />
                </a>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="e42a70cd-6551-40a6-8edc-728d18a259fb" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="308" data-magicpath-path="JulianaChefWebsite.tsx">
            <p style={{
            color: "#fcf2e3"
          }} data-magicpath-id="309" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};