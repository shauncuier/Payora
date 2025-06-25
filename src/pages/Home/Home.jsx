// File: src/pages/Home/Home.jsx

import React from 'react';
import WhyPayora from '../../components/Home Page Section/WhyPayora';
import DivisionServices from '../../components/Home Page Section/DivisionServices';
import Testimonials from '../../components/Home Page Section/Testimonials';
import HowItWorks from '../../components/Home Page Section/HowItWorks';
import StatsCounter from '../../components/Home Page Section/StatsCounter';
import BlogSection from '../../components/Home Page Section/BlogSection';
import LogoSlider from '../../components/Home Page Section/LogoSlider';
import HeroSlider from '../../components/Home Page Section/HeroSlider';

const Home = () => {
    return (
        <div>
            <HeroSlider />
            <BlogSection />
            <WhyPayora />
            <LogoSlider />
            <DivisionServices />
            <Testimonials />
            <StatsCounter />
            <HowItWorks />
        </div>
    );
};

export default Home;