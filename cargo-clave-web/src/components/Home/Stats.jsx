import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    { value: 102, suffix: 'M', label: 'TEU global capacity' },
    { value: 80, suffix: '+', label: 'Countries worldwide' },
    { value: 10, prefix: '$', suffix: 'B', label: 'Invested in global logistics network' },
    { value: 65, suffix: '%', label: 'Electricity sourced from renewable energy' },
  ];

  return (
    <section className="section-purple" ref={ref}>
      <div className="container text-center">
        <p className="subheading subheading-light">MAKE AN IMPACT</p>
        <h2 className="section-title" style={{ color: 'white', marginBottom: '1.5rem' }}>
          WE MOVE 10% OF GLOBAL<br />TRADE DAILY
        </h2>
        <p className="section-subtitle section-subtitle-light mx-auto" style={{ marginBottom: '4rem' }}>
          CargoClave plays a vital role in keeping global trade moving by connecting economies,
          industries and businesses worldwide.
        </p>

        <div className="divider"></div>

        <div className="grid-4" style={{ marginTop: '3rem' }}>
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-card-value">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    delay={0.2 + index * 0.1}
                    prefix={stat.prefix || ''}
                    suffix={stat.suffix || ''}
                  />
                ) : (
                  <span>{stat.prefix || ''}{stat.value}{stat.suffix || ''}</span>
                )}
              </div>
              <div className="stat-card-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
