import React from 'react';
import { ArrowRight, Ship, FileText, Users, DollarSign, Clock, CheckCircle2, Globe, BarChart2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const FreightForwarders = () => {
    const challenges = [
        { icon: <FileText size={24} />, title: "Document Overload", desc: "Managing BLs, invoices, and customs documents across hundreds of shipments manually." },
        { icon: <Users size={24} />, title: "Client Communication", desc: "Fielding constant status calls and emails from customers wanting updates." },
        { icon: <DollarSign size={24} />, title: "Margin Pressure", desc: "Tight margins require operational efficiency that manual processes can't deliver." },
        { icon: <Clock size={24} />, title: "Time Constraints", desc: "Not enough hours to handle documentation, tracking, and client service effectively." }
    ];

    const solutions = [
        {
            title: "Trade Management",
            desc: "Centralize bookings, tracking, documentation, and client communication in one platform.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
            link: "/solutions/trade-management"
        },
        {
            title: "Cargo Operations",
            desc: "Real-time tracking and operational visibility for seamless coordination.",
            image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80",
            link: "/solutions/cargo-operations"
        }
    ];

    const benefits = [
        "Automated document generation and management",
        "Client portals with self-service tracking",
        "Carrier rate comparison and management",
        "Automated milestone notifications",
        "Financial tracking and invoice management",
        "Performance analytics and reporting"
    ];

    return (
        <div>
            {/* Hero Section */}
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                paddingTop: '6rem',
                paddingBottom: '2rem',
                color: 'white'
            }}>
                {/* Background Image */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1920&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0
                }}></div>

                {/* Gradient Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to right, rgba(1, 19, 39, 0.95) 0%, rgba(1, 19, 39, 0.8) 50%, rgba(1, 19, 39, 0.4) 100%)',
                    zIndex: 1
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ maxWidth: '700px' }}>
                        <p className="subheading" style={{ marginBottom: '0.5rem', color: 'white' }}>FOR FREIGHT FORWARDERS</p>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: 'white' }}>
                            Digitize. Streamline.<br />Grow.
                        </h1>
                        <p className="section-subtitle section-subtitle-light" style={{ marginBottom: '2rem', fontSize: '1.25rem', color: 'white' }}>
                            Transform your forwarding operations with digital documentation, automated
                            tracking, and client portals that keep customers informed without
                            constant phone calls.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn-primary btn-pill">
                                Start Digitizing <ArrowRight size={18} />
                            </Link>
                            <Link to="/solutions" className="btn btn-ghost btn-pill">
                                Explore Solutions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenges Section */}
            <section className="section-white">
                <div className="container">
                    <div className="text-center mb-xl">
                        <p className="subheading">YOUR CHALLENGES</p>
                        <h2 className="section-title">The Forwarding Struggle</h2>
                        <p className="section-subtitle mx-auto">
                            Traditional forwarding operations are drowning in manual work and client demands.
                        </p>
                    </div>

                    <div className="grid-4">
                        {challenges.map((challenge, index) => (
                            <div key={index} className="feature-card" style={{ borderTop: '3px solid #0891b2' }}>
                                <div className="icon-wrapper icon-wrapper-teal mb-md">
                                    {challenge.icon}
                                </div>
                                <h3 className="feature-card-title">{challenge.title}</h3>
                                <p className="feature-card-text">{challenge.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Help */}
            <section className="section-light">
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <div style={{
                            background: 'linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 100%)',
                            borderRadius: 'var(--radius-lg)',
                            height: '400px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid rgba(0,0,0,0.05)'
                        }}>
                            <div style={{ textAlign: 'center', color: 'var(--color-medium-gray)' }}>
                                <Ship size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                                <p style={{ fontWeight: 600 }}>Forwarder Dashboard Preview</p>
                                <p style={{ fontSize: '0.9rem' }}>Interactive demo available on request</p>
                            </div>
                        </div>
                        <div>
                            <p className="subheading">THE SOLUTION</p>
                            <h2 className="section-title">Your Digital Operations Center</h2>
                            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
                                CargoClave transforms how you manage shipments, documents, and
                                client relationships.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {benefits.map((benefit, i) => (
                                    <li key={i} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        marginBottom: '0.75rem',
                                        color: 'var(--color-dark-gray)'
                                    }}>
                                        <CheckCircle2 size={20} color="var(--color-teal-primary)" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="section-white">
                <div className="container">
                    <div className="text-center mb-xl">
                        <p className="subheading">KEY CAPABILITIES</p>
                        <h2 className="section-title">Built for Forwarders</h2>
                    </div>

                    <div className="grid-3">
                        <div className="feature-card text-center">
                            <div className="feature-card-icon mx-auto" style={{ marginBottom: '1.5rem' }}>
                                <Globe size={24} />
                            </div>
                            <h3 className="feature-card-title">Client Portals</h3>
                            <p className="feature-card-text">Give clients self-service access to track shipments and download documents.</p>
                        </div>
                        <div className="feature-card text-center">
                            <div className="feature-card-icon mx-auto" style={{ marginBottom: '1.5rem' }}>
                                <Zap size={24} />
                            </div>
                            <h3 className="feature-card-title">Auto Notifications</h3>
                            <p className="feature-card-text">Automatic updates at every milestone keep clients informed without manual effort.</p>
                        </div>
                        <div className="feature-card text-center">
                            <div className="feature-card-icon mx-auto" style={{ marginBottom: '1.5rem' }}>
                                <BarChart2 size={24} />
                            </div>
                            <h3 className="feature-card-title">Performance Insights</h3>
                            <p className="feature-card-text">Track carrier performance, route efficiency, and profitability in real-time.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Relevant Solutions */}
            <section className="section-light">
                <div className="container">
                    <div className="text-center mb-xl">
                        <p className="subheading">RELEVANT SOLUTIONS</p>
                        <h2 className="section-title">Modules for Forwarders</h2>
                    </div>

                    <div className="grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {solutions.map((solution, index) => (
                            <Link
                                key={index}
                                to={solution.link}
                                className="premium-card"
                                style={{ textDecoration: 'none' }}
                            >
                                <div style={{ overflow: 'hidden' }}>
                                    <img
                                        src={solution.image}
                                        alt={solution.title}
                                        className="premium-card-image"
                                    />
                                </div>
                                <div className="premium-card-body">
                                    <h3 className="premium-card-title">{solution.title}</h3>
                                    <p className="premium-card-text">{solution.desc}</p>
                                    <span className="link-arrow">
                                        Learn More <ArrowRight size={16} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-purple">
                <div className="container text-center">
                    <p className="subheading subheading-light">THE IMPACT</p>
                    <h2 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>
                        Forwarder Results
                    </h2>

                    <div className="divider"></div>

                    <div className="grid-4" style={{ marginTop: '3rem' }}>
                        <div className="stat-card">
                            <div className="stat-card-value">70%</div>
                            <div className="stat-card-label">Less Manual Work</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-card-value">80%</div>
                            <div className="stat-card-label">Fewer Status Calls</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-card-value">35%</div>
                            <div className="stat-card-label">Faster Processing</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-card-value">25%</div>
                            <div className="stat-card-label">Margin Improvement</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-gradient">
                <div className="container text-center">
                    <p className="subheading subheading-light">GET STARTED</p>
                    <h2 className="section-title" style={{ color: 'white' }}>
                        Ready to Go Digital?
                    </h2>
                    <p className="section-subtitle section-subtitle-light mx-auto mb-lg">
                        Join forwarding companies who have transformed their operations.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary btn-pill">
                            Start Your Demo <ArrowRight size={18} />
                        </Link>
                        <Link to="/resources" className="btn btn-ghost btn-pill">
                            View Resources
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FreightForwarders;
