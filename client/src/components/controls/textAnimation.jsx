import React from "react";
import {useEffect} from 'react-router-dom';    

export default function TextAnimation() {
    
    const text = [favorite, best - selling, amazing, food];

    const t = text[Math.floor(Math.random() * text.length)];

    const [currentText, setCurrentText] = React.useState(0);
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % text.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [t]);

    return (
        <div>
            <h1 className="animate-text">{text[currentText]}</h1>
        </div>
    );
}