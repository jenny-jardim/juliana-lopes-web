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
  return <SortableContainer dndKitId="741b10b7-dccf-4c69-9a11-8f26c6faaab6" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="ContactPage.tsx">
      {/* Hero Section */}
      <SortableContainer dndKitId="0876c8af-664e-4cc4-a65f-da595bde2185" containerType="regular" prevTag="section" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-[#8B9B7F] to-[#404d3a]" data-magicpath-id="1" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="56974010-b87f-4087-9f52-a0deac1a99cc" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="2" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="05e8d531-b4c1-47d5-a026-c7401ad6c331" containerType="regular" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="29ae9ac6-ae44-41d6-ae4a-10e1ce365c32" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6" data-magicpath-id="7" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="74919261-29c6-4e6a-8153-cd210bffd3d6" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="8" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="04ef09f0-8c55-4593-9515-82b38cc122ed" containerType="regular" prevTag="div" className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12" data-magicpath-id="9" data-magicpath-path="ContactPage.tsx">
            {/* Form */}
            <SortableContainer dndKitId="72a1db9b-60db-4151-9987-dc3a4f397511" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="cb29ff46-9ae6-4507-8ecd-132757f1bf55" containerType="regular" prevTag="div" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10" data-magicpath-id="11" data-magicpath-path="ContactPage.tsx">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2D2D2D] mb-3" data-magicpath-id="12" data-magicpath-path="ContactPage.tsx">
                  Quick Contact Form
                </h2>
                <p className="text-[#8B9B7F] mb-8 text-sm sm:text-base" data-magicpath-id="13" data-magicpath-path="ContactPage.tsx">
                  Every email gets a personal response. Every customer matters.
                </p>

                {isSubmitted ? <SortableContainer dndKitId="b065d550-f16a-4727-9676-c5e937399f73" containerType="regular" prevTag="motion.div" initial={{
                opacity: 0,
                scale: 0.9
              }} animate={{
                opacity: 1,
                scale: 1
              }} className="text-center py-12" data-magicpath-id="14" data-magicpath-path="ContactPage.tsx">
                    <CheckCircle className="w-16 h-16 text-[#8B9B7F] mx-auto mb-4" data-magicpath-id="15" data-magicpath-path="ContactPage.tsx" />
                    <h3 className="text-2xl font-semibold text-[#2D2D2D] mb-2" data-magicpath-id="16" data-magicpath-path="ContactPage.tsx">
                      Message Sent!
                    </h3>
                    <p className="text-[#4A4A4A]" data-magicpath-id="17" data-magicpath-path="ContactPage.tsx">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </SortableContainer> : <SortableContainer dndKitId="90a6c041-42db-42c1-af69-07509365cbcd" containerType="regular" prevTag="form" onSubmit={handleSubmit} className="space-y-6" data-magicpath-id="18" data-magicpath-path="ContactPage.tsx">
                    {/* Name */}
                    <SortableContainer dndKitId="498084b4-2b45-454b-9154-61bb3b85e32c" containerType="regular" prevTag="div" data-magicpath-id="19" data-magicpath-path="ContactPage.tsx">
                      <label htmlFor="name" className="block text-[#2D2D2D] font-semibold mb-2 text-sm sm:text-base" data-magicpath-id="20" data-magicpath-path="ContactPage.tsx">
                        Name *
                      </label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#8B9B7F] focus:outline-none transition-colors text-[#2D2D2D] text-sm sm:text-base" placeholder="Your name" data-magicpath-id="21" data-magicpath-path="ContactPage.tsx" />
                    </SortableContainer>

                    {/* Email */}
                    <SortableContainer dndKitId="c0ad17ac-e7a1-4abf-95aa-d21d37119640" containerType="regular" prevTag="div" data-magicpath-id="22" data-magicpath-path="ContactPage.tsx">
                      <label htmlFor="email" className="block text-[#2D2D2D] font-semibold mb-2 text-sm sm:text-base" data-magicpath-id="23" data-magicpath-path="ContactPage.tsx">
                        Email *
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#8B9B7F] focus:outline-none transition-colors text-[#2D2D2D] text-sm sm:text-base" placeholder="your.email@example.com" data-magicpath-id="24" data-magicpath-path="ContactPage.tsx" />
                    </SortableContainer>

                    {/* Phone */}
                    <SortableContainer dndKitId="d88aa09a-534e-45da-a676-e17a2ebeb06f" containerType="regular" prevTag="div" data-magicpath-id="25" data-magicpath-path="ContactPage.tsx">
                      <label htmlFor="phone" className="block text-[#2D2D2D] font-semibold mb-2 text-sm sm:text-base" data-magicpath-id="26" data-magicpath-path="ContactPage.tsx">
                        Phone <span className="text-[#8B9B7F] font-normal" data-magicpath-id="27" data-magicpath-path="ContactPage.tsx">(optional)</span>
                      </label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#8B9B7F] focus:outline-none transition-colors text-[#2D2D2D] text-sm sm:text-base" placeholder="+353 XX XXX XXXX" data-magicpath-id="28" data-magicpath-path="ContactPage.tsx" />
                    </SortableContainer>

                    {/* Subject */}
                    <SortableContainer dndKitId="ce3efef9-3de6-4f71-8fef-0c2348397e09" containerType="regular" prevTag="div" data-magicpath-id="29" data-magicpath-path="ContactPage.tsx">
                      <label htmlFor="subject" className="block text-[#2D2D2D] font-semibold mb-2 text-sm sm:text-base" data-magicpath-id="30" data-magicpath-path="ContactPage.tsx">
                        What's this about? *
                      </label>
                      <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#8B9B7F] focus:outline-none transition-colors text-[#2D2D2D] text-sm sm:text-base appearance-none bg-white cursor-pointer" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%238B9B7F' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center'
                  }} data-magicpath-id="31" data-magicpath-path="ContactPage.tsx">
                        {subjects.map(subject => <option key={subject} value={subject} data-magicpath-uuid={(subject as any)["mpid"] ?? "unsafe"} data-magicpath-id="32" data-magicpath-path="ContactPage.tsx">
                            {subject}
                          </option>)}
                      </select>
                    </SortableContainer>

                    {/* Message */}
                    <SortableContainer dndKitId="fc32f900-3aa0-41c6-bc3f-1cc475678927" containerType="regular" prevTag="div" data-magicpath-id="33" data-magicpath-path="ContactPage.tsx">
                      <label htmlFor="message" className="block text-[#2D2D2D] font-semibold mb-2 text-sm sm:text-base" data-magicpath-id="34" data-magicpath-path="ContactPage.tsx">
                        Message *
                      </label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#8B9B7F] focus:outline-none transition-colors text-[#2D2D2D] resize-none text-sm sm:text-base" placeholder="Tell me more about what you're looking for..." data-magicpath-id="35" data-magicpath-path="ContactPage.tsx" />
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
            <SortableContainer dndKitId="2eb0e473-6fa2-4b17-b1c7-721a7fb8a31c" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="483d4aae-4881-4bd7-80e1-d6549ebc28b9" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#8B9B7F] to-[#404d3a] text-white rounded-2xl p-6 sm:p-8 shadow-lg" data-magicpath-id="40" data-magicpath-path="ContactPage.tsx">
                <SortableContainer dndKitId="69b3b45f-9028-41ee-a911-b819b808abc1" containerType="regular" prevTag="div" className="flex items-start gap-3 mb-4" data-magicpath-id="41" data-magicpath-path="ContactPage.tsx">
                  <Heart className="w-6 h-6 flex-shrink-0 mt-1" data-magicpath-id="42" data-magicpath-path="ContactPage.tsx" />
                  <SortableContainer dndKitId="ddd783f8-451a-4ff4-80b5-897219761055" containerType="regular" prevTag="div" data-magicpath-id="43" data-magicpath-path="ContactPage.tsx">
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
              <SortableContainer dndKitId="56eec593-f61b-47af-afa7-e31a7bfff3a8" containerType="regular" prevTag="div" className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg space-y-5" data-magicpath-id="46" data-magicpath-path="ContactPage.tsx">
                <h3 className="font-serif text-xl sm:text-2xl text-[#2D2D2D] mb-4" data-magicpath-id="47" data-magicpath-path="ContactPage.tsx">
                  Get in Touch
                </h3>

                <SortableContainer dndKitId="bf82bfca-a7f4-473e-b368-85c77accecbd" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="48" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="636d1f15-82dd-4f07-a63a-8c8f40b34da1" containerType="regular" prevTag="div" className="bg-[#8B9B7F]/10 p-3 rounded-full flex-shrink-0" data-magicpath-id="49" data-magicpath-path="ContactPage.tsx">
                    <Mail className="w-5 h-5 text-[#8B9B7F]" data-magicpath-id="50" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="1f864a82-d387-4222-b586-a5df03d7e179" containerType="regular" prevTag="div" data-magicpath-id="51" data-magicpath-path="ContactPage.tsx">
                    <p className="text-xs sm:text-sm text-[#8B9B7F] font-semibold mb-1" data-magicpath-id="52" data-magicpath-path="ContactPage.tsx">
                      Email
                    </p>
                    <a href="mailto:hello@julianaveganchef.com" className="text-[#2D2D2D] hover:text-[#8B9B7F] transition-colors text-sm sm:text-base" data-magicpath-id="53" data-magicpath-path="ContactPage.tsx">
                      hello@julianaveganchef.com
                    </a>
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="42ce1e1c-ac44-44f9-bd74-e5e70b42cae1" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="54" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="6a5e6b81-6399-425b-ae21-f3fc36987564" containerType="regular" prevTag="div" className="bg-[#8B9B7F]/10 p-3 rounded-full flex-shrink-0" data-magicpath-id="55" data-magicpath-path="ContactPage.tsx">
                    <Phone className="w-5 h-5 text-[#8B9B7F]" data-magicpath-id="56" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="2749373c-cf9c-451e-b10c-c744f854acaf" containerType="regular" prevTag="div" data-magicpath-id="57" data-magicpath-path="ContactPage.tsx">
                    <p className="text-xs sm:text-sm text-[#8B9B7F] font-semibold mb-1" data-magicpath-id="58" data-magicpath-path="ContactPage.tsx">
                      Phone
                    </p>
                    <a href="tel:+353871234567" className="text-[#2D2D2D] hover:text-[#8B9B7F] transition-colors text-sm sm:text-base" data-magicpath-id="59" data-magicpath-path="ContactPage.tsx">
                      +353 87 123 4567
                    </a>
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="dfb57839-6e18-474b-83c4-7eb5ca33292f" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="60" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="5fc9782f-0831-4f6b-94a5-48c42fc81fbf" containerType="regular" prevTag="div" className="bg-[#8B9B7F]/10 p-3 rounded-full flex-shrink-0" data-magicpath-id="61" data-magicpath-path="ContactPage.tsx">
                    <MapPin className="w-5 h-5 text-[#8B9B7F]" data-magicpath-id="62" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="c7899188-395e-4e14-a9e3-033ca200a470" containerType="regular" prevTag="div" data-magicpath-id="63" data-magicpath-path="ContactPage.tsx">
                    <p className="text-xs sm:text-sm text-[#8B9B7F] font-semibold mb-1" data-magicpath-id="64" data-magicpath-path="ContactPage.tsx">
                      Location
                    </p>
                    <p className="text-[#2D2D2D] text-sm sm:text-base" data-magicpath-id="65" data-magicpath-path="ContactPage.tsx">
                      Dun Laoghaire<br data-magicpath-id="66" data-magicpath-path="ContactPage.tsx" />
                      County Dublin, Ireland
                    </p>
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="dba5837f-164e-4dc3-a79f-29fd473715bb" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="67" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="05e71928-16af-49f1-8f75-597e03824ba6" containerType="regular" prevTag="div" className="bg-[#8B9B7F]/10 p-3 rounded-full flex-shrink-0" data-magicpath-id="68" data-magicpath-path="ContactPage.tsx">
                    <Clock className="w-5 h-5 text-[#8B9B7F]" data-magicpath-id="69" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="e3812489-18e6-4e0a-a9fc-d6e25444b94d" containerType="regular" prevTag="div" data-magicpath-id="70" data-magicpath-path="ContactPage.tsx">
                    <p className="text-xs sm:text-sm text-[#8B9B7F] font-semibold mb-1" data-magicpath-id="71" data-magicpath-path="ContactPage.tsx">
                      Response Time
                    </p>
                    <p className="text-[#2D2D2D] text-sm sm:text-base" data-magicpath-id="72" data-magicpath-path="ContactPage.tsx">
                      Within 24-48 hours<br data-magicpath-id="73" data-magicpath-path="ContactPage.tsx" />
                      <span className="text-xs text-[#8B9B7F]" data-magicpath-id="74" data-magicpath-path="ContactPage.tsx">Monday–Friday</span>
                    </p>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>

              {/* Order Times for Treats */}
              <SortableContainer dndKitId="64d6f31b-5742-48f4-a49b-79e31b0b7456" containerType="regular" prevTag="div" className="bg-[#c76942] text-white rounded-2xl p-6 sm:p-8 shadow-lg" data-magicpath-id="75" data-magicpath-path="ContactPage.tsx">
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
      <SortableContainer dndKitId="52b29608-82b5-415b-bbd9-f36b58c56e69" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" data-magicpath-id="82" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="827c0eb2-b9c5-4acf-864c-73ebf57b578a" containerType="regular" prevTag="div" className="max-w-3xl mx-auto text-center" data-magicpath-id="83" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="3b3cfd49-fcc1-43c0-beb5-961a8bf2a6f3" containerType="regular" prevTag="motion.div" initial={{
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
            <p className="text-[#8B9B7F] text-lg sm:text-xl" data-magicpath-id="86" data-magicpath-path="ContactPage.tsx">
              — Juliana
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Quick Links to Other Sections */}
      <SortableContainer dndKitId="767e0673-ca98-43a3-89e8-e2038c6df082" containerType="regular" prevTag="section" className="py-16 px-4 sm:px-6 bg-[#F5F1E8]" data-magicpath-id="87" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="c49fb74e-b23c-4400-b550-7a58d15c2bc5" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="88" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="92d74824-ea70-4f1e-814b-2f881e4fb85c" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="1d6bbf1f-4c95-44ef-9b04-d5951f673f0f" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6" data-magicpath-id="91" data-magicpath-path="ContactPage.tsx">
              <SortableContainer dndKitId="54132160-8134-4b0b-a078-5cfcba7700d9" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#offerings')} className="bg-white hover:bg-[#8B9B7F] hover:text-white text-[#2D2D2D] p-6 rounded-xl shadow-md transition-all group" data-magicpath-id="92" data-magicpath-path="ContactPage.tsx">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-white" data-magicpath-id="93" data-magicpath-path="ContactPage.tsx">
                  Retreat Catering
                </h3>
                <p className="text-sm text-[#4A4A4A] group-hover:text-white/90" data-magicpath-id="94" data-magicpath-path="ContactPage.tsx">
                  Learn about catering services
                </p>
              </SortableContainer>

              <SortableContainer dndKitId="6efbfd28-7db5-4e5c-aaa5-44317cfd6bc1" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#treats')} className="bg-white hover:bg-[#c76942] hover:text-white text-[#2D2D2D] p-6 rounded-xl shadow-md transition-all group" data-magicpath-id="95" data-magicpath-path="ContactPage.tsx">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-white" data-magicpath-id="96" data-magicpath-path="ContactPage.tsx">
                  Pep Me Up Treats
                </h3>
                <p className="text-sm text-[#4A4A4A] group-hover:text-white/90" data-magicpath-id="97" data-magicpath-path="ContactPage.tsx">
                  Browse weekly treats menu
                </p>
              </SortableContainer>

              <SortableContainer dndKitId="d16d4f0b-abb7-421d-a6ce-75ba560a9d7c" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#about')} className="bg-white hover:bg-[#8B9B7F] hover:text-white text-[#2D2D2D] p-6 rounded-xl shadow-md transition-all group" data-magicpath-id="98" data-magicpath-path="ContactPage.tsx">
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