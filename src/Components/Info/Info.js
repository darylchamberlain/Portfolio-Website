import React from 'react';
import './Info.css';

class Info extends React.Component {
    render() {
        return(
            <div className="Info" >
                <div className="Address">
                    <p>Kenneth City, FL 33709</p>
                </div> 
                <div className="Phone">
                    <p>727-560-3387</p>
                </div>  
                <div className="Email">
                    <p>darylbills@yahoo.com</p>
                </div>  
            </div>
        )
    }
};

export default Info;
