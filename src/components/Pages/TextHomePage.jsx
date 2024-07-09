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
            <p className="textHome">
               <span> Hi. I'm Nikolina, </span>
                <p className="textHome2"> <span>a
                Swede, a Yogi and a &lt;coder&gt; student.</span></p>
            </p>
        </div>
    );
}

export default Hello;