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
  return <SortableContainer dndKitId="c05f1a56-7fdf-4296-8d7f-695b1d7f56bf" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="ContactPage.tsx">
      {/* Hero Section */}
      <SortableContainer dndKitId="e3e7e455-ee9d-40bc-8691-46e9f7ae88a8" containerType="regular" prevTag="section" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-[#5e7155] to-[#404d3a]" role="banner" aria-label="Contact page hero section" data-magicpath-id="1" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="413b2d23-e74a-41a3-a9cd-4e5929bd5351" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="2" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="25061733-9c95-428c-a050-eff5cb09d862" containerType="regular" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="8a88faa7-7baf-4c29-ab74-36e1ffacf774" containerType="regular" prevTag="main" data-magicpath-id="7" data-magicpath-path="ContactPage.tsx">
      <SortableContainer dndKitId="f0f0e275-83c4-4dca-90d4-72df32b496bc" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6" aria-labelledby="contact-form-heading" data-magicpath-id="8" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="b5eb810f-6ec1-45fe-9daf-e7e8a4b98ac7" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="9" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="8ee50e61-7add-4d54-8164-e61d2944cc30" containerType="regular" prevTag="div" className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12" data-magicpath-id="10" data-magicpath-path="ContactPage.tsx">
            {/* Form */}
            <SortableContainer dndKitId="3e005abd-6417-486d-b972-dfca4a282ee3" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="14e5eca4-af97-47a0-94fb-3c9b73303204" containerType="regular" prevTag="div" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10" data-magicpath-id="12" data-magicpath-path="ContactPage.tsx">
                <h2 id="contact-form-heading" className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2D2D2D] mb-3" data-magicpath-id="13" data-magicpath-path="ContactPage.tsx">
                  Quick Contact Form
                </h2>
                <p className="text-[#5e7155] mb-8 text-sm sm:text-base" data-magicpath-id="14" data-magicpath-path="ContactPage.tsx">
                  Every email gets a personal response. Every customer matters.
                </p>

                {isSubmitted ? <SortableContainer dndKitId="bbbe764f-afa1-43d5-9b05-6e1655b09001" containerType="regular" prevTag="motion.div" initial={{
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
                  </SortableContainer> : <SortableContainer dndKitId="647ba653-3def-4d8f-a618-4dae72f70a9f" containerType="regular" prevTag="form" onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form" data-magicpath-id="19" data-magicpath-path="ContactPage.tsx">
                    {/* Name */}
                    <SortableContainer dndKitId="374c5322-cc03-4216-826b-1ad93968d301" containerType="regular" prevTag="div" data-magicpath-id="20" data-magicpath-path="ContactPage.tsx">
                      <label htmlFor="name" className="block text-[#2D2D2D] font-semibold mb-2 text-sm sm:text-base" data-magicpath-id="21" data-magicpath-path="ContactPage.tsx">
                        Name *
                      </label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#5e7155] focus:outline-none transition-colors text-[#2D2D2D] text-sm sm:text-base" placeholder="Your name" data-magicpath-id="22" data-magicpath-path="ContactPage.tsx" />
                    </SortableContainer>

                    {/* Email */}
                    <SortableContainer dndKitId="d4858357-5f10-4d44-b2fa-845f2fdbb95a" containerType="regular" prevTag="div" data-magicpath-id="23" data-magicpath-path="ContactPage.tsx">
                      <label htmlFor="email" className="block text-[#2D2D2D] font-semibold mb-2 text-sm sm:text-base" data-magicpath-id="24" data-magicpath-path="ContactPage.tsx">
                        Email *
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#5e7155] focus:outline-none transition-colors text-[#2D2D2D] text-sm sm:text-base" placeholder="your.email@example.com" data-magicpath-id="25" data-magicpath-path="ContactPage.tsx" />
                    </SortableContainer>

                    {/* Phone */}
                    <SortableContainer dndKitId="076b64e5-3d29-45a0-a443-8334c4d95ac2" containerType="regular" prevTag="div" data-magicpath-id="26" data-magicpath-path="ContactPage.tsx">
                      <label htmlFor="phone" className="block text-[#2D2D2D] font-semibold mb-2 text-sm sm:text-base" data-magicpath-id="27" data-magicpath-path="ContactPage.tsx">
                        Phone <span className="text-[#5e7155] font-normal" data-magicpath-id="28" data-magicpath-path="ContactPage.tsx">(optional)</span>
                      </label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#5e7155] focus:outline-none transition-colors text-[#2D2D2D] text-sm sm:text-base" placeholder="+353 XX XXX XXXX" data-magicpath-id="29" data-magicpath-path="ContactPage.tsx" />
                    </SortableContainer>

                    {/* Subject */}
                    <SortableContainer dndKitId="8e5c314b-cb68-4d67-9196-10e40f872524" containerType="regular" prevTag="div" data-magicpath-id="30" data-magicpath-path="ContactPage.tsx">
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
                    <SortableContainer dndKitId="9632ef4e-43ef-453c-8cd2-13d33dade5bf" containerType="regular" prevTag="div" data-magicpath-id="34" data-magicpath-path="ContactPage.tsx">
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
            <SortableContainer dndKitId="150c36da-3310-46f1-8f5b-f397f7b3faf6" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="7d9dee8e-8e73-44ee-b4af-7828acce4873" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#5e7155] to-[#404d3a] text-white rounded-2xl p-6 sm:p-8 shadow-lg" data-magicpath-id="41" data-magicpath-path="ContactPage.tsx">
                <SortableContainer dndKitId="8bf4ed53-494b-4e16-af41-0eff28844e24" containerType="regular" prevTag="div" className="flex items-start gap-3 mb-4" data-magicpath-id="42" data-magicpath-path="ContactPage.tsx">
                  <Heart className="w-6 h-6 flex-shrink-0 mt-1" data-magicpath-id="43" data-magicpath-path="ContactPage.tsx" />
                  <SortableContainer dndKitId="734ebd3b-0343-4886-a0ca-3d73d4566a12" containerType="regular" prevTag="div" data-magicpath-id="44" data-magicpath-path="ContactPage.tsx">
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
              <SortableContainer dndKitId="185edb52-1ca9-4f49-9729-77ae2006f8ac" containerType="regular" prevTag="div" className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg space-y-5" data-magicpath-id="47" data-magicpath-path="ContactPage.tsx">
                <h3 className="font-serif text-xl sm:text-2xl text-[#2D2D2D] mb-4" data-magicpath-id="48" data-magicpath-path="ContactPage.tsx">
                  Get in Touch
                </h3>

                <SortableContainer dndKitId="352a7dcb-fe04-4929-9623-291988ecc755" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="49" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="450f5fa2-8547-4ff2-ae6a-782320949c37" containerType="regular" prevTag="div" className="bg-[#5e7155]/10 p-3 rounded-full flex-shrink-0" data-magicpath-id="50" data-magicpath-path="ContactPage.tsx">
                    <Mail className="w-5 h-5 text-[#5e7155]" data-magicpath-id="51" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="88242362-5ca4-4256-907c-5ed9ca6a8994" containerType="regular" prevTag="div" data-magicpath-id="52" data-magicpath-path="ContactPage.tsx">
                    <p className="text-xs sm:text-sm text-[#5e7155] font-semibold mb-1" data-magicpath-id="53" data-magicpath-path="ContactPage.tsx">
                      Email
                    </p>
                    <a href="mailto:hello@julianaveganchef.com" className="text-[#2D2D2D] hover:text-[#5e7155] transition-colors text-sm sm:text-base" data-magicpath-id="54" data-magicpath-path="ContactPage.tsx">
                      hello@julianaveganchef.com
                    </a>
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="38c4eb29-6d78-405a-8675-df2db5fb044e" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="55" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="f0f6559d-77e6-4672-a183-435a3a3d9776" containerType="regular" prevTag="div" className="bg-[#5e7155]/10 p-3 rounded-full flex-shrink-0" data-magicpath-id="56" data-magicpath-path="ContactPage.tsx">
                    <Phone className="w-5 h-5 text-[#5e7155]" data-magicpath-id="57" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="f3a58316-210f-4b26-8b0b-0f56d0ac47ac" containerType="regular" prevTag="div" data-magicpath-id="58" data-magicpath-path="ContactPage.tsx">
                    <p className="text-xs sm:text-sm text-[#5e7155] font-semibold mb-1" data-magicpath-id="59" data-magicpath-path="ContactPage.tsx">
                      Phone
                    </p>
                    <a href="tel:+353871234567" className="text-[#2D2D2D] hover:text-[#5e7155] transition-colors text-sm sm:text-base" data-magicpath-id="60" data-magicpath-path="ContactPage.tsx">
                      +353 87 123 4567
                    </a>
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="a624d919-c01b-4954-bea7-003dba709676" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="61" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="72617afa-d744-46cb-8d70-eb91696d59ff" containerType="regular" prevTag="div" className="bg-[#5e7155]/10 p-3 rounded-full flex-shrink-0" data-magicpath-id="62" data-magicpath-path="ContactPage.tsx">
                    <MapPin className="w-5 h-5 text-[#5e7155]" data-magicpath-id="63" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="4bf31f55-63de-433d-95b2-923fd59d4b34" containerType="regular" prevTag="div" data-magicpath-id="64" data-magicpath-path="ContactPage.tsx">
                    <p className="text-xs sm:text-sm text-[#5e7155] font-semibold mb-1" data-magicpath-id="65" data-magicpath-path="ContactPage.tsx">
                      Location
                    </p>
                    <p className="text-[#2D2D2D] text-sm sm:text-base" data-magicpath-id="66" data-magicpath-path="ContactPage.tsx">
                      Dun Laoghaire<br data-magicpath-id="67" data-magicpath-path="ContactPage.tsx" />
                      County Dublin, Ireland
                    </p>
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="ebbfd963-911c-4e5e-b222-26d6ed43080c" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="68" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="91c49dd5-0588-447f-b184-ba95b96883ad" containerType="regular" prevTag="div" className="bg-[#5e7155]/10 p-3 rounded-full flex-shrink-0" data-magicpath-id="69" data-magicpath-path="ContactPage.tsx">
                    <Clock className="w-5 h-5 text-[#5e7155]" data-magicpath-id="70" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="ce310e17-fc49-4c68-9197-4db9642035e4" containerType="regular" prevTag="div" data-magicpath-id="71" data-magicpath-path="ContactPage.tsx">
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
              <SortableContainer dndKitId="eb23e2cd-9f0c-43e4-9f6d-38b03498d8d3" containerType="regular" prevTag="div" className="bg-[#c76942] text-white rounded-2xl p-6 sm:p-8 shadow-lg" data-magicpath-id="76" data-magicpath-path="ContactPage.tsx">
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
      <SortableContainer dndKitId="0c0426fe-8d89-43cc-b876-e751b514236e" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" aria-label="Closing message" data-magicpath-id="83" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="043beb37-6846-4896-873f-f973d9d093b0" containerType="regular" prevTag="div" className="max-w-3xl mx-auto text-center" data-magicpath-id="84" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="eb05a78b-47ee-4d5e-b7e5-cd5147838021" containerType="regular" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="e02c0f29-0fb3-4686-aa6c-c2b53c115496" containerType="regular" prevTag="section" className="py-16 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="explore-heading" data-magicpath-id="88" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="fb8ca415-113c-4d12-bcc7-41d1dc65d9ed" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="89" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="b315a710-02c2-40c4-8f31-336d55c65568" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="11916262-0829-4a63-af31-3459c476c0e1" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6" data-magicpath-id="92" data-magicpath-path="ContactPage.tsx">
              <SortableContainer dndKitId="761c4324-861c-415b-8c85-8865076ea087" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#offerings')} className="bg-white hover:bg-[#5e7155] hover:text-white text-[#2D2D2D] p-6 rounded-xl shadow-md transition-all group" data-magicpath-id="93" data-magicpath-path="ContactPage.tsx">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-white" data-magicpath-id="94" data-magicpath-path="ContactPage.tsx">
                  Retreat Catering
                </h3>
                <p className="text-sm text-[#4A4A4A] group-hover:text-white/90" data-magicpath-id="95" data-magicpath-path="ContactPage.tsx">
                  Learn about catering services
                </p>
              </SortableContainer>

              <SortableContainer dndKitId="1209eabe-2913-4821-b647-48ff30157cf7" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#treats')} className="bg-white hover:bg-[#c76942] hover:text-white text-[#2D2D2D] p-6 rounded-xl shadow-md transition-all group" data-magicpath-id="96" data-magicpath-path="ContactPage.tsx">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-white" data-magicpath-id="97" data-magicpath-path="ContactPage.tsx">
                  Pep Me Up Treats
                </h3>
                <p className="text-sm text-[#4A4A4A] group-hover:text-white/90" data-magicpath-id="98" data-magicpath-path="ContactPage.tsx">
                  Browse weekly treats menu
                </p>
              </SortableContainer>

              <SortableContainer dndKitId="52fcabf0-48ec-41b4-8632-7dee778e513a" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#about')} className="bg-white hover:bg-[#5e7155] hover:text-white text-[#2D2D2D] p-6 rounded-xl shadow-md transition-all group" data-magicpath-id="99" data-magicpath-path="ContactPage.tsx">
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