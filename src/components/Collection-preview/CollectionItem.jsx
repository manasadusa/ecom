import React from 'react'
import './CollectionItem.scss'
const CollectionItem=({name,imageUrl,price})=>(
   <div className="col-item">
    <div  style={{backgroundImage:`url(${imageUrl})`,backgroundRepeat:'no-repeat'}} className="image">
       <div className="iconheart"><ion-icon name="heart" className="iconheart"></ion-icon></div>
       </div>
       <div className="image-footer">
        
   <div  >{name}
   </div>
<div>${price}</div>
   </div>
   </div>


)
export default CollectionItem;