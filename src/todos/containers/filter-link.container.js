import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

export let FooterLink = (prop) => {
    console.log("prop:", prop);
    const {filter, active, children} = prop;
    return (

        <label className="filter">
            <input
                type="radio"
                checked={active}
                className="filter__radio"/>
            <Link
                className={`filter__label--${children.toLowerCase()}`}
                to={filter}
                activeStyle={{
                    textDecoration: 'none',
                    color: 'white',
                }}
            >
                <span >{children}</span>
            </Link>
        </label>
    );
};

const mapStateToProps = (state, {filter, params}) => {
    console.log("filter:", filter);
    console.log("params:", params);
    return {
        active: filter === params.filter
    }
};
FooterLink = withRouter(connect(
    mapStateToProps,
    null
)(FooterLink));

FooterLink.propTypes = {
    filter: PropTypes.oneOf([
                                'all',
                                'completed',
                                'open'
                            ]).isRequired,
    children: PropTypes.node.isRequired,
};