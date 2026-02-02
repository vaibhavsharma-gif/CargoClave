import React from 'react';
import { ArrowRight, Globe, Zap, Shield, Layers, Clock, HeadphonesIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const ValueProp = () => {
  const benefits = [
    {
      icon: <Globe size={24} />,
      title: "Real-Time Visibility",
      description: "Track every shipment across borders with live updates and comprehensive dashboards."
    },
    {
      icon: <Shield size={24} />,
      title: "Automated Compliance",
      description: "Generate accurate documentation that meets international trade regulations automatically."
    },
    {
      icon: <Zap size={24} />,
      title: "Cost Optimization",
      description: "Reduce operational overhead by up to 40% through intelligent automation and analytics."
    },
    {
      icon: <Layers size={24} />,
      title: "Seamless Integration",
      description: "Connect with existing ERP, TMS, and WMS systems through robust APIs and connectors."
    },
    {
      icon: <Clock size={24} />,
      title: "Faster Turnaround",
      description: "Cut processing time in half with digitized workflows and automated approvals."
    },
    {
      icon: <HeadphonesIcon size={24} />,
      title: "24/7 Expert Support",
      description: "Get around-the-clock assistance from our dedicated logistics technology specialists."
    }
  ];

  return (
    <section className="section-white">
      <div className="container">
        <div className="text-center mb-xl">
          <p className="subheading">WHY CARGOCLAVE?</p>
          <h2 className="section-title">
            ANYTHING. ANYWHERE.
          </h2>
          <p className="section-subtitle mx-auto">
            No matter your size or sector, we can help you move your products through our
            global logistics infrastructure. From local entrepreneurs to global enterprises,
            we connect you to the markets, resources, and opportunities that matter most.
          </p>
        </div>

        <div className="grid-3 mb-lg">
          {benefits.map((benefit, index) => (
            <div key={index} className="feature-card">
              <div className="feature-card-icon">
                {benefit.icon}
              </div>
              <h3 className="feature-card-title">{benefit.title}</h3>
              <p className="feature-card-text">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/solutions" className="link-arrow" style={{ fontSize: '1rem' }}>
            Explore Our Solutions <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
