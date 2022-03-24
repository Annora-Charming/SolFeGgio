function Home(){
    return(
        <div className="outerContent">
            <div className="intro">
                <div className="introText">
                    <h3>О SolFeGgio</h3>
                    <p>SolFeGgio - это платформа для самостоятельного изучения сольфеджио. Здесь можно найти
                        теоретический
                        материал и практические задания для его запоминания.</p>
                </div>
                <img src="../../public/Hippo.png" alt="hippo"/>
            </div>
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
    );
}
export default Home;