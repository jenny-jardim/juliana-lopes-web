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
  mpid: "ac175547-38c4-4004-960a-d94b15994319"
}, {
  name: 'About Juliana',
  href: '#about',
  mpid: "c48df321-e112-451b-849f-c51d58bef920"
}, {
  name: 'Retreat Catering',
  href: '#offerings',
  mpid: "f94a5786-a734-4f97-8eff-4db8310b3f08"
}, {
  name: 'Treats & Bakes',
  href: '#treats',
  mpid: "7d854f3d-2f9e-466a-af20-b204256d8e1d"
}, {
  name: 'Contact',
  href: '#contact',
  mpid: "551df3a5-d72c-4291-8b72-eec837e0c4bc"
}] as any[];
const testimonials = [{
  quote: "Juliana transformed our retreat experience. Her plant-based dishes were not only delicious but beautifully presented. Our guests couldn't stop raving about the food!",
  author: 'Sophie Martinez',
  location: 'Retreat Host, Portugal',
  mpid: "a1e7bc76-efc6-4d1e-a9b7-b00bc1c668bd"
}, {
  quote: "Working with Chef Juliana was incredible. She brought creativity and passion to every meal, making our wellness retreat truly unforgettable.",
  author: 'Marcus Chen',
  location: 'Wellness Coordinator, Bali',
  mpid: "f4d5d6e8-6fb4-4ac9-ba6f-02eb8333306c"
}, {
  quote: "The treats Juliana prepared were absolutely divine. Gluten-free, plant-based perfection that even our non-vegan guests adored.",
  author: 'Emma Thompson',
  location: 'Event Planner, UK',
  mpid: "05ffb13d-c4cc-4eac-bb17-03574abafb12"
}] as any[];
const faqs = [{
  question: "I'm based in the UK. Can you cater my retreat?",
  answer: "Yes! I cater retreats and events across the world and the UK. Travel costs may apply for certain locations.",
  mpid: "148f9b09-759d-4303-857d-dad91ffe4f7f"
}, {
  question: "How far ahead should I book your catering service?",
  answer: "I recommend booking at least 2-3 months in advance to ensure availability, especially for retreat seasons.",
  mpid: "bc0e2ef8-500c-4926-890a-0edda2662cac"
}, {
  question: "What if my guests have lots of different dietary needs?",
  answer: "I specialize in accommodating various dietary requirements. All my dishes are plant-based and can be adapted for allergies and preferences.",
  mpid: "633662ea-df42-4946-9cd3-fc1946256674"
}, {
  question: "How do I know everything is vegan if I can't see it being made?",
  answer: "I provide full transparency with ingredient lists and preparation methods. You're welcome to observe the cooking process.",
  mpid: "c7173112-6a6f-438a-9376-4e8f67e1ade0"
}, {
  question: "I work a lot and eat out. Are your treats actually healthy?",
  answer: "Yes! My treats use wholesome, natural ingredients without refined sugars. They're designed to nourish while satisfying your sweet tooth.",
  mpid: "62a8491f-cd90-4593-b198-dea71840197a"
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
    return <SortableContainer dndKitId="e4acdcc2-1a45-48a6-9ea5-60c7930b11b4" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="0" data-magicpath-path="JulianaChefWebsite.tsx">
        {/* Header */}
        <SortableContainer dndKitId="af595f7a-f8a8-47b4-a5b5-0ad133d32013" containerType="regular" prevTag="motion.header" style={{
        opacity: headerOpacity
      }} className="fixed top-0 left-0 right-0 z-50 bg-[#8B9B7F]/95 backdrop-blur-sm" data-magicpath-id="1" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="44996d92-1db4-44de-9737-30d248c5dece" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="2" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="86ee9791-ce85-4091-aeb9-406b30e46064" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="3" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="27611d63-3ff1-4478-9abd-8f434349b130" containerType="regular" prevTag="button" onClick={() => {
              setShowContactPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home" data-magicpath-id="4" data-magicpath-path="JulianaChefWebsite.tsx">
                <div className="text-white font-serif text-lg sm:text-xl" data-magicpath-id="5" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</div>
                <div className="text-white/80 text-xs sm:text-sm" data-magicpath-id="6" data-magicpath-path="JulianaChefWebsite.tsx">the vegan chef</div>
              </SortableContainer>

              <SortableContainer dndKitId="3833bbd3-00f3-49c6-a8eb-ba3f740bb834" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" data-magicpath-id="7" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="8" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>

              <SortableContainer dndKitId="3e84b8f6-8cb7-426d-b5a5-b46b2280c052" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="9" data-magicpath-path="JulianaChefWebsite.tsx">
                {mobileMenuOpen ? <X className="w-6 h-6" data-magicpath-id="10" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" data-magicpath-id="11" data-magicpath-path="JulianaChefWebsite.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {mobileMenuOpen && <SortableContainer dndKitId="1e7fca8c-d85e-4fa4-9918-97a2d72b37fa" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-[#8B9B7F] border-t border-white/10" data-magicpath-id="12" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="9e8b70df-7820-45c4-9720-db7f2675353e" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" data-magicpath-id="13" data-magicpath-path="JulianaChefWebsite.tsx">
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
        <SortableContainer dndKitId="c1bc9483-aa00-4e12-85e6-00f1a133c746" containerType="regular" prevTag="div" className="pt-16 sm:pt-20" data-magicpath-id="15" data-magicpath-path="JulianaChefWebsite.tsx">
          <ContactPage onNavigate={handleContactNavigate} data-magicpath-id="16" data-magicpath-path="JulianaChefWebsite.tsx" />
        </SortableContainer>

        {/* Footer */}
        <SortableContainer dndKitId="6b103ef2-3a73-4c05-956f-7eebaf087329" containerType="regular" prevTag="footer" className="bg-[#8B9B7F] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" data-magicpath-id="17" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="eabc6bc8-9273-4261-8a4c-106ebcb9223a" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="18" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="1b8f2fa0-f161-4a9e-83da-bab04f285ff4" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="19" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="97d10e78-52e4-40d6-bd0f-d5043bc6b001" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="20" data-magicpath-path="JulianaChefWebsite.tsx">
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" data-magicpath-id="21" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
                <p className="text-white/80 text-xs sm:text-sm" data-magicpath-id="22" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
              </SortableContainer>
              <SortableContainer dndKitId="93341d01-cf6a-46bf-8c0b-54ceae8ec670" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="23" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="24" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
                <SortableContainer dndKitId="92baf115-5596-4043-bf5c-8b1616c947cb" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="25" data-magicpath-path="JulianaChefWebsite.tsx">
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
              <SortableContainer dndKitId="646be608-9b45-48fb-ab2f-2ee1a2fb2f73" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="36" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="37" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
                <SortableContainer dndKitId="e2b25bff-342f-4955-b22b-7e5b7dca09e2" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="38" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="39" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="40" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="41" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="42" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="edbde549-480d-4368-9adf-073803ebc2af" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="43" data-magicpath-path="JulianaChefWebsite.tsx">
              <p data-magicpath-id="44" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  }

  // If showing Treats & Bakes page, render it with header and footer
  if (showTreatsBakesPage) {
    return <SortableContainer dndKitId="63ce5dba-2b92-4aad-b3ef-b3f1971e2815" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="45" data-magicpath-path="JulianaChefWebsite.tsx">
        {/* Header */}
        <SortableContainer dndKitId="d61f444e-b197-43b8-870b-b20b64f3cddb" containerType="regular" prevTag="motion.header" style={{
        opacity: headerOpacity
      }} className="fixed top-0 left-0 right-0 z-50 bg-[#8B9B7F]/95 backdrop-blur-sm" data-magicpath-id="46" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="0a501d4a-9aaf-48c0-94c6-13b6a446a149" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="47" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="bd83dcc6-cf18-420d-9ba3-178560ff9363" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="48" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="3664a1c7-e4cf-4b14-bf9e-3feaa5454cc6" containerType="regular" prevTag="button" onClick={() => {
              setShowTreatsBakesPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home" data-magicpath-id="49" data-magicpath-path="JulianaChefWebsite.tsx">
                <div className="text-white font-serif text-lg sm:text-xl" data-magicpath-id="50" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</div>
                <div className="text-white/80 text-xs sm:text-sm" data-magicpath-id="51" data-magicpath-path="JulianaChefWebsite.tsx">the vegan chef</div>
              </SortableContainer>

              <SortableContainer dndKitId="308b34f0-38c6-42c4-8088-04cca8167f41" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" data-magicpath-id="52" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="53" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>

              <SortableContainer dndKitId="7ac0a423-9013-4fdf-9eea-d659c7c3e4c5" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="54" data-magicpath-path="JulianaChefWebsite.tsx">
                {mobileMenuOpen ? <X className="w-6 h-6" data-magicpath-id="55" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" data-magicpath-id="56" data-magicpath-path="JulianaChefWebsite.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {mobileMenuOpen && <SortableContainer dndKitId="e72833b3-5f84-459a-b875-86093f3fb594" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-[#8B9B7F] border-t border-white/10" data-magicpath-id="57" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="e70f5b33-c796-4589-9a6d-a2ebd4714d42" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" data-magicpath-id="58" data-magicpath-path="JulianaChefWebsite.tsx">
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
        <SortableContainer dndKitId="d7d8e0d6-e206-4682-9029-16e79f3ea30c" containerType="regular" prevTag="div" className="pt-16 sm:pt-20" data-magicpath-id="60" data-magicpath-path="JulianaChefWebsite.tsx">
          <TreatsBakesPage onNavigate={handleTreatsNavigate} data-magicpath-id="61" data-magicpath-path="JulianaChefWebsite.tsx" />
        </SortableContainer>

        {/* Footer */}
        <SortableContainer dndKitId="d2a77bdf-8506-47c5-8d50-274a4918beb5" containerType="regular" prevTag="footer" className="bg-[#8B9B7F] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" data-magicpath-id="62" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="bdacb31f-d35e-425d-8b88-8489b70d9eb3" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="63" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="95620323-db1c-4cee-8982-bb1aaafae321" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="64" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="56911050-d45e-4415-aa5b-6614301d5aa5" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="65" data-magicpath-path="JulianaChefWebsite.tsx">
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" data-magicpath-id="66" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
                <p className="text-white/80 text-xs sm:text-sm" data-magicpath-id="67" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
              </SortableContainer>
              <SortableContainer dndKitId="47374aef-147b-451a-95b9-c2849e03ae22" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="68" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="69" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
                <SortableContainer dndKitId="964c10c1-f7b0-4597-bdef-b713541ce166" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="70" data-magicpath-path="JulianaChefWebsite.tsx">
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
              <SortableContainer dndKitId="7d149df7-7102-46dd-be26-8d260f0f41b9" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="81" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="82" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
                <SortableContainer dndKitId="8a3ae613-bac9-489f-aa7a-bf856a653b6f" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="83" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="84" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="85" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="86" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="87" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="e54709bc-c82a-4964-bcf7-944a5a2379bc" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="88" data-magicpath-path="JulianaChefWebsite.tsx">
              <p data-magicpath-id="89" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  }

  // If showing Retreat Catering page, render it with header and footer
  if (showRetreatCateringPage) {
    return <SortableContainer dndKitId="9f8325c4-bb00-464c-bfea-05b086f4ab24" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="90" data-magicpath-path="JulianaChefWebsite.tsx">
        {/* Header */}
        <SortableContainer dndKitId="49af0c7c-96c9-4ad0-a250-4a4e1b5eb274" containerType="regular" prevTag="motion.header" style={{
        opacity: headerOpacity
      }} className="fixed top-0 left-0 right-0 z-50 bg-[#8B9B7F]/95 backdrop-blur-sm" data-magicpath-id="91" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="60a1111a-81b1-42d1-b4be-c793381498fc" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="92" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="ec8647b5-61f2-412a-9f04-74e603b0162c" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="93" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="66c7283c-cb16-4ca5-aeae-1674b1f0e9fb" containerType="regular" prevTag="button" onClick={() => {
              setShowRetreatCateringPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home" data-magicpath-id="94" data-magicpath-path="JulianaChefWebsite.tsx">
                <div className="text-white font-serif text-lg sm:text-xl" data-magicpath-id="95" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</div>
                <div className="text-white/80 text-xs sm:text-sm" data-magicpath-id="96" data-magicpath-path="JulianaChefWebsite.tsx">the vegan chef</div>
              </SortableContainer>

              <SortableContainer dndKitId="10611802-87e8-436c-825b-c70a6171b52d" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" data-magicpath-id="97" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="98" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>

              <SortableContainer dndKitId="dfcf19cc-c4d3-4974-841b-5b2849b9874f" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="99" data-magicpath-path="JulianaChefWebsite.tsx">
                {mobileMenuOpen ? <X className="w-6 h-6" data-magicpath-id="100" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" data-magicpath-id="101" data-magicpath-path="JulianaChefWebsite.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {mobileMenuOpen && <SortableContainer dndKitId="3cd29b12-0102-4a01-b97c-04cba15bb7b0" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-[#8B9B7F] border-t border-white/10" data-magicpath-id="102" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="3aa3d19b-0d71-4100-b4ac-84792373402d" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" data-magicpath-id="103" data-magicpath-path="JulianaChefWebsite.tsx">
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
        <SortableContainer dndKitId="418f54ca-db75-4f11-90ba-a6553a749e07" containerType="regular" prevTag="div" className="pt-16 sm:pt-20" data-magicpath-id="105" data-magicpath-path="JulianaChefWebsite.tsx">
          <RetreatCateringPage onNavigate={handleRetreatNavigate} data-magicpath-id="106" data-magicpath-path="JulianaChefWebsite.tsx" />
        </SortableContainer>

        {/* Footer */}
        <SortableContainer dndKitId="1b86071a-f284-47d0-aa94-8480e287c992" containerType="regular" prevTag="footer" className="bg-[#8B9B7F] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" data-magicpath-id="107" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="347642fb-4f31-41a2-be31-9107a425087a" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="108" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="8345f822-615e-4680-ab63-57bdc6138bb0" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="109" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="bcf15bc1-a1cb-440b-a64f-f6adea3a9762" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="110" data-magicpath-path="JulianaChefWebsite.tsx">
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" data-magicpath-id="111" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
                <p className="text-white/80 text-xs sm:text-sm" data-magicpath-id="112" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
              </SortableContainer>
              <SortableContainer dndKitId="48679c6f-0d51-4966-ae3c-627957762033" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="113" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="114" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
                <SortableContainer dndKitId="4d58543c-d467-4f87-ae20-cd76f9279b09" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="115" data-magicpath-path="JulianaChefWebsite.tsx">
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
              <SortableContainer dndKitId="33338a18-2528-476d-96af-5fbbd792ce75" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="126" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="127" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
                <SortableContainer dndKitId="ad1b5c37-fa4e-430b-8ca8-2ee9f7298527" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="128" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="129" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="130" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="131" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="132" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="b3d19ea6-c074-47d6-ab91-df7721f05c76" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="133" data-magicpath-path="JulianaChefWebsite.tsx">
              <p data-magicpath-id="134" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  }

  // If showing About page, render it with header and footer
  if (showAboutPage) {
    return <SortableContainer dndKitId="0ca18e7f-7c66-4171-8337-5bc8edddb777" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="135" data-magicpath-path="JulianaChefWebsite.tsx">
        {/* Header */}
        <SortableContainer dndKitId="5c423c3a-b42b-4fe1-a613-ca884bddcf37" containerType="regular" prevTag="motion.header" style={{
        opacity: headerOpacity
      }} className="fixed top-0 left-0 right-0 z-50 bg-[#8B9B7F]/95 backdrop-blur-sm" data-magicpath-id="136" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="6bdd2c2f-31f5-46fd-800f-265dc696baa2" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="137" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="90f38ed0-4c4f-4d0c-967e-aac0caf675a7" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="138" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="a670b42a-cc2f-4a77-a806-7f6014bb87ac" containerType="regular" prevTag="button" onClick={() => {
              setShowAboutPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home" data-magicpath-id="139" data-magicpath-path="JulianaChefWebsite.tsx">
                <div className="text-white font-serif text-lg sm:text-xl" data-magicpath-id="140" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</div>
                <div className="text-white/80 text-xs sm:text-sm" data-magicpath-id="141" data-magicpath-path="JulianaChefWebsite.tsx">the vegan chef</div>
              </SortableContainer>

              <SortableContainer dndKitId="f4ce0def-22fc-4f91-a38a-a479dbda4a3b" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" data-magicpath-id="142" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="143" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>

              <SortableContainer dndKitId="17f9a26b-9479-44e6-824a-43e05aeb865e" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="144" data-magicpath-path="JulianaChefWebsite.tsx">
                {mobileMenuOpen ? <X className="w-6 h-6" data-magicpath-id="145" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" data-magicpath-id="146" data-magicpath-path="JulianaChefWebsite.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {mobileMenuOpen && <SortableContainer dndKitId="6923b0b4-1da5-4b2c-89cc-ca20b749153f" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-[#8B9B7F] border-t border-white/10" data-magicpath-id="147" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="e6442bdf-506a-4669-88c8-bc515d8874ce" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" data-magicpath-id="148" data-magicpath-path="JulianaChefWebsite.tsx">
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
        <SortableContainer dndKitId="50d07646-9efe-40a8-8c19-a375e7dbea24" containerType="regular" prevTag="div" className="pt-16 sm:pt-20" data-magicpath-id="150" data-magicpath-path="JulianaChefWebsite.tsx">
          <AboutPage onNavigate={handleAboutNavigate} data-magicpath-id="151" data-magicpath-path="JulianaChefWebsite.tsx" />
        </SortableContainer>

        {/* Footer */}
        <SortableContainer dndKitId="84abf0ae-ffab-4b3f-a837-163b229102b4" containerType="regular" prevTag="footer" className="bg-[#8B9B7F] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" data-magicpath-id="152" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="2c7cd4ba-fb11-452f-8592-071f08a34496" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="153" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="520d6a6c-48bb-48b5-8da2-a6d8184ed5c8" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="154" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="3fbe2d75-d597-4db2-a196-29c969759a6a" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="155" data-magicpath-path="JulianaChefWebsite.tsx">
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" data-magicpath-id="156" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
                <p className="text-white/80 text-xs sm:text-sm" data-magicpath-id="157" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
              </SortableContainer>
              <SortableContainer dndKitId="57afa83e-00a7-4c97-9610-d6301bae8472" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="158" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="159" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
                <SortableContainer dndKitId="f1cb9244-fd23-4c15-8eea-fc1b5a4be812" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="160" data-magicpath-path="JulianaChefWebsite.tsx">
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
              <SortableContainer dndKitId="3a93f088-46dd-4b79-b4dc-13a6497d804e" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="171" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="172" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
                <SortableContainer dndKitId="bd4ed58a-7fd3-4794-96e8-5a1ca55ddefa" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="173" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="174" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="175" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="176" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="177" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="8071719c-43ab-4591-905e-37676963e2a9" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="178" data-magicpath-path="JulianaChefWebsite.tsx">
              <p data-magicpath-id="179" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  }

  // @return
  return <SortableContainer dndKitId="cfcca8ae-f266-4775-b8ec-184a4908c43c" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="180" data-magicpath-path="JulianaChefWebsite.tsx">
      {/* Mobile-First Header */}
      <SortableContainer dndKitId="299a1d52-d4f3-487a-a591-af528cad2185" containerType="regular" prevTag="motion.header" style={{
      opacity: headerOpacity
    }} className="fixed top-0 left-0 right-0 z-50 bg-[#8B9B7F]/95 backdrop-blur-sm" data-magicpath-id="181" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="b21682ef-6fed-4023-8b19-354fb714021c" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="182" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="bdc0a0a5-fea7-4021-abf7-b34948d301f9" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="183" data-magicpath-path="JulianaChefWebsite.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="0f8aa39d-ccb4-4369-8ce9-480af129caf5" containerType="regular" prevTag="button" onClick={() => document.getElementById('home')?.scrollIntoView({
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
            <SortableContainer dndKitId="34d3003d-3b25-4aec-a2bb-81f9a97d78dc" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" data-magicpath-id="187" data-magicpath-path="JulianaChefWebsite.tsx">
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
            <SortableContainer dndKitId="15c6da4a-b7aa-4d05-acfc-6c7e423b1061" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="189" data-magicpath-path="JulianaChefWebsite.tsx">
              {mobileMenuOpen ? <X className="w-6 h-6" data-magicpath-id="190" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" data-magicpath-id="191" data-magicpath-path="JulianaChefWebsite.tsx" />}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Mobile Menu */}
        {mobileMenuOpen && <SortableContainer dndKitId="ba56e447-584a-4c5a-bdd2-60ff081c53a1" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-[#8B9B7F] border-t border-white/10" data-magicpath-id="192" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="9d555f6c-35e6-459f-8901-c9f4ba023d3e" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" data-magicpath-id="193" data-magicpath-path="JulianaChefWebsite.tsx">
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
      <SortableContainer dndKitId="1ef5b737-9908-4925-8250-4bdfaa3484b6" containerType="regular" prevTag="section" id="home" className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden" data-magicpath-id="195" data-magicpath-path="JulianaChefWebsite.tsx">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        filter: 'brightness(0.7)',
        backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/300600264317087744/assets/665cd21b-9e06-4fcc-8e44-61ef845fae0e.png)",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "repeat",
        opacity: "1"
      }} data-magicpath-id="196" data-magicpath-path="JulianaChefWebsite.tsx" />
        <SortableContainer dndKitId="302b8b5f-b224-4f39-9243-5f46c9a83ecc" containerType="regular" prevTag="div" className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl" data-magicpath-id="197" data-magicpath-path="JulianaChefWebsite.tsx">
          <motion.h1 data-magicpath-motion-tag="motion.h1" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 sm:mb-6 leading-tight" data-magicpath-id="198" data-magicpath-path="JulianaChefWebsite.tsx" style={{
          color: "#fcf2e3"
        }}>
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
        }} className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4" data-magicpath-id="199" data-magicpath-path="JulianaChefWebsite.tsx" style={{
          color: "#fcf2e3"
        }}>
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
        }} className="bg-[#8B9B7F] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-sm sm:text-base" onClick={() => {
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
      <SortableContainer dndKitId="f92af58a-5025-4f2b-b49f-50852a1bf617" containerType="regular" prevTag="section" id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" style={{
      background: "#fcf2e3"
    }} data-magicpath-id="201" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="eebc6d66-d397-4c49-88bb-25a2724da4fb" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="202" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#2D2D2D]" style={{
          color: "#404d3a"
        }} data-magicpath-id="203" data-magicpath-path="JulianaChefWebsite.tsx">
            Meet Your Chef
          </h2>
          <SortableContainer dndKitId="a70b7d7b-3e40-4f11-a648-407448fe39aa" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center" data-magicpath-id="204" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="66f18494-928c-421d-8211-48ea796bde6c" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="9ffc73bc-9ece-4419-a0a3-ddeffc6d48d4" containerType="regular" prevTag="motion.div" initial={{
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
              <h3 className="text-xl sm:text-2xl font-semibold text-[#8B9B7F]" data-magicpath-id="208" data-magicpath-path="JulianaChefWebsite.tsx">Hi, I'm Juliana!</h3>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-id="209" data-magicpath-path="JulianaChefWebsite.tsx">
                I'm a passionate plant-based chef with over 8 years of culinary experience. I built my business and brand on creating nourishing, delicious plant-based meals for wellness retreats around the world.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" data-magicpath-id="210" data-magicpath-path="JulianaChefWebsite.tsx">
                What truly fuels my culinary passion is not just food itself but the transformative power it has to bring people together and foster genuine connections. I believe food has the unique ability to create shared experiences that inspire, heal, and unite us.
              </p>
              <button className="bg-[#8B9B7F] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-sm sm:text-base" onClick={() => setShowAboutPage(true)} data-magicpath-id="211" data-magicpath-path="JulianaChefWebsite.tsx">
                Read My Full Story
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Offerings Section - Mobile First */}
      <SortableContainer dndKitId="17f0de48-7e18-41a8-96bb-371e1b3b48dc" containerType="regular" prevTag="section" id="offerings" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" data-magicpath-id="212" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="ce9a5911-957d-4b6d-aa23-b8ef2c526d0c" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="213" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#8B9B7F]" style={{
          color: "#c76942"
        }} data-magicpath-id="214" data-magicpath-path="JulianaChefWebsite.tsx">
            My Offerings
          </h2>

          {/* Retreat Catering */}
          <SortableContainer dndKitId="70795f19-0a56-4ba1-86b1-1d76518c5f51" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20" data-magicpath-id="215" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="2e36003a-b1b0-410a-878a-871ae355451d" containerType="regular" prevTag="motion.div" initial={{
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
              <button className="bg-[#8B9B7F] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-sm sm:text-base" onClick={() => {
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
            <SortableContainer dndKitId="745abcdd-dc9f-404f-adb7-fba1bc2aaf79" containerType="regular" prevTag="motion.div" initial={{
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
          <SortableContainer dndKitId="fc82d536-339c-4fee-80f0-58cae34e5fa9" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12" data-magicpath-id="223" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="0fa70b73-f5ab-451d-ae5a-61e1829fd6ce" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="56e579eb-1710-4a70-bb37-a7025de06bec" containerType="regular" prevTag="motion.div" initial={{
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
              <button className="bg-[#C17857] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#B06847] transition-colors font-medium text-sm sm:text-base" onClick={() => {
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
      <SortableContainer dndKitId="157cc531-6cc5-40cd-a324-5c3fca2656af" containerType="regular" prevTag="section" id="treats" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" style={{
      background: "#fcf2e3",
      display: "none"
    }} data-magicpath-id="231" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="1dbc2ae9-2b2c-495e-8190-2ef5c8d5f4e0" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" style={{
        display: "none"
      }} data-magicpath-id="232" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#C17857]" style={{
          display: "none"
        }} data-magicpath-id="233" data-magicpath-path="JulianaChefWebsite.tsx">
            Treats & Bakes
          </h2>

          <SortableContainer dndKitId="63da0818-3a8e-4eb5-816f-df9dd9782c4b" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" data-magicpath-id="234" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="5b38e017-3d66-4a36-ac51-50d2d31852dc" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="7202c9e3-36ea-47ff-9fca-ce3135cc882f" containerType="regular" prevTag="div" className="p-4 sm:p-6" data-magicpath-id="237" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="text-lg font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="238" data-magicpath-path="JulianaChefWebsite.tsx">Fudgy Brownies</h4>
                <p className="text-[#4A4A4A] text-sm" data-magicpath-id="239" data-magicpath-path="JulianaChefWebsite.tsx">
                  Rich, decadent, and impossibly fudgy. Made with premium dark chocolate and a secret ingredient.
                </p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="f8810604-732a-4768-b855-1303791e645a" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="b4713ead-9368-45ae-92ca-6fbea4bfba35" containerType="regular" prevTag="div" className="p-4 sm:p-6" data-magicpath-id="242" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="text-lg font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="243" data-magicpath-path="JulianaChefWebsite.tsx">Cinnamon Rolls</h4>
                <p className="text-[#4A4A4A] text-sm" data-magicpath-id="244" data-magicpath-path="JulianaChefWebsite.tsx">
                  Soft, pillowy rolls swirled with cinnamon and topped with creamy glaze. Pure comfort in every bite.
                </p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="1f39f528-0f17-44ba-95ed-d4f8f266c084" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="bdf8d0f3-5eba-4f9c-99d6-3d0976f7437c" containerType="regular" prevTag="div" className="p-4 sm:p-6" data-magicpath-id="247" data-magicpath-path="JulianaChefWebsite.tsx">
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
      <SortableContainer dndKitId="1b517c39-e0bc-4e30-99ca-9c7ba1009e0b" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#8B9B7F]" data-magicpath-id="250" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="2643a13e-263e-4b2d-9504-73f8e7d580a9" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="251" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-white" data-magicpath-id="252" data-magicpath-path="JulianaChefWebsite.tsx" style={{
          color: "#fcf2e3"
        }}>
            What People Say
          </h2>
          <SortableContainer dndKitId="521688d8-eaa8-4b61-ad6f-68170ead483b" containerType="regular" prevTag="div" className="relative" data-magicpath-id="253" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="526a3a43-cf87-4e48-94f5-9d07b4bd63b4" containerType="regular" prevTag="motion.div" key={currentTestimonial} initial={{
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
          }} className="bg-white rounded-lg p-6 sm:p-8 md:p-12 shadow-xl" data-magicpath-id="254" data-magicpath-path="JulianaChefWebsite.tsx" style={{
            color: "#fcf2e3",
            background: "#fcf2e3"
          }}>
              <p className="text-[#4A4A4A] text-base sm:text-lg md:text-xl leading-relaxed mb-6 italic" style={{
              color: "#404d3a"
            }} data-magicpath-id="255" data-magicpath-path="JulianaChefWebsite.tsx">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <SortableContainer dndKitId="be8e12ca-90ea-4deb-a7fe-10283e5f2e6a" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="256" data-magicpath-path="JulianaChefWebsite.tsx">
                <SortableContainer dndKitId="7a4f7289-8333-4b8b-a07b-f202bb451fdf" containerType="regular" prevTag="div" data-magicpath-id="257" data-magicpath-path="JulianaChefWebsite.tsx">
                  <p className="font-semibold text-[#2D2D2D] text-sm sm:text-base" data-magicpath-id="258" data-magicpath-path="JulianaChefWebsite.tsx" style={{
                  color: "#404d3a"
                }}>
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-[#8B9B7F] text-xs sm:text-sm" data-magicpath-id="259" data-magicpath-path="JulianaChefWebsite.tsx">
                    {testimonials[currentTestimonial].location}
                  </p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Navigation Controls */}
            <SortableContainer dndKitId="3d443ffe-0197-40a0-ba52-815ab02eea2c" containerType="regular" prevTag="div" className="flex justify-center items-center mt-6 sm:mt-8 space-x-3 sm:space-x-4" data-magicpath-id="260" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="eda45f01-19a6-48af-aff4-e46d04b0104b" containerType="regular" prevTag="button" onClick={prevTestimonial} className="bg-white text-[#8B9B7F] p-2 rounded-full hover:bg-[#F5F1E8] transition-colors" aria-label="Previous testimonial" data-magicpath-id="261" data-magicpath-path="JulianaChefWebsite.tsx" style={{
              background: "#fcf2e3"
            }}>
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="262" data-magicpath-path="JulianaChefWebsite.tsx" style={{
                background: "#fcf2e3"
              }} />
              </SortableContainer>
              <div className="flex space-x-2" data-magicpath-id="263" data-magicpath-path="JulianaChefWebsite.tsx">
                {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentTestimonial(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentTestimonial ? 'bg-white' : 'bg-white/40'}`} aria-label={`Go to testimonial ${index + 1}`} data-magicpath-id="264" data-magicpath-path="JulianaChefWebsite.tsx" />)}
              </div>
              <SortableContainer dndKitId="5891887b-1efe-4162-9c04-2e2ce55ee966" containerType="regular" prevTag="button" onClick={nextTestimonial} className="bg-white text-[#8B9B7F] p-2 rounded-full hover:bg-[#F5F1E8] transition-colors" aria-label="Next testimonial" data-magicpath-id="265" data-magicpath-path="JulianaChefWebsite.tsx" style={{
              background: "#fcf2e3"
            }}>
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="266" data-magicpath-path="JulianaChefWebsite.tsx" style={{
                background: "#fcf2e3"
              }} />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* FAQs Section - Mobile First */}
      <SortableContainer dndKitId="6879d3d7-4b61-4580-bb36-db41e8d8020f" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" style={{
      background: "#fcf2e3"
    }} data-magicpath-id="267" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="1e488ba6-1751-4279-abbb-a0818d4940ab" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="268" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#2D2D2D]" style={{
          color: "#404d3a"
        }} data-magicpath-id="269" data-magicpath-path="JulianaChefWebsite.tsx">
            FAQs
          </h2>
          <SortableContainer dndKitId="82f1a8f0-f2d3-425b-b3f8-244df7063f1b" containerType="collection" prevTag="div" className="space-y-3 sm:space-y-4" data-magicpath-id="270" data-magicpath-path="JulianaChefWebsite.tsx">
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
                  <ChevronDown className={`w-5 h-5 text-[#8B9B7F] transition-transform flex-shrink-0 ${expandedFaq === index ? 'transform rotate-180' : ''}`} data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="274" data-magicpath-path="JulianaChefWebsite.tsx" />
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
      <SortableContainer dndKitId="635618bd-579a-46a2-81c6-374f464ffdd0" containerType="regular" prevTag="section" id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" data-magicpath-id="277" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="160bf4d8-0ccc-49bd-9f8a-9a60ae33b40a" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="278" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-[#2D2D2D]" style={{
          color: "#c76942"
        }} data-magicpath-id="279" data-magicpath-path="JulianaChefWebsite.tsx">
            Let's Work Together!
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#8B9B7F] mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4" data-magicpath-id="280" data-magicpath-path="JulianaChefWebsite.tsx">
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
        }} className="bg-[#8B9B7F] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-base sm:text-lg" style={{
          background: "#404d3a"
        }} data-magicpath-id="281" data-magicpath-path="JulianaChefWebsite.tsx">
            Get In Touch
          </button>
        </SortableContainer>
      </SortableContainer>

      {/* Footer - Mobile First */}
      <SortableContainer dndKitId="30161e9f-957a-4a6a-bf33-d4640cee827e" containerType="regular" prevTag="footer" className="bg-[#8B9B7F] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" data-magicpath-id="282" data-magicpath-path="JulianaChefWebsite.tsx" style={{
      color: "#fcf2e3"
    }}>
        <SortableContainer dndKitId="69d75414-6c0e-4afb-aeb6-ec41722ff112" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="283" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="30f0cba8-4fc5-4407-aea7-aa792d11b8e4" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="284" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="02dd84db-ed51-426e-bddd-52a16f383a8a" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="285" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" data-magicpath-id="286" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
              <p className="text-white/80 text-xs sm:text-sm" data-magicpath-id="287" data-magicpath-path="JulianaChefWebsite.tsx" style={{
              color: "#fcf2e3"
            }}>Plant-Based Retreat Chef</p>
            </SortableContainer>
            <SortableContainer dndKitId="802adfe4-ec2d-4f7e-8b1f-70804b11b0f0" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="288" data-magicpath-path="JulianaChefWebsite.tsx" style={{
            color: "#fcf2e3"
          }}>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="289" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
              <SortableContainer dndKitId="6cdc124a-7151-4d04-b181-d19afc1fd5eb" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="290" data-magicpath-path="JulianaChefWebsite.tsx">
                <li data-magicpath-id="291" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#home" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#home');
                }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="292" data-magicpath-path="JulianaChefWebsite.tsx" style={{
                  color: "#fcf2e3"
                }}>
                    Home
                  </a>
                </li>
                <li data-magicpath-id="293" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#about" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#about');
                }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="294" data-magicpath-path="JulianaChefWebsite.tsx" style={{
                  color: "#fcf2e3"
                }}>
                    About Juliana
                  </a>
                </li>
                <li data-magicpath-id="295" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#offerings" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#offerings');
                }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="296" data-magicpath-path="JulianaChefWebsite.tsx" style={{
                  color: "#fcf2e3"
                }}>
                    Retreat Catering
                  </a>
                </li>
                <li data-magicpath-id="297" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#treats" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#treats');
                }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="298" data-magicpath-path="JulianaChefWebsite.tsx" style={{
                  color: "#fcf2e3"
                }}>
                    Treats & Bakes
                  </a>
                </li>
                <li data-magicpath-id="299" data-magicpath-path="JulianaChefWebsite.tsx" style={{
                color: "#fcf2e3"
              }}>
                  <a href="#contact" onClick={e => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }} className="text-white/80 hover:text-white transition-colors" data-magicpath-id="300" data-magicpath-path="JulianaChefWebsite.tsx" style={{
                  color: "#fcf2e3"
                }}>
                    Contact
                  </a>
                </li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="2401ef0f-2b78-4392-82ab-f8997ba786a4" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="301" data-magicpath-path="JulianaChefWebsite.tsx">
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="302" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
              <SortableContainer dndKitId="5cec68d5-9f76-4b90-8582-5a749cace8db" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="303" data-magicpath-path="JulianaChefWebsite.tsx">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="304" data-magicpath-path="JulianaChefWebsite.tsx">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="305" data-magicpath-path="JulianaChefWebsite.tsx" style={{
                  color: "#fcf2e3"
                }} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="306" data-magicpath-path="JulianaChefWebsite.tsx">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="307" data-magicpath-path="JulianaChefWebsite.tsx" style={{
                  color: "#fcf2e3"
                }} />
                </a>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="d0a8975f-3f7e-4d18-962e-8448f30f6997" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="308" data-magicpath-path="JulianaChefWebsite.tsx">
            <p data-magicpath-id="309" data-magicpath-path="JulianaChefWebsite.tsx" style={{
            color: "#fcf2e3"
          }}>© 2024 Juliana the Vegan Chef. All rights reserved.</p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};