import React from 'react';
import {connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

//import the MenuItem
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

//needs to be a class component to store state value of menu items

const Directory = ({ sections }) => (
    /*this allows the menu-item.component.jsx to dynamically populate the array items to the 
    menu-item.component as it is imported in*/
    <div className='directory-menu'>
        {
            sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps}/>
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);