import React from 'react';
// import portfolioBackground from '../../assets/cover/portfolioBackground.jpg';

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav class="nav">
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
    </nav>
  );
}

export default Nav;







// import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';
// import portfolioBackground from '../../assets/cover/portfolioBackground.jpg';

// function Nav(props) {

//     const {
//         pages = [],
//         setCurrentPage,
//         currentContent,
//     } = props;

//     useEffect(() => {
//         document.title = capitalizeFirstLetter(currentContent.name);
//     }, 
//     [currentContent]);

//     return (
//         <nav>\<img src={portfolioBackground}
//         alt="portfolio background">
//         </img>
//             <ul className="flex-row">
//                 {pages.map((Page) => (
//                     <li
//                         className={`mx-1 ${
//                             currentContent.name === Page.name && 'navActive'
//                             }`}
//                         key={Page.name}
//                     >
//                         <span
//                             onClick={() => setCurrentPage(Page)}
//                         >
//                             {capitalizeFirstLetter(Page.name)}
//                         </span>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );

// }

//     export default Nav;