import imageOfMe from './jag2.jpg';

export function Contact() {
    return (<>
    <div className='contactDiv'>
        <img src={imageOfMe} className="profileImg" alt="imageOfMe" />
        <p className='contactText'>Hej! 
            I'm Nikolina, a Java Developer student on my second year.
            My favorite programming-language is JavaScript and my goal is to work as a full stack developer.
            When I'm not studying or working you can find me either at the yoga studio,
            or in the forest sitting on a tree stump eating a bulle (that's a cinnamon bun in swedish).
            <br/><br/>If you or your company are looking for a happy and engaging new team-member, please feel free to reach out.
            I'm searching for an internship for spring semester 2025!
        </p>
        </div>
    </>
    );
}

export default Contact;