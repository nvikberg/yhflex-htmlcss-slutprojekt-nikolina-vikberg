import imageOfMe from './jag2.jpg';

export function Contact() {
    return (<>
        <img src={imageOfMe} className="profileImg" alt="imageOfMe" />
        <p>Hej! I'm Nikolina. A Yogi, a climber, a designer and a coder
        </p>
    </>
    );
}

export default Contact;