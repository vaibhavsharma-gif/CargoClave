import React, { useState } from 'react';
import { ArrowRight, BookOpen, FileText, TrendingUp, Newspaper, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { resourcesData } from '../data/resourcesData';

const ResourcesHub = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = [
        { name: 'All', icon: null },
        { name: 'Industry News', icon: <Newspaper size={16} /> },
        { name: 'Strategic Insights', icon: <TrendingUp size={16} /> },
        { name: 'Whitepapers', icon: <FileText size={16} /> },
        { name: 'Blogs', icon: <BookOpen size={16} /> }
    ];

    const filteredResources = activeCategory === 'All'
        ? resourcesData
        : resourcesData.filter(r => r.category === activeCategory);

    const featuredResource = filteredResources.find(r => r.featured) || filteredResources[0];
    const regularResources = filteredResources.filter(r => r.id !== featuredResource?.id);

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
        <div>
            {/* Hero Section */}
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                minHeight: '80vh',
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
                    backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
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
                    background: 'linear-gradient(to right, rgba(1, 19, 39, 0.95) 0%, rgba(1, 19, 39, 0.7) 100%)',
                    zIndex: 1
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p className="subheading" style={{ marginBottom: '0.5rem', color: 'var(--color-teal-primary)', letterSpacing: '2px' }}>KNOWLEDGE HUB</p>
                        <h1 style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1, color: 'white', textTransform: 'uppercase', letterSpacing: '-0.04em' }}>
                            Insights for the<br />Modern Era.
                        </h1>
                        <p className="section-subtitle section-subtitle-light" style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', textAlign: 'center', margin: '0 auto', maxWidth: '600px' }}>
                            Providing original perspective, in-depth reports, and the latest news
                            to keep you ahead in the global logistics landscape.
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filters */}
            <section style={{
                background: 'white',
                borderBottom: '1px solid rgba(0,0,0,0.05)',
                position: 'sticky',
                top: '64px', // Adjusted for fixed navbar height
                zIndex: 90
            }}>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        gap: '0.5rem',
                        padding: '1rem 0',
                        overflowX: 'auto',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        {categories.map(cat => (
                            <button
                                key={cat.name}
                                onClick={() => setActiveCategory(cat.name)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: 'var(--radius-full)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    transition: 'all 0.3s ease',
                                    background: activeCategory === cat.name
                                        ? 'var(--color-teal-primary)'
                                        : 'var(--color-light-bg)',
                                    color: activeCategory === cat.name
                                        ? 'white'
                                        : 'var(--color-dark-gray)'

                                }}
                            >
                                {cat.icon}
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources Grid */}
            <section className="section-white" style={{ paddingTop: '4rem' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
                        columnGap: '2.5rem',
                        rowGap: '4rem'
                    }}>
                        {filteredResources.map((res) => (
                            <Link
                                key={res.id}
                                to={`/resources/${res.slug}`}
                                style={{
                                    textDecoration: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s ease'
                                }}
                                className="news-card"
                            >
                                <div style={{
                                    width: '100%',
                                    aspectRatio: '16/9',
                                    overflow: 'hidden',
                                    marginBottom: '1.5rem',
                                    background: '#f0f0f0'
                                }}>
                                    <img
                                        src={res.image}
                                        alt={res.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        className="news-card-image"
                                    />
                                </div>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <p style={{
                                        color: 'var(--color-medium-gray)',
                                        fontSize: '0.8rem',
                                        fontWeight: 500,
                                        marginBottom: '0.5rem'
                                    }}>
                                        {res.date}
                                    </p>
                                    <h3 style={{
                                        fontSize: '1.4rem',
                                        fontWeight: 900,
                                        color: 'var(--color-deep-navy)',
                                        marginBottom: '0.75rem',
                                        lineHeight: '1.1',
                                        textTransform: 'uppercase',
                                        letterSpacing: '-0.02em',
                                        display: '-webkit-box',
                                        WebkitLineClamp: '3',
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}>
                                        {res.title}
                                    </h3>
                                    <p style={{
                                        color: 'var(--color-dark-gray)',
                                        fontSize: '0.9rem',
                                        lineHeight: '1.5',
                                        marginBottom: '1.25rem',
                                        display: '-webkit-box',
                                        WebkitLineClamp: '2',
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}>
                                        {res.excerpt}
                                    </p>
                                    <div style={{ marginTop: 'auto' }}>
                                        <span style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: 'var(--color-teal-primary)',
                                            fontWeight: 700,
                                            fontSize: '0.9rem',
                                            transition: 'gap 0.2s ease'
                                        }} className="news-card-link">
                                            Read More <ArrowRight size={18} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-gradient">
                <div className="container text-center">
                    <p className="subheading subheading-light">STAY INFORMED</p>
                    <h2 className="section-title" style={{ color: 'white' }}>
                        Ready to Optimize Your Logistics?
                    </h2>
                    <p className="section-subtitle section-subtitle-light mx-auto mb-lg">
                        Let CargoClave help you stay ahead with the latest technology and insights.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary btn-pill">
                            Request a Demo <ArrowRight size={18} />
                        </Link>
                        <Link to="/solutions" className="btn btn-ghost btn-pill">
                            Explore Solutions
                        </Link>
                    </div>
                </div>
            </section>

            <style>{`
                .news-card:hover .news-card-image {
                    transform: scale(1.05);
                }
                .news-card:hover .news-card-link {
                    gap: 0.75rem !important;
                    color: var(--color-teal-primary) !important;
                }
                @media (max-width: 768px) {
                    .news-card {
                        margin-bottom: 2rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default ResourcesHub;
