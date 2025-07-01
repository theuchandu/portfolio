import { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validateForm = () => {
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError('All fields are required.');
      return false;
    }
    if (form.name.trim().length < 2) {
      setError('Name must be at least 2 characters.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (form.subject.trim().length < 3) {
      setError('Subject must be at least 3 characters.');
      return false;
    }
    if (form.message.trim().length < 10) {
      setError('Message must be at least 10 characters.');
      return false;
    }
    setError('');
    return true;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setSending(true);
    setError('');
    setSent(false);
    try {
      await emailjs.send(
        'service_kwzmq4k',
        'template_htv0vtq',
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message
        },
        'Elb4D2maUFOPe6l5Q'
      );
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="App">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>

      {/* Cursor Follower */}
      <div 
        className="cursor-follower"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10
        }}
      ></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-icon">
              <div className="logo-symbol">
                <span className="logo-letter">C</span>
                <div className="logo-code">
                  <span className="code-line">dev</span>
                </div>
              </div>
              <div className="logo-glow"></div>
            </div>
            <div className="logo-text">
              <span className="logo-name">Chandu</span>
              <span className="logo-title">Full Stack Dev</span>
            </div>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              <span className="nav-icon">🏠</span>
              <span className="nav-text">Home</span>
            </a>
            <a 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              <span className="nav-icon">👨‍💻</span>
              <span className="nav-text">About</span>
            </a>
            <a 
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => scrollToSection('experience')}
            >
              <span className="nav-icon">💼</span>
              <span className="nav-text">Experience</span>
            </a>
            <a 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => scrollToSection('skills')}
            >
              <span className="nav-icon">⚡</span>
              <span className="nav-text">Skills</span>
            </a>
            <a 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => scrollToSection('projects')}
            >
              <span className="nav-icon">🚀</span>
              <span className="nav-text">Projects</span>
            </a>
            <a 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              <span className="nav-icon">📧</span>
              <span className="nav-text">Contact</span>
            </a>
          </div>

          <div 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-icon">🎯</span>
              <span>Available for new opportunities</span>
            </div>
            <h1 className="hero-title">
              <span className="title-line">Hi, I'm</span>
              <span className="title-highlight">Chandu</span>
              <span className="title-line">👋</span>
            </h1>
            <h2 className="hero-subtitle">
              <span className="subtitle-text">Full Stack Developer</span>
              <span className="subtitle-emoji">💻</span>
            </h2>
            <p className="hero-description">
              Crafting digital experiences with <span className="highlight-text">2 years</span> of expertise in 
              modern web technologies. Turning ideas into reality, one line of code at a time.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                <span className="btn-icon">🚀</span>
                <span>View My Work</span>
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                <span className="btn-icon">💬</span>
                <span>Let's Talk</span>
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-window">
              <div className="window-header">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="window-title">portfolio.js</span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="line-number">1</span>
                  <span className="code-text">class <span className="keyword">Developer</span> {'{'}</span>
                </div>
                <div className="code-line">
                  <span className="line-number">2</span>
                  <span className="code-text indent">constructor() {'{'}</span>
                </div>
                <div className="code-line">
                  <span className="line-number">3</span>
                  <span className="code-text indent-2">this.name = <span className="string">"Chandu"</span>;</span>
                </div>
                <div className="code-line">
                  <span className="line-number">4</span>
                  <span className="code-text indent-2">this.role = <span className="string">"Full Stack"</span>;</span>
                </div>
                <div className="code-line">
                  <span className="line-number">5</span>
                  <span className="code-text indent-2">this.passion = <span className="string">"Coding"</span>;</span>
                </div>
                <div className="code-line">
                  <span className="line-number">6</span>
                  <span className="code-text indent">{'}'}</span>
                </div>
                <div className="code-line">
                  <span className="line-number">7</span>
                  <span className="code-text">{'}'}</span>
                </div>
                <div className="code-line">
                  <span className="line-number">8</span>
                  <span className="code-text"></span>
                </div>
                <div className="code-line">
                  <span className="line-number">9</span>
                  <span className="code-text"><span className="comment">// Ready to build amazing things! 🚀</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-text">Scroll to explore</div>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <div className="section-subtitle">Get to know me better</div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <div className="about-card">
                <div className="card-header">
                  <span className="card-icon">🎯</span>
                  <h3>My Mission</h3>
                </div>
                <p>
                  I'm passionate about creating <span className="highlight-text">scalable web applications</span> 
                  that solve real-world problems. With 2 years of hands-on experience, I specialize in 
                  building robust backend systems and intuitive user interfaces.
                </p>
              </div>
              <div className="about-card">
                <div className="card-header">
                  <span className="card-icon">🚀</span>
                  <h3>What I Do</h3>
                </div>
                <p>
                  From concept to deployment, I handle the entire development lifecycle. 
                  Whether it's <span className="highlight-text">API development</span>, 
                  <span className="highlight-text"> database design</span>, or 
                  <span className="highlight-text"> frontend optimization</span>, 
                  I ensure every project exceeds expectations.
                </p>
              </div>
              <div className="about-card">
                <div className="card-header">
                  <span className="card-icon">💡</span>
                  <h3>My Approach</h3>
                </div>
                <p>
                  I believe in writing <span className="highlight-text">clean, maintainable code</span> 
                  and staying updated with the latest technologies. Every project is an opportunity 
                  to learn and grow as a developer.
                </p>
              </div>
            </div>
            <div className="about-visual">
              <div className="profile-container">
                <div className="profile-image">
                  <div className="image-placeholder">C</div>
                  <div className="profile-ring"></div>
                  <div className="profile-ring ring-2"></div>
                </div>
                <div className="profile-info">
                  <h3>Chandu</h3>
                  <p>PHP Full Stack Developer</p>
                  <div className="profile-tags">
                    <span className="tag">Laravel Expert</span>
                    <span className="tag">Problem Solver</span>
                    <span className="tag">Team Player</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Work Experience</h2>
            <div className="section-subtitle">My professional journey</div>
          </div>
          
          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="company-info">
                      <h3 className="company-name">Full1111111111 Stack Developer</h3>
                      <p className="company-location">Remote / Freelance</p>
                    </div>
                    <div className="experience-duration">
                      <span className="duration">2022 - Present</span>
                      <span className="duration-badge">2+ years</span>
                    </div>
                  </div>
                  <div className="role-info">
                    <h4 className="job-title">PHP Full Stack Developer</h4>
                    <p className="job-description">
                      Specialized in Laravel-based web applications with expertise in payment gateway integrations, 
                      real-time tracking systems, and comprehensive resort management solutions. 
                      Developed secure, scalable applications using modern web technologies.
                    </p>
                  </div>
                  <div className="projects-worked">
                    <h5 className="projects-title">Key Projects:</h5>
                    <div className="project-list">
                      <div className="project-item">
                        <span className="project-name">Plot Management System</span>
                        <span className="project-tech">Laravel, MySQL, JavaScript</span>
                      </div>
                      <div className="project-item">
                        <span className="project-name">Location-Based HR System</span>
                        <span className="project-tech">Laravel, REST APIs, jQuery</span>
                      </div>
                      <div className="project-item">
                        <span className="project-name">Resort Management Application</span>
                        <span className="project-tech">Laravel, Bootstrap, Payment APIs</span>
                      </div>
                      <div className="project-item">
                        <span className="project-name">Resort Website</span>
                        <span className="project-tech">HTML, CSS, Bootstrap, SEO</span>
                      </div>
                    </div>
                  </div>
                  <div className="achievements">
                    <h5 className="achievements-title">Key Achievements:</h5>
                    <ul className="achievements-list">
                      <li>Developed EMI tracking and payment history modules with secure architecture</li>
                      <li>Implemented associate hierarchy system for referral and commission tracking</li>
                      <li>Built real-time location-based employee tracking and attendance system</li>
                      <li>Integrated multiple payment gateways (PhonePe, Razorpay, ICICI)</li>
                      <li>Created responsive, SEO-friendly websites with admin dashboards</li>
                      <li>Hotel booking and reservation system, room availibity Calender</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              
            </div>

        </div>

          {/* Experience Summary */}
          {/* <div className="experience-summary">
            <div className="summary-stats">
              <div className="stat-card">
                <div className="stat-icon">💻</div>
                <div className="stat-content">
                  <h4>Full Stack</h4>
                  <p>PHP, Laravel, JavaScript, MySQL</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🎨</div>
                <div className="stat-content">
                  <h4>Frontend</h4>
                  <p>HTML, CSS, Bootstrap, jQuery</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🔌</div>
                <div className="stat-content">
                  <h4>APIs & Integrations</h4>
                  <p>REST APIs, Payment Gateways</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📊</div>
                <div className="stat-content">
                  <h4>Projects Delivered</h4>
                  <p>10+ successful applications</p>
                </div>
              </div>
            </div>
          </div> */}

          {/* Tech Stack Section */}
          <div className="tech-stack-section">
            <div className="section-header">
              <h3 className="section-title">Technologies & Tools</h3>
              <div className="section-subtitle">My technical expertise</div>
            </div>
            <div className="tech-grid">
              <div className="tech-category">
                <h4 className="tech-category-title">Backend Development</h4>
                <div className="tech-items">
                  <span className="tech-item">PHP</span>
                  <span className="tech-item">Laravel</span>
                  <span className="tech-item">MySQL</span>
                  <span className="tech-item">REST APIs</span>
                </div>
              </div>
              <div className="tech-category">
                <h4 className="tech-category-title">Frontend Development</h4>
                <div className="tech-items">
                  <span className="tech-item">HTML5</span>
                  <span className="tech-item">CSS3</span>
                  <span className="tech-item">JavaScript</span>
                  <span className="tech-item">jQuery</span>
                  <span className="tech-item">Bootstrap</span>
                </div>
              </div>
              <div className="tech-category">
                <h4 className="tech-category-title">Payment & Integrations</h4>
                <div className="tech-items">
                  <span className="tech-item">PhonePe</span>
                  <span className="tech-item">Razorpay</span>
                  <span className="tech-item">ICICI Gateway</span>
                  <span className="tech-item">SMS/Email APIs</span>
                </div>
              </div>
              <div className="tech-category">
                <h4 className="tech-category-title">Development Tools</h4>
                <div className="tech-items">
                  <span className="tech-item">Git</span>
                  <span className="tech-item">Composer</span>
                  <span className="tech-item">npm</span>
                  <span className="tech-item">VS Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Skills & Expertise</h2>
            {/* <div className="section-subtitle">Technologies I work with</div> */}
          </div>
          
         
          <div className="skills-container">
            <div className="skill-category">
              <div className="category-header">
                <div className="category-icon-wrapper">
                  <span className="category-icon">🔧</span>
                  <div className="icon-glow"></div>
                </div>
                <h3>Backend Development</h3>
                <div className="category-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '88%'}}></div>
                  </div>
                  <span className="progress-text">88%</span>
                </div>
              </div>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-header">
                    <div className="skill-icon">🐘</div>
                    <div className="skill-info">
                      <span className="skill-name">PHP</span>
                      <span className="skill-level">90%</span>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '90%'}}>
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                  <div className="skill-details">
                    <span className="skill-experience">2+ years</span>
                    <span className="skill-projects">15+ projects</span>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-header">
                    <div className="skill-icon">⚡</div>
                    <div className="skill-info">
                      <span className="skill-name">Laravel</span>
                      <span className="skill-level">85%</span>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '85%'}}>
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                  <div className="skill-details">
                    <span className="skill-experience">2+ years</span>
                    <span className="skill-projects">10+ projects</span>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-header">
                    <div className="skill-icon">🗄️</div>
                    <div className="skill-info">
                      <span className="skill-name">MySQL</span>
                      <span className="skill-level">80%</span>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '80%'}}>
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                  <div className="skill-details">
                    <span className="skill-experience">2+ years</span>
                    <span className="skill-projects">20+ databases</span>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-header">
                    <div className="skill-icon">🔌</div>
                    <div className="skill-info">
                      <span className="skill-name">REST APIs</span>
                      <span className="skill-level">85%</span>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '85%'}}>
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                  <div className="skill-details">
                    <span className="skill-experience">1.5+ years</span>
                    <span className="skill-projects">25+ APIs</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <div className="category-icon-wrapper">
                  <span className="category-icon">🎨</span>
                  <div className="icon-glow"></div>
                </div>
                <h3>Frontend Development</h3>
                <div className="category-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '82%'}}></div>
                  </div>
                  <span className="progress-text">82%</span>
                </div>
              </div>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-header">
                    <div className="skill-icon">🌐</div>
                    <div className="skill-info">
                      <span className="skill-name">HTML/CSS</span>
                      <span className="skill-level">90%</span>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '90%'}}>
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                  <div className="skill-details">
                    <span className="skill-experience">2+ years</span>
                    <span className="skill-projects">30+ websites</span>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-header">
                    <div className="skill-icon">⚡</div>
                    <div className="skill-info">
                      <span className="skill-name">JavaScript</span>
                      <span className="skill-level">80%</span>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '80%'}}>
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                  <div className="skill-details">
                    <span className="skill-experience">2+ years</span>
                    <span className="skill-projects">12+ projects</span>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-header">
                    <div className="skill-icon">⚛️</div>
                    <div className="skill-info">
                      <span className="skill-name">React</span>
                      <span className="skill-level">75%</span>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '75%'}}>
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                  <div className="skill-details">
                    <span className="skill-experience">1+ year</span>
                    <span className="skill-projects">8+ projects</span>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-header">
                    <div className="skill-icon">🎯</div>
                    <div className="skill-info">
                      <span className="skill-name">Bootstrap</span>
                      <span className="skill-level">85%</span>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '85%'}}>
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                  <div className="skill-details">
                    <span className="skill-experience">1.5+ years</span>
                    <span className="skill-projects">22+ projects</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <div className="category-icon-wrapper">
                  <span className="category-icon">🛠️</span>
                  <div className="icon-glow"></div>
                </div>
                <h3>Tools & Others</h3>
                <div className="category-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '72%'}}></div>
                  </div>
                  <span className="progress-text">72%</span>
                </div>
              </div>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-header">
                    <div className="skill-icon">📝</div>
                    <div className="skill-info">
                      <span className="skill-name">Git</span>
                      <span className="skill-level">80%</span>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '80%'}}>
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                  <div className="skill-details">
                    <span className="skill-experience">2+ years</span>
                    <span className="skill-projects">50+ repos</span>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-header">
                    <div className="skill-icon">☁️</div>
                    <div className="skill-info">
                      <span className="skill-name">AWS</span>
                      <span className="skill-level">10%</span>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '65%'}}>
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                  <div className="skill-details">
                    <span className="skill-experience">1+ year</span>
                    <span className="skill-projects">5+ deployments</span>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-header">
                    <div className="skill-icon">🐧</div>
                    <div className="skill-info">
                      <span className="skill-name">Linux</span>
                      <span className="skill-level">75%</span>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '75%'}}>
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                  <div className="skill-details">
                    <span className="skill-experience">1.5+ years</span>
                    <span className="skill-projects">15+ servers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <div className="skills-summary">
            <div className="summary-card">
              <div className="summary-icon">🚀</div>
              <h4>Fast Learner</h4>
              <p>Quickly adapt to new technologies and frameworks</p>
            </div>
            <div className="summary-card">
              <div className="summary-icon">🔧</div>
              <h4>Problem Solver</h4>
              <p>Efficiently debug and resolve complex technical issues</p>
            </div>
            <div className="summary-card">
              <div className="summary-icon">👥</div>
              <h4>Team Player</h4>
              <p>Collaborate effectively in agile development teams</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-subtitle">Some of my recent work</div>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">🛒</div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
              <div className="project-content">
                <h3>E-Commerce Platform</h3>
                <p>
                  A comprehensive e-commerce solution with advanced features including 
                  user authentication, product management, payment processing, and 
                  admin dashboard with analytics.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Laravel</span>
                  <span className="tech-tag">MySQL</span>
                  <span className="tech-tag">Bootstrap</span>
                  <span className="tech-tag">Stripe</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">📋</div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
              <div className="project-content">
                <h3>Task Management App</h3>
                <p>
                  A collaborative project management tool with real-time updates, 
                  team collaboration features, progress tracking, and deadline management.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">PHP</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">WebSocket</span>
                  <span className="tech-tag">MySQL</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">📝</div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
              <div className="project-content">
                <h3>Blog System</h3>
                <p>
                  A modern content management system with SEO optimization, 
                  comment system, social media integration, and analytics dashboard.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Laravel</span>
                  <span className="tech-tag">Vue.js</span>
                  <span className="tech-tag">Redis</span>
                  <span className="tech-tag">Elasticsearch</span>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <div className="section-subtitle">Let's work together!</div>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-header">
                  <span className="contact-icon">💬</span>
                  <h3>Ready to collaborate?</h3>
                </div>
                <p>
                  I'm always excited about new opportunities and challenging projects. 
                  Whether you have a question or want to discuss a potential collaboration, 
                  feel free to reach out!
                </p>
              </div>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <h4>Email</h4>
                    <p>rajchanduu@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 91827 82130</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>Location</h4>
                    <p>India</p>
                  </div>
                </div>
              </div>
              <div className="social-links">
                <a href="https://github.com/theuchandu" className="social-link">
                  <span className="social-icon">🐙</span>
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/godishala-chandu-8a933a16a/" className="social-link">
                  <span className="social-icon">💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="social-link">
                  <span className="social-icon">🐦</span>
                  <span>Twitter</span>
                </a>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name" 
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Your Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Discussion"
                    value={form.subject}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows="5"
                    value={form.message}
                    onChange={handleFormChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={sending}>
                  <span className="btn-icon">📤</span>
                  <span>{sending ? 'Sending...' : 'Send Message'}</span>
                </button>
                {error && <div className="error-message">{error}</div>}
                {sent && <div className="success-message">Message sent successfully! Thank you for reaching out.</div>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            
            <p className="footer-text">
              Crafting digital experiences with passion and precision
            </p>
            <div className="footer-links">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Chandu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
