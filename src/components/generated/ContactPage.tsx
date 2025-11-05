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
  return <SortableContainer dndKitId="9712bd57-6265-43f6-9cc1-7f7f0f59bec6" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="ContactPage.tsx">
      {/* Hero Section */}
      <SortableContainer dndKitId="2f7d1a4b-e507-4eab-baa9-ccc7a3364b16" containerType="regular" prevTag="section" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-[#5e7155] to-[#404d3a]" role="banner" aria-label="Contact page hero section" data-magicpath-id="1" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="73ac4528-5113-4b82-b1b3-20b6b8bd6e8e" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="2" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="e431e026-fd67-4114-ba06-a871d2929d59" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} data-magicpath-id="3" data-magicpath-path="ContactPage.tsx">
            <Heart className="w-16 h-16 sm:w-20 sm:h-20 text-white mx-auto mb-6 opacity-90" data-magicpath-id="4" data-magicpath-path="ContactPage.tsx" />
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight" data-magicpath-id="5" data-magicpath-path="ContactPage.tsx">
              Let's Connect
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed" data-magicpath-id="6" data-magicpath-path="ContactPage.tsx">
              I'd love to hear from you. Whether it's about catering your retreat or ordering weekly treats, let's talk.
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Contact Methods Section */}
      <SortableContainer dndKitId="b00e1c36-8c62-4d9b-8b15-532a77f0da4f" containerType="regular" prevTag="main" data-magicpath-id="7" data-magicpath-path="ContactPage.tsx">
      <SortableContainer dndKitId="b0ee1c97-590b-470a-a8da-211fce80825d" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6" aria-labelledby="contact-methods-heading" data-magicpath-id="8" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="ace1c117-fbf5-40a2-9957-4b1d49f26349" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="9" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="a59e97ed-45e1-4d84-bffe-5bf52c8ca7e4" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12" data-magicpath-id="10" data-magicpath-path="ContactPage.tsx">
            <h2 id="contact-methods-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2D2D] mb-4" data-magicpath-id="11" data-magicpath-path="ContactPage.tsx">
              How to Reach Me
            </h2>
            <p className="text-[#5e7155] text-lg sm:text-xl" data-magicpath-id="12" data-magicpath-path="ContactPage.tsx">
              Choose your preferred way to connect
            </p>
          </SortableContainer>

          {/* Contact Cards */}
          <SortableContainer dndKitId="606e2163-7466-41c4-bcbf-84608fbde86a" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" data-magicpath-id="13" data-magicpath-path="ContactPage.tsx">
            {/* WhatsApp Card */}
            <SortableContainer dndKitId="49a4e79c-fc95-4f94-ba55-049e1f1c2607" containerType="regular" prevTag="motion.button" onClick={handleWhatsAppContact} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer" data-magicpath-id="14" data-magicpath-path="ContactPage.tsx">
              <MessageCircle className="w-12 h-12 mx-auto mb-4" data-magicpath-id="15" data-magicpath-path="ContactPage.tsx" />
              <h3 className="font-serif text-2xl mb-3" data-magicpath-id="16" data-magicpath-path="ContactPage.tsx">WhatsApp</h3>
              <p className="text-white/90 mb-4" data-magicpath-id="17" data-magicpath-path="ContactPage.tsx">
                My preferred contact method. Quick responses and easy communication.
              </p>
              <SortableContainer dndKitId="4ff29704-ec0c-4003-b273-d1b4683f707a" containerType="regular" prevTag="div" className="bg-white/20 rounded-lg py-2 px-4 inline-block" data-magicpath-id="18" data-magicpath-path="ContactPage.tsx">
                <span className="font-semibold" data-magicpath-id="19" data-magicpath-path="ContactPage.tsx">Click to Message</span>
              </SortableContainer>
            </SortableContainer>

            {/* Email Card */}
            <SortableContainer dndKitId="65adfbf5-26b3-41bd-919e-1b9bc1b8d201" containerType="regular" prevTag="motion.button" onClick={handleEmailContact} initial={{
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
            }} className="bg-gradient-to-br from-[#c76942] to-[#b65e38] text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer" data-magicpath-id="20" data-magicpath-path="ContactPage.tsx">
              <Mail className="w-12 h-12 mx-auto mb-4" data-magicpath-id="21" data-magicpath-path="ContactPage.tsx" />
              <h3 className="font-serif text-2xl mb-3" data-magicpath-id="22" data-magicpath-path="ContactPage.tsx">Email</h3>
              <p className="text-white/90 mb-4" data-magicpath-id="23" data-magicpath-path="ContactPage.tsx">
                For detailed inquiries and formal requests.
              </p>
              <SortableContainer dndKitId="5f6c10cd-567f-4395-abb0-e11af7cdd6fe" containerType="regular" prevTag="div" className="bg-white/20 rounded-lg py-2 px-4 inline-block" data-magicpath-id="24" data-magicpath-path="ContactPage.tsx">
                <span className="font-semibold text-sm" data-magicpath-id="25" data-magicpath-path="ContactPage.tsx">hello@julianaveganchef.com</span>
              </SortableContainer>
            </SortableContainer>

            {/* Instagram Card */}
            <SortableContainer dndKitId="f9a1b6da-97c8-4d9f-af48-9588ba36a5fb" containerType="regular" prevTag="motion.button" onClick={handleInstagramContact} initial={{
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
            }} className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer" data-magicpath-id="26" data-magicpath-path="ContactPage.tsx">
              <InstagramIcon className="w-12 h-12 mx-auto mb-4" data-magicpath-id="27" data-magicpath-path="ContactPage.tsx" />
              <h3 className="font-serif text-2xl mb-3" data-magicpath-id="28" data-magicpath-path="ContactPage.tsx">Instagram</h3>
              <p className="text-white/90 mb-4" data-magicpath-id="29" data-magicpath-path="ContactPage.tsx">
                Follow along for food photos and daily updates.
              </p>
              <SortableContainer dndKitId="e039c1f4-5c47-49a3-8cd2-411c1971502e" containerType="regular" prevTag="div" className="bg-white/20 rounded-lg py-2 px-4 inline-block" data-magicpath-id="30" data-magicpath-path="ContactPage.tsx">
                <span className="font-semibold" data-magicpath-id="31" data-magicpath-path="ContactPage.tsx">@julianaveganchef</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {/* Additional Info Section */}
          <SortableContainer dndKitId="ec72e812-27d1-4a3e-95e8-73ecbdd789f2" containerType="regular" prevTag="div" className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-magicpath-id="32" data-magicpath-path="ContactPage.tsx">
            {/* My Promise Card */}
            <SortableContainer dndKitId="0546e9ec-206c-4203-8e54-c58d12b0f9ea" containerType="regular" prevTag="motion.div" initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="bg-gradient-to-br from-[#5e7155] to-[#404d3a] text-white rounded-2xl p-8 shadow-lg" data-magicpath-id="33" data-magicpath-path="ContactPage.tsx">
              <SortableContainer dndKitId="af46345e-a802-4409-8e40-11478c6c22bd" containerType="regular" prevTag="div" className="flex items-start gap-4 mb-4" data-magicpath-id="34" data-magicpath-path="ContactPage.tsx">
                <Heart className="w-8 h-8 flex-shrink-0 mt-1" data-magicpath-id="35" data-magicpath-path="ContactPage.tsx" />
                <SortableContainer dndKitId="87a2070f-946e-479b-a506-bc86113ac75c" containerType="regular" prevTag="div" data-magicpath-id="36" data-magicpath-path="ContactPage.tsx">
                  <h3 className="font-serif text-2xl sm:text-3xl mb-4" data-magicpath-id="37" data-magicpath-path="ContactPage.tsx">
                    My Promise
                  </h3>
                  <p className="text-white/90 leading-relaxed text-base sm:text-lg" data-magicpath-id="38" data-magicpath-path="ContactPage.tsx">
                    Every message gets a personal response. Every customer matters. I usually respond within 24-48 hours, Monday–Friday.
                  </p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Contact Details Card */}
            <SortableContainer dndKitId="f0dde858-9864-4c68-a6a0-21ce427e46d8" containerType="regular" prevTag="motion.div" initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="bg-white rounded-2xl p-8 shadow-lg space-y-6" data-magicpath-id="39" data-magicpath-path="ContactPage.tsx">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2D2D2D] mb-4" data-magicpath-id="40" data-magicpath-path="ContactPage.tsx">
                Other Details
              </h3>

              <SortableContainer dndKitId="09b89104-fd68-4210-bd49-36561967527a" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="41" data-magicpath-path="ContactPage.tsx">
                <SortableContainer dndKitId="2aad5642-4421-4cf5-8f82-522d376f9bcb" containerType="regular" prevTag="div" className="bg-[#5e7155]/10 p-3 rounded-full flex-shrink-0" data-magicpath-id="42" data-magicpath-path="ContactPage.tsx">
                  <MapPin className="w-6 h-6 text-[#5e7155]" data-magicpath-id="43" data-magicpath-path="ContactPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="c996822a-76ad-400b-a2de-d4a45aabce4a" containerType="regular" prevTag="div" data-magicpath-id="44" data-magicpath-path="ContactPage.tsx">
                  <p className="text-sm text-[#5e7155] font-semibold mb-1" data-magicpath-id="45" data-magicpath-path="ContactPage.tsx">
                    Location
                  </p>
                  <p className="text-[#2D2D2D]" data-magicpath-id="46" data-magicpath-path="ContactPage.tsx">
                    Dun Laoghaire<br data-magicpath-id="47" data-magicpath-path="ContactPage.tsx" />
                    County Dublin, Ireland
                  </p>
                </SortableContainer>
              </SortableContainer>

              <SortableContainer dndKitId="1660ace0-6428-457a-bb22-535d41d83c72" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="48" data-magicpath-path="ContactPage.tsx">
                <SortableContainer dndKitId="fa6002ec-1605-4d85-bf26-baeaa485e33d" containerType="regular" prevTag="div" className="bg-[#5e7155]/10 p-3 rounded-full flex-shrink-0" data-magicpath-id="49" data-magicpath-path="ContactPage.tsx">
                  <Clock className="w-6 h-6 text-[#5e7155]" data-magicpath-id="50" data-magicpath-path="ContactPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="23ed4983-5346-41a9-87bb-14157816a4be" containerType="regular" prevTag="div" data-magicpath-id="51" data-magicpath-path="ContactPage.tsx">
                  <p className="text-sm text-[#5e7155] font-semibold mb-1" data-magicpath-id="52" data-magicpath-path="ContactPage.tsx">
                    Response Time
                  </p>
                  <p className="text-[#2D2D2D]" data-magicpath-id="53" data-magicpath-path="ContactPage.tsx">
                    Within 24-48 hours<br data-magicpath-id="54" data-magicpath-path="ContactPage.tsx" />
                    <span className="text-sm text-[#5e7155]" data-magicpath-id="55" data-magicpath-path="ContactPage.tsx">Monday–Friday</span>
                  </p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {/* Order Times for Treats */}
          <SortableContainer dndKitId="14c4c56e-254c-43b9-8f25-badf9ba94422" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="bg-[#c76942] text-white rounded-2xl p-8 sm:p-10 shadow-lg mt-8 text-center" data-magicpath-id="56" data-magicpath-path="ContactPage.tsx">
            <h3 className="font-serif text-2xl sm:text-3xl mb-4" data-magicpath-id="57" data-magicpath-path="ContactPage.tsx">
              Pep Me Up Orders
            </h3>
            <p className="text-white/90 mb-4 text-lg" data-magicpath-id="58" data-magicpath-path="ContactPage.tsx">
              Order Window:<br data-magicpath-id="59" data-magicpath-path="ContactPage.tsx" />
              <strong className="text-white text-xl" data-magicpath-id="60" data-magicpath-path="ContactPage.tsx">Every Friday, 5am–9am</strong>
            </p>
            <p className="text-white/90" data-magicpath-id="61" data-magicpath-path="ContactPage.tsx">
              Collection: Dun Laoghaire<br data-magicpath-id="62" data-magicpath-path="ContactPage.tsx" />
              Saturday Delivery: Dublin City Centre
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Closing Message */}
      <SortableContainer dndKitId="d6a7d41f-8b0b-469c-b667-94b02f4b146a" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" aria-label="Closing message" data-magicpath-id="63" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="642d8da7-e13c-47c5-a452-9362aeaa75f0" containerType="regular" prevTag="div" className="max-w-3xl mx-auto text-center" data-magicpath-id="64" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="f44df83c-3813-4cd1-a794-a61197e3cf3d" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} data-magicpath-id="65" data-magicpath-path="ContactPage.tsx">
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2D2D2D] mb-6 leading-relaxed italic" data-magicpath-id="66" data-magicpath-path="ContactPage.tsx">
              "Looking forward to connecting."
            </p>
            <p className="text-[#5e7155] text-lg sm:text-xl" data-magicpath-id="67" data-magicpath-path="ContactPage.tsx">
              — Juliana
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Quick Links to Other Sections */}
      <SortableContainer dndKitId="7339cd12-e4db-4fcd-a909-9891287b22aa" containerType="regular" prevTag="section" className="py-16 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="explore-heading" data-magicpath-id="68" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="40542f3d-1921-423a-a15e-8ef8c8e98ed6" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="69" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="e5cff6d7-eb07-4bca-bc4a-4175f1d7c274" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} data-magicpath-id="70" data-magicpath-path="ContactPage.tsx">
            <h2 id="explore-heading" className="font-serif text-2xl sm:text-3xl text-center text-[#2D2D2D] mb-8" data-magicpath-id="71" data-magicpath-path="ContactPage.tsx">
              Or Explore More
            </h2>
            <SortableContainer dndKitId="90e04f62-a796-4a60-b8a7-7833d88fe84c" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6" data-magicpath-id="72" data-magicpath-path="ContactPage.tsx">
              <SortableContainer dndKitId="70aaa150-aed4-43f4-8d32-aab8537e35ff" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#offerings')} className="bg-white hover:bg-[#5e7155] hover:text-white text-[#2D2D2D] p-6 rounded-xl shadow-md transition-all group" data-magicpath-id="73" data-magicpath-path="ContactPage.tsx">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-white" data-magicpath-id="74" data-magicpath-path="ContactPage.tsx">
                  Retreat Catering
                </h3>
                <p className="text-sm text-[#4A4A4A] group-hover:text-white/90" data-magicpath-id="75" data-magicpath-path="ContactPage.tsx">
                  Learn about catering services
                </p>
              </SortableContainer>

              <SortableContainer dndKitId="a36ac809-5ffb-4ab7-b40d-3fdadc7015d5" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#treats')} className="bg-white hover:bg-[#c76942] hover:text-white text-[#2D2D2D] p-6 rounded-xl shadow-md transition-all group" data-magicpath-id="76" data-magicpath-path="ContactPage.tsx">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-white" data-magicpath-id="77" data-magicpath-path="ContactPage.tsx">
                  Pep Me Up Treats
                </h3>
                <p className="text-sm text-[#4A4A4A] group-hover:text-white/90" data-magicpath-id="78" data-magicpath-path="ContactPage.tsx">
                  Browse weekly treats menu
                </p>
              </SortableContainer>

              <SortableContainer dndKitId="15a64351-4bb6-4408-b4a9-b6f7c0c7030c" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#about')} className="bg-white hover:bg-[#5e7155] hover:text-white text-[#2D2D2D] p-6 rounded-xl shadow-md transition-all group" data-magicpath-id="79" data-magicpath-path="ContactPage.tsx">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-white" data-magicpath-id="80" data-magicpath-path="ContactPage.tsx">
                  About Juliana
                </h3>
                <p className="text-sm text-[#4A4A4A] group-hover:text-white/90" data-magicpath-id="81" data-magicpath-path="ContactPage.tsx">
                  Read my full story
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
}