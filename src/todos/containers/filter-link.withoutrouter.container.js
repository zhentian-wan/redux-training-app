import React from 'react';
import { connect } from 'react-redux';
import { Link } from '../components'
import { setVisibilityFilterAction } from '../../actions';

/*
* For Link component, the only props it needs to know is whether the
* current link should be achieved or not.
* */
const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

/*
* Once click on the link,  we can dispatch an action
* to set visibility filter.
* */
const mapDispatchToProps = (dispatch, ownProps) => ({
    onLinkClick: () => {
        dispatch(
            setVisibilityFilterAction(ownProps.filter)
        )
    }
});

export const FooterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);