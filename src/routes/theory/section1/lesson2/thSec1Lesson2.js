import {useNavigate} from "react-router-dom";
import styles from './thSec1Lesson2.module.css';
import piano from './assets/1pic.png';
import keys from './assets/2pic.png';
import upArrow from './assets/3pic.png';
import downArrow from './assets/4pic.png';

function ThSec1Lesson2() {
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
                                    <h1>Занятие №2</h1>
                                </div>
                                <div className={styles.paragraph1}>
                                    <img width="30%" src={piano}/>
                                    <div className={styles.verticalBox}>
                                        <h2>Звуки на клавиатуре фортепиано</h2>
                                        <p>Знать клавиатуру фортепиано очень важно!</p>
                                        <p>Особенно хорошо учить фортепианную клавиатуру нужно, если ты учишься играть на другом музыкальном инструменте!</p>
                                    </div>
                                </div>
                                <div className={styles.paragraph2}>
                                    <p>Нажимая клавиши в левой части клавиатуры, ты услышишь НИЗКИЕ звуки,</p>
                                    <p>В правой части клавиатуры ты услышишь ВЫСОКИЕ звуки,</p>
                                    <p>А в средней части клавиатуры находятся СРЕДНИЕ звуки:</p>
                                </div>
                                <div className={styles.paragraph3}>
                                    <div className={styles.horizontalBox} style={{width:"100%"}}>
                                        <p>НИЗКИЕ звуки</p>
                                        <p>СРЕДНИЕ звуки</p>
                                        <p>ВЫСОКИЕ звуки</p>
                                    </div>
                                    <img src={keys} width="80%"/>
                                </div>
                                <div className={styles.paragraph3}>
                                    <p>Когда музыкант движется по клавиатуре <i>слева направо</i>,</p>
                                    <p style={{alignSelf:"right"}}>говорят, что он движется ВВЕРХ.</p>
                                    <img src={keys} width="80%"/>
                                    <div className={styles.horizontalBox}>
                                        <p>ВВЕРХ</p>
                                        <img src={upArrow} width="80%"/>
                                    </div>
                                </div>
                                <div className={styles.paragraph3}>
                                    <p>Когда музыкант движется по клавиатуре <i>справа налево</i>,</p>
                                    <p style={{alignSelf:"right"}}>говорят, что он движется ВНИЗ.</p>
                                    <img src={keys} width="80%"/>
                                    <div className={styles.horizontalBox}>
                                        <img src={downArrow} width="80%"/>
                                        <p>ВНИЗ</p>
                                    </div>
                                </div>
                                <button onClick={() => navigate("/exercises/exSec1/exSec1Lesson2")}>Задания к занятию</button>
                                <button onClick={() => navigate("/theory/thSec1/thSec1Lesson3")}>Следующее занятие</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThSec1Lesson2;