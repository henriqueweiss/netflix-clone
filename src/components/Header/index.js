import React from 'react';
import './Header.css'

function Header ({black}) {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="Netflix"/>
                </a>
            </div>

            <div className="header--user">
                <a href="/">
                </a>
            </div>
        </header>
    )
}

export default Header;