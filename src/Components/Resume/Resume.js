import React from 'react';

import './Resume.css';

import Info from '../Info/Info';

import Skills from '../Skills/Skills';

import Experience from '../Experience/Experience';

import References from '../References/References';

class Resume extends React.Component {
    render() {
        return (
            <div className="Resume">
                <h2>Resume</h2>
                    <div className="Info">
                    <h2>Info</h2>
                        <Info />
                    </div>
                    <div className="Skills">
                    <h2>Skills</h2>
                        <Skills />
                    </div>
                    <div className="Skills">
                    <h2>Experience</h2>
                        <Experience />
                    </div>
                    <div className="Skills">
                    <h2>References</h2>
                        <References />
                    </div>
            </div>
        )
    }
};

export default Resume;