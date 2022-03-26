import {useNavigate} from "react-router-dom";

function ThSec1(){
    const navigate = useNavigate();
    return(
        <>
            <p onClick={() => navigate("/theory")}>Назад</p>
            <h1>List of lessons:</h1>
            <p onClick={() => navigate("/theory/thSec1/thSec1Lesson1")}>Lesson 1</p>
        </>
    )
}
export default ThSec1;