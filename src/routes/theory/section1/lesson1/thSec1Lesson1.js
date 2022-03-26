import {useNavigate} from "react-router-dom";

function ThSec1Lesson1(){
    const navigate = useNavigate();
    return(
        <>
            <p onClick={() => navigate("/theory/thSec1")}>Назад</p>
            <h1>This is Lesson 1</h1>
        </>
    )
}
export default ThSec1Lesson1;