import React from 'react';

import './Resume.css';

import Skills from '../Skills/Skills';

import Experience from '../Experience/Experience';

import References from '../References/References';

class Resume extends React.Component {
    render() {
        return (
            <div className="Resume">
                <Skills />
                <Experience />
                <References />
            </div>
        )
    }
};

export default Resume;