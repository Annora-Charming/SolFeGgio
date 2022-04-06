import {useNavigate} from "react-router-dom";
import styles from './thSec1Lesson3.module.css';
import wobble from './assets/1pic.png';
import keys from './assets/2pic.png';
import notes from './assets/3pic.png';
import notesEndKeys from './assets/4pic.png';

function ThSec1Lesson3() {
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
                                    <h1>Занятие №3</h1>
                                </div>
                                <div className={styles.paragraph1}>
                                    <img width="30%" src={wobble}/>
                                    <div className={styles.verticalBox}>
                                        <h2>Клавиатура</h2>
                                        <p>Чтобы хорошо понимать, как музыканты сочиняют музыку, чтобы легко играть
                                            музыкальные произведения, нужно очень хорошо знать, как называются клавиши
                                            фортепиано.</p>
                                    </div>
                                </div>
                                <div className={styles.paragraph2}>
                                    <p>Вот так выглядит <b>КЛАВИАТУРА ФОРТЕПИАНО:</b></p>
                                    <img width="80%" src={keys}/>
                                    <p>Обрати внимание, что черные клавиши инструмента следуют в определенном порядке:
                                        чередуются две черные клавиши и три черных подряд. Благодаря этому порядку
                                        музыкант легко может найти нужную клавишу.</p>
                                </div>
                                <div className={styles.paragraph3}>
                                    <p>Пока мы поговорим только про <b>БЕЛЫЕ КЛАВИШИ</b>. И назовем их так:</p>
                                    <img width="80%" src={notes}/>
                                    <p>после чего порядок снова повторяется...</p>
                                </div>
                                <div className={styles.paragraph3}>
                                    <p>Клавиша «ДО» - это БЕЛАЯ клавиша ПЕРЕД двумя черными клавишами. А следом за ней
                                        расположились остальные клавиши:</p>
                                    <img width="80%" src={notesEndKeys}/>
                                    <p>На самом деле, это не совсем верно и мы потом поговорим почему. Сейчас для нас
                                        так будет проще.</p>
                                </div>
                                <button onClick={() => navigate("/exercises/exSec1/exSec1Lesson3")}>Задания к занятию
                                </button>
                                <button onClick={() => navigate("/theory/thSec1/thSec1Lesson4")}>Следующее занятие
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThSec1Lesson3;