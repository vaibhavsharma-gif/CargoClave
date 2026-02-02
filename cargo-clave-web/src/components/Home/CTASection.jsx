import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
    return (
        <section className="section-gradient">
            <div className="container text-center">
                <p className="subheading subheading-light">GET STARTED TODAY</p>
                <h2 className="section-title" style={{ color: 'white', marginBottom: '1.5rem' }}>
                    Ready to Transform Your<br />Logistics Operations?
                </h2>
                <p className="section-subtitle section-subtitle-light mx-auto" style={{ marginBottom: '2.5rem' }}>
                    Join hundreds of businesses already using CargoClave to streamline their
                    supply chain, reduce costs, and gain unprecedented visibility.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/contact" className="btn btn-primary btn-pill">
                        Schedule a Demo <ArrowRight size={18} />
                    </Link>
                    <Link to="/contact" className="btn btn-ghost btn-pill">
                        Contact Sales
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
