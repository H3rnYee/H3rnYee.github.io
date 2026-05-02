import React, { useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function AboutMe() {
  const [expandedSkill, setExpandedSkill] = useState(null);

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
              <div
                key={idx}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition cursor-pointer"
                onClick={() => setExpandedSkill(expandedSkill === idx ? null : idx)}
              >
                <div className={`inline-block h-1 w-12 rounded-full mb-4 bg-gradient-to-r ${category.color}`}></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sidx) => (
                    <span
                      key={sidx}
                      className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium"
                    >
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

  const Experience = () => {
    const experiences = [
      {
        role: 'Senior Frontend Engineer',
        company: 'TechCorp Inc.',
        period: '2022 - Present',
        description: 'Leading frontend architecture and mentoring a team of 5 engineers'
      },
      {
        role: 'Full-stack Developer',
        company: 'StartupXYZ',
        period: '2020 - 2022',
        description: 'Built and scaled web applications serving 100k+ users'
      },
      {
        role: 'Junior Developer',
        company: 'Digital Agency',
        period: '2018 - 2020',
        description: 'Developed responsive websites and web applications for diverse clients'
      }
    ];

    return (
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                <p className="text-blue-600 font-medium">{exp.company}</p>
                <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const Projects = () => {
    const projects = [
      {
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with real-time inventory management',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        link: '#'
      },
      {
        title: 'Task Management App',
        description: 'Collaborative task management tool with real-time updates',
        tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
        link: '#'
      },
      {
        title: 'Data Visualization Dashboard',
        description: 'Interactive dashboard for analyzing and visualizing complex datasets',
        tags: ['React', 'D3.js', 'Python', 'AWS'],
        link: '#'
      }
    ];

    return (
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Featured projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                className="group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tidx) => (
                    <span key={tidx} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition gap-1">
                  View project
                  <ExternalLink size={16} />
                </div>
              </a>
            ))}
          </div>
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
          <a
            href="mailto:john@example.com"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            Email me
          </a>
          <a
            href="#"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
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
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}