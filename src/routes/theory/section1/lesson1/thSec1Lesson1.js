import {useNavigate} from "react-router-dom";
import firstPic from "./assets/1pic.png";
import bear from "./assets/2pic.png"
import girl from "./assets/3pic.png"
import bird from "./assets/4pic.png"
import styles from './thSec1Lesson1.module.css';

function ThSec1Lesson1() {
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
                                    <h1>Занятие №1</h1>
                                </div>
                                <div className={styles.paragraph1}>
                                    <img width="30%" src={firstPic}/>
                                    <div className={styles.verticalBox} style={{width: "50%"}}>
                                        <h2>Музыкальный звук</h2>
                                        <p>Звуки окружают нас повсюду. Мы слышим
                                            пение птиц, звонок будильника или шум машин на
                                            улице. </p>
                                        <p>Звуки бывают разные, поэтому мы можем
                                            услышать приближение поезда, узнать человека по
                                            голосу или различать звуки разных музыкальных
                                            инструментов.</p>
                                    </div>
                                </div>
                                <div className={styles.paragraph2}>
                                    <h2>Музыкальные звуки бывают:</h2>
                                    <div className={styles.horizontalBox}>
                                        <div className={styles.verticalBox}>
                                            <img width="20%" src={bear}/>
                                            <p>НИЗКИЕ звуки</p>
                                        </div>
                                        <div className={styles.verticalBox}>
                                            <img width="20%" src={girl}/>
                                            <p>СРЕДНИЕ звуки</p>
                                        </div>
                                        <div className={styles.verticalBox}>
                                            <img width="20%" src={bird}/>
                                            <p>ВЫСОКИЕ звуки</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.paragraph3} style={{border:"solid 3px black", fontSize:"200%"}}>
                                    <p><b><u>Регистр</u></b> - это высота звука</p>
                                </div>
                                <div className={styles.paragraph4}>
                                    <p><b>Высокий регистр</b> - это высокие звуки</p>
                                    <p><b>Средний регистр</b> - это средние звуки</p>
                                    <p><b>Низкий регистр</b> - это низкие звуки</p>
                                </div>
                                <button onClick={() => navigate("/exercises/exSec1/exSec1Lesson1")}>Задания к занятию</button>
                                <button onClick={() => navigate("/theory/thSec1/thSec1Lesson2")}>Следующее занятие</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThSec1Lesson1;