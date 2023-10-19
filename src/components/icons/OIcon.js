import React from 'react';

const OIcon = ({ color, height, width }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" fill="none" stroke={color} strokeWidth="20" />
        </svg>
    );
};

export default OIcon;
