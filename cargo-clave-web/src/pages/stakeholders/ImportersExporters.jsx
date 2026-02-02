import React from 'react';
import { ArrowRight, Eye, FileCheck, MessageSquare, Globe, AlertTriangle, TrendingUp, CheckCircle2, Package, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const ImportersExporters = () => {
    const challenges = [
        { icon: <Eye size={24} />, title: "Black Hole Shipments", desc: "Once cargo leaves the warehouse, you lose sight of it until it arrives (or doesn't)." },
        { icon: <FileCheck size={24} />, title: "Compliance Risks", desc: "Missing documents lead to customs delays, fines, and demurrage charges." },
        { icon: <MessageSquare size={24} />, title: "Communication Gaps", desc: "Endless email threads with forwarders just to get a simple status update." },
        { icon: <DollarSign size={24} />, title: "Cost Unpredictability", desc: "Unexpected charges and invoice discrepancies eat into margins." }
    ];

    const solutions = [
        {
            title: "Trade Management",
            desc: "Track all shipments across forwarders in one unified dashboard with real-time updates.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
            link: "/solutions/trade-management"
        },
        {
            title: "Cargo Operations",
            desc: "Monitor cargo movement from pickup to delivery with GPS-enabled visibility.",
            image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80",
            link: "/solutions/cargo-operations"
        }
    ];

    const benefits = [
        "Real-time visibility across all forwarders and carriers",
        "Proactive alerts for delays, exceptions, and milestones",
        "Centralized document management and compliance tracking",
        "Spend analysis by route, carrier, and shipment type",
        "Direct communication channel with service providers",
        "Historical data for negotiations and planning"
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
                    backgroundImage: 'url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80)',
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
                        <p className="subheading" style={{ marginBottom: '0.5rem', color: 'white' }}>FOR IMPORTERS & EXPORTERS</p>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: 'white' }}>
                            Take Control of<br />Your Cargo.
                        </h1>
                        <p className="section-subtitle section-subtitle-light" style={{ marginBottom: '2rem', fontSize: '1.25rem', color: 'white' }}>
                            Stop wondering where your shipments are. Gain end-to-end visibility, streamline
                            communication with your forwarders, and make data-driven decisions about your supply chain.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn-primary btn-pill">
                                Get Visibility <ArrowRight size={18} />
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
                        <h2 className="section-title">The Cost of Uncertainty</h2>
                        <p className="section-subtitle mx-auto">
                            Lack of visibility creates real financial risks and operational headaches.
                        </p>
                    </div>

                    <div className="grid-4">
                        {challenges.map((challenge, index) => (
                            <div key={index} className="feature-card" style={{ borderTop: '3px solid #ef4444' }}>
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
                        <div>
                            <p className="subheading">THE SOLUTION</p>
                            <h2 className="section-title">A Single View of Your Supply Chain</h2>
                            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
                                CargoClave brings all your shipments, documents, and communication
                                into one verified platform designed for cargo owners.
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
                                <Package size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                                <p style={{ fontWeight: 600 }}>Customer Portal Preview</p>
                                <p style={{ fontSize: '0.9rem' }}>Interactive demo available on request</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Relevant Solutions */}
            <section className="section-white">
                <div className="container">
                    <div className="text-center mb-xl">
                        <p className="subheading">RELEVANT SOLUTIONS</p>
                        <h2 className="section-title">Tools That Empower Your Team</h2>
                        <p className="section-subtitle mx-auto">
                            Connect with your service providers and gain complete visibility over your cargo.
                        </p>
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
                        Results Our Customers See
                    </h2>

                    <div className="divider"></div>

                    <div className="grid-4" style={{ marginTop: '3rem' }}>
                        <div className="stat-card">
                            <div className="stat-card-value">90%</div>
                            <div className="stat-card-label">Fewer Status Calls</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-card-value">50%</div>
                            <div className="stat-card-label">Less Admin Time</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-card-value">100%</div>
                            <div className="stat-card-label">Shipment Visibility</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-card-value">15%</div>
                            <div className="stat-card-label">Cost Savings</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-gradient">
                <div className="container text-center">
                    <p className="subheading subheading-light">GET STARTED</p>
                    <h2 className="section-title" style={{ color: 'white' }}>
                        Stop Chasing Updates
                    </h2>
                    <p className="section-subtitle section-subtitle-light mx-auto mb-lg">
                        Join importers and exporters who have gained complete control over their cargo.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary btn-pill">
                            Contact Us Today <ArrowRight size={18} />
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

export default ImportersExporters;
