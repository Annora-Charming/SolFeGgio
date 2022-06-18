import React from "react";
import {useNavigate} from 'react-router-dom';

function AuthRegPage() {
    const [isAuth, setIsAuth] = React.useState(true);
    const [login, setLogin] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errorText, setErrorText] = React.useState("");
    const [testResult, setTestResult] = React.useState("");
    const navigate = useNavigate();

    async function authentication() {
        setTestResult("");
        if ((login === "") || (password === "")) {
            setTestResult("Оба поля должны быть заполнены");
        } else {
            let info = [login, password];
            const response = await fetch('http://localhost:3001/auth/?q=' + info);
            const res = await response.json();
            if (res === "Что-то пошло не так. Попробуйте еще раз.") {
                setTestResult("Что-то пошло не так. Попробуйте еще раз.");
            } else if (res === "Такого пользователя не существует!") {
                setTestResult("Такого пользователя не существует!");
            } else if (res === "Неверный пароль") {
                setTestResult("Неверный пароль");
            }
            else {
                setTestResult(res); //пока что приходит токен
            }
        }
    }

    async function registration() {
        setTestResult("");
        let info = [login, email, password, 0];
        if ((login === "") || (email === "") || (password === "")) {
            setTestResult("Все поля должны быть заполнены");
        } else if (errorText === "") {
            const response = await fetch('http://localhost:3001/reg/?q=' + info);
            setTestResult(await response.json());
        } else {
            setTestResult("Пароли не совпадают!");
        }
    }

    function checkIdentity(e) {
        if (e.target.value !== password) {
            setErrorText("Не совпадает");
        } else {
            setErrorText("");
        }
    }

    function checkIsAuth(type) {
        if (type === "tabs") {
            if (isAuth === true) {
                return (
                    <div className="tabs">
                        <div className="activeTab">
                            <p>Авторизация</p>
                        </div>
                        <div className="dormantTab" onClick={() => setIsAuth(false)}>
                            <p>Регистрация</p>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className="tabs">
                        <div className="dormantTab" onClick={() => setIsAuth(true)}>
                            <p>Авторизация</p>
                        </div>
                        <div className="activeTab">
                            <p>Регистрация</p>
                        </div>
                    </div>
                );
            }
        } else {
            if (isAuth === true) {
                return <>
                    <div className="infoBox">
                        <p>Введите логин или Email</p>
                        <input placeholder="Логин" onChange={e => setLogin(e.target.value)} value={login}/>
                    </div>
                    <div className="infoBox">
                        <p>Пароль</p>
                        <input type="password" placeholder="Пароль" onChange={e => setPassword(e.target.value)}
                               value={password}/>
                    </div>
                    <button onClick={() => authentication()}>Войти</button>
                </>;
            } else {
                return <>
                    <div className="infoBox">
                        <p>Придумайте логин</p>
                        <input placeholder="Логин" onChange={e => setLogin(e.target.value)} value={login}/>
                    </div>
                    <div className="infoBox">
                        <p>Введите Email</p>
                        <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)} value={email}/>
                    </div>
                    <div className="infoBox">
                        <p>Придумайте пароль</p>
                        <input type="password" placeholder="Пароль" onChange={e => setPassword(e.target.value)}
                               value={password}/>
                    </div>
                    <div className="infoBox">
                        <p>Повторите пароль</p>
                        <input type="password" placeholder="Пароль" onChange={e => checkIdentity(e)}/>
                        <p>{errorText}</p>
                    </div>
                    <button onClick={() => registration()}>Зарегистрироваться</button>
                </>;
            }
        }
    }

    return (
        <div className="wrapper">
            <div className="outerContent">
                <div className="authRegForm">
                    {checkIsAuth("tabs")}
                    <div className="formContent">
                        {checkIsAuth("content")}
                    </div>
                </div>
                <h1>{testResult}</h1>
            </div>
        </div>
    );
}

export default AuthRegPage;