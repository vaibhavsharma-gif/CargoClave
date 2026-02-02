import React, { useState } from 'react';
import { Mail, MapPin, Phone, Linkedin, Twitter, Globe, ArrowRight, Send, MessageSquare, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        stakeholderType: '',
        solution: '',
        message: '',
        privacyPolicy: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setIsSubmitting(false);
            setSubmitted(true);
        }, 1000);
    };

    const inputStyle = {
        width: '100%',
        padding: '0.875rem 1rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid #e2e8f0',
        fontSize: '1rem',
        transition: 'all 0.2s ease',
        outline: 'none',
        backgroundColor: 'white'
    };

    const labelStyle = {
        display: 'block',
        fontSize: '0.875rem',
        fontWeight: 600,
        color: 'var(--color-dark-gray)',
        marginBottom: '0.5rem'
    };

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
                    backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80)',
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
                        <p className="subheading" style={{ marginBottom: '0.5rem', color: 'white' }}>CONTACT US</p>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: 'white' }}>
                            Ready to Transform<br />Your Logistics?
                        </h1>
                        <p className="section-subtitle section-subtitle-light" style={{ fontSize: '1.25rem', color: 'white' }}>
                            Let's start the conversation. Tell us about your needs and
                            we'll show you how CargoClave can help.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="section-white">
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1.5fr 1fr',
                        gap: '4rem',
                        maxWidth: '1100px',
                        margin: '0 auto'
                    }}>
                        {/* Contact Form */}
                        <div style={{
                            background: 'white',
                            padding: '2.5rem',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-lg)',
                            border: '1px solid rgba(0,0,0,0.05)'
                        }}>
                            {submitted ? (
                                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, var(--color-teal-primary), var(--color-dark-teal))',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 1.5rem'
                                    }}>
                                        <Send size={32} color="white" />
                                    </div>
                                    <h2 style={{
                                        fontSize: '1.75rem',
                                        fontWeight: 700,
                                        color: 'var(--color-deep-navy)',
                                        marginBottom: '1rem'
                                    }}>Message Sent!</h2>
                                    <p style={{ color: 'var(--color-medium-gray)', marginBottom: '2rem' }}>
                                        Thank you for reaching out. We'll get back to you within 24 hours.
                                    </p>
                                    <Link to="/" className="btn btn-primary btn-pill">
                                        Return to Home
                                    </Link>
                                </div>
                            ) : (
                                <>
                                    <h2 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 700,
                                        color: 'var(--color-deep-navy)',
                                        marginBottom: '2rem'
                                    }}>Send us a Message</h2>

                                    <form onSubmit={handleSubmit}>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                                            <div>
                                                <label style={labelStyle}>Full Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    required
                                                    style={inputStyle}
                                                />
                                            </div>
                                            <div>
                                                <label style={labelStyle}>Email Address *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="john@company.com"
                                                    required
                                                    style={inputStyle}
                                                />
                                            </div>
                                        </div>

                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                                            <div>
                                                <label style={labelStyle}>Company Name</label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    placeholder="Acme Logistics"
                                                    style={inputStyle}
                                                />
                                            </div>
                                            <div>
                                                <label style={labelStyle}>Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+1 (555) 000-0000"
                                                    style={inputStyle}
                                                />
                                            </div>
                                        </div>

                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                                            <div>
                                                <label style={labelStyle}>I represent a...</label>
                                                <select
                                                    name="stakeholderType"
                                                    value={formData.stakeholderType}
                                                    onChange={handleChange}
                                                    style={inputStyle}
                                                >
                                                    <option value="">Select Stakeholder Type</option>
                                                    <option value="enterprise">Enterprise Operations Team</option>
                                                    <option value="freight_forwarder">Freight Forwarder</option>
                                                    <option value="exporter_importer">Exporter / Importer</option>
                                                    <option value="transporter">Logistics & Transport Operator</option>
                                                    <option value="surveyor">Survey & Inspection Company</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label style={labelStyle}>Interested Solution</label>
                                                <select
                                                    name="solution"
                                                    value={formData.solution}
                                                    onChange={handleChange}
                                                    style={inputStyle}
                                                >
                                                    <option value="">Select Solution</option>
                                                    <option value="trade_management">Trade Management System</option>
                                                    <option value="cargo_operations">Cargo Operations Management</option>
                                                    <option value="survey_management">Survey Management System</option>
                                                    <option value="multiple">Multiple / Not Sure</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div style={{ marginBottom: '1.25rem' }}>
                                            <label style={labelStyle}>Message</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="4"
                                                placeholder="Tell us about your requirements..."
                                                style={{ ...inputStyle, resize: 'vertical' }}
                                            ></textarea>
                                        </div>

                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <label style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                cursor: 'pointer',
                                                color: 'var(--color-medium-gray)',
                                                fontSize: '0.875rem'
                                            }}>
                                                <input
                                                    type="checkbox"
                                                    name="privacyPolicy"
                                                    checked={formData.privacyPolicy}
                                                    onChange={handleChange}
                                                    style={{ width: '1rem', height: '1rem' }}
                                                />
                                                I agree to the <a href="#" style={{ color: 'var(--color-teal-primary)' }}>Privacy Policy</a>
                                            </label>
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-pill"
                                            style={{ width: '100%', justifyContent: 'center' }}
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'} <ArrowRight size={18} />
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>

                        {/* Contact Info Sidebar */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {/* Contact Info Card */}
                            <div style={{
                                background: 'var(--color-light-bg)',
                                padding: '2rem',
                                borderRadius: 'var(--radius-lg)'
                            }}>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    color: 'var(--color-deep-navy)',
                                    marginBottom: '1.5rem'
                                }}>Contact Information</h3>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                        <div style={{
                                            padding: '0.75rem',
                                            background: 'white',
                                            borderRadius: 'var(--radius-md)',
                                            color: 'var(--color-teal-primary)'
                                        }}>
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <p style={{ fontWeight: 600, color: 'var(--color-deep-navy)', marginBottom: '0.25rem' }}>Email Us</p>
                                            <a href="mailto:reachus@cargoclave.com" style={{ color: 'var(--color-medium-gray)', textDecoration: 'none' }}>reachus@cargoclave.com</a>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                        <div style={{
                                            padding: '0.75rem',
                                            background: 'white',
                                            borderRadius: 'var(--radius-md)',
                                            color: 'var(--color-teal-primary)'
                                        }}>
                                            <Globe size={20} />
                                        </div>
                                        <div>
                                            <p style={{ fontWeight: 600, color: 'var(--color-deep-navy)', marginBottom: '0.25rem' }}>Website</p>
                                            <a href="https://www.cargoclave.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-medium-gray)', textDecoration: 'none' }}>www.cargoclave.com</a>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                        <div style={{
                                            padding: '0.75rem',
                                            background: 'white',
                                            borderRadius: 'var(--radius-md)',
                                            color: 'var(--color-teal-primary)'
                                        }}>
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p style={{ fontWeight: 600, color: 'var(--color-deep-navy)', marginBottom: '0.25rem' }}>Office</p>
                                            <p style={{ color: 'var(--color-medium-gray)' }}>Global Logistics Hub<br />Tech Park, Suite 400</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Response Time Card */}
                            <div style={{
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem'
                            }}>
                                <div style={{
                                    padding: '0.75rem',
                                    background: 'var(--color-teal-light)',
                                    borderRadius: 'var(--radius-md)',
                                    color: 'var(--color-teal-primary)'
                                }}>
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <p style={{ fontWeight: 600, color: 'var(--color-deep-navy)', marginBottom: '0.25rem' }}>Quick Response</p>
                                    <p style={{ color: 'var(--color-medium-gray)', fontSize: '0.875rem' }}>We respond within 24 hours</p>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div style={{
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid rgba(0,0,0,0.05)'
                            }}>
                                <h3 style={{
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    color: 'var(--color-deep-navy)',
                                    marginBottom: '1rem'
                                }}>Connect With Us</h3>
                                <div style={{ display: 'flex', gap: '0.75rem' }}>
                                    {[
                                        { icon: <Linkedin size={18} />, href: '#' },
                                        { icon: <Twitter size={18} />, href: '#' }
                                    ].map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                padding: '0.75rem',
                                                background: 'var(--color-light-bg)',
                                                borderRadius: 'var(--radius-md)',
                                                color: 'var(--color-deep-navy)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                transition: 'all 0.2s ease'
                                            }}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Support Card */}
                            <div style={{
                                background: 'linear-gradient(135deg, var(--color-deep-navy) 0%, var(--color-navy) 100%)',
                                padding: '1.5rem',
                                borderRadius: 'var(--radius-lg)',
                                color: 'white'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                    <MessageSquare size={20} />
                                    <h3 style={{ fontWeight: 600 }}>Need Technical Support?</h3>
                                </div>
                                <p style={{ fontSize: '0.875rem', opacity: 0.8, marginBottom: '1rem' }}>
                                    Our support team is available 24/7 to assist you with any platform issues.
                                </p>
                                <a
                                    href="mailto:support@cargoclave.com"
                                    style={{
                                        color: 'var(--color-teal-primary)',
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}
                                >
                                    Contact Support <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
