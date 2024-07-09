import superheroPic from './superheroes.png';
import donePic from './done.png';
import toDoPic from './ToDo.png';
import InProgressPic from './InProgress.png';
import firebase from './firebase.png';


function SuperHeroProject() {
    return (
        <>
            <div className="container">
                <div className='projectHeaderDiv'>
                    <p className='projectHeaderText'>Online Task Board</p>
                </div>
                <div className='wrapDivs'>


                    <div className='projectDescriptionDiv'>

                        <p className='projectDescriptionText'>
                            This was a really fun school project in my Advanced JavaScript class,
                            where we were given a project to create an online task board.
                            For realtime database I used Firestore and it held 4 main categories,
                            Assignment, Assigned, Team and Status. Since this was a fictional school project I choses
                            to create the task board for a team of superheroes which tasks are realted to solving the world
                        </p>

                        <img src={superheroPic} alt="superhero" className='portfolioItems-img' />

                        {/* <ul>
              <link rel="stylesheet" href="https://nvikberg.github.io/JAVA23-AJS-slutprojekt-Sofia-Nikolina-Vikberg/" />
              <link rel="stylesheet" href="https://github.com/nvikberg/JAVA23-AJS-slutprojekt-Sofia-Nikolina-Vikberg" />
              </ul>  */}

                    </div>

                    <div className='projectImgDiv'>
                        <img src={toDoPic} alt="todo" className='projectPhotos' />
                        <img src={InProgressPic} alt="inprogress" className='projectPhotos' />
                        <img src={donePic} alt="done" className='projectPhotos' />
                        <img src={firebase} alt="firebase" className='projectPhotos' />

                    </div>
                </div>
            </div>



        </>);
}

export default SuperHeroProject;