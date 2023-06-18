import data from '../mocks/single-country.json'

const LiElm = ({text, info, children}) => {
  return (
    <li>
      <h4 className='font-bold text-lg inline-block'>{text} :</h4>
      <span> {info}</span>
      {children}
    </li>
  )
}


export function FullPage ({ bgColor, country, textColor }) {
  return (
    <section className='w-screen h-screen grid place-content-center absolute right-0 top-0 px-20' style={{ backgroundColor: bgColor , color : textColor}}>
      {data?.map(data => {
        return (
          <div className='w-[90vw] h-[90vh] flex items-center justify-center gap-20'>
            <figure className='w-[400px]'>
              <img src={data.flag} alt={data.imageAlt} className='w-full' />
            </figure>
            <div className='w-[500px]'>
            <h2 className='text-4xl font-bold mb-5'>{data.name}</h2>
            <div className='flex justify-between'>
              <ul className='flex flex-col gap-3'>
                <LiElm text={'Native Name'} info={data.name}/>
                <LiElm text={'Population'} info={data.population.toLocaleString()}/>
                <LiElm text={'Region'} info={data.region}/>
                <LiElm text={'Sub Region'} info={data.subregion}/>
                <LiElm text={'Capital'} info={data.capital}/>
              </ul>
              <ul className='flex flex-col gap-3'>
              <LiElm text={'Top Level Domain'} info={data.topLevelDomain}/>
              <LiElm text={'Currencies'} info={data.currency}/>
              <LiElm text={'Languages'} info={data.languages.join(', ')}/>
              </ul>
            </div>
            <div className='mt-7'>
              <h3 className='font-bold text-lg'>Border:</h3>
              <ul className='flex gap-4'>
                {data.borders.map((content) => {
                  return(
                    <li className='shadow-xl px-4 py-2 rounded-sm' style={{backgroundColor: bgColor}}>{content}</li>
                  )
                })}
              </ul>
            </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
