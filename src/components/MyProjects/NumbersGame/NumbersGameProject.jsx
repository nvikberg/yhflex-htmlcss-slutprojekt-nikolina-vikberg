import numbersPic from "./numbers.png"
import nr1 from './n1.png'
import nr2 from './n2.png'
import nr3 from './n3.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAlignCenter, faAlignLeft, faDice} from '@fortawesome/free-solid-svg-icons'



function NumbersGameProject() {
    return ( <>
            <div className="container">
                <div className='projectHeaderDiv'>
                    <p className='projectHeaderText'>Numbers Game</p>
                </div>
                <div className='wrapDivs'>


                    <div className='projectDescriptionDiv'>

                        <p className='projectDescriptionText'>
                            This was a small project to create a numbers game. The program generates a random number and the user makes guesses.
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

                        <img src={numbersPic} alt="nrpic" className='portfolioItems-img' />

                    </div>

                    <div className='projectImgDiv'>
                        <img src={nr1} alt="nr1" className='portfolioItems' />
                        <img src={nr2} alt="nr2" className='portfolioItems' />
                        <img src={nr3} alt="nr3" className='portfolioItems' />
                        <FontAwesomeIcon icon={faDice} size="3x"/>

                    </div>
                </div>
            </div>



        </>);
}

export default NumbersGameProject;