import React from 'react';
import {ReactComponent as LogoComponent} from 'assets/images/logo.svg';

import './style.css';

function Header() {
    return (
        <div className='topnav'>
            <LogoComponent />
        </div>
    );
}

export default Header;