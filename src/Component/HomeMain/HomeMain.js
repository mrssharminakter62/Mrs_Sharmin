import React from 'react';
import Blog from '../Bog/Blog';
import Contact from '../Contact/Contact';
import HeaderMain from '../HeaderMain/HeaderMain';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';

import Skill from '../Skill/Skill';

const HomeMain = () => {
    return (
        <div>
            <HeaderMain/>
            <Home/>
            <Projects/>
            <Blog/>
            <Skill/>
            <Contact/>    
        </div>
    );
};

export default HomeMain;