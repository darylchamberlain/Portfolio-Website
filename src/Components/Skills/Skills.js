import React from 'react';
import './Skills.css';

class Skills extends React.Component {
    render() {
        return (
            <div className="Skills">
                <div className="Container">
                    <div className="Adobe Line">
                        <p className="Text">Adobe</p>  
                    </div>   
                </div>
                <div className="Container">
                    <div className="Office Line">
                        <p className="Text">Office</p>  
                    </div>   
                </div>
                <div className="Container">
                     <div className="Coding Line">
                         <p className="Text">Coding</p>  
                     </div>   
                 </div>
            </div>
        )
    }
}

export default Skills;