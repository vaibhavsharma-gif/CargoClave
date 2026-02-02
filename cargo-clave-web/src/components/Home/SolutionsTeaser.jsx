import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Icons for the cards
const ShipIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 21h20M2.5 16h19M4 11h16c1.1 0 2 .9 2 2v3H2v-3c0-1.1.9-2 2-2zM5.5 11v-4c0-1.66 1.34-3 3-3 .22 0 .43.02.63.07 .7-.98 1.84-1.57 3.12-1.57s2.42.59 3.12 1.57c.2-.05.41-.07.63-.07 1.66 0 3 1.34 3 3v4" />
    </svg>
);

const TruckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
);

const SearchIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const SolutionsTeaser = () => {
    const [selectedCard, setSelectedCard] = useState(0);

    const solutions = [
        {
            title: 'Trade Management',
            description: 'Streamline your international trade operations with end-to-end documentation control, compliance automation, and real-time visibility across all shipment legs.',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80',
            link: '/solutions/trade-management',
            icon: <ShipIcon />
        },
        {
            title: 'Cargo Operations',
            description: 'Optimize your fleet and logistics operations from warehouse management to final delivery confirmation with powerful tracking tools and automated workflows.',
            image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80',
            link: '/solutions/cargo-operations',
            icon: <TruckIcon />
        },
        {
            title: 'Survey Management',
            description: 'Digital tools for quality assurance, comprehensive reporting, and efficient field team management across all inspection and verification workflows.',
            image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80',
            link: '/solutions/survey-management',
            icon: <SearchIcon />
        }
    ];

    return (
        <section className="solutions-viewport-section">
            {/* Dynamic Background Image */}
            <div className="solutions-bg">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCard}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="solutions-bg-image"
                        style={{ backgroundImage: `url(${solutions[selectedCard].image})` }}
                    />
                </AnimatePresence>
                <div className="solutions-bg-overlay" />
            </div>

            {/* Main Content Area */}
            <div className="solutions-content-wrapper">
                {/* Left: Hero Content */}
                <div className="solutions-hero-content">
                    <div className="solutions-badge">GLOBAL TRADE DIGITIZED</div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCard}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="solutions-hero-title">
                                {solutions[selectedCard].title}
                            </h2>
                            <p className="solutions-hero-desc">
                                {solutions[selectedCard].description}
                            </p>
                            <Link to={solutions[selectedCard].link} className="solutions-cta-btn">
                                Explore Solution
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bottom: Tabs/Cards with Entrance Animation */}
                <motion.div
                    className="solutions-cards-row"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {solutions.map((sol, index) => (
                        <div
                            key={index}
                            className={`solution-tab-card ${selectedCard === index ? 'active' : ''}`}
                            onClick={() => setSelectedCard(index)}
                        >
                            <div
                                className="tab-card-bg"
                                style={{ backgroundImage: `url(${sol.image})` }}
                            />
                            <div className="tab-card-overlay" />
                            <div className="tab-card-border" /> {/* Animated border */}

                            <div className="tab-card-icon">
                                {sol.icon}
                            </div>
                            <div className="tab-card-label">
                                {sol.title}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SolutionsTeaser;
