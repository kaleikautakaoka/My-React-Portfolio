
import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import portfolioBackground from '../../assets/cover/portfolioBackground.jpg';

function Nav(props) {

    const {
        pages = [],
        setCurrentPage,
        currentContent,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentContent.name);
    }, 
    [currentContent]);

    return (
        <nav>\<img src={portfolioBackground}
        alt="portfolio background">
        </img>
            <ul className="flex-row">
                {pages.map((Page) => (
                    <li
                        className={`mx-1 ${
                            currentContent.name === Page.name && 'navActive'
                            }`}
                        key={Page.name}
                    >
                        <span
                            onClick={() => setCurrentPage(Page)}
                        >
                            {capitalizeFirstLetter(Page.name)}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );

}

    export default Nav;