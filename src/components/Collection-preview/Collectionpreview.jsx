import React from 'react'
import CollectionItem from './CollectionItem'
import './collectionpreview.scss'
const Collectionpreview =({title,items})=>(
    <div className="collection-preview">
        <h1>{title}</h1>
            
            {items
            .filter((item,idx)=>idx<4)
            .map(({id,...othercollitemprops}) => (
          <CollectionItem key={id} {...othercollitemprops}/>
        ))}
        

    </div>
)

export default Collectionpreview;