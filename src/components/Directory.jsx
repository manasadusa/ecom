import React, { Component } from 'react'
import MenuItem from './MenuItem'
import './homepage.style.scss'

export default class Directory extends Component {
    constructor(){
        super();
        this.state={
            items:[
                {
                    title:"MEN",
                    subtitle:"SHOP NOW",
                    imageurl:"https://i.ibb.co/cvpntL1/hats.png",
                    linkUrl: 'shop',
                    id:"1"
                },
                {
                    title:"WOMEN",
                    subtitle:"SHOP NOW",
                    imageurl:"https://i.ibb.co/px2tCc3/jackets.png",
                    linkUrl: '',
                    id:"2"
                },
                {
                    title:"KIDS",
                    subtitle:"SHOP NOW",
                    imageurl:'https://i.ibb.co/0jqHpnp/sneakers.png',
                    linkUrl: '',
                    id:"3"
                },
                {
                    title:"OLD",
                    subtitle:"SHOP NOW",
                    imageurl:'https://i.ibb.co/GCCdy8t/womens.png',
                    size:"large",
                    linkUrl: '',
                    id:"4"
                },
                {
                    title:"BABY",
                    subtitle:"SHOP NOW",
                    imageurl:'https://i.ibb.co/R70vBrQ/men.png',
                    size:"large",
                    linkUrl: '',
                    id:"5"
                }

            ]
        }
    }
    render() {
        return (
            <div className= "directory-menu">
               {this.state.items.map(({id, ...otherprops}) =>  (
   
   <MenuItem  key={id} {...otherprops}/>
   
   
               ))}
            </div>
        )
    }
}
