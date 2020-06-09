import React from 'react';
import './Shoppage.style.scss'
import SHOP_DATA from './shopdata.js';

import CollectionPreview from '../Collection-preview/Collectionpreview';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        
 
          
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
        
      </div>
    );
  }
}

export default ShopPage;
