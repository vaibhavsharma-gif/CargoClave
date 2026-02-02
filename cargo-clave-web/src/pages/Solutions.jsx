import React from 'react';
import { ArrowRight, Layers, Database, Activity, Wifi, Zap, BarChart2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Solutions = () => {
    const solutions = [
        {
            title: "Trade Management System",
            tagline: "Digitizing Shipments. Delivering Visibility.",
            description: "Centralizes booking, shipment tracking, carrier management, and documentation for freight forwarders and logistics operators.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
            link: "/solutions/trade-management",
            features: [
                "End-to-end shipment tracking",
                "Automated documentation",
                "Carrier rate management",
                "Real-time analytics"
            ]
        },
        {
            title: "Cargo Operations Management",
            tagline: "Manage, track and optimize cargo operations.",
            description: "Digitizes cargo handling and movement tracking with GPS-enabled real-time visibility across your entire fleet and warehouse operations.",
            image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
            link: "/solutions/cargo-operations",
            features: [
                "GPS fleet tracking",
                "Warehouse management",
                "Trip optimization",
                "Delivery confirmation"
            ]
        },
        {
            title: "Survey Management System",
            tagline: "Dedicated system for container inspections.",
            description: "Streamlines inspection scheduling, field reporting, and compliance documentation for survey and quality assurance companies.",
            image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
            link: "/solutions/survey-management",
            features: [
                "Digital inspection forms",
                "Photo documentation",
                "Contract management",
                "Compliance reporting"
            ]
        }
    ];

    const problems = [
        { title: "Disconnected Systems", desc: "Teams operate across siloed tools—emails, spreadsheets, and disconnected software." },
        { title: "Manual Processes", desc: "Critical workflows still rely on physical documentation and manual handoffs." },
        { title: "Limited Visibility", desc: "Without live data access, teams react to problems after they occur rather than preventing them." },
        { title: "Weak Accountability", desc: "Lack of structured activity logs makes it difficult to trace actions or demonstrate compliance." }
    ];

    const pillars = [
        {
            icon: <Layers size={24} />,
            title: "Unified Platform",
            desc: "Shipments, documents, and workflows in one place.",
            bgImage: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=800"
        },
        {
            icon: <Database size={24} />,
            title: "Centralized Data",
            desc: "A single source of truth for all operations.",
            bgImage: "/assets/images/centralized-data.jpg"
        },
        {
            icon: <Activity size={24} />,
            title: "Real-time Tracking",
            desc: "Live operational updates from the field.",
            bgImage: "/assets/images/real-time-tracking.jpg"
        },
        {
            icon: <Wifi size={24} />,
            title: "Seamless Data Flow",
            desc: "Field-to-office connectivity without gaps.",
            bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
        },
        {
            icon: <Zap size={24} />,
            title: "End-to-End Digitization",
            desc: "Eliminating paper from logistics workflows.",
            bgImage: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80&w=800"
        },
        {
            icon: <BarChart2 size={24} />,
            title: "Actionable Analytics",
            desc: "Automation driven by clear insights.",
            bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
        }
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
                paddingTop: '8rem',
                paddingBottom: '4rem',
                color: 'white'
            }}>
                {/* Background Image */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80)',
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

                <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
                    <span className="badge badge-teal mb-md">Future-Ready Logistics</span>
                    <h1 className="section-title" style={{ color: 'white', fontSize: '3.5rem' }}>
                        Solutions for the<br /><span style={{ color: 'var(--color-teal-primary)' }}>Modern Era</span>
                    </h1>
                    <p className="section-subtitle section-subtitle-light mx-auto" style={{ maxWidth: '700px' }}>
                        We don't just move freight; we engineer resilient, sustainable, and intelligent
                        supply chains using the latest methodologies and technology.
                    </p>
                </div>
            </section>

            {/* Problems We Solve */}
            <section className="section-white">
                <div className="container">
                    <div className="text-center mb-xl">
                        <p className="subheading">CHALLENGES WE ADDRESS</p>
                        <h2 className="section-title">Problems We Solve</h2>
                        <p className="section-subtitle mx-auto">
                            Overcoming the barriers to efficient, transparent, and accountable logistics operations.
                        </p>
                    </div>

                    <div className="grid-4">
                        {problems.map((problem, index) => (
                            <div key={index} className="feature-card" style={{ borderTop: '3px solid #ef4444' }}>
                                <h3 className="feature-card-title">{problem.title}</h3>
                                <p className="feature-card-text">{problem.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How CargoClave Solves It */}
            <section className="section-light">
                <div className="container">
                    <div className="text-center mb-xl">
                        <p className="subheading">OUR APPROACH</p>
                        <h2 className="section-title">How CargoClave Solves Core Logistics Problems</h2>
                    </div>

                    <div className="grid-3">
                        {pillars.map((pillar, index) => (
                            <div
                                key={index}
                                className="feature-card feature-card-bg text-center"
                                style={{ backgroundImage: `url(${pillar.bgImage})` }}
                            >
                                <div className="feature-card-icon mx-auto" style={{ marginBottom: '1.5rem' }}>
                                    {pillar.icon}
                                </div>
                                <h3 className="feature-card-title">{pillar.title}</h3>
                                <p className="feature-card-text">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platform Modules - Premium Cards */}
            <section className="section-white">
                <div className="container">
                    <div className="text-center mb-xl">
                        <p className="subheading">PLATFORM MODULES</p>
                        <h2 className="section-title">Three Powerful Systems</h2>
                        <p className="section-subtitle mx-auto">
                            Designed to work together seamlessly or stand alone for your specific needs.
                        </p>
                    </div>

                    <div className="grid-3">
                        {solutions.map((solution, index) => (
                            <Link
                                key={index}
                                to={solution.link}
                                className="premium-card"
                                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
                            >
                                <div style={{ overflow: 'hidden' }}>
                                    <img
                                        src={solution.image}
                                        alt={solution.title}
                                        className="premium-card-image"
                                    />
                                </div>
                                <div className="premium-card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <p className="subheading" style={{ fontSize: '0.7rem', marginBottom: '0.5rem' }}>
                                        {solution.tagline}
                                    </p>
                                    <h3 className="premium-card-title" style={{ fontSize: '1.35rem' }}>
                                        {solution.title}
                                    </h3>
                                    <p className="premium-card-text" style={{ marginBottom: '1.5rem' }}>
                                        {solution.description}
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem', flex: 1 }}>
                                        {solution.features.map((feature, i) => (
                                            <li key={i} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                marginBottom: '0.5rem',
                                                fontSize: '0.9rem',
                                                color: 'var(--color-dark-gray)'
                                            }}>
                                                <CheckCircle2 size={16} color="var(--color-teal-primary)" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <span className="link-arrow" style={{ marginTop: 'auto' }}>
                                        Learn More <ArrowRight size={16} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration Partners */}
            <section className="section-light">
                <div className="container text-center">
                    <p className="subheading">INTEGRATIONS</p>
                    <h2 className="section-title">Works With Your Existing Systems</h2>
                    <p className="section-subtitle mx-auto mb-lg">
                        CargoClave integrates seamlessly with leading ERP, TMS, and WMS platforms
                        through robust APIs and pre-built connectors.
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '3rem',
                        flexWrap: 'wrap',
                        opacity: 0.6
                    }}>
                        {['SAP', 'Oracle', 'Microsoft', 'Salesforce', 'Zoho'].map((partner, i) => (
                            <div key={i} style={{
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                color: 'var(--color-medium-gray)'
                            }}>
                                {partner}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-gradient">
                <div className="container text-center">
                    <p className="subheading subheading-light">TAKE THE NEXT STEP</p>
                    <h2 className="section-title" style={{ color: 'white' }}>
                        Ready to Transform Your Logistics?
                    </h2>
                    <p className="section-subtitle section-subtitle-light mx-auto mb-lg">
                        If improving visibility, control, and execution is a priority, let's explore how we can help.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary btn-pill">
                            Request a Demo <ArrowRight size={18} />
                        </Link>
                        <Link to="/contact" className="btn btn-ghost btn-pill">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
