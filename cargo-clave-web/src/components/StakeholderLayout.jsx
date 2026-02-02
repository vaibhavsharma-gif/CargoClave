import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { CheckCircle } from 'lucide-react';

const StakeholderLayout = ({
    title,
    subtitle,
    painPoints,
    howWeHelp,
    image
}) => {
    return (
        <div className="stakeholder-layout">
            {/* Hero */}
            <section className="stakeholder-hero">
                <div className="container hero-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hero-text"
                    >
                        <h1 className="hero-title">{title}</h1>
                        <p className="hero-subtitle">{subtitle}</p>
                        <Button variant="primary" to="/contact" className="cta-button">
                            Get Started
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hero-image-wrap"
                    >
                        <img src={image || "https://images.unsplash.com/photo-1566576912906-600aceeb7aef?q=80&w=1000&auto=format&fit=crop"} alt={title} className="hero-image" />
                    </motion.div>
                </div>
            </section>

            {/* Pain Points */}
            <section className="pain-points-section">
                <div className="container">
                    <h2 className="section-title text-center">Common <span className="highlight-secondary">Challenges</span></h2>
                    <div className="pain-points-grid">
                        {painPoints.map((point, idx) => (
                            <div key={idx} className="pain-point-card">
                                <h3 className="card-title">{point.title}</h3>
                                <p className="card-desc">{point.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Help */}
            <section className="solutions-section">
                <div className="container">
                    <h2 className="section-title text-center">How CargoClave <span className="highlight-primary">Helps</span></h2>
                    <div className="solutions-list">
                        {howWeHelp.map((item, idx) => (
                            <div key={idx} className={`solution-item ${idx % 2 !== 0 ? 'reverse' : ''}`}>
                                <div className="solution-content">
                                    <h3 className="solution-item-title">{item.title}</h3>
                                    <p className="solution-item-desc">{item.desc}</p>
                                    <ul className="benefit-list">
                                        {item.points.map((pt, pIdx) => (
                                            <li key={pIdx} className="benefit-item">
                                                <CheckCircle size={18} color="var(--color-teal-primary)" /> {pt}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="solution-illustration">
                                    Outcome / Feature Illustration
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container text-center">
                    <h2 className="cta-title">Ready to Optimize Your Operations?</h2>
                    <Button variant="primary" to="/contact" className="cta-button-large">
                        Schedule Consultation
                    </Button>
                </div>
            </section>

        </div>
    );
};

export default StakeholderLayout;
