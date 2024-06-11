import React, { useState, useEffect } from "react";

export default function TextAnimation() {
    const text = [
        "💖 favorite",
        "🍓 specific",
        "📌 nearby",
        "🏝️ local",
        "🔔 new",
        "🔥 trending",
        "👍 recommended",
        "⭐ well-rates",
        "💯 high-quality",
        "📈 popular",
        "👌 unique",
    ];

    const [currentText, setCurrentText] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % text.length);
        }, 1000);
        return () => clearInterval(interval);
    }, [text.length]);

    return (
        <div>
            <h1 className="animate-text text-display-lg text-primary-900 text-center">
                {text[currentText]}
            </h1>
        </div>
    );
}
