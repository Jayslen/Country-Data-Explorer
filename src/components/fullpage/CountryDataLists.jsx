const LiElm = ({text, info, children}) => {
    return (
      <li>
        <h4 className='font-bold text-md inline-block'>{text} :</h4>
        <span className='text-sm'> {info}</span>
        {children}
      </li>
    )
  }

export function List({data}) {
    return (
        <div className='flex flex-col gap-1 md:flex-row md:gap-10'>
        <ul className='flex flex-col gap-1'>
          <LiElm text={'Native Name'} info={data.name}/>
          <LiElm text={'Population'} info={data.population}/>
          <LiElm text={'Region'} info={data.region}/>
          <LiElm text={'Sub Region'} info={data.subregion}/>
          <LiElm text={'Capital'} info={data.capital}/>
        </ul>
        <ul className='flex flex-col gap-1'>
        <LiElm text={'Top Level Domain'} info={data.topLevelDomain}/>
        <LiElm text={'Currencies'} info={data.currency}/>
        <LiElm text={'Languages'} info={data.languages}/>
        </ul>
      </div>
    )
}

export function Borders({data, bgColor}) {
    return (
        <div className='mt-1'>
        <h3 className='font-bold text-lg'>Border:</h3>
        <ul className='flex flex-wrap gap-4'>
          {data.borders?.map((content, index) => {
            return(
              <li className='shadow-xl px-4 py-2 rounded-sm' style={{backgroundColor: bgColor}} key={index}>{content}</li>
            )
          })}
        </ul>
      </div>
    )
}