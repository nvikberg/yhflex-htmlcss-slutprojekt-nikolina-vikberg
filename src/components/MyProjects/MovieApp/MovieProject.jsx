import moviesPic from './movies.png';
import searchPic from './movieSearch.png';
import celebPic from './celebSearch.png';
import networkPic from './networkerrpor.png';
import notfoundPic from './notfound.png';


function MovieProject() {
    return (
        <>
            <div className="container">
                <div className='projectHeaderDiv'>
                    <p className='projectHeaderText'>Movie Search Engine</p>
                </div>
                <div className='wrapDivs'>


                    <div className='projectDescriptionDiv'>

                        <p className='projectDescriptionText'>
                            This was a really fun school project in my Advanced JavaScript class,
                            where we were given a project to create an online task board.
                            For realtime database I used Firestore and it held 4 main categories,
                            Assignment, Assigned, Team and Status. Since this was a fictional school project I choses
                            to create the task board for a team of superheroes which tasks are realted to solving the world

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

                        <img src={moviesPic} alt="superhero" className='portfolioItems-img' />


                    </div>

                    <div className='projectImgDiv'>
                        <img src={searchPic} alt="searchPic" className='portfolioItems' />
                        <img src={celebPic} alt="celebPic" className='portfolioItems' />
                        <img src={networkPic} alt="networkPic" className='portfolioItems' />
                        <img src={notfoundPic} alt="notfoundPic" className='portfolioItems' />

                    </div>
                </div>
            </div>



        </>);
}

export default MovieProject;