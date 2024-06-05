import React from 'react'

export default function Store(){

    return (
        <div className='flex flex-col w-10/12 h-full bg-cover bg-center bg-blend-darken p-50'>

            <div className='relative top-0 w-full inline-flex justify-between items-center'>

            </div>

         {/*//VR img group starting*/} 

        <div className='inline-flex overflow-hidden'>
            <img src={`${process.env.PUBLIC_URL}/assets/store/storeView.png`} alt='store'/>
        </div>
        </div>
    )
}