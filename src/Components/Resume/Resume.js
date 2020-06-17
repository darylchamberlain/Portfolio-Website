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
                        <Info />
                    </div>
                    <div className="Skills">
                        <Skills />
                    </div>
                    <div className="Skills">
                        <Experience />
                    </div>
                    <div className="Skills">
                        <References />
                    </div>
            </div>
        )
    }
};

export default Resume;