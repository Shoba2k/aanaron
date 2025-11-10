import React, { useEffect, useState } from 'react'
import {
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaAward,
  FaCertificate,
  FaUsers,
  FaTools,
  FaClock,
  FaFileContract,
  FaChartLine,
  FaHardHat,
  FaBell,
  FaClipboardCheck,
  FaBars,
  FaTimes
} from 'react-icons/fa'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const services = [
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      title: "Modern Villas",
      description: "Contemporary luxury living spaces designed to perfection"
    },
    {
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      title: "Customized Apartments",
      description: "Tailored residential spaces that match your lifestyle"
    },
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      title: "Customized Homes",
      description: "Your dream home built exactly as you envision"
    }
  ]

  const features = [
    {
      icon: <FaCertificate />,
      title: "ISO Certified Company",
      description: "Quality assurance through international standards"
    },
    {
      icon: <FaTools />,
      title: "Turnkey Projects",
      description: "Complete end-to-end project execution"
    },
    {
      icon: <FaAward />,
      title: "Quality Guaranteed",
      description: "Structural warranty: 12 years | Composite warranty: 5 years"
    },
    {
      icon: <FaUsers />,
      title: "20+ Years Experience",
      description: "Experienced team with proven track record"
    },
    {
      icon: <FaClipboardCheck />,
      title: "Complete Project Logbook",
      description: "Full transparency on building quality and process"
    },
    {
      icon: <FaChartLine />,
      title: "Expert Team",
      description: "Experienced architects & engineers directly involved"
    },
    {
      icon: <FaHardHat />,
      title: "Dedicated Site Engineer",
      description: "One dedicated engineer for every project"
    },
    {
      icon: <FaBell />,
      title: "Regular Updates",
      description: "Stay informed with consistent project updates"
    },
    {
      icon: <FaFileContract />,
      title: "Clear Contracts",
      description: "Avoid litigations, build mutual confidence"
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality Materials",
      description: "Only premium materials for lasting quality"
    },
    {
      icon: <FaFileContract />,
      title: "Free Structural Diagrams",
      description: "Complete structural plans provided at no cost"
    },
    {
      icon: <FaClock />,
      title: "Timely Completion",
      description: "Save time and costs with on-schedule delivery"
    }
  ]

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/aanaron/logo.jpeg" alt="Aaronald Logo" className="nav-logo-image" />
            <span className="nav-logo-text">AARONALD</span>
          </div>
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <a href="tel:9652509327" className="nav-cta">Call Now</a>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <a href="#home" className="mobile-menu-link" onClick={closeMobileMenu}>Home</a>
          <a href="#services" className="mobile-menu-link" onClick={closeMobileMenu}>Services</a>
          <a href="#features" className="mobile-menu-link" onClick={closeMobileMenu}>Features</a>
          <a href="#gallery" className="mobile-menu-link" onClick={closeMobileMenu}>Gallery</a>
          <a href="#contact" className="mobile-menu-link" onClick={closeMobileMenu}>Contact</a>
          <a href="tel:9652509327" className="mobile-menu-cta" onClick={closeMobileMenu}>
            <FaPhone /> Call Now
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className={`hero ${isVisible ? 'visible' : ''}`}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-top">
            <div className="logo-container">
              <div className="logo-box">
                <img src="/aanaron/logo.jpeg" alt="Aaronald Logo" className="hero-logo-image" />
              </div>
            </div>
            <div className="company-info">
              <h1 className="company-name">AARONALD</h1>
              <div className="company-divider"></div>
              <p className="company-subtitle">SERVICES PVT. LTD.</p>
              <p className="company-tagline">Builders | Contractors | Suppliers</p>
            </div>
          </div>

          <div className="hero-main">
            <h2 className="motto">We Build Your Dreams</h2>
            <p className="motto-subtitle">Transforming visions into architectural excellence</p>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon">
                <FaCertificate />
              </div>
              <div className="stat-content">
                <h3>ISO Certified</h3>
                <p>Quality Standards</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <FaAward />
              </div>
              <div className="stat-content">
                <h3>20+ Years</h3>
                <p>Experience</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <FaCheckCircle />
              </div>
              <div className="stat-content">
                <h3>12 Years</h3>
                <p>Warranty</p>
              </div>
            </div>
          </div>

          <div className="hero-cta">
            <a href="tel:9652509327" className="hero-button primary">Get Started</a>
            <a href="#contact" className="hero-button secondary">Contact Us</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Specialization</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay"></div>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Aaronald Services?</h2>
          <p className="features-subtitle">Commitment to excellence in every aspect</p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">{feature.icon}</div>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="section-title">Our Projects Showcase</h2>
          <p className="gallery-subtitle">Excellence in every construction</p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" alt="Luxury Villa Project" />
              <div className="gallery-overlay">
                <h3>Luxury Villa</h3>
                <p>Hyderabad</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80" alt="Modern Apartment Complex" />
              <div className="gallery-overlay">
                <h3>Modern Apartments</h3>
                <p>Shamshabad</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80" alt="Custom Home Design" />
              <div className="gallery-overlay">
                <h3>Custom Home</h3>
                <p>Telangana</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80" alt="Residential Complex" />
              <div className="gallery-overlay">
                <h3>Residential Complex</h3>
                <p>Hyderabad</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80" alt="Contemporary Villa" />
              <div className="gallery-overlay">
                <h3>Contemporary Villa</h3>
                <p>Velankanni Nagar</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80" alt="Premium Apartments" />
              <div className="gallery-overlay">
                <h3>Premium Apartments</h3>
                <p>Hyderabad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="managing-director">
                <h3>T. Chinnapa Reddy</h3>
                <p className="designation">(Ex-IAF) - Managing Director</p>
              </div>

              <div className="contact-details">
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <div>
                    <a href="tel:9652509327">96525 09327</a>
                    <span className="separator">|</span>
                    <a href="tel:9992721407">99927 21407</a>
                  </div>
                </div>

                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:info.aaronaldservices@gmail.com">
                    info.aaronaldservices@gmail.com
                  </a>
                </div>

                <div className="contact-item">
                  <FaGlobe className="contact-icon" />
                  <a href="https://www.aaronald.com" target="_blank" rel="noopener noreferrer">
                    www.aaronald.com
                  </a>
                </div>

                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div className="address">
                    <p>#4-235, Velankanni Nagar</p>
                    <p>Shamshabad, Hyderabad-501218</p>
                    <p>Telangana State, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-cta">
              <h3>Ready to Start Your Dream Project?</h3>
              <p>Contact us today for a free consultation and structural diagrams</p>
              <a href="tel:9652509327" className="cta-button">Call Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Aaronald Services Pvt. Ltd. All rights reserved.</p>
          <p className="footer-tagline">Building Dreams, Ensuring Quality</p>
        </div>
      </footer>
    </div>
  )
}

export default App
