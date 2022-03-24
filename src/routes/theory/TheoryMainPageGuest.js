import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

function TheoryMainPageGuest() {
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
                    <div className="box">
                        <div className="infoCard">
                            <h3>Нотная грамота</h3>
                            <p>бла бла бла</p>
                            <button>Читать</button>
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