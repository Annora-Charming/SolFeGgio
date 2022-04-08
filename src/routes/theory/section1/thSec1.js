import {useNavigate} from "react-router-dom";

function ThSec1() {
    const navigate = useNavigate();
    return (
        <>
            <div className="wrapper">
                <div className="outerContent">
                    <div className="innerContent">
                        <div className="box">
                            <div className="lessonsList">
                                <div className="lessonsListBox">
                                    <p onClick={() => navigate("/theory")}>Назад</p>
                                    <h1>Нотная грамота. Занятия:</h1>
                                    <p onClick={() => navigate("/theory/thSec1/thSec1Lesson1")}>Занятие 1</p>
                                    <p onClick={() => navigate("/theory/thSec1/thSec1Lesson2")}>Занятие 2</p>
                                    <p onClick={() => navigate("/theory/thSec1/thSec1Lesson3")}>Занятие 3</p>
                                    <p onClick={() => navigate("/theory/thSec1/thSec1Lesson4")}>Занятие 4</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThSec1;