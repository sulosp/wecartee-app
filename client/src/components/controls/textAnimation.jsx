import React, { useEffect, useState } from "react";

export default function TextAnimation() {
    const text = ["favorite", "best-selling", "amazing", "food"];

    const t = text[Math.floor(Math.random() * text.length)];

    const [currentText, setCurrentText] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % text.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1 className="animate-text">{t}</h1>
        </div>
    );
}
