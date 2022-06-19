

import React from "react";
import './header-style.css'
import EarthIcon from '../img/earth.png';

export default function Header() {
    return (
        <div className='header'>
            <div className="header-intro">
                <img src={EarthIcon}  />
                <span>my travel journey</span>
            </div>
        </div>
    )
}



