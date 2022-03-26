import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ExerciseMainPageGuest from "./routes/exercises/ExerciseMainPageGuest";
import TheoryMainPageGuest from "./routes/theory/TheoryMainPageGuest";
import AuthRegPage from "./routes/AuthRegPage";
import Home from "./components/Home";
import Admin from "./routes/Admin";
import ThSec1 from "./routes/theory/section1/thSec1";
import ThSec1Lesson1 from "./routes/theory/section1/lesson1/thSec1Lesson1";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<Home/>} />
                <Route path="theory" element={<TheoryMainPageGuest/>}/>
                <Route path="exercises" element={<ExerciseMainPageGuest/>}/>
                <Route path="auth" element={<AuthRegPage />}/>
                <Route path="admin" element={<Admin />}/>
                <Route path="theory/thSec1" element={<ThSec1 />}/>
                <Route path="theory/thSec1/thSec1Lesson1" element={<ThSec1Lesson1 />}/>
            </Route>
        </Routes>
    </Router>,
    rootElement
);

reportWebVitals();
