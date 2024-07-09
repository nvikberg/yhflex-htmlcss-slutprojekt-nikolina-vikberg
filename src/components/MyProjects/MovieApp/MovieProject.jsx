import moviesPic from './movies.png';
import moviesPic from './mov.png';
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
                            JavaScript Project - Movie Portal

                            Film portal using API from themoviedb.org https://developer.themoviedb.org

                            This is a movie website that shows the top 10 highest ranked movies & top 10 most popular movies right now, it also has a user search function for movies and celeberities.

                            Description of movies will show when hovering over the film and on Celebrity search there is information on movies/tv in when hovering over their image.                            <ul>
                            <span>
                                 <li className='projectDescriptionText'>
                                    <a href="https://nvikberg.github.io/java23-js-slutprojekt-nikolina-vikberg/">
                                        GitHub pages
                                    </a>
                                    
                                </li>
                                </span>
                                <li>
                                    <a href="https://github.com/nvikberg/java23-js-slutprojekt-nikolina-vikberg.git">
                                    GitHub project
                                    </a>
                                </li>
                            </ul>
                        </p>

                        <img src={moviesPic} alt="superhero" className='portfolioItems-img' />


                    </div>

                    <div className='projectImgDiv'>
                        <img src={searchPic} alt="searchPic" className='projectPhotos' />
                        <img src={celebPic} alt="celebPic" className='projectPhotos' />
                        <img src={networkPic} alt="networkPic" className='projectPhotos' />
                        <img src={notfoundPic} alt="notfoundPic" className='projectPhotos' />

                    </div>
                </div>
            </div>



        </>);
}

export default MovieProject;