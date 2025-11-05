"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Heart, MessageCircle, Instagram as InstagramIcon } from 'lucide-react';
export interface ContactPageProps {
  onNavigate?: (section: string) => void;
  mpid?: string;
}
export default function ContactPage({
  onNavigate
}: ContactPageProps) {
  // WhatsApp link - Update with Juliana's actual phone number
  const handleWhatsAppContact = () => {
    const phoneNumber = "353871234567"; // Replace with actual number
    const message = encodeURIComponent("Hi Juliana! I'd like to get in touch.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  const handleEmailContact = () => {
    window.location.href = "mailto:hello@julianaveganchef.com";
  };
  const handleInstagramContact = () => {
    window.open("https://instagram.com/julianaveganchef", '_blank');
  };
  return <SortableContainer dndKitId="45fb14d5-c4b0-4c56-a2b4-0d063d226116" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="ContactPage.tsx">
      {/* Hero Section - Minimal */}
      <SortableContainer dndKitId="96b916c9-c07d-4a3e-8f4e-1cfde6214d18" containerType="regular" prevTag="section" className="relative py-24 px-4 sm:px-6 bg-gradient-to-br from-[#5e7155] to-[#404d3a]" role="banner" aria-label="Contact page hero section" data-magicpath-id="1" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="2869e655-87bd-4aa2-b892-24733b461057" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="2" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="07a6eee5-c1e5-4056-8de2-54785f83a494" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} data-magicpath-id="3" data-magicpath-path="ContactPage.tsx">
            <Heart className="w-12 h-12 text-white mx-auto mb-4 opacity-90" data-magicpath-id="4" data-magicpath-path="ContactPage.tsx" />
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-4 leading-tight" data-magicpath-id="5" data-magicpath-path="ContactPage.tsx">
              Let's Connect
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto" data-magicpath-id="6" data-magicpath-path="ContactPage.tsx">
              I'd love to hear from you
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Main Contact Card - Single, Clean, Elegant */}
      <SortableContainer dndKitId="49be3012-35bd-43d5-bf03-4670298b074e" containerType="regular" prevTag="main" data-magicpath-id="7" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="70ad16f9-1097-46c3-b845-3278420206f4" containerType="regular" prevTag="section" className="py-20 px-4 sm:px-6" aria-labelledby="contact-methods-heading" data-magicpath-id="8" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="52fd737f-ec48-452d-9e39-ec5aa6e69887" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="9" data-magicpath-path="ContactPage.tsx">
            <SortableContainer dndKitId="579d2570-5211-4514-a59d-7007893442a7" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="bg-white rounded-3xl shadow-xl p-10 sm:p-14" data-magicpath-id="10" data-magicpath-path="ContactPage.tsx">
              <h2 id="contact-methods-heading" className="font-serif text-3xl sm:text-4xl text-[#2D2D2D] mb-3 text-center" data-magicpath-id="11" data-magicpath-path="ContactPage.tsx">
                Get In Touch
              </h2>
              <p className="text-[#5e7155] text-center mb-12" data-magicpath-id="12" data-magicpath-path="ContactPage.tsx">
                Choose your preferred way to reach me
              </p>

              {/* Contact Methods - Minimal List */}
              <SortableContainer dndKitId="1e6141e8-37e0-43d2-9699-7799e5771b1a" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="13" data-magicpath-path="ContactPage.tsx">
                {/* WhatsApp */}
                <SortableContainer dndKitId="3cd60019-2806-430b-b263-dd15ef58b1aa" containerType="regular" prevTag="motion.button" onClick={handleWhatsAppContact} whileHover={{
                x: 4
              }} className="w-full flex items-center gap-6 group" data-magicpath-id="14" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="b0b6f583-7886-4afe-bc77-67146ef7aa04" containerType="regular" prevTag="div" className="bg-green-50 p-4 rounded-2xl group-hover:bg-green-500 transition-colors" data-magicpath-id="15" data-magicpath-path="ContactPage.tsx">
                    <MessageCircle className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" data-magicpath-id="16" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="12611b9f-1604-4990-86bb-d5943bb6f518" containerType="regular" prevTag="div" className="flex-1 text-left" data-magicpath-id="17" data-magicpath-path="ContactPage.tsx">
                    <h3 className="font-serif text-2xl text-[#2D2D2D] mb-1 group-hover:text-green-600 transition-colors" data-magicpath-id="18" data-magicpath-path="ContactPage.tsx">
                      WhatsApp
                    </h3>
                    <p className="text-[#5e7155] text-sm" data-magicpath-id="19" data-magicpath-path="ContactPage.tsx">
                      My preferred contact method — quick responses
                    </p>
                  </SortableContainer>
                  <div className="text-[#5e7155] opacity-0 group-hover:opacity-100 transition-opacity" data-magicpath-id="20" data-magicpath-path="ContactPage.tsx">
                    →
                  </div>
                </SortableContainer>

                <div className="border-t border-gray-100" data-magicpath-id="21" data-magicpath-path="ContactPage.tsx" />

                {/* Email */}
                <SortableContainer dndKitId="a4f6cd97-2460-45ef-bfb2-d093b2dc25fa" containerType="regular" prevTag="motion.button" onClick={handleEmailContact} whileHover={{
                x: 4
              }} className="w-full flex items-center gap-6 group" data-magicpath-id="22" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="dc1f1785-7de5-45bd-a5da-e2de8c55862f" containerType="regular" prevTag="div" className="bg-orange-50 p-4 rounded-2xl group-hover:bg-[#c76942] transition-colors" data-magicpath-id="23" data-magicpath-path="ContactPage.tsx">
                    <Mail className="w-8 h-8 text-[#c76942] group-hover:text-white transition-colors" data-magicpath-id="24" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="d2a89839-89a3-4f43-bc87-e7dddab52474" containerType="regular" prevTag="div" className="flex-1 text-left" data-magicpath-id="25" data-magicpath-path="ContactPage.tsx">
                    <h3 className="font-serif text-2xl text-[#2D2D2D] mb-1 group-hover:text-[#c76942] transition-colors" data-magicpath-id="26" data-magicpath-path="ContactPage.tsx">
                      Email
                    </h3>
                    <p className="text-[#5e7155] text-sm" data-magicpath-id="27" data-magicpath-path="ContactPage.tsx">
                      hello@julianaveganchef.com
                    </p>
                  </SortableContainer>
                  <div className="text-[#5e7155] opacity-0 group-hover:opacity-100 transition-opacity" data-magicpath-id="28" data-magicpath-path="ContactPage.tsx">
                    →
                  </div>
                </SortableContainer>

                <div className="border-t border-gray-100" data-magicpath-id="29" data-magicpath-path="ContactPage.tsx" />

                {/* Instagram */}
                <SortableContainer dndKitId="7bb64376-3045-499b-8f02-e76fb6fa2be5" containerType="regular" prevTag="motion.button" onClick={handleInstagramContact} whileHover={{
                x: 4
              }} className="w-full flex items-center gap-6 group" data-magicpath-id="30" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="9a6fac7b-418f-4fe4-95fe-ef0af1ecb5e1" containerType="regular" prevTag="div" className="bg-pink-50 p-4 rounded-2xl group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500 transition-all" data-magicpath-id="31" data-magicpath-path="ContactPage.tsx">
                    <InstagramIcon className="w-8 h-8 text-pink-600 group-hover:text-white transition-colors" data-magicpath-id="32" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="693d428d-6986-4d4b-b090-ca237a69d194" containerType="regular" prevTag="div" className="flex-1 text-left" data-magicpath-id="33" data-magicpath-path="ContactPage.tsx">
                    <h3 className="font-serif text-2xl text-[#2D2D2D] mb-1 group-hover:text-pink-600 transition-colors" data-magicpath-id="34" data-magicpath-path="ContactPage.tsx">
                      Instagram
                    </h3>
                    <p className="text-[#5e7155] text-sm" data-magicpath-id="35" data-magicpath-path="ContactPage.tsx">
                      @julianaveganchef — food photos & updates
                    </p>
                  </SortableContainer>
                  <div className="text-[#5e7155] opacity-0 group-hover:opacity-100 transition-opacity" data-magicpath-id="36" data-magicpath-path="ContactPage.tsx">
                    →
                  </div>
                </SortableContainer>
              </SortableContainer>

              {/* Additional Details - Minimal */}
              <SortableContainer dndKitId="3f13f741-fcb4-4488-837a-69087b0be507" containerType="regular" prevTag="div" className="mt-12 pt-8 border-t border-gray-100" data-magicpath-id="37" data-magicpath-path="ContactPage.tsx">
                <SortableContainer dndKitId="bcbed13a-2108-4232-bf2f-5228d098ba44" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-magicpath-id="38" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="51b98e8a-1f04-4faf-9022-3f0985cdbf8f" containerType="regular" prevTag="div" className="flex items-start gap-3" data-magicpath-id="39" data-magicpath-path="ContactPage.tsx">
                    <MapPin className="w-5 h-5 text-[#5e7155] mt-1 flex-shrink-0" data-magicpath-id="40" data-magicpath-path="ContactPage.tsx" />
                    <SortableContainer dndKitId="494bcfc2-9750-440a-9ffa-71e4e3c2d126" containerType="regular" prevTag="div" data-magicpath-id="41" data-magicpath-path="ContactPage.tsx">
                      <p className="text-sm font-semibold text-[#2D2D2D] mb-1" data-magicpath-id="42" data-magicpath-path="ContactPage.tsx">
                        Location
                      </p>
                      <p className="text-sm text-[#5e7155]" data-magicpath-id="43" data-magicpath-path="ContactPage.tsx">
                        Dun Laoghaire, Dublin
                      </p>
                    </SortableContainer>
                  </SortableContainer>

                  <SortableContainer dndKitId="564c6b99-b66b-4f6a-b78d-a3f1f968afa9" containerType="regular" prevTag="div" className="flex items-start gap-3" data-magicpath-id="44" data-magicpath-path="ContactPage.tsx">
                    <Clock className="w-5 h-5 text-[#5e7155] mt-1 flex-shrink-0" data-magicpath-id="45" data-magicpath-path="ContactPage.tsx" />
                    <SortableContainer dndKitId="6498caf1-e041-4bc2-9d41-2a78918a0780" containerType="regular" prevTag="div" data-magicpath-id="46" data-magicpath-path="ContactPage.tsx">
                      <p className="text-sm font-semibold text-[#2D2D2D] mb-1" data-magicpath-id="47" data-magicpath-path="ContactPage.tsx">
                        Response Time
                      </p>
                      <p className="text-sm text-[#5e7155]" data-magicpath-id="48" data-magicpath-path="ContactPage.tsx">
                        Within 24-48 hours
                      </p>
                    </SortableContainer>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Closing Message */}
        <SortableContainer dndKitId="db4acf5b-17d4-4ff2-be66-ea45a6229f35" containerType="regular" prevTag="section" className="py-16 px-4 sm:px-6" aria-label="Closing message" data-magicpath-id="49" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="5375a256-db13-4537-a288-ef5ab586595e" containerType="regular" prevTag="div" className="max-w-3xl mx-auto text-center" data-magicpath-id="50" data-magicpath-path="ContactPage.tsx">
            <SortableContainer dndKitId="961d0c8c-4f03-4660-a807-4f2d8da8b1eb" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} data-magicpath-id="51" data-magicpath-path="ContactPage.tsx">
              <p className="text-2xl sm:text-3xl font-serif text-[#2D2D2D] mb-4 leading-relaxed italic" data-magicpath-id="52" data-magicpath-path="ContactPage.tsx">
                "Looking forward to connecting."
              </p>
              <p className="text-[#5e7155] text-lg" data-magicpath-id="53" data-magicpath-path="ContactPage.tsx">
                — Juliana
              </p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Quick Links */}
        <SortableContainer dndKitId="fa4e86d3-9066-47cb-a08c-5276e030455a" containerType="regular" prevTag="section" className="py-16 px-4 sm:px-6 bg-white" aria-labelledby="explore-heading" data-magicpath-id="54" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="72913edc-d443-4239-9247-7eed28e513ff" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="55" data-magicpath-path="ContactPage.tsx">
            <SortableContainer dndKitId="d2b1c0c1-3c89-4a80-8201-dea59e8d1a28" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} data-magicpath-id="56" data-magicpath-path="ContactPage.tsx">
              <h2 id="explore-heading" className="font-serif text-2xl text-center text-[#2D2D2D] mb-8" data-magicpath-id="57" data-magicpath-path="ContactPage.tsx">
                Explore More
              </h2>
              <SortableContainer dndKitId="9d8b4227-68c8-4114-9e44-23223ace8a04" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-3 gap-4" data-magicpath-id="58" data-magicpath-path="ContactPage.tsx">
                <SortableContainer dndKitId="8cf2bd18-1f73-4d1e-a90a-e8c1f46f2043" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#offerings')} className="bg-[#F5F1E8] hover:bg-[#5e7155] text-[#2D2D2D] hover:text-white p-6 rounded-xl transition-all" data-magicpath-id="59" data-magicpath-path="ContactPage.tsx">
                  <h3 className="font-semibold text-lg mb-1" data-magicpath-id="60" data-magicpath-path="ContactPage.tsx">
                    Retreat Catering
                  </h3>
                  <p className="text-sm opacity-70" data-magicpath-id="61" data-magicpath-path="ContactPage.tsx">
                    Catering services
                  </p>
                </SortableContainer>

                <SortableContainer dndKitId="83f1bf20-257c-47e0-95ed-9b9a14feb475" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#treats')} className="bg-[#F5F1E8] hover:bg-[#c76942] text-[#2D2D2D] hover:text-white p-6 rounded-xl transition-all" data-magicpath-id="62" data-magicpath-path="ContactPage.tsx">
                  <h3 className="font-semibold text-lg mb-1" data-magicpath-id="63" data-magicpath-path="ContactPage.tsx">
                    Pep Me Up Treats
                  </h3>
                  <p className="text-sm opacity-70" data-magicpath-id="64" data-magicpath-path="ContactPage.tsx">
                    Weekly treats menu
                  </p>
                </SortableContainer>

                <SortableContainer dndKitId="c2247624-38a4-40e2-8513-953a87667ca5" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#about')} className="bg-[#F5F1E8] hover:bg-[#5e7155] text-[#2D2D2D] hover:text-white p-6 rounded-xl transition-all" data-magicpath-id="65" data-magicpath-path="ContactPage.tsx">
                  <h3 className="font-semibold text-lg mb-1" data-magicpath-id="66" data-magicpath-path="ContactPage.tsx">
                    About Juliana
                  </h3>
                  <p className="text-sm opacity-70" data-magicpath-id="67" data-magicpath-path="ContactPage.tsx">
                    My story
                  </p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
}