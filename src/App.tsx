/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X, ChevronRight, Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled ? "bg-forest/95 backdrop-blur-md py-4 border-gold-soft" : "bg-transparent py-8 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-serif tracking-[4px] uppercase text-gold">
            Riya
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {["Portfolio", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] uppercase tracking-[2px] text-white/80 hover:text-gold transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="border border-gold px-6 py-2 text-[11px] uppercase tracking-[2px] text-gold hover:bg-gold hover:text-forest transition-all">
            Enquire Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-forest text-white py-8 px-6 flex flex-col gap-6 md:hidden border-b border-gold-soft"
        >
          {["Portfolio", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] uppercase tracking-[2px]"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-forest/80" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="text-gold text-xs uppercase tracking-[6px] mb-4 block">Est. 2008</span>
          <h1 className="text-white text-6xl md:text-8xl font-serif leading-[1.1] mb-6">
            Where <br /> Architecture <br /> Meets Emotion
          </h1>
          <p className="text-stone text-xl md:text-2xl font-serif italic mb-10">
            Curation of Timeless Interiors & Real Estate
          </p>
          <div className="gold-line w-32 mb-10" />
          
          <div className="flex flex-wrap gap-6">
            <button className="bg-gold text-forest px-8 py-4 text-xs uppercase tracking-[2px] font-bold hover:bg-white transition-colors">
              Explore Projects
            </button>
            <button className="bg-transparent text-white border border-white/30 px-8 py-4 text-xs uppercase tracking-[2px] hover:border-gold hover:text-gold transition-colors">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 right-10 text-gold/50 flex flex-col items-center gap-4 hidden md:flex"
      >
        <span className="text-[10px] uppercase tracking-[3px] rotate-90 origin-right translate-y-10">Scroll</span>
        <div className="w-[1px] h-20 bg-gold/30" />
      </motion.div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Modern Minimalist Flat",
      location: "Mumbai, IN",
      category: "Apartment Interior",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Contemporary Urban Suite",
      location: "Pune, IN",
      category: "Luxury Flat",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "The Skyline Apartment",
      location: "Delhi, IN",
      category: "Full Civil & Interior",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Bespoke Studio Flat",
      location: "Bangalore, IN",
      category: "Interior Renovation",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section id="portfolio" className="bg-forest py-32 border-t border-gold-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-gold text-[10px] uppercase tracking-[4px] mb-4 block">Selected Work</span>
            <h2 className="text-white text-4xl md:text-6xl font-serif">
              Curated Spaces of <br /> <span className="italic text-stone">Timeless Elegance</span>
            </h2>
          </div>
          <button className="group flex items-center gap-4 text-[11px] uppercase tracking-[2px] text-white/60 hover:text-gold transition-colors">
            View All Projects <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-6 border border-gold-soft">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-serif text-white mb-1">{project.title}</h3>
                  <p className="text-stone text-[10px] uppercase tracking-widest">
                    {project.category} &bull; {project.location}
                  </p>
                </div>
                <span className="text-gold text-xs font-serif italic">0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Apartment Interiors",
      description: "Bespoke luxury interiors for modern apartments, blending functionality with high-end aesthetic appeal.",
      icon: "01",
    },
    {
      title: "Civil & Structural Work",
      description: "Comprehensive civil solutions from foundation to finishing, ensuring structural integrity and precision.",
      icon: "02",
    },
    {
      title: "Architectural Consulting",
      description: "Visionary guidance for residential and commercial projects across India, from concept to completion.",
      icon: "03",
    },
  ];

  return (
    <section id="services" className="py-32 bg-forest border-t border-gold-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <span className="text-gold text-[10px] uppercase tracking-[4px] mb-4 block">Our Expertise</span>
            <h2 className="text-white text-4xl font-serif mb-8">Tailored Solutions for the Discerning</h2>
            <div className="gold-line w-20" />
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border border-gold-soft hover:border-gold transition-colors"
              >
                <span className="text-3xl font-serif text-gold/30 mb-6 block">{service.icon}</span>
                <h3 className="text-xl font-serif text-white mb-4 tracking-wide">{service.title}</h3>
                <p className="text-stone text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-white text-forest overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="p-12 md:p-24 flex flex-col justify-center border-r border-stone/20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-gold text-[10px] uppercase tracking-[4px] mb-4 block font-semibold">The Riya Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Crafting Legacies <br /> <span className="italic text-stone">Through Design</span>
            </h2>
            <p className="text-forest/80 text-sm leading-relaxed mb-8 max-w-lg">
              Founded on the belief that the spaces we inhabit shape who we are. At Riya, we bring together over 20 years of expertise in high-end apartment interiors and comprehensive civil work. From structural modifications to bespoke finishes, we build legacies across India.
            </p>
            <p className="text-forest/80 text-sm leading-relaxed mb-12 max-w-lg">
              Our specialization lies in transforming residential apartments into poetic sanctuaries and executing complex civil projects with architectural precision.
            </p>
            <div className="flex items-center gap-12">
              <div className="text-center">
                <span className="block text-3xl font-serif text-gold mb-1">20+</span>
                <span className="text-[9px] uppercase tracking-widest text-stone">Years Experience</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-serif text-gold mb-1">500+</span>
                <span className="text-[9px] uppercase tracking-widest text-stone">Projects Delivered</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative aspect-square lg:aspect-auto">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop"
            alt="Modern Apartment Interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-forest/10" />
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-forest relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold text-[10px] uppercase tracking-[4px] mb-4 block font-semibold">Get In Touch</span>
              <h2 className="text-white text-4xl md:text-5xl font-serif mb-12 leading-tight">Let's Create Something <br /><span className="italic text-stone">Extraordinary</span></h2>
            </motion.div>
            
            <div className="space-y-10">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start gap-6 group cursor-default"
              >
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold transition-colors duration-500">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-stone mb-2 font-bold">Studio Address</span>
                  <p className="text-sm text-white/80 leading-relaxed max-w-xs">
                    A-1104 Sagar Heights Co-operative Housing Society Ltd, <br />
                    Sankinka Andheri Kurla Road, <br />
                    Mumbai - 400072
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start gap-6 group cursor-default"
              >
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold transition-colors duration-500">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-stone mb-2 font-bold">Inquiries</span>
                  <p className="text-sm text-white/80">9773937669 / 982138123</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start gap-6 group cursor-default"
              >
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold transition-colors duration-500">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-stone mb-2 font-bold">Email</span>
                  <p className="text-sm text-white/80">riyainterior98@gmail.com</p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 p-8 md:p-12 border border-gold-soft relative group"
          >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/40 group-hover:w-8 group-hover:h-8 transition-all duration-500" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/40 group-hover:w-8 group-hover:h-8 transition-all duration-500" />

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-stone font-bold">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-gold-soft py-2 focus:border-gold outline-none transition-all text-sm text-white placeholder:text-white/20" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-stone font-bold">Email</label>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b border-gold-soft py-2 focus:border-gold outline-none transition-all text-sm text-white placeholder:text-white/20" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest text-stone font-bold">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent border-b border-gold-soft py-2 focus:border-gold outline-none transition-all text-sm text-white resize-none placeholder:text-white/20" 
                />
              </div>
              <button className="w-full bg-gold text-forest py-4 text-[11px] uppercase tracking-[3px] font-bold hover:bg-white hover:tracking-[5px] transition-all duration-500 shadow-xl">
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatsBar = () => {
  const stats = [
    { num: "500+", label: "Projects Delivered" },
    { num: "20+", label: "Years of Excellence" },
    { num: "Pan India", label: "Service Reach" },
    { num: "99%", label: "Client Satisfaction" },
  ];

  return (
    <section className="bg-forest border-y border-gold-soft py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center"
          >
            <span className="block text-3xl font-serif text-gold mb-2">{stat.num}</span>
            <span className="text-[10px] uppercase tracking-[2px] text-stone">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-forest text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <span className="text-3xl font-serif tracking-[4px] uppercase text-gold mb-6 block">Riya</span>
            <p className="text-stone text-sm max-w-sm leading-relaxed">
              Elevating the human experience through architectural excellence and bespoke interior design.
            </p>
          </div>
          
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-gold mb-6">Navigation</span>
            <ul className="space-y-4 text-xs text-stone">
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <span className="block text-[10px] uppercase tracking-widest text-gold mb-6">Social</span>
            <div className="flex gap-6">
              <a href="#" className="text-stone hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" className="text-stone hover:text-white transition-colors"><Facebook size={18} /></a>
              <a href="#" className="text-stone hover:text-white transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gold-soft gap-4">
          <p className="text-[10px] uppercase tracking-widest text-stone/50">
            © {new Date().getFullYear()} Riya Interior & Real Estates.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-stone/50">
            <a href="#" className="hover:text-stone transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-10 right-10 z-50 w-12 h-12 bg-gold text-forest rounded-full flex items-center justify-center shadow-2xl hover:bg-white transition-colors duration-500"
    >
      <ChevronRight size={24} className="-rotate-90" />
    </motion.button>
  );
};

const ServiceAreas = () => {
  const areas = ["Mumbai", "Pune", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Pan India"];
  
  return (
    <div className="bg-forest py-6 border-b border-gold-soft overflow-hidden whitespace-nowrap">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-20 items-center"
      >
        {[...areas, ...areas].map((area, i) => (
          <span key={i} className="text-gold/40 text-[10px] uppercase tracking-[4px] font-bold">
            {area}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default function App() {
  return (
    <div className="relative font-sans">
      <Navbar />
      <main>
        <Hero />
        <ServiceAreas />
        <Portfolio />
        <Services />
        <About />
        <Contact />
        <StatsBar />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}


