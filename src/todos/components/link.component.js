import React from 'react';

export const Link = ({ children, active, onLinkClick }) => {
    return (
        <a href="#" style={{
            fontWeight: active ?
                        'bold' :
                        'normal'
        }} onClick={onLinkClick}>
            {children}
        </a>
    );
};