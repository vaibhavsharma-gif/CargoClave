import React from 'react';
import { ArrowRight, ClipboardCheck, Camera, FileText, Calendar, CheckCircle2, Smartphone, Users, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SurveyCompanies = () => {
    const challenges = [
        { icon: <ClipboardCheck size={24} />, title: "Paper Inspections", desc: "Physical forms are slow, error-prone, and impossible to search or analyze." },
        { icon: <Camera size={24} />, title: "Photo Chaos", desc: "Images get lost, mislabeled, or lack location and timestamp data." },
        { icon: <Calendar size={24} />, title: "Scheduling Mess", desc: "Coordinating surveyors across locations manually is complex and error-prone." },
        { icon: <FileText size={24} />, title: "Report Delays", desc: "Manual report generation takes days, frustrating clients and delaying decisions." }
    ];

    const solutions = [
        {
            title: "Survey Management",
            desc: "Complete digital inspection workflow from scheduling to report delivery.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
            link: "/solutions/survey-management"
        },
        {
            title: "Cargo Operations",
            desc: "Track surveyor locations and coordinate inspections in real-time.",
            image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
            link: "/solutions/cargo-operations"
        }
    ];

    const benefits = [
        "Digital inspection forms with offline capability",
        "Geotagged, timestamped photo documentation",
        "Automated surveyor scheduling and assignment",
        "One-click professional report generation",
        "Client portal for inspection tracking",
        "Contract management and billing integration"
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
                    backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80)',
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
                        <p className="subheading" style={{ marginBottom: '0.5rem', color: 'white' }}>FOR SURVEY COMPANIES</p>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: 'white' }}>
                            Digital Inspections.<br />Instant Reports.
                        </h1>
                        <p className="section-subtitle section-subtitle-light" style={{ marginBottom: '2rem', fontSize: '1.25rem', color: 'white' }}>
                            Transform paper-based inspection processes into efficient digital workflows.
                            Deliver professional reports faster while improving data quality and
                            client satisfaction.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn-primary btn-pill">
                                Go Digital <ArrowRight size={18} />
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
                        <h2 className="section-title">Survey Operations Pain Points</h2>
                        <p className="section-subtitle mx-auto">
                            Traditional survey workflows are slow, error-prone, and frustrate clients.
                        </p>
                    </div>

                    <div className="grid-4">
                        {challenges.map((challenge, index) => (
                            <div key={index} className="feature-card" style={{ borderTop: '3px solid #8b5cf6' }}>
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
                                <ClipboardCheck size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                                <p style={{ fontWeight: 600 }}>Survey Dashboard Preview</p>
                                <p style={{ fontSize: '0.9rem' }}>Interactive demo available on request</p>
                            </div>
                        </div>
                        <div>
                            <p className="subheading">THE SOLUTION</p>
                            <h2 className="section-title">Complete Survey Digitization</h2>
                            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
                                CargoClave transforms how you schedule, conduct, and report on inspections.
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
                        <h2 className="section-title">Built for Survey Operations</h2>
                    </div>

                    <div className="grid-3">
                        <div className="feature-card text-center">
                            <div className="feature-card-icon mx-auto" style={{ marginBottom: '1.5rem' }}>
                                <Smartphone size={24} />
                            </div>
                            <h3 className="feature-card-title">Mobile App</h3>
                            <p className="feature-card-text">Purpose-built field app with offline capability for any environment.</p>
                        </div>
                        <div className="feature-card text-center">
                            <div className="feature-card-icon mx-auto" style={{ marginBottom: '1.5rem' }}>
                                <Users size={24} />
                            </div>
                            <h3 className="feature-card-title">Surveyor Management</h3>
                            <p className="feature-card-text">Schedule assignments, track availability, and monitor performance.</p>
                        </div>
                        <div className="feature-card text-center">
                            <div className="feature-card-icon mx-auto" style={{ marginBottom: '1.5rem' }}>
                                <BarChart2 size={24} />
                            </div>
                            <h3 className="feature-card-title">Analytics</h3>
                            <p className="feature-card-text">Track inspection volumes, turnaround times, and quality metrics.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Relevant Solutions */}
            <section className="section-light">
                <div className="container">
                    <div className="text-center mb-xl">
                        <p className="subheading">RELEVANT SOLUTIONS</p>
                        <h2 className="section-title">Modules for Survey Companies</h2>
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
                        Survey Company Results
                    </h2>

                    <div className="divider"></div>

                    <div className="grid-4" style={{ marginTop: '3rem' }}>
                        <div className="stat-card">
                            <div className="stat-card-value">70%</div>
                            <div className="stat-card-label">Faster Reports</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-card-value">50%</div>
                            <div className="stat-card-label">Less Admin Time</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-card-value">100%</div>
                            <div className="stat-card-label">Photo Traceability</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-card-value">0</div>
                            <div className="stat-card-label">Lost Data</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-gradient">
                <div className="container text-center">
                    <p className="subheading subheading-light">GET STARTED</p>
                    <h2 className="section-title" style={{ color: 'white' }}>
                        Ready to Digitize Your Inspections?
                    </h2>
                    <p className="section-subtitle section-subtitle-light mx-auto mb-lg">
                        Join survey companies who have eliminated paper and transformed their operations.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary btn-pill">
                            Get Started <ArrowRight size={18} />
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

export default SurveyCompanies;
