import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
              <span className="logo-text">C</span>
            </div>
            <span className="logo-name">Chandu</span>
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

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Skills & Expertise</h2>
            <div className="section-subtitle">Technologies I work with</div>
          </div>
          <div className="skills-container">
            <div className="skill-category">
              <div className="category-header">
                <span className="category-icon">🔧</span>
                <h3>Backend Development</h3>
              </div>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">PHP</span>
                    <span className="skill-level">90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Laravel</span>
                    <span className="skill-level">85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">MySQL</span>
                    <span className="skill-level">80%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">REST APIs</span>
                    <span className="skill-level">85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <span className="category-icon">🎨</span>
                <h3>Frontend Development</h3>
              </div>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">HTML/CSS</span>
                    <span className="skill-level">90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">JavaScript</span>
                    <span className="skill-level">80%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">React</span>
                    <span className="skill-level">75%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Bootstrap</span>
                    <span className="skill-level">85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <span className="category-icon">🛠️</span>
                <h3>Tools & Others</h3>
              </div>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Git</span>
                    <span className="skill-level">80%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Docker</span>
                    <span className="skill-level">70%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '70%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">AWS</span>
                    <span className="skill-level">65%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '65%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Linux</span>
                    <span className="skill-level">75%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
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

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">🔗</div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
              <div className="project-content">
                <h3>API Gateway</h3>
                <p>
                  A microservices API gateway with authentication, rate limiting, 
                  request/response transformation, monitoring, and load balancing.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">PHP</span>
                  <span className="tech-tag">Docker</span>
                  <span className="tech-tag">Redis</span>
                  <span className="tech-tag">Nginx</span>
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
                    <p>chandu@example.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 98765 43210</p>
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
                <a href="#" className="social-link">
                  <span className="social-icon">🐙</span>
                  <span>GitHub</span>
                </a>
                <a href="#" className="social-link">
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
              <form>
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>Your Email</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="Project Discussion" required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Tell me about your project..." rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  <span className="btn-icon">📤</span>
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-text">C</span>
              <span>Chandu</span>
            </div>
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
