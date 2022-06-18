import {useNavigate} from "react-router-dom";
import styles from './thSec1Lesson5.module.css';
import pic1 from "./assets/1pic.png";
import pic2 from "./assets/2pic.png";
import pic3 from "./assets/3pic.png";
import pic4 from "./assets/4pic.png";
import pic5 from "./assets/5pic.png";
import pic6 from "./assets/6pic.png";
import pic7 from "./assets/7pic.png";
import pic8 from "./assets/8pic.png";
import pic9 from "./assets/9pic.png";
import pic10 from "./assets/10pic.png";
import pic11 from "./assets/11pic.png";

function ThSec1Lesson5() {
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
                                    <h1>Занятие №5</h1>
                                </div>
                                <div className={styles.paragraph1}>
                                    <div className={styles.verticalBox}>
                                        <h2>Ноты</h2>
                                        <p>Музыку можно записать, чтобы ее мог исполнить другой музыкант.</p>
                                    </div>
                                </div>
                                <div className={styles.paragraph2}>
                                    <p>Записывается музыка специальными ЗНАКАМИ, которые обозначают, что необходимо
                                        сделать исполнителю: играть тихо или громко, играть длинный звук или короткий,
                                        сыграть музыкальный фрагмент один раз или его повторить и так далее.</p>
                                    <p>Знаков в музыкальном тексте много и каждый имеет свое значение.</p>
                                </div>
                                <h2>Ноты на нотоносце</h2>
                                <div className={styles.paragraph3}>
                                    <p>Все клавиши фортепиано можно обозначить нотами, которые записываются на <b>НОТНОМ
                                        СТАНЕ</b> или <b>НОТОНОСЦЕ</b>. Нотный стан представляет из себя пять линеечек:
                                        самая нижняя линейка - первая, самая верхняя - пятая.</p>
                                    <img width="30%" src={pic1}/>
                                </div>
                                <div className={styles.paragraph3}>
                                    <p>Ноты могут находиться на линейках, между линеек, под первой линейкой и над
                                        пятой:</p>
                                    <div className={styles.horizontalBox}>
                                        <div className={styles.verticalBox}>
                                            <p>Ноты между линейками</p>
                                            <img width="30%" src={pic2}/>
                                        </div>
                                        <div className={styles.verticalBox}>
                                            <p>Ноты на линейках</p>
                                            <img width="30%" src={pic3}/>
                                        </div>
                                        <div className={styles.verticalBox}>
                                            <p>Нота под первой линейкой</p>
                                            <img width="30%" src={pic4}/>
                                        </div>
                                        <div className={styles.verticalBox}>
                                            <p>Нота над пятой линейкой</p>
                                            <img width="30%" src={pic5}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.paragraph3}>
                                    <p>Если пяти линеечек не хватает (что бывает довольно часто), используются дополнительные линейки. их считают от основного нотного стана: первая дополнительная линейка сверху (или снизу), вторая, третья и т.д.</p>
                                    <div className={styles.horizontalBox}>
                                        <div className={styles.verticalBox}>
                                            <p>Ноты на дополнительных линейках сверху и снизу</p>
                                            <img width="30%" src={pic6}/>
                                        </div>
                                        <div className={styles.verticalBox}>
                                            <p>Ноты над и под дополнительными линейками</p>
                                            <img width="30%" src={pic7}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.paragraph3}>
                                    <p>Если ноты написаны по порядку вверх, значит нужно нажимать белые клавиши по порядку вправо (вверх).</p>
                                </div>
                                <button onClick={() => navigate("/exercises/exSec1/exSec1Lesson5")}>Задания к занятию
                                </button>
                                <button onClick={() => navigate("/theory/thSec1/thSec1Lesson6")}>Следующее занятие
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThSec1Lesson5;