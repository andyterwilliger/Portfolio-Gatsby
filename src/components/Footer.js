import React from 'react';
import { FaGithub, faGithub, FaLinkedin, faLinkedin, FaStackOverflow, faStackOverflow} from 'react-icons/fa'
import '../styles/global.css'

function Footer() {
    return (
        <footer>
            <div id='icons'>
                <div id='github-i'>
                    <ul id = 'icons-ul'>
                        <div>
                            <li >
                            <a target = '_blank' href= 'https://github.com/andyterwilliger'>
                                <FaGithub size={42} className='icon'/>
                            </a>
                            </li>
                        </div>
                        <div id='linkedin-i'>
                            <li>
                            <a target = '_blank' href= 'https://www.linkedin.com/in/andy-terwilliger/'>
                            <FaLinkedin size={42} className='icon' />
                            </a>
                            </li>
                        </div>
                        <div id = 'stack-i'>
                            <li>
                            <a target = '_blank' href= 'https://stackoverflow.com/users/18311028/andy123'>

                                <FaStackOverflow size={42} className='icon'/>
                                </a>
                            </li>

                        </div>
                    </ul>
                </div>
            </div>
        </footer>
    )
}


export default Footer;