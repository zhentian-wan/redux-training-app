import React from 'react';

import {FooterLink} from '../containers'

export const Footer = () => (
    <fieldset className="filters">
        <legend className="filters__title">
            Show:
        </legend>
        {' '}
        <FooterLink filter="all">All</FooterLink>
        {' '}
        <FooterLink filter="completed">Completed</FooterLink>
        {' '}
        <FooterLink filter="open">Open</FooterLink>
    </fieldset>
);
Footer.displayName = "myFooter";