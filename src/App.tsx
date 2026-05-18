import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  ChevronDown, 
  Github, 
  Linkedin, 
  Menu, 
  X, 
  Instagram,
  ArrowRight
} from 'lucide-react';

import { Journey } from './components/Journey';

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Aetheria Visual Identity",
    category: "Brand Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: 2,
    title: "Obsidian Digital Platform",
    category: "UI / UX Development",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: 3,
    title: "Elysian Studio Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: 4,
    title: "Chronos Motion Studies",
    category: "Art Direction",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
    year: "2023"
  }
];

const NAV_LINKS = [
  { name: 'Works', href: '#works' },
  { name: 'About', href: '#about' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-brand-black selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-brand-offwhite/80 backdrop-blur-md border-b border-brand-black/5' : 'py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-serif font-bold tracking-tighter"
          >
            ELYSIA <span className="italic font-normal">S.</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-xs uppercase tracking-widest font-semibold hover:text-brand-accent transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-0 w-full bg-brand-offwhite z-40 border-b border-brand-black/10 overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-2xl font-serif italic"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-brand-offwhite italic mix-blend-multiply opacity-20" />
            <img 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop" 
              alt="Background"
              className="w-full h-full object-cover filter grayscale sepia brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-offwhite/20 to-brand-offwhite" />
          </motion.div>

          <div className="relative z-10 text-center max-w-5xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-[10px] uppercase tracking-[0.4em] mb-6 text-brand-black/60"
            >
              Independent Digital Designer & Developer
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[12vw] sm:text-[10vw] font-serif leading-[0.85] tracking-tighter mb-8"
            >
              CRAFTING <br />
              <span className="italic block ml-[2vw] text-stroke">DIGITAL</span>
              SYMPHONY
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a href="#works" className="px-10 py-4 bg-brand-black text-white text-xs uppercase tracking-widest hover:bg-brand-accent transition-colors duration-500 rounded-full">
                View Projects
              </a>
              <div className="hidden sm:block w-px h-12 bg-brand-black/20" />
              <p className="max-w-xs text-xs leading-relaxed text-brand-black/70 text-left">
                Specializing in building high-end interfaces that blend aesthetic purity with technical excellence.
              </p>
            </motion.div>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-2"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-30">Scroll</span>
            <ChevronDown size={14} className="opacity-30" />
          </motion.div>
        </section>

        {/* Works Section */}
        <section id="works" className="py-32 bg-brand-black text-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
              <div>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4"
                >
                  Selected Works
                </motion.p>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-7xl font-serif italic"
                >
                  The Collection
                </motion.h2>
              </div>
              <motion.a 
                href="#"
                whileHover={{ x: 10 }}
                className="flex items-center gap-2 group text-xs uppercase tracking-widest font-semibold pb-2 border-b border-white/20"
              >
                Explore Archive <ArrowUpRight size={14} />
              </motion.a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
              {PROJECTS.map((project, index) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ delay: index % 2 === 0 ? 0 : 0.2 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden mb-8">
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-mono">
                        {project.year}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="w-20 h-20 rounded-full bg-white text-brand-black flex items-center justify-center"
                      >
                        <ArrowUpRight size={24} />
                      </motion.div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
                      <p className="text-xs uppercase tracking-widest text-white/40">{project.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Marquee Separator */}
        <div className="py-20 overflow-hidden bg-brand-offwhite border-y border-brand-black/5">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex whitespace-nowrap gap-20"
          >
            {[...Array(6)].map((_, i) => (
              <span key={i} className="text-6xl md:text-9xl font-serif text-stroke opacity-10">
                DIGITAL EXCELLENCE • AESTHETIC PURITY • INNOVATION •
              </span>
            ))}
          </motion.div>
        </div>

        {/* About Section */}
        <section id="about" className="py-32 bg-brand-offwhite">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative z-10 aspect-square overflow-hidden rounded-2xl"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" 
                    alt="About Me"
                    className="w-full h-full object-cover grayscale"
                  />
                </motion.div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl" />
              </div>

              <div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-black/40 mb-8"
                >
                  Discover the artisan
                </motion.p>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl font-serif italic mb-10"
                >
                  Pioneering digital <br /> boundaries.
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg leading-relaxed text-brand-black/70 mb-12"
                >
                  I'm Elysia, a digital creator with a decade of experience in crafting bespoke digital experiences for world-class brands. I believe that true beauty lies in the intersection of thoughtful design and flawless execution.
                </motion.p>
                
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Core Expertise</h4>
                    <ul className="text-sm space-y-2 text-brand-black/60">
                      <li>Art Direction</li>
                      <li>Interactive Design</li>
                      <li>Creative Coding</li>
                      <li>Brand Strategy</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Recognition</h4>
                    <ul className="text-sm space-y-2 text-brand-black/60">
                      <li>Awwwards SOTD x4</li>
                      <li>CSS Design Awards</li>
                      <li>FWA Platinum</li>
                      <li>Siteinspire Selection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Journey />

        {/* Cta Section */}
        <section id="contact" className="py-40 bg-brand-black text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.2),transparent_50%)]" />
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.h2 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="text-6xl md:text-[10vw] font-serif leading-none tracking-tighter mb-20"
            >
              LET'S CREATE <br />
              <span className="italic italic text-brand-accent">SOLUTIONS.</span>
            </motion.h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
              <motion.a 
                href="mailto:ghernyee@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="group flex items-center gap-4 text-3xl md:text-5xl font-serif italic border-b border-white/20 pb-4"
              >
                ghernyee@gmail.com <ArrowRight className="group-hover:translate-x-4 transition-transform duration-500" />
              </motion.a>
            </div>

            <div className="mt-32 flex flex-wrap justify-center gap-10">
              {[
                { icon: <Instagram size={18} />, name: 'Instagram' , url: 'https://www.instagram.com/hern_yee'},
                { icon: <Linkedin size={18} />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/hernyee/'},
                { icon: <Github size={18} />, name: 'GitHub', url: 'https://github.com/H3rnYee'},
              ].map((social, i) => (
                <motion.a
                  key={social.name}
                  href= {social.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity"
                >
                  {social.icon} {social.name}
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 bg-brand-black text-white/30 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest">© 2024 ELYSIA STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
