import React from 'react';
import './NavBar.css';

class NavBar extends React.Component{
    render(){
        return (
            <div className="NavBar">
                <a href="./index.html">Home</a>
                <a href="https://www.linkedin.com/in/daryl-chamberlain-574a88122/">Linkedin</a>
                <a href="./portfolio.html">Portfolio</a>
                <p>Daryl Chamberlain</p>
            </div>
        )
    }
}

export default NavBar;