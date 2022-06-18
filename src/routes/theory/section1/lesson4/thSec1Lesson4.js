import {useNavigate} from "react-router-dom";
import styles from './thSec1Lesson4.module.css';
import birds from './assets/1pic.png';
import keys from './assets/2pic.png';
import keys2 from './assets/3pic.png';
import keys3 from './assets/4pic.png';

function ThSec1Lesson4() {
    const navigate = useNavigate();
    return (
        <>
            <div className="wrapper">
                <div className="outerContent">
                    <div className="innerContent">
                        <div className="box">
                            <div className="lessonCard">
                                <div className="lessonTitle">
                                    <div className="backArrow" onClick={() => navigate("/theory/thSec1")}>
                                        <img width="10%" src="/backArrow.jpg"/>
                                    </div>
                                    <h1>Занятие №4</h1>
                                </div>
                                <div className={styles.paragraph1}>
                                    <img width="30%" src={birds}/>
                                    <div className={styles.verticalBox}>
                                        <h2>Октавы</h2>
                                        <p>На фортепианной клавиатуре много клавиш с <b>ОДИНАКОВЫМ</b> названием.</p>
                                        <p>Несколько клавиш «ДО», несколько клавиш «РЕ» и т.д.</p>
                                    </div>
                                </div>
                                <div className={styles.paragraph2}>
                                    <p>Расстояние между ближними <b>ОДИНАКОВЫМИ</b> клавишами (до-до; ми-ми; ляля и т.д.) называется <b>ОКТАВА</b>.</p>
                                    <img width="80%" src={keys}/>
                                </div>
                                <div className={styles.paragraph3}>
                                    <p>Октавы от клавиши <b>«ДО»</b>  до следующей <b>«ДО»</b> на фортепианной клавиатуре имеют свои названия</p>
                                    <p>Называть октавы нужно всегда с <b>ПЕРВОЙ</b> октавы – она находится <b>ПОСЕРЕДИНЕ</b> музыкального инструмента.</p>
                                    <img width="80%" src={keys2}/>
                                </div>
                                <div className={styles.paragraph3}>
                                    <p>От <b>ПЕРВОЙ ОКТАВЫ</b> считаются все остальные октавы</p>
                                    <p><b>Вверх</b> располагаются: <b>Вторая</b>, <b>Третья</b> и <b>Четвертая</b> октавы.</p>
                                    <p><b>Вниз</b> от первой следуют: <b>Малая</b>, <b>Большая</b>, <b>Контроктава</b> и <b>Субконтроктава</b>.</p>
                                    <img width="80%" src={keys3}/>
                                </div>
                                <button onClick={() => navigate("/exercises/exSec1/exSec1Lesson4")}>Задания к занятию
                                </button>
                                <button onClick={() => navigate("/theory/thSec1/thSec1Lesson5")}>Следующее занятие
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThSec1Lesson4;