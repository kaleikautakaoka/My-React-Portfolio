import React, { PureComponent } from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';
// import { capitalizeFirstLetter } from './utils/helpers';



class Container extends PureComponent {
   state = {
    tabs: ['About', 'Portfolio', 'Contact', 'Resume'],
    currentTab: 'About',
    };
    addTab = (tab) => { 
        let tabs = [this.state.tabs];

        if (tabs.indexOf(tab) === -1) {
            tabs.push(tab);
        }
        this.setState({ tabs, currentTab: tab });
    };
    removeTab = (tab) => {
        let tabs = [this.state.tabs];
        let index = tabs.indexOf(tab);

        if (index !== -1) {
            tabs.splice(index, 1);
        }
        this.setState({ tabs, currentTab: tabs[0] });
    };

    navigationButtons(){
        return  <ol id="navBar">
                  <li onClick={()=> this.addTab("About")}>About</li>
                  <li onClick={()=> this.addTab("Experience")}>Experience</li>
                  <li onClick={()=> this.addTab("Work")}>Work</li>
                  <li onClick={()=> this.addTab("Contact")}>Contact Me</li>
                </ol>
      }

     renderPage = () => { 
        switch (this.state.currentPage) {
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


    render() {
        return (
           <section>
            
           </section>
        );
    }
}

export default Container;
