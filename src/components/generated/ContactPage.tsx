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
  return <SortableContainer dndKitId="d34b5558-c858-4206-9a67-275f1999ea14" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="ContactPage.tsx">
      {/* Hero Section */}
      <SortableContainer dndKitId="105dbf83-02fb-4aab-9f70-08131ab18543" containerType="regular" prevTag="section" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-[#5e7155] to-[#404d3a]" data-magicpath-id="1" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="aa67aa14-b79b-483e-b829-9ee1a23acfd2" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="2" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="3ca7cc5a-90cd-449f-91fd-31c48ac954a3" containerType="regular" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="d02df383-f48a-4331-8d5a-5c110202f1e6" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6" data-magicpath-id="7" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="dfe7a1d0-d1b7-4972-93b2-4dda5045ea0d" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="8" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="11074b65-4b91-41e6-8376-90f41d774cef" containerType="regular" prevTag="div" className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12" data-magicpath-id="9" data-magicpath-path="ContactPage.tsx">
            {/* Form */}
            <SortableContainer dndKitId="55c1da67-94c3-47e9-847a-2227365af162" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="lg:col-span-3" data-magicpath-id="10" data-magicpath-path="ContactPage.tsx">
              <SortableContainer dndKitId="596fca61-ab72-4ec9-b640-1ef99f3d3667" containerType="regular" prevTag="div" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10" data-magicpath-id="11" data-magicpath-path="ContactPage.tsx">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2D2D2D] mb-3" data-magicpath-id="12" data-magicpath-path="ContactPage.tsx">
                  Quick Contact Form
                </h2>
                <p className="text-[#5e7155] mb-8 text-sm sm:text-base" data-magicpath-id="13" data-magicpath-path="ContactPage.tsx">
                  Every email gets a personal response. Every customer matters.
                </p>

                {isSubmitted ? <SortableContainer dndKitId="56e6ce96-36bd-4fe2-9349-147737ff0681" containerType="regular" prevTag="motion.div" initial={{
                opacity: 0,
                scale: 0.9
              }} animate={{
                opacity: 1,
                scale: 1
              }} className="text-center py-12" data-magicpath-id="14" data-magicpath-path="ContactPage.tsx">
                    <CheckCircle className="w-16 h-16 text-[#5e7155] mx-auto mb-4" data-magicpath-id="15" data-magicpath-path="ContactPage.tsx" />
                    <h3 className="text-2xl font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="16" data-magicpath-path="ContactPage.tsx">
                      Message Sent!
                    </h3>
                    <p className="text-[#4A4A4A]" data-magicpath-id="17" data-magicpath-path="ContactPage.tsx">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </SortableContainer> : <SortableContainer dndKitId="85e360c2-a02c-409c-a4b5-6b41473d5385" containerType="regular" prevTag="form" onSubmit={handleSubmit} className="space-y-6" data-magicpath-id="18" data-magicpath-path="ContactPage.tsx">
                    {/* Name */}
                    <SortableContainer dndKitId="78dae87f-a428-41b3-b4fd-50d1083ecbd9" containerType="regular" prevTag="div" data-magicpath-id="19" data-magicpath-path="ContactPage.tsx">
                      <label htmlFor="name" className="block text-[#2D2D2D] font-semibold mb-2 text-sm sm:text-base" data-magicpath-id="20" data-magicpath-path="ContactPage.tsx">
                        Name *
                      </label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#5e7155] focus:outline-none transition-colors text-[#2D2D2D] text-sm sm:text-base" placeholder="Your name" data-magicpath-id="21" data-magicpath-path="ContactPage.tsx" />
                    </SortableContainer>

                    {/* Email */}
                    <SortableContainer dndKitId="3f1cb28b-7895-4f94-bd24-cb6c22133c44" containerType="regular" prevTag="div" data-magicpath-id="22" data-magicpath-path="ContactPage.tsx">
                      <label htmlFor="email" className="block text-[#2D2D2D] font-semibold mb-2 text-sm sm:text-base" data-magicpath-id="23" data-magicpath-path="ContactPage.tsx">
                        Email *
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#5e7155] focus:outline-none transition-colors text-[#2D2D2D] text-sm sm:text-base" placeholder="your.email@example.com" data-magicpath-id="24" data-magicpath-path="ContactPage.tsx" />
                    </SortableContainer>

                    {/* Phone */}
                    <SortableContainer dndKitId="8898ddab-ea6e-4651-9369-45593b80805d" containerType="regular" prevTag="div" data-magicpath-id="25" data-magicpath-path="ContactPage.tsx">
                      <label htmlFor="phone" className="block text-[#2D2D2D] font-semibold mb-2 text-sm sm:text-base" data-magicpath-id="26" data-magicpath-path="ContactPage.tsx">
                        Phone <span className="text-[#5e7155] font-normal" data-magicpath-id="27" data-magicpath-path="ContactPage.tsx">(optional)</span>
                      </label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#5e7155] focus:outline-none transition-colors text-[#2D2D2D] text-sm sm:text-base" placeholder="+353 XX XXX XXXX" data-magicpath-id="28" data-magicpath-path="ContactPage.tsx" />
                    </SortableContainer>

                    {/* Subject */}
                    <SortableContainer dndKitId="dd4e35d0-d396-4d67-bc4d-422273ee2f9a" containerType="regular" prevTag="div" data-magicpath-id="29" data-magicpath-path="ContactPage.tsx">
                      <label htmlFor="subject" className="block text-[#2D2D2D] font-semibold mb-2 text-sm sm:text-base" data-magicpath-id="30" data-magicpath-path="ContactPage.tsx">
                        What's this about? *
                      </label>
                      <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#5e7155] focus:outline-none transition-colors text-[#2D2D2D] text-sm sm:text-base appearance-none bg-white cursor-pointer" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%235e7155' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center'
                  }} data-magicpath-id="31" data-magicpath-path="ContactPage.tsx">
                        {subjects.map(subject => <option key={subject} value={subject} data-magicpath-uuid={(subject as any)["mpid"] ?? "unsafe"} data-magicpath-id="32" data-magicpath-path="ContactPage.tsx">
                            {subject}
                          </option>)}
                      </select>
                    </SortableContainer>

                    {/* Message */}
                    <SortableContainer dndKitId="c80eef91-fab3-49b7-8999-f6190daf0009" containerType="regular" prevTag="div" data-magicpath-id="33" data-magicpath-path="ContactPage.tsx">
                      <label htmlFor="message" className="block text-[#2D2D2D] font-semibold mb-2 text-sm sm:text-base" data-magicpath-id="34" data-magicpath-path="ContactPage.tsx">
                        Message *
                      </label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#5e7155] focus:outline-none transition-colors text-[#2D2D2D] resize-none text-sm sm:text-base" placeholder="Tell me more about what you're looking for..." data-magicpath-id="35" data-magicpath-path="ContactPage.tsx" />
                    </SortableContainer>

                    {/* Submit Button */}
                    <button type="submit" disabled={isSubmitting} className="w-full bg-[#c76942] text-white px-8 py-4 rounded-full hover:bg-[#b65e38] transition-all font-semibold text-base sm:text-lg flex items-center justify-center gap-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed" data-magicpath-id="36" data-magicpath-path="ContactPage.tsx">
                      {isSubmitting ? <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" data-magicpath-id="37" data-magicpath-path="ContactPage.tsx" />
                          Sending...
                        </> : <>
                          <Send className="w-5 h-5" data-magicpath-id="38" data-magicpath-path="ContactPage.tsx" />
                          Send Message
                        </>}
                    </button>
                  </SortableContainer>}
              </SortableContainer>
            </SortableContainer>

            {/* Contact Info Sidebar */}
            <SortableContainer dndKitId="fc6365d7-6ea9-4dff-80e2-b7a51dabd0f1" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="lg:col-span-2 space-y-6" data-magicpath-id="39" data-magicpath-path="ContactPage.tsx">
              {/* Response Promise */}
              <SortableContainer dndKitId="3f6fdb57-5194-4c6c-9231-9142a7514e86" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#5e7155] to-[#404d3a] text-white rounded-2xl p-6 sm:p-8 shadow-lg" data-magicpath-id="40" data-magicpath-path="ContactPage.tsx">
                <SortableContainer dndKitId="6cc6eb12-0b88-4ab2-aad3-271ce63fa3d9" containerType="regular" prevTag="div" className="flex items-start gap-3 mb-4" data-magicpath-id="41" data-magicpath-path="ContactPage.tsx">
                  <Heart className="w-6 h-6 flex-shrink-0 mt-1" data-magicpath-id="42" data-magicpath-path="ContactPage.tsx" />
                  <SortableContainer dndKitId="54c6c19b-1974-4050-a685-5a6ac3491812" containerType="regular" prevTag="div" data-magicpath-id="43" data-magicpath-path="ContactPage.tsx">
                    <h3 className="font-serif text-xl sm:text-2xl mb-3" data-magicpath-id="44" data-magicpath-path="ContactPage.tsx">
                      My Promise
                    </h3>
                    <p className="text-white/90 leading-relaxed text-sm sm:text-base" data-magicpath-id="45" data-magicpath-path="ContactPage.tsx">
                      Every email gets a personal response. Every customer matters.
                    </p>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>

              {/* Contact Details */}
              <SortableContainer dndKitId="b3ca978c-72df-41e7-947a-a475321ea381" containerType="regular" prevTag="div" className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg space-y-5" data-magicpath-id="46" data-magicpath-path="ContactPage.tsx">
                <h3 className="font-serif text-xl sm:text-2xl text-[#2D2D2D] mb-4" data-magicpath-id="47" data-magicpath-path="ContactPage.tsx">
                  Get in Touch
                </h3>

                <SortableContainer dndKitId="467ceb02-5ebc-49fd-8ea4-56a126219720" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="48" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="9ca3aba3-d524-4a78-81d2-760b51350f47" containerType="regular" prevTag="div" className="bg-[#5e7155]/10 p-3 rounded-full flex-shrink-0" data-magicpath-id="49" data-magicpath-path="ContactPage.tsx">
                    <Mail className="w-5 h-5 text-[#5e7155]" data-magicpath-id="50" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="d2f7efc4-13d9-431c-96ff-38097b0d59d6" containerType="regular" prevTag="div" data-magicpath-id="51" data-magicpath-path="ContactPage.tsx">
                    <p className="text-xs sm:text-sm text-[#5e7155] font-semibold mb-1" data-magicpath-id="52" data-magicpath-path="ContactPage.tsx">
                      Email
                    </p>
                    <a href="mailto:hello@julianaveganchef.com" className="text-[#2D2D2D] hover:text-[#5e7155] transition-colors text-sm sm:text-base" data-magicpath-id="53" data-magicpath-path="ContactPage.tsx">
                      hello@julianaveganchef.com
                    </a>
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="52902711-10bc-4114-a136-0da59f76285f" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="54" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="175008f6-fc26-4b37-a4ce-ea6468727f5a" containerType="regular" prevTag="div" className="bg-[#5e7155]/10 p-3 rounded-full flex-shrink-0" data-magicpath-id="55" data-magicpath-path="ContactPage.tsx">
                    <Phone className="w-5 h-5 text-[#5e7155]" data-magicpath-id="56" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="24966edf-47e1-47ce-811b-84a9d81c3479" containerType="regular" prevTag="div" data-magicpath-id="57" data-magicpath-path="ContactPage.tsx">
                    <p className="text-xs sm:text-sm text-[#5e7155] font-semibold mb-1" data-magicpath-id="58" data-magicpath-path="ContactPage.tsx">
                      Phone
                    </p>
                    <a href="tel:+353871234567" className="text-[#2D2D2D] hover:text-[#5e7155] transition-colors text-sm sm:text-base" data-magicpath-id="59" data-magicpath-path="ContactPage.tsx">
                      +353 87 123 4567
                    </a>
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="4afb48e0-b9e3-43f5-9a3c-17ac2db24df0" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="60" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="6bd8ba53-1f5b-469c-91f9-5cf426e96084" containerType="regular" prevTag="div" className="bg-[#5e7155]/10 p-3 rounded-full flex-shrink-0" data-magicpath-id="61" data-magicpath-path="ContactPage.tsx">
                    <MapPin className="w-5 h-5 text-[#5e7155]" data-magicpath-id="62" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="6054dac9-3cca-4210-ae07-efd2a14e3660" containerType="regular" prevTag="div" data-magicpath-id="63" data-magicpath-path="ContactPage.tsx">
                    <p className="text-xs sm:text-sm text-[#5e7155] font-semibold mb-1" data-magicpath-id="64" data-magicpath-path="ContactPage.tsx">
                      Location
                    </p>
                    <p className="text-[#2D2D2D] text-sm sm:text-base" data-magicpath-id="65" data-magicpath-path="ContactPage.tsx">
                      Dun Laoghaire<br data-magicpath-id="66" data-magicpath-path="ContactPage.tsx" />
                      County Dublin, Ireland
                    </p>
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="19b7cfbf-e8bb-49b0-bfde-7591452b08e7" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="67" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="796cd562-7f80-48ac-8c0b-22fd50f9de26" containerType="regular" prevTag="div" className="bg-[#5e7155]/10 p-3 rounded-full flex-shrink-0" data-magicpath-id="68" data-magicpath-path="ContactPage.tsx">
                    <Clock className="w-5 h-5 text-[#5e7155]" data-magicpath-id="69" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="016fffa4-79f9-46a7-bfb1-81d1035f5019" containerType="regular" prevTag="div" data-magicpath-id="70" data-magicpath-path="ContactPage.tsx">
                    <p className="text-xs sm:text-sm text-[#5e7155] font-semibold mb-1" data-magicpath-id="71" data-magicpath-path="ContactPage.tsx">
                      Response Time
                    </p>
                    <p className="text-[#2D2D2D] text-sm sm:text-base" data-magicpath-id="72" data-magicpath-path="ContactPage.tsx">
                      Within 24-48 hours<br data-magicpath-id="73" data-magicpath-path="ContactPage.tsx" />
                      <span className="text-xs text-[#5e7155]" data-magicpath-id="74" data-magicpath-path="ContactPage.tsx">Monday–Friday</span>
                    </p>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>

              {/* Order Times for Treats */}
              <SortableContainer dndKitId="e534a81a-5553-437d-a8a1-134794055ac0" containerType="regular" prevTag="div" className="bg-[#c76942] text-white rounded-2xl p-6 sm:p-8 shadow-lg" data-magicpath-id="75" data-magicpath-path="ContactPage.tsx">
                <h3 className="font-serif text-xl sm:text-2xl mb-3" data-magicpath-id="76" data-magicpath-path="ContactPage.tsx">
                  Pep Me Up Orders
                </h3>
                <p className="text-white/90 mb-4 text-sm sm:text-base" data-magicpath-id="77" data-magicpath-path="ContactPage.tsx">
                  Order Window:<br data-magicpath-id="78" data-magicpath-path="ContactPage.tsx" />
                  <strong className="text-white" data-magicpath-id="79" data-magicpath-path="ContactPage.tsx">Every Friday, 5am–9am</strong>
                </p>
                <p className="text-white/90 text-sm" data-magicpath-id="80" data-magicpath-path="ContactPage.tsx">
                  Collection: Dun Laoghaire<br data-magicpath-id="81" data-magicpath-path="ContactPage.tsx" />
                  Saturday Delivery: Dublin City Centre
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Closing Message */}
      <SortableContainer dndKitId="a7c3d2d7-336f-4a22-973c-42c620ca4317" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" data-magicpath-id="82" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="8b3a8114-ece8-484d-85e6-c5a702a27c5c" containerType="regular" prevTag="div" className="max-w-3xl mx-auto text-center" data-magicpath-id="83" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="3266fcb7-09bd-46d3-9148-f0659c4a8d5f" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} data-magicpath-id="84" data-magicpath-path="ContactPage.tsx">
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2D2D2D] mb-6 leading-relaxed italic" data-magicpath-id="85" data-magicpath-path="ContactPage.tsx">
              "Looking forward to connecting."
            </p>
            <p className="text-[#5e7155] text-lg sm:text-xl" data-magicpath-id="86" data-magicpath-path="ContactPage.tsx">
              — Juliana
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Quick Links to Other Sections */}
      <SortableContainer dndKitId="5d7fdefd-f752-4aac-a87d-198ed38570c0" containerType="regular" prevTag="section" className="py-16 px-4 sm:px-6 bg-[#F5F1E8]" data-magicpath-id="87" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="b458edf6-38b5-4045-8ff8-a6c69bd0e07c" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="88" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="87d3e60f-aad3-454f-9f3e-4f773e28914a" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} data-magicpath-id="89" data-magicpath-path="ContactPage.tsx">
            <h2 className="font-serif text-2xl sm:text-3xl text-center text-[#2D2D2D] mb-8" data-magicpath-id="90" data-magicpath-path="ContactPage.tsx">
              Or Explore More
            </h2>
            <SortableContainer dndKitId="c3560dd3-2642-470a-9249-e35fffcefba2" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6" data-magicpath-id="91" data-magicpath-path="ContactPage.tsx">
              <SortableContainer dndKitId="b9cc5233-946f-4104-b14a-99d4b938323d" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#offerings')} className="bg-white hover:bg-[#5e7155] hover:text-white text-[#2D2D2D] p-6 rounded-xl shadow-md transition-all group" data-magicpath-id="92" data-magicpath-path="ContactPage.tsx">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-white" data-magicpath-id="93" data-magicpath-path="ContactPage.tsx">
                  Retreat Catering
                </h3>
                <p className="text-sm text-[#4A4A4A] group-hover:text-white/90" data-magicpath-id="94" data-magicpath-path="ContactPage.tsx">
                  Learn about catering services
                </p>
              </SortableContainer>

              <SortableContainer dndKitId="4bfa6742-a0eb-4b0d-bcd2-0185e8a167be" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#treats')} className="bg-white hover:bg-[#c76942] hover:text-white text-[#2D2D2D] p-6 rounded-xl shadow-md transition-all group" data-magicpath-id="95" data-magicpath-path="ContactPage.tsx">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-white" data-magicpath-id="96" data-magicpath-path="ContactPage.tsx">
                  Pep Me Up Treats
                </h3>
                <p className="text-sm text-[#4A4A4A] group-hover:text-white/90" data-magicpath-id="97" data-magicpath-path="ContactPage.tsx">
                  Browse weekly treats menu
                </p>
              </SortableContainer>

              <SortableContainer dndKitId="2506f82c-38f4-401f-95a2-35916e0b9817" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#about')} className="bg-white hover:bg-[#5e7155] hover:text-white text-[#2D2D2D] p-6 rounded-xl shadow-md transition-all group" data-magicpath-id="98" data-magicpath-path="ContactPage.tsx">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-white" data-magicpath-id="99" data-magicpath-path="ContactPage.tsx">
                  About Juliana
                </h3>
                <p className="text-sm text-[#4A4A4A] group-hover:text-white/90" data-magicpath-id="100" data-magicpath-path="ContactPage.tsx">
                  Read my full story
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
}