import './App.css';
import React from "react";

function Card() {
    const [name, setName] = React.useState('Card_active')
    return(
        <div className={name} onClick={()=>setName((name === 'Card_active')?'Card_unactive':'Card_active')}>
            <p>Some musical word</p>
        </div>
    );
}
export default Card