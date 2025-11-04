import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronDown, Instagram, Facebook } from 'lucide-react';
type JulianaChefWebsiteProps = {};
const navigation = [{
  name: 'Home',
  href: '#home',
  mpid: "1dd14500-def4-44d1-a029-25230b814306"
}, {
  name: 'About Juliana',
  href: '#about',
  mpid: "d90a0527-11ff-4807-8b8d-a3eea123e328"
}, {
  name: 'Treats & Meals',
  href: '#offerings',
  mpid: "04d52975-5e96-4f90-a87d-fd28a3081f55"
}, {
  name: 'Contact',
  href: '#contact',
  mpid: "28d746ca-74d6-4438-bf08-2c03ee086c6d"
}] as any[];
const testimonials = [{
  quote: "Juliana transformed our retreat experience. Her plant-based dishes were not only delicious but beautifully presented. Our guests couldn't stop raving about the food!",
  author: 'Sophie Martinez',
  location: 'Retreat Host, Portugal',
  mpid: "3f9ba875-ce01-48e1-83e0-5cf4886e0e08"
}, {
  quote: "Working with Chef Juliana was incredible. She brought creativity and passion to every meal, making our wellness retreat truly unforgettable.",
  author: 'Marcus Chen',
  location: 'Wellness Coordinator, Bali',
  mpid: "4553b39a-8ff8-465b-ba53-6ba2b4445754"
}, {
  quote: "The treats Juliana prepared were absolutely divine. Gluten-free, plant-based perfection that even our non-vegan guests adored.",
  author: 'Emma Thompson',
  location: 'Event Planner, UK',
  mpid: "90320fcc-219b-4236-ae67-402ae37eb714"
}] as any[];
const faqs = [{
  question: "I'm based in the UK. Can you cater my retreat?",
  answer: "Yes! I cater retreats and events across the world and the UK. Travel costs may apply for certain locations.",
  mpid: "764d3101-db5e-4255-85bf-00066f5c3b57"
}, {
  question: "How far ahead should I book your catering service?",
  answer: "I recommend booking at least 2-3 months in advance to ensure availability, especially for retreat seasons.",
  mpid: "9c386182-c7dd-4400-b06b-263f226af7d8"
}, {
  question: "What if my guests have lots of different dietary needs?",
  answer: "I specialize in accommodating various dietary requirements. All my dishes are plant-based and can be adapted for allergies and preferences.",
  mpid: "f39f063d-ab0b-4c8d-9827-df194b349ce3"
}, {
  question: "How do I know everything is vegan if I can't see it being made?",
  answer: "I provide full transparency with ingredient lists and preparation methods. You're welcome to observe the cooking process.",
  mpid: "f683b194-2c75-442d-8634-ade7c1118849"
}, {
  question: "I work a lot and eat out. Are your treats actually healthy?",
  answer: "Yes! My treats use wholesome, natural ingredients without refined sugars. They're designed to nourish while satisfying your sweet tooth.",
  mpid: "a5bbc705-c016-489d-81bd-e596a1398cb0"
}] as any[];

// @component: JulianaChefWebsite
export const JulianaChefWebsite = (props: JulianaChefWebsiteProps) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
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

  // @return
  return <SortableContainer dndKitId="14e516cc-13cc-4a5a-9563-9d5b451b5655" containerType="regular" prevTag="div" className="min-h-screen bg-[#F5F1E8] text-[#2D2D2D]" data-magicpath-id="0" data-magicpath-path="JulianaChefWebsite.tsx">
      <SortableContainer dndKitId="3045086e-33b0-4558-bb8f-05ca90b66245" containerType="regular" prevTag="motion.header" style={{
      opacity: headerOpacity
    }} className="fixed top-0 left-0 right-0 z-50 bg-[#8B9B7F]/95 backdrop-blur-sm" data-magicpath-id="1" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="4b86d9f2-73d4-4147-b74d-1c09dcc32cd7" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-6 lg:px-8" data-magicpath-id="2" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="03ccbfc6-4b15-4f28-bfde-f0678052c7c2" containerType="regular" prevTag="div" className="flex items-center justify-between h-20" data-magicpath-id="3" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="2c80cef7-39e7-42cb-94d9-81cc8f607fa5" containerType="regular" prevTag="div" className="flex items-center space-x-2" data-magicpath-id="4" data-magicpath-path="JulianaChefWebsite.tsx">
              <div className="text-white font-serif text-xl" data-magicpath-id="5" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</div>
              <div className="text-white/80 text-sm" data-magicpath-id="6" data-magicpath-path="JulianaChefWebsite.tsx">the vegan chef</div>
            </SortableContainer>
            <SortableContainer dndKitId="39ede5df-9e8b-4825-80a6-0f44b697ad6c" containerType="collection" prevTag="nav" className="hidden md:flex space-x-8" data-magicpath-id="7" data-magicpath-path="JulianaChefWebsite.tsx">
              {navigation.map(item => <a key={item.name} href={item.href} className="text-white hover:text-white/80 transition-colors font-medium text-sm" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:string" data-magicpath-id="8" data-magicpath-path="JulianaChefWebsite.tsx">
                  {item.name}
                </a>)}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="f8cb17b0-8a7c-4fa4-a0eb-1cbec02ae848" containerType="regular" prevTag="section" id="home" className="relative h-screen flex items-center justify-center overflow-hidden" data-magicpath-id="9" data-magicpath-path="JulianaChefWebsite.tsx">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80)',
        filter: 'brightness(0.7)'
      }} data-magicpath-id="10" data-magicpath-path="JulianaChefWebsite.tsx" />
        <SortableContainer dndKitId="330ab58b-07c2-4a50-9353-e303fa6e2ade" containerType="regular" prevTag="div" className="relative z-10 text-center text-white px-6 max-w-4xl" data-magicpath-id="11" data-magicpath-path="JulianaChefWebsite.tsx">
          <motion.h1 data-magicpath-motion-tag="motion.h1" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6" data-magicpath-id="12" data-magicpath-path="JulianaChefWebsite.tsx">
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
        }} className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed" data-magicpath-id="13" data-magicpath-path="JulianaChefWebsite.tsx">
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
        }} className="bg-[#8B9B7F] text-white px-8 py-3 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium" onClick={() => document.getElementById('contact')?.scrollIntoView({
          behavior: 'smooth'
        })} data-magicpath-id="14" data-magicpath-path="JulianaChefWebsite.tsx">
            Book Your Retreat Catering
          </motion.button>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="3904db96-dac6-40d5-a28b-7c7fae803a5c" containerType="regular" prevTag="section" id="about" className="py-20 px-6 bg-[#F5F1E8]" data-magicpath-id="15" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="807ba54b-8afc-480d-9361-7ba5fd467c3a" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="16" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-[#2D2D2D]" data-magicpath-id="17" data-magicpath-path="JulianaChefWebsite.tsx">
            Meet Your Chef
          </h2>
          <SortableContainer dndKitId="e7addf71-dcd3-4982-808b-b50c6ca8e25d" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-12 items-center" data-magicpath-id="18" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="6fcda7f2-9820-431b-b808-9ae10999016c" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} data-magicpath-id="19" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=600&q=80" alt="Chef Juliana" className="w-full rounded-lg shadow-lg" data-magicpath-id="20" data-magicpath-path="JulianaChefWebsite.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="ea761829-4f3e-49f2-91ae-1dec744ca373" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="space-y-6" data-magicpath-id="21" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="text-2xl font-semibold text-[#8B9B7F]" data-magicpath-id="22" data-magicpath-path="JulianaChefWebsite.tsx">Hi, I'm Juliana!</h3>
              <p className="text-[#4A4A4A] leading-relaxed" data-magicpath-id="23" data-magicpath-path="JulianaChefWebsite.tsx">
                I'm a passionate plant-based chef with over 8 years of culinary experience. I built my business and brand on creating nourishing, delicious plant-based meals for wellness retreats around the world.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed" data-magicpath-id="24" data-magicpath-path="JulianaChefWebsite.tsx">
                What truly fuels my culinary passion is not just food itself but the transformative power it has to bring people together and foster genuine connections. I believe food has the unique ability to create shared experiences that inspire, heal, and unite us.
              </p>
              <button className="bg-[#8B9B7F] text-white px-6 py-2 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium" data-magicpath-id="25" data-magicpath-path="JulianaChefWebsite.tsx">
                Read My Full Story
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="1de12373-9c26-4a07-bf21-c10b3ee6e45a" containerType="regular" prevTag="section" id="offerings" className="py-20 px-6 bg-white" data-magicpath-id="26" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="5406e6f2-0d1f-4500-9ffc-d573530f570d" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="27" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-4 text-[#8B9B7F]" data-magicpath-id="28" data-magicpath-path="JulianaChefWebsite.tsx">
            My Offerings
          </h2>

          <SortableContainer dndKitId="458d1080-b5fb-40b9-b03c-7731c9d54ecf" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-12 mt-16" data-magicpath-id="29" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="9195f9be-7ca7-4524-b9f6-ec3b0ec8aba1" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="space-y-6" data-magicpath-id="30" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="text-2xl font-semibold text-[#2D2D2D]" data-magicpath-id="31" data-magicpath-path="JulianaChefWebsite.tsx">Retreat & Event Catering</h3>
              <p className="text-[#4A4A4A] leading-relaxed" data-magicpath-id="32" data-magicpath-path="JulianaChefWebsite.tsx">
                Custom plant-based menus for retreats, and events across Ireland and the UK.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed" data-magicpath-id="33" data-magicpath-path="JulianaChefWebsite.tsx">
                Every dish is made with stunning presentation and extraordinary ingredients.
              </p>
              <button className="bg-[#8B9B7F] text-white px-6 py-2 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium" data-magicpath-id="34" data-magicpath-path="JulianaChefWebsite.tsx">
                Find Out More
              </button>
            </SortableContainer>
            <SortableContainer dndKitId="bb3cf77c-66bb-4339-a460-1142b6e35bfb" containerType="regular" prevTag="motion.div" initial={{
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
          }} data-magicpath-id="35" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80" alt="Gourmet plant-based dish" className="w-full h-80 object-cover rounded-lg shadow-lg" data-magicpath-id="36" data-magicpath-path="JulianaChefWebsite.tsx" />
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="81a366a4-8920-4b01-9040-fe14d9e8e843" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-12 mt-16" data-magicpath-id="37" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="eb3064a2-0387-4e60-b820-953c345fb1b7" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="order-2 md:order-1" data-magicpath-id="38" data-magicpath-path="JulianaChefWebsite.tsx">
              <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" alt="Plant-based dessert" className="w-full h-80 object-cover rounded-lg shadow-lg" data-magicpath-id="39" data-magicpath-path="JulianaChefWebsite.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="1be2e2b1-84b3-469e-933e-73434b12664e" containerType="regular" prevTag="motion.div" initial={{
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
          }} className="space-y-6 order-1 md:order-2" data-magicpath-id="40" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="text-2xl font-semibold text-[#2D2D2D]" data-magicpath-id="41" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Treats</h3>
              <p className="text-[#4A4A4A] leading-relaxed" data-magicpath-id="42" data-magicpath-path="JulianaChefWebsite.tsx">
                Fresh-baked, gluten-friendly, plant-based treats made to order just for you.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed" data-magicpath-id="43" data-magicpath-path="JulianaChefWebsite.tsx">
                Order Weekly Fridays 5am-9am. Collection in Dun Laoghaire or Weekly Pop-up Cake Stall.
              </p>
              <button className="bg-[#C17857] text-white px-6 py-2 rounded-full hover:bg-[#B06847] transition-colors font-medium" data-magicpath-id="44" data-magicpath-path="JulianaChefWebsite.tsx">
                See Treats Menu
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="9b96bc97-2831-4a14-bc59-cbb68f0effb5" containerType="regular" prevTag="section" className="py-20 px-6 bg-[#8B9B7F]" data-magicpath-id="45" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="8ab6e5e4-0c33-4604-a3d1-28267f116fe2" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="46" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-white" data-magicpath-id="47" data-magicpath-path="JulianaChefWebsite.tsx">
            What People Say
          </h2>
          <SortableContainer dndKitId="37b8d1d0-9273-4c49-ada2-bc352cead461" containerType="regular" prevTag="div" className="relative" data-magicpath-id="48" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="bcf54e62-c6c8-47f0-bdf1-e1fbfb96e303" containerType="regular" prevTag="motion.div" key={currentTestimonial} initial={{
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
          }} className="bg-white rounded-lg p-8 md:p-12 shadow-xl" data-magicpath-id="49" data-magicpath-path="JulianaChefWebsite.tsx">
              <p className="text-[#4A4A4A] text-lg md:text-xl leading-relaxed mb-6 italic" data-magicpath-id="50" data-magicpath-path="JulianaChefWebsite.tsx">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <SortableContainer dndKitId="2593055d-4e10-4652-9cbe-c5471415e5be" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="51" data-magicpath-path="JulianaChefWebsite.tsx">
                <SortableContainer dndKitId="2c919fea-2eee-43aa-a618-5b17c4faace5" containerType="regular" prevTag="div" data-magicpath-id="52" data-magicpath-path="JulianaChefWebsite.tsx">
                  <p className="font-semibold text-[#2D2D2D]" data-magicpath-id="53" data-magicpath-path="JulianaChefWebsite.tsx">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-[#8B9B7F] text-sm" data-magicpath-id="54" data-magicpath-path="JulianaChefWebsite.tsx">
                    {testimonials[currentTestimonial].location}
                  </p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="b73f7c91-e1c7-41ea-8981-d3fc466afab8" containerType="regular" prevTag="div" className="flex justify-center items-center mt-8 space-x-4" data-magicpath-id="55" data-magicpath-path="JulianaChefWebsite.tsx">
              <SortableContainer dndKitId="6d6caceb-00b7-4592-804e-777895f3495f" containerType="regular" prevTag="button" onClick={prevTestimonial} className="bg-white text-[#8B9B7F] p-2 rounded-full hover:bg-[#F5F1E8] transition-colors" aria-label="Previous testimonial" data-magicpath-id="56" data-magicpath-path="JulianaChefWebsite.tsx">
                <ChevronLeft className="w-6 h-6" data-magicpath-id="57" data-magicpath-path="JulianaChefWebsite.tsx" />
              </SortableContainer>
              <div className="flex space-x-2" data-magicpath-id="58" data-magicpath-path="JulianaChefWebsite.tsx">
                {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentTestimonial(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentTestimonial ? 'bg-white' : 'bg-white/40'}`} aria-label={`Go to testimonial ${index + 1}`} data-magicpath-id="59" data-magicpath-path="JulianaChefWebsite.tsx" />)}
              </div>
              <SortableContainer dndKitId="179c1df5-096c-40dd-9990-b2cedcc07503" containerType="regular" prevTag="button" onClick={nextTestimonial} className="bg-white text-[#8B9B7F] p-2 rounded-full hover:bg-[#F5F1E8] transition-colors" aria-label="Next testimonial" data-magicpath-id="60" data-magicpath-path="JulianaChefWebsite.tsx">
                <ChevronRight className="w-6 h-6" data-magicpath-id="61" data-magicpath-path="JulianaChefWebsite.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="03e82ffa-7150-4b72-bcee-4846e417a9f7" containerType="regular" prevTag="section" className="py-20 px-6 bg-[#F5F1E8]" data-magicpath-id="62" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="84499ee7-352f-485e-b22d-5b8802501bd1" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="63" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-[#2D2D2D]" data-magicpath-id="64" data-magicpath-path="JulianaChefWebsite.tsx">
            FAQs
          </h2>
          <SortableContainer dndKitId="e01cf232-8022-432a-88fd-cbe407164576" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="65" data-magicpath-path="JulianaChefWebsite.tsx">
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
          }} className="bg-white rounded-lg shadow-sm overflow-hidden" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="66" data-magicpath-path="JulianaChefWebsite.tsx">
                <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F5F1E8] transition-colors" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="67" data-magicpath-path="JulianaChefWebsite.tsx">
                  <span className="font-semibold text-[#2D2D2D] pr-4" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="question:string" data-magicpath-id="68" data-magicpath-path="JulianaChefWebsite.tsx">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#8B9B7F] transition-transform flex-shrink-0 ${expandedFaq === index ? 'transform rotate-180' : ''}`} data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="69" data-magicpath-path="JulianaChefWebsite.tsx" />
                </button>
                {expandedFaq === index && <motion.div data-magicpath-motion-tag="motion.div" initial={{
              height: 0
            }} animate={{
              height: 'auto'
            }} exit={{
              height: 0
            }} transition={{
              duration: 0.3
            }} className="px-6 pb-6" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-id="70" data-magicpath-path="JulianaChefWebsite.tsx">
                    <p className="text-[#4A4A4A] leading-relaxed" data-magicpath-uuid={(faq as any)["mpid"] ?? "unsafe"} data-magicpath-field="answer:string" data-magicpath-id="71" data-magicpath-path="JulianaChefWebsite.tsx">{faq.answer}</p>
                  </motion.div>}
              </motion.div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="cff7609b-3d29-4e9f-b2b6-e22f254f5947" containerType="regular" prevTag="section" id="contact" className="py-20 px-6 bg-white" data-magicpath-id="72" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="c02630d8-3831-4745-91d1-dbb5c7392553" containerType="regular" prevTag="div" className="max-w-4xl mx-auto text-center" data-magicpath-id="73" data-magicpath-path="JulianaChefWebsite.tsx">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-[#2D2D2D]" data-magicpath-id="74" data-magicpath-path="JulianaChefWebsite.tsx">
            Let's Work Together!
          </h2>
          <p className="text-lg md:text-xl text-[#8B9B7F] mb-12 max-w-2xl mx-auto leading-relaxed" data-magicpath-id="75" data-magicpath-path="JulianaChefWebsite.tsx">
            Food is how I show care. Let me be part of creating something meaningful for your retreat, event, or simply your week.
          </p>
          <button className="bg-[#8B9B7F] text-white px-10 py-4 rounded-full hover:bg-[#7A8A6E] transition-colors font-medium text-lg" data-magicpath-id="76" data-magicpath-path="JulianaChefWebsite.tsx">
            Get In Touch
          </button>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="1c5856c5-276d-4f95-835d-71eb7c27f8ba" containerType="regular" prevTag="footer" className="bg-[#8B9B7F] text-white py-12 px-6" data-magicpath-id="77" data-magicpath-path="JulianaChefWebsite.tsx">
        <SortableContainer dndKitId="6d6cecee-189c-470d-8e29-36356c55cc63" containerType="regular" prevTag="div" className="max-w-6xl mx-auto" data-magicpath-id="78" data-magicpath-path="JulianaChefWebsite.tsx">
          <SortableContainer dndKitId="350b2524-873c-49af-b1c1-e7bc508be81c" containerType="regular" prevTag="div" className="grid md:grid-cols-3 gap-8 mb-8" data-magicpath-id="79" data-magicpath-path="JulianaChefWebsite.tsx">
            <SortableContainer dndKitId="875dcbbb-ae3d-418f-acb0-71d462b7d98c" containerType="regular" prevTag="div" data-magicpath-id="80" data-magicpath-path="JulianaChefWebsite.tsx">
              <h3 className="font-serif text-xl mb-4" data-magicpath-id="81" data-magicpath-path="JulianaChefWebsite.tsx">Juliana</h3>
              <p className="text-white/80 text-sm" data-magicpath-id="82" data-magicpath-path="JulianaChefWebsite.tsx">Plant-Based Retreat Chef</p>
            </SortableContainer>
            <SortableContainer dndKitId="bcc005ea-acdb-47b2-a3a2-8e4a7ac7d301" containerType="regular" prevTag="div" data-magicpath-id="83" data-magicpath-path="JulianaChefWebsite.tsx">
              <h4 className="font-semibold mb-4" data-magicpath-id="84" data-magicpath-path="JulianaChefWebsite.tsx">Quick Links</h4>
              <SortableContainer dndKitId="9c5a9d79-f75a-468c-8037-d89719a5de5c" containerType="regular" prevTag="ul" className="space-y-2 text-sm" data-magicpath-id="85" data-magicpath-path="JulianaChefWebsite.tsx">
                <li data-magicpath-id="86" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#about" className="text-white/80 hover:text-white transition-colors" data-magicpath-id="87" data-magicpath-path="JulianaChefWebsite.tsx">
                    About
                  </a>
                </li>
                <li data-magicpath-id="88" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#offerings" className="text-white/80 hover:text-white transition-colors" data-magicpath-id="89" data-magicpath-path="JulianaChefWebsite.tsx">
                    Retreat Catering
                  </a>
                </li>
                <li data-magicpath-id="90" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#offerings" className="text-white/80 hover:text-white transition-colors" data-magicpath-id="91" data-magicpath-path="JulianaChefWebsite.tsx">
                    Treats & Meals
                  </a>
                </li>
                <li data-magicpath-id="92" data-magicpath-path="JulianaChefWebsite.tsx">
                  <a href="#contact" className="text-white/80 hover:text-white transition-colors" data-magicpath-id="93" data-magicpath-path="JulianaChefWebsite.tsx">
                    Contact
                  </a>
                </li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="b4a3931f-0912-4781-bd71-3350b769d5ae" containerType="regular" prevTag="div" data-magicpath-id="94" data-magicpath-path="JulianaChefWebsite.tsx">
              <h4 className="font-semibold mb-4" data-magicpath-id="95" data-magicpath-path="JulianaChefWebsite.tsx">Connect</h4>
              <SortableContainer dndKitId="9956f2bf-d8fa-4e8c-8fb1-34a8baa7827d" containerType="regular" prevTag="div" className="flex space-x-4" data-magicpath-id="96" data-magicpath-path="JulianaChefWebsite.tsx">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram" data-magicpath-id="97" data-magicpath-path="JulianaChefWebsite.tsx">
                  <Instagram className="w-6 h-6" data-magicpath-id="98" data-magicpath-path="JulianaChefWebsite.tsx" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" data-magicpath-id="99" data-magicpath-path="JulianaChefWebsite.tsx">
                  <Facebook className="w-6 h-6" data-magicpath-id="100" data-magicpath-path="JulianaChefWebsite.tsx" />
                </a>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="d9f28678-02f6-46af-a7b6-e7565f5ad3c4" containerType="regular" prevTag="div" className="border-t border-white/20 pt-8 text-center text-sm text-white/60" data-magicpath-id="101" data-magicpath-path="JulianaChefWebsite.tsx">
            <p data-magicpath-id="102" data-magicpath-path="JulianaChefWebsite.tsx">© 2024 Juliana the Vegan Chef. All rights reserved.</p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};