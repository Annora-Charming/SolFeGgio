import React from "react";
import './App.css';

function Exercise(){
    const [question, setQuestion]=React.useState('');
    const [a1, setA1]=React.useState('');
    const [a2, setA2]=React.useState('');
    const [a3, setA3]=React.useState('');
    let answers=['', '', ''];
    const mass = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

    function generator(){
        let correct, other = '';
        answers=['', '', ''];
        setQuestion('');
        setA1('');
        setA2('');
        setA3('');

        correct = mass[Math.floor(Math.random() * 7)];
        setQuestion(correct);
        answers[Math.floor(Math.random()*3)] = correct;
        for (let i = 0; i<3; i++){
            if(answers[i]===''){
                while(answers[i]===''){
                    other = mass[Math.floor(Math.random() * 7)];
                    if(other!==correct){
                        answers[i] = other;
                        console.log("if_correct_worked")
                    }
                    console.log("while_end")
                }
                console.log("if_end")
            }
            console.log("for_end")
        }
        setA1(answers[0]);
        setA2(answers[1]);
        setA3(answers[2]);
    }

    function check(a){
        if(a===question){
            alert("You're right");
        }
        else{
            alert("WRONG");
        }
    }

    return(
        <div className="Exercise">
            <button onClick={()=>generator()}>Start</button>
            <div className="question">
                <h2>{question}?</h2>
            </div>
            <div className="answers">
                <div className="answer" onClick={()=>check(a1)}>
                    <p>{a1}.</p>
                </div>
                <div className="answer" onClick={()=>check(a2)}>
                    <p>{a2}.</p>
                </div>
                <div className="answer" onClick={()=>check(a3)}>
                    <p>{a3}.</p>
                </div>
            </div>
        </div>
    )
}
export default Exercise