import useSound from "use-sound";
import "../App.css"
import sound1 from "../sounds/a6.mp3";
import sound2 from "../sounds/b6.mp3";
import sound3 from "../sounds/blink.mp3";
import sound4 from "../sounds/c7.mp3";
import sound5 from "../sounds/e.mp3";
import sound6 from "../sounds/f6.mp3";
import sound7 from "../sounds/g6.mp3";
import sound8 from "../sounds/rain.mp3";
import sound9 from "../sounds/random.mp3";
import sound10 from "../sounds/still.mp3";
import React from "react";

function MusicalEx(){
    const soundArr = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10];
    const [currentSound, setCurrentSound] = React.useState(sound1);
    const [question, setQuestion] = React.useState("");
    const [answer1, setAnswer1] = React.useState("");
    const [answer2, setAnswer2] = React.useState("");
    const [answer3, setAnswer3] = React.useState("");
    let answers = ["", "", ""];
    let other = "";

    function generate(){
        setQuestion("");
        setAnswer1("");
        setAnswer2("");
        setAnswer3("");

        let ques = soundArr[Math.floor(Math.random()*soundArr.length)];
        setQuestion(ques);
        answers[Math.floor(Math.random()*answers.length)] = ques;
        for (let i = 0; i<3; i++){
            if(answers[i]===''){
                while(answers[i]===''){
                    other = soundArr[Math.floor(Math.random() * soundArr.length)];
                    if(other!==ques){
                        answers[i] = other;
                    }
                }
            }
        }
        setAnswer1(answers[0]);
        setAnswer2(answers[1]);
        setAnswer3(answers[2]);

    }
    const [play] = useSound(
            currentSound,
            {volume: 0.5}
    );

    return(
        <div className="musicalEx">
            <button onClick={()=>{generate()}}>Start</button>
            <div className="question" onClick={()=>{setCurrentSound(question); play()}}>Play</div>
            <div className="answers">
                <div className="answer" onClick={()=>{setCurrentSound(answer1); play()}}></div>
                <div className="answer" onClick={()=>{setCurrentSound(answer2); play()}}></div>
                <div className="answer" onClick={()=>{setCurrentSound(answer3); play()}}></div>
            </div>
        </div>
    )
}
export default MusicalEx