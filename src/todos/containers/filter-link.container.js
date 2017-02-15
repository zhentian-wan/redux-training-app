import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export const FooterLink = ({ filter, children }) => (
    <Link
        to={filter}
        activeStyle={{
            textDecoration: 'none',
            color: 'black',
        }}
    >
        {children}
    </Link>
);

FooterLink.propTypes = {
    filter: PropTypes.oneOf(['all', 'completed', 'open']).isRequired,
    children: PropTypes.node.isRequired,
};