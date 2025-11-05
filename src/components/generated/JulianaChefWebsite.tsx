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
  mpid: "4c2ce49f-76ac-4756-acc9-900368f3e93b"
}, {
  name: 'About Juliana',
  href: '#about',
  mpid: "f6322dee-6d4f-4602-8d7c-bf1567ade1ab"
}, {
  name: 'Retreat Catering',
  href: '#offerings',
  mpid: "cfe70c5d-24dc-4fe1-bc1e-ead81862eea8"
}, {
  name: 'Treats & Bakes',
  href: '#treats',
  mpid: "9c412dbd-83b0-4817-a9f3-128637a77713"
}, {
  name: 'Contact',
  href: '#contact',
  mpid: "ef487a38-8ec0-4d3b-98a5-90a88b28c1c3"
}] as any[];
const testimonials = [{
  quote: "Juliana transformed our retreat experience. Her plant-based dishes were not only delicious but beautifully presented. Our guests couldn't stop raving about the food!",
  author: 'Sophie Martinez',
  location: 'Retreat Host, Portugal',
  mpid: "3676fa83-9ea5-478a-8cf7-1f7c12eda84c"
}, {
  quote: "Working with Chef Juliana was incredible. She brought creativity and passion to every meal, making our wellness retreat truly unforgettable.",
  author: 'Marcus Chen',
  location: 'Wellness Coordinator, Bali',
  mpid: "2db846e9-9dd9-4d94-8da7-e469c4fa2227"
}, {
  quote: "The treats Juliana prepared were absolutely divine. Gluten-free, plant-based perfection that even our non-vegan guests adored.",
  author: 'Emma Thompson',
  location: 'Event Planner, UK',
  mpid: "6b2e6708-5482-4177-8219-49b4a9490e30"
}] as any[];
const faqs = [{
  question: "I'm based in the UK. Can you cater my retreat?",
  answer: "Yes! I cater retreats and events across the world and the UK. Travel costs may apply for certain locations.",
  mpid: "bc17f05f-9aae-4966-aa59-a11ae246e5a7"
}, {
  question: "How far ahead should I book your catering service?",
  answer: "I recommend booking at least 2-3 months in advance to ensure availability, especially for retreat seasons.",
  mpid: "527b0abf-cbfe-499a-929d-66b81f8077eb"
}, {
  question: "What if my guests have lots of different dietary needs?",
  answer: "I specialize in accommodating various dietary requirements. All my dishes are plant-based and can be adapted for allergies and preferences.",
  mpid: "e38a8888-fabd-4951-ac8e-3a2abc49f1e6"
}, {
  question: "How do I know everything is vegan if I can't see it being made?",
  answer: "I provide full transparency with ingredient lists and preparation methods. You're welcome to observe the cooking process.",
  mpid: "150def98-60d3-4813-b1a4-dc7f4c36ca0e"
}, {
  question: "I work a lot and eat out. Are your treats actually healthy?",
  answer: "Yes! My treats use wholesome, natural ingredients without refined sugars. They're designed to nourish while satisfying your sweet tooth.",
  mpid: "3125ef48-5027-4c7d-a9eb-6dc13dbf54ee"
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
    return <SortableContainer dndKitId="24e3d2d7-6c7f-4e75-9536-a03d2d13e184" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="0" data-magicpath-path="JulianaChefWebsite.tsx">
        {/* Header */}
        <SortableContainer dndKitId="76f75bd1-5160-41a7-b812-62c7b2eef354" containerType="regular" prevTag="motion.header" style={{
        opacity: headerOpacity
      }} className="fixed top-0 left-0 right-0 z-50 bg-[#5e7155]/95 backdrop-blur-sm" role="banner" data-magicpath-id="1" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="5a06c46f-49db-480e-a1c7-615c0e30656e" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="2" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="c62f54fb-e8b5-4a75-bcfb-64f0059c85ed" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="3" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="263d32bf-d9ed-42b6-9d2c-3b863784cd1f" containerType="regular" prevTag="button" onClick={() => {
              setShowContactPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home" data-magicpath-id="4" data-magicpath-path="JulianaChefWebsite.tsx">
                <div className="text-white font-serif text-lg sm:text-xl" data-magicpath-id="5" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</div>
                <div className="text-white/80 text-xs sm:text-sm" data-magicpath-id="6" data-magicpath-path="JulianaChefWebsite.tsx">the vegan chef</div>
              </SortableContainer>

              <SortableContainer dndKitId="0c8b96b6-70e5-4fa2-b571-df19209d95e0" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation" data-magicpath-id="7" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="8" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>

              <SortableContainer dndKitId="d7368416-6292-431e-858b-2a84c97306e4" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="9" data-magicpath-path="JulianaChefWebsite.tsx">
                {mobileMenuOpen ? <X className="w-6 h-6" data-magicpath-id="10" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" data-magicpath-id="11" data-magicpath-path="JulianaChefWebsite.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {mobileMenuOpen && <SortableContainer dndKitId="6aa1302d-fb30-4040-9c70-6c8e1c006f34" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-[#5e7155] border-t border-white/10" data-magicpath-id="12" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="fa324a3d-a431-42de-bede-283af3ec253f" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" role="navigation" aria-label="Mobile navigation" data-magicpath-id="13" data-magicpath-path="JulianaChefWebsite.tsx">
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
        <SortableContainer dndKitId="76f34c30-1649-4e64-8a27-1a4a787a0ff8" containerType="regular" prevTag="div" className="pt-16 sm:pt-20" data-magicpath-id="15" data-magicpath-path="JulianaChefWebsite.tsx">
          <ContactPage onNavigate={handleContactNavigate} data-magicpath-id="16" data-magicpath-path="JulianaChefWebsite.tsx" />
        </SortableContainer>

        {/* Footer */}
        <SortableContainer dndKitId="54f08f44-b087-4661-be44-c6533dd800eb" containerType="regular" prevTag="footer" className="bg-[#5e7155] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" role="contentinfo" data-magicpath-id="17" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="82e0d793-dc2d-4761-b64b-a5ed42e2ad6d" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="18" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="da2cead4-eb45-4168-94a9-c09c794b73f5" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="19" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="2cc5d865-7d19-49c7-9509-8c657dd4fcd5" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="20" data-magicpath-path="JulianaChefWebsite.tsx">
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" data-magicpath-id="21" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
                <p className="text-white/80 text-xs sm:text-sm" data-magicpath-id="22" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
              </SortableContainer>
              <SortableContainer dndKitId="4c283810-22e1-4913-8f8d-64e3c2c16645" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="23" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="24" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
                <SortableContainer dndKitId="36646304-195a-4ea9-b68d-428ad56158df" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="25" data-magicpath-path="JulianaChefWebsite.tsx">
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
              <SortableContainer dndKitId="ac0de6db-1760-4cf3-8f15-442a89cf6ecb" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="36" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="37" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
                <SortableContainer dndKitId="18eac562-ed0f-4773-8952-1b3847aed0b8" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="38" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="39" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="40" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="41" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="42" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="cd024a50-0907-46b3-ab67-891e30ffe7f8" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="43" data-magicpath-path="JulianaChefWebsite.tsx">
              <p data-magicpath-id="44" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  }

  // If showing Treats & Bakes page, render it with header and footer
  if (showTreatsBakesPage) {
    return <SortableContainer dndKitId="69818024-5454-4912-bdaf-d24dd8ca3e3d" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="45" data-magicpath-path="JulianaChefWebsite.tsx">
        {/* Header */}
        <SortableContainer dndKitId="a419060b-2979-423e-b71c-7372c6ec96fb" containerType="regular" prevTag="motion.header" style={{
        opacity: headerOpacity
      }} className="fixed top-0 left-0 right-0 z-50 bg-[#5e7155]/95 backdrop-blur-sm" role="banner" data-magicpath-id="46" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="e8e85cff-51f2-4268-bbf9-a95a428f78a7" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="47" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="a28f974a-0fec-4f4f-8894-8292203df2e8" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="48" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="821d4277-4405-4525-82e9-68fa76b588c1" containerType="regular" prevTag="button" onClick={() => {
              setShowTreatsBakesPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home" data-magicpath-id="49" data-magicpath-path="JulianaChefWebsite.tsx">
                <div className="text-white font-serif text-lg sm:text-xl" data-magicpath-id="50" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</div>
                <div className="text-white/80 text-xs sm:text-sm" data-magicpath-id="51" data-magicpath-path="JulianaChefWebsite.tsx">the vegan chef</div>
              </SortableContainer>

              <SortableContainer dndKitId="70327588-6db2-47b2-a445-0bff78d97228" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation" data-magicpath-id="52" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="53" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>

              <SortableContainer dndKitId="b91bc798-2cec-48f4-97b2-98139b625355" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="54" data-magicpath-path="JulianaChefWebsite.tsx">
                {mobileMenuOpen ? <X className="w-6 h-6" data-magicpath-id="55" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" data-magicpath-id="56" data-magicpath-path="JulianaChefWebsite.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {mobileMenuOpen && <SortableContainer dndKitId="b2ea1b4d-9650-4773-a5dd-19b3c92e4fe2" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-[#5e7155] border-t border-white/10" data-magicpath-id="57" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="df6f5c9b-7859-4909-bd43-c26f99fab461" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" role="navigation" aria-label="Mobile navigation" data-magicpath-id="58" data-magicpath-path="JulianaChefWebsite.tsx">
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
        <SortableContainer dndKitId="fbcfeb8b-2e3f-4865-9b96-655e40f97a43" containerType="regular" prevTag="div" className="pt-16 sm:pt-20" data-magicpath-id="60" data-magicpath-path="JulianaChefWebsite.tsx">
          <TreatsBakesPage onNavigate={handleTreatsNavigate} data-magicpath-id="61" data-magicpath-path="JulianaChefWebsite.tsx" />
        </SortableContainer>

        {/* Footer */}
        <SortableContainer dndKitId="5d97ca02-670c-4fad-986e-0a321a72e39c" containerType="regular" prevTag="footer" className="bg-[#5e7155] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" role="contentinfo" data-magicpath-id="62" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="b49b3373-ea14-407b-b896-bcdf8859b656" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="63" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="131b4e46-ff54-4fe6-8e81-7221d33dfcf6" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="64" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="ad34d04a-f0b9-4e47-bf1c-92dd3ee4ee03" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="65" data-magicpath-path="JulianaChefWebsite.tsx">
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" data-magicpath-id="66" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
                <p className="text-white/80 text-xs sm:text-sm" data-magicpath-id="67" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
              </SortableContainer>
              <SortableContainer dndKitId="69cc70ca-e967-4253-af61-af83ac0fc03e" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="68" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="69" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
                <SortableContainer dndKitId="45c79ec9-acb3-42cb-b2e9-c2c514377aad" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="70" data-magicpath-path="JulianaChefWebsite.tsx">
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
              <SortableContainer dndKitId="963a9429-87e4-4b2c-a57d-865298fadbdf" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="81" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="82" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
                <SortableContainer dndKitId="f7cf420a-79cc-49cd-9dd0-eb5bc0c62408" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="83" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="84" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="85" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="86" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="87" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="3c544703-55f5-4304-a91c-d06ba93cc05a" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="88" data-magicpath-path="JulianaChefWebsite.tsx">
              <p data-magicpath-id="89" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  }

  // If showing Retreat Catering page, render it with header and footer
  if (showRetreatCateringPage) {
    return <SortableContainer dndKitId="fc264c08-0184-4037-9771-4dc1a87809d1" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="90" data-magicpath-path="JulianaChefWebsite.tsx">
        {/* Header */}
        <SortableContainer dndKitId="1d2904d3-cfaa-41b6-9ad5-0793e8fdb778" containerType="regular" prevTag="motion.header" style={{
        opacity: headerOpacity
      }} className="fixed top-0 left-0 right-0 z-50 bg-[#5e7155]/95 backdrop-blur-sm" role="banner" data-magicpath-id="91" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="5c248bf5-121e-4f66-9381-94c7ba59fed6" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="92" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="30f588e5-ddf6-4ed3-8e6e-a6d318653d78" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="93" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="6e86bad7-e2b3-44ab-ad11-0086e7994551" containerType="regular" prevTag="button" onClick={() => {
              setShowRetreatCateringPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home" data-magicpath-id="94" data-magicpath-path="JulianaChefWebsite.tsx">
                <div className="text-white font-serif text-lg sm:text-xl" data-magicpath-id="95" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</div>
                <div className="text-white/80 text-xs sm:text-sm" data-magicpath-id="96" data-magicpath-path="JulianaChefWebsite.tsx">the vegan chef</div>
              </SortableContainer>

              <SortableContainer dndKitId="83cda234-70cd-463b-a9aa-d344a88c63aa" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation" data-magicpath-id="97" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="98" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>

              <SortableContainer dndKitId="de414c28-1161-4492-b775-a84f5273fdbe" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="99" data-magicpath-path="JulianaChefWebsite.tsx">
                {mobileMenuOpen ? <X className="w-6 h-6" data-magicpath-id="100" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" data-magicpath-id="101" data-magicpath-path="JulianaChefWebsite.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {mobileMenuOpen && <SortableContainer dndKitId="51e80147-c81d-417a-bc2c-7a4d75b74948" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-[#5e7155] border-t border-white/10" data-magicpath-id="102" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="9a364ce2-0540-464c-a8d0-91120541fba4" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" role="navigation" aria-label="Mobile navigation" data-magicpath-id="103" data-magicpath-path="JulianaChefWebsite.tsx">
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
        <SortableContainer dndKitId="cee74fa4-1ff0-4726-ab25-0738700b07c8" containerType="regular" prevTag="div" className="pt-16 sm:pt-20" data-magicpath-id="105" data-magicpath-path="JulianaChefWebsite.tsx">
          <RetreatCateringPage onNavigate={handleRetreatNavigate} data-magicpath-id="106" data-magicpath-path="JulianaChefWebsite.tsx" />
        </SortableContainer>

        {/* Footer */}
        <SortableContainer dndKitId="3404e5f4-a234-4ffd-8fa3-d107faa3faf6" containerType="regular" prevTag="footer" className="bg-[#5e7155] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" role="contentinfo" data-magicpath-id="107" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="8ca669f7-fccb-4d5f-b5c1-93b40736ccd7" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="108" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="fc72e95f-e0ba-4954-908d-e5abb074ddfa" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="109" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="e09ccee9-b944-475d-b32b-63bed8997b54" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="110" data-magicpath-path="JulianaChefWebsite.tsx">
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" data-magicpath-id="111" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
                <p className="text-white/80 text-xs sm:text-sm" data-magicpath-id="112" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
              </SortableContainer>
              <SortableContainer dndKitId="1b8af063-6d3c-4f49-a1b1-31fc869a6786" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="113" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="114" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
                <SortableContainer dndKitId="9135dce4-14ca-49ec-a268-32acd76d9a4a" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="115" data-magicpath-path="JulianaChefWebsite.tsx">
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
              <SortableContainer dndKitId="5a02c139-c650-4961-8157-8aef4b1936c9" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="126" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="127" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
                <SortableContainer dndKitId="27b1b99a-5ef1-425b-8674-99e83c6e5f31" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="128" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="129" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="130" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="131" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="132" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="9584deda-17a4-4950-ae13-da6ab89f0858" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="133" data-magicpath-path="JulianaChefWebsite.tsx">
              <p data-magicpath-id="134" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  }

  // If showing About page, render it with header and footer
  if (showAboutPage) {
    return <SortableContainer dndKitId="16c67e94-3e15-4ae4-b819-b8bff54de9c9" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="135" data-magicpath-path="JulianaChefWebsite.tsx">
        {/* Header */}
        <SortableContainer dndKitId="f0dada16-e040-4613-9c8f-f98ab36d3d6b" containerType="regular" prevTag="motion.header" style={{
        opacity: headerOpacity
      }} className="fixed top-0 left-0 right-0 z-50 bg-[#5e7155]/95 backdrop-blur-sm" role="banner" data-magicpath-id="136" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="57117e2f-4051-4634-b87e-1335bc553f9f" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="137" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="2cc6a649-91b9-459d-83bf-2d70391a1f8f" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="138" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="5143f516-1eac-4b93-a1a4-f8227bdb9563" containerType="regular" prevTag="button" onClick={() => {
              setShowAboutPage(false);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer" aria-label="Return to home" data-magicpath-id="139" data-magicpath-path="JulianaChefWebsite.tsx">
                <div className="text-white font-serif text-lg sm:text-xl" data-magicpath-id="140" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</div>
                <div className="text-white/80 text-xs sm:text-sm" data-magicpath-id="141" data-magicpath-path="JulianaChefWebsite.tsx">the vegan chef</div>
              </SortableContainer>

              <SortableContainer dndKitId="d8a09b78-71fc-462b-97dd-a8f443a75ad2" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation" data-magicpath-id="142" data-magicpath-path="JulianaChefWebsite.tsx">
                {navigation.map(item => <a key={item.name} href={item.href} onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }} className="text-white hover:text-white/80 transition-colors font-medium text-sm" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="143" data-magicpath-path="JulianaChefWebsite.tsx">
                    {item.name}
                  </a>)}
              </SortableContainer>

              <SortableContainer dndKitId="4ad0bed6-285b-4f75-bde9-6634f3ec3dc4" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="144" data-magicpath-path="JulianaChefWebsite.tsx">
                {mobileMenuOpen ? <X className="w-6 h-6" data-magicpath-id="145" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" data-magicpath-id="146" data-magicpath-path="JulianaChefWebsite.tsx" />}
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {mobileMenuOpen && <SortableContainer dndKitId="c0bfa4b9-3880-4fda-a8c1-c28162e20d22" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-[#5e7155] border-t border-white/10" data-magicpath-id="147" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="443ff907-4c53-433c-a74d-78c3ef26cd26" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" role="navigation" aria-label="Mobile navigation" data-magicpath-id="148" data-magicpath-path="JulianaChefWebsite.tsx">
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
        <SortableContainer dndKitId="729c33f7-0b03-42e0-8772-03cfa988699a" containerType="regular" prevTag="div" className="pt-16 sm:pt-20" data-magicpath-id="150" data-magicpath-path="JulianaChefWebsite.tsx">
          <AboutPage onNavigate={handleAboutNavigate} data-magicpath-id="151" data-magicpath-path="JulianaChefWebsite.tsx" />
        </SortableContainer>

        {/* Footer */}
        <SortableContainer dndKitId="b9d09848-1265-414a-8e2f-057aa9129603" containerType="regular" prevTag="footer" className="bg-[#5e7155] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" role="contentinfo" data-magicpath-id="152" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="95112d29-7596-44e5-8ea4-1b3e268d51d5" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="153" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="237f2b19-7f6e-46b6-b139-3c50006d4352" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="154" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="c6f8f95b-54d9-4d8f-a8bd-adcce6464c70" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="155" data-magicpath-path="JulianaChefWebsite.tsx">
                <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" data-magicpath-id="156" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
                <p className="text-white/80 text-xs sm:text-sm" data-magicpath-id="157" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
              </SortableContainer>
              <SortableContainer dndKitId="e3dd6496-47c8-4fcc-9647-81dd7a88f1f7" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="158" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="159" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
                <SortableContainer dndKitId="801c976f-0a35-4a58-936f-6b3dd757ef6d" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="160" data-magicpath-path="JulianaChefWebsite.tsx">
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
              <SortableContainer dndKitId="05af388d-55d5-4710-a032-2093aca096bf" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="171" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="172" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
                <SortableContainer dndKitId="480e4d9a-a065-45c1-8331-52c65f05a66a" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="173" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="174" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="175" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="176" data-magicpath-path="JulianaChefWebsite.tsx">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6" data-magicpath-id="177" data-magicpath-path="JulianaChefWebsite.tsx" />
                  </a>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="e6168796-a372-43b2-a924-984bb93e98ae" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="178" data-magicpath-path="JulianaChefWebsite.tsx">
              <p data-magicpath-id="179" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>;
  }

  // @return
  return <SortableContainer dndKitId="baef27e7-ba46-4db8-9ce8-5fd5d8811d0a" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="180" data-magicpath-path="JulianaChefWebsite.tsx">
      {/* Mobile-First Header */}
      <SortableContainer dndKitId="98fcdd26-267a-41f0-98de-2f59bfd421d8" containerType="regular" prevTag="motion.header" style={{
      opacity: headerOpacity
    }} className="fixed top-0 left-0 right-0 z-50 bg-[#5e7155]/95 backdrop-blur-sm" role="banner" data-magicpath-id="181" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="fa97d05c-22e8-4e00-9bcf-7e1dee7e319b" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="182" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="2ad07263-e96f-4cd3-b4bd-d3639c8c6ae1" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="183" data-magicpath-path="JulianaChefWebsite.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="c708b216-d2f7-42e6-9768-24bd5141aea6" containerType="regular" prevTag="button" onClick={() => document.getElementById('home')?.scrollIntoView({
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
            <SortableContainer dndKitId="4591f2e8-9867-43fb-8f33-b6a6f8474456" containerType="collection" prevTag="nav" className="hidden md:flex space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation" data-magicpath-id="187" data-magicpath-path="JulianaChefWebsite.tsx">
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
            <SortableContainer dndKitId="68d1edbd-72cf-488b-ad63-28150ca06595" containerType="regular" prevTag="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu" data-magicpath-id="189" data-magicpath-path="JulianaChefWebsite.tsx">
              {mobileMenuOpen ? <X className="w-6 h-6" data-magicpath-id="190" data-magicpath-path="JulianaChefWebsite.tsx" /> : <Menu className="w-6 h-6" data-magicpath-id="191" data-magicpath-path="JulianaChefWebsite.tsx" />}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Mobile Menu */}
        {mobileMenuOpen && <SortableContainer dndKitId="c06a8b28-b167-4bcc-9aec-695501fc429a" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-[#5e7155] border-t border-white/10" data-magicpath-id="192" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="cd251dd0-1bd6-4cac-b8bd-727272524399" containerType="collection" prevTag="nav" className="px-4 py-4 space-y-2" role="navigation" aria-label="Mobile navigation" data-magicpath-id="193" data-magicpath-path="JulianaChefWebsite.tsx">
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
      <SortableContainer dndKitId="effdd7a0-051b-42e5-a803-8925d8449b6c" containerType="regular" prevTag="section" id="home" className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden" role="main" aria-label="Hero section featuring plant-based retreat chef services" data-magicpath-id="195" data-magicpath-path="JulianaChefWebsite.tsx">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        filter: 'brightness(0.7)',
        backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/300600264317087744/assets/665cd21b-9e06-4fcc-8e44-61ef845fae0e.png)",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "repeat",
        opacity: "1"
      }} data-magicpath-id="196" data-magicpath-path="JulianaChefWebsite.tsx" />
        <SortableContainer dndKitId="d8f56761-16a5-4509-8929-9346fbbf1940" containerType="regular" prevTag="div" className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl" data-magicpath-id="197" data-magicpath-path="JulianaChefWebsite.tsx">
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
      <SortableContainer dndKitId="1d00fa4f-36b8-45cf-9453-f2b08735a83f" containerType="regular" prevTag="section" id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" style={{
      background: "#fcf2e3"
    }} aria-labelledby="about-heading" data-magicpath-id="201" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="e496f45b-e353-45e6-b93a-3132b18fa113" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="202" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 id="about-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#2D2D2D]" style={{
          color: "#404d3a"
        }} data-magicpath-id="203" data-magicpath-path="JulianaChefWebsite.tsx">
            Meet Your Chef
          </h2>
          <SortableContainer dndKitId="e16506ab-de1d-4452-91eb-20409593297d" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center" data-magicpath-id="204" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="ae9081c7-52ed-4c1e-8526-b06be499e5dd" containerType="regular" prevTag="motion.div" initial={{
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
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/300600264317087744/assets/14f8bd6c-f085-44f9-b974-e2b94bdd0564.png" alt="Chef Juliana smiling in her kitchen, preparing plant-based dishes" className="w-full rounded-lg shadow-lg" style={{
              objectFit: "fill",
              objectPosition: "50% 50%",
              opacity: "1"
            }} data-magicpath-id="206" data-magicpath-path="JulianaChefWebsite.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="0d547b0d-e375-4515-852d-c0be9fdcdd29" containerType="regular" prevTag="motion.div" initial={{
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
              <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2D2D]" style={{
              color: "#404d3a"
            }} data-magicpath-id="208" data-magicpath-path="JulianaChefWebsite.tsx">Hi, I'm Juliana!</h3>
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
      <SortableContainer dndKitId="d3433a3b-2a3a-4889-b2c5-f46afb32a857" containerType="regular" prevTag="section" id="offerings" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" aria-labelledby="offerings-heading" data-magicpath-id="212" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="6b2c923b-5e86-40b9-a948-d9d3c2d46b7a" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="213" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 id="offerings-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#5e7155]" style={{
          color: "#c76942"
        }} data-magicpath-id="214" data-magicpath-path="JulianaChefWebsite.tsx">
            My Offerings
          </h2>

          {/* Retreat Catering */}
          <SortableContainer dndKitId="cc3a5635-6cb7-447f-a248-d6881a7091f2" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20" data-magicpath-id="215" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="282d0d1e-61f4-4f8c-b7cc-9c1b5742e1fa" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="ad528706-87ac-4307-b158-e2f6692b215a" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="flex justify-center" data-magicpath-id="221" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/300600264317087744/assets/f7d14c4e-9317-48a6-b706-edc843541fea.png" alt="Beautifully plated gourmet plant-based dish with colorful vegetables" className="w-full rounded-lg shadow-lg" style={{
              objectFit: "cover",
              objectPosition: "bottom",
              opacity: "1",
              minHeight: "500px",
              maxWidth: "450px"
            }} data-magicpath-id="222" data-magicpath-path="JulianaChefWebsite.tsx" />
            </SortableContainer>
          </SortableContainer>

          {/* Plant-Based Treats */}
          <SortableContainer dndKitId="7b7350d6-31a4-48a4-a221-627cd8dc3603" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12" data-magicpath-id="223" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="f08edf0e-734c-4db8-b2d5-f61d95d5db19" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="space-y-4 sm:space-y-6 order-1 md:order-2" data-magicpath-id="224" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2D2D]" style={{
              color: "#404d3a"
            }} data-magicpath-id="225" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Treats</h3>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" style={{
              color: "#404d3a"
            }} data-magicpath-id="226" data-magicpath-path="JulianaChefWebsite.tsx">
                Fresh-baked, gluten-friendly, plant-based treats made to order just for you.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base" style={{
              color: "#404d3a"
            }} data-magicpath-id="227" data-magicpath-path="JulianaChefWebsite.tsx">
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
            }} data-magicpath-id="228" data-magicpath-path="JulianaChefWebsite.tsx">
                See Treats Menu
              </button>
            </SortableContainer>
            <SortableContainer dndKitId="fd2df31b-8b02-4d3e-b5c7-af15108ee896" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="flex justify-center order-2 md:order-1" data-magicpath-id="229" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/300600264317087744/assets/29367085-1af0-41c6-a000-7e7ffe3ff643.jpg" alt="Decadent plant-based dessert with rich chocolate layers" className="w-full rounded-lg shadow-lg" style={{
              objectFit: "cover",
              objectPosition: "50% 50%",
              opacity: "1",
              minHeight: "500px",
              maxWidth: "450px"
            }} data-magicpath-id="230" data-magicpath-path="JulianaChefWebsite.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Treats & Bakes Section - Mobile First */}
      <SortableContainer dndKitId="f2ca1cff-3e0c-4c84-9e3d-72c6fa5e71e7" containerType="regular" prevTag="section" id="treats" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" style={{
      background: "#fcf2e3",
      display: "none"
    }} aria-labelledby="treats-heading" data-magicpath-id="231" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="9233c4af-a672-4d3a-9336-5ec736f1b675" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" style={{
        display: "none"
      }} data-magicpath-id="232" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 id="treats-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#5e7155]" style={{
          display: "none"
        }} data-magicpath-id="233" data-magicpath-path="JulianaChefWebsite.tsx">
            Treats & Bakes
          </h2>

          <SortableContainer dndKitId="1f8c4444-b90c-4aa5-a17b-ad7f0b10a884" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" data-magicpath-id="234" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="1e2f70f7-3cbb-468d-aeb9-fa442ae386b7" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="ac64c0fc-3037-46ab-bda3-4c719bec4948" containerType="regular" prevTag="div" className="p-4 sm:p-6" data-magicpath-id="237" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="text-lg font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="238" data-magicpath-path="JulianaChefWebsite.tsx">Fudgy Brownies</h4>
                <p className="text-[#4A4A4A] text-sm" data-magicpath-id="239" data-magicpath-path="JulianaChefWebsite.tsx">
                  Rich, decadent, and impossibly fudgy. Made with premium dark chocolate and a secret ingredient.
                </p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="fb8991fa-1bfe-4cf6-a062-fd15cf4f937b" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="31f674f2-9ad7-427c-9555-a82dd071aae6" containerType="regular" prevTag="div" className="p-4 sm:p-6" data-magicpath-id="242" data-magicpath-path="JulianaChefWebsite.tsx">
                <h4 className="text-lg font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="243" data-magicpath-path="JulianaChefWebsite.tsx">Cinnamon Rolls</h4>
                <p className="text-[#4A4A4A] text-sm" data-magicpath-id="244" data-magicpath-path="JulianaChefWebsite.tsx">
                  Soft, pillowy rolls swirled with cinnamon and topped with creamy glaze. Pure comfort in every bite.
                </p>
              </SortableContainer>
            </SortableContainer>

            <SortableContainer dndKitId="0821de4e-e27b-4f1c-b697-9f7531f14598" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="3824f232-9fd6-4256-abad-6932d98365c5" containerType="regular" prevTag="div" className="p-4 sm:p-6" data-magicpath-id="247" data-magicpath-path="JulianaChefWebsite.tsx">
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
      <SortableContainer dndKitId="cdf06f87-87d5-444c-8ad4-d9e3eeb457e7" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#5e7155]" aria-labelledby="testimonials-heading" data-magicpath-id="250" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="bb8660e2-9b1b-4031-b88d-df15f98f096d" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="251" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 id="testimonials-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-white" style={{
          color: "#fcf2e3"
        }} data-magicpath-id="252" data-magicpath-path="JulianaChefWebsite.tsx">
            What People Say
          </h2>
          <SortableContainer dndKitId="259f4cb7-4d36-40b8-a024-6e216a61ade8" containerType="regular" prevTag="div" className="relative" data-magicpath-id="253" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="5b0ebd7d-2af6-46ad-84d7-3ae05d9c9603" containerType="regular" prevTag="motion.div" key={currentTestimonial} initial={{
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
              <SortableContainer dndKitId="a6f8c687-5426-4972-b8e1-0649fec1a6e7" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="256" data-magicpath-path="JulianaChefWebsite.tsx">
                <SortableContainer dndKitId="c11bfea3-6fd4-47f3-907f-311dcfb04de9" containerType="regular" prevTag="div" data-magicpath-id="257" data-magicpath-path="JulianaChefWebsite.tsx">
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
            <SortableContainer dndKitId="f4580d01-7bfb-4a7e-9138-a91ecdadac27" containerType="regular" prevTag="div" className="flex justify-center items-center mt-6 sm:mt-8 space-x-3 sm:space-x-4" data-magicpath-id="260" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="fe68faea-d29e-4c6d-a940-58048893e37f" containerType="regular" prevTag="button" onClick={prevTestimonial} className="bg-white text-[#5e7155] p-2 rounded-full hover:bg-[#F5F1E8] transition-colors" aria-label="Previous testimonial" style={{
              background: "#fcf2e3"
            }} data-magicpath-id="261" data-magicpath-path="JulianaChefWebsite.tsx">
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" style={{
                background: "#fcf2e3"
              }} data-magicpath-id="262" data-magicpath-path="JulianaChefWebsite.tsx" />
              </SortableContainer>
              <div className="flex space-x-2" data-magicpath-id="263" data-magicpath-path="JulianaChefWebsite.tsx">
                {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentTestimonial(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentTestimonial ? 'bg-white' : 'bg-white/40'}`} aria-label={`Go to testimonial ${index + 1}`} data-magicpath-id="264" data-magicpath-path="JulianaChefWebsite.tsx" />)}
              </div>
              <SortableContainer dndKitId="77e2cb72-0aea-4185-ab36-9965886821a7" containerType="regular" prevTag="button" onClick={nextTestimonial} className="bg-white text-[#5e7155] p-2 rounded-full hover:bg-[#F5F1E8] transition-colors" aria-label="Next testimonial" style={{
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
      <SortableContainer dndKitId="1202cb2c-f6bc-4d47-84fe-bc894f79f99d" containerType="regular" prevTag="section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F5F1E8]" style={{
      background: "#fcf2e3"
    }} aria-labelledby="faqs-heading" data-magicpath-id="267" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="b1a0bb33-ca1b-454d-8fb8-9829106a691f" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="268" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 id="faqs-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 text-[#2D2D2D]" style={{
          color: "#404d3a"
        }} data-magicpath-id="269" data-magicpath-path="JulianaChefWebsite.tsx">
            FAQs
          </h2>
          <SortableContainer dndKitId="5ec2657e-9b83-4077-8b21-edf38bd72a11" containerType="collection" prevTag="div" className="space-y-3 sm:space-y-4" data-magicpath-id="270" data-magicpath-path="JulianaChefWebsite.tsx">
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
      <SortableContainer dndKitId="513d342e-6fbf-4fbf-ad50-b4357a5103fa" containerType="regular" prevTag="section" id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" aria-labelledby="contact-heading" data-magicpath-id="277" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="d2e782fb-9e12-4c21-8a6b-6ed842e1b6a4" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="278" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 id="contact-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-[#2D2D2D]" style={{
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
      <SortableContainer dndKitId="4bf021e4-e5f6-4957-ab10-e338e71c9882" containerType="regular" prevTag="footer" className="bg-[#5e7155] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6" style={{
      color: "#fcf2e3"
    }} role="contentinfo" data-magicpath-id="282" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="e51029cf-a460-464b-bac6-4ac320f4c382" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="283" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="675cb1a5-346f-41bd-869c-95d7420c0fd3" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" data-magicpath-id="284" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="a7147a0b-e169-489c-b01c-2765f4028afd" containerType="regular" prevTag="div" className="text-center sm:text-left" data-magicpath-id="285" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4" data-magicpath-id="286" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
              <p className="text-white/80 text-xs sm:text-sm" style={{
              color: "#fcf2e3"
            }} data-magicpath-id="287" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
            </SortableContainer>
            <SortableContainer dndKitId="60a7868e-cb6f-497a-ac85-64f19581aa1a" containerType="regular" prevTag="div" className="text-center sm:text-left" style={{
            color: "#fcf2e3"
          }} data-magicpath-id="288" data-magicpath-path="JulianaChefWebsite.tsx">
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="289" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
              <SortableContainer dndKitId="e61fed0c-8f06-431b-9d32-6ceec0a2f083" containerType="regular" prevTag="ul" className="space-y-1 sm:space-y-2 text-xs sm:text-sm" data-magicpath-id="290" data-magicpath-path="JulianaChefWebsite.tsx">
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
            <SortableContainer dndKitId="afac2010-0c75-4ec1-a408-8724f1a3ed01" containerType="regular" prevTag="div" className="text-center sm:text-left sm:col-span-2 md:col-span-1" data-magicpath-id="301" data-magicpath-path="JulianaChefWebsite.tsx">
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" data-magicpath-id="302" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
              <SortableContainer dndKitId="6e9d22fd-12b6-4fa6-aac2-7919db61c8a3" containerType="regular" prevTag="div" className="flex space-x-4 justify-center sm:justify-start" data-magicpath-id="303" data-magicpath-path="JulianaChefWebsite.tsx">
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
          <SortableContainer dndKitId="6becac72-9fe4-45bd-bad1-2b46085f94db" containerType="regular" prevTag="div" className="border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60" data-magicpath-id="308" data-magicpath-path="JulianaChefWebsite.tsx">
            <p style={{
            color: "#fcf2e3"
          }} data-magicpath-id="309" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};