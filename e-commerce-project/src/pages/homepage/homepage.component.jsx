import React from 'react';
import './homepage.styles.scss';

//import Directory as it has the menu-item.component imported
import Directory from '../../components/directory/directory.component';

//functional component because no lifecycle methods nor store any state right now.
const HomePage = ({history}) => (
    <div className='homepage'>
        <Directory history={history}/>
    </div>

);

export default HomePage;