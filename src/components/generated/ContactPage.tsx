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
  return <SortableContainer dndKitId="6c8fc986-35bc-4de5-8c7d-7a6f9630be53" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8]" data-magicpath-id="0" data-magicpath-path="ContactPage.tsx">
      {/* Hero Section */}
      <SortableContainer dndKitId="c271e1d3-9dd0-4151-9d1f-8da057716f33" containerType="regular" prevTag="section" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-[#5e7155] to-[#404d3a]" role="banner" aria-label="Contact page hero section" data-magicpath-id="1" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="b78488fa-3acb-42da-86f7-445aa8aef201" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="2" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="68a57c52-92dc-4229-9fbe-984cb07fbce0" containerType="regular" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="74296922-dcb7-48b7-8283-21870b080286" containerType="regular" prevTag="main" data-magicpath-id="7" data-magicpath-path="ContactPage.tsx">
      <SortableContainer dndKitId="4d410c8a-4060-45c6-83c1-a9c294ea7d44" containerType="regular" prevTag="section" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6" aria-labelledby="contact-form-heading" data-magicpath-id="8" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="93a403f0-f681-4f00-b891-428ce50256e6" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="9" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="16eb1a06-7ad9-419a-a8cd-0efe8fe91a51" containerType="regular" prevTag="div" className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12" data-magicpath-id="10" data-magicpath-path="ContactPage.tsx">
            {/* Form */}
            <SortableContainer dndKitId="1e5321f2-a457-4ae0-9a1a-0cee5531f384" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="81b3f02b-a826-4bfc-a261-dbf04c788300" containerType="regular" prevTag="div" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10" data-magicpath-id="12" data-magicpath-path="ContactPage.tsx">
                <h2 id="contact-form-heading" className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2D2D2D] mb-3" data-magicpath-id="13" data-magicpath-path="ContactPage.tsx">
                  Quick Contact Form
                </h2>
                <p className="text-[#5e7155] mb-8 text-sm sm:text-base" data-magicpath-id="14" data-magicpath-path="ContactPage.tsx">
                  Every email gets a personal response. Every customer matters.
                </p>

                {isSubmitted ? <SortableContainer dndKitId="7382d04f-4b2e-4c8f-952f-8ab13ebfef2a" containerType="regular" prevTag="motion.div" initial={{
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
                  </SortableContainer> : <SortableContainer dndKitId="fb7347ad-b847-475b-a1de-b18b05f3ee50" containerType="regular" prevTag="form" onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form" data-magicpath-id="19" data-magicpath-path="ContactPage.tsx">
                    {/* Name */}
                    <SortableContainer dndKitId="e4886fc5-f557-4a55-b3e5-b65f9cc6bbe2" containerType="regular" prevTag="div" data-magicpath-id="20" data-magicpath-path="ContactPage.tsx">
                      <label htmlFor="name" className="block text-[#2D2D2D] font-semibold mb-2 text-sm sm:text-base" data-magicpath-id="21" data-magicpath-path="ContactPage.tsx">
                        Name *
                      </label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#5e7155] focus:outline-none transition-colors text-[#2D2D2D] text-sm sm:text-base" placeholder="Your name" data-magicpath-id="22" data-magicpath-path="ContactPage.tsx" />
                    </SortableContainer>

                    {/* Email */}
                    <SortableContainer dndKitId="b48dcd4f-0e35-4da3-8b56-42503b4ded4b" containerType="regular" prevTag="div" data-magicpath-id="23" data-magicpath-path="ContactPage.tsx">
                      <label htmlFor="email" className="block text-[#2D2D2D] font-semibold mb-2 text-sm sm:text-base" data-magicpath-id="24" data-magicpath-path="ContactPage.tsx">
                        Email *
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#5e7155] focus:outline-none transition-colors text-[#2D2D2D] text-sm sm:text-base" placeholder="your.email@example.com" data-magicpath-id="25" data-magicpath-path="ContactPage.tsx" />
                    </SortableContainer>

                    {/* Phone */}
                    <SortableContainer dndKitId="60ec0482-0d95-4718-a540-a4c0490be1ea" containerType="regular" prevTag="div" data-magicpath-id="26" data-magicpath-path="ContactPage.tsx">
                      <label htmlFor="phone" className="block text-[#2D2D2D] font-semibold mb-2 text-sm sm:text-base" data-magicpath-id="27" data-magicpath-path="ContactPage.tsx">
                        Phone <span className="text-[#5e7155] font-normal" data-magicpath-id="28" data-magicpath-path="ContactPage.tsx">(optional)</span>
                      </label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#5e7155] focus:outline-none transition-colors text-[#2D2D2D] text-sm sm:text-base" placeholder="+353 XX XXX XXXX" data-magicpath-id="29" data-magicpath-path="ContactPage.tsx" />
                    </SortableContainer>

                    {/* Subject */}
                    <SortableContainer dndKitId="8457bc35-4418-4551-ac72-2cf21db8ae6a" containerType="regular" prevTag="div" data-magicpath-id="30" data-magicpath-path="ContactPage.tsx">
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
                    <SortableContainer dndKitId="9d8caf95-f72f-4353-a378-3aef3ad1bc8b" containerType="regular" prevTag="div" data-magicpath-id="34" data-magicpath-path="ContactPage.tsx">
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
            <SortableContainer dndKitId="8c8b9aef-474e-49cf-b671-d6902bc42022" containerType="regular" prevTag="motion.div" initial={{
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
              <SortableContainer dndKitId="6c609877-f264-4488-98f4-08251da38dca" containerType="regular" prevTag="div" className="bg-gradient-to-br from-[#5e7155] to-[#404d3a] text-white rounded-2xl p-6 sm:p-8 shadow-lg" data-magicpath-id="41" data-magicpath-path="ContactPage.tsx">
                <SortableContainer dndKitId="3b59dc8c-02d5-4378-9c5c-8db43935a0e4" containerType="regular" prevTag="div" className="flex items-start gap-3 mb-4" data-magicpath-id="42" data-magicpath-path="ContactPage.tsx">
                  <Heart className="w-6 h-6 flex-shrink-0 mt-1" data-magicpath-id="43" data-magicpath-path="ContactPage.tsx" />
                  <SortableContainer dndKitId="1c4b4324-2711-4a12-a87e-dfe6c54aadfd" containerType="regular" prevTag="div" data-magicpath-id="44" data-magicpath-path="ContactPage.tsx">
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
              <SortableContainer dndKitId="1f3d98bb-24a1-4b42-b7ef-2385ac754942" containerType="regular" prevTag="div" className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg space-y-5" data-magicpath-id="47" data-magicpath-path="ContactPage.tsx">
                <h3 className="font-serif text-xl sm:text-2xl text-[#2D2D2D] mb-4" data-magicpath-id="48" data-magicpath-path="ContactPage.tsx">
                  Get in Touch
                </h3>

                <SortableContainer dndKitId="21d0ed15-ff6e-4227-a365-c6666c50a4d8" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="49" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="35e77988-16d6-47e4-a027-7cd9c8ad12a1" containerType="regular" prevTag="div" className="bg-[#5e7155]/10 p-3 rounded-full flex-shrink-0" data-magicpath-id="50" data-magicpath-path="ContactPage.tsx">
                    <Mail className="w-5 h-5 text-[#5e7155]" data-magicpath-id="51" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="8dcbca8d-2250-4ea3-bc40-4fa1fe0eede9" containerType="regular" prevTag="div" data-magicpath-id="52" data-magicpath-path="ContactPage.tsx">
                    <p className="text-xs sm:text-sm text-[#5e7155] font-semibold mb-1" data-magicpath-id="53" data-magicpath-path="ContactPage.tsx">
                      Email
                    </p>
                    <a href="mailto:hello@julianaveganchef.com" className="text-[#2D2D2D] hover:text-[#5e7155] transition-colors text-sm sm:text-base" data-magicpath-id="54" data-magicpath-path="ContactPage.tsx">
                      hello@julianaveganchef.com
                    </a>
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="f3549b16-5963-4ab8-aad8-7113acd10f47" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="55" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="8a4c749c-3ddb-4d69-b721-88a6b1ab261b" containerType="regular" prevTag="div" className="bg-[#5e7155]/10 p-3 rounded-full flex-shrink-0" data-magicpath-id="56" data-magicpath-path="ContactPage.tsx">
                    <Phone className="w-5 h-5 text-[#5e7155]" data-magicpath-id="57" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="ec95d74d-6311-4b8e-bd3c-07a2078d107e" containerType="regular" prevTag="div" data-magicpath-id="58" data-magicpath-path="ContactPage.tsx">
                    <p className="text-xs sm:text-sm text-[#5e7155] font-semibold mb-1" data-magicpath-id="59" data-magicpath-path="ContactPage.tsx">
                      Phone
                    </p>
                    <a href="tel:+353871234567" className="text-[#2D2D2D] hover:text-[#5e7155] transition-colors text-sm sm:text-base" data-magicpath-id="60" data-magicpath-path="ContactPage.tsx">
                      +353 87 123 4567
                    </a>
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="aa8b8b85-a137-486c-ba90-68af5e5f59c5" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="61" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="62a9aa21-1c94-4ac4-be5a-e30941afe630" containerType="regular" prevTag="div" className="bg-[#5e7155]/10 p-3 rounded-full flex-shrink-0" data-magicpath-id="62" data-magicpath-path="ContactPage.tsx">
                    <MapPin className="w-5 h-5 text-[#5e7155]" data-magicpath-id="63" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="8fa08531-434d-47cc-a466-d72414c6b566" containerType="regular" prevTag="div" data-magicpath-id="64" data-magicpath-path="ContactPage.tsx">
                    <p className="text-xs sm:text-sm text-[#5e7155] font-semibold mb-1" data-magicpath-id="65" data-magicpath-path="ContactPage.tsx">
                      Location
                    </p>
                    <p className="text-[#2D2D2D] text-sm sm:text-base" data-magicpath-id="66" data-magicpath-path="ContactPage.tsx">
                      Dun Laoghaire<br data-magicpath-id="67" data-magicpath-path="ContactPage.tsx" />
                      County Dublin, Ireland
                    </p>
                  </SortableContainer>
                </SortableContainer>

                <SortableContainer dndKitId="cdebbd9a-b0cf-46c5-8d85-a262a97bf744" containerType="regular" prevTag="div" className="flex items-start gap-4" data-magicpath-id="68" data-magicpath-path="ContactPage.tsx">
                  <SortableContainer dndKitId="9f5028ee-fedd-4a3e-8275-efce6a0fb70a" containerType="regular" prevTag="div" className="bg-[#5e7155]/10 p-3 rounded-full flex-shrink-0" data-magicpath-id="69" data-magicpath-path="ContactPage.tsx">
                    <Clock className="w-5 h-5 text-[#5e7155]" data-magicpath-id="70" data-magicpath-path="ContactPage.tsx" />
                  </SortableContainer>
                  <SortableContainer dndKitId="3e2822ad-2d09-4907-9f61-015b5f57b59d" containerType="regular" prevTag="div" data-magicpath-id="71" data-magicpath-path="ContactPage.tsx">
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
              <SortableContainer dndKitId="f576c404-1f9c-4de4-a165-ef44a2b69823" containerType="regular" prevTag="div" className="bg-[#c76942] text-white rounded-2xl p-6 sm:p-8 shadow-lg" data-magicpath-id="76" data-magicpath-path="ContactPage.tsx">
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
      <SortableContainer dndKitId="422244a4-bf62-4e88-a252-7079ecf01160" containerType="regular" prevTag="section" className="py-16 sm:py-20 px-4 sm:px-6 bg-white" aria-label="Closing message" data-magicpath-id="83" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="33e64e5a-c387-4b52-a522-55798bb568c3" containerType="regular" prevTag="div" className="max-w-3xl mx-auto text-center" data-magicpath-id="84" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="e54539b0-efc3-40b7-90ec-72270a66f454" containerType="regular" prevTag="motion.div" initial={{
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
      <SortableContainer dndKitId="a2e4129b-0fef-4731-aa9b-40c67d77be2e" containerType="regular" prevTag="section" className="py-16 px-4 sm:px-6 bg-[#F5F1E8]" aria-labelledby="explore-heading" data-magicpath-id="88" data-magicpath-path="ContactPage.tsx">
        <SortableContainer dndKitId="39341e21-e206-4cfb-ad4b-0b9f5b07d1da" containerType="regular" prevTag="div" className="max-w-5xl mx-auto" data-magicpath-id="89" data-magicpath-path="ContactPage.tsx">
          <SortableContainer dndKitId="d44f7007-1153-4341-b2aa-78bd83fefd6a" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="50be9312-e72d-4af5-807d-c48622db3241" containerType="regular" prevTag="div" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6" data-magicpath-id="92" data-magicpath-path="ContactPage.tsx">
              <SortableContainer dndKitId="48bc24e0-1b0d-4840-b32b-d71e28916f37" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#offerings')} className="bg-white hover:bg-[#5e7155] hover:text-white text-[#2D2D2D] p-6 rounded-xl shadow-md transition-all group" data-magicpath-id="93" data-magicpath-path="ContactPage.tsx">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-white" data-magicpath-id="94" data-magicpath-path="ContactPage.tsx">
                  Retreat Catering
                </h3>
                <p className="text-sm text-[#4A4A4A] group-hover:text-white/90" data-magicpath-id="95" data-magicpath-path="ContactPage.tsx">
                  Learn about catering services
                </p>
              </SortableContainer>

              <SortableContainer dndKitId="351a0719-3a26-42c0-9b59-c9b7f53b1148" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#treats')} className="bg-white hover:bg-[#c76942] hover:text-white text-[#2D2D2D] p-6 rounded-xl shadow-md transition-all group" data-magicpath-id="96" data-magicpath-path="ContactPage.tsx">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-white" data-magicpath-id="97" data-magicpath-path="ContactPage.tsx">
                  Pep Me Up Treats
                </h3>
                <p className="text-sm text-[#4A4A4A] group-hover:text-white/90" data-magicpath-id="98" data-magicpath-path="ContactPage.tsx">
                  Browse weekly treats menu
                </p>
              </SortableContainer>

              <SortableContainer dndKitId="94aa4b96-f271-4fd7-9f84-6e257fc7daaf" containerType="regular" prevTag="button" onClick={() => onNavigate?.('#about')} className="bg-white hover:bg-[#5e7155] hover:text-white text-[#2D2D2D] p-6 rounded-xl shadow-md transition-all group" data-magicpath-id="99" data-magicpath-path="ContactPage.tsx">
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