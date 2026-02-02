import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ArrowLeft } from 'lucide-react';

const SolutionsLayout = ({
    title,
    subtitle,
    description,
    features,
    benefits,
    icon: Icon
}) => {
    return (
        <div className="solutions-layout">
            {/* Hero */}
            <section className="solution-hero">
                <div className="container hero-container">
                    <Button variant="secondary" to="/solutions" className="back-button">
                        <ArrowLeft size={16} /> Back to Solutions
                    </Button>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hero-content"
                    >
                        <div className="hero-header">
                            {Icon && <div className="hero-icon"><Icon size={48} /></div>}
                            <h1 className="hero-title">{title}</h1>
                        </div>
                        <p className="hero-subtitle">
                            {subtitle}
                        </p>
                        <Button variant="primary" to="/contact" className="hero-cta">
                            Request a Demo
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Overview */}
            <section className="overview-section">
                <div className="container overview-grid">
                    <div className="overview-text">
                        <h2 className="section-heading">Overview</h2>
                        <div className="prose">
                            {description}
                        </div>
                    </div>
                    <div className="overview-image">
                        <div className="placeholder-image">
                            Dashboard / Interface Preview
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="features-section">
                <div className="container">
                    <h2 className="section-heading text-center">Key Features</h2>
                    <div className="features-grid">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                className="feature-card"
                                whileHover={{ y: -5 }}
                            >
                                <div className="feature-icon">{feature.icon}</div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-desc">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container text-center">
                    <h2 className="cta-title">See {title} in Action</h2>
                    <Button variant="primary" to="/contact" className="cta-button-large">
                        Schedule a Demo
                    </Button>
                </div>
            </section>

        </div>
    );
};

export default SolutionsLayout;
