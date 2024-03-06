// Loader.js
import React from 'react';
import '../../Assets/index.css'; // Import loader styles

const Loader = ({text}) => {
    return (
        <div className="loader-container">
            <div>
                <img src='https://i.ibb.co/7v1r0QD/download.png'  width='200'/>
            </div>
            <div className="loader"></div>
            {text && <div className="loader-text">{text}</div>}
        </div>
    );
};

export default Loader;
