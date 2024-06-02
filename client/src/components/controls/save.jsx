import React from 'react'
import { HiHeart } from "react-icons/hi";
import classNames from 'classnames';

export default function Save({save}){
    return(
        <div>

         <span><HiHeart className ={classNames(save? 'fill-primary-200' : 'fill-primary-100' ) } /></span>  
            
        </div>
    )
}