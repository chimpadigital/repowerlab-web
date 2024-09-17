import React from 'react'

export default function ScrollAccordion() {
  return (
    <section className='mt-4 text-[#000] bg-accent h-[400vh] '>
        <div className="grid grid-cols-2 min-h-screen sticky top-0">
            <div className="col-span-1">Col 1</div>
            <div className="col-span-1 bg-[#f00]">Col 2</div>
        </div>
    </section>
  )
}
