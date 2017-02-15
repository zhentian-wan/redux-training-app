import React from 'react';

import {FooterLink} from '../containers'

export const Footer = () => (
    <p>
        Show:
        {' '}
        <FooterLink filter="SHOW_ALL">ALL</FooterLink>
        {' '}
        <FooterLink filter="SHOW_COMPLETED">Completed</FooterLink>
        {' '}
        <FooterLink filter="SHOW_OPEN">Open</FooterLink>
    </p>
);