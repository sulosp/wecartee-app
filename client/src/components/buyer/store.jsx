import React from 'react'
import { STORE_DATA } from '../../lib/storeData'

export default function Store() {

    return (
        <div className='flex flex-col w-10/12 h-full bg-cover bg-center bg-blend-darken p-50'>

            <div className='relative top-0 w-full inline-flex justify-between items-center'>

            </div>

            {/*//VR img group starting*/}

            <div className='inline-flex overflow-hidden'>
                <img src={STORE_DATA[0].views[0].img} className='w-full' alt='store' />

            </div>
        </div>
    )
}