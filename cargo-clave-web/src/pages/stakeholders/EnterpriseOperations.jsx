import React from 'react';
import { ArrowRight, Building2, Database, Users, Shield, TrendingUp, CheckCircle2, BarChart2, Globe, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnterpriseOperations = () => {
    const challenges = [
        { icon: <Database size={24} />, title: "Data Fragmentation", desc: "Multiple systems across regions create siloed data and inconsistent reporting." },
        { icon: <Users size={24} />, title: "Vendor Management", desc: "Managing dozens of logistics providers without standardized visibility or performance data." },
        { icon: <Shield size={24} />, title: "Compliance Complexity", desc: "Navigating different regulatory requirements across multiple jurisdictions." },
        { icon: <TrendingUp size={24} />, title: "Scaling Challenges", desc: "Manual processes that worked at 100 shipments fail at 10,000." }
    ];

    const solutions = [
        {
            title: "Trade Management",
            desc: "Enterprise-grade platform for managing global shipments with role-based access and multi-entity support.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
            link: "/solutions/trade-management"
        },
        {
            title: "Cargo Operations",
            desc: "Centralized visibility across all regional operations with consolidated analytics.",
            image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
            link: "/solutions/cargo-operations"
        }
    ];

    const benefits = [
        "Single pane of glass across all regions and entities",
        "Standardized processes and SOP enforcement",
        "Role-based access control and audit trails",
        "Advanced analytics and executive dashboards",
        "API integrations with ERP and finance systems",
        "Global compliance monitoring and reporting"
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
                    backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)',
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
                        <p className="subheading" style={{ marginBottom: '0.5rem', color: 'white' }}>FOR ENTERPRISE OPERATIONS</p>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: 'white' }}>
                            Scale Global Operations<br />With Confidence.
                        </h1>
                        <p className="section-subtitle section-subtitle-light" style={{ marginBottom: '2rem', fontSize: '1.25rem', color: 'white' }}>
                            Oversee global logistics with centralized visibility, standardized processes,
                            and enterprise-grade security. Designed for organizations managing complex,
                            multi-region supply chains at scale.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn-primary btn-pill">
                                Request Enterprise Demo <ArrowRight size={18} />
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
                        <h2 className="section-title">Complexity at Scale</h2>
                        <p className="section-subtitle mx-auto">
                            Enterprise logistics operations face unique challenges that require purpose-built solutions.
                        </p>
                    </div>

                    <div className="grid-4">
                        {challenges.map((challenge, index) => (
                            <div key={index} className="feature-card" style={{ borderTop: '3px solid #6366f1' }}>
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
                            <h2 className="section-title">Enterprise-Grade Control</h2>
                            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
                                CargoClave provides the visibility, control, and security that
                                enterprise operations demand.
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
                                <BarChart2 size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                                <p style={{ fontWeight: 600 }}>Executive Dashboard Preview</p>
                                <p style={{ fontSize: '0.9rem' }}>Interactive demo available on request</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security & Compliance */}
            <section className="section-white">
                <div className="container">
                    <div className="text-center mb-xl">
                        <p className="subheading">SECURITY & COMPLIANCE</p>
                        <h2 className="section-title">Built for Enterprise Standards</h2>
                    </div>

                    <div className="grid-3">
                        <div className="feature-card text-center">
                            <div className="feature-card-icon mx-auto" style={{ marginBottom: '1.5rem' }}>
                                <Lock size={24} />
                            </div>
                            <h3 className="feature-card-title">SOC 2 Type II</h3>
                            <p className="feature-card-text">Enterprise security controls audited annually.</p>
                        </div>
                        <div className="feature-card text-center">
                            <div className="feature-card-icon mx-auto" style={{ marginBottom: '1.5rem' }}>
                                <Globe size={24} />
                            </div>
                            <h3 className="feature-card-title">GDPR Compliant</h3>
                            <p className="feature-card-text">Full data protection and privacy compliance.</p>
                        </div>
                        <div className="feature-card text-center">
                            <div className="feature-card-icon mx-auto" style={{ marginBottom: '1.5rem' }}>
                                <Shield size={24} />
                            </div>
                            <h3 className="feature-card-title">SSO & SAML</h3>
                            <p className="feature-card-text">Enterprise identity management integration.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Relevant Solutions */}
            <section className="section-light">
                <div className="container">
                    <div className="text-center mb-xl">
                        <p className="subheading">RELEVANT SOLUTIONS</p>
                        <h2 className="section-title">Enterprise-Ready Modules</h2>
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
                        Enterprise Results
                    </h2>

                    <div className="divider"></div>

                    <div className="grid-4" style={{ marginTop: '3rem' }}>
                        <div className="stat-card">
                            <div className="stat-card-value">40%</div>
                            <div className="stat-card-label">Operational Efficiency Gain</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-card-value">100%</div>
                            <div className="stat-card-label">Global Visibility</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-card-value">60%</div>
                            <div className="stat-card-label">Faster Reporting</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-card-value">99.9%</div>
                            <div className="stat-card-label">Platform Uptime</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-gradient">
                <div className="container text-center">
                    <p className="subheading subheading-light">GET STARTED</p>
                    <h2 className="section-title" style={{ color: 'white' }}>
                        Ready for Enterprise Scale?
                    </h2>
                    <p className="section-subtitle section-subtitle-light mx-auto mb-lg">
                        Join global enterprises who trust CargoClave for their logistics operations.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary btn-pill">
                            Request Enterprise Demo <ArrowRight size={18} />
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

export default EnterpriseOperations;
