import React from 'react';
import Hero from '../components/Home/Hero';
import CardSwapSection from '../components/Home/CardSwapSection';
import Stats from '../components/Home/Stats';
import SolutionsTeaser from '../components/Home/SolutionsTeaser';
import StakeholderTeaser from '../components/Home/StakeholderTeaser';
import CTASection from '../components/Home/CTASection';

const Home = () => {
    return (
        <main>
            <Hero />
            <CardSwapSection />
            <Stats />
            <SolutionsTeaser />
            <StakeholderTeaser />
            <CTASection />
        </main>
    );
};

export default Home;
