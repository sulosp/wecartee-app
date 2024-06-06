import React from 'react'
import { SearchBar } from '../controls/search'
import Store from '../buyer/store'
import '../../index.css'

export default function SocialZone() {
    return (
        <div className="flex flex-row w-full h-full">
            <div className="flex basis-2/12 h-full"><SearchBar /></div>
            <div className="flex basis-10/12 h-full overflow-clip"><Store /></div>
        </div>
    )
}
