import React, { useState } from 'react';

// Inline SVG Icons
const ChevronDown = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const Github = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
);

const Mail = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const ExternalLink = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const Menu = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const X = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function AboutMe() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavBar = () => (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => {
              setCurrentPage('home');
              setMobileMenuOpen(false);
            }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-80 transition"
          >
            JD
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => setCurrentPage('home')}
              className={`font-medium transition ${
                currentPage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('experience')}
              className={`font-medium transition ${
                currentPage === 'experience' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setCurrentPage('projects')}
              className={`font-medium transition ${
                currentPage === 'projects' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Projects
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 border-t border-gray-200 pt-4">
            <button
              onClick={() => {
                setCurrentPage('home');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition"
            >
              Home
            </button>
            <button
              onClick={() => {
                setCurrentPage('experience');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition"
            >
              Experience
            </button>
            <button
              onClick={() => {
                setCurrentPage('projects');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition"
            >
              Projects
            </button>
          </div>
        )}
      </div>
    </nav>
  );

  const Hero = () => (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-blue-50 to-transparent">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
            JD
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          John Doe
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-6">
          Full-stack developer & creative technologist
        </p>
        <p className="text-lg text-gray-500 mb-12 leading-relaxed">
          I build elegant digital solutions that blend design, code, and user experience. Passionate about open source and mentoring the next generation of developers.
        </p>
        <div className="flex gap-4 justify-center mb-12">
          <a href="#" className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
            <Github size={24} className="text-gray-700" />
          </a>
          <a href="#" className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
            <Linkedin size={24} className="text-gray-700" />
          </a>
          <a href="#" className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
            <Mail size={24} className="text-gray-700" />
          </a>
        </div>
        <div className="animate-bounce">
          <ChevronDown size={24} className="text-gray-400 mx-auto" />
        </div>
      </div>
    </div>
  );

  const About = () => (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">About me</h2>
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            With over 8 years of experience in web development, I've grown from a curious learner into a pragmatic problem-solver. My journey started with a simple interest in how things work and evolved into a career building products that matter.
          </p>
          <p>
            I specialize in creating seamless user experiences using modern JavaScript frameworks. Whether it's architecting scalable backends or crafting intuitive frontends, I approach every challenge with both creativity and technical rigor.
          </p>
          <p>
            Beyond code, I'm committed to sharing knowledge. I regularly speak at meetups, contribute to open-source projects, and mentor junior developers. I believe that great technology is built by great teams, and I love helping others grow.
          </p>
        </div>
      </div>
    </section>
  );

  const Skills = () => {
    const skillCategories = [
      {
        name: 'Frontend',
        skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js'],
        color: 'from-blue-500 to-cyan-500'
      },
      {
        name: 'Backend',
        skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
        color: 'from-purple-500 to-pink-500'
      },
      {
        name: 'Tools & DevOps',
        skills: ['Docker', 'AWS', 'Git', 'GitHub Actions', 'Linux'],
        color: 'from-orange-500 to-red-500'
      },
      {
        name: 'Design',
        skills: ['Figma', 'UI/UX Principles', 'Responsive Design', 'Accessibility', 'Web Performance'],
        color: 'from-green-500 to-emerald-500'
      }
    ];

    return (
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Skills & expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition cursor-pointer">
                <div className={`inline-block h-1 w-12 rounded-full mb-4 bg-gradient-to-r ${category.color}`}></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sidx) => (
                    <span key={sidx} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const HomePage = () => (
    <div>
      <Hero />
      <About />
      <Skills />
    </div>
  );

  const ExperiencePage = () => {
    const experiences = [
      {
        role: 'Senior Frontend Engineer',
        company: 'TechCorp Inc.',
        period: '2022 - Present',
        description: 'Leading frontend architecture and mentoring a team of 5 engineers. Implemented a new design system that improved development velocity by 40%.'
      },
      {
        role: 'Full-stack Developer',
        company: 'StartupXYZ',
        period: '2020 - 2022',
        description: 'Built and scaled web applications serving 100k+ users. Architected microservices infrastructure using Node.js and AWS, reducing API response time by 60%.'
      },
      {
        role: 'Junior Developer',
        company: 'Digital Agency',
        period: '2018 - 2020',
        description: 'Developed responsive websites and web applications for diverse clients. Collaborated with designers and product managers to deliver pixel-perfect UIs.'
      },
      {
        role: 'Web Developer Intern',
        company: 'Tech Startup',
        period: '2017 - 2018',
        description: 'Started my journey with HTML, CSS, and JavaScript fundamentals. Contributed to various projects and learned best practices in web development.'
      }
    ];

    return (
      <section className="min-h-screen py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Experience</h1>
          <p className="text-lg text-gray-600 mb-12">My professional journey in web development</p>
          
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-blue-500 pb-8">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                <h3 className="text-2xl font-semibold text-gray-900">{exp.role}</h3>
                <p className="text-blue-600 font-medium text-lg">{exp.company}</p>
                <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage('home')}
            className="mt-12 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Back to Home
          </button>
        </div>
      </section>
    );
  };

  const ProjectsPage = () => {
    const projects = [
      {
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with React, Node.js, and PostgreSQL.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        link: '#',
        details: 'Increased conversion rate by 35% through optimized checkout flow. Handled 10k+ daily transactions.'
      },
      {
        title: 'Task Management App',
        description: 'Collaborative task management tool with real-time updates, team workspaces, and project tracking. Supports 1000+ concurrent users.',
        tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
        link: '#',
        details: 'Built with WebSockets for real-time collaboration. Used by 50+ companies internally.'
      },
      {
        title: 'Data Visualization Dashboard',
        description: 'Interactive dashboard for analyzing and visualizing complex datasets with custom charts, filters, and exports.',
        tags: ['React', 'D3.js', 'Python', 'AWS'],
        link: '#',
        details: 'Processes 1M+ data points with sub-second load times. Deployed on AWS with auto-scaling.'
      },
      {
        title: 'AI Content Generator',
        description: 'SaaS platform for generating blog posts, social media content, and marketing copy using GPT-3 API integration.',
        tags: ['Next.js', 'OpenAI API', 'Stripe'],
        link: '#',
        details: 'Currently generating 10k+ pieces of content monthly. 500+ active users.'
      }
    ];

    return (
      <section className="min-h-screen py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Featured Projects</h1>
          <p className="text-lg text-gray-600 mb-12">A selection of my recent work</p>
          
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-lg">{project.description}</p>
                <p className="text-gray-500 italic mb-6">{project.details}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tidx) => (
                    <span key={tidx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 font-medium hover:gap-2 transition gap-1"
                >
                  View project
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage('home')}
            className="mt-12 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Back to Home
          </button>
        </div>
      </section>
    );
  };

  const Contact = () => (
    <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Let's connect</h2>
        <p className="text-lg text-gray-600 mb-12">
          Whether you have a project in mind, want to collaborate, or just want to chat about tech, I'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:john@example.com" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
            <Mail size={20} />
            Email me
          </a>
          <a href="#" className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
            Schedule a call
          </a>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="py-8 px-6 bg-gray-900 text-gray-400 text-center text-sm">
      <p>© 2024 John Doe. Built with React and Tailwind CSS.</p>
    </footer>
  );

  return (
    <div className="bg-white">
      <NavBar />
      
      {currentPage === 'home' && (
        <>
          <HomePage />
          <Contact />
        </>
      )}
      
      {currentPage === 'experience' && <ExperiencePage />}
      
      {currentPage === 'projects' && <ProjectsPage />}
      
      <Footer />
    </div>
  );
}