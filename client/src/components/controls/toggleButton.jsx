import React, { useState } from 'react';

export default function ToggleButton({ 
    iconPrimary, 
    iconSecondary, 
    labelPrimary, 
    labelSecondary, 
    onPrimaryClick, 
    onSecondaryClick 
}) {
    const [isToggled, setIsToggled] = useState(false);
    const toggleClass = isToggled ? 'bg-primary-500 text-white' : 'bg-white';

    const handlePrimaryClick = () => {
        setIsToggled(false);
        if (onPrimaryClick) onPrimaryClick();
    };

    const handleSecondaryClick = () => {
        setIsToggled(true);
        if (onSecondaryClick) onSecondaryClick();
    };

    return (
        <div className="inline-flex btn-group">
            <button
                type="button"
                className={`inline-flex gap-2 items-center justify-center ${toggleClass} px-4 py-2 rounded-l-md`}
                onClick={handlePrimaryClick}
            >
                <span>{iconPrimary}</span>
                <span>{labelPrimary}</span>
            </button>
            <button
                type="button"
                className="inline-flex gap-2 items-center justify-center bg-white px-4 py-2 rounded-r-md"
                onClick={handleSecondaryClick}
            >
                <span>{iconSecondary}</span>
                <span>{labelSecondary}</span>
            </button>
        </div>
    );
}
