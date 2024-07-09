import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import Layout from "./Layout"
import Portfolio from "./Portfolio"
import ErrorPage from "./ErrorPage"
import SuperHeroProject from "./MyProjects/SuperHeroProject"
import MovieProject from "./MyProjects/MovieProject"
import NumbersGameProject from "./MyProjects/NumbersGameProject"
import HealthAppProject from "./MyProjects/HealthAppProject"
import LinkedIn from "./linkedIn"

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
                    <Route path="http://www.linkedin.com/in/nikolina-vikberg-a368198b" element={<LinkedIn />} /> 



                </Route>
            </Routes>
        </BrowserRouter>



    </div>)
}