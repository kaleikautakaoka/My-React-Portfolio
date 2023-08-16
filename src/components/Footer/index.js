import React from 'react';

function Footer() {
    
        const icons = [
          {
            name: 'discord',
            link: 'https://discord.com/channels/@me',
          },
          {
            name: 'github',
            link: 'https://github.com/kaleikautakaoka',
          },
            {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/sachi-undefined-06a01b243/'
            },
            {
            name: 'stack-overflow',
            link: 'https://stackoverflow.com/users/22385744/kaleikautakaoka'
            },

        ]

        return (
            <footer className="flex-row px-1">
                {icons.map(icon =>
                (
                    <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
                )
                ) }
            </footer>
            );
        }

export default Footer;