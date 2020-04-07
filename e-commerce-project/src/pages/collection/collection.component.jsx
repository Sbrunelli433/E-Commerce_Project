import React from 'react';
import {connect} from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    //destructure the title and items property off the collection
    const { title, items } = collection;
    return (
    <div className='collection-page'>
        {/*render the title in place of hard coded text in the title of the collection page*/}
        <h2 className='title'>{title}</h2>
            {/*div out the collection items with the className='items' */}
            <div className='items'>
                    {/*BELOW ON LINE 22: map over the items array and render the CollectionItem
                    CollectionItem has a key of the item.id and passing the item property*/}
                    {
                        items.map(item => <CollectionItem key={item.id} item={item}/>)
                    }
            </div>
    </div>
    );
};
//ownProps is the props of the component we're wrapping in the connect
//selectCollection function returns a function (state) that connects everything together
//allows to dynamically change what object we get based on what route we are on
const mapStateToProps = (state, ownProps) => 
    (
        {
            collection: selectCollection(ownProps.match.params.collectionId)(state)
        }
);

export default connect(mapStateToProps)(CollectionPage);