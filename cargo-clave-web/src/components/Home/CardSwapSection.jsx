import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Shield, Zap, Layers, Clock, HeadphonesIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const CardSwapSection = () => {
    const containerRef = useRef(null);
    const leftColRef = useRef(null);
    const rightColRef = useRef(null);
    const cardsRef = useRef([]);

    const benefits = [
        {
            icon: <Globe size={32} />,
            title: "Real-Time Visibility",
            description: "Track every shipment across borders with live updates and comprehensive dashboards.",
            color: "var(--color-teal-primary)"
        },
        {
            icon: <Shield size={32} />,
            title: "Automated Compliance",
            description: "Generate accurate documentation that meets international trade regulations automatically.",
            color: "#6366f1"
        },
        {
            icon: <Zap size={32} />,
            title: "Cost Optimization",
            description: "Reduce operational overhead by up to 40% through intelligent automation and analytics.",
            color: "#f59e0b"
        },
        {
            icon: <Layers size={32} />,
            title: "Seamless Integration",
            description: "Connect with existing ERP, TMS, and WMS systems through robust APIs and connectors.",
            color: "#ec4899"
        },
        {
            icon: <Clock size={32} />,
            title: "Faster Turnaround",
            description: "Cut processing time in half with digitized workflows and automated approvals.",
            color: "#14b8a6"
        },
        {
            icon: <HeadphonesIcon size={32} />,
            title: "24/7 Expert Support",
            description: "Get around-the-clock assistance from our dedicated logistics technology specialists.",
            color: "#8b5cf6"
        }
    ];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = cardsRef.current;
            const totalCards = cards.length;

            // Create a timeline that pins the container
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${totalCards * 100}%`, // Scroll distance proportional to number of cards
                    pin: true,
                    scrub: 1,
                    // markers: true // Uncomment for debugging
                }
            });

            // Iterate through cards and add them to the timeline
            // Start from index 1 because the first card (index 0) is already visible relative
            cards.forEach((card, i) => {
                if (i === 0) return;

                tl.add(
                    gsap.fromTo(card,
                        {
                            yPercent: 100,
                            opacity: 0,
                            scale: 0.9,
                            rotation: -5
                        },
                        {
                            yPercent: 0,
                            opacity: 1,
                            scale: 1,
                            rotation: 0,
                            duration: 1,
                            ease: "power2.out"
                        }
                    ),
                    // Insert at a specific time to create overlap
                    // Each animation takes 1s.
                    // Card 1 starts at 0.5s (overlap with start)
                    // Card 2 starts at 1.5s
                    // Card 3 starts at 2.5s
                    // This ensures they are evenly spaced over the scroll distance
                    (i - 0.5)
                );
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} style={{
            height: '100vh',
            overflow: 'hidden',
            background: 'white',
            position: 'relative'
        }}>
            <div className="container" style={{ height: '100%' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    height: '100%',
                    gap: '4rem',
                    alignItems: 'center'
                }}>

                    {/* Left Column: Text */}
                    <div ref={leftColRef} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <p className="subheading" style={{ color: 'var(--color-teal-primary)', fontWeight: 700, letterSpacing: '2px', marginBottom: '1rem' }}>
                            WHY CARGOCLAVE?
                        </p>
                        <h2 className="section-title" style={{ fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '2rem', color: 'var(--color-deep-navy)' }}>
                            ANYTHING.<br />ANYWHERE.
                        </h2>
                        <p className="section-subtitle" style={{ fontSize: '1.25rem', color: 'var(--color-medium-gray)', marginBottom: '3rem', maxWidth: '500px' }}>
                            No matter your size or sector, we can help you move your products through our
                            global logistics infrastructure. From local entrepreneurs to global enterprises,
                            we connect you to the markets, resources, and opportunities that matter most.
                        </p>

                        <Link to="/solutions" className="btn btn-primary btn-pill" style={{ width: 'fit-content' }}>
                            Explore Our Solutions <ArrowRight size={18} />
                        </Link>
                    </div>

                    {/* Right Column: Card Stack */}
                    <div ref={rightColRef} style={{ position: 'relative', height: '500px', width: '100%' }}>
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                ref={el => cardsRef.current[index] = el}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'white',
                                    borderRadius: '24px',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                                    padding: '3rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    zIndex: index + 1 // Stack order
                                }}
                            >
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '16px',
                                    background: `${benefit.color}15`, // 15% opacity
                                    color: benefit.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '2rem'
                                }}>
                                    {benefit.icon}
                                </div>
                                <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-deep-navy)' }}>
                                    {benefit.title}
                                </h3>
                                <p style={{ fontSize: '1.25rem', color: 'var(--color-medium-gray)', lineHeight: 1.6 }}>
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CardSwapSection;
