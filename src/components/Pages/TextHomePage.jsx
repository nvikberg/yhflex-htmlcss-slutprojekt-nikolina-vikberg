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
               <span> Hi. I'm Nikolina, </span>
                <p> <span>a
                Swede, a Yogi and a &lt;coder&gt; student.</span></p>
            </p>
        </div>
    );
}

export default Hello;