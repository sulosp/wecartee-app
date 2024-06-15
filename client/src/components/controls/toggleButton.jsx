import React, { useState } from 'react';
import classNames from 'classnames';

export default function ToggleButton({ 
    iconPrimary, 
    iconSecondary, 
    labelPrimary, 
    labelSecondary, 
    onPrimaryClick, 
    onSecondaryClick 
}) {
    const [isToggled, setIsToggled] = useState(true);
    

    const handlePrimaryClick = () => {
        setIsToggled(true);
        if (onPrimaryClick) onPrimaryClick();
    };

    const handleSecondaryClick = () => {
        setIsToggled(false);
        if (onSecondaryClick) onSecondaryClick();
    };

    return (
        <div className="inline-flex btn-group bg-white p-2.5 rounded-full shadow-inner">

            <button
                type="button"
                className={classNames("inline-flex gap-2 items-center justify-center px-20 py-8 rounded-full w-40", { 'bg-primary-900 text-white shadow-md': isToggled} )}
                onClick={handlePrimaryClick} >
                
                <span>{iconPrimary}</span>
                <span>{labelPrimary}</span>

            </button>

            <button
                type="button"
                className={classNames("inline-flex gap-2 items-center justify-center px-20 py-8 rounded-full w-40", { 'bg-primary-900 text-white shadow-md': !isToggled} )}
                onClick={handleSecondaryClick}
            >
                <span>{iconSecondary}</span>
                <span>{labelSecondary}</span>

            </button>

        </div>
    );
}
