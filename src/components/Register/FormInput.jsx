import React from 'react'
import './FormInput.scss'
const FormInput =({type,placeholder ,label})=>(

<div><label>{label}</label> <input type={type} placeholder={placeholder} className="form-input"/>
</div>

)

export default FormInput;