import React from 'react';
import { ArrowRight, Target, Heart, Shield, Users, Globe, Award, Lock, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    const values = [
        { icon: <Target size={24} />, title: "Customer-Centric", desc: "We build solutions that solve real problems for real logistics professionals." },
        { icon: <Shield size={24} />, title: "Trust & Security", desc: "We prioritize data protection and operational reliability above all else." },
        { icon: <Award size={24} />, title: "Continuous Innovation", desc: "We are committed to staying ahead of the curve with future-ready technology." },
        { icon: <Heart size={24} />, title: "Partnership", desc: "We succeed when our customers succeed. Your growth is our growth." },
        { icon: <Globe size={24} />, title: "Global Perspective", desc: "We understand the nuances of international trade and local markets." },
        { icon: <Zap size={24} />, title: "Agility", desc: "We move fast, adapt quickly, and continuously improve our platform." }
    ];

    const approaches = [
        { title: "Scalable Architecture", desc: "Transforms logistics workflows into continuously optimized execution cycles that grow with your business." },
        { title: "Enterprise Security", desc: "Role-based access control, end-to-end encryption, and enterprise-grade security measures." },
        { title: "Seamless Integration", desc: "Connects with existing systems through robust APIs and pre-built connectors." },
        { title: "Reliable Infrastructure", desc: "99.9% uptime with consistent performance you can count on for mission-critical operations." }
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
                    backgroundImage: 'url(https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80)',
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
                    <div style={{ maxWidth: '750px' }}>
                        <p className="subheading" style={{ marginBottom: '0.5rem', color: 'white' }}>ABOUT CARGOCLAVE</p>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: 'white' }}>
                            The Future of<br />Connected Logistics.
                        </h1>
                        <p className="section-subtitle section-subtitle-light" style={{ marginBottom: '2rem', fontSize: '1.25rem', color: 'white' }}>
                            We are building the unified control center for global trade —
                            connecting cargo owners, logistics providers, and transport operations
                            on a single, intelligent platform.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn-primary btn-pill">
                                Get in Touch <ArrowRight size={18} />
                            </Link>
                            <Link to="/solutions" className="btn btn-ghost btn-pill">
                                Explore Solutions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section-white">
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <div>
                            <p className="subheading">OUR MISSION</p>
                            <h2 className="section-title">Connecting the World of Trade</h2>
                            <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
                                CargoClave was built to solve a fundamental problem: the logistics industry is fragmented.
                                Cargo owners, forwarders, transporters, and surveyors all work in silos with disconnected systems.
                            </p>
                            <p style={{ color: 'var(--color-dark-gray)', lineHeight: 1.7, marginBottom: '2rem' }}>
                                Our mission is to empower businesses to manage cargo, freight, documents, and operations
                                seamlessly — all from one unified platform. We believe in a future where data flows
                                freely between stakeholders, where visibility is real-time, and where manual processes
                                are a thing of the past.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    "Unified platform for all logistics stakeholders",
                                    "Real-time visibility across the supply chain",
                                    "Digital workflows that eliminate paper",
                                    "Data-driven decisions and insights"
                                ].map((item, i) => (
                                    <li key={i} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        marginBottom: '0.75rem',
                                        color: 'var(--color-dark-gray)'
                                    }}>
                                        <CheckCircle2 size={20} color="var(--color-teal-primary)" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <div className="grid-2" style={{ gap: '1rem' }}>
                                <div className="stat-card" style={{
                                    background: 'linear-gradient(135deg, var(--color-teal-primary), var(--color-dark-teal))',
                                    color: 'white',
                                    padding: '2rem',
                                    borderRadius: 'var(--radius-lg)',
                                    textAlign: 'center'
                                }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>3+</div>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Platform Modules</div>
                                </div>
                                <div className="stat-card" style={{
                                    background: 'white',
                                    border: '1px solid rgba(0,0,0,0.1)',
                                    padding: '2rem',
                                    borderRadius: 'var(--radius-lg)',
                                    textAlign: 'center'
                                }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-deep-navy)' }}>2025</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-medium-gray)' }}>Modern Tech</div>
                                </div>
                                <div className="stat-card" style={{
                                    background: 'white',
                                    border: '1px solid rgba(0,0,0,0.1)',
                                    padding: '2rem',
                                    borderRadius: 'var(--radius-lg)',
                                    textAlign: 'center'
                                }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-deep-navy)' }}>100%</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-medium-gray)' }}>Compliance Ready</div>
                                </div>
                                <div className="stat-card" style={{
                                    background: 'linear-gradient(135deg, var(--color-deep-navy), var(--color-navy))',
                                    color: 'white',
                                    padding: '2rem',
                                    borderRadius: 'var(--radius-lg)',
                                    textAlign: 'center'
                                }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>24/7</div>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Global Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-light">
                <div className="container">
                    <div className="text-center mb-xl">
                        <p className="subheading">OUR VALUES</p>
                        <h2 className="section-title">The Principles That Drive Us</h2>
                        <p className="section-subtitle mx-auto">
                            Everything we build is guided by these core values.
                        </p>
                    </div>

                    <div className="grid-3">
                        {values.map((value, index) => (
                            <div key={index} className="feature-card text-center">
                                <div className="feature-card-icon mx-auto" style={{ marginBottom: '1.5rem' }}>
                                    {value.icon}
                                </div>
                                <h3 className="feature-card-title">{value.title}</h3>
                                <p className="feature-card-text">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="section-white">
                <div className="container">
                    <div className="text-center mb-xl">
                        <p className="subheading">OUR APPROACH</p>
                        <h2 className="section-title">Built for Today — Ready for What's Next</h2>
                        <p className="section-subtitle mx-auto">
                            A platform designed for modern logistics challenges and future innovation.
                        </p>
                    </div>

                    <div className="grid-4">
                        {approaches.map((approach, index) => (
                            <div key={index} style={{
                                padding: '2rem',
                                background: 'white',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                boxShadow: 'var(--shadow-sm)',
                                transition: 'all 0.3s ease',
                                cursor: 'default'
                            }}>
                                <span style={{
                                    display: 'inline-block',
                                    padding: '0.25rem 0.75rem',
                                    background: 'var(--color-teal-light)',
                                    color: 'var(--color-teal-primary)',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    marginBottom: '1rem'
                                }}>0{index + 1}</span>
                                <h3 style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    marginBottom: '0.75rem',
                                    color: 'var(--color-deep-navy)'
                                }}>{approach.title}</h3>
                                <p style={{
                                    color: 'var(--color-medium-gray)',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.6
                                }}>{approach.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security & Compliance */}
            <section className="section-purple">
                <div className="container text-center">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '1.5rem'
                    }}>
                        <div style={{
                            background: 'rgba(255,255,255,0.1)',
                            padding: '1rem',
                            borderRadius: 'var(--radius-full)'
                        }}>
                            <Lock size={32} color="white" />
                        </div>
                    </div>
                    <p className="subheading subheading-light">SECURITY & COMPLIANCE</p>
                    <h2 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>
                        Enterprise-Grade Security
                    </h2>
                    <p className="section-subtitle section-subtitle-light mx-auto mb-lg">
                        Your data is your most valuable asset. We protect it with industry-leading
                        security measures, including end-to-end encryption, regular security audits,
                        and strict compliance standards.
                    </p>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '1rem',
                        marginTop: '2rem'
                    }}>
                        {['ISO 27001 Ready', 'GDPR Compliant', 'SOC2 Type II', 'SSO / SAML'].map((badge, i) => (
                            <span key={i} style={{
                                background: 'rgba(255,255,255,0.15)',
                                color: 'white',
                                padding: '0.75rem 1.5rem',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                border: '1px solid rgba(255,255,255,0.2)'
                            }}>{badge}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-gradient">
                <div className="container text-center">
                    <p className="subheading subheading-light">JOIN US</p>
                    <h2 className="section-title" style={{ color: 'white' }}>
                        Ready to Transform Your Logistics?
                    </h2>
                    <p className="section-subtitle section-subtitle-light mx-auto mb-lg">
                        Let's discuss how CargoClave can help you achieve your logistics goals.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary btn-pill">
                            Contact Us <ArrowRight size={18} />
                        </Link>
                        <Link to="/solutions" className="btn btn-ghost btn-pill">
                            Explore Solutions
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
