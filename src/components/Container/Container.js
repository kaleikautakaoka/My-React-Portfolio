import React, { useState } from 'react';
// import React, { PureComponent } from 'react';
import Nav from '../Nav';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';
import { capitalizeFirstLetter } from '../../utils/helpers';
// import ContainerContent from '../ContainerContent/containerContent'; 

export default function Container() {
    const [currentContent, setCurrentPage] = useState('About');


   const renderPage = () => { 
        if (currentContent === 'About') {
            return <About />;
        }
        if (currentContent === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentContent === 'Contact') {
            return <Contact />;
        }
        if (currentContent === 'Resume') {
            return <Resume />;
        }

    };

     const handlePageChange = (page) => setCurrentPage(page);
 
        return (
            <div>
                <Nav currentContent={currentContent} handlePageChange={handlePageChange} /> 
           <section>
            <h2>{capitalizeFirstLetter(currentContent.name)}</h2>
              {renderPage()}
           </section>
              </div>
        );
    }
