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
                    
                        </p>

                        <img src={fruit} alt="fruit" className='portfolioItems-img' />

                    </div>

                    <div className='projectImgDiv'>
                        <img src={laugh} alt="laugh" className='projectPhotos' />
                        <img src={share} alt="share" className='projectPhotos' />
                        <img src={nature} alt="nature" className='projectPhotos' />
                        <img src={sleep} alt="sleep" className='projectPhotos' />

                    </div>
                </div>
            </div>



        </>);
}


export default HealthAppProject;