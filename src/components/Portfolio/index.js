import React, { useState } from 'react';
import Projects from '../Projects';

function Portfolio() {
    const [projects] = useState([



{
    name: 'Blog Spot',
    description: 'Blog app that allows users to create, update, and delete blog posts. Created using Node.js, Express.js, Handlebars, Bcrypt, MySQL, and Sequelize. Deployed using Heroku.',
    link: 'https://blogspot123-a0dddad8d899.herokuapp.com/',
},
{
    name: 'Spirit Commerce',
    description: 'A ecommerce backend that allows users to view, add, update, and delete products, categories, and tags. Created using Node.js, Express.js, MySQL, and Sequelize.',
    link: 'https://github.com/kaleikautakaoka/Spirit-Commerce',
},
{
    name: 'Organization Management',
    description: 'Employee tracking database that allows users to view, add, and update employee information. Created using Node.js, Inquirer, and MySQL2.',
    link: 'https://github.com/kaleikautakaoka/Organization-Management',
},
{
    name: 'My SVG',
    description: 'SVG generator that allows users to create SVGs using the command line. Created using Node.js, Inquirer, and Javascript.',
    link: 'https://github.com/kaleikautakaoka/MY-SVG',
},
{
    name: 'Readme Wizard',
    description: 'A readme generator that allows users to create a readme file using the command line. Created using Node.js, Inquirer, and Javascript.',
    link: 'https://github.com/kaleikautakaoka/Readme-Wizard',
},
{
    name: 'Make My Day',
    description: 'Calendar app that allows users to create a schedule and add events to their calendar. Created using HTML, CSS, Javascript, JQuery, and Moment.js.',
    link: 'https://kaleikautakaoka.github.io/Make-My-Day/',
},
{
    name: 'Whiz Quiz',
    description: 'A quiz app that allows users to test their knowledge of Javascript. Created using HTML, CSS, Javascript, and JQuery.',
    link: 'https://kaleikautakaoka.github.io/Whiz-Quiz/',
},
{
    name: 'Psychic Weather App',
    description: 'A simple weather app that uses the OpenWeather API to display the current weather and 5 day forecast for a city of the user\'s choice.',
    link: 'https://kaleikautakaoka.github.io/Psychic-Weather-App/',
},
{
    name: 'Uncrackable',
    description: 'Basic passwprd generator using Javascript',
    link: 'https://kaleikautakaoka.github.io/Uncrackable/',
},

    ]);

    return (
        <div>
          <div className="flex-row">
            {projects.map((project, idx) => (
              <Projects
                project={project}
                key={"project" + idx}
              />
            ))}
          </div>
        </div>
      );
}

export default Portfolio;
