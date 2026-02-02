import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Share2, Tag, User } from 'lucide-react';
import { resourcesData } from '../data/resourcesData';

const ResourceDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const resource = resourcesData.find(r => r.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!resource) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-navy mb-4">Resource Not Found</h2>
                    <Link to="/resources" className="text-teal-primary font-semibold hover:underline">
                        Return to Resources Hub
                    </Link>
                </div>
            </div>
        );
    }

    const getCategoryColor = (category) => {
        switch (category) {
            case 'Industry News': return '#ef4444';
            case 'Strategic Insights': return '#6366f1';
            case 'Whitepapers': return '#0891b2';
            case 'Blogs': return '#22c55e';
            default: return 'var(--color-teal-primary)';
        }
    };

    return (
        <article style={{ minHeight: '100vh', background: 'white', paddingTop: '80px', paddingBottom: '60px' }}>
            <div className="container" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
                {/* Back Link */}
                <div style={{ marginBottom: '3rem' }}>
                    <Link
                        to="/resources"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            textDecoration: 'none',
                            color: 'var(--color-medium-gray)',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}
                    >
                        <ArrowLeft size={16} /> All News
                    </Link>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 2fr) 1fr',
                    gap: '5rem'
                }} className="detail-grid">
                    {/* Main Content */}
                    <div className="main-content">
                        <header style={{ marginBottom: '3rem' }}>
                            <div style={{
                                color: 'var(--color-medium-gray)',
                                fontWeight: 600,
                                fontSize: '0.8rem',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                marginBottom: '2rem'
                            }}>
                                Resources / {resource.category}
                            </div>
                            <h1 style={{
                                fontSize: '4rem',
                                fontWeight: 900,
                                color: 'var(--color-deep-navy)',
                                marginBottom: '1.5rem',
                                lineHeight: '0.95',
                                textTransform: 'uppercase',
                                letterSpacing: '-0.04em'
                            }}>
                                {resource.title}
                            </h1>
                            <p style={{
                                fontSize: '1.4rem',
                                fontWeight: 700,
                                color: 'var(--color-deep-navy)',
                                marginBottom: '1.5rem',
                                lineHeight: '1.3'
                            }}>
                                {resource.excerpt}
                            </p>
                            <p style={{
                                fontSize: '1.1rem',
                                color: 'var(--color-deep-navy)',
                                fontWeight: 700
                            }}>
                                {resource.date}
                            </p>
                        </header>

                        {/* Image Gallery */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '1.5rem',
                            marginBottom: '3rem'
                        }} className="image-gallery">
                            <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: '#f0f0f0' }}>
                                <img src={resource.image} alt={resource.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: '#f0f0f0' }}>
                                <img src={resource.image} alt={resource.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.2)' }} />
                            </div>
                        </div>

                        {/* Article Text */}
                        <div className="prose" style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.8',
                            color: 'var(--color-dark-gray)'
                        }}>
                            <p><strong>GLOBAL LOGISTICS HUB – {resource.date}:</strong></p>
                            <div dangerouslySetInnerHTML={{ __html: resource.content }} />
                        </div>

                        {/* Share */}
                        <div style={{
                            marginTop: '4rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid #eee',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <span style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', color: 'var(--color-medium-gray)' }}>Share this article</span>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <button style={{ padding: '0.5rem', background: '#f5f5f5', border: 'none', borderRadius: '4px', cursor: 'pointer' }}><Share2 size={16} /></button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="sidebar">
                        <div style={{ position: 'sticky', top: '120px' }}>
                            <div style={{ marginBottom: '3rem' }}>
                                <h4 style={{
                                    fontSize: '0.9rem',
                                    fontWeight: 800,
                                    textTransform: 'uppercase',
                                    paddingBottom: '0.5rem',
                                    marginBottom: '1.5rem',
                                    borderBottom: '1px solid #ddd',
                                    color: '#333'
                                }}>Media Contacts</h4>

                                <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #eee' }}>
                                    <p style={{ fontWeight: 800, color: '#000', marginBottom: '0.25rem' }}>Adal Mirza</p>
                                    <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '0.25rem' }}>Group Vice-President, Media Relations</p>
                                    <a href="mailto:adal.mirza@cargoclave.com" style={{ fontSize: '0.9rem', color: 'var(--color-teal-primary)', textDecoration: 'none', display: 'block', marginBottom: '0.25rem' }}>adal.mirza@cargoclave.com</a>
                                    <p style={{ fontSize: '0.9rem', color: '#555' }}>+971 50 629 7856</p>
                                </div>

                                <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #eee' }}>
                                    <p style={{ fontWeight: 800, color: '#000', marginBottom: '0.25rem' }}>Hakam Kherallah</p>
                                    <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '0.25rem' }}>Group Senior Manager, Media Relations</p>
                                    <a href="mailto:hakam.kherallah@cargoclave.com" style={{ fontSize: '0.9rem', color: 'var(--color-teal-primary)', textDecoration: 'none', display: 'block', marginBottom: '0.25rem' }}>hakam.kherallah@cargoclave.com</a>
                                    <p style={{ fontSize: '0.9rem', color: '#555' }}>+971 50 552 2610</p>
                                </div>
                            </div>

                            <Link
                                to="/contact"
                                style={{
                                    display: 'block',
                                    padding: '1.5rem',
                                    background: 'var(--color-deep-navy)',
                                    color: 'white',
                                    textDecoration: 'none',
                                    borderRadius: '8px',
                                    textAlign: 'center'
                                }}
                            >
                                <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Need more info?</p>
                                <p style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '1rem' }}>Contact our operations team for standard inquiries.</p>
                                <span style={{ fontWeight: 700, color: 'var(--color-teal-primary)' }}>Request Demo <ArrowRight size={16} /></span>
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>

            <style>{`
                @media (max-width: 992px) {
                    .detail-grid {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                    }
                    .sidebar {
                        order: 2;
                    }
                }
                @media (max-width: 600px) {
                    .image-gallery {
                        grid-template-columns: 1fr !important;
                    }
                }
                .prose p {
                    margin-bottom: 1.5rem;
                }
                .prose h2, .prose h3 {
                    color: var(--color-deep-navy);
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                }
            `}</style>
        </article>
    );
};

export default ResourceDetail;
