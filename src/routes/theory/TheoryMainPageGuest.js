import {useNavigate} from "react-router-dom";

function TheoryMainPageGuest() {
    const navigate = useNavigate();
    return (
        <div className="wrapper">
            <div className="outerContent">
                <div className="intro">
                    <div className="introText">
                        <h3>Учебник</h3>
                        <p>В этом разделе находится огромное количество теоретического материала, полезного при освоении
                            сольфеджио.</p>
                    </div>
                    <img src="../../../public/Hippo.png"/>
                </div>
                <div className="innerContent">
                    <p onClick={() => navigate("/")}>Назад</p>
                    <div className="box">
                        <div className="infoCard">
                            <h3>Нотная грамота</h3>
                            <p>бла бла бла</p>
                            <button onClick={() => navigate("/theory/thSec1")}>
                                Читать
                            </button>
                        </div>
                        <div className="infoCard">
                            <h3>Интервалы</h3>
                            <p>бла бла бла</p>
                            <button>Читать</button>
                        </div>
                    </div>
                    <div className="box">
                        <div className="infoCard">
                            <h3>Аккорды</h3>
                            <p>бла бла бла</p>
                            <button>Читать</button>
                        </div>
                        <div className="infoCard">
                            <h3>Тональности</h3>
                            <p>бла бла бла</p>
                            <button>Читать</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TheoryMainPageGuest;