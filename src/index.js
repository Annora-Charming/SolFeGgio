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
import ThSec1Lesson2 from "./routes/theory/section1/lesson2/thSec1Lesson2";
import ThSec1Lesson3 from "./routes/theory/section1/lesson3/thSec1Lesson3";
import ExSec1 from "./routes/exercises/section1/exSec1";
import ExSec1Lesson1 from "./routes/exercises/section1/lesson1/exSec1Lesson1";
import ExSec1Lesson2 from "./routes/exercises/section1/lesson 2/exSec1Lesson2";
import ExSec1Lesson3 from "./routes/exercises/section1/lesson3/exSec1Lesson3";
import ThSec1Lesson4 from "./routes/theory/section1/lesson4/thSec1Lesson4";
import ThSec1Lesson5 from "./routes/theory/section1/lesson5/thSec1Lesson5";

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
                <Route path="theory/thSec1/thSec1Lesson2" element={<ThSec1Lesson2 />}/>
                <Route path="theory/thSec1/thSec1Lesson3" element={<ThSec1Lesson3 />}/>
                <Route path="theory/thSec1/thSec1Lesson4" element={<ThSec1Lesson4 />}/>
                <Route path="theory/thSec1/thSec1Lesson5" element={<ThSec1Lesson5 />}/>
                <Route path="exercises/exSec1" element={<ExSec1 />}/>
                <Route path="exercises/exSec1/exSec1Lesson1" element={<ExSec1Lesson1 />}/>
                <Route path="exercises/exSec1/exSec1Lesson2" element={<ExSec1Lesson2 />}/>
                <Route path="exercises/exSec1/exSec1Lesson3" element={<ExSec1Lesson3 />}/>
            </Route>
        </Routes>
    </Router>,
    rootElement
);

reportWebVitals();
