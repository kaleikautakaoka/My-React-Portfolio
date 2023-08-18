import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

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
        <nav>
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