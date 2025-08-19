import React from 'react';
import {ReactComponent as LogoComponent} from '../../assets/images/logo.svg';

import '../Header/style.css';

function Header() {
    return (
        <div className='topnav'>
            <LogoComponent />
        </div>
    );
}

export default Header;