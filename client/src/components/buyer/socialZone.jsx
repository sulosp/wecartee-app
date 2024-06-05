import React from 'react'
import { SearchBar } from '../controls/search'
import Store from '../buyer/store'

export default function SocialZone() {

    return (

        <div className="flex flex-row">
            <div className="flex basis-2/12"><SearchBar /></div>
            <div className= "flex basis-10/12"><Store /></div>
        </div>
        



    )
}