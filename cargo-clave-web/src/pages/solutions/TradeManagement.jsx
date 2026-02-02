import React from 'react';
import { ArrowRight, Activity, DollarSign, AlertTriangle, FileText, CheckCircle2, Ship, Globe, TrendingUp, Shield, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const TradeManagement = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const challenges = [
        { icon: <Activity size={24} />, title: "Limited Visibility", desc: "No real-time tracking of milestones leading to reactive problem-solving." },
        { icon: <DollarSign size={24} />, title: "Financial Inaccuracies", desc: "Error-prone cost calculations resulting in revenue leakage and billing disputes." },
        { icon: <AlertTriangle size={24} />, title: "Manual Processes", desc: "Disconnected spreadsheets and workflows causing delays and inefficiencies." },
        { icon: <FileText size={24} />, title: "Document Chaos", desc: "Inefficient document management creating compliance risks and audit failures." }
    ];

    const processSteps = [
        { number: "01", title: "Centralize the Work", desc: "Bring all shipments into one place. Eliminate switching between tools or spreadsheets. Create a unified view of all your trade operations." },
        { number: "02", title: "Bring Financial Clarity", desc: "Ensure costs are captured accurately and validated early. Reduce disputes and revenue leakage with automated rate management." },
        { number: "03", title: "Track Progress in Real Time", desc: "Follow shipment execution stages live. Enable teams to act early instead of reacting late with proactive alerts." },
        { number: "04", title: "Stay Document-Ready", desc: "Keep all freight documents organized, versioned, and accessible for audits and compliance at any time." },
        { number: "05", title: "Make Better Decisions", desc: "Use operational and financial visibility to spot issues early, identify trends, and continuously improve execution." }
    ];

    const features = [
        { icon: <Ship size={24} />, title: "Shipment Lifecycle Management", desc: "Track every shipment from booking to delivery with complete milestone visibility." },
        { icon: <Globe size={24} />, title: "Multi-Modal Support", desc: "Handle ocean, air, rail, and road shipments in a single unified platform." },
        { icon: <FileText size={24} />, title: "Document Automation", desc: "Generate Bills of Lading, invoices, and customs documents automatically." },
        { icon: <DollarSign size={24} />, title: "Cost & Rate Management", desc: "Compare carrier rates, track costs, and ensure accurate billing." },
        { icon: <TrendingUp size={24} />, title: "Analytics & Reporting", desc: "Real-time dashboards and custom reports for data-driven decisions." },
        { icon: <Shield size={24} />, title: "Compliance Tracking", desc: "Stay audit-ready with complete documentation trails and regulatory compliance." }
    ];

    const faqs = [
        { q: "How long does implementation take?", a: "Typical implementation takes 4-8 weeks depending on your existing systems and data migration requirements. Our team provides full support throughout the process." },
        { q: "Can it integrate with our existing ERP?", a: "Yes, CargoClave offers robust API integrations with major ERP systems including SAP, Oracle, and Microsoft Dynamics. Custom integrations are also available." },
        { q: "Is the data secure?", a: "Absolutely. We use enterprise-grade encryption, regular security audits, and comply with international data protection standards including GDPR and SOC 2." },
        { q: "Do you offer training?", a: "Yes, comprehensive training is included with every implementation. We also provide ongoing support and documentation for your team." }
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
                    backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80)',
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
                        <p className="subheading" style={{ marginBottom: '0.5rem', color: 'white' }}>TRADE MANAGEMENT SYSTEM</p>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: 'white' }}>
                            Digitizing Shipments.<br />Delivering Visibility.
                        </h1>
                        <p className="section-subtitle section-subtitle-light" style={{ marginBottom: '2rem', fontSize: '1.25rem', color: 'white' }}>
                            Comprehensive digital solution designed specifically for logistics professionals
                            in the shipping and supply chain industry. Centralize operations, automate documentation,
                            and gain complete control over your trade execution.
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
                        <h2 className="section-title">Challenges in Freight Operations Today</h2>
                        <p className="section-subtitle mx-auto">
                            We understand the complexity of modern logistics and the pain points that slow you down.
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

            {/* Features Section */}
            <section className="section-light">
                <div className="container">
                    <div className="text-center mb-xl">
                        <p className="subheading">KEY CAPABILITIES</p>
                        <h2 className="section-title">Everything You Need to Manage Trade</h2>
                        <p className="section-subtitle mx-auto">
                            A complete suite of tools for managing shipments, documents, finances, and compliance.
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
                        <h2 className="section-title">How Trade Operations Come Together</h2>
                        <p className="section-subtitle mx-auto">
                            A structured flow that brings clarity, control, and confidence to trade execution.
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
                    <h2 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>Impact You Can Expect</h2>
                    <p className="section-subtitle section-subtitle-light mx-auto mb-xl">
                        Real outcomes from organizations that have transformed their trade operations.
                    </p>

                    <div className="divider"></div>

                    <div className="grid-4" style={{ marginTop: '3rem' }}>
                        <div className="stat-card">
                            <div className="stat-card-value">35%</div>
                            <div className="stat-card-label">Faster Operations</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-card-value">27%</div>
                            <div className="stat-card-label">Better Coordination</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-card-value">100%</div>
                            <div className="stat-card-label">Shipment Visibility</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-card-value">24/7</div>
                            <div className="stat-card-label">Compliance Readiness</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dashboard Preview */}
            <section className="section-white">
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <div>
                            <p className="subheading">POWERFUL DASHBOARDS</p>
                            <h2 className="section-title">Actionable Insights at a Glance</h2>
                            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
                                Get complete visibility into your operations with real-time dashboards
                                designed for logistics professionals.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    "Real-time KPI tracking and performance metrics",
                                    "Status-based shipment distribution charts",
                                    "Critical alerts and exceptions panel",
                                    "Cost analysis by shipment type and route",
                                    "Profitability tracking by customer"
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
                                <Ship size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                                <p style={{ fontWeight: 600 }}>Dashboard Preview</p>
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
                        Ready to Transform Your Trade Operations?
                    </h2>
                    <p className="section-subtitle section-subtitle-light mx-auto mb-lg">
                        Join leading logistics companies who have already digitized their trade operations with CargoClave.
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

export default TradeManagement;
