import { useState, useRef } from 'react'

function LiElm ({ name, handleClick }) {
  return (
    <li className='hover:bg-[#1a2128]' data-region={name} onClick={handleClick}>
      {name}
    </li>
  )
}

export function Filter ({ update, color }) {
  const [menu, setMenu] = useState(false)
  const region = useRef('Filter by region')

  const handleClick = (event) => {
    region.current = event.target.attributes[1].value
    update(region.current)
  }

  return (
    <>
      <div
        className='w-36 px-4 py-2 rounded-sm relative cursor-pointer'
        style={{ backgroundColor: color }}
        onClick={() => {
          setMenu(!menu)
        }}
      >
        <p className='text-center'>{region.current}</p>
        <ul
          className={` absolute w-full top-12 left-0 rounded-sm [&>li]:p-3 [&>li]:cursor-pointer ${
            menu ? 'block' : 'hidden'
          }`}
          style={{ backgroundColor: color }}
        >
          <LiElm name='All' handleClick={handleClick} />
          <LiElm name='Americas' handleClick={handleClick} />
          <LiElm name='Europe' handleClick={handleClick} />
          <LiElm name='Oceania' handleClick={handleClick} />
          <LiElm name='Asia' handleClick={handleClick} />
          <LiElm name='Africa' handleClick={handleClick} />
        </ul>
      </div>
    </>
  )
}
