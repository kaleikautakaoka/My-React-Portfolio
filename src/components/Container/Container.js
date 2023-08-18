import React from 'react';
// import React, { PureComponent } from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';
import { capitalizeFirstLetter } from '../../utils/helpers';
import ContainerContent from '../ContainerContent/containerContent';


     function Container({ currentContent }) {

   const renderPage = () => { 
        switch (currentContent.name) {
            case 'About':
                return <About />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            default:
                return <About />;
        }
    };


 
        return (
           <section>
            <h2>{capitalizeFirstLetter(currentContent.name)}</h2>
              <ContainerContent>{renderPage()}</ContainerContent>
           </section>
        );
}

export default Container;
