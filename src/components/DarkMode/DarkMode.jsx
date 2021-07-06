import React from 'react';
import './DarkMode.css'

function DarkMode() {
    return (
        <div className="dark-mode">
            {false ? <i class="far fa-sun" style={{color: "#f9d71c"}}></i> : <i class="fas fa-moon" style={{color: "black"}}></i>}
        </div>
    );
}
export default DarkMode
