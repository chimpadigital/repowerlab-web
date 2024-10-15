import React from 'react'

export default function Hero() {
    return (
        <div className="w-full  relative top-[-80px]">
            <div className="w-full relative flex justify-center overflow-hidden h-full min-h-[620px] px-10 rounded-[20px] pt-[100px]">
                <video className='object-cover absolute z-0' autoPlay muted playsInline>
                    <source src="/home/video.mp4" type="video/mp4" />
                    Tu navegador no soporta la reproducción de videos.
                </video>
            </div>
        </div>
    )
}
