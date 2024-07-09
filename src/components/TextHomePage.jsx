import { useNavigate } from "react-router-dom";

function Hello() {


    function aboutMeClick () {
        
    const navigate = useNavigate()


    const aboutMeClick = (route) => {
        navigate('./About Me')
    };


    }


    return (
        <div className="startPage">
            <p className="Nikolina2">
                Hi. I'm Nikolina, <br/>a
                Swede a Yogi & a &lt;coder&gt; student.
            </p>
            <button onClick={aboutMeClick}></button>
        </div>
    );
}

export default Hello;