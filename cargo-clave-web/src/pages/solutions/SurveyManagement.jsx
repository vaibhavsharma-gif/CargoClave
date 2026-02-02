import React, { useState } from 'react';
import { ArrowRight, ClipboardCheck, Camera, FileText, Calendar, Users, BarChart2, CheckCircle2, ChevronDown, Shield, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const SurveyManagement = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const challenges = [
        { icon: <ClipboardCheck size={24} />, title: "Paper-Based Inspections", desc: "Physical forms are slow to complete, prone to errors, and difficult to archive or search." },
        { icon: <Camera size={24} />, title: "Photo Documentation Gaps", desc: "Images get lost, mixed up, or lack proper timestamps and location data." },
        { icon: <FileText size={24} />, title: "Report Delays", desc: "Manual report generation takes days, delaying decisions and contract fulfillment." },
        { icon: <Users size={24} />, title: "Surveyor Coordination", desc: "Scheduling and managing field surveyors across multiple locations is complex and error-prone." }
    ];

    const features = [
        { icon: <ClipboardCheck size={24} />, title: "Digital Inspection Forms", desc: "Customizable digital checklists that guide surveyors through standardized inspection procedures." },
        { icon: <Camera size={24} />, title: "Photo & Media Capture", desc: "Geotagged, timestamped photos integrated directly into inspection reports with annotations." },
        { icon: <Calendar size={24} />, title: "Scheduling & Assignment", desc: "Assign surveyors to jobs, manage availability, and track completion status in real-time." },
        { icon: <FileText size={24} />, title: "Automated Reporting", desc: "Generate professional PDF reports instantly with custom branding and formatting." },
        { icon: <Settings size={24} />, title: "Contract Management", desc: "Track contract terms, SLAs, and billing for survey services with complete audit trails." },
        { icon: <BarChart2 size={24} />, title: "Analytics Dashboard", desc: "Monitor surveyor performance, inspection volumes, and quality metrics across your organization." }
    ];

    const processSteps = [
        { number: "01", title: "Schedule the Inspection", desc: "Create inspection jobs, assign qualified surveyors, and set deadlines. Surveyors receive instant notifications on their mobile devices." },
        { number: "02", title: "Conduct Field Inspection", desc: "Surveyors use mobile devices to complete digital checklists, capture photos, and record observations with GPS coordinates." },
        { number: "03", title: "Sync & Review", desc: "Data syncs automatically when connected. Quality assurance teams can review and approve findings before finalization." },
        { number: "04", title: "Generate Reports", desc: "One-click report generation creates professional documents with all photos, data, and findings formatted to your specifications." },
        { number: "05", title: "Archive & Analyze", desc: "All inspections are searchable and archived. Use analytics to identify trends, track quality, and improve processes." }
    ];

    const faqs = [
        { q: "Does it work offline?", a: "Yes, surveyors can complete inspections without internet connectivity. All data syncs automatically when connection is restored." },
        { q: "Can we customize inspection forms?", a: "Absolutely. Our form builder allows you to create custom checklists, add conditional logic, and define required fields specific to your inspection types." },
        { q: "How are photos organized?", a: "Photos are automatically linked to specific checklist items, geotagged with location data, and timestamped. They're embedded directly in generated reports." },
        { q: "Can clients access inspection results?", a: "Yes, you can provide clients with secure portal access to view inspection status and download completed reports." }
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
                        <p className="subheading" style={{ marginBottom: '0.5rem', color: 'white' }}>SURVEY MANAGEMENT SYSTEM</p>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: 'white' }}>
                            Digital Inspections.<br />Instant Reports.
                        </h1>
                        <p className="section-subtitle section-subtitle-light" style={{ marginBottom: '2rem', fontSize: '1.25rem', color: 'white' }}>
                            Streamline inspection scheduling, field reporting, and compliance documentation
                            for survey and quality assurance companies. Transform paper-based processes
                            into efficient digital workflows.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn-primary btn-pill">
                                Request Demo <ArrowRight size={18} />
                            </Link>
                            <Link to="/contact" className="btn btn-ghost btn-pill">
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenges Section */}
            <section className="section-white">
                <div className="container">
                    <div className="text-center mb-xl">
                        <p className="subheading">THE PROBLEM</p>
                        <h2 className="section-title">Challenges in Survey Operations</h2>
                        <p className="section-subtitle mx-auto">
                            Traditional survey and inspection processes are slow, error-prone, and difficult to scale.
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

            {/* Features Section */}
            <section className="section-light">
                <div className="container">
                    <div className="text-center mb-xl">
                        <p className="subheading">KEY CAPABILITIES</p>
                        <h2 className="section-title">Complete Survey Workflow</h2>
                        <p className="section-subtitle mx-auto">
                            Everything you need to manage inspections from assignment to final report delivery.
                        </p>
                    </div>

                    <div className="grid-3">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-card-icon">
                                    {feature.icon}
                                </div>
                                <h3 className="feature-card-title">{feature.title}</h3>
                                <p className="feature-card-text">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section-white">
                <div className="container">
                    <div className="text-center mb-xl">
                        <p className="subheading">THE PROCESS</p>
                        <h2 className="section-title">How Survey Management Works</h2>
                        <p className="section-subtitle mx-auto">
                            From scheduling to report delivery – a streamlined inspection workflow.
                        </p>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {processSteps.map((step, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                gap: '2rem',
                                alignItems: 'flex-start',
                                padding: '2rem',
                                background: 'white',
                                borderRadius: 'var(--radius-lg)',
                                marginBottom: '1rem',
                                boxShadow: 'var(--shadow-sm)',
                                border: '1px solid rgba(0,0,0,0.05)'
                            }}>
                                <span style={{
                                    fontSize: '3rem',
                                    fontWeight: 800,
                                    color: 'var(--color-teal-primary)',
                                    opacity: 0.3,
                                    lineHeight: 1
                                }}>{step.number}</span>
                                <div>
                                    <h3 style={{
                                        fontSize: '1.25rem',
                                        fontWeight: 700,
                                        marginBottom: '0.5rem',
                                        color: 'var(--color-deep-navy)'
                                    }}>{step.title}</h3>
                                    <p style={{ color: 'var(--color-medium-gray)', lineHeight: 1.6 }}>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Metrics */}
            <section className="section-purple">
                <div className="container text-center">
                    <p className="subheading subheading-light">MEASURABLE RESULTS</p>
                    <h2 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>Survey Operations Impact</h2>
                    <p className="section-subtitle section-subtitle-light mx-auto mb-xl">
                        Real outcomes from survey companies who have digitized their inspection workflows.
                    </p>

                    <div className="divider"></div>

                    <div className="grid-4" style={{ marginTop: '3rem' }}>
                        <div className="stat-card">
                            <div className="stat-card-value">70%</div>
                            <div className="stat-card-label">Faster Report Delivery</div>
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
                            <div className="stat-card-label">Lost Inspection Data</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile App Preview */}
            <section className="section-white">
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <div>
                            <p className="subheading">MOBILE-FIRST DESIGN</p>
                            <h2 className="section-title">Powerful Field App</h2>
                            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
                                Purpose-built mobile app designed for surveyors working in challenging
                                field conditions with offline capability.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    "Works fully offline – syncs when connected",
                                    "Easy-to-use interface optimized for field work",
                                    "Camera integration with auto-geotagging",
                                    "Digital signatures for sign-off",
                                    "Push notifications for new assignments"
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
                                <p style={{ fontWeight: 600 }}>Mobile App Preview</p>
                                <p style={{ fontSize: '0.9rem' }}>Interactive demo available on request</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-light">
                <div className="container">
                    <div className="text-center mb-xl">
                        <p className="subheading">COMMON QUESTIONS</p>
                        <h2 className="section-title">Frequently Asked Questions</h2>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {faqs.map((faq, index) => (
                            <div key={index} style={{
                                background: 'white',
                                borderRadius: 'var(--radius-md)',
                                marginBottom: '1rem',
                                overflow: 'hidden',
                                border: '1px solid rgba(0,0,0,0.05)'
                            }}>
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    style={{
                                        width: '100%',
                                        padding: '1.5rem',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        color: 'var(--color-deep-navy)'
                                    }}
                                >
                                    {faq.q}
                                    <ChevronDown
                                        size={20}
                                        style={{
                                            transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0)',
                                            transition: 'transform 0.3s ease'
                                        }}
                                    />
                                </button>
                                {openFaq === index && (
                                    <div style={{
                                        padding: '0 1.5rem 1.5rem',
                                        color: 'var(--color-medium-gray)',
                                        lineHeight: 1.6
                                    }}>
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
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
                        Join survey companies who have eliminated paper and transformed their field operations.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary btn-pill">
                            Get Started Today <ArrowRight size={18} />
                        </Link>
                        <Link to="/solutions" className="btn btn-ghost btn-pill">
                            Explore Other Solutions
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SurveyManagement;
