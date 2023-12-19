import React from 'react';

import Form from './Form';
import '../style.css'

import ecco1 from '../images/ecco1.png';
import ecco2 from '../images/ecco2.png';
import ecco4 from '../images/ecco4.png';
import ecco6 from '../images/ecco6.jpeg';

function Home() {

    return (
        <div>

            <nav id='ecco'>
                <hr/>
                <ul>
                    <li><a href='#ecco' id='ecco-link'>ECCO DESIGNS</a></li>
                    <li><a href='#about' id='abt' className='nav-link'>About</a></li>
                    <li><a href='#work' className='nav-link'>Portfolio</a></li>
                    <li><a href='#contact' className='nav-link'>Contact</a></li>

                </ul>
                <hr/>
            </nav>

            <div >
                <img 
                src= { ecco1 } 
                alt='navbar pic'
                className='ecco-banner'
                />
             </div>

             <div  id='about' className='about-container'>
     
            {/* <h1 className='abt-head'>About</h1> */}
            <div className='con'>
             <img
                src={ ecco6 }
                alt='about pic 2 '
                className='about'
                id='ecco6'
                />
            <div className='about-p' id='p1'> 
            <h2>UNVEILING DIGITAL EXCELLENCE</h2>
                <p>We craft sleek, responsive websites that captivate your audience and drive results. Elevate your online presence with our seamless blend of creativity, functionality, and cutting-edge technology.</p>
            </div>

            </div>

            <div className='con'>
                <img
                src= { ecco2 }
                alt='about pic 1'
                className='about'
                id='ecco2'
                />

        <div className='about-p' id='p2'> 

        <h2>FROM CONCEPT TO CODE</h2>
        <p >We turn ideas into interactive experiences, ensuring your digital footprint leaves a lasting impression. Take the leap into the future of web design with our dedicated team – where innovation meets excellence, and your success is our priority.</p>
        </div>

        </div>   

             </div>

             <footer id='contact'>

                <img
                src={ ecco4 }
                alt='footer pic'
                className='footer'
                />

                <div className='formCon'>

                <Form />

                </div>
             </footer>



        </div>
    )
}

export default Home;