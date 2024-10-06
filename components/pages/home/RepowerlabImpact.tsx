import { subtitle } from '@/components/primitives'
import React from 'react'

export default function RepowerlabImpact() {
    return (
        <div className='px-8'>
            <div className="rounded-[10px] bg-primary py-[100px] flex justify-center">
                <div className="container">
                    <div className="flex justify-between">
                        <h5 className={`${subtitle({ colors: "white" })} max-w-[3300px]`}>RepowerLab's Impact</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
