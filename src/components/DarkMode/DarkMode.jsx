import React from 'react';
import './DarkMode.css';

function DarkMode({ mode, handleModeChange }) {
    return (
        <div onClick={handleModeChange}>
            {mode ? <div className="dark-mode" style={{backgroundColor: "yellow"}}><i className="far fa-lightbulb bulb-on-icon"></i></div> : <div className="dark-mode" style={{backgroundColor: "white"}}><i className="fas fa-lightbulb bulb-off-icon"></i></div>}
        </div>
    );
}
export default DarkMode
