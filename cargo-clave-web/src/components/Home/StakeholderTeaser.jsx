import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Ship, UserCheck, Truck, ClipboardCheck, ArrowRight } from 'lucide-react';

const StakeholderTeaser = () => {
    const personas = [
        {
            title: "Enterprise Operations",
            icon: <Building2 size={28} />,
            desc: "Oversee global logistics and data governance at scale with centralized visibility.",
            path: "/who-we-serve/enterprise-operations",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
        },
        {
            title: "Freight Forwarders",
            icon: <Ship size={28} />,
            desc: "Digitize documentation, improve client visibility, and streamline operations.",
            path: "/who-we-serve/freight-forwarders",
            image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&q=80"
        },
        {
            title: "Importers & Exporters",
            icon: <UserCheck size={28} />,
            desc: "Gain end-to-end visibility and compliance control over your global cargo.",
            path: "/who-we-serve/importers-exporters",
            image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80"
        },
        {
            title: "Logistics Operators",
            icon: <Truck size={28} />,
            desc: "Optimize fleet utilization, trip management, and real-time coordination.",
            path: "/who-we-serve/logistics-transport",
            image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80"
        },
        {
            title: "Survey Companies",
            icon: <ClipboardCheck size={28} />,
            desc: "Digitalize inspection workflows, contract oversight, and quality reporting.",
            path: "/who-we-serve/survey-companies",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
        }
    ];

    return (
        <section className="section-light">
            <div className="container">
                <div className="text-center mb-xl">
                    <p className="subheading">BUILT FOR YOUR INDUSTRY</p>
                    <h2 className="section-title">Solutions for Every Stakeholder</h2>
                    <p className="section-subtitle mx-auto">
                        CargoClave is designed to connect the entire logistics ecosystem.
                        Find your role and see how we help solve your unique challenges.
                    </p>
                </div>

                <div className="grid-3 mb-lg">
                    {personas.slice(0, 3).map((persona, index) => (
                        <Link
                            key={index}
                            to={persona.path}
                            className="premium-card"
                            style={{ textDecoration: 'none' }}
                        >
                            <div style={{ overflow: 'hidden' }}>
                                <img
                                    src={persona.image}
                                    alt={persona.title}
                                    className="premium-card-image"
                                />
                            </div>
                            <div className="premium-card-body">
                                <div className="icon-wrapper icon-wrapper-teal mb-sm">
                                    {persona.icon}
                                </div>
                                <h3 className="premium-card-title">{persona.title}</h3>
                                <p className="premium-card-text">{persona.desc}</p>
                                <span className="link-arrow">
                                    Learn More <ArrowRight size={16} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="grid-2" style={{ maxWidth: '850px', margin: '0 auto' }}>
                    {personas.slice(3).map((persona, index) => (
                        <Link
                            key={index}
                            to={persona.path}
                            className="premium-card"
                            style={{ textDecoration: 'none' }}
                        >
                            <div style={{ overflow: 'hidden' }}>
                                <img
                                    src={persona.image}
                                    alt={persona.title}
                                    className="premium-card-image"
                                />
                            </div>
                            <div className="premium-card-body">
                                <div className="icon-wrapper icon-wrapper-teal mb-sm">
                                    {persona.icon}
                                </div>
                                <h3 className="premium-card-title">{persona.title}</h3>
                                <p className="premium-card-text">{persona.desc}</p>
                                <span className="link-arrow">
                                    Learn More <ArrowRight size={16} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StakeholderTeaser;
