import React from 'react'

type Props = {
    title: string 
    links: {
        name: string
        url: string 
    }[]
}

export default function FooterLinkComp({title, links}: Props) {
  return (
      <div className='flex items-center flex-col text-center lg:items-start lg:text-start'>
          <p className='font-semibold'>{title}</p>
          <div className="flex  flex-col gap-4 mt-4 text-sm">
              {links.map((el, key) => (
                  <p key={key} className='text-gray-300 text-[13px] cursor-pointer duration-300 hover:text-blue-600'>{el.name}</p>
              ))}
          </div> 
    </div>
  )
}
