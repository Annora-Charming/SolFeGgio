import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import React from "react";

function MainPageGuest() {
    const [firstNumber, setFirstNumber] = React.useState(0);
    const [secondNumber, setSecondNumber] = React.useState(0);
    const [result, setResult] = React.useState("0 yet");

    // async function handleSubmit(e) {
    //     let message = [firstNumber, secondNumber]
    //     const response = await fetch("http://localhost:3001/?q=" + message);
    //     setResult(10);
    //     console.log(result, await response.json())
    //     e.preventDefault();
    // }

    async function getResult() {
        let message = [firstNumber, secondNumber]
        const response = await fetch("http://localhost:3001/?q=" + message);
        setResult(await response.json());
    }

    return (
        <div className="wrapper">
            <Header/>
            <NavBar/>
            <div className="outerContent">
                <div className="intro">
                    <div className="introText">
                        <h3>О SolFeGgio</h3>
                        <p>SolFeGgio - это платформа для самостоятельного изучения сольфеджио. Здесь можно найти теоретический
                            материал и практические задания для его запоминания.</p>
                    </div>
                    <img src="../../public/Hippo.png" alt="hippo"/>
                </div>
                {/*<form onSubmit={handleSubmit}>*/}
                {/*    <p>Summ these numbers</p>*/}
                {/*    <input value={firstNumber} onChange={e=>setFirstNumber(e.target.value)}/>*/}
                {/*    <input value={secondNumber} onChange={e=>setSecondNumber(e.target.value)}/>*/}
                {/*    <button type="submit">Send</button>*/}
                {/*</form>*/}
                <div>
                    <p>Summ these numbers</p>
                    <input value={firstNumber} onChange={e=>setFirstNumber(e.target.value)}/>
                    <input value={secondNumber} onChange={e=>setSecondNumber(e.target.value)}/>
                    <button onClick={() => getResult()}>Send</button>
                </div>
                <p>Summ is {result}</p>
                <div className="innerContent">
                    <div className="box">
                        <div className="infoCard">
                            <h3>Учебник</h3>
                            <p>Я хочу изучить что-нибудь новое или повторить то, что уже знаю.</p>
                            <button>Читать</button>
                        </div>
                        <div className="infoCard">
                            <h3>Задачник</h3>
                            <p>Я хочу проверить свои знания, решая упражнения или тесты.</p>
                            <button>Решать</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default MainPageGuest;