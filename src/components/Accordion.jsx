import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


function Accordion({ title, answer }) {
    const [accordionOpen, setAccordionOpen] = useState(false)
    return (
        <div className='py-2'>
            <button className='flex justify-between w-full' onClick={() => setAccordionOpen(!accordionOpen)}>
                <span className='font-bold'>{title}</span>
                <div>
                    {accordionOpen ? <i className='text-2xl'><FaMinus />
                    </i> : <i className="text-2xl"><FaPlus /></i>}
                </div>
            </button>
            <div className={`grid overflow-hidden transition-all duration-200 ease-in-out text-slate-600 text-sm ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className='overflow-hidden font-semibold text-ms'>{answer}</div>
            </div>
        </div>
    )
}

export default Accordion