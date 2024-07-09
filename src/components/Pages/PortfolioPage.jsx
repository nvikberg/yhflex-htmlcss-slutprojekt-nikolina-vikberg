import MovieProject from "../MyProjects/MovieApp/MovieProject";
import SuperHeroProject from "../MyProjects/TaskBoard/SuperHeroProject";
import NumbersGameProject from "../MyProjects/NumbersGame/NumbersGameProject"
import HealthAppProject from "../MyProjects/HealthApp/HealthAppProject";

function Portfolio() {
    return ( 
        <>
        <SuperHeroProject></SuperHeroProject>
        <MovieProject></MovieProject>
        <NumbersGameProject></NumbersGameProject>
        <HealthAppProject></HealthAppProject>
        </>
     );
}

export default Portfolio;