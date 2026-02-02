import React from 'react';
import { ArrowRight, Truck, MapPin, Clock, Fuel, CheckCircle2, Smartphone, Route, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const LogisticsTransport = () => {
    const challenges = [
        { icon: <MapPin size={24} />, title: "Blind Deliveries", desc: "No real-time visibility into where vehicles are or when deliveries will arrive." },
        { icon: <Clock size={24} />, title: "Scheduling Chaos", desc: "Manual dispatch and route planning leads to inefficient trips and missed windows." },
        { icon: <Fuel size={24} />, title: "Rising Costs", desc: "Fuel waste, idle time, and inefficient routing eat into already thin margins." },
        { icon: <Smartphone size={24} />, title: "Driver Disconnect", desc: "Field drivers can't easily communicate with dispatch or update delivery status." }
    ];

    const solutions = [
        {
            title: "Cargo Operations",
            desc: "Complete fleet tracking, trip management, and delivery confirmation in one platform.",
            image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
            link: "/solutions/cargo-operations"
        },
        {
            title: "Trade Management",
            desc: "Integrate transport operations with broader supply chain visibility.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
            link: "/solutions/trade-management"
        }
    ];

    const benefits = [
        "GPS fleet tracking with live map view",
        "Intelligent route optimization",
        "Driver mobile app with offline capability",
        "Digital proof of delivery capture",
        "Fuel consumption monitoring",
        "Customer delivery notifications"
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
                        <p className="subheading" style={{ marginBottom: '0.5rem', color: 'white' }}>FOR LOGISTICS & TRANSPORT</p>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: 'white' }}>
                            Optimize Fleet.<br />Control Costs.
                        </h1>
                        <p className="section-subtitle section-subtitle-light" style={{ marginBottom: '2rem', fontSize: '1.25rem', color: 'white' }}>
                            Transform your transport operations with real-time fleet tracking,
                            intelligent routing, and digital delivery management. Cut costs while
                            improving customer satisfaction.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn-primary btn-pill">
                                Get Fleet Visibility <ArrowRight size={18} />
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
                        <h2 className="section-title">Transport Pain Points</h2>
                        <p className="section-subtitle mx-auto">
                            Without the right tools, transport operations waste money and disappoint customers.
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

            {/* How We Help */}
            <section className="section-light">
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <div>
                            <p className="subheading">THE SOLUTION</p>
                            <h2 className="section-title">Complete Fleet Control</h2>
                            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
                                CargoClave gives you real-time visibility and control over every
                                vehicle and delivery.
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
                                <MapPin size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                                <p style={{ fontWeight: 600 }}>Live Fleet Map Preview</p>
                                <p style={{ fontSize: '0.9rem' }}>Interactive demo available on request</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="section-white">
                <div className="container">
                    <div className="text-center mb-xl">
                        <p className="subheading">KEY CAPABILITIES</p>
                        <h2 className="section-title">Built for Transport Operations</h2>
                    </div>

                    <div className="grid-3">
                        <div className="feature-card text-center">
                            <div className="feature-card-icon mx-auto" style={{ marginBottom: '1.5rem' }}>
                                <Truck size={24} />
                            </div>
                            <h3 className="feature-card-title">Fleet Tracking</h3>
                            <p className="feature-card-text">Real-time GPS positions with speed, idle time, and route history.</p>
                        </div>
                        <div className="feature-card text-center">
                            <div className="feature-card-icon mx-auto" style={{ marginBottom: '1.5rem' }}>
                                <Route size={24} />
                            </div>
                            <h3 className="feature-card-title">Route Optimization</h3>
                            <p className="feature-card-text">Intelligent routing to minimize distance, fuel, and delivery time.</p>
                        </div>
                        <div className="feature-card text-center">
                            <div className="feature-card-icon mx-auto" style={{ marginBottom: '1.5rem' }}>
                                <BarChart2 size={24} />
                            </div>
                            <h3 className="feature-card-title">Performance Analytics</h3>
                            <p className="feature-card-text">Track KPIs, driver scores, and operational efficiency metrics.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Relevant Solutions */}
            <section className="section-light">
                <div className="container">
                    <div className="text-center mb-xl">
                        <p className="subheading">RELEVANT SOLUTIONS</p>
                        <h2 className="section-title">Modules for Transport</h2>
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
                        Transport Results
                    </h2>

                    <div className="divider"></div>

                    <div className="grid-4" style={{ marginTop: '3rem' }}>
                        <div className="stat-card">
                            <div className="stat-card-value">25%</div>
                            <div className="stat-card-label">Fuel Cost Reduction</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-card-value">40%</div>
                            <div className="stat-card-label">More Deliveries</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-card-value">99%</div>
                            <div className="stat-card-label">On-Time Rate</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-card-value">60%</div>
                            <div className="stat-card-label">Fewer Complaints</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-gradient">
                <div className="container text-center">
                    <p className="subheading subheading-light">GET STARTED</p>
                    <h2 className="section-title" style={{ color: 'white' }}>
                        Ready to Optimize Your Fleet?
                    </h2>
                    <p className="section-subtitle section-subtitle-light mx-auto mb-lg">
                        Join transport companies who have gained complete control over their operations.
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

export default LogisticsTransport;
