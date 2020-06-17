import React from 'react';

import './Experience.css'

class Experience extends React.Component {
    render() {
        return (
            <div className="Summary">
                <h2>Professional Summary</h2>
                <p>Directing and implementing a broad range of revenue-generating design projects from conception
	               to launch. Readily translate business requirements into effective advertising campaigns.</p>
                <div className="Experience">
                    <h2>Experience</h2>
                        <div className="Manager">
                            <p>Art Manager</p>
                            <p>Hit Promotional Products Largo, FL - 2016 to 2020</p>
	                        <p>Coordinate with Executive staff to efficiently lead and administer creative design
	                        	projects in support of ongoing marketing and merchandising programs for national manufacturers.</p>
                        </div>
                        <div className="Supervisor">
                            <p>Art Supervisor</p>
                            <p>Hit Promotional Products Largo, FL - 2014 to 2016</p>
                        </div>
                        <div className="Designer">
                            <p>Graphic Designer</p>
                            <p>Hit Promotional Products Largo, FL - 2010 to 2014</p>
                        </div>
                        <div className="Artist">
                            <p>Production Artist</p>
                            <p>Hit Promotional Products Largo, FL - 2008 to 2010</p>
                        </div>
                </div>
            </div>           
            
        )
    }
}

export default Experience;