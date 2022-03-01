import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function TheoryFirstSectionPageGuest() {
    return (
        <div className="wrapper">
            <Header/>
            <NavBar/>
            <div className="outerContent">
                <div className="innerContent">
                    <div className="lessonsList">
                        <div className="lessonsListBox">
                            <h3>Нотная грамота</h3>
                            <p>Бла бла бла</p>
                            <a href="">Занятие 1</a>
                            <a href="">Занятие 2</a>
                            <a href="">Занятие 3</a>
                            <a href="">Занятие 4</a>
                            <a href="">Занятие 5</a>
                            <a href="">Занятие 6</a>
                            <a href="">Занятие 7</a>
                            <a href="">Занятие 8</a>
                        </div>
                        <button>Упражнения</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default TheoryFirstSectionPageGuest;