import React from 'react';

import {FooterLink} from '../containers'

export const Footer = () => (
    <p>
        Show:
        {' '}
        <FooterLink filter="all">All</FooterLink>
        {' '}
        <FooterLink filter="completed">Completed</FooterLink>
        {' '}
        <FooterLink filter="open">Open</FooterLink>
    </p>
);
Footer.displayName = "myFooter";