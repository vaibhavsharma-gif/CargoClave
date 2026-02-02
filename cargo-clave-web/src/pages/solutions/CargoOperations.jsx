import React, { useState } from 'react';
import { ArrowRight, Truck, MapPin, Package, Clock, Shield, BarChart2, CheckCircle2, ChevronDown, Wifi, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CargoOperations = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const challenges = [
        { icon: <MapPin size={24} />, title: "Location Blindspots", desc: "Inability to track cargo and vehicles in real-time leads to customer complaints and missed deliveries." },
        { icon: <Clock size={24} />, title: "Inefficient Scheduling", desc: "Manual trip planning wastes fuel, time, and resources while increasing operational costs." },
        { icon: <Package size={24} />, title: "Warehouse Confusion", desc: "Lack of inventory visibility causes misplacements, delays, and fulfillment errors." },
        { icon: <Wifi size={24} />, title: "Disconnected Systems", desc: "Field operations and office systems don't communicate, creating data gaps and delays." }
    ];

    const features = [
        { icon: <Truck size={24} />, title: "Fleet Tracking", desc: "Real-time GPS tracking of all vehicles with route history, speed monitoring, and geofencing alerts." },
        { icon: <MapPin size={24} />, title: "Trip Management", desc: "Plan, assign, and optimize delivery routes with automated dispatch and driver mobile apps." },
        { icon: <Package size={24} />, title: "Warehouse Operations", desc: "Manage inventory, locations, and movements with barcode/RFID scanning integration." },
        { icon: <Smartphone size={24} />, title: "Driver Mobile App", desc: "Empower drivers with mobile tools for proof of delivery, digital signatures, and real-time updates." },
        { icon: <BarChart2 size={24} />, title: "Performance Analytics", desc: "Track KPIs, identify bottlenecks, and optimize operations with actionable insights." },
        { icon: <Shield size={24} />, title: "Safety & Compliance", desc: "Monitor driver behavior, maintain service records, and ensure regulatory compliance." }
    ];

    const processSteps = [
        { number: "01", title: "Connect Your Fleet", desc: "Install GPS devices on vehicles and integrate with your existing systems. Get started in days, not months." },
        { number: "02", title: "Plan & Dispatch", desc: "Use intelligent routing to plan optimal trips. Assign drivers and send instructions to their mobile devices instantly." },
        { number: "03", title: "Track in Real-Time", desc: "Monitor all vehicles and shipments on a live map. Receive alerts for delays, deviations, and exceptions." },
        { number: "04", title: "Confirm Delivery", desc: "Capture digital proof of delivery with photos, signatures, and timestamps. Update customers automatically." },
        { number: "05", title: "Analyze & Improve", desc: "Review performance dashboards to identify inefficiencies and continuously optimize your operations." }
    ];

    const faqs = [
        { q: "What GPS devices are compatible?", a: "CargoClave works with most major GPS hardware providers. We also offer our own certified devices for seamless integration." },
        { q: "Can drivers use their own smartphones?", a: "Yes, our driver mobile app works on both iOS and Android devices. No special hardware is required for drivers." },
        { q: "How accurate is the real-time tracking?", a: "Our tracking updates every 30 seconds with accuracy within 3 meters. Custom update frequencies are available." },
        { q: "Does it integrate with our TMS?", a: "Yes, we offer pre-built integrations with major TMS platforms and custom API solutions for seamless data flow." }
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
                    backgroundImage: 'url(https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80)',
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
                        <p className="subheading" style={{ marginBottom: '0.5rem', color: 'white' }}>CARGO OPERATIONS MANAGEMENT</p>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: 'white' }}>
                            Manage, Track &<br />Optimize Operations.
                        </h1>
                        <p className="section-subtitle section-subtitle-light" style={{ marginBottom: '2rem', fontSize: '1.25rem', color: 'white' }}>
                            Digitizes cargo handling and movement tracking with GPS-enabled real-time visibility
                            across your entire fleet and warehouse operations. Know where every shipment is, every moment.
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
                        <h2 className="section-title">Challenges in Cargo Operations</h2>
                        <p className="section-subtitle mx-auto">
                            Without real-time visibility and control, cargo operations become reactive and inefficient.
                        </p>
                    </div>

                    <div className="grid-4">
                        {challenges.map((challenge, index) => (
                            <div key={index} className="feature-card" style={{ borderTop: '3px solid #f59e0b' }}>
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
                        <h2 className="section-title">Complete Operational Control</h2>
                        <p className="section-subtitle mx-auto">
                            Everything you need to manage fleet, warehouse, and delivery operations in one platform.
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
                        <h2 className="section-title">How Cargo Operations Flow</h2>
                        <p className="section-subtitle mx-auto">
                            From fleet connection to delivery confirmation – a seamless operational workflow.
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
                    <h2 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>Operational Impact</h2>
                    <p className="section-subtitle section-subtitle-light mx-auto mb-xl">
                        Real outcomes from logistics operators who have digitized their cargo operations.
                    </p>

                    <div className="divider"></div>

                    <div className="grid-4" style={{ marginTop: '3rem' }}>
                        <div className="stat-card">
                            <div className="stat-card-value">25%</div>
                            <div className="stat-card-label">Fuel Cost Reduction</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-card-value">40%</div>
                            <div className="stat-card-label">Faster Deliveries</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-card-value">99%</div>
                            <div className="stat-card-label">On-Time Accuracy</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-card-value">60%</div>
                            <div className="stat-card-label">Less Customer Calls</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Live Tracking Preview */}
            <section className="section-white">
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
                                <MapPin size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                                <p style={{ fontWeight: 600 }}>Live Tracking Map</p>
                                <p style={{ fontSize: '0.9rem' }}>Interactive demo available on request</p>
                            </div>
                        </div>
                        <div>
                            <p className="subheading">REAL-TIME VISIBILITY</p>
                            <h2 className="section-title">Track Everything, Everywhere</h2>
                            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
                                See your entire fleet on a live map with real-time positions,
                                status updates, and intelligent alerts.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    "Live vehicle positions updated every 30 seconds",
                                    "Geofencing alerts for arrivals and departures",
                                    "Route playback and history analysis",
                                    "Driver behavior monitoring and scoring",
                                    "Customer shipment tracking portal"
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
                        Ready to Optimize Your Cargo Operations?
                    </h2>
                    <p className="section-subtitle section-subtitle-light mx-auto mb-lg">
                        Join logistics companies who have gained complete control over their fleet and delivery operations.
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

export default CargoOperations;
