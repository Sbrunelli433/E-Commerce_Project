import React from 'react';
import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';

//functional component because no lifecycle methods nor store any state right now.
const HomePage = () => (
    <div className='homepage'>
        <Directory/>
    </div>

);

export default HomePage;