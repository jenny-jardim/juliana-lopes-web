"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock, Heart, CheckCircle } from 'lucide-react';
export interface ContactPageProps {
  onNavigate?: (section: string) => void;
  mpid?: string;
}
export default function ContactPage({
  onNavigate
}: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Question',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const subjects = ['Retreat Catering', 'Pep Me Up Treats', 'General Question', 'Custom Order', 'Corporate Event'];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Question',
        message: ''
      });
    }, 3000);
  };
  return <SortableContainer dndKitId="1fd68efb-5ac1-4aca-aede-8795cec84d0a" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="ContactPage.tsx">
      {/* Hero Section */}
      <SortableContainer dndKitId="80ac0359-fa05-4060-8044-4bbbd79ff976" containerType="regular" prevTag="section" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-[#5e7155] to-[#404d3a]" role="banner" aria-label="Contact page hero section" data-magicpath-id="1" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="2cb4f932-5aea-47b0-8095-d1ea67e7f537" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="2" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="d642e3f7-93a5-423f-87a2-fb978385019e" containerType="regular" prevTag="motion.div" initial={{
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

      {/* Contact Form Section */}
      <SortableContainer dndKitId="90c63181-13e4-452a-9001-aef1373a6d65" containerType="regular" prevTag="main" data-magicpath-id="7" data-magicpath-path="ContactPage.tsx">
      <SortableContainer dndKitId="21026132-57ff-43db-8b28-dc54fd741bce" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6" aria-labelledby="contact-form-heading" data-magicpath-id="8" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="6b0caf94-2452-4857-a9d2-b0a79da3d293" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="9" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="37d721ee-cec7-4ff1-b682-dd41a9d2c3e9" containerType="regular" prevTag="div" className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12" data-magicpath-id="10" data-magicpath-path="ContactPage.tsx">
            {/* Form */}
            <SortableContainer dndKitId="5673b7e2-9bc3-4ccb-9cfc-08f40dc5ef23" containerType="regular" prevTag="motion.div" initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="lg:col-span-3" data-magicpath-id="11" data-magicpath-path="ContactPage.tsx">
              <SortableContainer dndKitId="575cd065-63bf-4039-8979-5804ffbbfd0e" containerType="regular" prevTag="div" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10" data-magicpath-id="12" data-magicpath-path="ContactPage.tsx">
                <h2 id="contact-form-heading" className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2D2D2D] mb-3" data-magicpath-id="13" data-magicpath-path="ContactPage.tsx">
                  Quick Contact Form
                </h2>
                <p className="text-[#5e7155] mb-8 text-sm sm:text-base" data-magicpath-id="14" data-magicpath-path="ContactPage.tsx">
                  Every email gets a personal response. Every customer matters.
                </p>

                {isSubmitted ? <SortableContainer dndKitId="942e8a95-730b-4aef-8653-c63b39434d0c" containerType="regular" prevTag="motion.div" initial={{
                  opacity: 0,
                  scale: 0.9
                }} animate={{
                  opacity: 1,
                  scale: 1
                }} className="text-center py-12" role="status" aria-live="polite" data-magicpath-id="15" data-magicpath-path="ContactPage.tsx">
                    <CheckCircle className="w-16 h-16 text-[#5e7155] mx-auto mb-4" data-magicpath-id="16" data-magicpath-path="ContactPage.tsx" />
                    <h3 className="text-2xl font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="17" data-magicpath-path="ContactPage.tsx">
                      Message Sent!
                    </h3>
                    <p className="text-[#4A4A4A]" data-magicpath-id="18" data-magicpath-path="ContactPage.tsx">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </SortableContainer> : <SortableContainer dndKitId="8315d7b4-d917-400d-8a30-30c434ed8f75" containerType="regular" prevTag="form" onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form" data-magicpath-id="19" data-magicpath-path="ContactPage.tsx">
                    {/* Name */}
                    <SortableContainer dndKitId="0bd3265a-7475-46ee-95de-e6fcdd7e6674" containerType="regular" prevTag="div" data-magicpath-id="20" data-magicpath-path="ContactPage.tsx">
                      <label htmlFor="name" className="block text-[#2D2D2D] font-semibold mb-2 text-sm sm:text-base" data-magicpath-id="21" data-magicpath-path="ContactPage.tsx">
                        Name *
                      </label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#5e7155] focus:outline-none transition-colors text-[#2D2D2D] text-sm sm:text-base" placeholder="Your name" data-magicpath-id="22" data-magicpath-path="ContactPage.tsx" />
                    </SortableContainer>

                    {/* Email */}
                    <SortableContainer dndKitId="dbc47587-0258-470e-9971-f35425310ef4" containerType="regular" prevTag="div" data-magicpath-id="23" data-magicpath-path="ContactPage.tsx">
                      <label htmlFor="email" className="block text-[#2D2D2D] font-semibold mb-2 text-sm sm:text-base" data-magicpath-id="24" data-magicpath-path="ContactPage.tsx">
                        Email *
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#5e7155] focus:outline-none transition-colors text-[#2D2D2D] text-sm sm:text-base" placeholder="your.email@example.com" data-magicpath-id="25" data-magicpath-path="ContactPage.tsx" />
                    </SortableContainer>

                    {/* Phone */}
                    <SortableContainer dndKitId="5d57897e-5f24-4579-a5b9-e8e3694df165" containerType="regular" prevTag="div" data-magicpath-id="26" data-magicpath-path="ContactPage.tsx">
                      <label htmlFor="phone" className="block text-[#2D2D2D] font-semibold mb-2 text-sm sm:text-base" data-magicpath-id="27" data-magicpath-path="ContactPage.tsx">
                        Phone <span className="text-[#5e7155] font-normal" data-magicpath-id="28" data-magicpath-path="ContactPage.tsx">(optional)</span>
                      </label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#5e7155] focus:outline-none transition-colors text-[#2D2D2D] text-sm sm:text-base" placeholder="+353 XX XXX XXXX" data-magicpath-id="29" data-magicpath-path="ContactPage.tsx" />
                    </SortableContainer>

                    {/* Subject */}
                    <SortableContainer dndKitId="7a3a95af-0b97-42a4-bbf4-ccbc22588136" containerType="regular" prevTag="div" data-magicpath-id="30" data-magicpath-path="ContactPage.tsx">
                      <label htmlFor="subject" className="block text-[#2D2D2D] font-semibold mb-2 text-sm sm:text-base" data-magicpath-id="31" data-magicpath-path="ContactPage.tsx">
                        What's this about? *
                      </label>
                      <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#5e7155] focus:outline-none transition-colors text-[#2D2D2D] text-sm sm:text-base appearance-none bg-white cursor-pointer" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%235e7155' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center'
                    }} data-magicpath-id="32" data-magicpath-path="ContactPage.tsx">
                        {subjects.map(subject => <option key={subject} value={subject} data-magicpath-uuid={(subject as any)["mpid"] ?? "unsafe"} data-magicpath-id="33" data-magicpath-path="ContactPage.tsx">
                            {subject}
                          </option>)}
                      </select>
                    </SortableContainer>

                    {/* Message */}
                    <SortableContainer dndKitId="96a76342-da53-4c9c-b7eb-338d03ef5a4e" containerType="regular" prevTag="div" data-magicpath-id="34" data-magicpath-path="ContactPage.tsx">
                      <label htmlFor="message" className="block text-[#2D2D2D] font-semibold mb-2 text-sm sm:text-base" data-magicpath-id="35" data-magicpath-path="ContactPage.tsx">
                        Message *
                      </label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#5e7155] focus:outline-none transition-colors text-[#2D2D2D] resize-none text-sm sm:text-base" placeholder="Tell me more about what you're looking for..." data-magicpath-id="36" data-magicpath-path="ContactPage.tsx" />
                    </SortableContainer>

                    {/* Submit Button */}
                    <button type="submit" disabled={isSubmitting} className="w-full bg-[#c76942] text-white px-8 py-4 rounded-full hover:bg-[#b65e38] transition-all font-semibold text-base sm:text-lg flex items-center justify-center gap-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed" data-magicpath-id="37" data-magicpath-path="ContactPage.tsx">
                      {isSubmitting ? <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" data-magicpath-id="38" data-magicpath-path="ContactPage.tsx" />
                          Sending...
                        </> : <>
                          <Send className="w-5 h-5" data-magicpath-id="39" data-magicpath-path="ContactPage.tsx" />
                          Send Message
                        </>}
                    </button>
                  </SortableContainer>}
              </SortableContainer>
            </SortableContainer>

            {/* Contact Info Sidebar */}
            <SortableContainer dndKitId="4786a7ec-cd0e-4d75-b949-15978cb5fa89" containerType="regular" prevTag="motion.div" initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="lg:col-span-2 space-y-6" data-magicpath-id="40" data-magicpath-path="ContactPage.tsx">
              {/* Response Promise */}
              <SortableContainer dndKitId="f1f44b63-c738-4e08-8d39-13e5da86f5bc" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#5e7155] to-[#404d3a] text-white rounded-2xl p-6 sm:p-8 shadow-lg" data-magicpath-id="41" data-magicpath-path="ContactPage.tsx">
                <SortableContainer dndKitId="af5566fb-611c-4334-90f2-03ab10631de1" containerType="regular" prevTag="div" className="flex items-start gap-3 mb-4" data-magicpath-id="42" data-magicpath-path="ContactPage.tsx">
                  <Heart className="w-6 h-6 flex-shrink-0 mt-1" data-magicpath-id="43" data-magicpath-path="ContactPage.tsx" />
                  <SortableContainer dndKitId="de86a3ea-8771-4694-8b3c-af14c7377e39" containerType="regular" prevTag="div" data-magicpath-id="44" data-magicpath-path="ContactPage.tsx">
                    <h3 className="font-serif text-xl sm:text-2xl mb-3" data-magicpath-id="45" data-magicpath-path="ContactPage.tsx">
                      My Promise
                    </h3>
                    <p className="text-white/90 leading-relaxed text-sm sm:text-base" data-magicpath-id="46" data-magicpath-path="ContactPage.tsx">
                      Every email gets a personal response. Every customer matters.
                    </p>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>

              {/* Contact Details */}
              <SortableContainer dndKitId="1bb2103a-7c59-4539-88f0-c94fce60f3d2" containerType="regular" prevTag="div" className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg space-y-5" data-magicpath-id="47" data-magicpath-path="ContactPage.tsx">
                <h3 className="font-serif text-xl sm:text-2xl text-[#2D2D2D] mb-4" data-magicpath-id="48" data-magicpath-path="ContactPage.tsx">
                  Get in Touch
                </h3>

                <SortableContainer dndKitId="5a431293-c44e-45dc-8067-00d77644c69b" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="49" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="b93d9c03-d012-4256-aeb7-863f3863deb3" containerType="regular" prevTag="div" className="bg-[#5e7155]/10 p-3 rounded-full flex-shrink-0" data-magicpath-id="50" data-magicpath-path="ContactPage.tsx">
                    <Mail className="w-5 h-5 text-[#5e7155]" data-magicpath-id="51" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="3e6d7f85-6bff-4c7f-87f8-c47c4dcdb5a4" containerType="regular" prevTag="div" data-magicpath-id="52" data-magicpath-path="ContactPage.tsx">
                    <p className="text-xs sm:text-sm text-[#5e7155] font-semibold mb-1" data-magicpath-id="53" data-magicpath-path="ContactPage.tsx">
                      Email
                    </p>
                    <a href="mailto:hello@julianaveganchef.com" className="text-[#2D2D2D] hover:text-[#5e7155] transition-colors text-sm sm:text-base" data-magicpath-id="54" data-magicpath-path="ContactPage.tsx">
                      hello@julianaveganchef.com
                    </a>
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="28a51664-cf35-4023-985b-d1e2beecb588" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="55" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="7cefdba0-763d-4b0b-9e3a-a18df5939095" containerType="regular" prevTag="div" className="bg-[#5e7155]/10 p-3 rounded-full flex-shrink-0" data-magicpath-id="56" data-magicpath-path="ContactPage.tsx">
                    <Phone className="w-5 h-5 text-[#5e7155]" data-magicpath-id="57" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="8209d33b-6bc2-4546-ac15-af984f1fbdd2" containerType="regular" prevTag="div" data-magicpath-id="58" data-magicpath-path="ContactPage.tsx">
                    <p className="text-xs sm:text-sm text-[#5e7155] font-semibold mb-1" data-magicpath-id="59" data-magicpath-path="ContactPage.tsx">
                      Phone
                    </p>
                    <a href="tel:+353871234567" className="text-[#2D2D2D] hover:text-[#5e7155] transition-colors text-sm sm:text-base" data-magicpath-id="60" data-magicpath-path="ContactPage.tsx">
                      +353 87 123 4567
                    </a>
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="0fe3db60-b348-4733-90b7-4bc0b9a855af" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="61" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="f6f6e8dd-7c01-4f76-9a28-fc25bc3364ab" containerType="regular" prevTag="div" className="bg-[#5e7155]/10 p-3 rounded-full flex-shrink-0" data-magicpath-id="62" data-magicpath-path="ContactPage.tsx">
                    <MapPin className="w-5 h-5 text-[#5e7155]" data-magicpath-id="63" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="f9e9ccb6-5da9-47a5-aa23-1245027a8696" containerType="regular" prevTag="div" data-magicpath-id="64" data-magicpath-path="ContactPage.tsx">
                    <p className="text-xs sm:text-sm text-[#5e7155] font-semibold mb-1" data-magicpath-id="65" data-magicpath-path="ContactPage.tsx">
                      Location
                    </p>
                    <p className="text-[#2D2D2D] text-sm sm:text-base" data-magicpath-id="66" data-magicpath-path="ContactPage.tsx">
                      Dun Laoghaire<br data-magicpath-id="67" data-magicpath-path="ContactPage.tsx" />
                      County Dublin, Ireland
                    </p>
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="c8836435-37f1-4a94-a3c0-da1841e41a81" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="68" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="913cd4c2-4fac-4c70-85c2-87df27e5f999" containerType="regular" prevTag="div" className="bg-[#5e7155]/10 p-3 rounded-full flex-shrink-0" data-magicpath-id="69" data-magicpath-path="ContactPage.tsx">
                    <Clock className="w-5 h-5 text-[#5e7155]" data-magicpath-id="70" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="70afa81c-1214-4eba-aadf-95b6aed3b4b7" containerType="regular" prevTag="div" data-magicpath-id="71" data-magicpath-path="ContactPage.tsx">
                    <p className="text-xs sm:text-sm text-[#5e7155] font-semibold mb-1" data-magicpath-id="72" data-magicpath-path="ContactPage.tsx">
                      Response Time
                    </p>
                    <p className="text-[#2D2D2D] text-sm sm:text-base" data-magicpath-id="73" data-magicpath-path="ContactPage.tsx">
                      Within 24-48 hours<br data-magicpath-id="74" data-magicpath-path="ContactPage.tsx" />
                      <span className="text-xs text-[#5e7155]" data-magicpath-id="75" data-magicpath-path="ContactPage.tsx">Monday–Friday</span>
                    </p>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>

              {/* Order Times for Treats */}
              <SortableContainer dndKitId="0413c20d-740f-41c4-8a78-93fbc2a8a275" containerType="regular" prevTag="div" className="bg-[#c76942] text-white rounded-2xl p-6 sm:p-8 shadow-lg" data-magicpath-id="76" data-magicpath-path="ContactPage.tsx">
                <h3 className="font-serif text-xl sm:text-2xl mb-3" data-magicpath-id="77" data-magicpath-path="ContactPage.tsx">
                  Pep Me Up Orders
                </h3>
                <p className="text-white/90 mb-4 text-sm sm:text-base" data-magicpath-id="78" data-magicpath-path="ContactPage.tsx">
                  Order Window:<br data-magicpath-id="79" data-magicpath-path="ContactPage.tsx" />
                  <strong className="text-white" data-magicpath-id="80" data-magicpath-path="ContactPage.tsx">Every Friday, 5am–9am</strong>
                </p>
                <p className="text-white/90 text-sm" data-magicpath-id="81" data-magicpath-path="ContactPage.tsx">
                  Collection: Dun Laoghaire<br data-magicpath-id="82" data-magicpath-path="ContactPage.tsx" />
                  Saturday Delivery: Dublin City Centre
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Closing Message */}
      <SortableContainer dndKitId="64fb08f9-14b6-41c7-8d6b-bfb04bc8d156" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" aria-label="Closing message" data-magicpath-id="83" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="f5bbf02f-8fe5-456d-9d06-c87c407c1c61" containerType="regular" prevTag="div" className="max-w-3xl mx-auto text-center" data-magicpath-id="84" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="b8037535-af04-43dc-9456-80c0b1f17c51" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} data-magicpath-id="85" data-magicpath-path="ContactPage.tsx">
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2D2D2D] mb-6 leading-relaxed italic" data-magicpath-id="86" data-magicpath-path="ContactPage.tsx">
              "Looking forward to connecting."
            </p>
            <p className="text-[#5e7155] text-lg sm:text-xl" data-magicpath-id="87" data-magicpath-path="ContactPage.tsx">
              — Juliana
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Quick Links to Other Sections */}
      <SortableContainer dndKitId="0bef6bc2-793c-4f1a-b666-56b31e27fbe8" containerType="regular" prevTag="section" className="py-16 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="explore-heading" data-magicpath-id="88" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="16a4c8f9-bcb5-4290-a776-c0ab3188cee6" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="89" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="48690b3a-fb16-46d0-84c8-417888306a8a" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} data-magicpath-id="90" data-magicpath-path="ContactPage.tsx">
            <h2 id="explore-heading" className="font-serif text-2xl sm:text-3xl text-center text-[#2D2D2D] mb-8" data-magicpath-id="91" data-magicpath-path="ContactPage.tsx">
              Or Explore More
            </h2>
            <SortableContainer dndKitId="195bfa49-2db7-4dce-8496-46bb005c400c" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6" data-magicpath-id="92" data-magicpath-path="ContactPage.tsx">
              <SortableContainer dndKitId="912e4d88-14ce-4182-bdb8-5a3dd5f827a7" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#offerings')} className="bg-white hover:bg-[#5e7155] hover:text-white text-[#2D2D2D] p-6 rounded-xl shadow-md transition-all group" data-magicpath-id="93" data-magicpath-path="ContactPage.tsx">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-white" data-magicpath-id="94" data-magicpath-path="ContactPage.tsx">
                  Retreat Catering
                </h3>
                <p className="text-sm text-[#4A4A4A] group-hover:text-white/90" data-magicpath-id="95" data-magicpath-path="ContactPage.tsx">
                  Learn about catering services
                </p>
              </SortableContainer>

              <SortableContainer dndKitId="cd2c9acf-c6ac-4a01-b50b-83d90cc86cb3" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#treats')} className="bg-white hover:bg-[#c76942] hover:text-white text-[#2D2D2D] p-6 rounded-xl shadow-md transition-all group" data-magicpath-id="96" data-magicpath-path="ContactPage.tsx">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-white" data-magicpath-id="97" data-magicpath-path="ContactPage.tsx">
                  Pep Me Up Treats
                </h3>
                <p className="text-sm text-[#4A4A4A] group-hover:text-white/90" data-magicpath-id="98" data-magicpath-path="ContactPage.tsx">
                  Browse weekly treats menu
                </p>
              </SortableContainer>

              <SortableContainer dndKitId="35ed0cab-03b7-4e17-bded-4bab1ea71e16" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#about')} className="bg-white hover:bg-[#5e7155] hover:text-white text-[#2D2D2D] p-6 rounded-xl shadow-md transition-all group" data-magicpath-id="99" data-magicpath-path="ContactPage.tsx">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-white" data-magicpath-id="100" data-magicpath-path="ContactPage.tsx">
                  About Juliana
                </h3>
                <p className="text-sm text-[#4A4A4A] group-hover:text-white/90" data-magicpath-id="101" data-magicpath-path="ContactPage.tsx">
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