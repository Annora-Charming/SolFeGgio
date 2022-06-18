import {useNavigate} from "react-router-dom";
import styles from './exSec1Lesson2.module.css';

function ExSec1Lesson2() {
    const navigate = useNavigate();
    return (
        <>
            <div className="wrapper">
                <div className="outerContent">
                    <div className="innerContent">
                        <div className="box">
                            <div className="lessonCard">
                                <div className="lessonTitle">
                                    <div className="backArrow" onClick={() => navigate("/exercises/exSec1")}>
                                        <img width="10%" src="/backArrow.jpg"/>
                                    </div>
                                    <h1>Упражнения №2</h1>
                                </div>
                                <button onClick={() => navigate("/theory/thSec1/thSec1Lesson2")}>Теория к занятию</button>
                                <button onClick={() => navigate("/exercises/exSec1/exSec1Lesson3")}>Следующее занятие</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExSec1Lesson2;