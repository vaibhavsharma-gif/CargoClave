import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Ship, Truck, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolutionsTeaser = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef(null);

    // Scroll-based parallax for the gallery
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Cards will slide slightly to create a subtle parallax effect without leaving the viewport
    const galleryX = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const solutions = [
        {
            title: 'Trade Management',
            tagline: 'Global Trade Digitized',
            description: 'Streamline your international trade operations with end-to-end documentation control, compliance automation, and real-time visibility across all shipment legs.',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80',
            icon: <Ship size={32} />,
            link: '/solutions/trade-management',
            cardLabel: 'Trade'
        },
        {
            title: 'Cargo Operations',
            tagline: 'Last-Mile Excellence',
            description: 'Optimize your fleet and logistics lifecycle. From warehouse management to delivery confirmation, get the granular visibility needed to run a lean operation.',
            image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=80',
            icon: <Truck size={32} />,
            link: '/solutions/cargo-operations',
            cardLabel: 'Cargo'
        },
        {
            title: 'Survey Management',
            tagline: 'Precision Inspections',
            description: 'Empower your inspectors with digital tools for quality assurance. Standardize reporting, capture photo evidence, and manage field teams with surgical precision.',
            image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=80',
            icon: <Search size={32} />,
            link: '/solutions/survey-management',
            cardLabel: 'Survey'
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="solutions-dynamic-section"
        >
            {/* Dynamic Backgrounds */}
            <div className="dynamic-bg-container">
                {solutions.map((sol, index) => (
                    <div
                        key={index}
                        className={`dynamic-bg ${index === activeIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${sol.image})` }}
                    />
                ))}
                <div className="dynamic-overlay" />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 5 }}>
                <div className="dynamic-content-wrapper">
                    <div className="dynamic-text-block">
                        <span className="badge badge-teal mb-sm" style={{ backgroundColor: 'rgba(46, 196, 182, 0.25)', color: 'white' }}>
                            {solutions[activeIndex].tagline}
                        </span>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h2 className="section-title" style={{ color: 'white', marginBottom: '1.5rem', fontSize: '3rem' }}>
                                    {solutions[activeIndex].title}
                                </h2>
                                <p className="section-subtitle section-subtitle-light" style={{ marginBottom: '2.5rem', opacity: 0.9 }}>
                                    {solutions[activeIndex].description}
                                </p>
                                <Link to={solutions[activeIndex].link} className="btn btn-primary btn-pill">
                                    Explore Solution <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Bottom Sliding Gallery */}
            <div className="dynamic-gallery-wrapper">
                <motion.div
                    className="dynamic-gallery-scroller"
                    style={{ x: galleryX }}
                >
                    {solutions.map((sol, index) => (
                        <div
                            key={index}
                            className={`dynamic-card ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <div
                                className="dynamic-card-img"
                                style={{ backgroundImage: `url(${sol.image})` }}
                            />
                            <div className="dynamic-card-content">
                                <div className="dynamic-card-icon">
                                    {sol.icon}
                                </div>
                                <h3 className="dynamic-card-title">{sol.title}</h3>
                            </div>
                        </div>
                    ))}

                    {/* Visual spacer to allow for scrolling effect feel */}
                    <div style={{ flex: '0 0 200px' }} />
                </motion.div>
            </div>
        </section>
    );
};

export default SolutionsTeaser;
