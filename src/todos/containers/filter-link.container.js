import React from 'react';
import {Link} from '../components'

export const FooterLink = (props) => {
    return (
        <Link name={props.children}></Link>
    )
};