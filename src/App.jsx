import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, ExternalLink, Mail, Phone, MapPin, Code, Palette, Smartphone, Database, Sun, Moon, Menu, X, Send, CheckCircle, AlertCircle } from 'lucide-react';
const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }
    
    // Simulate form submission
    setFormStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus(''), 3000);
  };

  const projects = [
    {
      title: "FoodApp - Food Ordering Platform",
      description: "A responsive and dynamic food ordering web application using React.js with Redux state management. Integrated with Swiggy's API for real-time restaurant data.",
      image: "./assets/food.png", // Replace with actual image path
      tech: ["React.js", "Redux", "React Router", "CSS3", "JavaScript ES6+", "Swiggy API"],
      github: "https://github.com/roshan194/Food_App.git", // Replace with actual GitHub repo
      live: "https://food-app-one-bice.vercel.app/" // Replace with actual live demo
    },
    {
      title: "MeShop - E-Commerce Platform",
      description: "A comprehensive e-commerce shopping cart application with user authentication, dynamic product fetching, and integrated Razorpay payment processing.",
      image: "./assets/MeShop.png", // Replace with actual image path
      tech: ["HTML", "CSS", "JavaScript", "FakeStoreAPI", "Razorpay", "Local Storage"],
      github: "https://github.com/roshan194/Meshop.git", // Replace with actual GitHub repo
      live: "https://tourmaline-entremet-50730b.netlify.app/" // Replace with actual live demo
    },
    {
      title: "MapMyPost - Location Service App",
      description: "A web application that retrieves user location based on IP address and displays local post offices with interactive Google Maps integration.",
      image: "./assets/Post.png",
      tech: ["JavaScript", "HTML", "CSS", "ipapi.co API", "Google Maps API", "PostPincode API"],
      github: "https://github.com/roshan194/PostOffice.git", // Replace with actual GitHub repo
      live: "https://post-office-ashen.vercel.app/" // Replace with actual live demo
    }
  ];

  const experiences = [
    {
      title: "Employee Skill Development Trainee",
      company: "Zensar Technologies",
      period: "Oct 2021 – Mar 2022",
      description: "Participated in comprehensive apprenticeship program focused on skill development. Enhanced proficiency in Java, SQL, and Aptitude through training sessions and hands-on projects."
    },
    {
      title: "Web Developer Intern",
      company: "The Sparks Foundation",
      period: "Oct 2021 - Nov 2021",
      description: "Successfully designed a dynamic, responsive website with integrated payment gateway. Developed front-end using HTML, CSS, and JavaScript, improving page load speed by 40%."
    },
    {
      title: "Bachelor of Engineering - Information Technology",
      company: "DY Patil College of Engineering, Pune",
      period: "July 2019 - June 2023",
      description: "Graduated with CGPA of 8.06. Built strong foundation in programming, web development, and software engineering principles. Active in technical projects and competitions."
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: Code, level: 90 },
    { name: "React.js & Redux", icon: Code, level: 95 },
    { name: "Full Stack Development", icon: Database, level: 85 },
    { name: "UI/UX Implementation", icon: Palette, level: 80 }
  ];

  const achievements = [
    "Qualified for Microsoft AI Class Series Contest",
    "Certificate of Participation in Capgemini Tech Challenge",
    "Website Development with Django Certification",
    "Published research paper on E-Voting Using Blockchain"
  ];

  const techStack = {
    languages: ["C++", "Java", "HTML", "CSS", "JavaScript", "SQL"],
    frameworks: ["React.js", "Node.js", "Express.js", "Bootstrap", "Tailwind CSS", "jQuery"],
    databases: ["Firebase", "MongoDB", "MySQL"],
    tools: ["Git", "GitHub", "Heroku", "Netlify"]
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                RK
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                {['hero', 'about', 'projects', 'experience', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors ${
                      activeSection === section
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {section === 'hero' ? 'Home' : section}
                  </button>
                ))}
              </div>

              {/* Theme Toggle & Mobile Menu */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col space-y-2">
                  {['hero', 'about', 'projects', 'experience', 'contact'].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="text-left py-2 px-4 capitalize hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      {section === 'hero' ? 'Home' : section}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fadeInUp">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Roshan <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Kumar</span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
                Frontend Developer & Full Stack Engineer
              </p>
              <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                Passionate about creating dynamic, responsive web applications with modern technologies. 
                Experienced in React.js, JavaScript ES6+, and full-stack development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all duration-200"
                >
                  Get In Touch
                </button>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown size={32} className="text-gray-400" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-6xl font-bold text-gray-600 dark:text-gray-300">
                    RK
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  I'm a passionate Frontend Developer and Full Stack Engineer with experience in 
                  building dynamic, responsive web applications. I hold a Bachelor's degree in 
                  Information Technology from DY Patil College of Engineering with a CGPA of 8.06. 
                  I love creating seamless user experiences and solving complex problems with clean, efficient code.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center mb-2">
                        <skill.icon size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 group-hover:scale-105"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Languages</h4>
                      <div className="flex flex-wrap gap-2">
                        {techStack.languages.map((lang, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">Frameworks & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {techStack.frameworks.map((framework, index) => (
                          <span key={index} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-full">
                            {framework}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-6">Achievements</h3>
                  <div className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Github size={20} className="mr-2" />
                        Code
                      </a>
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={20} className="mr-2" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Experience & Education</h2>
            
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative mb-12">
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                  
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                      <h4 className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{exp.company}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{exp.period}</p>
                      <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's work together!</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  I'm always interested in new opportunities and collaborations. 
                  Whether you have a project in mind or just want to chat, feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail size={24} className="text-blue-600 dark:text-blue-400 mr-4" />
                    <a href="mailto:roshankumarrk9570@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      roshankumarrk9570@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone size={24} className="text-blue-600 dark:text-blue-400 mr-4" />
                    <a href="tel:+919661731796" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      +91 9661731796
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={24} className="text-blue-600 dark:text-blue-400 mr-4" />
                    <span>Bengaluru, Karnataka</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-6 mt-8">
                  <a 
                    href="https://github.com/roshankumarrk9570" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="#" // Replace with actual LinkedIn URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={24} />
                  </a>
                  <a 
                    href="mailto:roshankumarrk9570@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 resize-none"
                  ></textarea>
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
                
                {formStatus === 'success' && (
                  <div className="flex items-center text-green-600 dark:text-green-400">
                    <CheckCircle size={20} className="mr-2" />
                    Message sent successfully!
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="flex items-center text-red-600 dark:text-red-400">
                    <AlertCircle size={20} className="mr-2" />
                    Please fill in all fields.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Roshan Kumar
            </div>
            <p className="text-gray-400 mb-8">Frontend Developer & Full Stack Engineer • Building innovative web solutions</p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="https://github.com/roshan194" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/roshan-kumar-6300731aa/" // Replace with LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink size={24} />
              </a>
              <a 
                href="mailto:roshankumarrk9570@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
            
            <p className="text-gray-500 text-sm">
              © 2025 Roshan Kumar. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;