import React from 'react'
import SaveWidget from './saveWidget'

export default function SavedBusinesses() {
    return (
        <div className="flex gap-10 flex-col justify-start items-center max-h-screen  p-24 bg-surface-100 w-full ">

            <div className='w-full'><SaveWidget /></div>


            <div className='inline-flex w-full justify-between items-start '>
                <div className='flex flex-col justify-start gap-0'>
                    <span className="text-primary-400 text-headline-sm">Saved Businesses</span>
                    <span className="text-primary-400 text-body-md font-light gap-1 ">20 Businesses</span>

                </div>
            </div>

        </div>
    )
}