import React from 'react';
import portfolioBackground from '../../assets/cover/portfolioBackground.jpg';

function Header(props) {

    return (
        <header className="flex-row space-between px-1">
            <h1>Hi! I'm Sachi</h1>
            <img src={portfolioBackground}
                alt="portfolio background">
                </img>
                {props.children}
        </header>
    );
}

export default Header;
