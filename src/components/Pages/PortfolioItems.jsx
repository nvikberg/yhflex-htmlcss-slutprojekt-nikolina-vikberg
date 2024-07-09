import superheroPic from '../MyProjects/TaskBoard/superheroes.png';
import moviesPic from '../MyProjects/MovieApp/mov.png';
import dice2 from '../MyProjects/NumbersGame/dice2.jpg';
import fruit from '../MyProjects/HealthApp/fruit.jpg'
import { useNavigate } from 'react-router-dom';


const portfolioData = [
    {
        route: './HealthAppProject',
        src: fruit,
        title: 'Health App',
    },
    {
        route: './MovieProject',
        src: moviesPic,
        title: 'Movie Search Engine',

    },
    {
        route: './SuperHeroProject',
        src: superheroPic,
        title: 'Online Taskboard',
    },

    {
        route: './NumbersGameProject',
        src: dice2,
        title: 'Numbers Game',

    }
   


]

function PortfolioItems() {

    const navigate = useNavigate()

    const handleClick = (route) => {
        navigate(route)
    };


    return (
        <>
<div className='portfolioHeaderDiv'>
<p className='headerText'>My Work</p>
</div>
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
        </>
    );
}

export default PortfolioItems;