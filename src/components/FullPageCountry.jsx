import { Borders, List } from './fullpage/CountryDataLists'

export function FullPage ({bodyColor, bgColor, country, textColor, goBack }) {
  return (
    <section className='w-screen h-screen absolute grid place-content-center right-0 top-0 px-20' style={{ backgroundColor: bodyColor , color : textColor}}>
      {country?.map(data => {

        return (
          <div className='w-[90vw] h-auto flex flex-col mt-28 md:mt-0 md:flex-row md:justify-center md:gap-20 relative' key={data.name}>

            <figure className='max-w-[400px] relative'>
              <img src={data.flag} alt={data.imageAlt} className='w-full' />
            <button className='absolute -top-14 left-0 px-4 py-2 cursor-pointer transition-all hover:brightness-75' style={{backgroundColor: bgColor}} onClick={goBack}>Go back</button>
            </figure>

            <div className='max-w-[400px] md:w-[500px]'>
            <h2 className='text-3xl font-bold md:mb-3'>{data.name}</h2>
           <List data={data}/>
           <Borders data={data} bgColor={bgColor}/>
            </div>

          </div>
        )
      })}
    </section>
  )
}
