import React from 'react';

import {FooterLink} from '../containers'

export const Footer = () => (
    <p>
        Show:
        {' '}
        <FooterLink>ALL</FooterLink>
        {' '}
        <FooterLink>Completed</FooterLink>
        {' '}
        <FooterLink>Open</FooterLink>
    </p>
);