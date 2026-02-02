import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../Button'; // Corrected import path

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const [hoveredLink, setHoveredLink] = useState(null);
    const location = useLocation();

    // Handle Window Resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
            if (window.innerWidth >= 1000) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handle Scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        {
            name: 'Solutions',
            path: '/solutions',
            submenu: [
                { name: 'Trade Management', path: '/solutions/trade-management' },
                { name: 'Cargo Operations', path: '/solutions/cargo-operations' },
                { name: 'Survey Management', path: '/solutions/survey-management' },
            ]
        },
        {
            name: 'Who We Serve',
            path: '#',
            submenu: [
                { name: 'Enterprise Operations', path: '/who-we-serve/enterprise-operations' },
                { name: 'Freight Forwarders', path: '/who-we-serve/freight-forwarders' },
                { name: 'Exporters & Importers', path: '/who-we-serve/importers-exporters' },
                { name: 'Logistics Operators', path: '/who-we-serve/logistics-transport' },
                { name: 'Survey Companies', path: '/who-we-serve/survey-companies' },
            ]
        },
        { name: 'Resources', path: '/resources' },
        { name: 'About', path: '/about' },
    ];

    // Inline Styles
    const styles = {
        nav: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            padding: scrolled ? '0.75rem 0' : '1.5rem 0',
            transition: 'all 0.3s ease',
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
        },
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 2rem',
        },
        logo: {
            textDecoration: 'none',
            fontSize: '1.5rem',
            fontWeight: '800',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            zIndex: 1001,
            color: scrolled ? '#003366' : '#ffffff', // Default to white unless specific override needed
        },
        // We need a specific check for non-home pages where navbar might need to be dark initially?
        // Assuming transparent header works everywhere or we need a prop.
        // For now, let's assume transparent works. If text is invisible on white bg, we fix.
        // Wait, other pages have white background? If so, transparent navbar text white is invisible.
        // We should detect if we are on home page? No, let's stick to scroll logic, but maybe default color is Navy if not scrolled?
        // Original design: Transparent header often used on Hero sections.

        navMenu: {
            display: isMobile ? 'none' : 'flex',
            alignItems: 'center',
            gap: '2.5rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            height: '100%',
        },
        navLink: {
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '0.95rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            transition: 'color 0.2s ease',
            color: scrolled ? '#333333' : 'rgba(255, 255, 255, 0.95)',
            position: 'relative',
            cursor: 'pointer',
            padding: '1rem 0',
        },
        dropdown: {
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'white',
            minWidth: '240px',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            padding: '0.75rem 0',
            border: '1px solid rgba(0,0,0,0.05)',
            display: 'block',
            zIndex: 1100,
        },
        dropdownItem: {
            display: 'block',
            padding: '0.75rem 1.5rem',
            color: '#4b5563',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: '500',
            transition: 'all 0.2s ease',
        },
        mobileToggle: {
            display: isMobile ? 'block' : 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: scrolled ? '#003366' : 'white',
        }
    };

    return (
        <nav style={styles.nav}>
            <div style={styles.container}>
                <Link to="/" style={styles.logo}>
                    <span style={{ color: scrolled ? '#003366' : 'white' }}>
                        Cargo<span style={{ color: '#2ec4b6' }}>Clave</span>
                    </span>
                </Link>

                <div style={styles.navMenu}>
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            style={{ position: 'relative' }}
                            onMouseEnter={() => setHoveredLink(link.name)}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            <Link
                                to={link.path}
                                style={{
                                    ...styles.navLink,
                                    // Adjust color based on scroll state
                                    color: scrolled ? '#333333' : 'rgba(255, 255, 255, 0.95)'
                                }}
                                onClick={(e) => link.path === '#' && e.preventDefault()}
                            >
                                {link.name}
                                {link.submenu && <ChevronDown size={14} />}
                            </Link>

                            <AnimatePresence>
                                {link.submenu && hoveredLink === link.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        style={styles.dropdown}
                                    >
                                        {link.submenu.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                to={sub.path}
                                                style={styles.dropdownItem}
                                                className="hover:bg-gray-50 hover:text-teal-600"
                                                onMouseEnter={(e) => {
                                                    e.target.style.backgroundColor = '#f8fafc';
                                                    e.target.style.color = '#003366';
                                                    e.target.style.paddingLeft = '1.75rem';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.backgroundColor = 'transparent';
                                                    e.target.style.color = '#4b5563';
                                                    e.target.style.paddingLeft = '1.5rem';
                                                }}
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                    <div style={{ marginLeft: '1rem' }}>
                        <Button variant="primary" to="/contact" className="navbar-btn" style={{ whiteSpace: 'nowrap' }}>
                            Request Demo
                        </Button>
                    </div>
                </div>

                <button
                    style={{
                        ...styles.mobileToggle,
                        color: scrolled ? '#003366' : 'white'
                    }}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            position: 'fixed',
                            top: '100%',
                            left: 0,
                            width: '100%',
                            background: 'white',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                            overflow: 'hidden',
                            zIndex: 999
                        }}
                    >
                        <div style={{ padding: '1rem 0 2rem' }}>
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <Link
                                        to={link.path}
                                        style={{
                                            display: 'block',
                                            padding: '1rem 2rem',
                                            borderBottom: '1px solid #f3f4f6',
                                            color: '#003366',
                                            textDecoration: 'none',
                                            fontWeight: '600',
                                            fontSize: '1.1rem'
                                        }}
                                        onClick={(e) => {
                                            if (link.path === '#') e.preventDefault();
                                            setIsOpen(false);
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.submenu && (
                                        <div style={{ background: '#f9fafb', padding: '0.5rem 0' }}>
                                            {link.submenu.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    to={sub.path}
                                                    style={{
                                                        display: 'block',
                                                        padding: '0.75rem 3rem',
                                                        color: '#4b5563',
                                                        textDecoration: 'none',
                                                        fontSize: '1rem'
                                                    }}
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div style={{ padding: '1.5rem 2rem 0' }}>
                                <Button variant="primary" to="/contact" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                                    Request Demo
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
