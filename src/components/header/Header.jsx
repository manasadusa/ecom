import React from 'react'
import './Header.style.scss'
import {Link} from 'react-router-dom'
const Header=()=>(
    <div className="header">
    <Link className="logo" to="/">
                <ion-icon name="logo-slack" ></ion-icon>
        

     </Link>
         
    <div className="register-section" >
             <div className="reg-content" >
                    <Link className="option" to="/shop">
                        SHOP now</Link>
                    <Link className="option" to="/register">sign in</Link>
                    <Link className="cart"><ion-icon name="cart-sharp"></ion-icon></Link>

             </div>

     </div>
           </div>
)

export default Header;