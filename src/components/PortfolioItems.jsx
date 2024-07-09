import superheroPic from './MyProjects/superheroes.png';
import moviesPic from './MyProjects/movies.png';
import numbersPic from './MyProjects/numbers.png';
import { useNavigate } from 'react-router-dom';


const portfolioData = [
    {
        route: './SuperHeroProject',
        src: superheroPic,
        title: 'Online Taskboard',
    },
    {
        route: './MovieProject',
        src: moviesPic,
        title: 'Movie Seacrh Engine',

    },
    {
        route: './NumbersGameProject',
        src: numbersPic,
        title: 'Numbers Game',

    },
    {
        route: './HealthAppProject',
        src: numbersPic,
        title: 'Health App',

    }


]

function PortfolioItems() {

    const navigate = useNavigate()

    const handleClick = (route) => {
        navigate(route)
    };


    return (

        <div className="myWork">
            {portfolioData.map((item, index) => (
                <div className='portfolioItems' key={index} onClick={()=> handleClick(item.route)}>
                  {item.src && (
                  <>
                    <div className="projectHeaderStart">{item.title}</div>
                            <img src={item.src} alt={item.title} />
                        </>
                )}
                  
                  
                    </div>
            ))}
        </div>
    );
}

export default PortfolioItems;