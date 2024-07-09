import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/HomePage"
import Contact from "./Pages/ContactPage"
import Layout from "./Layout"
import Portfolio from "./Pages/PortfolioPage"
import ErrorPage from "./Pages/ErrorPage"
import SuperHeroProject from "./MyProjects/TaskBoard/SuperHeroProject"
import MovieProject from "./MyProjects/MovieApp/MovieProject"
import NumbersGameProject from "./MyProjects/NumbersGame/NumbersGameProject"
import HealthAppProject from "./MyProjects/HealthApp/HealthAppProject"

export function App() {
    console.log("hello")




    return (<div className="main-content">

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="superheroproject" element={<SuperHeroProject />} />
                    <Route path="movieproject" element={<MovieProject />} />
                    <Route path="numbersgameproject" element={<NumbersGameProject />} />
                    <Route path="healthappproject" element={<HealthAppProject />} />
                    <Route path="*" element={<ErrorPage />} />



                </Route>
            </Routes>
        </BrowserRouter>



    </div>)
}