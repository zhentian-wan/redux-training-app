import React from 'react';

export const FetchError = ({message, onRetry}) => (
    <div>
        <span>Cannot fetch list. {message}</span>
        <button onClick={onRetry}>Retry</button>
    </div>
);