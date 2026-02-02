import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-20 pb-10">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                {/* Brand */}
                <div className="col-span-1 md:col-span-1">
                    <Link to="/" className="text-3xl font-bold font-heading mb-6 block">
                        Cargo<span className="text-secondary">Clave</span>
                    </Link>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        The Future of Connected Logistics. A unified platform managing cargo, freight, documents, and operations seamlessly.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors">
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>

                {/* Solutions */}
                <div>
                    <h4 className="text-lg font-semibold mb-6">Solutions</h4>
                    <ul className="space-y-4 text-gray-300">
                        <li><Link to="/solutions/trade-management" className="hover:text-secondary transition-colors">Trade Management</Link></li>
                        <li><Link to="/solutions/cargo-operations" className="hover:text-secondary transition-colors">Cargo Operations</Link></li>
                        <li><Link to="/solutions/survey-management" className="hover:text-secondary transition-colors">Survey Management</Link></li>
                    </ul>
                </div>

                {/* Stakeholders & Resources */}
                <div>
                    <h4 className="text-lg font-semibold mb-6">Explore</h4>
                    <ul className="space-y-4 text-gray-300">
                        <li><Link to="/stakeholders/importers-exporters" className="hover:text-secondary transition-colors">Importers & Exporters</Link></li>
                        <li><Link to="/stakeholders/3pl" className="hover:text-secondary transition-colors">3PL Providers</Link></li>
                        <li><Link to="/resources" className="hover:text-secondary transition-colors">Blog & Insights</Link></li>
                        <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start gap-3">
                            <MapPin size={20} className="text-secondary mt-1" />
                            <span>123 Logistics Way,<br />Global Port, GP 54321</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={20} className="text-secondary" />
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={20} className="text-secondary" />
                            <span>reachus@cargoclave.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} CargoClave. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-white">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
