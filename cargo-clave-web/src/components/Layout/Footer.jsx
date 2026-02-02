import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';
import './Footer.css'; // Import the new CSS file

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-container">
            <div className="footer-content">

                {/* Brand Column (Larger) */}
                <div className="footer-brand">
                    <Link to="/" className="footer-logo-text">
                        Cargo<span className="footer-logo-accent">Clave</span>
                    </Link>
                    <p className="footer-description">
                        Empowering global trade through structured data and unified logistics orchestration.
                    </p>
                </div>

                {/* Solutions */}
                <div className="footer-column">
                    <h3>Solutions</h3>
                    <ul className="footer-links">
                        <li><Link to="/solutions" className="footer-link">End-to-End Services</Link></li>
                        <li><Link to="/solutions/trade-management" className="footer-link">Trade Management</Link></li>
                        <li><Link to="/solutions/cargo-operations" className="footer-link">Cargo Operations</Link></li>
                        <li><Link to="/solutions/survey-management" className="footer-link">Survey Management</Link></li>
                    </ul>
                </div>

                {/* Who We Serve */}
                <div className="footer-column">
                    <h3>Who We Serve</h3>
                    <ul className="footer-links">
                        <li><Link to="/who-we-serve/importers-exporters" className="footer-link">Importers & Exporters</Link></li>
                        <li><Link to="/who-we-serve/freight-forwarders" className="footer-link">Freight Forwarders</Link></li>
                        <li><Link to="/who-we-serve/enterprise-operations" className="footer-link">Enterprise Operations</Link></li>
                        <li><Link to="/who-we-serve/logistics-transport" className="footer-link">Logistics & Transport</Link></li>
                        <li><Link to="/who-we-serve/survey-companies" className="footer-link">Survey Companies</Link></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/about" className="footer-link">About Us</Link></li>
                        <li><Link to="/resources" className="footer-link">Insights & News</Link></li>
                        <li><Link to="/contact" className="footer-link">Request a Demo</Link></li>
                    </ul>
                </div>

                {/* Connected / Company */}

            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="footer-bottom-links">
                    <span className="footer-bottom-link" style={{ cursor: 'default', textDecoration: 'none' }}>&copy; {currentYear} CargoClave</span>
                    <Link to="/sitemap" className="footer-bottom-link">Sitemap</Link>
                    <Link to="/terms" className="footer-bottom-link">Terms & Conditions</Link>
                    <Link to="/privacy" className="footer-bottom-link">Privacy Notice</Link>
                    <Link to="/cookies" className="footer-bottom-link">Cookie Preferences</Link>
                </div>

                <div className="footer-social">
                    <a href="#" className="social-icon" aria-label="LinkedIn"><Linkedin size={20} /></a>
                    <a href="#" className="social-icon" aria-label="Facebook"><Facebook size={20} /></a>
                    <a href="#" className="social-icon" aria-label="Twitter"><Twitter size={20} /></a>
                    <a href="#" className="social-icon" aria-label="YouTube"><Youtube size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
