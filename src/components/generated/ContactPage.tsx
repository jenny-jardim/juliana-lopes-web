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
  return <SortableContainer dndKitId="3a54110e-029d-4cf5-8c71-deefa4089cc9" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="ContactPage.tsx">
      {/* Hero Section - Minimal */}
      <SortableContainer dndKitId="5ad5eae5-88a3-48fa-96fe-f4845324920b" containerType="regular" prevTag="section" className="relative py-24 px-4 sm:px-6 bg-gradient-to-br from-[#5e7155] to-[#404d3a]" role="banner" aria-label="Contact page hero section" data-magicpath-id="1" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="22f9d2c7-b080-4f1c-9e2d-385c2b6ba9b0" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="2" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="b8b3fb44-037c-443f-ab75-bfb096e6e90f" containerType="regular" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="55ab6153-0e3d-4c53-a6bf-97a1bdc4afc0" containerType="regular" prevTag="main" data-magicpath-id="7" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="1e399df8-0579-403e-b8ed-4ee77d1989aa" containerType="regular" prevTag="section" className="py-20 px-4 sm:px-6" aria-labelledby="contact-methods-heading" data-magicpath-id="8" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="e23b69ab-391e-44c0-9099-49f490a3d1d3" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="9" data-magicpath-path="ContactPage.tsx">
            <SortableContainer dndKitId="40160182-adc2-40e3-8cb4-dfbab3861bb9" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="25f79e9e-9b2b-4504-a7c2-a90ede3e080f" containerType="regular" prevTag="div" className="space-y-8" data-magicpath-id="13" data-magicpath-path="ContactPage.tsx">
                {/* WhatsApp */}
                <SortableContainer dndKitId="675053f6-b38a-41e4-9495-e02502cb950a" containerType="regular" prevTag="motion.button" onClick={handleWhatsAppContact} whileHover={{
                x: 4
              }} className="w-full flex items-center gap-6 group" data-magicpath-id="14" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="a62b08f2-d7be-44fd-b5f3-fcffbf45dbdf" containerType="regular" prevTag="div" className="bg-green-50 p-4 rounded-2xl group-hover:bg-green-500 transition-colors" data-magicpath-id="15" data-magicpath-path="ContactPage.tsx">
                    <MessageCircle className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" data-magicpath-id="16" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="7b6131da-3dfb-4e90-ac87-2969b9bfe518" containerType="regular" prevTag="div" className="flex-1 text-left" data-magicpath-id="17" data-magicpath-path="ContactPage.tsx">
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
                <SortableContainer dndKitId="914f8c43-acad-4a1e-8dfc-1ecab2f209ab" containerType="regular" prevTag="motion.button" onClick={handleEmailContact} whileHover={{
                x: 4
              }} className="w-full flex items-center gap-6 group" data-magicpath-id="22" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="5cf6c714-f7d9-45b4-a3d8-2925914927fa" containerType="regular" prevTag="div" className="bg-orange-50 p-4 rounded-2xl group-hover:bg-[#c76942] transition-colors" data-magicpath-id="23" data-magicpath-path="ContactPage.tsx">
                    <Mail className="w-8 h-8 text-[#c76942] group-hover:text-white transition-colors" data-magicpath-id="24" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="63ccc7b4-061d-4aeb-91f9-0863bad2edbf" containerType="regular" prevTag="div" className="flex-1 text-left" data-magicpath-id="25" data-magicpath-path="ContactPage.tsx">
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
                <SortableContainer dndKitId="e9e6815a-cd9e-438a-8c4b-6bb15fadd2ad" containerType="regular" prevTag="motion.button" onClick={handleInstagramContact} whileHover={{
                x: 4
              }} className="w-full flex items-center gap-6 group" data-magicpath-id="30" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="eca66940-0b7e-4aa9-ae34-96c083cd75f2" containerType="regular" prevTag="div" className="bg-pink-50 p-4 rounded-2xl group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500 transition-all" data-magicpath-id="31" data-magicpath-path="ContactPage.tsx">
                    <InstagramIcon className="w-8 h-8 text-pink-600 group-hover:text-white transition-colors" data-magicpath-id="32" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="883c6d42-f201-4cae-b97f-e00e0574eaf4" containerType="regular" prevTag="div" className="flex-1 text-left" data-magicpath-id="33" data-magicpath-path="ContactPage.tsx">
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
              <SortableContainer dndKitId="154f838c-6ea1-417d-b0b5-94cc65a02b7d" containerType="regular" prevTag="div" className="mt-12 pt-8 border-t border-gray-100" data-magicpath-id="37" data-magicpath-path="ContactPage.tsx">
                <SortableContainer dndKitId="cb5f6819-d38f-4a6e-94e7-6d2bef252dfd" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-magicpath-id="38" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="9adb581c-2aee-4974-b629-e8423e882a7b" containerType="regular" prevTag="div" className="flex items-start gap-3" data-magicpath-id="39" data-magicpath-path="ContactPage.tsx">
                    <MapPin className="w-5 h-5 text-[#5e7155] mt-1 flex-shrink-0" data-magicpath-id="40" data-magicpath-path="ContactPage.tsx" />
                    <SortableContainer dndKitId="bc2fc99d-063c-4b73-9ea0-0bee4cd272ea" containerType="regular" prevTag="div" data-magicpath-id="41" data-magicpath-path="ContactPage.tsx">
                      <p className="text-sm font-semibold text-[#2D2D2D] mb-1" data-magicpath-id="42" data-magicpath-path="ContactPage.tsx">
                        Location
                      </p>
                      <p className="text-sm text-[#5e7155]" data-magicpath-id="43" data-magicpath-path="ContactPage.tsx">
                        Dun Laoghaire, Dublin
                      </p>
                    </SortableContainer>
                  </SortableContainer>

                  <SortableContainer dndKitId="9f3fbe3d-edf3-4c12-90e9-3cb13859353a" containerType="regular" prevTag="div" className="flex items-start gap-3" data-magicpath-id="44" data-magicpath-path="ContactPage.tsx">
                    <Clock className="w-5 h-5 text-[#5e7155] mt-1 flex-shrink-0" data-magicpath-id="45" data-magicpath-path="ContactPage.tsx" />
                    <SortableContainer dndKitId="188045a3-acb1-431c-bc27-1f93b41462bb" containerType="regular" prevTag="div" data-magicpath-id="46" data-magicpath-path="ContactPage.tsx">
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
        <SortableContainer dndKitId="131f0d93-bedb-49ec-a85c-f110de377557" containerType="regular" prevTag="section" className="py-16 px-4 sm:px-6" aria-label="Closing message" data-magicpath-id="49" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="f1a3b349-7f14-4353-a46f-93fdf204cf19" containerType="regular" prevTag="div" className="max-w-3xl mx-auto text-center" data-magicpath-id="50" data-magicpath-path="ContactPage.tsx">
            <SortableContainer dndKitId="16743572-069f-4827-ba38-99717de40495" containerType="regular" prevTag="motion.div" initial={{
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
        <SortableContainer dndKitId="c1da9e0f-deee-46df-8286-4e5be6b11c61" containerType="regular" prevTag="section" className="py-16 px-4 sm:px-6 bg-white" aria-labelledby="explore-heading" data-magicpath-id="54" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="edceef00-6fcc-414c-aca7-6636ab9f14fe" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="55" data-magicpath-path="ContactPage.tsx">
            <SortableContainer dndKitId="03e1c630-46be-4354-803b-34d2aa93cf98" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="8a323553-0548-41c4-9ab9-39407bf233a1" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-3 gap-4" data-magicpath-id="58" data-magicpath-path="ContactPage.tsx">
                <SortableContainer dndKitId="eed0b304-e6b4-4e72-b170-0135fdf745f8" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#offerings')} className="bg-[#F5F1E8] hover:bg-[#5e7155] text-[#2D2D2D] hover:text-white p-6 rounded-xl transition-all" data-magicpath-id="59" data-magicpath-path="ContactPage.tsx">
                  <h3 className="font-semibold text-lg mb-1" data-magicpath-id="60" data-magicpath-path="ContactPage.tsx">
                    Retreat Catering
                  </h3>
                  <p className="text-sm opacity-70" data-magicpath-id="61" data-magicpath-path="ContactPage.tsx">
                    Catering services
                  </p>
                </SortableContainer>

                <SortableContainer dndKitId="a0b824e4-d83e-4f30-be01-4108641aaa83" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#treats')} className="bg-[#F5F1E8] hover:bg-[#c76942] text-[#2D2D2D] hover:text-white p-6 rounded-xl transition-all" data-magicpath-id="62" data-magicpath-path="ContactPage.tsx">
                  <h3 className="font-semibold text-lg mb-1" data-magicpath-id="63" data-magicpath-path="ContactPage.tsx">
                    Pep Me Up Treats
                  </h3>
                  <p className="text-sm opacity-70" data-magicpath-id="64" data-magicpath-path="ContactPage.tsx">
                    Weekly treats menu
                  </p>
                </SortableContainer>

                <SortableContainer dndKitId="4ddd4f24-6cae-4a1d-815f-544087dfd379" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#about')} className="bg-[#F5F1E8] hover:bg-[#5e7155] text-[#2D2D2D] hover:text-white p-6 rounded-xl transition-all" data-magicpath-id="65" data-magicpath-path="ContactPage.tsx">
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