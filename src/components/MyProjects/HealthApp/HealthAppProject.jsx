import laugh from './laugh.jpg'
import nature from './nature.jpg'
import fruit from './fruit.jpg'
import sleep from './sleep.jpg'
import share from './share.jpg'


function HealthAppProject() {
    return (
        <>
            <div className="container">
                <div className='projectHeaderDiv'>
                    <p className='projectHeaderText'>Wellness App</p>
                </div>
                <div className='wrapDivs'>


                    <div className='projectDescriptionDiv'>

                        <p className='projectDescriptionText'>
This is a mental health app that I'm developing together with a friend.
It's about finding balance between the important factors that helps you to be happy
More information coming soon.. 
                            <ul>
                                <li>
                                    <a href="https://nvikberg.github.io/JAVA23-AJS-slutprojekt-Sofia-Nikolina-Vikberg/" target="_blank" rel="noopener noreferrer">
                                        Link to my GitHub pages
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/nvikberg/JAVA23-AJS-slutprojekt-Sofia-Nikolina-Vikberg" target="_blank" rel="noopener noreferrer">
                                        Link to my GitHub project
                                    </a>
                                </li>
                            </ul>
                        </p>

                        <img src={nature} alt="nature" className='portfolioItems-img' />

                    </div>

                    <div className='projectImgDiv'>
                        <img src={laugh} alt="laugh" className='portfolioItems' />
                        <img src={share} alt="share" className='portfolioItems' />
                        <img src={fruit} alt="fruit" className='portfolioItems' />
                        <img src={sleep} alt="sleep" className='portfolioItems' />

                    </div>
                </div>
            </div>



        </>);
}


export default HealthAppProject;