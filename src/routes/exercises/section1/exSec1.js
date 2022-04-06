import {useNavigate} from "react-router-dom";

function ExSec1() {
    const navigate = useNavigate();
    return (
        <>
            <div className="wrapper">
                <div className="innerContent">
                    <div className="box">
                        <div className="lessonsList">
                            <div className="lessonsListBox">
                                <p onClick={() => navigate("/exercises")}>Назад</p>
                                <h1>Нотная грамота. Упражнения:</h1>
                                <p onClick={() => navigate("/exercises/exSec1/exSec1Lesson1")}>Упражнения 1</p>
                                <p onClick={() => navigate("/exercises/exSec1/exSec1Lesson2")}>Упражнения 2</p>
                                <p onClick={() => navigate("/exercises/exSec1/exSec1Lesson3")}>Упражнения 3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExSec1;