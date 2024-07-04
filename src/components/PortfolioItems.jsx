import superheroPic from './MyProjects/superheroes.png';
import moviesPic from './MyProjects/movies.png';
import numbersPic from './MyProjects/numbers.png';
import { useNavigate } from 'react-router-dom';

function PortfolioItems() {

    const navigate = useNavigate()

    const handleClick = (route) => {
        navigate(route)
    };


    return (

        <div className="myWork">
            <div className="portfolioItems" onClick={() => handleClick('./SuperHeroProject')}>
                <img src={superheroPic} alt="superhero" />
            </div>
            <div className="portfolioItems" onClick={() => handleClick('./MovieProject')}>
                <img src={moviesPic} alt="movies" />
            </div>
            <div className="portfolioItems" onClick={() => handleClick('./NumbersGameProject')}>
                <img src={numbersPic} alt="numbersPic" />
            </div>
            <div className="portfolioItems" onClick={() => handleClick('./HealthAppProject')}>
                <h1>img coming soon...</h1>
            </div>
        </div>
    );
}

export default PortfolioItems;