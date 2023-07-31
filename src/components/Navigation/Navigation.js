import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

const Navigation =()=>{
    return(
        <div className='navigation-container'>
        <div className='admin'>
          <p><Link to="/">Logo</Link></p>
            <p>Admin: Pwesh</p> 
        </div>
        <div className='navigation'>
            <ul>
                <li>Home</li>
                <li>Contact Me</li>
            </ul>
        </div>

    </div>
    )
}

export default Navigation; 