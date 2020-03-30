import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item.styles.scss';

//functional component because not holding state
//destructure the title

//pass through ({title, imageUrl, size}) through MenuItem to dynamically change the <div> items
/*putting style={(backgroundImage)} in the div with className dynamically makes styles on the components 
instead of hard coding in each individual image for each component*/

/*need to add white background style for the content. Done in the menu-item.styles.scss
 need to add a hover effect to increase the size of background image and transition the opacity */
const MenuItem = ({title, imageUrl, size, history, linkUrl, match }) => (
    //below links the buttons to the url
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div 
            className ='background-image' 
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'> 
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);